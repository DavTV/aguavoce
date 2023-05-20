import { pool } from "@/config/db";
export default async  function handle(req,res){
    const id = req.query.id;
    // console.log(id);
    const [result] =  await pool.query(`SELECT * FROM products WHERE id = ${id}`)
    // console.log(result)
    return res.status(200).json(result)
}