import { 
    MESSAGE_LENGTH,
    MESSAGE_HAS_DIGIT,
    MESSAGE_HAS_UPPERCASE, 
    ValidatorResult
} from './types'

class PasswordValidator {
    constructor() {}

    validate(password: string): ValidatorResult {
        let errors: string[] = [
            MESSAGE_LENGTH,
            MESSAGE_HAS_DIGIT,
            MESSAGE_HAS_UPPERCASE
        ]
        let PASSWORD_LENGTH_VALID = false
        let PASSWORD_DIGIT_VALID = false
        let PASSWORD_HAS_UPPERCASE = false

        if(password.length >= 5 && password.length <= 15) {
            errors.filter(message => message !== MESSAGE_LENGTH)
            PASSWORD_LENGTH_VALID = true
        }

        return {
            isPasswordValid: PASSWORD_LENGTH_VALID && PASSWORD_DIGIT_VALID && PASSWORD_HAS_UPPERCASE,
            errors
        }
    }
}

export default PasswordValidator