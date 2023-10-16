https://github.com/SANJAY-P-M/calculator_JS/assets/106712995/95b17433-47b5-449a-9cd9-0133acb95e98


# Calculator Web App - Day Three

Welcome to Day Three of the Calculator Web App project. In this phase, we've made significant progress towards building a functional calculator using HTML, CSS, and JavaScript.

## Task Completed

Today, we focused on the following tasks:

### 1. HTML Structure

We have created the basic HTML structure for our calculator. The calculator's display, buttons, and other essential elements are in place.

### 2. Basic CSS Styling

We applied some basic CSS styling to make the calculator visually appealing.

### 3. JavaScript Logic

The core functionality of the calculator is taking shape. We've implemented the following JavaScript functions:

```javascript
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


// Other calculator logic functions (e.g., evaluate expression).
