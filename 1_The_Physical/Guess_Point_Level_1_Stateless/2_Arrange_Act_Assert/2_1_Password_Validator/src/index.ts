interface ValidatorResult {
    isPasswordValid: boolean
    errors?: string[]
}
export default class PasswordValidator {
    constructor() {}

    validate(password: string): ValidatorResult {
        return {
            isPasswordValid: false,
            errors: [
                'Password length should be between 5 and 15', 
                'Password should have at least 1 digit', 
                'Password should have at least 1 uppercase letter'
            ]
        }
    }
}