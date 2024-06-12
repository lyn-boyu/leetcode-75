export function mergeAlternately(word1: string, word2: string): string {
    const maxLength = Math.max(word1.length, word2.length);
    let ans = ''
    for (let i = 0; i < maxLength; i++) {
        const firstLetter = word1[i] ?? ''
        const secondLetter = word2[i] ?? ''
        ans += firstLetter + secondLetter
    }
    return ans
};