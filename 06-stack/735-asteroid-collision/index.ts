/**

735. Asteroid Collision - Medium

We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction 
(positive meaning right, negative meaning left).
Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. 
If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. 
Two asteroids moving in the same direction will never meet.


Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Constraints:
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

*/



function asteroidCollision(asteroids: number[]): number[] {
    const resultStack = [] as number[];
    for (let ele of asteroids) {

        let hasCollision = true;

        resultStack.push(ele)

        while (hasCollision === true) {
            // if there is only one element in the result stack then break the loop
            if (resultStack.length === 1) {
                break
            }

            // get the last two elements from the result stack
            const incoming = resultStack.pop()!
            const last = resultStack.pop()!

            // evaluate if the last element and the incoming element are in the same direction 
            const isSameDirection = last > 0 && incoming > 0 || last < 0 && incoming < 0
            // when last > 0 && incoming < 0 || last < 0 && incoming > 0 there is a collision
            hasCollision = !isSameDirection && last > 0 && incoming < 0

            // if there is a collision
            if (hasCollision) {
                // if asteroids has equal size then remove bo   th elements
                if (Math.abs(last) === Math.abs(incoming)) {
                    break
                }
                // if there is a collision then keep the bigger one
                const winner = Math.abs(last) > Math.abs(incoming) ? last : incoming
                resultStack.push(winner)
            }

            // if last two asteroids are in the same direction then keep them both
            if (!hasCollision) {
                resultStack.push(last)
                resultStack.push(incoming)
            }
        }
    }
    return resultStack
};

export { asteroidCollision as solution };

