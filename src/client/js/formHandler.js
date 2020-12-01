function handleSubmit(event) {
    event.preventDefault()
    console.log("event",event)
    // const arrOfElements = Array.from(event.target.elements)
    // console.log("arrOfElements", arrOfElements)
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }
    const errURL = {
        status: {
            code: "998",
            msg: "URL Problem, please check your input and add either http:// or https://"
        }
    }

//postdata submission using json encoding!!
const postData = async (url = '', data= {}) => {
    //Clears error and results
    Client.clearUI()
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
        if(!Client.checkURLInput(inputToAnalyse.value)){
            Client.notifyError(errURL)
            return
        }
        console.log("URL valid!")
    }
    const returnedData = await postData('/process',{URL:currentInput.checked,currentInput:inputToAnalyse.value});
    return returnedData    
}

//function to steer js actions on submission, check for errors at input and on submission
function processClick() {
    const getResults = async () => {
        const returnedData = await processInput()
        return returnedData
    }
    getResults()
    .then(function(data) {
        // if(!data)return
        if(data != undefined){
            if(data.status.code !="0"){
                Client.notifyError(data)
            }
        } else {
            return
        }
        Client.updateUI(data)
    })
}

//starts the handling process
processClick();   
}

export { handleSubmit }
