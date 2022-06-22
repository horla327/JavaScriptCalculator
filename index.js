let num1 = parseInt(prompt('Input the first number: '))
let num2 = parseInt(prompt('Input the second number: '))
operator = prompt('Select Operator: +, -, /, *, %')
if (operator === '+') {
    alert('Your result is ' + (num1 + num2))
} else if (operator === '-') {
    alert('Your result is ' + (num1 - num2))
} else if (operator === '/') {
    alert('Your result is ' + (num1 / num2))
} else if (operator === '*') {
    alert('Your result is ' + (num1 * num2))
} else if (operator === '%') {
    alert('Your result is ' + (num1 % num2))
} else {
    alert('Invalid Operator! Kindly try again')
}