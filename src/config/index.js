import dotenv from 'dotenv'

dotenv.config({
  debug: true,
  path: `${__dirname}/../../.env.${process.env.NODE_ENV}`
})
const config = require('config')

export default config
