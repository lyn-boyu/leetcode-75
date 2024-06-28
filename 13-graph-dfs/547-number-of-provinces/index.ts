/**

547. Number of Provinces - Medium

https://leetcode.com/problems/number-of-provinces/description/

There are n cities. Some of them are connected, while some are not. 
If city a is connected directly with city b, and city b is connected directly with city c, 
then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 
if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Return the total number of provinces.


Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
 

Constraints:
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]

*/

function findCircleNum(isConnected: number[][]): number {
    // province count
    let count = 0
    // nodes number
    const N = isConnected.length
    // record if a node is visited
    const visited = new Array(N).fill(false);


    const dfs = (node: number) => {
        for (let neighbor = 0; neighbor < N; neighbor++) {
            if (isConnected[node][neighbor] === 1 && !visited[neighbor]) {
                // make it count only once
                visited[neighbor] = true;
                // search the connected node
                dfs(neighbor);
            }
        }
    }

    // dfs change connected ele into 0
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            // mark current node and all its connected neighbours as 0
            dfs(i)
            // add one province
            count++
        }

    }

    return count
};


export { findCircleNum as solution };