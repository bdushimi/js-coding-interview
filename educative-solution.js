function sortColors(colors) {

    // Initialize the red, white, and blue pointers
    let red = 0;
    let white = 0;
    let blue = colors.length - 1;

    while (white <= blue) {

        // If the white pointer is pointing to red
        if (colors[white] === 0) {

            // Swap the values if the red pointer is not pointing to red
            if (colors[red] !== 0) {
                [colors[red], colors[white]] = [colors[white], colors[red]];
            }

            // Increment both the red and white pointers
            white++;
            red++;
        }

        // If the white pointer is pointing to white, no swapping is required
        // Just increment the white pointer
        else if (colors[white] === 1) {
            white++;
        }

        // If the white pointer is pointing to blue
        else {

            // Swap the values if the blue pointer is not pointing to blue
            if (colors[blue] !== 2) {
                [colors[white], colors[blue]] = [colors[blue], colors[white]];
            }

            // Decrement the blue pointer
            blue--;
        }
    }

    return colors;
}

// Driver code
const inputs = [
    [0, 1, 0],
    [1, 1, 0, 2],
    [2, 1, 1, 0, 0],
    [2, 2, 2, 0, 1, 0],
    [2, 1, 1, 0, 1, 0, 2]
];

// Iterate over the inputs and print the sorted array for each
for (let i = 0; i < inputs.length; i++) {

    console.log(i + 1 + ".\tcolors:", arrayToString(inputs[i]),
        "\n\n\tThe sorted array is:", arrayToString(sortColors(inputs[i])));

    console.log("-".repeat(100));
}