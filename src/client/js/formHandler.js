function handleSubmit(event) {
    event.preventDefault()
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }
    const errURL = {
        status: {
            code: "998",
            msg: "URL Problem, please check your input."
        }
    }

    //postdata submission using json encoding!!
const postData = async (url = '', data= {}) => {
    //Clears errror and results
    clearUI()
    // console.log("in postData", data, JSON.stringify(data))
    const response = await fetch('http://localhost:8081'+url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            // 'Content-Type': 'text/plain',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();//NOTE: v. important! wrt server config for json encoding
        return newData;
    } catch(error) {
        console.log("error",error);
    }
}
    console.log("::: Form Submitted :::")
    
// check what text was put into the form field
//check what data type was entered //true->URL false->Text
const processInput = async () => {
    const currentInput = document.getElementById("inputAreaType")
    const inputToAnalyse = document.getElementById( (currentInput.checked ? "url" : "text"))
    if(currentInput.checked){
        if(!checkURLInput(inputToAnalyse.value)){
            notifyError(errURL)
            return
        }
        console.log("URL valid!")
    }
    const returnedData = await postData('/process',{URL:currentInput.checked,currentInput:inputToAnalyse.value});
    return returnedData    
}

//updates the Ui with the server response of Meaning Cloud analysis on user input
function updateUI(data){
    for(let element in ui){
        document.getElementById(ui[element]).innerHTML = data[ui[element]]
    }
}

function checkURLInput(inputToCheck) {
    const regExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
    if(regExp.test(inputToCheck)){
        console.log("Domain is valid!")
        return true
    }
    console.log("Domain is INVALID!")
    return false 
}


function notifyError(data){
    const error = document.getElementById("error")
    error.innerHTML = "There was an error. Error Code "+data.status.code+" : "+data.status.msg+". Please try again.."
    error.style.cssText = "display:block; font-size:2em;"
}

function clearUI(index){
    for(let element in ui)
    document.getElementById(ui[element]).innerHTML = ""
    document.getElementById("error").style.display = "none"
}

//function to steer js actions on submission
function processClick() {
    const getResults = async () => {
        const returnedData = await processInput()
        return returnedData
    }
    getResults()
    .then(function(data) {
        // if(!data)return
        if(data.status.code !="0"){
            notifyError(data)
        } else {
            notifyError(errURL)
        }
    updateUI(data,0)
    })
}

//starts the handling process
processClick();   
}

export { handleSubmit }