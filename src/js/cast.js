
function Link(type, url, text) {
	this.type = type;
	this.url = url;
	this.text = text;
}

function App(name, description, linksAndImages) {
	this.name = name;
	this.description = description;

	// build array of each link and image path passed
	this.links = [];
	this.images = [];
	for( var i = 2; i < arguments.length; i++) {
		if( typeof arguments[i] === 'string') {
			this.images.push(arguments[i]);
		} else if( arguments[i] instanceof Link) {
			this.links.push(arguments[i]);
		}
	}
};

function Model() {
	this.apps = ko.observableArray();
};

cast = {};

cast.setup = function() {
	cast.model = new Model();
	ko.applyBindings(cast.model);
	cast.populateApps();
};

cast.populateApps = function() {
	cast.model.apps.push(new App(
		'Word Clock',
		'Displays a grid of words with the current time lit up. Colors can be customized.',
		'img/receiver.png',
		'img/sender.png',
		new Link('btn-primary', 'http://cast.geniusburger.me/wordclock', 'Use Chrome'),
		new Link('btn-default', 'http://cast.geniusburger.me/wordclock/receiver.html', 'Try Demo')
	));
};

$(document).ready(cast.setup);