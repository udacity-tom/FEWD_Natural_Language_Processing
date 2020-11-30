function clearUI(index){
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }
    for(let element in ui)
    document.getElementById(ui[element]).innerHTML = ""
    document.getElementById("error").style.display = "none"
}


export { clearUI }