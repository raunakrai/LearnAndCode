const express = require("express");
const app = express();
const port = 3000;
const router = require('./routes/getCarbonFootprint')

app.use('/emails', router)

app.listen(port, ()=>
{
    console.log(`app is running on port ${port}`);
})