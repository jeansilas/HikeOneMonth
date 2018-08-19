Template.Feed.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		var textoDoformulario = evento.target.texto.value;
		console.log(textoDoformulario);
		Posts.insert({
			texto: textoDoformulario
		});
		evento.target.texto.value = "";
	}
});

Template.Feed.helpers({
	posts: function() {
		var postsDascollections = Posts.find().fetch();
		return postsDascollections;
	}
});