function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    //check what data type was entered //true->URL false->Text
    const currentInput = document.getElementById("inputAreaType")
    const currentTextInput = document.getElementById("text")
    console.log(currentInput.checked)
    if(!currentInput.checked) {
        console.log("currnetTextInput",currentTextInput.value)
    }
    


    
function sendRequestToProcess(currentTextInput) {
    postData('/process', currentTextInput)
}


const postData = async (url = '', data= {}) => {
    const response = await fetch('http://localhost:8081'+url,{
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}




    // let formText = document.getElementById('name').value


    // checkForName(formText)

    console.log("::: Form Submitted :::")
    sendRequestToProcess();
    // fetch('http://localhost:8081/process?'+currentTextInput)
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })
}

export { handleSubmit }