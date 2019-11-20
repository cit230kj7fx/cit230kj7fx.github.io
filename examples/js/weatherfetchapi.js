//Retrieve Weather Data for Preston
//let weatherRequest = new XMLHttpRequest();
const urlAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ce06eddfee2de59e3e3a0fabeee489e1&";
//weatherRequest.open('GET', urlAPI, true);
//weatherRequest.send();
fetch(urlAPI)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    })
//Retrieve Forcast Data for Preston
let forecastRequest = new XMLHttpRequest();
let urlfAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ce06eddfee2de59e3e3a0fabeee489e1&";

forecastRequest.open('GET', urlfAPI, true);

forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    // Populate the 5 day forecast
    forecastDisplay(forecastData);
}

weatherRequest.onload = function() {
        //let weatherData = JSON.parse(weatherRequest.responseText);
        weatherData = JSON.parse(jsObject)
        //Populate Weather Summary with Preston Data
        weatherDisplay(weatherData);
    } //End of onload function

// Display Weather Data
function weatherDisplay(weatherData) {

    console.log(weatherData);

    // Using main instead for array

    document.getElementById("curtemp")
        .innerHTML = Math.round(weatherData.main.temp);
    document.getElementById("curhumidity").innerHTML =
        weatherData.main.humidity;
    document.getElementById("curwind")
        .innerHTML = weatherData.wind.speed;
    document.getElementById("curdesc").innerHTML = weatherData.weather[0].description;

    // Calculate Wind Chill Value
    var cur_temp = weatherData.main.temp;
    var cur_wind = weatherData.wind.speed;
    document.getElementById("curwindchill").innerHTML = calcWindchill(cur_temp, cur_wind);

    // ------------- OWM WindChill Calculator
    function calcWindchill(temp, wind) {
        let calcWindchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp) * Math.pow(wind, 0.16);

        calcWindchill = Math.round(calcWindchill);
        return calcWindchill;
    }
} //end of weatherDisplay function

//Forecast Display Function
function forecastDisplay(forecastData) {
    console.log(forecastData);

    // go through the list of forecast values looking for 18:00 (6:00 p.m.) records and record index
    let hitemp = [];
    let himonth = [];
    let hiday = [];
    let hiicon = [];
    let day = 0;
    forecastData.list.forEach(x => {
        if (x.dt_txt.includes('18:00:00')) {
            hitemp[day] = Math.round(x.main.temp);
            himonth[day] = x.dt_txt.substring(5, 7);
            hiday[day] = x.dt_txt.substring(8, 10);
            hiicon[day] = x.weather[0].icon;
            console.log(day, hitemp[day], himonth[day], hiday[day], hiicon[day]);
            day++;

        }
    });

    var Months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    // Populate the Header for the Forecast Table
    document.getElementById("day1").innerHTML = Months[himonth[0] - 1] + " " + hiday[0];
    document.getElementById("day2").innerHTML = Months[himonth[0] - 1] + " " + hiday[1];
    document.getElementById("day3").innerHTML = Months[himonth[0] - 1] + " " + hiday[2];
    document.getElementById("day4").innerHTML = Months[himonth[0] - 1] + " " + hiday[3];
    document.getElementById("day5").innerHTML = Months[himonth[0] - 1] + " " + hiday[4];

    // Populate the weather forecast icon
    var basepath = "https://openweathermap.org/img/w/";

    document.getElementById("weather_icon1").src = basepath + hiicon[0] + ".png";
    document.getElementById("weather_icon2").src = basepath + hiicon[1] + ".png";
    document.getElementById("weather_icon3").src = basepath + hiicon[2] + ".png";
    document.getElementById("weather_icon4").src = basepath + hiicon[3] + ".png";
    document.getElementById("weather_icon5").src = basepath + hiicon[4] + ".png";

    // Populate the high temperature forecast for the day
    document.getElementById("day1temp").innerHTML = hitemp[0];
    document.getElementById("day2temp").innerHTML = hitemp[1];
    document.getElementById("day3temp").innerHTML = hitemp[2];
    document.getElementById("day4temp").innerHTML = hitemp[3];
    document.getElementById("day5temp").innerHTML = hitemp[4];
} // End of Forecast Display //end of Forecast Display Function