/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    
    const stack = [];
    
    for (var i = 0; i < nums.length; i++) {
        if (stack.length === 0) {
            stack.push(nums[i]);
        } else if (stack[stack.length - 1] === nums[i]) {
            stack.pop();
        } else {
            return stack[stack.length - 1];
        }
    }
    
    return stack[stack.length - 1];
};
