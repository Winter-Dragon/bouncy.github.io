document.querySelector('.s7__indicator1').onclick = function() {
	document.querySelector(".s7__indicator1").className = "s7__indicator1 s7__active-indicator";
	document.querySelector(".s7__indicator2").className = "s7__indicator2";
	document.querySelector(".s7__indicator3").className = "s7__indicator3";
	document.getElementById("s7__center_img").src ='img/s7/photo1.png';
	document.getElementById("s7__center_h2").innerHTML ='Partho';
	document.getElementById("s7__center_h3").innerHTML ='FOUNDER, ARTWAYS BD';
	};
document.querySelector('.s7__indicator2').onclick = function() {
	document.querySelector(".s7__indicator1").className = "s7__indicator1";
	document.querySelector(".s7__indicator2").className = "s7__indicator2 s7__active-indicator";
	document.querySelector(".s7__indicator3").className = "s7__indicator3";
	document.getElementById("s7__center_img").src = 'img/s7/photo2.jpg';
	document.getElementById("s7__center_h2").innerHTML = 'JIexa';
	document.getElementById("s7__center_h3").innerHTML = 'Web Developer';
	};
document.querySelector('.s7__indicator3').onclick = function() {
	document.querySelector(".s7__indicator1").className = "s7__indicator1";
	document.querySelector(".s7__indicator2").className = "s7__indicator2";
	document.querySelector(".s7__indicator3").className = "s7__indicator3 s7__active-indicator";
	document.getElementById("s7__center_img").src= 'img/s7/photo3.jpg';
	document.getElementById("s7__center_h2").innerHTML = 'Alexey';
	document.getElementById("s7__center_h3").innerHTML = 'Web Designer';
	};
document.querySelector('.s7__bottom_bot-readmore').onclick = function() {
	document.getElementById("s7__addtext").innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis provident, quod explicabo quas alias, maiores ea impedit eos nulla aperiam dolorem velit officia voluptas illum saepe quis incidunt id. Reprehenderit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero quidem non veritatis nisi, nesciunt dolorem. Fugit reiciendis voluptatibus repudiandae voluptates, quaerat doloribus accusamus ex natus, libero dolor suscipit, voluptatem!';
	document.getElementById("delete-block").innerHTML = '';
	};
document.querySelector('.s7__bottom-indicator1').onclick = function() {
	document.querySelector(".s7__bottom_bot").style.opacity = '0';
	document.querySelector(".s7__bottom-indicator1").className = "s7__bottom-indicator1 s7__bottom-active-indicator";
	document.querySelector(".s7__bottom-indicator2").className = "s7__bottom-indicator2";
	document.querySelector(".s7__bottom-indicator3").className = "s7__bottom-indicator3";
	setTimeout(function() {
    	document.getElementById("change_name").innerHTML = 'by <span class="aquamarine-new">Kabir Uddin</span>';
    	document.getElementById("change_likes").innerHTML = '6950 Likes - 243 Comments - 703 shares';
    	document.getElementById("change_text").innerHTML = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio...';
		document.getElementById("s7__addtext").innerHTML = '';
		document.getElementById("delete-block").innerHTML = '+ Read More';
		document.querySelector(".s7__bottom_bot").style.opacity = '1'
	}, 300);
};
document.querySelector('.s7__bottom-indicator2').onclick = function() {
	document.querySelector(".s7__bottom_bot").style.opacity = '0';
	document.querySelector(".s7__bottom-indicator1").className = "s7__bottom-indicator1";
	document.querySelector(".s7__bottom-indicator2").className = "s7__bottom-indicator2 s7__bottom-active-indicator";
	document.querySelector(".s7__bottom-indicator3").className = "s7__bottom-indicator3";
	setTimeout(function() {
    	document.getElementById("change_name").innerHTML = 'by <span class="aquamarine-new">No Name</span>';
   		document.getElementById("change_likes").innerHTML = '0 Likes - 0 Comments - 0 shares';
    	document.getElementById("change_text").innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam voluptatem eveniet molestias molestiae dolorem dignissimos, repellat veritatis rem voluptas, ea quidem impedit enim odit repudiandae est necessitatibus. Cumque magni, numquam!...';
		document.getElementById("s7__addtext").innerHTML = '';
		document.getElementById("delete-block").innerHTML = '+ Read More';
		document.querySelector(".s7__bottom_bot").style.opacity = '1'
	}, 300);
};
document.querySelector('.s7__bottom-indicator3').onclick = function() {
	document.querySelector(".s7__bottom_bot").style.opacity = '0';
	document.querySelector(".s7__bottom-indicator1").className = "s7__bottom-indicator1";
	document.querySelector(".s7__bottom-indicator2").className = "s7__bottom-indicator2";
	document.querySelector(".s7__bottom-indicator3").className = "s7__bottom-indicator3 s7__bottom-active-indicator";
	setTimeout(function() {
    	document.getElementById("change_name").innerHTML = 'by <span class="aquamarine-new">Alexey Galeev</span>';
    	document.getElementById("change_likes").innerHTML = '9999 Likes - 9999 Comments - 9999 shares';
    	document.getElementById("change_text").innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nulla ratione cum sequi quae, dolorem fuga adipisci natus. Odio excepturi, aliquid non quam, facere recusandae natus quas dolore similique. Nostrum....';
		document.getElementById("s7__addtext").innerHTML = '';
		document.getElementById("delete-block").innerHTML = '+ Read More';
		document.querySelector(".s7__bottom_bot").style.opacity = '1'
	}, 300);
};
