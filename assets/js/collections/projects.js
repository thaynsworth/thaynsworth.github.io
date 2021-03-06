var Projects = Backbone.Collection.extend({
	model: Project
});

var apps = [

	{
		name: 'WalkSafe',
		url: 'assets/img/walksafe2.png',
		description: 'WalkSafe provides a visualization of crime within the 5 boroughs of New York City. Users can create an account, then use the map to inform themselves of the safest streets or neighborhoods.',
		stack: [
			"devicon-ruby-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored", 
			"devicon-postgresql-plain-wordmark colored"
		], 
		lightboxName: 'walksafe',
		target: 'walksafe-target',
		site: null,
		github: 'https://github.com/thaynsworth/final_project'
	},
	{
		name: 'ProjectShare',
		url: 'assets/img/projectshare3.png',
		description: 'ProjectShare was a group collaboration with three other developers. It is a place for creators and professionals to start a project of their own and/or join other users on their project. Users can follow, comment, and collaborate on other projects.',
		stack: [
			"devicon-ruby-plain-wordmark colored", 
			"devicon-rails-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored", 
			"devicon-postgresql-plain-wordmark colored", 
			"devicon-bootstrap-plain-wordmark colored"
		],
		lightboxName: 'projectShare',
		target: 'projectshare-target',
		site: 'http://104.131.217.121/',
		github: 'https://github.com/thaynsworth/Gnarwhales'
	},	
	{
		name: 'Joan Haynsworth Art',
		url: 'assets/img/joan-haynsworth-art.png',
		description: 'Joan Haynsworth\'s professional art gallery, consisting of oil, pastel, and digital creations.',
		stack: [
			"devicon-ruby-plain-wordmark colored", 
			"devicon-rails-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored", 
			"devicon-postgresql-plain-wordmark colored"
		],
		lightboxName: 'joanArt',
		target: 'joan-target',
		site: 'http://www.joanhaynsworthart.com',
		github: 'https://github.com/thaynsworth/JoanOfArt'
	},
	{
		name: 'The Erik Hendricks Memorial Foundation',
		url: 'assets/img/ehmf.png',
		description: 'The Erik Hendricks Memorial Foundation raises money for Hairy Cell Leukemia.',
		stack: [
			"devicon-ruby-plain-wordmark colored", 
			"devicon-rails-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored", 
			"devicon-postgresql-plain-wordmark colored", 
			"devicon-bootstrap-plain-wordmark colored"
		],
		lightboxName: 'hendricks',
		target: 'ehmf-target',
		site: 'http://www.theerikhendricksmemorialfoundation.com',
		github: 'https://github.com/thaynsworth/erik-hendricks-foundation'
	},
	{
		name: 'www.thomashaynsworth.com',
		url: 'assets/img/tomhaynsworth.png',
		description: 'My personal website/sandbox. Constantly building and changing this but currently built with Backbone, Underscore, Bootstrap, and Lightbox',
		stack: [
			"devicon-backbonejs-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-bootstrap-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored"
		],
		lightboxName: 'tomHayns',
		target: 'tom-target',
		site: 'http://www.thomashaynsworth.com',
		github: 'https://github.com/thaynsworth/thaynsworth.github.io'
	},	
	{
		name: 'MTI Integrated Business Development Inc.',
		url: 'assets/img/coming_soon2.png',
		description: 'A vocational rehabilitation services provider, serving more than 100 Veterans annually.',
		stack: [
			"devicon-wordpress-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored"
		],
		lightboxName: 'mti',
		target: 'mti-target',
		site: null,
		github: null
	},
	{
		name: 'www.stevenresnick.com',
		url: 'assets/img/resnick-law.png',
		description: 'Steven Resnick, Attorney at Law. Built with Backbone, Underscore, ES2015, Gulp. Styled with Less and Bootstrap',
		stack: [
			"devicon-backbonejs-plain-wordmark colored", 
			"devicon-javascript-plain colored", 
			"devicon-jquery-plain-wordmark colored", 
			"devicon-bootstrap-plain-wordmark colored", 
			"devicon-html5-plain-wordmark colored", 
			"devicon-css3-plain-wordmark colored",
			"devicon-less-plain-wordmark colored",
			"devicon-gulp-plain colored"
		],
		lightboxName: 'resnick',
		target: 'resnick-target',
		site: 'http://www.stevenresnick.com',
		github: 'https://github.com/thaynsworth/resnick-family-law'
	}	

];

var projects = new Projects(apps);