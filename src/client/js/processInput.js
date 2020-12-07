// check what text was put into the form field
//check what data type was entered //true->URL false->Text
//passes input data to server, returns Meaning Cloud Sentiment analysis
const processInput = async () => {
    const errURL = {
        status: {
            code: "998",
            msg: "URL Problem, please check your input and add either http:// or https://"
        }
    }
    const currentInput = document.getElementById("inputAreaType")
    const inputToAnalyse = document.getElementById( (currentInput.checked ? "url" : "text"))
    if(currentInput.checked){
        if(!Client.checkURLInput(inputToAnalyse.value)){
            Client.notifyError(errURL)
            return
        }
        console.log("URL valid!")
    }
    const returnedData = await Client.postData('/process',{URL:currentInput.checked, currentInput:inputToAnalyse.value});
    console.log("returnedData", returnedData)
    return returnedData    
}

export { processInput}