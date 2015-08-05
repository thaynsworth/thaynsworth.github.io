var About = Backbone.Collection.extend({
	model: About
});

var data = [

{
	name: 'Tom Haynsworth | Web Developer',
	profileImage: 'assets/img/profile2.jpg',
	techAbout: 'As a Full Stack Developer I enjoy all aspects of the development process. ',
	workHistory: 'I’m a hotel management professional turned developer and have been coding/building for the last 11 months. My previous management experience has taught me the importance of communication, critical/innovative thinking, and good leadership. Combined with my technical coding skills and I know that I would be a great long-term asset to your company!',
	languages: ["devicon-html5-plain-wordmark", "devicon-javascript-plain", "devicon-ruby-plain-wordmark"],
	frameworks: ["devicon-rails-plain-wordmark", "devicon-jquery-plain-wordmark", "devicon-backbonejs-plain-wordmark", "devicon-nodejs-plain-wordmark", "devicon-wordpress-plain-wordmark", "devicon-git-plain-wordmark", "devicon-meteor-plain-wordmark"],
	database: ["devicon-postgresql-plain-wordmark", "devicon-mongodb-plain-wordmark"],
	design: ["devicon-css3-plain-wordmark", "devicon-bootstrap-plain-wordmark", "devicon-sass-original", "devicon-photoshop-line"]

}

];


var about = new About(data);