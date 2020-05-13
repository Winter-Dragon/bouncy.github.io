document.querySelector('.s12__shadow').onclick = function() {
	document.getElementById("map-delete").remove();
	document.querySelector(".s12__map").style.backgroundImage = 'none';
	document.querySelector(".s12__map").style.textAlign = 'center';
	document.querySelector(".hidden-map").style.opacity = '1';
	document.querySelector(".hidden-map").style.overflow = 'visible';
};