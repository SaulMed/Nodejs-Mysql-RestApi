import {pool} from '../db.js';

export const pong = async (req,res)=>{
    const [r] = await pool.query("SELECT 1+5 AS resultado")
    res.send(r[0]);
};