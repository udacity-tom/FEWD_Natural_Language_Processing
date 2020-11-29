function handleSubmit(event) {
    event.preventDefault()
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }

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
        const newData = await response.json();//NOTE: v. important! wrt server config
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
    const inputToAnalyse = document.getElementById( (currentInput.checked ? "url" : "text") )
    const returnedData = await postData('/process',{URL:currentInput.checked,currentInput:inputToAnalyse.value});
    return returnedData    
}

//updates the Ui with the server response of Meaning Cloud analysis on user input
function updateUI(data){
    for(let element in ui){
        document.getElementById(ui[element]).innerHTML = data[ui[element]]
    }
}

function notifyError(data){
    const error = document.getElementById("error")
    error.innerHTML = "There was an error. Error Code "+data.status.code+". Please try again"
    error.style.cssText = "display:block; font-size:2em;"
    // setTimeout(error.style.display="none",3000)
}

function clearUI(index){
    for(let element in ui)
    document.getElementById(ui[element]).innerHTML = ""
    document.getElementById("error").style.display = "none"
}

//function to steer js actions on submission
function processClick() {
    // updateUI(data,1)
    const getResults = async () => {
        const returnedData = await processInput()
        return returnedData
    }
    getResults()
    .then(function(data) {
        if(data.status.code !="0"){
            notifyError(data)
        }
    // clearUI()
    updateUI(data,0)
    })
}

//starts the handling process
processClick();   
}

export { handleSubmit }