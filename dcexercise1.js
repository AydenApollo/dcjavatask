const values = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5]
const max = values.length;
var count = 0;
for (let i=0; i<max; i++) {
    const counter = values[i];
    if (counter === 5) {
        count ++;
    }
}
console.log(count)


function evenOnly() {
    const nums = [3, 1, 5, 2, 5, 2, 1, 4, 2, 3, 2, 5, 4, 3, 2, 4, 2, 4, 1, 5]
    var all = nums.length;  
    var numberToFind = (all % 2 !== 0) 
    if (nums === numberToFind) {
        console.log(numberToFind)
    }
    }
evenOnly();