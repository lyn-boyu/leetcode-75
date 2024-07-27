## 1. LeetCode 75 - Top 75 Problems with Quick Feedback 🚀

[中文](./README-zh_CN.md)

Welcome to the LeetCode 75 repository! This project is designed to help you practice and improve your problem-solving skills on LeetCode's top 75 problems. 

### 1.1 ✨ Features
⚡ Quick Feedback: Modify code and get feedback instantly without waiting for submission results.

🆓 Free Debugging: Debug your code for free using the Bun extension in VSCode.

📚 Structured Learning: Handpicked top 75 problems organized into 22 categories, making it easier to focus on specific problem types and enhance your coding skills.

### 1.2 🌟 Why Create This Repository? 

Here are the main pain points this repository addresses:

1. ⏱️ **Quick Feedback**: Modify code and get feedback instantly. On the LeetCode website, you might have to wait a long time to see the results after modifying your code, wasting valuable time.
2. 💡 **Free Debugging**: Debug your code without needing to pay for LeetCode's premium subscription. Use the Bun extension in VSCode for an enhanced debugging experience.

## 2. Project Structure 📁

The repository is structured into 22 different categories.

### 2.1 File Structure 🗂️

**Categories List** 📚:
1. `1-array-string`
2. `2-two-pointer`
3. `3-sliding-window`
4. `4-prefix-sum`
5. `5-hash-map-and-set`
6. `6-stack`
7. `7-queue`
8. `8-linked-list`
9. `9-binary-tree-dfs`
10. `10-binary-tree-bfs`
11. `11-binary-search-tree`
12. `12-graph-bfs`
13. `13-graph-dfs`
14. `14-heap-priority-queue`
15. `15-binary-search`
16. `16-backtracking`
17. `17-dp-1d`
18. `18-dp-multidimensional`
19. `19-bit-manipulation`
20. `20-trie`
21. `21-intervals`
22. `22-monotonic-stack`

### 2.2 Example File Structure 🗂️

Each category contains multiple problems. For each problem, there are two files:
- `index.ts`: This is where you'll write your solution.
- `index.test.ts`: This contains test cases written using Bun to validate your solution.

**Example**: 

- `11-container-with-most-water`
  - `index.ts`: Solution file
  - `index.test.ts`: Test cases

> leetcode-75/2-two-pointer/11-container-with-most-water/index.ts

```typescript

/*
11. Container With Most Water - Medium

https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, 
such that the container contains the most water.

Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: 
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 
Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

export function maxArea(height: number[]): number {
    return -1; // Write your solution here
}
```

> leetcode-75/2-two-pointer/11-container-with-most-water/index.test.ts

```typescript

import { expect, test, describe } from "bun:test";
import { maxArea } from './index';

describe("11. Container With Most Water - Medium", () => {

    test("Input1: height = [1,8,6,2,5,4,8,3,7] ", () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        expect(maxArea(height)).toBe(49);
    });

    test("Input2: height = [1,1] ", () => {
        const height = [1, 1];
        expect(maxArea(height)).toBe(1);
    });

    test("Input3: height = [2,3,4,5,18,17,6] ", () => {
        const height = [2, 3, 4, 5, 18, 17, 6];
        expect(maxArea(height)).toBe(17);
    });

    test("Input4: height = [6,4,3,1,4,6,99,62,1,2,6] ", () => {
        const height = [6, 4, 3, 1, 4, 6, 99, 62, 1, 2, 6];
        expect(maxArea(height)).toBe(62);
    });
});
```

## 3. Usage Instructions 🛠️

### 3.1 Bun Introduction

Bun is a modern JavaScript runtime like Node or Deno. It aims to be a fast, all-in-one tool for running, testing, and bundling JavaScript & TypeScript.

#### Installing Bun

To install Bun, run the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

#### Installing the VSCode Extension

You can install the Bun extension for VSCode from this link: [Bun for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=oven.bun-vscode)

1. Open VSCode.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on Mac).
3. Search for "Bun for Visual Studio Code" and install the extension by Oven.

### 3.2 Running Tests

To run the tests and get instant feedback, use the following command:
```bash
bun run dev
```
This command will watch for changes and run tests automatically.

### 3.3 Debugging

You can set breakpoints in `index.ts` and debug your code for free. Here's how to do it using the Bun extension in VSCode:
1. Set a breakpoint in `index.ts` by adding `debugger`.
2. Switch to `index.test.ts`.
3. Open the command palette with `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac) and select `Bun: Debug`.



### 3.4 Branches 🌿

- **problems**: Contains the template with empty solution functions and test cases.
- **solutions**: Contains working solutions that pass all test cases.

You can clone the repository or fork it, then create a new branch for your practice from the `problems` branch:
```bash
git checkout -b my-practice-branch
```
Keep committing your changes as you practice to track your progress.

## 4. Contributions Welcome! 🤝

Feel free to point out any typos or contribute improvements by submitting a pull request (PR).

Happy coding! 🎉

---
