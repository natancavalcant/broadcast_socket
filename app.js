const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(helmet()); 
app.use(express.json()); 
app.use(morgan('dev'));

app.get('/', (req, res)=> res.send("Socket on"))

module.exports = app;