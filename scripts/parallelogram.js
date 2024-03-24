function CalculateParallelogram(){
    // console.log('Parallelogram Area');
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate the Area:
    const area = base * height;
    console.log('Area of the parallelogram is : ', area);

    const parallelogramSpanArea = document.getElementById('parallelogram-area');
    parallelogramSpanArea.innerText = area;
}