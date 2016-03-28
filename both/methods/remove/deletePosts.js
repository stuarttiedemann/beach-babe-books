Meteor.methods({
	deletePost: function(postId){
		check(postId, String);
		
		var post = Posts.findOne(postId);
		if(post.owner !== Meteor.userId()){
			throw new Meteor.Error("Not-authorized")
		}
		Posts.remove(post._id);
	}
});