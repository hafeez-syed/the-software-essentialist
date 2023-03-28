import PasswordValidator from './index'
import { 
    MESSAGE_LENGTH,
    MESSAGE_HAS_DIGIT,
    MESSAGE_HAS_UPPERCASE,
} from './types'

describe('password validator', () => {
    test('should not validate password, when the password length is not correct', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('abcdefghijklmnopqrstuvwxyz')
        
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_LENGTH,
            MESSAGE_HAS_DIGIT,
            MESSAGE_HAS_UPPERCASE
        ]))
    })

    test('should not validate password, when only password length is correct but it does not contain a digit', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('abcdefghijklmno')
        
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).not.toContain(MESSAGE_LENGTH)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_HAS_DIGIT,
            MESSAGE_HAS_UPPERCASE
        ]))
    })

    test('should not validate password, when only password length is correct it also contain a digit', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('7bcdefghijklmn0')
        
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).not.toContain(MESSAGE_LENGTH)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_HAS_UPPERCASE
        ]))
    })

    test('should validate password, when password length is correct, it contains a digit and an uppercase letter', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('7bcdefGhijklmn0')
        
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).not.toContain(MESSAGE_LENGTH)
        expect(result.errors).toEqual(expect.arrayContaining([
            MESSAGE_HAS_UPPERCASE
        ]))
    })
})

