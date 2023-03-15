const numberBtns = document.querySelectorAll('[data-number]');
const operBtns = document.querySelectorAll('[data-operator]');
const displayText = document.querySelector('#displayText');
const acBtn = document.querySelector('#acBtn');
const cBtn = document.querySelector('#cBtn');
const equalsBtn = document.querySelector('#equalsBtn');
const decBtn = document.querySelector('#decBtn');

//variables for operations
let firstVal='';
let secondVal='';
let operatorVal = null;
let shouldClearDisplay = false;
window.addEventListener('keydown',processKeyInput);

cBtn.addEventListener('click',backSpace);
acBtn.addEventListener('click',clearAll);
decBtn.addEventListener('click',addDecimal);

numberBtns.forEach((button)=>{
  button.addEventListener('click',()=>{
  addNumber(button.textContent);
    
})
})
operBtns.forEach((button)=>{
  button.addEventListener('click',()=>{addOperator(button.textContent);
  })  
})
function addOperator(operator){
  if(operatorVal !== null) execute()
  firstVal = displayText.textContent;
  operatorVal = operator;
  shouldClearDisplay = true;
}
equalsBtn.addEventListener('click',execute);

function addNumber(number){
  if(operatorVal !== null && shouldClearDisplay) clearDisplay();
  displayText.textContent += number;
};
function execute(){ 
  if(operatorVal != null){
    secondVal = displayText.textContent;
    displayText.textContent = roundNum(operate(operatorVal,firstVal,secondVal));
    clearVal();
  } 
  else if (operatorVal == '÷' && displayText.textContent === '0'){
    alert("YOU CAN'T DIVIDE BY ZERO!")
    return;
  }
  else{
    return;
  }

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
function clearAll(){
  clearDisplay();
  clearVal();
};
function backSpace(){
  displayText.textContent = displayText.textContent.toString().slice(0,-1);
}
function roundNum(number) {
  return Math.round(number * 1000) / 1000
}
function addDecimal(){
  if (displayText.textContent == '')
    displayText.textContent == '0';
  if (displayText.textContent.includes('.'))
    return;
  displayText.textContent += '.'
}

function processKeyInput(e){
  if (e.key>=0 && e.key<=9) 
    addNumber(e.key);
  if (e.key === '.') addDecimal();
  if (e.key === 'Backspace') backSpace();
  if (e.key === 'Enter') execute();
  if (e.key === 'Escape') clearAll();
  if (e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/' || e.key === '%')
  addOperator(convertOperatorKey(e.key));

}
function convertOperatorKey(key){
  if (key == '+') return '+'
  if (key == '-') return '-'
  if (key == '*') return 'x'
  if (key == '/') return '÷'
  if (key == '%') return '%'
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
