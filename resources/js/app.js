const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Input success

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  const small = formControl.querySelector('small');
  small.innerText = '';
}

//Check for valid email

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname 
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




//Event listeners
form.addEventListener('submit', function (e) {

  checkRequired([username, email, message]);
  checkEmail(email);
});

