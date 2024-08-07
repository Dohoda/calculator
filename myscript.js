let firstNumber = null;
let secondNumber = null;
let operator = null;
let operatorClicked = false;
let firstDisplay = "";
let secondDisplay = "";
let equalClicked = "";
let result = "";

function add(num1,num2){
    text.textContent = num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

const text = document.querySelector(".calcDisplay");
text.style.fontSize = "30px";
text.style.fontWeight = "600";
text.textContent = "";

const buttons = ["1","2","3","+","4","5","6","-","7","8","9","*","clr","0","=","/"];

for (value in buttons){
    const container = document.querySelector(".numpad");
    const btn = document.createElement("button");
    btn.textContent = buttons[value];
    if(btn.textContent == "clr"){
        btn.classList.add("btn-clear");
    }
    else if(btn.textContent == "="){
        btn.classList.add("btn-equal");
    }
    else if (btn.textContent == "+" || btn.textContent == "-" || btn.textContent == "*" || btn.textContent == "/"){
        btn.classList.add("btn-operator");
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

function displayInput(num){
    text.textContent += num;
}

function operatorClick(op){
    firstNumber = text.textContent;
    operator = op;
    operatorClicked = true;
    text.textContent = "";
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