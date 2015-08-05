var Contact = Backbone.View.extend({
	el: '#contact',
	aboutTemplate: _.template($('#contact-template').html()),
	initialize: function() {
		this.addAll();
	},
	addOne: function(model) {
		$('#contact-info').append(this.aboutTemplate(model.toJSON()));
		return this;
	}, 
	addAll: function() {
		var self = this;
		this.collection.each(function(model) {
			self.addOne(model);
		});
	},

});