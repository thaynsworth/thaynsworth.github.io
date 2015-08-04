var About = Backbone.Collection.extend({
	model: About
});

var data = [

{
	name: 'Tom Haynsworth | Web Developer',
	profileImage: 'assets/img/profile2.jpg',
	techAbout: '',
	workHistory: 'I’m a hotel management professional turned developer and have been coding/building for the last 11 months. My previous management experience has taught me the importance of communication, critical/innovative thinking, and good leadership. Combined with my technical coding skills and I know that I would be a great long-term asset to your company!'
}

];


var about = new About(data);