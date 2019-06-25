import mongoose from 'mongoose'
import { nameSchema, phoneNumberSchema } from '../../../utils/common.schema'
import Joi from '@hapi/joi'

const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const validate = function validateUser(user) {
  const schema = Joi.object().keys({
    gender: Joi.string().valid('male', 'female', 'other'),
    age: Joi.number()
      .min(18)
      .max(200),
    zipcode: Joi.string()
      .min(5)
      .max(6),
    name: Joi.object().keys({
      firstName: Joi.string()
        .min(3)
        .max(50),
      lastName: Joi.string()
        .min(3)
        .max(50)
    }),
    phone: Joi.object().keys({
      countryCode: Joi.string()
        .min(1)
        .max(6),
      number: Joi.string()
        .min(10)
        .max(10)
    }),
    hobbies: Joi.array(),
    activities: Joi.array(),
    preferredDays: Joi.array().items(Joi.string().valid(WEEKDAYS)),
    settings: Joi.object().keys({
      reminders: Joi.string().valid('daily', 'weekly', 'monthly')
    })
  })
  const result = Joi.validate(user, schema)
  return result
}

const userSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      enum: ['male', 'female', 'other']
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 200
    },
    zipcode: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 6
    },
    name: nameSchema,
    phone: phoneNumberSchema,
    hobbies: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'hobby',
      required: true
    },
    activities: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'activity',
      required: true
    },
    preferredDays: {
      type: [String],
      required: true,
      trim: true,
      enum: WEEKDAYS
    },
    settings: {
      reminders: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        enum: ['daily', 'weekly', 'monthly']
      }
    }
  },
  { timestamps: true }
)

export const User = mongoose.model('User', userSchema)
