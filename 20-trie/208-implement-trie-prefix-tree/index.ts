/**

208. Implement Trie (Prefix Tree) - Medium

https://leetcode.com/problems/search-suggestions-system/description/

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. 
There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:
- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 

Example 1:
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
 

Constraints:
1 <= word.length, prefix.length <= 2000
word and prefix consist only of lowercase English letters.
At most 3 * 104 calls in total will be made to insert, search, and startsWith.
*/

class TrieNode {
    children: Map<string, TrieNode>
    word: string | null

    constructor() {
        this.children = new Map();
        this.word = null
    }
}

export class Trie {

    root: TrieNode;
    
    constructor() {
        this.root = new TrieNode()
    }

    insert(word: string): void {
        let node = this.root;
        // dfs to the bottom
        for (let char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode())
            }
            node = node.children.get(char)!
        }
        node.word = word
    }

    search(word: string): boolean {
        let node = this.root
        for (let char of word) {
            if (!node.children.has(char)) {
                // early break if cannot find char node
                return false
            }
            node = node.children.get(char)!
        }
        // until reach the leaf node
        return node.word === word
    }

    startsWith(prefix: string): boolean {
        let node = this.root
        for (let char of prefix) {
            if (!node.children.has(char)) {
                return false
            }
            node = node.children.get(char)!
        }
        // return true if each char in prefix can find in Trie 
        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

