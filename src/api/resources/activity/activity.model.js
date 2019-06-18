import mongoose from 'mongoose'

const activitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50
    }
  },
  {
    timestamps: true
  }
)

export const Activity = mongoose.model('Activity', activitySchema)
