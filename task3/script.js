document.getElementById("convert-btn").addEventListener("click", () => {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = temperature;
    } else if (fromUnit === "Celsius" && toUnit === "Fahrenheit") {
        convertedTemperature = (temperature * 9/5) + 32;
    } else if (fromUnit === "Celsius" && toUnit === "Kelvin") {
        convertedTemperature = temperature + 273.15;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Celsius") {
        convertedTemperature = (temperature - 32) * 5/9;
    } else if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") {
        convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Celsius") {
        convertedTemperature = temperature - 273.15;
    } else if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") {
        convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${toUnit}`;
});
