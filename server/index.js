const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: './.env'})

mongoose
    .connect(process.env.MONGO_URI)
    .then(_ => console.log("connected to mongo")) //אם אין שום שגיאה תדפיס שאתה מחובר
    .catch(err => console.log(err)); //ברגע שיש שגיאה תדפיס את השגיאה

const port = process.env.PORT;
const url = process.env.SERVER_URL;

app.listen(port, url, () => {
    console.log(`listening on ${url}:${port}`);
});


