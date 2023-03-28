import { 
    MESSAGE_LENGTH,
    MESSAGE_HAS_DIGIT,
    MESSAGE_HAS_UPPERCASE, 
    ValidatorResult
} from './types'

class PasswordValidator {
    constructor() {}

    validate(password: string): ValidatorResult {
        let errors: string[] = []
        const PASSWORD_LENGTH_VALID = true
        const PASSWORD_DIGIT_VALID = true
        const PASSWORD_HAS_UPPERCASE = true

        if(password.length < 5 || password.length > 15) {
            errors.push(MESSAGE_LENGTH)
        }

        return {
            isPasswordValid: PASSWORD_LENGTH_VALID && PASSWORD_DIGIT_VALID && PASSWORD_HAS_UPPERCASE,
            errors: [
                MESSAGE_LENGTH,
                MESSAGE_HAS_DIGIT, 
                MESSAGE_HAS_UPPERCASE 
            ]
        }
    }
}

export default PasswordValidator