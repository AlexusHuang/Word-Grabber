/*
-Grab the texts from the text area
-Grab the 2 text box with their value
-Ask if they want to use substring or substr
-Create a function with it finding the words with the 2 values
-Display the founded words
*/


let submitButton=document.getElementById("submit");
submitButton.addEventListener("click", function(e) {
    let position1 = document.getElementsByTagName("input")[0].value;
    let position2=document.getElementById("position2").value;
    let text=document.getElementById("paragraph").value;
    console.log(position1,position2,text)
    e.preventDefault();
    const question=document.getElementById("question");
    const wholeForm=document.getElementById("form1");
    const textArea=document.getElementById("paragraph");
    wholeForm.style.visibility="hidden";
    textArea.style.visibility="hidden";
    question.style.visibility="visible";
    let substringMethod=document.getElementById("selection1");
    let substrMethod=document.getElementById("selection2");
    substringMethod.addEventListener("click",()=>{
        console.log(text.substring(position1,position2));
        question.style.visibility="hidden";
        textArea.style.visibility="visible";
        wholeForm.style.visibility="visible";
        
    })
    substrMethod.addEventListener("click",()=>{
        console.log(text.substr(position1,position2));
        question.style.visibility="hidden";
        textArea.style.visibility="visible";
        wholeForm.style.visibility="visible";
    });
})