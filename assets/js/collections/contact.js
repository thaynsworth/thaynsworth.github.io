var Contact = Backbone.Collection.extend({
	model: Contact
});

var data = [

{
	description: "I would love to hear from you! I'm available for large or small projects",
	contactInfo: 
	[
	"<a href='mailto:thomas.haynsworth@gmail.com'><i class='fa fa-envelope-o fa-3x'></i><span>thomas.haynsworth@gmail.com</span></a>",
	"<a href='tel://1-908-447-6537'><i class='fa fa-mobile fa-3x'></i><span>908.447.6537</span></a>"
	],
	socialInfo:
	[
	"<a href='https://github.com/thaynsworth'><i class='fa fa-github fa-3x'></i><span>https://github.com/thaynsworth</span></a>",
	"<a href='https://www.linkedin.com/in/thomashaynsworth'><i class='fa fa-linkedin fa-3x'></i><span>https://www.linkedin.com/in/thomashaynsworth</span></a>"
	]

}

];


var contact = new Contact(data);