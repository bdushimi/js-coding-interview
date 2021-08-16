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
    let result = [];

    //v contains a list of pairs

    for (let current_pair of v) {

        // first iteration
        if (result.length == 0) {

            result.push(current_pair);
        } else {

            // get the last pair from the array
            const recent_pair = result[result.length - 1];

            // Check if the current pair ovelaps the recent pair
            if (recent_pair.first < current_pair.first && recent_pair.second >= current_pair.first) {
                let new_pair = new Pair(recent_pair.first, current_pair.second);
                //console.log("updated pair", new_pair)
                result[result.length - 1] = new_pair;
            } else {
                result.push(new Pair(current_pair.first, current_pair.second));
                //console.log("new pair", current_pair)
            }

        }

    }
    return result;
}