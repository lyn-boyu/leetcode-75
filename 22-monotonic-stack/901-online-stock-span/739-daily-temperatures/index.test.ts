/**
 
901. Online Stock Span - Medium

https://leetcode.com/problems/online-stock-span/description/

Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.
For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
Implement the StockSpanner class:

StockSpanner() Initializes the object of the class.
int next(int price) Returns the span of the stock's price given that today's price is price.
 

Example 1:
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6

*/


import { expect, test, describe } from "bun:test";
import { StockSpanner } from './index'


describe("739. Daily Temperatures - Medium", () => {

    test('Input: ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"],[[], [100], [80], [60], [70], [60], [75], [85]]', () => {
        const stockSpanner = new StockSpanner();
        expect(stockSpanner.next(100)).toEqual(1);
        expect(stockSpanner.next(80)).toEqual(1);
        expect(stockSpanner.next(60)).toEqual(1);
        expect(stockSpanner.next(70)).toEqual(2);
        expect(stockSpanner.next(60)).toEqual(1);
        // because the last 4 prices (including today's price of 75) were less than or equal to today's price.
        expect(stockSpanner.next(75)).toEqual(4);
        expect(stockSpanner.next(85)).toEqual(6);
    });

    test('Input2: [29],[91],[62],[76],[51]', () => {
        const inputs = [[29], [91], [62], [76], [51]]
        const outputs = [1, 2, 1, 2, 1]
        const stockSpanner = new StockSpanner();
        inputs.forEach((input, idx) => {
            console.log('input:', input[0])
            console.log('output:', outputs[idx])
            expect(stockSpanner.next(input[0])).toEqual(outputs[idx]);
        })
    });
});