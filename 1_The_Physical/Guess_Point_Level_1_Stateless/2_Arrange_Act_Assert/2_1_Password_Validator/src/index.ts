import { 
    MESSAGE_LENGTH,
    MESSAGE_HAS_DIGIT,
    MESSAGE_HAS_UPPERCASE, 
    ValidatorResult
} from './types'

class PasswordValidator {
    constructor() {}

    checkPasswordLength(password: string): boolean {
        return password.length >= 5 && password.length <= 15
    }

    checkPasswordHasDigit(password: string): boolean {
        return /[0-9]/.test(password)
    }

    checkPasswordHasUppercase(password: string): boolean {
        return /[A-Z]/.test(password)
    }

    validate(password: string): ValidatorResult {
        let errors: string[] = []
        let PASSWORD_LENGTH_VALID = this.checkPasswordLength(password)
        let PASSWORD_DIGIT_VALID = this.checkPasswordHasDigit(password)
        let PASSWORD_HAS_UPPERCASE = this.checkPasswordHasUppercase(password)

        !PASSWORD_LENGTH_VALID && errors.push(MESSAGE_LENGTH)
        !PASSWORD_DIGIT_VALID && errors.push(MESSAGE_HAS_DIGIT)
        !PASSWORD_HAS_UPPERCASE && errors.push(MESSAGE_HAS_UPPERCASE)

        return {
            isPasswordValid: PASSWORD_LENGTH_VALID && PASSWORD_DIGIT_VALID && PASSWORD_HAS_UPPERCASE,
            errors
        }
    }
}

export default PasswordValidator