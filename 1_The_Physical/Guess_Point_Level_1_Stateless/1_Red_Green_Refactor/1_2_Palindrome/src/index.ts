export const Palindrome = (word: string): boolean => {
    const actual: string = word.toLowerCase().replace(/ /g, '')
    
    return actual
    .split('')
    .reverse()
    .join('') === actual
}