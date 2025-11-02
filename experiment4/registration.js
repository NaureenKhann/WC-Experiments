
// Get elements
const form = document.getElementById('regForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');

// Error containers
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const passwordError = document.getElementById('passwordError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const addressError = document.getElementById('addressError');
const formMessage = document.getElementById('formMessage');

// 1) First Name: only alphabets and length >= 6
function validateFirstName() {
  const val = firstName.value.trim();
  const re = /^[A-Za-z]{6,}$/; // only letters, at least 6 chars
  if (val === '') {
    firstNameError.textContent = 'First name is required.';
    return false;
  } else if (!re.test(val)) {
    firstNameError.textContent = 'First name must be only letters and at least 6 characters.';
    return false;
  } else {
    firstNameError.textContent = '';
    return true;
  }
}

// Last Name: must not be empty
function validateLastName() {
  const val = lastName.value.trim();
  if (val === '') {
    lastNameError.textContent = 'Last name should not be empty.';
    return false;
  } else {
    lastNameError.textContent = '';
    return true;
  }
}

// 2) Password: length >= 6
function validatePassword() {
  const val = password.value;
  if (val.length < 6) {
    passwordError.textContent = 'Password should be at least 6 characters long.';
    return false;
  } else {
    passwordError.textContent = '';
    return true;
  }
}

// 3) Email: basic email pattern name@domain.tld
function validateEmail() {
  const val = email.value.trim();
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  if (val === '') {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!re.test(val)) {
    emailError.textContent = 'Please enter a valid email (example: name@domain.com).';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

// 4) Mobile Number: exactly 10 digits
function validatePhone() {
  const val = phone.value.trim();
  const re = /^\d{10}$/;
  if (val === '') {
    phoneError.textContent = 'Mobile number is required.';
    return false;
  } else if (!re.test(val)) {
    phoneError.textContent = 'Mobile number must contain exactly 10 digits.';
    return false;
  } else {
    phoneError.textContent = '';
    return true;
  }
}

// Address: must not be empty
function validateAddress() {
  const val = address.value.trim();
  if (val === '') {
    addressError.textContent = 'Address should not be empty.';
    return false;
  } else {
    addressError.textContent = '';
    return true;
  }
}

// Validate all fields
function validateAll() {
  formMessage.textContent = '';

  const v1 = validateFirstName();
  const v2 = validateLastName();
  const v3 = validatePassword();
  const v4 = validateEmail();
  const v5 = validatePhone();
  const v6 = validateAddress();

  return v1 && v2 && v3 && v4 && v5 && v6;
}

// Form submit handler
form.addEventListener('submit', function (e) {
  e.preventDefault(); // no real submit for demo
  if (validateAll()) {
    formMessage.textContent = 'Registration successful! (demo)';
    console.log('FORM DATA:', {
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
      email: email.value,
      phone: phone.value,
      address: address.value
    });
    // Optionally reset the form
    // form.reset();
  } else {
    formMessage.textContent = '';
    // Focus the first invalid field
    const firstError = document.querySelector('.error:not(:empty)');
    if (firstError) {
      // error div is after the input, so previousElementSibling is the input
      const input = firstError.previousElementSibling;
      if (input && typeof input.focus === 'function') input.focus();
    }
  }
});

// Live validation while typing
firstName.addEventListener('input', validateFirstName);
lastName.addEventListener('input', validateLastName);
password.addEventListener('input', validatePassword);
email.addEventListener('input', validateEmail);
phone.addEventListener('input', validatePhone);
address.addEventListener('input', validateAddress);