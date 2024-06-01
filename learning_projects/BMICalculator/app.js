// const height = document.getElementById("height")
// const weight = document.getElementById("weight")
function calculateBMI() {
    // Get the weight and height input values
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Convert height from centimeters to meters
    height = height / 100;

    // Calculate the BMI
    let bmi = weight / (height * height);

    // Determine the BMI category
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (18.5 <= bmi && bmi < 24.9) {
        category = "Normal weight";
    } else if (25 <= bmi && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    // Display the result
    document.getElementById("result").innerHTML = `Your BMI is: ${bmi.toFixed(2)}<br>Your BMI category is: ${category}`;
}