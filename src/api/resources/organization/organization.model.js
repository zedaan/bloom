import mongoose from 'mongoose'
import {
  locationSchema,
  phoneNumberSchema,
  emailSchema
} from '../../../utils/common.schema'

const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 5,
      maxlength: 75
    },
    location: {
      type: locationSchema,
      required: true
    },
    primaryPoc: String,
    email: emailSchema,
    helpDeskPhoneNumber: {
      type: phoneNumberSchema,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Organization = mongoose.model('Organization', organizationSchema)
