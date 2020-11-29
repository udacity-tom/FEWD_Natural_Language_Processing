const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const https = require('follow-redirects').https
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')
const port = 8081;

const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())

//function to fetch data for input from Meaning Cloud
const getMCData = async (req,res) => {
    const currentInput = req.body.currentInput
    const prefixURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const meanCloud_API_KEY = process.env.API_KEY;
    const suffixURL = req.body.URL ? "&url=" : "&txt=";
    const endURL = "&lang=en";
    const finalURL = `${prefixURL}${meanCloud_API_KEY}${suffixURL}${currentInput}${endURL}`
    console.log("Requesting Data from Meaning Cloud")
    res = await fetch(finalURL)
    try {
        const data = await res.json();
             console.log("Data has been returned from Meaning Cloud.");
        return data;
    } catch(error) {
        console.log('Data error from Meaning Cloud :', error);
        return error
    }
}

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Meaning Cloud NLP app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    getData()
        .then(function(data) {
            res.send(data)
        })  
})

app.post('/process', processRequest)

function processRequest(req, res) {
    console.log("Data request received from client.")
    getMCData(req,res)
    .then(function(data) {
        res.send(data)
        console.log("Data has been sent to client.")
    });
}

