//Retrieve Weather Data for Franklin
var weatherRequest = new XMLHttpRequest();
var urlAPI="//api.openweathermap.org/data/2.5/forecast?id=4759986&APPID=ce06eddfee2de59e3e3a0fabeee489e1&units=imperial";
weatherRequest.open('GET', urlAPI, true);

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
        
    document.getElementById("current-temp").innerHTML = weatherData.list["0"].main.temp;
    document.getElementById("hitemp").innerHTML = weatherData.list["0"].main.temp_max;
    document.getElementById("lotemp").innerHTML = weatherData.list["0"].main.temp_min;
    document.getElementById("wind_spd").innerHTML = weatherData.list["0"].wind.speed;
} //end of onload function