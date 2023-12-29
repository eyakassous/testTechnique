const express = require("express");
const app = express();
const router = require("./routes");
const mongoose = require('mongoose');
const port = 5000;

app.use(express.json());
app.use("/", router)
mongoose.connect("mongodb://127.0.0.1:27017/crudMatiere");

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

