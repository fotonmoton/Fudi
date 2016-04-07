window.sr = ScrollReveal();

var tagline = {
  delay    : 1000,
  distance : '40px',
  easing   : 'ease-in-out',
};

var img_wrap = {
	duration: 1500,
	distance: '100px',
	scale: 1
};

sr.reveal('.tagline', tagline);
sr.reveal('.img-wrap', img_wrap);