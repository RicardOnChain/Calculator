//Init Variablea
let output=0
let operator=""
let var1
let var2
let displayList1=[]
let displayList2=[]
let isThisVar1=true
let frstTimeOperator=true
let endedEvaluation=false
const displayRef=document.querySelector(".display")


//Event Listeners

document.querySelector(".pad").addEventListener("click", (e) => {

    switch (e.target.id){
        case "number":
            if (endedEvaluation == true) {clear()}

            if (isThisVar1 == true){
                displayList1.push(e.target.innerText)
                display()
                break
            
            } else {
                displayList2.push(e.target.innerText)
                display(operator)
                break
            }

        case "operator":
            
            endedEvaluation=false
            
            if ((e.target.innerText=="+" || e.target.innerText=="-") && Number.isNaN(parseFloat(displayList1.join("")))  ){
                displayList1[0]=e.target.innerText
                display()
                break
                }
            
            if (displayList2.length == 0){                                      // save var1 and reset display list 
                operator=e.target.innerText                                            //when operator is introduced for the first time and numbers have already been introduced
                display(operator)
            
                isThisVar1=false
                frstTimeOperator=false
                break

            } else if (displayList2.length !=0){
                var1= parseFloat(displayList1.join(""))                            //save var2 if an operator is pressed for a 2nd time and numbers have already been introduced
                var2= parseFloat(displayList2.join(""))                            //save var2 if an operator is pressed for a 2nd time and numbers have already been introduced
                operation (var1,var2,operator)

                operator=e.target.innerText
                display(operator)
                break
              
            }
        case "evaluate":
            
            var1= parseFloat(displayList1.join(""))                               
            var2= parseFloat(displayList2.join(""))
            if ( Number.isNaN(var1) || Number.isNaN(var2) ) {break}                 //run operations with var1 and var2 if they are defined
            else {operation (var1,var2,operator)                                    
            display ()
            endedEvaluation = true
            break
            }

        case "AC":
            clear()
            break

        case "backspace":
            backspace()
            break
        
        case "perCent":
            per100()
            break
}})




//operations
function add(a, b) {
    output = a + b
    displayList1=[]
    displayList2=[]
    displayList1.push(output)
    display()
}

function subtract(a, b) {   
    output = a - b;
    displayList1=[]
    displayList2=[]
    displayList1.push(output)
    display()
    
}
function multiply(a, b) {
    output = a * b;
    displayList1=[]
    displayList2=[]
    displayList1.push(output)
    display()
    
}

function divide(a, b) {
    if (b==0){
        output = "No Sir can't do!"
    } else {
        output = a / b;    
    }
    displayList1=[]
    displayList2=[]
    displayList1.push(output)
    display()

}

function clear(){
    displayList1=[]
    displayList2=[]
    output=0
    operator=""
    isThisVar1=true
    frstTimeOperator=true
    endedEvaluation = false
    display()
}

function backspace(){
    if (isThisVar1 == true && frstTimeOperator == true){ 
        displayList1.pop()
    } else if (isThisVar1 == false && displayList2.length != 0){
        displayList2.pop()
    } else if (isThisVar1 == false && displayList2.length == 0){
        operator=""
        isThisVar1 = true
    }
    display(operator)

}

function per100(){
    if (isThisVar1 == true && frstTimeOperator == true){ 
        var1= parseFloat(displayList1.join(""))      
        displayList1.push("%")
        display(operator)   
        displayList1=[(var1 / 100)]

    } else if (isThisVar1 == false && displayList2.length != 0){
        var1= parseFloat(displayList1.join(""))      
        var2= parseFloat(displayList2.join(""))   
        displayList2.push("%")
        display(operator)   
        displayList2=[var1*(var2 / 100)]

    } else if (isThisVar1 == false && displayList2.length == 0){
        var1= parseFloat(displayList1.join(""))
        displayList1.push("%")
        display(operator)   
        displayList1=[(var1 / 100)]      

    }


}

function display(operator=""){
    displayRef.innerText = (displayList1.join("")+ operator +displayList2.join(""));
}

function operation(a,b,operator){
    
    switch (operator){
        case "+":
            add(a,b)
            break
        case "-":
            subtract(a,b)
            break
        case "x":
            multiply(a,b)
            break
        case "/":
            divide(a,b)
            break
    
    scndTimeNr=False
    var1=output
    var2=undefined
    
    }
}
