import { merge } from 'loads'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'test',
  port: 3000
}

let envConfig = {}

switch (env) {
  case 'development':
    envConfig = require('./development').config
    break
  case 'test':
    envConfig = require('./test').config
    break
  default:
    envConfig = require('./development').config
}

export default merge(baseConfig, envConfig)
