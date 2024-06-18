/**
 * 
394. Decode String - Medium

Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], 
where the encoded_string inside the square brackets is being repeated exactly k times. 
Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid;
there are no extra white spaces, square brackets are well-formed, etc. 
Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.


Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
 

Constraints:
1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300].

*/

class DecodeString {
    tokens: string[];
    tokenString: string;
    constructor(tokenString: string) {
        this.tokenString = tokenString
        this.tokens = tokenString.split('')
        console.log('tokenString', tokenString)
    }
    // peak next token
    peak() {
        return this.tokens[0] ?? null
    }
    // get the next token and remove it
    next() {
        return this.tokens.shift() ?? null
    }
    // get the next token and remove it
    unshift(str: string) {
        return this.tokens.unshift(str)
    }
    // parse the string 
    decodeString = () => {
        console.log('decodeString', this.peak(), this.tokens,)
        let result = '';
        const isValidInput = /\d/.test(this.peak())
        if (!isValidInput) {
            return result
        }
        let numberString = '';
        let endcodedString = '';
        let currentToken = this.next();
        let repeatNumber = 0;
        // the pattern is: k[encoded_string]
        // first part: "kkk" the repeat number, the integers in s are in the range [1, 300].
        // second part: encoded_string
        // * [ encoded_string start symbol
        // * ] encoded_string end symbol
        // * else  encoded_string itself
        // decode process run only when current ===  ']'  
        while (currentToken) {
            console.log('currentToken', currentToken, repeatNumber, numberString, endcodedString)
            //  looking for k 
            if (/\d/.test(currentToken)) {
                numberString += currentToken
                //  looking for end of number string
            } else if ('[' === currentToken) {
                // parse the number string into a number 
                repeatNumber = Number.parseInt(numberString)
                // reset the number string
                numberString = ''
            } else if (']' === currentToken) {
                // start repeat process
                const strList = new Array(repeatNumber).fill(endcodedString);
                // reset the number string
                endcodedString = '';
                repeatNumber = 0;
                result += strList.join('');
            } else {
                // add the current token to the encoded string
                endcodedString += currentToken
            }
            const pre = currentToken
            // update the current 
            currentToken = this.next() ?? '';

            // check if there is an inner pattern
            if (!/\d/.test(pre) && /\d/.test(currentToken)) {
                this.unshift(currentToken)
                const innerDecodeResult = this.decodeString();
                endcodedString += innerDecodeResult
                if (!this.peak()) {
                    result += endcodedString
                }
            }

        }

        return result;
    }
}

function decodeString(str: string): string {
    const countStack: number[] = [];
    const chunkStack: string[] = [];

    let currentString = '';
    let currentNumberStr = '';

    for (let c of str) {
        if (c === '[') {
            const currentNumber = Number.parseInt(currentNumberStr);
            countStack.push(currentNumber);
            chunkStack.push(currentString);
            // reset the currentNumberStr and currentString
            currentNumberStr = '';
            // store the string inside the square brackets
            currentString = '';
        } else if (c === ']') {
            const count = countStack.pop() ?? 0;
            const chunk = chunkStack.pop();
            // concatenate the string and repeat the string inside the brackets
            currentString = chunk + currentString.repeat(count)
        } else if (/\d/.test(c)) {
            // concatenate the number string
            currentNumberStr += c
        } else {
            // concatenate the number string
            currentString += c
        }
    }

    return currentString
};

export { decodeString as solution };

