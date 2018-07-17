// ---------- WAYFINDING TO HIGHLIGHT ACTIVE MENU ITEM -----------------
//remember to add an ID of "mainmenu" to the nav ul
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];

if (pageHREF !== "") {
	var menu = document.querySelectorAll('ul#mainmenu li a');
	var i;
	//loop through all the menu items in the navigation
	for (i = 0; i < menu.length; i++) {
		var currentURL = (menu[i].getAttribute("href"));
		menu[i].parentNode.className = ""; //turn off hilighting by default
		if (currentURL === pageHREF) {
			menu[i].parentNode.className = "active";	//turn on if a match
		} // end if
	} // end of the search for a match
} // end of if !==

// --------------- RESPONSIVE MENU SCRIPT --------------------
/* Toggle between show and hide */
function toggleNavMenu() {
    var x = document.getElementById("nav-container");
    if (x.className === "show") {
        x.className = "hide";
    } else {
        x.className = "show";
    }
} // end of function

// --------------- WINDCHILL SCRIPT --------------------
var high = 90;
var low = 66;
var windSpeed = 5;


var avereageTemp = ((high + low) / 2);
var windChill = 35.74 + (0.6215 * avereageTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * avereageTemp) * Math.pow(windSpeed, 0.16);

windChill = Math.round(windChill) + "&deg;F";

document.getElementById("windChill").innerHTML = windChill;

// --------------- GENERATE DATE SCRIPT --------------------
var theDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
var dayName = theDays[d.getDay()];
var day = d.getDate();
var monthName = theMonths[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = dayName + ", " + day + " " + monthName + " " + year;