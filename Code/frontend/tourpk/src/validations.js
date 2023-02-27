import validator from 'validator';

export const validateEmail = (value) => {
  if (!value) {
    return 'Required';
  }
  return !validator.isEmail(value)? 'Please enter a valid email address': '';
};

//validate if the value is a strong password
export const validatePassword = (value) => {
  if (!value)
    return 'Required';
  return !validator.isStrongPassword(value)? 'Please enter a strong password': '';
};

export const validateLength = (value, min, max) => {
  if (!value)
    return 'Required';
  return !validator.isLength(value, { min, max })?`Must be between ${min} and ${max} characters`: '';
};

//validate if the value is alphabetic characters only (a-zA-Z) and spaces
export const validateAlpha = (value) => {
  if (!value)
    return 'Required';
  return !validator.isAlpha(value, undefined, {ignore: " "})? 'Must be alphabetic characters only': '';
}

export const mustBeNumber = (value) => {
  if (!value)
    return 'Required';
  return !validator.isNumeric(value)? 'Must be a number': '';
};

export const validateIdentityCard = (value) => {
  if(!value)
    return 'Required';
  return !validator.isIdentityCard()? 'Must be a valid identity card number': '';
};

export const validateCreditCard = (value) => {
  if(!value)
    return 'Required';
  return !validator.isCreditCard()? 'Must be a valid Credit card number': '';
};

export const validateEquality = (password1, password2) => {
  if(password1 && !password2)
    return 'Required';
  if (password1 && password2) {
    return !validator.equals(password1, password2)? 'Passwords must match' : '';
  }
  return '';
};

export const validatePassportNumber = (value) => {
  if (!value)
    return 'Required';
  return !validator.isPassportNumber(value)? 'Must be a valid passport number': '';
};

export const required = (value) => (value ? '' : 'Required')

//const minValue = min => value =>
//  isNaN(value) || value >= min ? '' : `Should be greater than ${min}`