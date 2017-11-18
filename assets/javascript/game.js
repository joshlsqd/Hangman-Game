

// Variables
var movies = ['alien', 'american beauty', 'anatomy of a murder', 'attack of the fifty foot woman', 
			'back to the future', 'blade runner', 'clockwork orange', 'et extraterrestial', 'forbidden planet',
			'ghostbusters', 'gone with the wind', 'jaws', 'jurassic park', 'metropolis', 'moon', 'pulp fiction',
			'raiders of the lost ark', 'silence of the lambs', 'star wars a new hope', 'the excorcist', 'the thing',
			'the usual suspects', 'trainspotting', 'vertigo'];

var movieImages = ['Alien.jpg', 'AmericanBeauty.jpg', 'AnatomyofaMurder.jpg', 'Attackofthe50FootWoman.jpg', 
			'BacktotheFuture.jpg', 'BladeRunner.jpg', 'ClockworkOrange.jpg', 'ET.jpg', 'ForbiddenPlanet.jpg',
			'Ghostbusters.jpg', 'GoneWithTheWind.jpg', 'Jaws.jpg', 'JurassicPark.jpg', 'Metropolis.jpg', 'Moon.jpg', 'PulpFiction.jpg',
			'Raiders of the lost ark.jpg', 'SilenceoftheLambs.jpg', 'StarwarsaNewHope.jpg', 'TheExcorcist.jpg', 'TheThing.jpg',
			'TheUsualSuspects.jpg', 'Trainspotting.jpg', 'Vertigo.jpg'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var hangmanGame = {
currentMovie: '',
currentMovieImage: '',
priorMovie: 'Blank',
priorMovieImage: 'blank.png',
guessesRemaining: 7,
lettersGuessed: [],
numberOfWins: 0,
gameMovie: '',
gameMovieArr: [],

//Game Functions
// This function starts a new game

//resetGuesses: function() {
//	this 10;
//},

startGame: function() {
	this.guessesRemaining = 7;
	var x = Math.floor(Math.random() * movies.length);
	var setMovieTitle = movies[x];
	this.currentMovie = setMovieTitle;
	this.currentMovieImage = movieImages[x];
	this.lettersGuessed = [];
	this.gameMovieArr = [];
		for (var i = 0; i < this.currentMovie.length; i++) {
		if (alphabet.indexOf(this.currentMovie[i]) > -1 ) {
			this.gameMovieArr.push("_");
		} else {
			this.gameMovieArr.push(' ');
		};
	}; 
	this.gameMovie = this.gameMovieArr.join(' ');
	this.gameMovie = this.gameMovie.replace(/,/g,' ');
	document.getElementById('movieImage').src = './assets/images/' + this.priorMovieImage;
},

resetGame: function() {
	this.guessesRemaining = 7;
	console.log(this.priorMovie);
	this.priorMovie = this.currentMovie;
	this.priorMovieImage = this.currentMovieImage;
	var x = Math.floor(Math.random() * movies.length);
	var setMovieTitle = movies[x];
	this.currentMovie = setMovieTitle;
	this.currentMovieImage = movieImages[x];
	this.lettersGuessed = [];
	this.gameMovieArr = [];
		for (var i = 0; i < this.currentMovie.length; i++) {
		if (alphabet.indexOf(this.currentMovie[i]) > -1 ) {
			this.gameMovieArr.push("_");
		} else {
			this.gameMovieArr.push(' ');
		};
	}; 
	this.gameMovie = this.gameMovieArr.join(' ');
	this.gameMovie = this.gameMovie.replace(/,/g,' ');
	console.log(this.priorMovieImage);
	document.getElementById('movieImage').src = './assets/images/' + this.priorMovieImage;
},

guessLetter: function() {
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	this.lettersGuessed.push(letter + ' ');
	   if (this.currentMovie.indexOf(letter) > -1) {
	    	for (var i = 0; i < this.currentMovie.length; i++) {
	    		if (letter === this.currentMovie[i]) { 
	    			this.gameMovieArr[i] = letter;	
	    		};
	    	} 
		} else { 
		this.guessesRemaining -= 1;
	};
	this.gameMovie = this.gameMovieArr.join(' ');
	this.gameMovie = this.gameMovie.replace(/,/g,' ');
	
},

winLoseGame: function() {
	if (this.gameMovie.replace(/ /g,'') == this.currentMovie.replace(/ /g,'')) {
	var audio = new Audio('./assets/images/fireworks.mp3');
	audio.play();
	alert('You\'ve won!!!');
	this.numberOfWins += 1;
	this.resetGame();
	} else if (this.guessesRemaining == 0) {
		alert('You have been hanged!');
		this.resetGame();
	};
}

}


//Actions
window.onload = function () {
	hangmanGame.startGame();
	$('#currentMovie').html(hangmanGame.gameMovie);
	document.getElementById('guessesRemaining').innerHTML = hangmanGame.guessesRemaining;
	document.getElementById('numberOfWins').innerHTML = 'Current # of wins: ' + hangmanGame.numberOfWins;
};

document.onkeyup = function(event) {
	    hangmanGame.guessLetter();
	    hangmanGame.winLoseGame();
        document.getElementById('guessesRemaining').innerHTML = hangmanGame.guessesRemaining;
		$('#currentMovie').html(hangmanGame.gameMovie);
		$('#lettersGuessed').html(hangmanGame.lettersGuessed);
		document.getElementById('numberOfWins').innerHTML = 'Current # of wins: ' + hangmanGame.numberOfWins;
}


//console.log(hangmanGame.currentMovie);
//document.getElementById('currentMovie').innerHTML = hangmanGame.currentMovie;

//document.getElementById('guessesRemaining').innerHTML = hangmanGame.guessesRemaining;

//document.getElementById('lettersGuessed').innerHTML = lettersGuessed;  

