function mincost(arr)
{ 
//write your code here
// return the min cost
   const minHeap = new MinHeap();
    arr.forEach(length => minHeap.insert(length));
    
    let totalCost = 0;
    
    while (minHeap.size() > 1) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        
        const cost = first + second;
        totalCost += cost;
        
        minHeap.insert(cost);
    }
    
    return totalCost;
}

module.exports=mincost;
