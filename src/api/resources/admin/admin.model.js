import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import { emailSchema } from '../../../utils/common.schema'

const adminSchema = new mongoose.Schema(
  {
    email: emailSchema,
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

adminSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }
    this.password = hash
    next()
  })
})

adminSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

export const Admin = mongoose.model('Admin', adminSchema)
