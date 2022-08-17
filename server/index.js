const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')

const app = express()

dotenv.config({ path: '.env '})

app.listen(8000, "localhost", () {
    console.log("listening on localhost:8000");
})
