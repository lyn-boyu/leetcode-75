/**
 
2352. Equal Row and Column Pairs - Medium


Given a 0-indexed n x n integer matrix grid, 
return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal 
if they contain the same elements in the same order (i.e., an equal array).

 

Example 1:
--------------------------------
3 2 1
1 7 6
2 7 7
--------------------------------
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]

Example 2:
--------------------------------
3 1 2 2
1 4 4 5
2 4 2 2
2 4 2 2
--------------------------------
Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 

Constraints:
n == grid.length == grid[i].length
1 <= n <= 200
1 <= grid[i][j] <= 105

*/

function equalPairs(grid: number[][]): number {
    // we can use two hashmap to store the rows and columns
    // the key is contact the value of the row or column
    // the value is a array that store the index of the row or column
    // then we can calculate the number of pairs by iterating the hashmap

    function buildRowMap(grid: number[][]) {
        const map = new Map<string, number[]>();
        grid.forEach((row, idx) => {
            const key = row.join(',');
            const value = map.get(key) ?? []
            value.push(idx)
            map.set(key, value);
        });
        return map;
    }

    function buildColMap(grid: number[][]) {
        const map = new Map<string, number[]>();
        const [firstRow] = grid;
        (firstRow ?? []).forEach((_, idx) => {
            let keys = [] as number[];
            grid.forEach((row, i) => {
                keys.push(row[idx]);
            })
            const key = keys.join(',');
            const value = map.get(key) ?? []
            value.push(idx)
            map.set(key, value);
        })
        return map;
    }

    const rowMap = buildRowMap(grid);
    const colMap = buildColMap(grid);

    let pairCount = 0;

    Array.from(rowMap.entries()).forEach(([rowKey, rowValue]) => {
        const colValue = colMap.get(rowKey)
        if (colValue) {
            pairCount += (rowValue.length * colValue.length)
        }
    })

    return pairCount
};

export { equalPairs as solution };

