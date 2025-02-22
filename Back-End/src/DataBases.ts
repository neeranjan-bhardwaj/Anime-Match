import mysql from 'mysql2';

export const pool = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Neer5114r',
    database:'myDB'
}).promise();
