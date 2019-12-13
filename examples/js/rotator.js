/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// A process for creating a rotating image gallery

var myImage = document.getElementById("mainImage");
var myImageCaption = document.getElementById("mainImageCaption");

var imageArray = ["images/temples/anchoragetemple.jpg", "images/temples/calgarytemple.jpg", "images/temples/paysontemple.jpg", "images/temples/portlandtemple.jpg", "images/temples/rexburgtemple.jpg", "images/temples/saltlaketemple.jpg"];
var imageIndex = 1;
var captionArray = ["Anchorage AK Temple", "Calgary AB Temple", "Payson UT Temple", "Portland OR Temple", "Rexburg ID Temple", "Salt Lake City UT Temple"];
var captionIndex = 1;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    myImage.setAttribute("alt", captionArray[captionIndex]);
    myImageCaption.innerHTML = captionArray[captionIndex];
    imageIndex++;
    captionIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
        captionIndex = 0;
    }
}


// 1000 milliseconds = 1 second
// The time value in setInterval is in milliseconds
var intervalHandle = setInterval(changeImage, 4000);

// clearInterval stops the rotation from happening
myImage.onmouseover = function() {
    clearInterval(intervalHandle);
};

// restarts the rotation from where it was previously
myImage.onmouseout = function() {
    intervalHandle = setInterval(changeImage, 5000);
};