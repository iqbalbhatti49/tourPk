import validator from 'validator';

export const validateURL = (value) => {
  if (!value)
    return 'Required';
  return !validator.isURL(value) ? 'Please enter a valid URL' : '';
};

export const validatePhone = (value) => {
  if (!value)
    return 'Required';
  return !validator.isMobilePhone(value, 'en-PK') ? 'Please enter a valid phone number' : '';
};

export const validateEmail = (value) => {
  if (!value) {
    return 'Required';
  }
  return !validator.isEmail(value) ? 'Please enter a valid email address' : '';
};

//validate if the value is a strong password
export const validatePassword = (value) => {
  if (!value)
    return 'Required';
  return !validator.isStrongPassword(value) ? 'Please enter a strong password' : '';
};

export const validateLength = (value, min, max) => {
  if (!value)
    return 'Required';
  return !validator.isLength(value, { min, max }) ? `Must be between ${min} and ${max} characters` : '';
};

//validate if the value is alphabetic characters only (a-zA-Z) and spaces
export const validateAlpha = (value) => {
  if (!value)
    return 'Required';
  return !validator.isAlpha(value, undefined, { ignore: " " }) ? 'Must be alphabetic characters only' : '';
}

export const mustBeNumber = (value) => {
  if (!value)
    return 'Required';
  return !validator.isNumeric(value) ? 'Must be a number' : '';
};

export const validateIdentityCard = (value) => {
  if (!value)
    return 'Required';
  return !validator.isIdentityCard() ? 'Must be a valid identity card number' : '';
};

export const validateCreditCard = (value) => {
  if (!value)
    return 'Required';
  return !validator.isCreditCard(value) ? 'Must be a valid Credit card number' : '';
};

export const validateEquality = (password1, password2) => {
  if (password1 && !password2)
    return 'Required';
  if (password1 && password2) {
    return !validator.equals(password1, password2) ? 'Passwords must match' : '';
  }
  return '';
};

export const validatePassportNumber = (value) => {
  if (!value)
    return 'Required';
  return !validator.isPassportNumber(value) ? 'Must be a valid passport number' : '';
};

export const required = (value) => (value ? '' : 'Required')

export const optionalField = (value) => (value ? '' : '')

export const validateSecurityCode = (value) => {
  if (!value)
    return 'Required';
  return !(validator.isNumeric(value) && validator.isLength(value, 3, 3)) ? 'Must be a valid security code' : '';
};

export const validateExpirationDate = (value) => {
  if (!value) {
    return 'Required';
  }
  const regex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
  if (!regex.test(value)) {
    return 'Must be in valid MM/YY format';
  }
  const parts = value.split('/');
  const year = parseInt(`20${parts[1]}`);
  const month = parseInt(parts[0]);
  const currentDate = new Date();
  const expirationDate = new Date(year, month - 1, 1);
  if (expirationDate <= currentDate) {
    return 'Expired date';
  }
};


//const minValue = min => value =>
//  isNaN(value) || value >= min ? '' : `Should be greater than ${min}`