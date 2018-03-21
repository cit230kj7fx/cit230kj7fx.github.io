//Retrieve Weather Data for Springfield OR
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', '//api.wunderground.com/api/ef29207c30bfe9cd/conditions/q/OR/Springfield.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
        
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('datetime').innerHTML = weatherInfo.current_observation.observation_time;

    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_string;
    
    //Allow for function to work in https mode
    var icon_path = weatherInfo.current_observation.icon_url;
    var urlString = document.location.href;
    var found = urlString.indexOf('https');
    
    if (found>=0) {
        icon_path = icon_path.replace("http","https");
    }
    
    document.getElementById('weather_icon').src =     
   icon_path;

} //end of onload function