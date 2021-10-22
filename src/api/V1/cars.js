const express = require('express');
const mysql = require("mysql2/promise");
const dbConfig = require("../../dbConfig");

const router = express.Router();

router.get('/', async(req,res)=>{
   // gautis visas masinas
    try{
        const conn = await mysql.createConnection(dbConfig)
        const [result] = await conn.query('SELECT * FROM cars')
        res.send({msg: 'got cars', result})
        await conn.end()
    } catch (error) {
        console.log('/got error', error.message)
        res.status(500).send(`Error getting cars`)
    };



});

router.post('/add', (req,res) =>{


    // ikelti masina
});

router.delete('/:id', (req,res)=>{
    //istrinti masina
});
module.exports = router;
