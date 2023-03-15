const buttons = document.querySelectorAll('button');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const acBtn = document.querySelector('#acBtn');
const cBtn = document.querySelector('#cBtn');
const add = function(x,y){
  return x + y;
}
const subtract = function(x,y){
  return x - y;
}
const multiply = function(x,y){
  return x * y;
}
const divide = function(x,y){
  return x / y;
}

const operate = function(operator,x,y){
  x = Number(x);
  y = Number(y);
  switch (operator){
    case '+':
      return add(x,y)
    case '-':
      return subtract(x,y)
    case 'x':
      return multiply(x,y)
    case '÷':
      return divide(x,y)
    default:
      return null
  } 
}
let inputVal;
let prevVal;
let result;
let operVal;
let contVal;
buttons.forEach(function(button){
  button.addEventListener('click',function(){

    if(button.textContent =='='){
      result = operate(operVal,prevVal ,inputVal )
      clearDisplay();
      input.textContent += result;

    }

    else if(button.textContent == '+' || button.textContent == '-'
    || button.textContent == 'x' || button.textContent == '÷'){

      operVal = button.textContent;
      prevVal = input.textContent; 
      
      
    }
    else if(button.textContent=='AC'){
      clearDisplay();
      clearVal();
    }
    

    else{
      
        clearDisplay();
        inputVal = button.textContent;
        input.textContent += inputVal
      }  
  })
})

const clearDisplay = function(){
  input.textContent = "";
}
const clearVal = function(){
  inputVal.textContent ="";
  prevVal.textContent ="";
  operVal.textContent ="";
}

