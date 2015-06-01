var Skills = Backbone.Collection.extend({
	model: Skill
});

var skillList = [
	{
		name: "Languages:",
		description: "Ruby, Javascript, HTML5, CSS3"
	},
	{
		name: "Frameworks/Architectures:",
		description: "Rails, jQuery, Backbone.js, Node.js, Express.js, AJAX, JSON, MVC, CRUD, RESTful"
	},
	{
		name: "Database Tools:",
		description: "SQL, PostgreSQL, MongoDB, ActiveRecord, BCrypt"
	},
	{
		name: "Styling/Design:",
		description: "CSS3, SASS, Bootstrap, Bourbon, Skeleton"
	}
];

var skills = new Skills(skillList);