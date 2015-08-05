var About = Backbone.Collection.extend({
	model: About
});

var data = [

{
	name: "Tom Haynsworth | Web Developer",
	profileImage: "assets/img/profile2.jpg",
	techAbout: "As a Full Stack Developer I enjoy all aspects of the development process. From researching and designing through building and deployment. I'm constantly challenging myself to use new technologies and frameworks.",
	workHistory: "I have 7+ years of management experience, leading a variety of departments in a large resort atmosphere. My previous roles involved communication, leadership, and critical/innovative thinking. Those are specific skills that I\'m bringing to the Tech industry",
	languages: ["devicon-html5-plain-wordmark", "devicon-javascript-plain", "devicon-ruby-plain-wordmark"],
	frameworks: ["devicon-rails-plain-wordmark", "devicon-jquery-plain-wordmark", "devicon-backbonejs-plain-wordmark", "devicon-nodejs-plain-wordmark", "devicon-wordpress-plain-wordmark", "devicon-git-plain-wordmark", "devicon-meteor-plain-wordmark"],
	database: ["devicon-postgresql-plain-wordmark", "devicon-mongodb-plain-wordmark"],
	design: ["devicon-css3-plain-wordmark", "devicon-bootstrap-plain-wordmark", "devicon-sass-original", "devicon-photoshop-line"]

}

];


var about = new About(data);