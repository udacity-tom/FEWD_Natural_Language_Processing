function notifyError(data){
    const error = document.getElementById("error")
    error.innerHTML = "There was an error. Error Code "+data.status.code+" : "+data.status.msg+". Please try again.."
    error.style.cssText = "display:block; font-size:2em;"
}

export { notifyError }