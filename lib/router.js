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
FlowRouter.route("/Contato", {
    // do some action for this route
    action: function(params, queryParams) {
    	BlazeLayout.render("LayoutPrincipal", {main: "Contato"});
    }
});
FlowRouter.route("/Timeline", {
    // do some action for this route
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});