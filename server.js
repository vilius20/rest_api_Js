require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Prisijungta'));

app.use(express.json());

const infoRouter = require('./routes/info');
app.use('/info', infoRouter);

app.listen(3000, () => console.log('Sever Started'));
