	var logo_y = 150;
	var logo_dir = -1;
	var logos = ["bloomIcon.png","horizon.png","startupbloom.png"];

	function ani_loop() {
		if (logo_y > 0) {
			logo_y = logo_y + logo_dir;
		}
		if (logo_y < 1) {
			logo_y = 150;
			document.getElementById('bloom-hor').style.backgroundImage = ' url(/bloom/images/bloomIcon.png), url(/bloom/images/' + logos[Math.floor((Math.random()*3))] +'), url(/bloom/images/startupbloom.png)';
		}
		document.getElementById('bloom-hor').style.backgroundPosition = '0px 0, 30px '+ logo_y +'px, '+'0px 75px, '+'0px 0, 0 0';
		t = setTimeout(ani_loop,7);
	}
	
var multiplier = 1;
var target_difference = 800;
var target_base = 3000;

function start_animation() {
	var func_el = set_animation();
	func_el.addEventListener('transitionend', reset_animation, true);
	func_el.addEventListener('webkitTransitionEnd', reset_animation, true);
}

function set_animation() {
	var el = document.querySelector('div.multiback');
	el.className = 'multiback multibackprocess';
	return el;
}

function reset_animation() {
	multiplier++;
	var el = document.querySelector('div.multiback');
	el.style.backgroundPosition = '-'+((target_base + target_difference*3)*multiplier)+'px 0, -'+((target_base + target_difference*2)*multiplier)+'px 0, -'+((target_base + target_difference)*multiplier)+'px 0, -'+(target_base*multiplier)+'px 0';
}

 $(document).ready(function() {
	ani_loop();
	//start_animation();
	});
 
