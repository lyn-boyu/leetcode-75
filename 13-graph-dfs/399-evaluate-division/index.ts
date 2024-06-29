/**

399. Evaluate Division - Medium

https://leetcode.com/problems/evaluate-division/description/

You are given an array of variable pairs equations and an array of real numbers values, 
where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
Each Ai or Bi is a string that represents a single variable.

You are also given some queries,
where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. 
You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

Note: The variables that do not occur in the list of equations are undefined, 
so the answer cannot be determined for them.

 

Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
Explanation: 
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]
note: x is undefined => -1.0

Example 2:
Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
Output: [3.75000,0.40000,5.00000,0.20000]

Example 3:
Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
Output: [0.50000,2.00000,-1.00000,-1.00000]
 

Constraints:
1 <= equations.length <= 20
equations[i].length == 2
1 <= Ai.length, Bi.length <= 5
values.length == equations.length
0.0 < values[i] <= 20.0
1 <= queries.length <= 20
queries[i].length == 2
1 <= Cj.length, Dj.length <= 5
Ai, Bi, Cj, Dj consist of lower case English letters and digits.


*/


function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    type GraphMap = Map<string, Map<string, number>>
    // build a graph to represent the division relations between nodes
    // the graph store the edge weight in the adjacencyMap
    // there are two edges between two nodes
    // if the edge weight from a to b is 2, then we should calc edge weight from b to a by 1 divide 2
    // if we want to query the weight between x and y then we need dfs from x to y
    // if there are edges between x and y, we should multiply the edge weight from x to y
    // if there is no edge connect x to y, then we should return -1 as the result

    const buildGraph = (edges: string[][], edgeWeights: number[]): GraphMap => {
        const graph = new Map<string, Map<string, number>>();
        // create neighbourMap to store edge weight for each node 
        edges.forEach(([start, end], idx) => {
            if (!graph.has(start)) {
                const neighbourMap = new Map<string, number>()
                graph.set(start, neighbourMap)
            }
            if (!graph.has(end)) {
                const neighbourMap = new Map<string, number>()
                graph.set(end, neighbourMap)
            }

            const weight = edgeWeights[idx];

            graph.get(start)?.set(end, weight)
            graph.get(end)?.set(start, 1 / weight)
        })

        return graph
    }

    const dfs = (current: string, target: string, graph: GraphMap, visited: Set<string>): number => {
        if (current === target) {
            return 1
        }

        visited.add(current)

        const neighbourMap = graph.get(current)!;

        if (!neighbourMap) return -1

        for (const [neighbour, weight] of neighbourMap) {
            if (!visited.has(neighbour)) {
                const result = dfs(neighbour, target, graph, visited)
                if (result !== -1) {
                    return result * weight
                }
            }
        }
        return -1
    }


    const graph = buildGraph(equations, values)
    const results: number[] = []

    for (const [start, end] of queries) {
        if (!graph.has(start) || !graph.has(end)) {
            results.push(-1)
        } else if (start === end) {
            results.push(1)
        } else {
            // each query only process each node once
            const visited = new Set<string>()
            const result = dfs(start, end, graph, visited);
            results.push(result)
        }
    }
    return results
};

export { calcEquation as solution };