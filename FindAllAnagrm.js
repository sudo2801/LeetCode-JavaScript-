var findAnagrams = function(s, p) {
    let map = new Map(), cnt, beg = 0, end = 0, res = []
    p.split('').forEach(val => {
        if (!map.has(val))
            map.set(val, 1)
        else
            map.set(val, map.get(val) + 1)
    })
    cnt = map.size
    while (end < s.length) {
        let eChr = s[end];
        if (map.has(eChr)) {
            map.set(eChr, map.get(eChr) - 1)
            if (map.get(eChr) == 0)
                cnt--
        }
        end++
        while (cnt == 0) {
            let bChr = s[beg]
            if (map.has(bChr)) {
                map.set(bChr, map.get(bChr) + 1)
                if (map.get(bChr) > 0)
                    cnt++
            }
            if (end - beg == p.length)
                res.push(beg)
            beg++
        }
        
    }
    return res
};
