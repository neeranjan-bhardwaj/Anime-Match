import type {Response,Request} from "express";
import { pool } from "./DataBases";

export async function Get(req:Request,res:Response){
    try{
        const [row]=await pool.query('SELECT * FROM anime');
        res.json({
            message: row
        })
    }catch(e){
        console.log(e);
        res.json({
            message: "Internal Server Error"
        })
    }
}

export async function post(req:Request,res:Response){
    try{
        const Body=req.body
        if(!(Body.id&&Body.name&&Body.rating)) throw new Error("Error can not find id or name or rating");
        const query=`INSERT INTO anime (id,name,rating) VALUES (?,?,?)`;
        const row=await pool.query(query,[Body.id,Body.name,Body.rating]);
        console.log(row);
        res.json({
            message: "Add Sussesfully"
        })
    }catch(e){
        console.log(e);
        res.json({
            message: "Error"
        })
    }
}

export async function patch(req:Request,res:Response){
    res.json({
        message: "Patch"
    })
}

export async function Delete(req:Request,res:Response){
    try{
        const Body=req.body
        if(!(Body.id||Body.name))throw new Error("Error can not find id or name");
        const query=`DELETE FROM anime WHERE id=? OR name=?`;
        const [row]=await pool.query(query,[Body.id,Body.name]);
        res.json({
            message: "Delete Sussesfully"
        })
    }catch(e){
        console.log(e);
        res.json({
            message: "Error"
        })
    }
}