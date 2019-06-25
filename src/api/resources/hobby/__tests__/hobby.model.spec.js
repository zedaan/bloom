import { Hobby } from "../hobby.model";

describe('Hobby Model', () => {
  test('placeholder', () => {
    expect(Hobby.schema.obj.title).toEqual({
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 50
    })
  })
})
