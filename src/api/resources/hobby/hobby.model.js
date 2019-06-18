import mongoose from 'mongoose'

const hobbySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50
    }
  },
  {
    timestamps: true
  }
)

export const Hobby = mongoose.model('Hobby', hobbySchema)
