import { expect } from 'chai';

function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

expect(sum([1, 2, 3])).to.equal(6);
