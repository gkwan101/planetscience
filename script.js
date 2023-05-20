var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");			

window.onscroll = function(){
	if (window.pageYOffset >= menu.offsetTop){
		navbar.classList.add("sticky");
	} 
	else{
		navbar.classList.remove("sticky");
	}
};

//ARRAY
var sources = ['media/Planets/earth.png', 'media/Planets/mars.png', 'media/Planets/jupiter.png', 
				'media/Comets/comet.gif','media/Comets/meteor.png', 'media/Moons/europa.png','media/Moons/deimos.png',
				'media/Moons/plutocharon.png'];
var gallery = document.getElementById("gallery");
var i = 0;
function previousImage() {
    i = (i - 1 + sources.length) % sources.length;
    updateImage();
}

function nextImage() {
    i  = (i + 1) % sources.length;
    updateImage();
}

function updateImage() {
    var currentImage = sources[i];
    gallery.src = currentImage;
	console.log(gallery.src);
}
    
// Loop to preload images so function doesnt have trouble
for (var x = 0; x < source.length; i++) {
      var img = new Image();
      img.src = sources[i];
}

//search bar in the others page
function search() {
    var query = document.getElementById('search-input').value;
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
}

document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
       search();
    }
});


