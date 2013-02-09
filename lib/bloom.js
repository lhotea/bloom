	var ball_y = 30;
	var ball_dir = 1;
	var clouds_x = 0;
	var grass_x = 0;
	var tree_x = 0;
	function ani_loop() {
		clouds_x = clouds_x - 0.2;
		tree_x = tree_x - 0.7;
		grass_x = grass_x - 1;
		ball_y = ball_y + ball_dir;
		if (ball_dir > 0  &&  ball_y > 150) {
			ball_dir = -ball_dir;
			ball_y = 150;
		}
		if (ball_dir > 0) {
			ball_dir = ball_dir * 1.0312;
		}
		if (ball_dir < 0) {
			ball_dir = ball_dir * 0.97;
		}
		if (ball_dir < 0  &&  ball_dir > -0.15) {
			ball_dir = -ball_dir;
		}
		document.getElementById('bloom-hor').style.backgroundPosition = grass_x+'px 0, 30px '+ball_y+'px, '+tree_x+'px 75px, '+clouds_x+'px 0, 0 0';
		t = setTimeout(ani_loop,10);
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
	//ani_loop();
	start_animation();
	});
 
