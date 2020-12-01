function checkURLInput(inputToCheck) {
    //Checks http protocol is present
    const regExp = new RegExp("^https?://")
        if(regExp.test(inputToCheck)){
        console.log("Protocol is valid!")
        return true
    }
    console.log("Protocol, https:// http:// is Missing!")
    return false 
}

export { checkURLInput }