var majorityElement = function(nums) {
    let map={}
    for(let char of nums){
        map[char]?map[char]++:map[char]=1
        
    }
    
    const vals = Object.values(map);
    const max = Math.max(...vals);
    return (_.invert(map))[max]
    
};
