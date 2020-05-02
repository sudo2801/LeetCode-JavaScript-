var numJewelsInStones = function(J, S) {
    var jc = 0;//jewles count
    for(var i=0;i<S.length;i++){
        if(J.indexOf(S.charAt(i))>-1){
            jc++;
        }
      }
    return jc;
};
