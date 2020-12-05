function handleSubmit(event) {
    event.preventDefault()
    
//function to steer javascript actions on submission, check for errors at input and on submission
// function processClick() {
    const getResults = async () => {
        const returnedData = await Client.processInput()
        return returnedData
    }
    //executes server app and input check
    getResults()
    .then(function(data) {
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

//starts the handling process and submits the server request
// processClick();   
// }

export { handleSubmit }
