import mongoose from 'mongoose'
import config from '../config'

const databaseConfig = config.get('database')

export const connect = (url = databaseConfig.url, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true })
}
