
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(express.json());

const postsRoute = require('./routes/posts');
const getsRoute = require('./routes/gets');


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, ()=> console.log("DB CONNECTION UP"))
//const port = process.env.PORT || 3000 
app.listen(3000, ()=> console.log(`Listening  `))