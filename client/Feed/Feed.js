
Template.Feed.helpers({
	posts: function() {
		var postsDascollections = Posts.find().fetch();
		return postsDascollections;
	}
});