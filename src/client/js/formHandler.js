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
    return response
}
    // let formText = document.getElementById('name').value
    // checkForName(formText)
    console.log("::: Form Submitted :::")
    
function sendRequestToProcess(URL, currentInput) {
        // const currentTextInput = document.getElementById("text").value       
        postData('/process', {URL,currentInput})
        return 
}
// check what text was put into the form field
//check what data type was entered //true->URL false->Text
const checkInput = async () => {
    let returnedData = {}
    const currentInput = document.getElementById("inputAreaType")
    const currentTextInput = document.getElementById("text")
    const currentURLInput = document.getElementById("url");
    if(currentInput.checked){
        returnedData = await postData('/process',{URL:true,currentInput:currentURLInput.value});
        console.log("returned data in formhandler",returnedData)
    } else {
        returnedData  = await postData('/process',{URL:false,currentInput:currentTextInput.value});
        console.log("returned data in formhandler",returnedData)
    }
    // console.log
    return returnedData
}

// function updateUI(){

// }

const processClick = async () => {
    const returnedData = await checkInput()
    .then(function () {
        console.log("Returned data",returnedData)
    }
    )}
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