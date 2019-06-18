import mongoose from 'mongoose'

const testSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
    },
  },
  { timestamps: true }
)

export const Test = mongoose.model('Test', testSchema)
