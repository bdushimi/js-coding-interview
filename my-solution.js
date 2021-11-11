const getEqualSubSet = (arraySet) => {

    const sum = arraySet.reduce((acc, current) => acc + current)

    if (sum % 2 !== 0) return false;
    else return true
}

console.log(getEqualSubSet([1, 2, 3, 4]));