var isCousins = function(root, x, y) {
    const queue = [];
    queue.push(root);
    
    while(queue.length) {
	    // check if two target nodes exist together in the same depth level
        if (queue.filter((node) => x === node.val).length && queue.filter((node) => y === node.val).length) {
            return true;
        }
		const L = queue.length;
        for (let i = 0; i < L; i++) {
            const node = queue.shift();
			// check if the two target values share the same parent
            if (node.left && node.right) {
                if ((node.left.val === x && node.right.val === y) || (node.right.val === x && node.left.val === y)) {
                    return false;
                }
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        } 
    }
    return false;
};
