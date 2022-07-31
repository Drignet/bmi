function bmi(height, weight){
    let BMI = (weight / (height * height))
    if(BMI < 18.5){
        return `BMI = ${BMI} [Underweight]`;
    }
    else if(BMI >= 18.5 && BMI < 25){
        return `BMI = ${BMI} [Normal weight]`;
    }
    else if(BMI >= 25 && BMI < 30){
        return `BMI = ${BMI} [Overweight]`;
    }
    else if(BMI >= 30){
        return `BMI = ${BMI} [Obese]`;
    }
    else{
        return `invalid input`;
    }
}
    const h = document.getElementById('height');
    const w = document.getElementById('weight');
    const btn = document.getElementById('btn');

    btn.onclick = function(){
        alert(bmi(h.value , w.value));
    }
