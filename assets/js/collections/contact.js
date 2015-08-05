var Contact = Backbone.Collection.extend({
	model: Contact
});

var data = [

{
	description: "I would love to hear from you! Please reach out to me for questions or comments",
	contactInfo: 
	[
	"<span class='glyphicon glyphicon-envelope'></span> thomas.haynsworth@gmail.com",
	"<span class='glyphicon glyphicon-phone'></span> 908.447.6537"
	],
	socialInfo:
	[
	"<i class='fa fa-github fa-3x'></i></i> https://github.com/thaynsworth",
	"<i class='fa fa-linkedin fa-3x'></i> https://www.linkedin.com/in/thomashaynsworth"
	]

}

];


var contact = new Contact(data);