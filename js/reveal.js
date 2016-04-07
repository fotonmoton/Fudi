window.sr = ScrollReveal();

var tagline = {
  delay    : 500,
  distance : '40px',
};

var full_opacity = {
	duration: 1500,
	distance: '100px',
	scale: 1,
	opacity: 1,
};

sr.reveal('.tagline', tagline);
sr.reveal('.img-wrap', full_opacity);
sr.reveal('.main-text', full_opacity);