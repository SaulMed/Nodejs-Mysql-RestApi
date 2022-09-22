import {pool} from '../db.js';

export const pong = async (req,res)=>{
    res.json({status: "Pong"});
};