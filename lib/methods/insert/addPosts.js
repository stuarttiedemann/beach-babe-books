Meteor.methods({
	addPost: function(newPost, owner){
		check(newPost, String);
		check(owner, String);

		Posts.insert({
			newPosts: newPost,
			count: 0,
			createdAt: new Date(),
			owner: owner
		});
	}
});