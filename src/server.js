const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mysql = require('mysql2/promise');
const dbConfig = require('./dbConfig');

//routes

const carsRoute = require('./api/V1/cars')



const PORT = process.env.SERVER_PORT || 3000;

const app = express();


app.use('/car', carsRoute)
// middleware
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
   try{
      const conn = await mysql.createConnection(dbConfig)
      res.send({msg: 'connected'})
      await conn.end()
   } catch (error){
      console.log('/got error', error.message)
      res.status(500).send(`something is wrong on port ${PORT}`)
   };
   res.send('hello world')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
