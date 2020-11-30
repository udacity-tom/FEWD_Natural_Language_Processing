function checkURLInput(inputToCheck) {
    // const regExp = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
    const regExp = new RegExp("^https?://")
        if(regExp.test(inputToCheck)){
        console.log("Protocol is valid!")
        return true
    }
    console.log("Protocol, https:// http:// is Missing!")
    return false 
}

export { checkURLInput }