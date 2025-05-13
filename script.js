let display = document.getElementById('display');

// Append value to the display
function append(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Calculate square
function square() {
  if (display.value) {
    display.value = Math.pow(eval(display.value), 2);
  }
}

// Evaluate expression
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    alert('Invalid Expression');
  }
}
