import { Admin } from '../admin.model'

describe('Admin Model', () => {
  describe('password', () => {
    test('is encrypted before save', async () => {
      const admin = await new Admin({
        email: 'user@example.com',
        password: 'password'
      }).save()

      expect(admin.password).not.toEqual('password')
      expect(admin.password.length).toEqual(60)
    })
  })
})
