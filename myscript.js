let firstNumber = null;
let secondNumber = null;
let operator = null;
let displayValue = null;

function add(num1,num2){
    return num1 + num2;
}

function substract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

const buttons = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","clr","entr"];

buttons.forEach(createButtons);

function createButtons(){
    const container = document.querySelector(".numpad");
    const btn = document.createElement("button");
    btn.classList.add("btn");
    container.appendChild(btn);
}