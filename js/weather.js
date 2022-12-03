const API_KEY = "36ea50756d0c000c9672449ae39603b1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather");
        const city = document.querySelector("#city");

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });

}
function onGeoError() {
    alert("Can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);