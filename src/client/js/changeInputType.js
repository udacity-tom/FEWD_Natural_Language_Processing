function changeInputArea(){
    let currentInput = document.getElementById("inputAreaType");
    let inputText = document.getElementById("inputText");
    let inputURL = document.getElementById("inputURL");
    if(currentInput.checked){  
    // console.log("bef currentInput", currentInput.checked);
    // console.log("bef inputText element",inputText);
    // console.log("bef inputURL", inputURL);
        inputText.style.display = "none";
        inputURL.style.display = "block";
    } else if(!currentInput.checked) {
    inputText.style.display = "block";
    inputURL.style.display = "none";
    }
    // console.log("aft currentInput", currentInput.checked);
    // console.log("aft inputText element",inputText);
    // console.log("aft inputURL", inputURL);
    // let currentShow = document.getElementById("")
}

export { changeInputArea };