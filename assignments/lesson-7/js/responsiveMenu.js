/* Toggle between show and hide */
function toggleNavMenu() {
    var x = document.getElementById("nav-container");
    if (x.className === "show") {
        x.className = "hide";
    } else {
        x.className = "show";
    }
} // end of function