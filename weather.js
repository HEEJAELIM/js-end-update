

function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5682&lon=126.9977&appid=f8d2f0511c3e602e4be5f13439441c79&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        city.innerText =data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function fail() {
    alert("Fail..")
}

navigator.geolocation.getCurrentPosition(success, fail)