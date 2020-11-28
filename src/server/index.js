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

//setup basic URL for Meaning Cloud
const getURL = async (isURL, currentInput) => {
    const prefixURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const meanCloud_API_KEY = process.env.API_KEY;
    const suffixURL = isURL == true ? "&url=" : "&txt=";
    const endURL = "&lang=en";
    const finalURL = `${prefixURL}${meanCloud_API_KEY}${suffixURL}${currentInput}${endURL}`
    console.log(finalURL)
return finalURL

}


const getMCData = async (req,res) => {
    // console.log( "**** URL we're using ****", URL);
    const isURL = req.body.URL
    const currentInput = req.body.currentInput
    const prefixURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const meanCloud_API_KEY = process.env.API_KEY;
    const suffixURL = req.body.URL ? "&url=" : "&txt=";
    const endURL = "&lang=en";
    const finalURL = `${prefixURL}${meanCloud_API_KEY}${suffixURL}${currentInput}${endURL}`
    res = await fetch(finalURL)
    // console.log("res is ",res)
    try {
        const data = await res.json();
             console.log("Data returned in getMCData; ",data);
        return data;
        // res.send(data)
    } catch(error) {
        console.log('Data error on Meaning Cloud :', error);
        return error
    }
    // return error;
    }
// function getURL() {
//     return `https://api.meaningcloud.com/sentiment-2.1?key=${meanCloud_API_KEY}&txt=${txtToTest}&lang=en`
// }
// function getURL() {
//     return `https://api.meaningcloud.com/sentiment-2.1?key=${meanCloud_API_KEY}&url=${urlToAnalyse}&lang=en`
// }
// async function getData() {
//     const dataReturned = await getMeanCloud(getURL());
//     console.log("getData function returned data: ", dataReturned);
//     return dataReturned;
// }

///function 
const getData = async (URL) =>  {
    const dataReturned = await getMCData(URL)
    // console.log("getData function returned data:", dataReturned);
    return dataReturned
}

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    getData()
        .then(function(data) {
            // processRequest(data)
            res.send(data)
        })  
})




app.post('/process', processRequest)


function processRequest(req, res) {
    // console.log("processRequest URL",req.body.URL, req.body.currentInput)
    // console.log("URL is", getURL(req.body.URL, req.body.currentInput))
    getMCData(req,res)
    // getResults(req, res)
    .then(function(data) {
        res.send(data)
        console.log("data in processRequest",data)
    });

    // res.send(data)s
}



// const getResults = async (req, res) => {
async function getResults(req,res){
    // const newRequest = {URL, currentInput} = req.body
    // console.log("input is from processRquest", newRequest.URL== false ? "text" | "URL")
    const isURL = req.body.URL
    const currentInput = req.body.currentInput
    const prefixURL = "https://api.meaningcloud.com/sentiment-2.1?key="
    const meanCloud_API_KEY = process.env.API_KEY;
    const suffixURL = isURL == true ? "&url=" : "&txt=";
    const endURL = "&lang=en";
    const finalURL = `${prefixURL}${meanCloud_API_KEY}${suffixURL}${currentInput}${endURL}`
    console.log(finalURL)
    res = await getMCData(finalURL)
    try {
        const dataReturned = res
        console.log("DataReturned in getResults()", dataReturned)
        return res
    } catch(error) {
        console.log("data error on handling", error)
    }
    // .then(function(res)j {
    //     const returnedData = getMcData(res)
    }


// function processRequest(req, res){
//     // console.log("req.body->Text to process via MC", req.body)
//     const newRequest = {URL, currentInput} = req.body
//     console.log("Input is ", newRequest.URL == false ? "text" : "URL")

//     getURL(newRequest.URL, newRequest.currentInput)
//     .then(function(data) {
//         const returnedData = getMCData(data)
//         console.log("returnedData in processRequest function",returnedData)
//     })
//     .then(function(returnedData){
//         res.send(returnedData)
//         console.log("res.send console",returnedData)
//     })
// }          

        // const returnedData = getMCData(URL))

    // console.log("newRequest", newRequest.URL, newRequest.currentTextInput)
    // console.log("req.body->Text to process via MC", req.body.URL, req.body.data)



// function processRequest(req, res){
//     const newRequest = {} = req.body
//     getData()
//     .then(function(data) {
        
//     })
//     .then(function(data){
//         dataCollected.push({newRequest: data, dataReturned: data})
//     })
//     // .then(dataCollected.push(newRequest)
//     // .then(dataCollected.push('newRequest':newRequest)
//     // , 'dataReturned':data))
//     console.log("Current dataCollected ->", newRequest)
// }




// {
//     getData()
//     .then(function(data) {
//         res.send()
//     })
// })