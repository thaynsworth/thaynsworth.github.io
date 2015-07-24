var Projects = Backbone.Collection.extend({
	model: Project
});

var apps = [

	{
		name: 'WalkSafe',
		url: 'assets/img/walksafe2.png',
		description: 'WalkSafe provides a visualization of crime within the 5 boroughs of New York City. Users can create an account, then use the map to inform themselves of the safest streets or neighborhoods.\n',
		stack: '\nRails/PostgreSQL/GeoJSON/MapBox/Javascript/HTML5/CSS3', 
		target: 'walksafe-target'
	},
	{
		name: 'ProjectShare',
		url: 'assets/img/projectshare3.png',
		description: 'ProjectShare was a group collaboration with three other developers. It is a place for creators and professionals to start a project of their own and/or join other users on their project. Users can follow, comment, and collaborate on other projects.',
		stack: '\nRails/PostgreSQL/Bootstrap/HTML5/CSS3',
		target: 'projectshare-target'
	},	
	{
		name: 'Joan Haynsworth Art',
		url: 'assets/img/joan-haynsworth-art.png',
		description: 'Joan Haynsworth\'s professional art gallery, consisting of oil, pastel, and digital creations.',
		stack: '\nRails/PostgreSQL/Javascript/HTML5/CSS3/Paperclip/Skeleton',
		target: 'joan-target'
	},
	{
		name: 'The Erik Hendricks Memorial Foundation',
		url: 'assets/img/ehmf.png',
		description: 'The Erik Hendricks Memorial Foundation raises money for Hairy Cell Leukemia.',
		stack: '\nRails/PostgreSQL/Bootstrap/HTML5/CSS3',
		target: 'ehmf-target'
	}

];

var projects = new Projects(apps);