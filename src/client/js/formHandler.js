function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    //check what data type was entered //true->URL false->Text
    const currentInput = document.getElementById("inputAreaType")
    const currentTextInput = document.getElementById("text")
    console.log(currentInput.checked)
    if(!currentInput.checked) {
        console.log("currentTextInput.value: ->",currentTextInput.value)
    }
    




const postData = async (url = '', data= {}) => {
    console.log("in postData", data, JSON.stringify(data))
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
}
    // let formText = document.getElementById('name').value
    // checkForName(formText)
    console.log("::: Form Submitted :::")
    
function sendRequestToProcess(URL, currentTextInput) {
        // const currentTextInput = document.getElementById("text").value
        
        postData('/process', {URL,currentTextInput})
}
if(currentInput.checked){
    sendRequestToProcess(true,currentTextInput.value);
} else {
    sendRequestToProcess(false, currentTextInput.value);
}
    

    // sendRequestToProcess(currentTextInput.value);
    //updateUI()



    // fetch('http://localhost:8081/process?'+currentTextInput)
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}







export { handleSubmit }