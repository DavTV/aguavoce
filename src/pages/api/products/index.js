import { pool } from "@/config/db";
export default async  function handle(req,res){
        const [result] =  await pool.query(`SELECT * FROM products`)
        return res.status(200).json(result)
  
}