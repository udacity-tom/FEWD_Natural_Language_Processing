function updateUI(data){
    //updates the Ui with the server response of Meaning Cloud analysis after user input
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }
    for(let element in ui){
        document.getElementById(ui[element]).innerHTML = data[ui[element]]
    }
}

export { updateUI }