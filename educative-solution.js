/*
Solution #
Runtime complexity #
The runtime complexity of this solution is linear, O(n).

Memory complexity #
The memory complexity of this solution is linear, O(n).

This is the worst case when there are non-overlapping elements in the array.

This problem can be solved in a simple linear scan algorithm. We know that input is sorted by starting timestamps. Here is the approach we are following:

List of input intervals is given, and we’ll keep merged intervals in the output list.
For each interval in the input list:
If the input interval is overlapping with the last interval in output list then we’ll merge these two intervals and update the last interval of output list with merged interval.
Otherwise, we’ll add an input interval to the output list.
Below is a visual run-through of the above explanation.

The green interval in the input list represents the selected input interval. The last interval in the output list is green, either it is updated by merging this interval and selected input interval or appending input interval.
*/




class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}

let mergeIntervals = function (v) {
    if (!v || v.length === 0) {
        return;
    }

    let result = [];
    result.push(new Pair(v[0].first, v[0].second));

    for (let i = 0; i < v.length; i++) {
        let x1 = v[i].first;
        let y1 = v[i].second;
        let x2 = result[result.length - 1].first;
        let y2 = result[result.length - 1].second;

        if (y2 >= x1) {
            result[result.length - 1].second = Math.max(y1, y2);
        } else {
            result.push(new Pair(x1, y1));
        }
    }
    return result;
};

let v = [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6),
new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];

let result = mergeIntervals(v)

let result_str = ""
for (let i = 0; i < result.length; i++) {
    result_str = result_str + "[" + result[i].first + ", " + result[i].second + "] "
}
console.log(result_str)