const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoute = require("./routes/product");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DBConnection Succesfull!"))
    .catch((err) => {
        console.log(err);
    });
    app.use(express.json());
    app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend Server is running!");
});
