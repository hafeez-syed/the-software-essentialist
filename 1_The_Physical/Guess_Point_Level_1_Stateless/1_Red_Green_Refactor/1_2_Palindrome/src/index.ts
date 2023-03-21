export const Palindrome = (word: string): boolean => {
    const actual: string = word
    return word
    .toLowerCase()
    .split('')
    .reverse()
    .join('') === actual.toLowerCase()
}