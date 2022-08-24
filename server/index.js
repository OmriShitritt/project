const express = require("express")
const mongoose = require("mongoose")
const dotenv = require('dotenv')

const productRouter = require("./routes/productRoutes");

const app = express();

app.use(express.json()); //מוסיף req.body
app.use("/products", productRouter);

dotenv.config({ path: '.env' });//משתנה סביבה
//מתחברים לDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('connected to mongo'))
    .catch(err => console.log(err))

const port = process.env.PORT;
const url = process.env.SERVER_URL;

app.listen(port, url, () => {
    console.log(`listening on ${url}: ${port}`);
})
