const longest_substring_with_k_distinct = function (str, k) {

    let windowStart = 0;
    let windowEnd = 0;
    let tempStringLen = 0;
    let maxStringLen = 0;
    let distinctChars = new Map();


    while (windowEnd < str.length) {
        let currentChar = str[windowEnd];

        // Check if this character exists in our hashMap
        if (distinctChars.get(currentChar)) {

            // If there's an entry, update it's occurence frequency
            let currentCharFrequency = distinctChars.get(currentChar)

            // Update the frequency of the current character in the map
            currentCharFrequency += 1;
            distinctChars.set(currentChar, currentCharFrequency)

            // Update the size of the substring formed so far
            tempStringLen += 1; // Increments by one since 1 char got just added.

            windowEnd++

        } else {
            // The current Character is not yet in the map
            // Check if the distinct chars counter i.e size of the distinctCharsMap > K
            if (distinctChars.size < k) {
                // Add the current char in the map
                distinctChars.set(currentChar, 1)

                // Update the size of the substring formed so far
                tempStringLen += 1; // Increments by one since 1 char got just added.

                windowEnd++

            } else {
                // The current Character is not yet in the map AND
                // The distinct chars have reached the max limit

                // Steps
                // 1. Check if the current substring length > than max substring leng
                if (tempStringLen > maxStringLen) maxStringLen = tempStringLen;

                // 2. Clean / Clear the map to remove existing data
                distinctChars.clear()

                // 3. Reset the counters so it starts on the next char
                windowStart += 1
                windowEnd = windowStart

                // 4. Reset the tempStringLen counter
                tempStringLen = 0

            }
        }

    }

    return maxStringLen;
};
