
let upto = 0;

function getElementValueById(ShapeId){
    const displayShapeId = document.getElementById(ShapeId);
    const displayBaseNumber = displayShapeId.value;
    return displayBaseNumber;

}

document.getElementById("CalculateTriangle").addEventListener("click",function(){
    const baseNumber = getElementValueById("base");
    const hightNumber = getElementValueById("hight");


    const area = 0.5 * baseNumber *hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Triangle =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})


document.getElementById("CalculateRectangle").addEventListener("click",function(){
    const baseNumber = getElementValueById("widthRectangle");
    const hightNumber = getElementValueById("lengthRectangle");


    const area = baseNumber * hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Rectangle =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})


document.getElementById("CalculateParallelogram").addEventListener("click",function(){
    const baseNumber = getElementValueById("baseParallelogram");
    const hightNumber = getElementValueById("hightParallelogram");


    const area = baseNumber * hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Parallelogram =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})


document.getElementById("CalculateRhombus").addEventListener("click",function(){
    const baseNumber = getElementValueById("rhombusD1");
    const hightNumber = getElementValueById("rhombusD2");


    const area = 0.5 * baseNumber * hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Rhombus =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})


document.getElementById("CalculatePentagon").addEventListener("click",function(){
    const baseNumber = getElementValueById("pentagonPerimeter");
    const hightNumber = getElementValueById("pentagonBase");


    const area = baseNumber * hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Pentagon =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})

document.getElementById("CalculateEllipse").addEventListener("click",function(){
    const baseNumber = getElementValueById("ellipseMass");
    const hightNumber = getElementValueById("ellipseBase");


    const area = baseNumber * hightNumber;
    const currentTypedNumber = document.getElementById("areaCalculation");
    const previousTypedNumber = currentTypedNumber.value;

    const count = ++upto;
    
    const newTypeNumber ="   " +count + "  Ellipse =  " + area+"cm" +"\n";
    const result = previousTypedNumber + newTypeNumber;
    
    currentTypedNumber.value = result;
})



// getElementValueById("CalculateRectangle").addEventListener("click",function(){
//     const displayBaseNumber = getElementValueById();
// })

