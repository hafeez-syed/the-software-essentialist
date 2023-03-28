import PasswordValidator from './index'

describe('password validator', () => {
    test('should not validate password, when the password length is not correct', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('12345678901234567890')

        expect(result).toBe(false)
        
    })
})

