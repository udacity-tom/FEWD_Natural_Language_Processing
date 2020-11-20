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

const txtToTest2 ="Sweaty Rudy Giuliani suffers hair malfunction in latest bizarre press conference On 7 November, the day the presidential election was called for Joe Biden, former New York mayor turned Trump attorney Rudy Giuliani addressed the media at a landscaping company between a sex shop and a crematorium on Philadelphia’s industrial fringe. For two weeks, as the Trump campaign continued to claim without evidence that the election had been stolen, America wondered if Giuliani could possibly ever top that."

// On 7 November, the day the presidential election was called for Joe Biden, former New York mayor turned Trump attorney Rudy Giuliani addressed the media at a landscaping company between a sex shop and a crematorium on Philadelphia’s industrial fringe. For two weeks, as the Trump campaign continued to claim without evidence that the election had been stolen, America wondered if Giuliani could possibly ever top that. On Thursday, he gave it a damned good try. A day after his claims of massive voter fraud fell flat in a Pennsylvania court room, Giuliani staged another press conference, this time in slightly more salubrious surrounds, at Republican National Committee headquarters in Washington DC. But it did not go well. First, while claiming Republican poll observers had been kept too far away from ballot counters in Philadelphia, a key Trump claim in a vital state which like others fell to Biden, Giuliani attempted to recite a scene from My Cousin Vinny, an Oscar-winning comedy from 1992."



// \"Did you all watch My Cousin Vinny? You know the movie? It’s one of my favorite law movies, because he comes from Brooklyn,\" he said. Giuliani, who also comes from Brooklyn, tried to sum up a key plot point from Jonathan Lynn’s film, in which Joe Pesci’s personal injury lawyer, hitherto out of his depth in a murder trial, manages to discredit a key witness by proving her vision to be impaired. \"And when the nice lady said she saw \…\" Giuliani said, switching into a very rough approximation of Pesci’s Brooklyn accent. \"And then he says to her, ‘How many fingers do I \… How many fingers do I got up? And she says three. Oh, she was too far away to see it was only two. \"These people \[the poll observers\] were further away than My Cousin Vinny was from the witness. They couldn’t see a thing,\" he added, apparently drawing a line between the movie scene and claims about the problems faced by poll observers in Philadelphia. So far, so predictably surreal. But things got stickier. Rudy Giuliani offered a balanced presentation: both sides of his face sported dark streaks. Rudy Giuliani offered a balanced presentation: both sides of his face sported dark streaks. Photograph: Drew Angerer\/Getty Images. As Giuliani sweated in front of journalists, streaks of what appeared to be dark hair dye began to run down his face. The internet noticed, of course, and jokes and ridicule spread. Worse still for the Trump campaign, the audio feed from the press conference suddenly included unknown persons asking \"Can they hear us on the stream?\" and discussing \"Rudy’s hair dye dripping down his face\". Eventually, the feed was taken down. But Giuliani is nothing if not a trooper for Trump. After mopping back the tarry rivulets, he raised his voice to make his point to the reporters in the room. \"I don’t know what you need to wake you up, to do your job and inform the American people, whether you like it or not, of the things they need to know!\" he said. \"This is real! It’s not made up! There’s nobody here who engages in fantasies.\" After the former mayor stood back, continuing to mop his forehead, Trump lawyer Sidney Powell took over the offensive. She claimed to have identified \"massive influence of communist money through Venezuela, Cuba and likely China in the interference with our elections here in the United States\". By that point, the unsubstantiated claim barely seemed bizarre."

const urlToAnalyse="https://www.theguardian.com/us-news/2020/nov/19/rudy-giuliani-dye-my-cousin-vinny-press-conference"


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


// function getURL() {
//     return `https://api.meaningcloud.com/sentiment-2.1?key=${meanCloud_API_KEY}&txt=${txtToTest}&lang=en`
// }

function getURL() {
    return `https://api.meaningcloud.com/sentiment-2.1?key=${meanCloud_API_KEY}&url=${urlToAnalyse}&lang=en`
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