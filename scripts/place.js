const temp = 6;

const windSpeed = 24;

const calculateWindChill = (tempC, speedKmh) => 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);

let windChillDisplay;

if (temp <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temp, windSpeed);
    windChillDisplay = `${chill.toFixed(1)} °C`;
} else {
    windChillDisplay = "N/A";
}

document.querySelector("#windchill").textContent = windChillDisplay;