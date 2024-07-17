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

import { expect, test, describe } from "bun:test";
import { Trie } from './index'


describe("208. Implement Trie (Prefix Tree) - Medium", () => {
    const trie = new Trie();

    test('1. insert and search apple should return true', () => {
        trie.insert("apple");
        const res = trie.search("apple")
        expect(res).toEqual(true);
    });

    test('2. search non exist word should return false', () => {
        expect(trie.search("app")).toEqual(false);
    });

    test('3. call startsWith "app" should return true', () => {
        expect(trie.startsWith("app")).toEqual(true);
    });

    test('4. call insert and search "app" should return true', () => {
        trie.insert("app");
        const res = trie.search("app")
        expect(res).toEqual(true);
    });

});