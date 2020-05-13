function scrollTo(element){
	window.scroll({
		left: 0,
		top: element.offsetTop,
		behavior: 'smooth'
	})
};

var button = document.querySelector('.header__bottom_icon');
var about = document.querySelector('#scroll_about');
var services = document.querySelector('#scroll_services');
var portfolio = document.querySelector('#scroll_portfolio');
var team = document.querySelector('#scroll_team');
var blog = document.querySelector('#scroll_blog');
var contact = document.querySelector('#scroll_contact');

var section = document.querySelector('.s1');
var sectionAbout = document.querySelector('.s2');
var sectionServices = document.querySelector('.s4');
var sectionPortfolio = document.querySelector('.s5');
var sectionTeam = document.querySelector('.s6');
var sectionBlog = document.querySelector('.s7');
var sectionContact = document.querySelector('.s10');

button.addEventListener('click', () => {
	scrollTo(section);
});

about.addEventListener('click', () => {
	scrollTo(sectionAbout);
});

services.addEventListener('click', () => {
	scrollTo(sectionServices);
});

portfolio.addEventListener('click', () => {
	scrollTo(sectionPortfolio);
});

team.addEventListener('click', () => {
	scrollTo(sectionTeam);
});

blog.addEventListener('click', () => {
	scrollTo(sectionBlog);
});

contact.addEventListener('click', () => {
	scrollTo(sectionContact);
});