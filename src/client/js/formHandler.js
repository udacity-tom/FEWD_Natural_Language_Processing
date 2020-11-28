function handleSubmit(event) {
    event.preventDefault()

//postdata submission using json encoding!!
const postData = async (url = '', data= {}) => {
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
        console.log(newData)
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
    document.getElementById("agreement").innerHTML = data.agreement
    document.getElementById("confidence").innerHTML = data.confidence
    document.getElementById("irony").innerHTML = data.irony
    document.getElementById("subjectivity").innerHTML = data.subjectivity
}

function notifyError(data){
    document.getElementById("error").innerHTML = "There was an error. Error Code "+data.status.code
}

//function to steer js actions on submission
function processClick() {
    const getResults = async () => {
        const returnedData = await processInput()
        return returnedData
    }
    getResults()
    .then(function(data) {
        if(data.status.code !="0"){
            notifyError(data)
        }
    updateUI(data)
    })
}

//starts the handling process
processClick();   
}

export { handleSubmit }