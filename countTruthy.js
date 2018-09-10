// Falsy 
// undefined
// null
// ''
// false
// 0 
// Nan

const array = [0, null, undefined, '', 1, 2, 3, true];

console.log(countTruthy(array))

//countTruthy(array);

function countTruthy(array) {
    let count = 0;
    for (let item of array)
        // if (item !== undefined && item !== null && item !== "" && item !== false && item !== 0 && item !== NaN)      
        if (item)
            count++;
    return count;
} 