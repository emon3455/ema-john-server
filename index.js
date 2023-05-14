const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("john is busy on shopping");
})

app.listen(port , ()=>{
    console.log(`ema john server is running on port: ${port}`);
})