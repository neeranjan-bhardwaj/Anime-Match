import type {Response,Request } from "express";
import { pool } from "./DataBases";

export async function Get(req:Request,res:Response){
    const result=await pool.query('SELECT * FROM anime');
    res.json({
        data: result[0],
    });
}

export async function post(req:Request,res:Response){
    
}

export async function patch(req:Request,res:Response){
    res.json({
        message: "Get"
    })
}

export async function Delete(req:Request,res:Response){
    res.json({
        message: "Get"
    })
}