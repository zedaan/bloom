import mongoose from 'mongoose'
import locationSchema from '../../../utils/location.schema'
import { pocSchema } from '../poc/poc.model';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 5,
      maxlength: 150,
      required: true
    },
    description: {
      type: String,
      maxlength: 1000,
      required: true
    },
    location: {
      type: locationSchema,
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    instructor: String,
    poc: pocSchema
  },
  {
    timestamps: true
  }
)

export const Event = mongoose.model('Event', eventSchema)
