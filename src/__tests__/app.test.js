import request from 'supertest'
import app from '../app'
import mongoose from 'mongoose'
import config from '../config'

const databaseConfig = config.get('database')

describe('Homepage', () => {
  test('should open', async () => {
    // just to make sure that connection is successful
    await mongoose.connect(databaseConfig.url)

    let response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('Bloom')
  })
})
