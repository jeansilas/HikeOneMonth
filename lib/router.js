FlowRouter.route("/", {
    // do some action for this route
    action: function(params, queryParams) {
	    	BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
    }
});
FlowRouter.route("/Sobre", {
    // do some action for this route
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});