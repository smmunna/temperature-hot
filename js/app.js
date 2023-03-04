// const fetching data from the API;
const API_KEY = `ba618ddea417393e6e47457e70072e86`;
const weatherApi = async(city) =>{
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     const res = await fetch(url);
     const data = await res.json();
     displayData(data);
}

// DisplayWeather Data to the FrontEnd;
const displayData = (weather)=>{
    //console.log(weather)
    const city_name = weather.name;
    const temparature = weather.main.temp;
    const daylight = weather.weather[0].main;

    const cityName = document.getElementById('cityName');
    cityName.innerText = city_name;

    const tempaRature = document.getElementById('temparature');
    tempaRature.innerText = temparature;

    const clouds = document.getElementById('clouds');
    clouds.innerText = daylight;

}

//Searching by cityName;


// Calling the WeatherApi function;
//weatherApi('dhaka')