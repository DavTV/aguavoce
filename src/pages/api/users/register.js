import { pool } from "@/config/db";
export default async function  user(req,res){
    
    console.log(req.body)
    if(req.body){
        const number= req.body.number;
        const name= req.body.name;
        const lastname= req.body.lastName;
        const [result] =  await pool.query(`INSERT INTO users SET ?`, {
            number,
            name,
            lastname
        });
        if(result.affectedRows>0){

                return res.status(200).json({exito:true});
       }

    }else{
        return res.status(200).json({exito:false});

    }

}