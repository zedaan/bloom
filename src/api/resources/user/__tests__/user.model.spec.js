import { User, validate } from '../user.model'
import { Hobby } from '../../hobby/hobby.model'
import { Activity } from '../../activity/activity.model'

describe('User Model', () => {
  test('valid example', async () => {
    const userData = {
      name: {
        firstName: 'First',
        lastName: 'Last'
      },
      gender: 'male',
      age: 35,
      zipcode: '360004',
      phone: {
        countryCode: '+91',
        number: '1231231231'
      },
      hobbies: [
        new Hobby({
          title: 'Hobby1'
        }),
        new Hobby({
          title: 'Hobby2'
        })
      ],
      activities: [
        new Activity({
          title: 'Activity1'
        }),
        new Activity({
          title: 'Activity2'
        })
      ],
      preferredDays: ['Sunday', 'Wednesday'],
      settings: {
        reminders: 'daily'
      }
    }
    const { error } = validate(userData)
    const user = await new User(userData).save()

    expect(error).toBe(null)
    expect(await User.count()).toEqual(1)
    expect(user.id).not.toEqual(null)
  })

  describe('Validations', () => {
    describe('mobile number', () => {
      test('mobile number should contain only digits', async done => {
        const user = new User({
          phone: {
            countryCode: '+91',
            number: 'abcdefghij'
          }
        })
        await user.validate(err => {
          expect(err.errors['phone.number'].message).toMatch(
            /Path `phone.number` is invalid/
          )
          done()
        })
      })

      test('country code number should start with + sign', async done => {
        const user = new User({
          phone: {
            countryCode: '91',
            number: '1234567890'
          }
        })
        await user.validate(err => {
          expect(err.errors['phone.countryCode'].message).toMatch(
            /Path `phone.countryCode` is invalid/
          )
          done()
        })
      })
    })
  })
})
