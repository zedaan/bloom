import { Activity } from './activity.model'

describe('Activity Model', () => {
  test('placeholder', () => {
    expect(Activity.schema.obj.title).toEqual({
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50
    })
  })
})
