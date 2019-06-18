import _ from 'lodash'
import mongoose from 'mongoose'
import config from './src/config'

const databaseConfig = config.get('database')

const remove = collection =>
  new Promise((resolve, reject) => {
    collection.remove(err => {
      if (err) return reject(err)
      resolve()
    })
  })

beforeEach(async done => {
  function clearDB() {
    return Promise.all(_.map(mongoose.connections.collections, c => remove(c)))
  }

  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(databaseConfig.url, { useNewUrlParser: true })
      await clearDB()
    } catch (e) {
      console.log('Problem in test database setup')
      console.error(e)
      throw e
    }
  } else {
    await clearDB()
  }
  done()
})

afterEach(async done => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.disconnect()
  return done()
})
