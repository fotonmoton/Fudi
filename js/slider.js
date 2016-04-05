var slider_container = document.getElementById('slider-container');
var amount = slider_container.children.length;
var iterator = 0;
var translate_percentage = 0;

function slide() {
	iterator += 1;

	if(iterator < amount) {
		translate_percentage -= 100;
		slider_container.style.transform = "translateX(" + translate_percentage + "%)";
	} else if (iterator == amount) {
		iterator = 0;
		translate_percentage += 100 * (amount - 1);
		slider_container.style.transform = "translateX(" + translate_percentage + "%)";
	}
}

function timeout() {
	setTimeout(function() {
		slide();
		timeout();
	}, 5000);
}

timeout();