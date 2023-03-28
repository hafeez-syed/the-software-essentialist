export interface ValidatorResult {
    isPasswordValid: boolean
    errors: string[]
}

export const MESSAGE_LENGTH = 'Password length should be between 5 and 15'
export const MESSAGE_HAS_DIGIT = 'Password should have at least 1 digit'
export const MESSAGE_HAS_UPPERCASE = 'Password should have at least 1 uppercase letter'