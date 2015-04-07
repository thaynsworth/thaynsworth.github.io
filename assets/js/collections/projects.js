var Projects = Backbone.Collection.extend({
	model: Project
});

var apps = [
	{
		name: 'Project Share',
		url: 'assets/img/projectshare1.png',
		description: '<strong>ProjectShare</strong> was a group collaboration with three other classmates. It is a place for creators and professionals to start a project of their own and/or join other users on their project. Users can follow, comment and collaborate on other projects. <a href="http://104.131.217.121">Click here!</a>'
	},
	{
		name: 'RESTaurant',
		url: 'assets/img/restaurant1.png',
		description: '<strong>The RESTaurant</strong> is a restaurant Point of Sales system for servers and managers to create and update the menu, add parties, enter orders and visualize receipts.'
	},
	{
		name: 'Walksafe',
		url: 'assets/img/walksafe1.png',
		description: '<strong>WalkSafe</strong> provides a visualization of crime within the 5 boroughs of New York City. Users can create an account, then use the map to inform themselves of the safest streets or neighborhoods.'
	}
];