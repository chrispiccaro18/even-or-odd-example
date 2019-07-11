const numberInput = document.getElementById('number-input');
const resultNode = document.getElementById('result');
const submitButton = document.getElementById('submit-button');

if(isEven(numberInput.value)) {
  resultNode.textContent = 'even';
} else {
  resultNode.textContent = 'odd';
}

submitButton.addEventListener('click', () => {
  if(isEven(numberInput.value)) {
    resultNode.textContent = 'even';
  } else {
    resultNode.textContent = 'odd';
  }
});

function isEven(number) {
  if(number % 2 === 0) return true;
  return false;
}
