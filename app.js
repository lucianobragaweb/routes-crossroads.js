//setup crossroads
crossroads.addRoute('/', function(){
	console.log('Hello!')
});

crossroads.addRoute('/products', function(){
	console.log('Bye!')
});

crossroads.addRoute('/contact', function(){
	console.log('Bye!')
});

//setup hasher
function parseHash(newHash, oldHash){
  crossroads.parse(newHash);
}
hasher.initialized.add(parseHash); //parse initial hash
hasher.changed.add(parseHash); //parse hash changes
hasher.init(); //start listening for history change