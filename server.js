const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.use('/news', (req,res)=> {
    axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=30aba0364ea24b4ebce7366e8d20339d').then(function(response){
        const articles = response.data.articles;
        res.send({articles:articles})
    }).catch(function(error){
        console.log(error)
    })
});

app.listen(port, () => {
    console.log(`express is running on http://localhost:${port}/`)});