import { pool } from "@/config/db";
export default async function  user(req,res){
    const number= req.body.number;
    const amount= req.body.amount;
    const data= req.body.data;
    // console.log(req.body)
    const [result] =  await pool.query(`SELECT * FROM users where number = ${number}`);
    // console.log(result)
    
    if(result.length>0){
        const id_user = result[0].id;
        // console.log(id_user,result);
        const [InserttSales] =  await pool.query(`INSERT INTO sales SET ?`, {
            id_user,
            amount
        });
       if(InserttSales.affectedRows>0){
            const id_sales = InserttSales.insertId;
            data.map(async(product)=>{
                const id_product = product.id;
                const [product_x_sales] =  await pool.query(`INSERT INTO product_x_sales SET ?`,{id_product,id_sales    })
                console.log(product_x_sales)
                let rowAffect = product_x_sales.affectedRows || 0;
                return res.status(200).json(rowAffect);
            });
       }
    }else{
        return res.status(200).json({exito:false});
    }   
}