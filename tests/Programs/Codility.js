
function solution(values, K, L) {
    const count = new Array(K + 1).fill(0);
    console.log(count)
    // Count occurrences of each number in the range [1, K]
    for (let i = 0; i < values.length; i++) {
        const num = values[i];
        if (num >= 1 && num <= K) {
            count[num]++;
            console.log(count)
        }
    }

    // Check if all numbers in the range [1, K] appear at most L times
    for (let i = 1; i <= K; i++) {
        if (count[i] > L) {
            return false;
        }
    }

    return true;
}

console.log( solution([1, 1, 4, 4], 4, 2))

// let K=4
// const count = new Array(K + 1).fill(0);
// console.log(count)