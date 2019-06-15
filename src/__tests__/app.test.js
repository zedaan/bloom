import request from 'supertest'
import app from '../app'

describe('Homepage', () => {
  test('should open', async () => {
    let response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.text).toContain('Bloom')
  })
})
