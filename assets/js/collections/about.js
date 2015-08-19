var About = Backbone.Collection.extend({
	model: About
});

var data = [

{
	name: "Tom Haynsworth | Web Developer",
	profileImage: "assets/img/profile2.jpg",
	techAbout: "I'm a Freelance Web Developer that strives to push the limits on every project I undertake. As a Full Stack Developer I enjoy all aspects of the development process, from researching and designing through building and deployment. I'm constantly challenging myself to use new technologies and frameworks to enhance the user experience.",
	workHistory: "I have a wide variety of professional work experience. Prior to Technology I spent 7+ years in Hospitality Management, leading multiple departments in a large resort atmosphere. My previous roles strengthened my communication, leadership, and critical/innovative thinking skills.",
	contact: "If you're looking for a well-rounded Web Developer, look no further! <a></a>",
	languages: [
		"devicon-html5-plain-wordmark", 
		"devicon-javascript-plain", 
		"devicon-ruby-plain-wordmark"
	],
	frameworks: [
		"devicon-rails-plain-wordmark", 
		"devicon-jquery-plain-wordmark", 
		"devicon-backbonejs-plain-wordmark", 
		"devicon-nodejs-plain-wordmark", 
		"devicon-gulp-plain",
		"devicon-wordpress-plain-wordmark", 
		"devicon-git-plain-wordmark", 
		"devicon-meteor-plain-wordmark"
	],
	database: [
		"devicon-postgresql-plain-wordmark", 
		"devicon-mongodb-plain-wordmark"
	],
	design: [
		"devicon-css3-plain-wordmark", 
		"devicon-bootstrap-plain-wordmark",
		"devicon-less-plain-wordmark", 
		"devicon-sass-original", 
		"devicon-photoshop-line"
	]

}

];


var about = new About(data);