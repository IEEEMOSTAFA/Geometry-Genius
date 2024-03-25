// function CalculateParallelogram(){
//     // console.log('Parallelogram Area');
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     console.log(base);

//     const heightInput = document.getElementById('parallelogram-height');
//     const heightText = heightInput.value;
//     const height = parseFloat(heightText);
//     console.log(height);

//     // calculate the Area:
//     const area = base * height;
//     console.log('Area of the parallelogram is : ', area);

//     const parallelogramSpanArea = document.getElementById('parallelogram-area');
//     parallelogramSpanArea.innerText = area;
// }

// function CalculateParallelogram() {

//     //     const baseInput = document.getElementById('parallelogram-base');
//     //     const baseText = baseInput.value;
//     //     const base = parseFloat(baseText);
//     //     console.log(base);

//      const base = getParallelogramBase();
//      console.log(base);

// }
// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//         const baseText = baseInput.value;
//         const base = parseFloat(baseText);
//         return base;

// }

function CalculateParallelogram() {
    const base = getInputValueById('parallelogram-base');
    // console.log('base value',base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value',height);

    const area = base * height;
    console.log('area of the parallelogram is ',area);

    setInnerTextById('parallelogram-area', area);

}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
