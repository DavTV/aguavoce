import { pool } from "@/config/db";
export default async  function products(req,res){
        // console.log(req.method)
        const [result] =  await pool.query(`SELECT * FROM products`)
        return res.status(200).json(result)
  
}