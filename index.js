

// Converts Grams into Kilograms.
document.getElementById("convertGrams").onclick = function gramsToKg(){
    let grams = document.getElementById("grams").value;
    let gramResult = (grams / 1000).toFixed(3);
    document.getElementById("result-kilograms").textContent = gramResult;
}

//Converts Miles to Kilometers
document.getElementById("convertMiles").onclick = function milesToKilometers(){
    let miles = document.getElementById("miles").value;
    let milesResult = (miles * 1.609).toFixed(3);
    document.getElementById("result-kilometers").textContent = milesResult;
}

//Converts Fahrenheit to celsius
document.getElementById("convertFahrenheit").onclick = function fahrenheitToCelsius(){
    let fahrenheit = document.getElementById("fahrenheit").value;
    let fahrenheitResult = ((fahrenheit - 32) * 5/9).toFixed(3);
    document.getElementById("result-celsius").textContent = fahrenheitResult;
}

//Converts Kilograms to Grams
document.getElementById("convertKilograms").onclick = function kilogramsToGrams(){
    let kilograms = document.getElementById("kilograms").value;
    let kilogramsResult = (kilograms * 1000).toFixed(3);
    document.getElementById("result-grams").textContent = kilogramsResult;
}
       
//Converts Kilometers to Miles
document.getElementById("convertKilometers").onclick = function kilometeresToMiles(){
    let kilometers = document.getElementById("Kilometers").value;
    let kilometersResult = (kilometers / 1.609).toFixed(3);
    document.getElementById("result-miles").textContent = kilometersResult;
}
        
//Converts Celsius to Fahrenheit
document.getElementById("convertCelsius").onclick = function celsiusToFahrenheit(){
    let celsius = document.getElementById("celsius").value;
    let celsiusResult = ((9/5 * celsius) + 32).toFixed(3);
    document.getElementById("result-fahrenheit").textContent = celsiusResult;
}
