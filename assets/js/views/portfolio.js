var Portfolio = Backbone.View.extend({
	el: '#portfolio',
	portfolioTemplate: _.template($('#project-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #walksafe' : 'funTimez'
	},
	render: function() {
		$('#projects').html(this.portfolioTemplate());
		return this;
	},
	funTimez: function() {
		console.log('we\'re funning!');
	},
});