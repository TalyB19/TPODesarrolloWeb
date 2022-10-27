const result = document.querySelector('.result');
const form = document.querySelector('.get-weather');
const nameCity = document.querySelector('#city');
const nameCountry = document.querySelector('#country');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (nameCity.value === '' || nameCountry.value === '') {
        alert("Ambos campos son obligatorios");
        return;
    }

    callAPI(nameCity.value, nameCountry.value);
})

function callAPI(city, country){
    const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiId}`;

    fetch(url)
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                alert("Ciudad no encontrada");
            } else {
                clearHTML();
                showWeather(dataJSON);
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function showWeather(data){
    const {name, main:{temp, temp_min, temp_max}, weather:[arr]} = data;

    const degrees = kelvinToCentigrade(temp);
    const min = kelvinToCentigrade(temp_min);
    const max = kelvinToCentigrade(temp_max);

    const content1 = document.createElement('div');
    content1.setAttribute("id", "ciudad");
    content1.innerHTML = `
            <h3>${name}</h3>
            <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icon">
    `;

    const content2 = document.createElement('div');
    content2.setAttribute("id", "temp");
    content2.innerHTML = `
            <h3>${degrees}°C</h3>
            <p>Max: ${max}°C</p>
            <p>Min: ${min}°C</p>
    `;

    result.appendChild(content1);
    result.appendChild(content2);
}

function kelvinToCentigrade(temp){
    return parseInt(temp - 273.15);
}

function clearHTML(){
    result.innerHTML = '';
}