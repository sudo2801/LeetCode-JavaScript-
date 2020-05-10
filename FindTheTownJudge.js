var findJudge = function(N, trust) {
  let table = new Map();
  let arrN = new Set();
  let candidate = [];
  
  for (let i = 0; i < trust.length; i++) {
    const currN = trust[i];
    
    if (table.has(currN[1])) {
      table.set(currN[1], [...table.get(currN[1]), currN[0]]); 
      arrN.add(currN[0]);
    }
    if (!table.has(currN[1])) {
      table.set(currN[1], [currN[0]]);
      arrN.add(currN[0]);
    }
     
    if (table.get(currN[1]).length === N - 1) candidate.push(currN[1])
  }
  
  for (let i = 0; i < candidate.length; i++) {
    if (!arrN.has(candidate[i])) return candidate[i];
  }
  
  return N === 1 && arrN.size === 0 && table.size === 0 ? 1 : -1;
};
    
