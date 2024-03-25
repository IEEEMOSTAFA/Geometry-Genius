function calculateEllipseArea(){
    // console.log('Ellipse Area Calculated');
    const firstAInput = document.getElementById('fist-a');
    const aText = firstAInput.value;
    const a = parseFloat(aText);
    console.log(a);

    const secondBInput = document.getElementById('second-b');
    const bText = secondBInput.value;
    const b = parseFloat(bText);
    console.log(b);


    const area = 3.1416 * a * b;
    console.log('Total Area Of Ellipse:  ',area);

    const ellipseArea = document.getElementById('area_ellipse');
    ellipseArea.innerText = area;
}