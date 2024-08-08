let firstNumber = null;
let secondNumber = null;
let operator = null;
let operatorCheck = false;
let tempContent = "";

function add(num1,num2){
    text.textContent = +num1 + +num2;
}

function subtract(num1,num2){
    text.textContent = +num1 - +num2;
}

function multiply(num1,num2){
    text.textContent = +num1 * +num2;
}

function divide(num1,num2){
    if(num2 == "0"){
        text.textContent = "undefined";
    }
    else if (num2 != "0"){
        text.textContent = +num1 / +num2;
    }
}

const text = document.querySelector(".calcDisplay");
text.style.fontSize = "30px";
text.style.fontWeight = "600";
text.textContent = "";

const buttons = ["1","2","3","+","4","5","6","-","7","8","9","*",".","0","=","/","Clear"];

for (value in buttons){
    const container = document.querySelector(".numpad");
    const btn = document.createElement("button");
    btn.textContent = buttons[value];
    if(btn.textContent == "Clear"){
        btn.classList.add("btn-clear");
    }
    else if(btn.textContent == "="){
        btn.classList.add("btn-equal");
    }
    else if (btn.textContent == "+" || btn.textContent == "-" || btn.textContent == "*" || btn.textContent == "/"){
        btn.classList.add("btn-operator");
    }
    else if(btn.textContent == "."){
        btn.classList.add("btn-decimal");
    }
    else{
        btn.classList.add("btn");
    }
    btn.setAttribute("id","btn");
    btn.style.fontSize = "36px";
    btn.style.fontWeight = "600";
    container.appendChild(btn);
}

const btn = document.querySelectorAll(".btn");

const btnOp = document.querySelectorAll(".btn-operator");

const btnClear = document.querySelector(".btn-clear");

const btnEqual = document.querySelector(".btn-equal");

const btnDecimal = document.querySelector(".btn-decimal");

function displayInput(num){
    text.textContent += num;
}

function operatorClick(op){
    if(operatorCheck == false){
        operator = op;
        text.textContent += op;
        operatorCheck = true;
    }
    else if (operatorCheck == true){
        tempContent = text.textContent.split(operator);
        firstNumber = tempContent[0];
        secondNumber = tempContent[1];
        operate(firstNumber,secondNumber,operator);
        operator = op;
        text.textContent += op;
    }
}

function resultClicked(){
    tempContent = text.textContent.split(operator);
    firstNumber = tempContent[0];
    secondNumber = tempContent[1];
    if(secondNumber == ""){
        text.textContent = firstNumber;
        operatorCheck = false;
    }
    else{
        operate(firstNumber,secondNumber,operator);
        operatorCheck = false;
    }
}

function resetCalculator(){
    text.textContent = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    operatorCheck = false;
}

btn.forEach(function (button){
    button.addEventListener("click",function(e){
        return displayInput(e.target.textContent);
    });
});

btnOp.forEach(function (button){
    button.addEventListener("click",function(e){
        return operatorClick(e.target.textContent);
    });
});

btnEqual.addEventListener("click",function(){
    resultClicked();
});

btnClear.addEventListener("click",function(){
    resetCalculator();
});

btnDecimal.addEventListener("click",function(e){
    return displayInput(e.target.textContent);
});

function operate(firstNumber,secondNumber,operator){ 
    switch(operator){
        case "+":
            add(firstNumber,secondNumber);
        break;
        case "-":
            subtract(firstNumber,secondNumber);
        break;
        case "*":
            multiply(firstNumber,secondNumber);
        break;
        case "/":
            divide(firstNumber,secondNumber);
        break;
    }
}