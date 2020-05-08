var checkStraightLine = function(coordinates) {
    
    if(coordinates.length<2) return true;
    
    let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);
    
    for(let i =2; i<coordinates.length; i++){
    
        let s = (coordinates[i][1] - coordinates[0][1])/(coordinates[i][0] - coordinates[0][0])
        if(s!==slope) return false;
        
        
    }
    return true;
    
};
