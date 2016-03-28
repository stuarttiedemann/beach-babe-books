Meteor.methods({
	thumbsUp: function(owner, id){
		check(owner, String);
		check(id, String);

		if(owner !== Meteor.userId()){
			Posts.update(id,{$inc:{count:+1}});
		}else{
			FlashMessages.sendWarning("You can't like your own post!");
		}
	}
});