import mongoose from 'mongoose'
import {
  nameSchema,
  emailSchema,
  phoneNumberSchema
} from '../../../utils/common.schema'

export const pocSchema = new mongoose.Schema({
  name: nameSchema,
  email: emailSchema,
  phone: phoneNumberSchema
})
