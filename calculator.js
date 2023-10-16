// appends value to input field 

function appendValueToInput(event){
    var buttonValue = event.target.innerText;
    var inputElement = document.getElementById('input');
    inputElement.value += buttonValue;
}

// clear all value in input field 

function clearInputField(){
    document.getElementById('input').value = '';
}

// inverting the sign of input field

function invertSign(){
    var inputElement = document.getElementById('input');
    var inputContent = inputElement.value;
    if(inputContent[0] == '-')
        inputElement.value = '+' + inputContent.substring(1);
    else if(inputContent[0] == '+')
        inputElement.value = '-' + inputContent.substring(1);
    else
        inputElement.value = '-' + inputContent;
}

// equals 

function equals(){
    var inputElement = document.getElementById('input');
    inputElement.value = eval(inputElement.value);
}