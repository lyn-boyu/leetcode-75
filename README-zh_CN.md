
## 中文版本README

欢迎来到LeetCode 75仓库！这个项目旨在帮助你练习和提升你在LeetCode上解决前75个问题的能力。

### 1.1 ✨ 特性

- ⚡ **快速反馈**: 修改代码后立即获得反馈，无需等待提交结果。

- 🆓 **免费调试**: 使用VSCode中的Bun扩展免费调试代码。

- 📚 **Structured Learning**: 按类型分为22个类别，专注高频的75个问题，快速提升你的解题技巧

### 1.2 🌟 为什么创建这个仓库？

这个仓库解决了以下主要痛点：

1. ⏱️ **快速反馈**: 修改代码后立即获得反馈。在LeetCode网站上，你可能需要等待很长时间才能看到修改代码后的运行结果，浪费宝贵的时间。
2. 💡 **免费调试**: 无需支付LeetCode的高级订阅费用即可调试代码。使用VSCode中的Bun扩展可以获得增强的调试体验。


## 2. 项目结构 📁

这个仓库分为22个不同的类别。

### 2.1 文件结构 🗂️

**类别列表** 📚：
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

### 2.2 示例文件结构 🗂️

每个类别包含多个问题。每个问题有两个文件：
- `index.ts`：在这里编写你的解决方案。
- `index.test.ts`：使用Bun编写的测试用

例来验证你的解决方案。

**示例**： 

- `11-container-with-most-water`
  - `index.ts`：解决方案文件
  - `index.test.ts`：测试用例

> - leetcode-75/2-two-pointer/11-container-with-most-water/index.ts

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

> - leetcode-75/2-two-pointer/11-container-with-most-water/index.test.ts

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

## 3. 使用说明 🛠️

### 3.1 Bun简介

Bun是一个现代的JavaScript运行时，类似于Node或Deno。它旨在成为一个快速的、一体化的工具，用于运行、测试和打包JavaScript和TypeScript。

#### 安装Bun

要安装Bun，运行以下命令：

```bash
curl -fsSL https://bun.sh/install | bash
```

#### 安装VSCode扩展

你可以从这个链接安装Bun的VSCode扩展：[Bun for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=oven.bun-vscode)

1. 打开VSCode。
2. 点击侧边栏中的扩展图标，或者按 `Ctrl+Shift+X` (`Cmd+Shift+X` 在Mac上)。
3. 搜索 "Bun for Visual Studio Code"，并安装由Oven发布的扩展。

### 3.2 运行测试

要运行测试并获得即时反馈，使用以下命令：
```bash
bun run dev
```
这个命令会监视文件变化并自动运行测试。

### 3.3 调试

你可以在`index.ts`中设置断点，并免费调试你的代码。以下是使用VSCode中Bun扩展的方法：
1. 在`index.ts`中添加`debugger`来设置断点。
2. 切换到`index.test.ts`。
3. 打开命令面板 `Ctrl+Shift+P` (`Cmd+Shift+P` 在Mac上) 并选择 `Bun: Debug`。


### 3.4 分支 🌿

- **problems**：包含空的解决方案函数和测试用例。
- **solutions**：包含可以通过所有测试用例的工作解决方案。

你可以克隆这个仓库或进行fork，然后从`problems`分支创建一个新分支来进行练习：
```bash
git checkout -b my-practice-branch
```
在练习过程中不断提交你的更改，以跟踪你的进度。

## 4. 欢迎贡献！🤝

如果你发现任何拼写错误或有改进建议，欢迎提交Pull Request（PR）。

祝编码愉快！🎉