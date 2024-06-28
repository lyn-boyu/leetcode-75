/**

1466. Reorder Routes to Make All Paths Lead to the City Zero - Medium

https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description

There are n cities numbered from 0 to n - 1 and n - 1 roads such that 
there is only one way to travel between two different cities (this network form a tree).
Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.

This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
Your task consists of reorienting some roads such that each city can visit the city 0. 
Return the minimum number of edges changed.
It's guaranteed that each city can reach city 0 after reorder.

 

Example 1:
Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 2:
Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 3:
Input: n = 3, connections = [[1,0],[2,0]]
Output: 0
 

Constraints:
2 <= n <= 5 * 104
connections.length == n - 1
connections[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
*/



function minReorder(n: number, connections: number[][]): number {

    const createEdgeIndex = (source: number, target: number) => `${source}-${target}`;

    const buildGraph = (edges: number[][]) => {
        // used for get target node neighbours with O(1) time complexity
        const undirectedGraph = new Map<number, number[]>()
        const directedEdgeSet = new Set<string>()

        // insert nodes
        edges.forEach(([source, target]) => {

            if (!undirectedGraph.has(source)) {
                undirectedGraph.set(source, [])
            }

            if (!undirectedGraph.has(target)) {
                undirectedGraph.set(target, [])
            }

            undirectedGraph.get(source)!.push(target)
            undirectedGraph.get(target)!.push(source)

            const directedEdgeIndex = createEdgeIndex(source, target)
            directedEdgeSet.add(directedEdgeIndex)
        })

        return { undirectedGraph, derectedEdgeSet: directedEdgeSet }
    }

    // count the changed nodes
    let changeCount = 0
    // store the visited nodes
    const visited = new Set<number>()
    // build graph for iterations
    const { undirectedGraph, derectedEdgeSet } = buildGraph(connections)

    const dfs = (node: number) => {
        // mark node visited
        visited.add(node)
        // get list
        const neighbours = undirectedGraph.get(node) ?? []

        // iterate through
        for (let neighbour of neighbours) {
            // ensures process each node once
            if (!visited.has(neighbour)) {
                // reverse the target and source to ensure all cities can reach city 0
                const directedEdgeIndex = createEdgeIndex(neighbour, node)

                // if there is no exist path from target to source then add the change count by one 
                if (!derectedEdgeSet.has(directedEdgeIndex)) {
                    changeCount++
                }

                // dfs the next node
                dfs(neighbour)
            }
        }
    }

    // start from root of the graph
    dfs(0)


    //time complexity O(V + E)
    return changeCount
};

/**
# Time Complexity: O(V + E)

## Graph Construction: 
Iterating through the connections array to build the undirected graph and directed edges set takes O(E) time, where E is the number of edges.

## DFS Traversal: 
Each node is visited once, and each edge is checked once, resulting in a total complexity of O(V + E), where V is the number of vertices (nodes) and E is the number of edges.
Space Complexity: O(V + E)
*/


/**
# Graph Storage: 
The undirected graph (using Map<number, number[]>) and the directed edges set (using Set<string>) together require O(V + E) space.

## DFS Recursion Stack: 
In the worst case, the recursion stack for DFS can reach a depth of O(V).

## Auxiliary Data Structures: 
The visited set to keep track of visited nodes requires O(V) space.

*/


export { minReorder as solution };