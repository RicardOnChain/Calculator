//Init Variablea
let output=0
let operator=""
let var1=0
let var2=0
let displayList=[]
let frstTimeNr=False
let frstTimeOperator=False
let scndTimeButton=False
const displayRef=document.querySelector(".display")


//operations
function add(a, b) {
    output = a + b
    operator =""
    displayList=[]
    display (output)
}

function subtract(a, b) {   
    output = a - b;
    operator =""
    displayList=[]
    display (output)
    
}
function multiply(a, b) {
    output = a * b;
    operator =""
    displayList=[]
    display (output)
    
}

function divide(a, b) {
    if (b==0){
        output = "No Sir can't do!"
    } else {
        output = a / b;    
    }
    operator =""
    display (output)

}

function clear(){
    output=0
    operator =""
}

function backspace(){

}

function per100(value){
    if (result!=undefined) {output=value/100}
    operator =""
    displayList=[]
    display (output)

}

function display(value){
    displayList.push(value)
    displayRef.innerText = displayList.join("");
}

function operation(a,b,operator){
    scndTimeButton=False
    switch (operator){
        case "+":
            add(a,b)
            break
        case "-":
            subtract(a,b)
            break
        case "*":
            multiply(a,b)
            break
        case "/":
            divide(a,b)
            break
    }
}
