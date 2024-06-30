/**

994. Rotting Oranges - Medium

https://leetcode.com/problems/rotting-oranges/description/

You are given an m x n grid where each cell can have one of three values:

- 0 representing an empty cell,
- 1 representing a fresh orange, or
- 2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.


Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.
 

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.

*/

function orangesRotting(grid: number[][]): number {
    const rows = grid.length
    const cols = grid[0] ? grid[0].length : 0
    const queue: number[][] = []
    let freshOrange = 0;
    let minutes = 0

    // we need find the first rotten orange put it into the bfs queue
    grid.forEach((row, rowIdx) => {
        row.forEach((node, colIdx) => {
            // find the root node
            if (node === 2) {
                queue.push([colIdx, rowIdx])
            }
            // count the total fresh orange 
            if (node === 1) {
                freshOrange++
            }
        })
    })

    // if there is zero fresh orange then end at 0 minutes 
    if (freshOrange === 0) return 0

    // 4 directions only
    const directions = [
        // left 
        [-1, 0],
        //right
        [1, 0],
        // up 
        [0, -1],
        // down
        [0, 1]
    ]

    // bfs from root node with its four directions
    while (queue.length > 0) {
        const currentQueueLength = queue.length;
        let newRotten = false

        for (let i = 0; i < currentQueueLength; i++) {
            const node = queue.shift()
            const [x, y] = node ?? []

            directions.forEach((direction) => {

                const [dx, dy] = direction;
                const newX = x + dx
                const newY = y + dy

                if (newX >= 0 && newY >= 0 && newY < rows && newX < cols) {
                    const neighbourValue = grid[newY][newX]
                    if (neighbourValue === 1) {
                        newRotten = true
                        grid[newY][newX] = 2
                        freshOrange--
                        queue.push([newX, newY])
                    }
                }
            })
        }

        // only add count when find new fresh orange in one search
        if (newRotten) {
            minutes += 1
        }

    }

    // if there is any fresh orange which means rotten orange cannot reach it.
    if (freshOrange !== 0) {
        return -1
    }

    return minutes

};

export { orangesRotting as solution }