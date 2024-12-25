function mincost(arr)
{ 
//write your code here
// return the min cost
    const minHeap = [...arr].sort((a, b) => a - b); // Sort the array to mimic heap behavior

    let totalCost = 0;

    while (minHeap.length > 1) {
        const first = minHeap.shift();
        const second = minHeap.shift();

        const cost = first + second;
        totalCost += cost;

        const index = minHeap.findIndex(x => x > cost);
        if (index === -1) {
            minHeap.push(cost);
        } else {
            minHeap.splice(index, 0, cost);
        }
    }

    return totalCost;
}

module.exports=mincost;
