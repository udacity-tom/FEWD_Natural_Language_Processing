function changeInputArea(){
    let currentInput = document.getElementById("inputAreaType");
    let inputText = document.getElementById("inputText");
    console.log("inputText element",inputText)
    let inputURL = document.getElementById("inputURL");
    console.log("currentInput", currentInput.checked);
    if(currentInput){  
        inputText.style.display = "none";
        inputURL.style.display = "block";
    }
    inputText.style.display = "block";
    inputURL.style.display = "none";
    // let currentShow = document.getElementById("")
}

export { changeInputArea };