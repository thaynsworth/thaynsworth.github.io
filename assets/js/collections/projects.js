var Projects = Backbone.Collection.extend({
	model: Project
});

var apps = [
	{
		name: 'RESTaurant',
		url: 'assets/img/restaurant1.png',
		description: ' is a restaurant Point of Sales system for servers and managers to create and update the menu, add parties, enter orders and visualize receipts.'
	},		
	{
		name: 'Walksafe',
		url: 'assets/img/walksafe1.png',
		description: ' provides a visualization of crime within the 5 boroughs of New York City. Users can create an account, then use the map to inform themselves of the safest streets or neighborhoods.'
	},
	{
		name: 'Project Share',
		url: 'assets/img/projectshare1.png',
		description: ' was a group collaboration with three other classmates. It is a place for creators and professionals to start a project of their own and/or join other users on their project. Users can follow, comment and collaborate on other projects. <button class="btn btn-primary" href="http://104.131.217.121">Click here!</button>'
	},	
	{
		name: 'Joan Haynsworth Art',
		url: 'assets/img/joan-haynsworth-art.png',
		description: ' is where Joan haynsworth sells and displays all of her art creations. <button class="btn btn-primary" href="https://joan-haynsworth-art.herokuapp.com/">Click here!</button>'
	}

];

var projects = new Projects(apps);