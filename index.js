const apiKey = "24a9a1069e911564a0efd1f1473245c6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   

   
    if(response.stutus == 404){
       
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();


 document.querySelector(".city").innerText = data.name;
 document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
 document.querySelector(".humidity").innerText = data.main.humidity + "%";
 document.querySelector(".wind").innerText = data.wind.speed + " km/h"; 
 if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/cloud.png";
 }
 else if(data.weather[0].main == "Clear"){
     weatherIcon.src = "images/clear.png";
 }
 else if(data.weather[0].main == "Rain"){
     weatherIcon.src = "images/rain.png";
 }
 else if(data.weather[0].main == "Drizzle"){
     weatherIcon.src = "images/drizzle.png";
 }
 else if(data.weather[0].main == "Mist"){
     weatherIcon.src = "images/mist.png";
 }
 else if(data.weather[0].main == "Snow"){
     weatherIcon.src = "images/snow.png";
 }
 else{
     weatherIcon.src = "images/404.png";
 } 
 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";
    }


}



searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



checkWeather();