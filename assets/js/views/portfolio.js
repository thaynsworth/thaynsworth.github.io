var Portfolio = Backbone.View.extend({
	el: '#portfolio',
	portfolioTemplate: _.template($('#project-template').html()),
	initialize: function() {
		this.addAll();
		this.about();
	},
	events: {
		'click #walksafe' : 'funTimez'
	},
	addOne: function(model) {
		$('#projects').prepend(this.portfolioTemplate(model.toJSON()));
		return this;
	},
	addAll: function() {
		var self = this;
		this.collection.each(function(model) {
			self.addOne(model);
		});
	},
	funTimez: function() {
		console.log('we\'re funning!');
	},
	about: function() {
		$('.lead').append("Thomas was born and raised in New Jersey, went to college in Vermont, and then moved to Charleston, SC to start his career in Hospitality.</p><p>The last four years were spent managing a staff of 30-60 employees, starting in Guest Services and then to Housekeeping. After spending 7+ years in large resort management he decided to utilize his strong leadership and problem solving skills in a new and exciting industry. He discovered  the Web Development Immersive program at General Assembly and hasn’t looked back.</p><p>Thomas has built multiple functioning applications (see below) and is excited to continue to build and learn!");
	},
});