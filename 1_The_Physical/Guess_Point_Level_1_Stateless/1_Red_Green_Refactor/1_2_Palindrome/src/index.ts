export const Palindrome = (word: string): string => {
    return word.toLowerCase().split(',').reverse().join(',').toString()
}