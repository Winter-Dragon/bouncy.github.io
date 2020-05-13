document.querySelector('.s3__item-1').onclick = function() {
					document.querySelector(".s3__works").style.gridTemplateColumns = "2fr 1fr 1fr";
					document.querySelector(".s3__blackout1").style.backgroundColor = "rgba(36, 36, 36, 0)";
					document.querySelector(".s3__blackout2").style.backgroundColor = "rgba(36, 36, 36, .85)";
					document.querySelector(".s3__blackout3").style.backgroundColor = "rgba(36, 36, 36, .85)";
				};
document.querySelector('.s3__item-2').onclick = function() {
					document.querySelector(".s3__works").style.gridTemplateColumns = "1fr 2fr 1fr";
					document.querySelector(".s3__blackout1").style.backgroundColor = "rgba(36, 36, 36, .85)";
					document.querySelector(".s3__blackout2").style.backgroundColor = "rgba(36, 36, 36, 0)";
					document.querySelector(".s3__blackout3").style.backgroundColor = "rgba(36, 36, 36, .85)";
				};
document.querySelector('.s3__item-3').onclick = function() {
					document.querySelector(".s3__works").style.gridTemplateColumns = "1fr 1fr 2fr";
					document.querySelector(".s3__blackout1").style.backgroundColor = "rgba(36, 36, 36, .85)";
					document.querySelector(".s3__blackout2").style.backgroundColor = "rgba(36, 36, 36, .85)";
					document.querySelector(".s3__blackout3").style.backgroundColor = "rgba(36, 36, 36, 0)";
				};