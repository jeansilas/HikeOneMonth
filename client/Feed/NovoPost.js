Template.NovoPost.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		var textoDoformulario = evento.target.texto.value;
		console.log(textoDoformulario);
		console.log(Meteor.userId());
        Meteor.call("inserirPost", textoDoformulario);
		evento.target.texto.value = "";
	}
});