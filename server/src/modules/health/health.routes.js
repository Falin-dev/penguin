import {Router} from "express";
import pool from "../../config/database.js";
const router = Router();

router.get("/",async (req,res)=>{
    try{
        const result = await pool.query("SELECT NOW()");

        res.json({
            server: "OK",
            database : "OK",
            time: result.rows[0].now
        })
    }
    catch(e){
        res.status(500).json({
            server:"OK",
            database:"error"
        });
    }
})

export default router