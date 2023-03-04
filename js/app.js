// const fetching data from the API;
const API_KEY = `ba618ddea417393e6e47457e70072e86`;
const weatherApi = async(city) =>{
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     const res = await fetch(url);
     const data = await res.json();
     displayData(data,city);
}

// DisplayWeather Data to the FrontEnd;
const displayData = (weather,city)=>{
    //console.log(weather)
    const city_name = weather.name;
    const temparature = weather.main.temp;
    const daylight = weather.weather[0].main;

    if (city !== city_name) {
        console.log('Not Matched City')
    } else {
    const cityName = document.getElementById('cityName');
    cityName.innerText = city_name;

    const tempaRature = document.getElementById('temparature');
    tempaRature.innerText = temparature;

    const clouds = document.getElementById('clouds');
    clouds.innerText = daylight;

    const weatherStatus = document.getElementById('weatherStatus');
    weatherStatus.classList.remove('d-none');

    }

}

//Searching by cityName;
document.getElementById('searchCity').addEventListener('click',function(){
    const cityInput = document.getElementById('citynameInput');
    const cityNameValue = cityInput.value;
    weatherApi(cityNameValue);

    // Clearing the Input box;
    cityInput.value = '';
})
