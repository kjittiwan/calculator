const numberBtns = document.querySelectorAll('[data-number]');
const operBtns = document.querySelectorAll('[data-operator]');
const displayText = document.querySelector('#displayText');
const acBtn = document.querySelector('#acBtn');
const cBtn = document.querySelector('#cBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const decBtn = document.querySelector('#decBtn');

let inputVal;
let prevVal;
let result;
let operVal;
let contVal;
let firstVal='';
let secondVal='';
let operatorVal = null;
let shouldClearDisplay = false;

numberBtns.forEach(button=>{
  button.addEventListener('click',()=>{
    if(operatorVal !== null && shouldClearDisplay) clearDisplay();

    displayText.textContent += button.textContent;
  })
})
operBtns.forEach(button=>{
  button.addEventListener('click',()=>{
    if(operatorVal !== null) execute()
    firstVal = displayText.textContent;
    operatorVal = button.textContent;
    shouldClearDisplay = true;
  })
})
equalsBtn.addEventListener('click',()=>{
  if(operatorVal!=null){
    execute();
    clearVal();
  }
  else{
    return;
  }
  
});
cBtn.addEventListener('click',()=>backSpace())
acBtn.addEventListener('click',()=>{
  clearDisplay();
  clearVal();
})

function execute(){ 
  if(operatorVal == '÷' && displayText.textContent === '0'){
    alert("YOU CAN'T DIVIDE BY ZERO!")
    return;
  }
  secondVal = displayText.textContent;
  displayText.textContent = roundNum(operate(operatorVal,firstVal,secondVal));
  clearVal();
}


function clearDisplay(){
  displayText.textContent = "";
  shouldClearDisplay = false;
}
function clearVal(){
  firstVal ="";
  secondVal ="";
  operatorVal = null;
}
function backSpace(){
  displayText.textContent = displayText.textContent.toString().slice(0,-1);
}
function roundNum(number) {
  return Math.round(number * 1000) / 1000
}









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
const remainder = function(x,y){
  return x % y;
}

function operate(operator,x,y){
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
    case '%':
      return remainder(x,y)
    default:
      return null
  } 
}
/*/buttons.forEach(function(button){
  button.addEventListener('click',function(){

    if(button.textContent =='='){
      result = operate(operVal,prevVal ,inputVal )
      clearDisplay();
      displayText.textContent += result;

    }

    else if(button.textContent == '+' || button.textContent == '-'
    || button.textContent == 'x' || button.textContent == '÷'){

      operVal = button.textContent;
      prevVal = displayText.textContent; 
      
      
    }
    else if(button.textContent=='AC'){
      clearDisplay();
      clearVal();
    }
    

    else{
      
        clearDisplay();
        inputVal = button.textContent;
        displayText.textContent += inputVal
      }  
  })
})


*/
