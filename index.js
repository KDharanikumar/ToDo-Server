require ('dotenv').config();
const express = require ('express');
const db = require ('./db/connect');
const cors = require('cors');
const Todolist = require('./route/Itemlistroute')

const app = express();
app.use(cors());

db();

app.get ('/',(req,res) =>{
    res.send('Welcome Dharan')
});

app.use(express.json());

app.use('/',Todolist)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`)
});