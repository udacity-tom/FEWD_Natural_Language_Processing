const dotenv = require('dotenv');
dotenv.config();
const dataCollected = [];
var path = require('path')
const https = require('follow-redirects').https
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch')

const meanCloud_API_KEY = process.env.API_KEY;
const txtToTest = "People are planning to drive more in future than they did before the coronavirus pandemic, a survey suggests, even though the overwhelming majority accept human responsibility for the climate crisis. The apparent disconnect between beliefs and actions raises fears that without strong political intervention, these actions could undermine efforts to meet the targets set in the Paris agreement and hopes of a green recovery from the coronavirus crisis. Approximately 26,000 people in 25 countries were polled in July and August by the YouGov-Cambridge Globalism Project, in a survey designed with the Guardian. By a ratio of more than three to one, the respondents agreed humankind was mainly or partly to blame for the climate emergency. This widespread acknowledgement of the science is likely to strengthen calls for more ambitious international efforts to reduce industrial and agricultural emissions of carbon dioxide and other greenhouse gases that are intensifying global heating and extreme weather events, such as storms, floods and droughts."

const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.text())
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const getMCData = async (URL) => {
    // console.log( "**** URL we're using ****", URL);
    const res = await fetch(URL)
    // console.log("res is ",res)
    try {
        const data = await res.json();
        // await console.log("Data returned in fetch; ",data);
        return data;
    } catch(error) {
        console.log('Data error on Meaning Cloud :', error);
    }
    return res.json();
    }


function getURL() {
    return `https://api.meaningcloud.com/sentiment-2.1?key=${meanCloud_API_KEY}&txt=${txtToTest}&lang=en`

}

// async function getData() {
//     const dataReturned = await getMeanCloud(getURL());
//     console.log("getData function returned data: ", dataReturned);
//     return dataReturned;
// }


///function 




const getData =  async () =>  {
    const dataReturned = await getMCData(getURL())
    // console.log("getData function returned data:", dataReturned);
    return dataReturned
}

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const port = 8081;
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

// app.post('/process', processRequest);

// function processRequest(req, res){
//     console.log("req.body", req.body)
// }


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