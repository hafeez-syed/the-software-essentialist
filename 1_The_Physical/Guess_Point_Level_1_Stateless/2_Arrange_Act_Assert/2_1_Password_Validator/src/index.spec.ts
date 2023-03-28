import PasswordValidator from './index'
import { 
    MESSAGE_LENGTH,
    MESSAGE_HAS_DIGIT,
    MESSAGE_HAS_UPPERCASE,
} from './types'

describe('password validator', () => {
    test('should not validate password, when the password length is not correct', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('12345678901234567890')
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_LENGTH,
            MESSAGE_HAS_DIGIT,
            MESSAGE_HAS_UPPERCASE
        ]))
    })

    test('should not validate password, when on the password length is correct', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('123456789012345')
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_HAS_DIGIT,
            MESSAGE_HAS_UPPERCASE
        ]))
    })
})

