function updateUI(data){
    const ui = {agreement:"agreement", confidence:"confidence", irony:"irony", subjectivity:"subjectivity" }
    for(let element in ui){
        document.getElementById(ui[element]).innerHTML = data[ui[element]]
    }
}

export { updateUI }


//updates the Ui with the server response of Meaning Cloud analysis on user input
