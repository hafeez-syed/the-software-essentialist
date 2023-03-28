import PasswordValidator, { 
    PASSWORD_LENGTH, 
    PASSWORD_HAS_DIGIT, 
    PASSWORD_HAS_UPPERCASE 
} from './index'

describe('password validator', () => {
    test('should not validate password, when the password length is not correct', () => {
        const passwordValidator = new PasswordValidator()
        const result = passwordValidator.validate('12345678901234567890')
        expect(result.isPasswordValid).toBe(false)
        expect(result.errors).toContain(PASSWORD_LENGTH)
        
    })
})

