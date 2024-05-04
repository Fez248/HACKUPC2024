"use client"
import { sql } from '@vercel/postgres';


export default function createPage() {
    
    const executeSql = async () => {
        await sql`CREATE TABLE routes (id serial PRIMARY KEY, name text);`;
     }
    
    
    return (
        <>
            <h1 className="text-5xl font-bold pb-8 pl-1">YOW</h1>
            <button onClick={executeSql}>Create Table</button>
        </>
    )
}