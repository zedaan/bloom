import mongoose from 'mongoose'

export const connect = (url = process.env.MONGODB_URL, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true })
}
