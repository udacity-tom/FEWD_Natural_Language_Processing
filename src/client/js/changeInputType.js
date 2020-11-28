function changeInputArea(){
    let currentInput = document.getElementById("inputAreaType");
    let inputText = document.getElementById("inputText");
    let inputURL = document.getElementById("inputURL");
    if(currentInput.checked){  
        inputText.style.display = "none";
        inputURL.style.display = "block";
    } else if(!currentInput.checked) {
    inputText.style.display = "block";
    inputURL.style.display = "none";
    }
}

export { changeInputArea }; 