const cyclic_sort = function (A) {
    let currentIndex = 0;

    while (currentIndex < A.length) {

        // Check if current element is in its correct place
        if (A[currentIndex] === currentIndex + 1) {
            currentIndex++;
        } else {
            let numberToMove = A[currentIndex]; //2
            A[currentIndex] = A[numberToMove - 1];
            A[numberToMove - 1] = numberToMove;
        }

    }
    return A;
}