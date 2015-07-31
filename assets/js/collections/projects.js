var Projects = Backbone.Collection.extend({
	model: Project
});

var apps = [

	{
		name: 'WalkSafe',
		url: 'assets/img/walksafe2.png',
		description: 'WalkSafe provides a visualization of crime within the 5 boroughs of New York City. Users can create an account, then use the map to inform themselves of the safest streets or neighborhoods.\n',
		stack: ["devicon-ruby-plain colored", "devicon-javascript-plain colored", "devicon-jquery-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"], 
		target: 'walksafe-target',
		site: 'http://www.google.com',
		github: 'https://github.com/thaynsworth/final_project'
	},
	{
		name: 'ProjectShare',
		url: 'assets/img/projectshare3.png',
		description: 'ProjectShare was a group collaboration with three other developers. It is a place for creators and professionals to start a project of their own and/or join other users on their project. Users can follow, comment, and collaborate on other projects.',
		stack: ["devicon-rails-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"],
		target: 'projectshare-target',
		site: 'http://www.google.com',
		github: 'https://github.com/thaynsworth/final_project'
	},	
	{
		name: 'Joan Haynsworth Art',
		url: 'assets/img/joan-haynsworth-art.png',
		description: 'Joan Haynsworth\'s professional art gallery, consisting of oil, pastel, and digital creations.',
		stack: ["devicon-rails-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"],
		target: 'joan-target',
		site: 'http://www.google.com',
		github: 'https://github.com/thaynsworth/final_project'
	},
	{
		name: 'The Erik Hendricks Memorial Foundation',
		url: 'assets/img/ehmf.png',
		description: 'The Erik Hendricks Memorial Foundation raises money for Hairy Cell Leukemia.',
		stack: ["devicon-rails-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"],
		target: 'ehmf-target',
		site: 'http://www.google.com',
		github: 'https://github.com/thaynsworth/final_project'
	},
	{
		name: 'MTI Integrated Business Development Inc.',
		url: 'assets/img/coming_soon2.png',
		description: 'A vocational rehabilitation services provider, serving more than 100 Veterans annually.',
		stack: ["devicon-rails-plain colored", "devicon-html5-plain colored", "devicon-css3-plain colored"],
		target: 'mti-target',
		site: null,
		github: null
	}

];

var projects = new Projects(apps);