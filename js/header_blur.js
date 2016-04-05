var bg = document.getElementById('header-bg');
var btn = document.getElementById('get-started');

btn.onmouseover = function() {
	bg.style.filter = 'blur(4px)';
};

btn.onmouseleave = function() {
	bg.style.filter = 'blur(0px)';
};