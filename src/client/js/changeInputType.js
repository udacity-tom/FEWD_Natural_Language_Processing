function changeInputArea(){
    //on 'switch' click changes input from URL <-> Text input
    let currentInput = document.getElementById("inputAreaType");
    let inputURL = document.getElementsByClassName("inputURL");
    let inputText = document.getElementsByClassName("inputText");

    if(currentInput.checked){  
        for(let i=0; i < inputText.length; i++){
        inputText[i].style.display ="none"
        inputURL[i].style.display = "block"; }
    } else if(!currentInput.checked){
        for(let i=0; i < inputText.length; i++){
            inputText[i].style.display ="block"
            inputURL[i].style.display = "none";}
    }
}
export { changeInputArea }; 