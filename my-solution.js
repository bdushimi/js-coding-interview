const findMaxSlidingWindow = (array, window_size) => {

    var result = [];

    const window = [];

    window.push(0)


    // First Window
    for (let i = 1; i < window_size; i++) {

        while (window.length > 0 && array[i] >= array[window[window.length - 1]]) {
            window.pop();
        }
        window.push(i);
    }

    result.push(array[window[0]]);

    // For the reminder of the array
    for (let i = window_size; i < array.length; i++) {

        // check if the first element/index in the window array is still in window range, if not remove it
        if (window[0] <= i - window_size) window.shift();

        console.log(array[window[window.length - 1]])
        while (window.length > 0 && array[i] >= array[window[window.length - 1]]) {
            window.pop();
        }
        window.push(i);
        result.push(array[window[0]]); // this should happen after processing an individual window.
    }
    return result;
}


findMaxSlidingWindow([-4, 2, -5, 1, -1, 6], 3)


