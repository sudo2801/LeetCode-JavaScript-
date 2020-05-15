var maxSubarraySumCircular = function(A) {
    // Kadane's Algorithm 
    function maxSubarraySum(arr) {
        let max = arr[0];
        let prevBest = 0;
        
        for(let n of arr) {
            if(prevBest > 0) prevBest += n
            else prevBest = n
            if(prevBest > max) max = prevBest
        }
        return max;
    }
    
    const linearMax = maxSubarraySum(A);
    const total = A.reduce((acc, cur) => acc + cur);
    // the minumum contigious subarray sum
    const minSubarraySum = maxSubarraySum(A.map(n => n * -1))
    // deducts(removes) the minumum contigious subarray sum from the total;
    const circularMax = total + minSubarraySum; 
    
    // edge case: if circularMax === 0, that means all nums in A are negative, 
    // thus pick the biggest num using linearMax
    if(circularMax > linearMax && circularMax !== 0) return circularMax;
    return linearMax;
};
