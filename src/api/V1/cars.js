const express = require('express');
const mysql = require("mysql2/promise");
const joi = require('joi');
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

router.post('/add', async (req,res) =>{


    // ikelti masina
    console.log('we got data to create car', req.body)
    // validate
    const newCarSchema = joi.object({
        title: joi.string().min(3).max(50).required(),
        price: joi.string().min(3).max(50).required(),
        image: joi.string().min(3).max(400).required(),


});
    let formValid = false;
    try{
        const validationResult = await newCarSchema.validateAsync(req.body, {abortEarly: false,})
        // res.send({msg: "inputs valid", validationResult})
        formValid = true;
    } catch(err){
        formValid = false;
        console.log('err',err)
        res.status(400).send({error: "please check inputs", err: err.details.map((m) => m.message),
        });
    }
    if(!formValid) return;
    try {
        // irasom i db su sql
        const conn = await mysql.createConnection(dbConfig)
        const sql = 'INSERT INTO cars (title, price, image) VALUES(?,?,?) ';
        const [result] = await conn.execute(sql, Object.values(req.body));
        res.send({msg: 'car added'})
        await conn.end();
    } catch (error) {
        res.status(500).send({msg: 'something went wrong'});
    }
    // res.send({msg: 'trying to add a car'})
});

router.delete('/:id', (req,res)=>{
    //istrinti masina
});
module.exports = router;
