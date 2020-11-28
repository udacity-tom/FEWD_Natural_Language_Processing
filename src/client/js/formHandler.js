function handleSubmit(event) {
    event.preventDefault()
    
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
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error",error);
    }
}

    console.log("::: Form Submitted :::")
    
function sendRequestToProcess(URL, currentInput) {
        // const currentTextInput = document.getElementById("text").value       
        postData('/process', {URL,currentInput})
        return 
}
// check what text was put into the form field
//check what data type was entered //true->URL false->Text
const checkInput = async () => {
    const currentInput = document.getElementById("inputAreaType")
    const inputToAnalyse = document.getElementById( (currentInput.checked ? "url" : "text") )
    const returnedData = await postData('/process',{URL:currentInput.checked,currentInput:inputToAnalyse.value});
    console.log("returned data in checkInput",returnedData)
    return returnedData    
}




function updateUI(data){
    document.getElementById("agreement").innerHTML = data.agreement
    document.getElementById("confidence").innerHTML = data.confidence
    document.getElementById("irony").innerHTML = data.irony
    document.getElementById("subjectivity").innerHTML = data.subjectivity
}


function processClick() {
    const getResults = async () => {
        const returnedData = await checkInput()
        return returnedData
    }
    getResults()
    .then(function(data) {
    console.log("processClick results", data)
    updateUI(data)
    })
}


// const processClick = async () => {
//     let returnedData = {}
//     const returnedData 
//     returnedData = await checkInput() 
//     .then(function () {
        
//     }
//     )}
    // updateUI(returnedData);
    // const processClick = async () => {
    //     const res = await
    // }

// function async processClick(){
    
// }

processClick();
    

    // sendRequestToProcess(currentTextInput.value);
    //updateUI()



    // fetch('http://localhost:8081/process?'+currentTextInput)
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}







export { handleSubmit }