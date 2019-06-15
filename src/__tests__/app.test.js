import request from 'supertest'
import app from '../app'
import mongoose from 'mongoose'

describe('Homepage', () => {
  test('should open', async () => {
    // just to make sure that connection is successful
    await mongoose.connect(process.env.MONGODB_URL)

    let response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('Bloom')
  })
})
