//setup crossroads
crossroads.addRoute('/', function(){
	render('home')
});

crossroads.addRoute('/products', function(){
	render('products')
});

crossroads.addRoute('/contact', function(){
	render('contact')
});

function render(id){
	resetPages();
	document.getElementById(id).style.display = 'block'
}

function resetPages(){
	var pages = document.querySelectorAll('.page');

	[].forEach.call(pages, function(page){
		page.style.display = 'none'
	})
}

//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change