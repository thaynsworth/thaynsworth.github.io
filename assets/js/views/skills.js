var Skills = Backbone.View.extend({
	el: "#skills",
	skillsTemplate: _.template($('#skills-template').html()),
	initialize: function() {
		this.addAll();
	},
	addOne: function(model) {
		$('#skills-list').append(this.skillsTemplate(model.toJSON()));
		return this;
	}, 
	addAll: function() {
		var self = this;
		this.collection.each(function(model) {
			self.addOne(model);
		});
	},

});