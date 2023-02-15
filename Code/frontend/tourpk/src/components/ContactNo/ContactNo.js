import React from 'react'
import PhoneInput from 'react-phone-number-input'

export default function ContactNo() {
  return (
    <PhoneInput
  international
  countryCallingCodeEditable={false}
  defaultCountry="US"
  value={value}
  onChange={setValue}/>
    )
}
