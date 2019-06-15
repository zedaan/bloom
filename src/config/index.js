import { merge } from 'lodash'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'test'
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
