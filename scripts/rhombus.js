function CalculateRhombus(){
    // console.log('rombas calculate');

    const diagonSpanInput = document.getElementById('first_diagon');
    const diagonText = diagonSpanInput.value;
    const d1 = parseFloat(diagonText);
    console.log(d1);


    const d2SpanInput = document.getElementById('second_diagon');
    const d2Text = d2SpanInput.value;
    const d2 = parseFloat(d2Text);
    console.log(d2);

    const area = 0.5 * d1 * d2;
    console.log('Total Area Of The rhombus is: ',area);
    
    const rhombusAreaCalculate = document.getElementById('rhombus-area');
    rhombusAreaCalculate.innerText = area;
 


}