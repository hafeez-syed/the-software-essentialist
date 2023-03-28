interface ValidatorResult {
    isPasswordValid: boolean
    errors: string[]
}

export const PASSWORD_LENGTH = 'Password length should be between 5 and 15'
export const PASSWORD_HAS_DIGIT = 'Password should have at least 1 digit'
export const PASSWORD_HAS_UPPERCASE = 'Password should have at least 1 uppercase letter'

export default class PasswordValidator {
    constructor() {}

    validate(password: string): ValidatorResult {
        let errors: string[] = []
        return {
            isPasswordValid: false,
            errors: [
                PASSWORD_LENGTH,
                PASSWORD_HAS_DIGIT, 
                PASSWORD_HAS_UPPERCASE 
            ]
        }
    }
}