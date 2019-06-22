import mongoose from 'mongoose'

export const nameSchema = {
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 25
  }
}

export const emailSchema = {
  type: String,
  // RFC2822 regex for email
  match: /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,
  lowercase: true,
  trim: true,
  unique: true
}

export const locationSchema = {
  name: {
    type: String,
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
}

export const phoneNumberSchema = {
  countryCode: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 6,
    match: /^\+.*/
  },
  number: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 10,
    unique: true,
    match: /[0-9]$/
  }
}
