var canConstruct = function(ransomNote, magazine) {
      var storage = {};
    ;
    
    for (var i = 0; i < magazine.length; i++) {
        var letter = magazine[i];
        
        storage[letter] = storage[letter] || 0;
        storage[letter]++;
    }
    
    
    for (var i = 0; i < ransomNote.length; i++) {
        var letter = ransomNote[i];
        
        if (!storage[letter]) {
            return false;
        }
        
        storage[letter]--;
    }
    
    return true;
};
