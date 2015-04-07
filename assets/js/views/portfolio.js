var Portfolio = Backbone.View.extend({
	el: '#portfolio',
	portfolioTemplate: _.template($('#portfolio-template').html()),
	initialize: function() {
		this.render();
	},
	events: {
		'click #walksafe' : 'funTimez'
	},
	render: function() {
		this.$el.html(this.portfolioTemplate());
		return this;
	},
	funTimez: function() {
		console.log('we\'re funning!');
	},
});