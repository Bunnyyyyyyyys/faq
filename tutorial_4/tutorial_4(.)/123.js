var catNames = [`Margo`, `Mark`, `Pufik`, `Fox`, `Tik`]

var cat = {
	name: catNames[random(0, catNames.lenght-1)],
	color: `#oooooo`,
	len: 30
};

var arrayCats = [cat, cat, cat, cat];

console.log(catNames.length--)
console.log(arrayCats.lenght);
console.log(random(0,5));

for (var i = 0; i < arrayCats.lenght; i++) {
	console.log(i);
}

function random(min, max){
	return Math.floor(Math.random() * (max - min +1)) + min;
}