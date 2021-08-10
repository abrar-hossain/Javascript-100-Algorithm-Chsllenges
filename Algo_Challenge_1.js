/* Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.*/

function arrayReplace(inputArray, elementToReplace, substractionElem) {
    inputArray.forEach((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = substractionElem;
        }
    });

    console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);


