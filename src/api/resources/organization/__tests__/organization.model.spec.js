import { Organization } from '../organization.model'

describe('Organization Model', () => {
  describe('validation', () => {
    describe('email', () => {
      test('invalid', async done => {
        const organization = new Organization({
          email: 'invalid_email'
        })
        await organization.validate(err => {
          expect(err.errors.email.message).toMatch(/Path `email` is invalid/)
          done()
        })
      })

      test('valid', async done => {
        const organization = new Organization({
          email: 'あいうえお@domain.com'
        })
        await organization.validate(err => {
          expect(Object.keys(err.errors).indexOf('email')).toEqual(-1)
          done()
        })
      })
    })
  })
})
