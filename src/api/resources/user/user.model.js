import mongoose from 'mongoose'
import { nameSchema, phoneNumberSchema } from '../../../utils/common.schema'

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
      enum: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
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
