const API_KEY = "bd089d5318ca4659c9a6082b72de5300";

function onGeoOK(position) { 
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => { 
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `날씨 : ${data.weather[0].main} / 온도 : ${data.main.temp} /`;
    });
}



function onGeoError() { 
    alert("해당 위치를 찾지 못했습니다.")
}
 
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);