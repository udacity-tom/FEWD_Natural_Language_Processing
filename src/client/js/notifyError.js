function notifyError(data){
    //generic error notification function to update UI
    const error = document.getElementById("error")
    error.innerHTML = "There was an error. Error Code "+data.status.code+" : "+data.status.msg+" Please try again.."
    error.style.cssText = "display:block; font-size:2em;"
}

export { notifyError }