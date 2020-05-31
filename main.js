
/////////////////////////////--------- Data and Arrays ---------/////////////////////////////


var NHLteams = ["Anaheim Ducks", "Arizona Coyotes", "Boston Bruins", "Buffalo Sabres", "Calgary Flames", "Carolina Hurricanes", "Chicago Blackhawks", "Colarado Avalanche", "Columbus Blue Jackets", "Dallas Stars", "Detroit Red Wings", "Edmonton Oilers", "Florida Panthers", "Los Angeles Kings", "Minnesota Wild", "Montreal Canadiens", "Nashville Predators", "New Jersy Devils", "New York Islanders", "New York Rangers", "Ottawa Senators", "Philadelphia Flyers", "Pittsburgh Penguins", "San Jose Sharks", "St. Louis Blues", "Tampa Bay Lightning", "Toronto Maple Leafs", "Vancouver Canucks", "Vegas Golden Knights", "Washington Capitals", "Winnepeg Jets", "All Players", "Free Agents"]
var NHLteamAbrev = ["ANA", "ARZ", "BOS", "BUF", "CGY", "CAR", "CHI", "COL", "CBJ", "DAL", "DET", "EDM", "FLA", "LAK", "MIN", "MON", "NSH", "NJD", "NYI", "NYR", "OTT", "PHI", "PIT", "SJS", "STL", "TBL", "TOR", "VAN", "VGK", "WSH", "WIN", "FA"]
var NHLteamColors = ["rgb(181, 152, 90)", "rgb(140, 38, 51)", "rgb(252, 181, 20)", "rgb(0, 38, 84)", "rgb(206, 17, 38)", "rgb(206, 17, 38)", "rgb(207, 10, 34)", "rgb(111, 68, 31)", "rgb(0, 38, 84)", "rgb(0, 104, 71)", "rgb(204, 9, 47)", "rgb(255, 76, 0)", "rgb(200, 16, 46)", "rgb(0, 0, 0)", "rgb(2, 73, 48)", "rgb(175, 30, 45)", "rgb(255, 184, 28)", "rgb(206, 17, 38)", "rgb(0, 83, 155)", "rgb(0, 56, 169)", "rgb(206, 17, 38)", "rgb(247, 73, 2)", "rgb(0, 0, 0)", "rgb(0, 109, 117)", "rgb(0, 47, 135)", "rgb(0, 40, 104)", "rgb(0, 32, 91)", "rgb(6, 27, 46)", "rgb(51, 63, 66)", "rgb(191, 0, 46)", "rgb(4, 30, 65)"]
var NHLplayer = []
var NHLdefense = []
var playerRows = []
var NHLforwardPositions = ["C", "C", "C", "LW", "LW", "LW", "RW", "RW", "RW", "C", "W"]
var NHLdefensePositions = ["LD", "LD", "LD", "LD", "RD", "RD", "RD", "RD", "D", "D", "D"]
var playerNames = ["Liam", "Noah", "William", "James", "Oliver", "Benjamin", "Elijah", "Lucas", "Mason", "Logan", "Alexander", "Ethan", "Jacob", "Michael", "Daniel", "Henry", "Jackson", "Sebastian", "Aiden", "Matthew", "Samuel", "David", "Joseph", "Carter", "Owen", "Wyatt", "John", "Jack", "Luke", "Jayden", "Dylan", "Grayson", "Levi", "Isaac", "Gabriel", "Julian", "Mateo", "Anthony", "Jaxon", "Lincoln", "Joshua", "Christopher", "Andrew", "Theodore", "Caleb", "Ryan", "Asher", "Nathan", "Thomas", "Leo", "Isaiah", "Charles", "Josiah", "Hudson", "Christian", "Hunter", "Connor", "Eli", "Ezra", "Aaron", "Landon", "Adrian", "Jonathan", "Nolan", "Jeremiah", "Easton", "Elias", "Colton", "Cameron", "Carson", "Robert", "Angel", "Maverick", "Nicholas", "Dominic", "Jaxson", "Greyson", "Adam", "Ian", "Austin", "Santiago", "Jordan", "Cooper", "Brayden", "Roman", "Evan", "Ezekiel", "Xavier", "Jose", "Jace", "Jameson", "Leonardo", "Bryson", "Axel", "Everett", "Parker", "Kayden", "Miles", "Sawyer", "Jason", "Declan", "Weston", "Micah", "Ayden", "Wesley", "Luca", "Vincent", "Damian", "Zachary", "Silas", "Gavin", "Chase", "Kai", "Emmett", "Harrison", "Nathaniel", "Kingston", "Cole", "Tyler", "Bennett", "Bentley", "Ryker", "Tristan", "Brandon", "Kevin", "Luis", "George", "Ashton", "Rowan", "Braxton", "Ryder", "Gael", "Ivan", "Diego", "Maxwell", "Max", "Carlos", "Kaiden", "Juan", "Maddox", "Justin", "Waylon", "Calvin", "Giovanni", "Jonah", "Abel", "Jayce", "Jesus", "Amir", "King", "Beau", "Camden", "Alex", "Jasper", "Malachi", "Brody", "Jude", "Blake", "Emmanuel", "Eric", "Brooks", "Elliot", "Antonio", "Abraham", "Timothy", "Finn", "Rhett", "Elliott", "Edward", "August", "Xander", "Alan", "Dean", "Lorenzo", "Bryce", "Karter", "Victor", "Milo", "Miguel", "Hayden", "Graham", "Grant", "Zion", "Tucker", "Jesse", "Zayden", "Joel", "Richard", "Patrick", "Emiliano", "Avery", "Nicolas", "Brantley", "Dawson", "Myles", "Matteo", "River", "Steven", "Thiago", "Zane", "Matias", "Judah", "Messiah", "Jeremy", "Preston", "Oscar", "Kaleb", "Alejandro", "Marcus", "Mark", "Peter", "Maximus", "Barrett", "Jax", "Andres", "Holden", "Legend", "Charlie", "Knox", "Kaden", "Paxton", "Kyrie", "Kyle", "Griffin", "Josue", "Kenneth", "Beckett", "Enzo", "Adriel", "Arthur", "Felix", "Bryan", "Lukas", "Paul", "Brian", "Colt", "Caden", "Leon", "Archer", "Omar", "Israel", "Aidan", "Theo", "Javier", "Remington", "Jaden", "Bradley", "Emilio", "Colin", "Riley", "Cayden", "Phoenix", "Clayton", "Simon", "Ace", "Nash", "Derek", "Rafael", "Zander", "Brady", "Jorge", "Jake", "Louis", "Damien", "Karson", "Walker", "Maximiliano", "Amari", "Sean", "Chance", "Walter", "Martin", "Finley", "Andre", "Tobias", "Cash", "Corbin", "Arlo", "Iker", "Erick", "Emerson", "Gunner", "Cody", "Stephen", "Francisco", "Killian", "Dallas", "Reid", "Manuel", "Lane", "Atlas", "Rylan", "Jensen", "Ronan", "Beckham", "Daxton", "Anderson", "Kameron", "Raymond", "Orion", "Cristian", "Tanner", "Kyler", "Jett", "Cohen", "Ricardo", "Spencer", "Gideon", "Ali", "Fernando", "Jaiden", "Titus", "Travis", "Bodhi", "Eduardo", "Dante", "Ellis", "Prince", "Kane", "Luka", "Kash", "Hendrix", "Desmond", "Donovan", "Mario", "Atticus", "Cruz", "Garrett", "Hector", "Angelo", "Jeffrey", "Edwin", "Cesar", "Zayn", "Devin", "Conor", "Warren", "Odin", "Jayceon", "Romeo", "Julius", "Jaylen", "Hayes", "Kayson", "Muhammad", "Jaxton", "Joaquin", "Caiden", "Dakota", "Major", "Keegan", "Sergio", "Marshall", "Johnny", "Kade", "Edgar", "Leonel", "Ismael", "Marco", "Tyson", "Wade", "Collin", "Troy", "Nasir", "Conner", "Adonis", "Jared", "Rory", "Andy", "Jase", "Lennox", "Shane", "Malik", "Ari", "Reed", "Seth", "Clark", "Erik", "Lawson", "Trevor", "Gage", "Nico", "Malakai", "Quinn", "Cade", "Johnathan", "Sullivan", "Solomon", "Cyrus", "Fabian", "Pedro", "Frank", "Shawn", "Malcolm", "Khalil", "Nehemiah", "Dalton", "Mathias", "Jay", "Ibrahim", "Peyton", "Winston", "Kason", "Zayne", "Noel", "Princeton", "Matthias", "Gregory", "Sterling", "Dominick", "Elian", "Grady", "Russell", "Finnegan", "Ruben", "Gianni", "Porter", "Kendrick", "Leland", "Pablo", "Allen", "Hugo", "Raiden", "Kolton", "Remy", "Ezequiel", "Damon", "Emanuel", "Zaiden", "Otto", "Bowen", "Marcos", "Abram", "Kasen", "Franklin", "Royce", "Jonas", "Sage", "Philip", "Esteban", "Drake", "Kashton", "Roberto", "Harvey", "Alexis", "Kian", "Jamison", "Maximilian", "Adan", "Milan", "Phillip", "Albert", "Dax", "Mohamed", "Ronin", "Kamden", "Hank", "Memphis", "Oakley", "Augustus", "Drew", "Moises", "Armani", "Rhys", "Benson", "Jayson", "Kyson", "Braylen", "Corey", "Gunnar", "Omari", "Alonzo", "Landen", "Armando", "Derrick", "Dexter", "Enrique", "Bruce", "Nikolai", "Francis", "Rocco", "Kairo", "Royal", "Zachariah", "Arjun", "Deacon", "Skyler", "Eden", "Alijah", "Rowen", "Pierce", "Uriel", "Ronald", "Luciano", "Tate", "Frederick", "Kieran", "Lawrence", "Moses", "Rodrigo", "Brycen", "Leonidas", "Nixon", "Keith", "Chandler", "Case", "Davis", "Asa", "Darius", "Isaias", "Aden", "Jaime", "Landyn", "Raul", "Niko", "Trenton", "Apollo", "Cairo", "Izaiah", "Scott", "Dorian", "Julio", "Wilder", "Santino", "Dustin", "Donald", "Raphael", "Saul", "Taylor", "Ayaan", "Duke", "Ryland", "Tatum", "Ahmed", "Moshe", "Edison", "Emmitt", "Cannon", "Alec", "Danny", "Keaton", "Roy", "Conrad", "Roland", "Quentin", "Lewis", "Samson", "Brock", "Kylan", "Cason", "Ahmad", "Jalen", "Nikolas", "Braylon", "Kamari", "Dennis", "Callum", "Justice", "Soren", "Rayan", "Aarav", "Gerardo", "Ares", "Brendan", "Jamari", "Kaison", "Yusuf", "Issac", "Jasiah", "Callen", "Forrest", "Makai", "Crew", "Kobe", "Bo", "Julien", "Mathew", "Braden", "Johan", "Marvin", "Zaid", "Stetson", "Casey", "Ty", "Ariel", "Tony", "Zain", "Callan", "Cullen", "Sincere", "Uriah", "Dillon", "Kannon", "Colby", "Axton", "Cassius", "Quinton", "Mekhi", "Reece", "Alessandro", "Jerry", "Mauricio", "Sam", "Trey", "Mohammad", "Alberto", "Gustavo", "Arturo", "Fletcher", "Marcelo", "Abdiel", "Hamza", "Alfredo", "Chris", "Finnley", "Curtis", "Kellan", "Quincy", "Kase", "Harry", "Kyree", "Wilson", "Cayson", "Hezekiah", "Kohen", "Neil", "Mohammed", "Raylan", "Kaysen", "Lucca", "Sylas", "Mack", "Leonard", "Lionel", "Ford", "Roger", "Rex", "Alden", "Boston", "Colson", "Briggs", "Zeke", "Dariel", "Kingsley", "Valentino", "Jamir", "Salvador", "Vihaan", "Mitchell", "Lance", "Lucian", "Darren", "Jimmy", "Alvin", "Amos", "Tripp", "Zaire", "Layton", "Reese", "Casen", "Colten", "Brennan", "Korbin", "Sonny", "Bruno", "Orlando", "Devon", "Huxley", "Boone", "Maurice", "Nelson", "Douglas", "Randy", "Gary", "Lennon", "Titan", "Denver", "Jaziel", "Noe", "Jefferson", "Ricky", "Lochlan", "Rayden", "Bryant", "Langston", "Lachlan", "Clay", "Abdullah", "Lee", "Baylor", "Leandro", "Ben", "Kareem", "Layne", "Joe", "Crosby", "Deandre", "Demetrius", "Kellen", "Carl", "Jakob", "Ridge", "Bronson", "Jedidiah", "Rohan", "Larry", "Stanley", "Tomas", "Shiloh", "Thaddeus", "Watson", "Baker", "Vicente", "Koda", "Jagger", "Nathanael", "Carmelo", "Shepherd", "Graysen", "Melvin", "Ernesto", "Jamie", "Yosef", "Clyde", "Eddie", "Tristen", "Grey", "Ray", "Tommy", "Samir", "Ramon", "Santana", "Kristian", "Marcel", "Wells", "Zyaire", "Brecken", "Byron", "Otis", "Reyansh", "Axl", "Joey", "Trace", "Morgan", "Musa", "Harlan", "Enoch", "Henrik", "Kristopher", "Talon", "Rey", "Guillermo", "Houston", "Jon", "Vincenzo", "Dane", "Terry", "Azariah", "Castiel", "Kye", "Augustine", "Zechariah", "Joziah", "Kamryn", "Hassan", "Jamal", "Chaim", "Bodie", "Emery", "Branson", "Jaxtyn", "Kole", "Wayne", "Aryan", "Alonso", "Brixton", "Madden", "Allan", "Flynn", "Jaxen", "Harley", "Magnus", "Sutton", "Dash", "Anders", "Westley", "Brett", "Emory", "Felipe", "Yousef", "Jadiel", "Mordechai", "Dominik", "Junior", "Eliseo", "Fisher", "Harold", "Jaxxon", "Kamdyn", "Maximo", "Caspian", "Kelvin", "Damari", "Fox", "Trent", "Hugh", "Briar", "Franco", "Keanu", "Terrance", "Yahir", "Ameer", "Kaiser", "Thatcher", "Ishaan", "Koa", "Merrick", "Coen", "Rodney", "Brayan", "London", "Rudy", "Gordon", "Bobby", "Aron", "Marc", "Van", "Anakin", "Canaan", "Dario", "Reginald", "Westin", "Darian", "Ledger", "Leighton", "Maxton", "Tadeo", "Valentin", "Aldo", "Khalid", "Nickolas", "Toby", "Dayton", "Jacoby", "Billy", "Gatlin", "Elisha", "Jabari", "Jermaine", "Alvaro", "Marlon", "Mayson", "Blaze", "Jeffery", "Kace", "Braydon", "Achilles", "Brysen", "Saint", "Xzavier", "Aydin", "Eugene", "Adrien", "Cain", "Kylo", "Nova", "Onyx", "Arian", "Bjorn", "Jerome", "Miller", "Alfred", "Kenzo", "Kyng", "Leroy", "Maison", "Jordy", "Stefan", "Wallace", "Benicio", "Kendall", "Zayd", "Blaine", "Tristian", "Anson", "Gannon", "Jeremias", "Marley", "Ronnie", "Dangelo", "Kody", "Will", "Bentlee", "Gerald", "Salvatore", "Turner", "Chad", "Misael", "Mustafa", "Konnor", "Maxim", "Rogelio", "Zakai", "Cory", "Judson", "Brentley", "Darwin", "Louie", "Ulises", "Dakari", "Rocky", "Wesson", "Alfonso", "Payton", "Dwayne", "Juelz", "Duncan", "Keagan", "Deshawn", "Bode", "Bridger", "Skylar", "Brodie", "Landry", "Avi", "Keenan", "Reuben", "Jaxx", "Rene", "Yehuda", "Imran", "Yael", "Alexzander", "Willie", "Cristiano", "Heath", "Lyric", "Davion", "Elon", "Karsyn", "Krew", "Jairo", "Maddux", "Ephraim", "Ignacio", "Vivaan", "Aries", "Vance", "Boden", "Lyle", "Ralph", "Reign", "Camilo", "Draven", "Terrence", "Idris", "Ira", "Javion", "Jericho", "Khari", "Marcellus", "Creed", "Shepard", "Terrell", "Ahmir", "Camdyn", "Cedric", "Howard", "Jad", "Zahir", "Harper", "Justus", "Forest", "Gibson", "Zev", "Alaric", "Decker", "Ernest", "Jesiah", "Torin", "Benedict", "Bowie", "Deangelo", "Genesis", "Harlem", "Kalel", "Kylen", "Bishop", "Immanuel", "Lian", "Zavier", "Archie", "Davian", "Gus", "Kabir", "Korbyn", "Randall", "Benton", "Coleman", "Markus"]
var playerTeam, savedLeaguePlayers, savedLeagueRosters, savedLeagueTeams, savedLeague;


///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- Player Generation ---------/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////


if (JSON.parse(localStorage.getItem("saves")) == null) {
	savedLeagues = []
	savedLeagueTeams = []
	savedLeagueRosters = []
	savedLeaguePlayers = []
} else {
	var savedLeaguesCounter;
	savedLeagues = JSON.parse(localStorage.getItem("saves"))
	savedLeagueTeams = JSON.parse(localStorage.getItem("teamers"))
	savedLeagueRosters = JSON.parse(localStorage.getItem("rosters"))
	savedLeaguePlayers = JSON.parse(localStorage.getItem("players"))
	for (savedLeaguesCounter = 0; savedLeaguesCounter < savedLeagues.length; savedLeaguesCounter++) {
		document.getElementById("continueLeague").innerHTML += '<div id="league' + savedLeaguesCounter + '" onClick="showSpecificRosters(this.id)">' + savedLeagues[savedLeaguesCounter] + ' - ' + savedLeagueTeams[savedLeaguesCounter] + " - " + '<div id="deleteLeague' + savedLeaguesCounter + '" onClick="deleteLeague(this.id)">delete</div></div><br>'
	}
}




///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////--------- Game Generation ---------///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////




function replyClick(clicked_id) {
	playerTeam = clicked_id
	var b;
	for (b = 0; b < 31; b++) {
		document.getElementById("team" + b).classList.remove("active")
	}
	document.getElementById(playerTeam).classList.add("active")
	var chosenTeam = document.getElementById(playerTeam).innerHTML
	document.getElementById("chooser").innerHTML = chosenTeam
	document.getElementById("dropDiv").classList.toggle("hide")
	var newTeamColor = NHLteamColors[clicked_id.slice(4, clicked_id.length)]
	var numberTD = 	Number(document.getElementsByClassName("teamColorGradient").length)
	var b;
	for (b = 0; b < numberTD; b++) {
		document.getElementsByClassName("teamColorGradient")[b].style = "background-image: linear-gradient(to right, rgb(220, 220, 220), " + newTeamColor + "); border: 4px solid " + newTeamColor + ";"
	}
}

document.getElementById("clicker").addEventListener("click", teamPickToggler)

function teamPickToggler() {
	var playerGenCounterForward;

	for (playerGenCounterForward = 0; playerGenCounterForward < 500; playerGenCounterForward++) {
		var shooting = Math.round(Math.random() * 100)     // affects how often a player will shoot
			// weight: 0; combine with other shooting overall for weight: 3
		var shotAccuracy = Math.round(Math.random() * 100) // how accurate a shot is
			// weight: 0; combine with other shooting overall for weight: 3
		var passing = Math.round(Math.random() * 100)      // affects how often a player will pass
			// weight: 0; combine with other passing overall for weight: 3
		var passAccuracy = Math.round(Math.random() * 100) // how accurate a pass is 
			// weight: 0; combine with other passing overall for weight: 3

		var addition;
		if (passAccuracy < 83) {
			addition = 0.2
		} else {
			addition = 0
		}
		var addition2;
		if (shotAccuracy < 83) {
			addition2 = 0.2
		} else {
			addition2 = 0
		}
			
		var passingOverall = passAccuracy * ((passing / 100) + addition)
		var shootingOverall = shotAccuracy * ((shooting / 100) + addition2)
		var offensiveIQ = Math.round(Math.random() * 100)  // affects how well a player uses offensive skills

		var defensiveIQ = Math.round(Math.random() * 100)  // affects how well a player uses defensive skills
		var rebounding = Math.round(Math.random() * 100)   // the chance of a player ending an opponents rush off of shot
		var shotBlocking = Math.round(Math.random() * 100) // chance of a player ending opponents rush off block
		var poise = Math.round(Math.random() * 100)        // affects how well a player plays under certain conditions
		var strength = Math.round(Math.random() * 100)     // affects how well a player can recieve a hit and not get injured
		var checking = Math.round(Math.random() * 100)     // affects how often a player will go for a hit

		var speed = Math.round(Math.random() * 100)        // how much time it takes to act; chance for breakaway
		var endurance = Math.round(Math.random() * 100)    // how much a players skills get taxed during the game
		var faceoffs = Math.round(Math.random() * 100)     // likelihood of gaining possesion off a faceoff - compare with opposing centerman
		var leadership = Math.round(Math.random() * 100)   // home win boost - determine formula for
		var breakAways = Math.round(Math.random() * 100)   // skills on a breakaway
		var stealing = Math.round(Math.random() * 100)     // chance of taking puck from other team
		var drive = Math.round(Math.random() * 100)        // the ability to increase overall

		var overall = Math.round(((shootingOverall * 3) + (passingOverall * 3) + (offensiveIQ * 5) + (defensiveIQ * 5) + ((offensiveIQ + defensiveIQ) * 15) +(rebounding * 3) + (shotBlocking * 3) + (poise * 2) + (strength * 6) + (checking * 2) + (speed * 2) + (endurance * 2) + (faceoffs) + (leadership) + (breakAways) + (stealing) + (drive * 10)) / 80)

		var ageCalculate = Math.round(Math.random() * 100)
		var age, potential;
		if (ageCalculate > 99) {age = 45;} else if (ageCalculate > 98) {age = 44;} else if (ageCalculate > 97) {age = 43;} else if (ageCalculate > 96) {age = 42;} else if (ageCalculate > 95) {age = 41;} else if (ageCalculate > 94) {age = 40;} else if (ageCalculate > 92) {age = 39;} else if (ageCalculate > 90) {age = 38;} else if (ageCalculate > 88) {age = 37;} else if (ageCalculate > 86) {age = 36;} else if (ageCalculate > 84) {age = 35;} else if (ageCalculate > 81) {age = 34;} else if (ageCalculate > 78) {age = 33;} else if (ageCalculate > 74) {age = 32;} else if (ageCalculate > 70) {age = 31;} else if (ageCalculate > 65) {age = 30;} else if (ageCalculate > 59) {age = 29;} else if (ageCalculate > 53) {age = 28;} else if (ageCalculate > 47) {age = 27;} else if (ageCalculate > 41) {age = 26;} else if (ageCalculate > 35) {age = 25;} else if (ageCalculate > 30) {age = 24;} else if (ageCalculate > 25) {age = 23;} else if (ageCalculate > 20) {age = 22;} else if (ageCalculate > 15) {age = 21;} else if (ageCalculate > 10) {age = 20;} else if (ageCalculate > 6) {age = 19;} else if (ageCalculate > 2) {age = 18;} else {age = 17;}
	
		var potentialCalculator = Math.random()
		if (age > 27) {potential = overall;} else if (age > 25) {potential = overall + Math.round(potentialCalculator * 10);} else if (age > 22) {potential = overall + Math.round(potentialCalculator * 13.5);} else if (age > 19) {potential = overall + Math.round(potentialCalculator * 17.5);} else {potential =overall + Math.round(potentialCalculator * 22.5);}
		if(potential > 100) {potential = 100;}

		var contractLength, contractWorth;
		if (age == 17 || age == 18) {
			contractLength = 3;if (potential > 69) {contractWorth = 925000;} else if (potential > 	64) {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;}} else if (potential > 59) {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 750000 + contractGen;}} else {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 19) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 75) {contractLength = 3;} else {contractLength = 2;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;	contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 20) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 50) {contractLength = 3;} else {contractLength = 2;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;	contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 21) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 25) {contractLength = 3;} else if (lengthDeterminer < 75) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}
		} else if (age == 22) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 60) {if (lengthDeterminer < 5) {contractLength = 3;} else if (lengthDeterminer < 50) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {if (potential < 56 && overall < 45 || potential < 50) {contractLength = 1;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;} else if (overall > 44 && potential < 56 || potential < 60 && overall < 40) {contractLength = 2;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 700000 + contractGen;} else if (overall > 39 && potential < 60 || overall < 40 && potential < 66) {contractLength = 3;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 800000 + contractGen;} else if (overall > 39 && potential < 66 || overall < 45 && potential < 70) {contractLength = 4;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 2000000);} else if (overall > 44 && potential < 70 || overall < 69 && potential < 80) {contractLength = 5;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round(contractGen * moreContract) + 3500000;} else if (overall < 79 && potential < 90) {contractLength = 6;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 5000000);} else {contractLength = 7;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 6000000);}}
		} else if (age == 23) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 40) {if (lengthDeterminer < 1) {contractLength = 3;} else if (lengthDeterminer < 30) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {if (potential < 56 && overall < 45 || potential < 50) {contractLength = 1;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;} else if (overall > 44 && potential < 56 || potential < 60 && overall < 40) {contractLength = 2;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 700000 + contractGen;} else if (overall > 39 && potential < 60 || overall < 40 && potential < 66) {contractLength = 3;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 800000 + contractGen;} else if (overall > 39 && potential < 66 || overall < 45 && potential < 70) {contractLength = 4;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 2000000);} else if (overall > 44 && potential < 70 || overall < 69 && potential < 80) {contractLength = 5;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round(contractGen * moreContract) + 3500000;} else if (overall < 79 && potential < 90) {contractLength = 6;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 5000000);} else {contractLength = 7;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 6000000);}}
		} else if (age == 24) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 20) {if (lengthDeterminer < 30) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 89) {contractLength = 8;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 84) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 79) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 74) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 69) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 59) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}}
		} else if (age == 25) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 10) {contractLength = 1;if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 89) {contractLength = 8;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 84) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 79) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 74) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 69) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 59) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}}
		} else if (age == 26) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 84) {contractLength = 7;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 79) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 74) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 69) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 64) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 27) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 79) {contractLength = 7;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 74) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 28) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 79) {contractLength = 6;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 74) {contractLength = 6;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 29) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 6;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 6;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 30) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 5;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 5;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 5;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 31) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 5;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 5;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 5;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 32) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 4; contractWorth = 5500000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 4; contractWorth = 5500000 + contractGen;} else if (overall > 69) {contractLength = 4;contractWorth = 5500000 - contractGen;} else if (overall > 64) {contractLength = 4; contractWorth = 5500000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 3; contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 1; contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 33) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 4;contractWorth = 5500000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 4;contractWorth = 5500000 + contractGen;} else if (overall > 69) {contractLength = 4;contractWorth = 5500000 - contractGen;} else if (overall > 64) {contractLength = 4;contractWorth = 5500000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 3;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 34) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 3;contractWorth = 5000000 + contractGen;} else if (overall > 69) {contractLength = 3;contractWorth = 5000000 - contractGen;} else if (overall > 64) {contractLength = 3;contractWorth = 5000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 2;contractWorth = 3000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 35) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 3;contractWorth = 5000000 + contractGen;} else if (overall > 69) {contractLength = 3;contractWorth = 5000000 - contractGen;} else if (overall > 64) {contractLength = 3;contractWorth = 5000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 2;contractWorth = 3000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 36) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 2;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 2;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 37) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 2;contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 38) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 2;contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age > 38) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000; var moreContract = Math.round((Math.random() * 100) / 33); if (overall > 79) {contractLength = 1; contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 1; contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;	contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1; contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1; contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1; contractWorth = 800000 + contractGen;}
		}
			
		var playerType;
		if (offensiveIQ + shooting + passing > defensiveIQ + shotBlocking + rebounding) {
			if (shooting + shotAccuracy > passing + passAccuracy) {
				playerType = "SNP"
			} else if (shooting + shotAccuracy < passing + passAccuracy) {
				playerType = "PLY"
			}
		} else if (offensiveIQ + shooting + passing < defensiveIQ + shotBlocking + rebounding) {
			if (rebounding + shotBlocking > checking + strength) {
				playerType = "TWF"
			} else if (rebounding + shotBlocking < checking + strength) {
				playerType = "CHK"
			}
		}

		var tradeValue = (((Math.pow((((overall*2)+potential)/3),6.25) - Math.pow(age,3)) / ((contractWorth / 1000000)/contractLength)) / 1230726847000) * 10000



		NHLplayer[NHLplayer.length] = new Array (NHLforwardPositions[Math.round(Math.random() * 10)], playerNames[Math.round(Math.random() * 1000)] + " " + playerNames[Math.round(Math.random() * 1000)], age, overall, playerType, potential, offensiveIQ, shooting, shotAccuracy, passing, passAccuracy, defensiveIQ, rebounding, shotBlocking, strength, checking, faceoffs, speed, endurance, poise, leadership, contractWorth, contractLength, undefined, breakAways, stealing, drive, tradeValue, "pid" + playerGenCounterForward)
	}

	var defenseGenerator
	for (defenseGenerator = 0; defenseGenerator < 300; defenseGenerator++) {
    
		var shooting = Math.round(Math.random() * 100)
    	var shotAccuracy = Math.round(Math.random() * 100)
    	var passing = Math.round(Math.random() * 100) 
		var passAccuracy = Math.round(Math.random() * 100)
		
		var addition;
		if (passAccuracy < 83) {
			addition = 0.2
		} else {
			addition = 0
		}
		var addition2;
		if (shotAccuracy < 83) {
			addition2 = 0.2
		} else {
			addition2 = 0
		}
        
    	var passingOverall = passAccuracy * ((passing / 100) + addition)
    	var shootingOverall = shotAccuracy * ((shooting / 100) + addition2)

    	var offensiveIQ = Math.round(Math.random() * 100) 
    	var defensiveIQ = Math.round(Math.random() * 100)
    	var rebounding = Math.round(Math.random() * 100)
    	var shotBlocking = Math.round(Math.random() * 100)
    	var poise = Math.round(Math.random() * 100)
    	var strength = Math.round(Math.random() * 100)
    	var checking = Math.round(Math.random() * 100)
    	var speed = Math.round(Math.random() * 100) 
    	var endurance = Math.round(Math.random() * 100)
    	var faceoffs = Math.round(Math.random() * 100) 
    	var leadership = Math.round(Math.random() * 100) 
    	var breakAways = Math.round(Math.random() * 100) 
    	var stealing = Math.round(Math.random() * 100)   
    	var drive = Math.round(Math.random() * 100)      

    	var overall = Math.round(((shootingOverall * 3) + (passingOverall * 3) + (offensiveIQ * 5) + (defensiveIQ * 5) + ((offensiveIQ + defensiveIQ) * 15) +(rebounding * 3) + (shotBlocking * 3) + (poise * 2) + (strength * 6) + (checking * 2) + (speed * 2) + (endurance * 2) + (faceoffs) + (leadership) + (breakAways) + (stealing) + (drive * 10)) / 80)

    	var ageCalculate = Math.round(Math.random() * 100)
		var age, potential;
    	if (ageCalculate > 99) {age = 45;} else if (ageCalculate > 98) {age = 44;} else if (ageCalculate > 97) {age = 43;} else if (ageCalculate > 96) {age = 42;} else if (ageCalculate > 95) {age = 41;} else if (ageCalculate > 94) {age = 40;} else if (ageCalculate > 92) {age = 39;} else if (ageCalculate > 90) {age = 38;} else if (ageCalculate > 88) {age = 37;} else if (ageCalculate > 86) {age = 36;} else if (ageCalculate > 84) {age = 35;} else if (ageCalculate > 81) {age = 34;} else if (ageCalculate > 78) {age = 33;} else if (ageCalculate > 74) {age = 32;} else if (ageCalculate > 70) {age = 31;} else if (ageCalculate > 65) {age = 30;} else if (ageCalculate > 59) {age = 29;} else if (ageCalculate > 53) {age = 28;} else if (ageCalculate > 47) {age = 27;} else if (ageCalculate > 41) {age = 26;} else if (ageCalculate > 35) {age = 25;} else if (ageCalculate > 30) {age = 24;} else if (ageCalculate > 25) {age = 23;} else if (ageCalculate > 20) {age = 22;} else if (ageCalculate > 15) {age = 21;} else if (ageCalculate > 10) {age = 20;} else if (ageCalculate > 6) {age = 19;} else if (ageCalculate > 2) {age = 18;} else {age = 17;}
    
    	var potentialCalculator = Math.random()
		if (age > 27) {potential = overall;} else if (age > 25) {potential = overall + Math.round(potentialCalculator * 10);} else if (age > 22) {potential = overall + Math.round(potentialCalculator * 13.5);} else if (age > 19) {potential = overall + Math.round(potentialCalculator * 17.5);} else {potential =overall + Math.round(potentialCalculator * 22.5);}
    	if(potential > 100) {potential = 100;}
    
    	var contractLength, contractWorth;
		if (age == 17 || age == 18) {
			contractLength = 3;if (potential > 69) {contractWorth = 925000;} else if (potential > 	64) {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;}} else if (potential > 59) {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 750000 + contractGen;}} else {if (overall > 54) {contractWorth = 925000;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 19) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 75) {contractLength = 3;} else {contractLength = 2;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;	contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 20) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 50) {contractLength = 3;} else {contractLength = 2;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;	contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 650000 + contractGen;}}
		} else if (age == 21) {
			var lengthDeterminer = Math.random() * 100;if (lengthDeterminer < 25) {contractLength = 3;} else if (lengthDeterminer < 75) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}
		} else if (age == 22) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 60) {if (lengthDeterminer < 5) {contractLength = 3;} else if (lengthDeterminer < 50) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000; contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {if (potential < 56 && overall < 45 || potential < 50) {contractLength = 1;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;} else if (overall > 44 && potential < 56 || potential < 60 && overall < 40) {contractLength = 2;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 700000 + contractGen;} else if (overall > 39 && potential < 60 || overall < 40 && potential < 66) {contractLength = 3;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 800000 + contractGen;} else if (overall > 39 && potential < 66 || overall < 45 && potential < 70) {contractLength = 4;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 2000000);} else if (overall > 44 && potential < 70 || overall < 69 && potential < 80) {contractLength = 5;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round(contractGen * moreContract) + 3500000;} else if (overall < 79 && potential < 90) {contractLength = 6;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 5000000);} else {contractLength = 7;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 6000000);}}
		} else if (age == 23) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 40) {if (lengthDeterminer < 1) {contractLength = 3;} else if (lengthDeterminer < 30) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {if (potential < 56 && overall < 45 || potential < 50) {contractLength = 1;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;} else if (overall > 44 && potential < 56 || potential < 60 && overall < 40) {contractLength = 2;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 700000 + contractGen;} else if (overall > 39 && potential < 60 || overall < 40 && potential < 66) {contractLength = 3;var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 800000 + contractGen;} else if (overall > 39 && potential < 66 || overall < 45 && potential < 70) {contractLength = 4;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 2000000);} else if (overall > 44 && potential < 70 || overall < 69 && potential < 80) {contractLength = 5;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round(contractGen * moreContract) + 3500000;} else if (overall < 79 && potential < 90) {contractLength = 6;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 5000000);} else {contractLength = 7;var contractGen = Math.round(Math.random() * 100) * 10000;var moreContract = Math.round(Math.random() * 100) / 33;contractWorth = Math.round((contractGen * moreContract) + 6000000);}}
		} else if (age == 24) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 20) {if (lengthDeterminer < 30) {contractLength = 2;} else {contractLength = 1;}if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 89) {contractLength = 8;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 84) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 79) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 74) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 69) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 59) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}}
		} else if (age == 25) {
			var lengthDeterminer = Math.random() * 100;var elcORreal = Math.random() * 100;if (elcORreal < 10) {contractLength = 1;if (overall > 54 || potential > 69) {contractWorth = 925000;} else {if (potential > 64) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 825000 + contractGen;} else if (potential > 59) {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 750000 + contractGen;} else {var contractGen = Math.round(Math.random() * 100) * 1000;contractWorth = 650000 + contractGen;}}} else {var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 89) {contractLength = 8;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 84) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 79) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 74) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 69) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 59) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}}
		} else if (age == 26) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 84) {contractLength = 7;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 79) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 74) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 69) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 64) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54 || potential > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49 || potential > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 27) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 79) {contractLength = 7;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 74) {contractLength = 7;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64 || potential > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59 || potential > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 28) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79 || potential > 79) {contractLength = 6;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74 || potential > 74) {contractLength = 6;contractWorth = 7000000 + contractGen;} else if (overall > 69 || potential > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 29) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 6;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 6;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 6;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 4250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 3000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 30) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 5;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 5;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 5;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 31) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 5;contractWorth = 7000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 5;contractWorth = 7000000 + contractGen;} else if (overall > 69) {contractLength = 5;contractWorth = 7000000 - contractGen;} else if (overall > 64) {contractLength = 5;contractWorth = 7000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 4;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 3;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 2;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 32) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 4; contractWorth = 5500000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 4; contractWorth = 5500000 + contractGen;} else if (overall > 69) {contractLength = 4;contractWorth = 5500000 - contractGen;} else if (overall > 64) {contractLength = 4; contractWorth = 5500000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 3; contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 1; contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 33) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 4;contractWorth = 5500000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 4;contractWorth = 5500000 + contractGen;} else if (overall > 69) {contractLength = 4;contractWorth = 5500000 - contractGen;} else if (overall > 64) {contractLength = 4;contractWorth = 5500000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 3;contractWorth = 3250000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 2000000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 1500000 + contractGen;} else {contractLength = 1;contractWorth = 800000 + contractGen * moreContract;}
		} else if (age == 34) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 3;contractWorth = 5000000 + contractGen;} else if (overall > 69) {contractLength = 3;contractWorth = 5000000 - contractGen;} else if (overall > 64) {contractLength = 3;contractWorth = 5000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 2;contractWorth = 3000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 2;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 35) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 3;contractWorth = 5000000 + contractGen;} else if (overall > 69) {contractLength = 3;contractWorth = 5000000 - contractGen;} else if (overall > 64) {contractLength = 3;contractWorth = 5000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 2;contractWorth = 3000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 36) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 3;contractWorth = 5000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 2;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 2;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 37) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 2;contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age == 38) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000;var moreContract = Math.round((Math.random() * 100) / 33);if (overall > 79) {contractLength = 2;contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 2;contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1;contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1;contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1;contractWorth = 800000 + contractGen;}
		} else if (age > 38) {
			var lengthDeterminer = Math.random() * 100;var contractGen = Math.round(Math.random() * 100) * 1000; var moreContract = Math.round((Math.random() * 100) / 33); if (overall > 79) {contractLength = 1; contractWorth = 4000000 + (contractGen * moreContract);} else if (overall > 74) {contractLength = 1; contractWorth = 4000000 + contractGen;} else if (overall > 69) {contractLength = 1;contractWorth = 4000000 - contractGen;} else if (overall > 64) {contractLength = 1;	contractWorth = 4000000 - (contractGen * moreContract);} else if (overall > 59) {contractLength = 1;contractWorth = 2000000 + (contractGen * moreContract);} else if (overall > 54) {contractLength = 1; contractWorth = 1500000 + contractGen;} else if (overall > 49) {contractLength = 1; contractWorth = 800000 + (contractGen * moreContract);} else {contractLength = 1; contractWorth = 800000 + contractGen;}
    	}
	
    	var playerType;
		if (offensiveIQ + shooting + passing > (defensiveIQ + shotBlocking + rebounding) + 10) {
			playerType = "OFD"
		} else if (offensiveIQ + shooting + passing < (defensiveIQ + shotBlocking + rebounding) - 10) {
			playerType = "DFD"
		} else {
    	    playerType = "TWD"
    	}
    
		var tradeValue = (((Math.pow((((overall*2)+potential)/3),6.25) - Math.pow(age,3)) / ((contractWorth / 1000000)/contractLength)) / 1230726847000) * 10000

		var defenseGenerator2 = defenseGenerator + 500
		NHLplayer[NHLplayer.length] = new Array (NHLdefensePositions[Math.round(Math.random() * 10)], playerNames[Math.round(Math.random() * 1000)] + " " + playerNames[Math.round(Math.random() * 1000)], age, overall, playerType, potential, offensiveIQ, shooting, shotAccuracy, passing, passAccuracy, defensiveIQ, rebounding, shotBlocking, strength, checking, faceoffs, speed, endurance, poise, leadership, contractWorth, contractLength, undefined, breakAways, stealing, drive, tradeValue, "pid" + defenseGenerator2)
	}
	var a, b, c;
	for (a = 0; a < 31; a++) {
		document.getElementById("teamSelector").innerHTML += '<th id="team' + a + 'a" class="" onClick="switchRoster(this.id)">' + NHLteams[a] + '</th>'
		document.getElementById("teamRosters").innerHTML += '<table id="team' + a + 'roster" style="" class="hide"><tr><th colspan="3">Forwards</th></tr><tr id="lineOne' + a + 'team"></tr><tr id="lineTwo' + a + 'team"></tr><tr id="lineThree' + a + 'team"></tr><tr id="lineFour' + a + 'team"></tr></table>'
		for (b = 0; b < 3; b++) {
			NHLplayer[a * 12 + 1 + b][23] = "tid" + a
			NHLplayer[a * 12 + 4 + b][23] = "tid" + a
			NHLplayer[a * 12 + 7 + b][23] = "tid" + a
			NHLplayer[a * 12 + 10 + b][23] = "tid" + a

			document.getElementById("lineOne" + a + "team").innerHTML += '<td class="teamColorGradient" style="" id="team' + a + b + 'playera" onClick="openPlayerPage(this.id)"><u> <span id="positionP' + a + b + '1"></span></u><br><span id="nameP' + a + b + '1"></span><br>Age: <span id="ageP' + a + b + '1"></span>  -  <span id="overallP' + a + b + '1"></span>/<span id="potentialP' + a + b + '1"></span> - <span id="playerTypeP' + a + b + '1"></span></td>'
			document.getElementById("lineTwo" + a + "team").innerHTML += '<td class="teamColorGradient" style="" id="team' + a + b + 'playerb" onClick="openPlayerPage(this.id)"><u> <span id="positionP' + a + b + '2"></span></u><br><span id="nameP' + a + b + '2"></span><br>Age: <span id="ageP' + a + b + '2"></span>  -  <span id="overallP' + a + b + '2"></span>/<span id="potentialP' + a + b + '2"></span> - <span id="playerTypeP' + a + b + '2"></span></td>'
			document.getElementById("lineThree" + a + "team").innerHTML += '<td class="teamColorGradient" style="" id="team' + a + b + 'playerc" onClick="openPlayerPage(this.id)"><u> <span id="positionP' + a + b + '3"></span></u><br><span id="nameP' + a + b + '3"></span><br>Age: <span id="ageP' + a + b + '3"></span>  -  <span id="overallP' + a + b + '3"></span>/<span id="potentialP' + a + b + '3"></span> - <span id="playerTypeP' + a + b + '3"></span></td>'
			document.getElementById("lineFour" + a + "team").innerHTML += '<td class="teamColorGradient" style="" id="team' + a + b + 'playerd" onClick="openPlayerPage(this.id)"><u> <span id="positionP' + a + b + '4"></span></u><br><span id="nameP' + a + b + '4"></span><br>Age: <span id="ageP' + a + b + '4"></span>  -  <span id="overallP' + a + b + '4"></span>/<span id="potentialP' + a + b + '4"></span> - <span id="playerTypeP' + a + b + '4"></span></td>'
		}
		for (c = 0; c < 2; c++) {
			NHLplayer[a * 6 + 1 + c + 500][23] = "tid" + a
			NHLplayer[a * 6 + 3 + c + 500][23] = "tid" + a
			NHLplayer[a * 6 + 5 + c + 500][23] = "tid" + a
		}
	}
	document.getElementById("teamRosters").innerHTML += '<table id="team32roster" style="" class="hide"></table>'

	NHLplayer[0][23] = "tid" + 31
	NHLplayer[500][23] = "tid" + 31
	var restOfId = 31 * 12 + 1
	for(restOfId; restOfId < 500; restOfId++) {
		NHLplayer[restOfId][23] = "tid" + 31
	}
	var restOfId2 = 31 * 6 + 501
	for(restOfId2; restOfId2 < 800; restOfId2++) {
		NHLplayer[restOfId2][23] = "tid" + 31
	}
	
	document.getElementById("teamSelector").innerHTML += '<th id="team32a" class="" onClick="showFreeAgents(this.id)">' + NHLteams[32] + '</th>'
	
	document.getElementById("team32roster").innerHTML = '<tr><td id="back100" class"header" onClick="reloadOthers()">Back</td><td id="forward100" class="header">Next</td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway">Bkay</th><th class="header" title="Defensive IQ">dIQ</th><th class="header" title="Shot Blocking">St Blk</th><th class="header" title="Rebounding">Reb</th><th class="header" title="Stealing">Stl</th><th class="header" title="Checking">Chk</th><th class="header" title="Strength">Stg</th><th class="header" title="FaceOffs">F-off</th><th class="header" title="Speed">Spd</th><th class="header" title="Endurance">End</th><th class="header" title="Drive">Drv</th><th class="header" title="Leadership">Ldr</th><th class="header" title="Poise">Pse</th></tr>'
	var food
	for(food = 0; food < 500; food++) {
		var playerTeamName = Number(NHLplayer[food][23].slice(3,))
		var uniqueCounter
		var positionDefine = 0
		var lineDefine = 1
		for(uniqueCounter = 0; uniqueCounter < 20; uniqueCounter++) {
			if (playerTeamName < 31 && playerTeamName >= 0) {
				if (document.getElementById("nameP" + playerTeamName + positionDefine + lineDefine).innerHTML == "") {
					document.getElementById("positionP" + playerTeamName + positionDefine + lineDefine).innerHTML = NHLplayer[food][0]
					document.getElementById("nameP" + playerTeamName + positionDefine + lineDefine).innerHTML = NHLplayer[food][1]
					document.getElementById("ageP" + playerTeamName + positionDefine + lineDefine).innerHTML = NHLplayer[food][2]
					document.getElementById("overallP" + playerTeamName + positionDefine + lineDefine).innerHTML = NHLplayer[food][3]
					document.getElementById("potentialP" + playerTeamName + positionDefine + lineDefine).innerHTML = NHLplayer[food][5]
					document.getElementById("playerTypeP" + playerTeamName + positionDefine + lineDefine).innerHTML = 	NHLplayer[food][4]
					positionDefine = 0
					lineDefine = 1
					break;
				} else {
					positionDefine++
					if (positionDefine > 2) {
						positionDefine = 0
						lineDefine++
					}
				}
			}
		}
	}
	
	document.getElementById("teamRosters").innerHTML += '<table id="team31roster" style="" class="hide"><tr><td id="back100" class"header" onClick="reloadOthers()">Back</td><td id="forward100" class="header">Next</td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy" onClick="sortTablePassAcc()">Ps Acc</th><th class="header" title="Passing" onClick="sortTablePass()">Pss</th><th class="header" title="Breakaway" onClick="sortTableBkay()">Bkay</th><th class="header" title="Defensive IQ" onClick="sortTabledIQ()">dIQ</th><th class="header" title="Shot Blocking" onClick="sortTableShotBlk()">St Blk</th><th class="header" title="Rebounding" onClick="sortTableReb()">Reb</th><th class="header" title="Stealing" onClick="sortTableStl()">Stl</th><th class="header" title="Checking" onClick="sortTableChk()">Chk</th><th class="header" title="Strength" onClick="sortTableStg()">Stg</th><th class="header" title="FaceOffs" onClick="sortTableFoff()">F-off</th><th class="header" title="Speed" onClick="sortTableSpd()">Spd</th><th class="header" title="Endurance" onClick="sortTableEnd()">End</th><th class="header" title="Drive" onClick="sortTableDrv()">Drv</th><th class="header" title="Leadership" onClick="sortTableLdr()">Ldr</th><th class="header" title="Poise" onClick="sortTablePse()">Pse</th></tr>'


	var thirdCounter, thirdCounter2, thirdCounter3, thirdCounter4, thirdCounter5, thirdCounter6
	var freeAgentCounter = []
	var freeAgentCounter2 = []
	var tvalue = []
	for(thirdCounter2 = 0; thirdCounter2 < NHLplayer.length; thirdCounter2++) {
		if(NHLplayer[thirdCounter2][23] == "tid31") {
			freeAgentCounter[freeAgentCounter.length] = NHLplayer[thirdCounter2][27]
			freeAgentCounter2[freeAgentCounter2.length] = NHLplayer[thirdCounter2][28].slice(3,)
		}
	}
	for(thirdCounter = 0; thirdCounter < freeAgentCounter.length; thirdCounter++) {
		var freeAgentList = freeAgentCounter.filter(sortFA)
		function sortFA(value) {
			return value > freeAgentCounter[thirdCounter]
		}
		for(thirdCounter3 = 0; thirdCounter3 < 50; thirdCounter3++) {
			if(tvalue[freeAgentList.length + thirdCounter3] == null || tvalue[freeAgentList.length + thirdCounter3] == undefined) {
				tvalue[freeAgentList.length + thirdCounter3] = freeAgentCounter2[thirdCounter]
				break;
			}
		}
	}
	for(thirdCounter4 = 0; thirdCounter4 < 31; thirdCounter4++) {
		NHLplayer[tvalue[thirdCounter4]][23] = "tid" + thirdCounter4
	}
	for(thirdCounter5 = 61; thirdCounter5 > 30; thirdCounter5--) {
		NHLplayer[tvalue[thirdCounter5]][23] = "tid" + (thirdCounter5 - 31)
	}
	for(thirdCounter6 = 62; thirdCounter6 < 93; thirdCounter6++) {
		NHLplayer[tvalue[thirdCounter6]][23] = "tid" + (thirdCounter6 - 62)
	}
	for(thirdCounter7 = 123; thirdCounter7 > 92; thirdCounter7--) {
		NHLplayer[tvalue[thirdCounter7]][23] = "tid" + (thirdCounter7 - 93)
	}
	for(thirdCounter8 = 124; thirdCounter8 < 155; thirdCounter8++) {
		NHLplayer[tvalue[thirdCounter8]][23] = "tid" + (thirdCounter8 - 124)
	}

	var forthCounter
	for (forthCounter = 0; forthCounter < NHLplayer.length; forthCounter++) {
		if (NHLplayer[forthCounter][23] == "tid31") {
			var playerTeamName = "FA"
			document.getElementById("team32roster").innerHTML += '<tr id="playerRow' + forthCounter + '"><td class="tdata">' + playerTeamName + '</td><td class="tdata2">' + NHLplayer[forthCounter][1] + '</td><td class="tdata">' + NHLplayer[forthCounter][0] + '</td><td class="tdata">' + NHLplayer[forthCounter][2] + '</td><td class="tdata">' + NHLplayer[forthCounter][3] + '</td><td class="tdata">' + NHLplayer[forthCounter][5] + '</td><td class="tdata">' + NHLplayer[forthCounter][6] + '</td><td class="tdata">' + NHLplayer[forthCounter][8] + '</td><td class="tdata">' + NHLplayer[forthCounter][7] + '</td><td class="tdata">' + NHLplayer[forthCounter][10] + '</td><td class="tdata">' + NHLplayer[forthCounter][9] + '</td><td class="tdata">' + NHLplayer[forthCounter][24] + '</td><td class="tdata">' + NHLplayer[forthCounter][11] + '</td><td class="tdata">' + NHLplayer[forthCounter][13] + '</td><td class="tdata">' + NHLplayer[forthCounter][12] + '</td><td class="tdata">' + NHLplayer[forthCounter][25] + '</td><td class="tdata">' + NHLplayer[forthCounter][15] + '</td><td class="tdata">' + NHLplayer[forthCounter][14] + '</td><td class="tdata">' + NHLplayer[forthCounter][16] + '</td><td class="tdata">' + NHLplayer[forthCounter][17] + '</td><td class="tdata">' + NHLplayer[forthCounter][18] + '</td><td class="tdata">' + NHLplayer[forthCounter][26] + '</td><td class="tdata">' + NHLplayer[forthCounter][20] + '</td><td class="tdata">' + NHLplayer[forthCounter][19] + '</td></tr>'
		}
	}

	var funnyCounter
	for(funnyCounter = 0; funnyCounter < NHLplayer.length; funnyCounter++) {
		var playerTeamName = NHLteamAbrev[NHLplayer[funnyCounter][23].slice(3, NHLplayer[funnyCounter][23].length)]
		playerRows[playerRows.length] = '<tr id="playerRow' + funnyCounter + '"><td class="tdata">' + playerTeamName + '</td><td class="tdata2">' + NHLplayer[funnyCounter][1] + '</td><td class="tdata">' + NHLplayer[funnyCounter][0] + '</td><td class="tdata">' + NHLplayer[funnyCounter][2] + '</td><td class="tdata">' + NHLplayer[funnyCounter][3] + '</td><td class="tdata">' + NHLplayer[funnyCounter][5] + '</td><td class="tdata">' + NHLplayer[funnyCounter][6] + '</td><td class="tdata">' + NHLplayer[funnyCounter][8] + '</td><td class="tdata">' + NHLplayer[funnyCounter][7] + '</td><td class="tdata">' + NHLplayer[funnyCounter][10] + '</td><td class="tdata">' + NHLplayer[funnyCounter][9] + '</td><td class="tdata">' + NHLplayer[funnyCounter][24] + '</td><td class="tdata">' + NHLplayer[funnyCounter][11] + '</td><td class="tdata">' + NHLplayer[funnyCounter][13] + '</td><td class="tdata">' + NHLplayer[funnyCounter][12] + '</td><td class="tdata">' + NHLplayer[funnyCounter][25] + '</td><td class="tdata">' + NHLplayer[funnyCounter][15] + '</td><td class="tdata">' + NHLplayer[funnyCounter][14] + '</td><td class="tdata">' + NHLplayer[funnyCounter][16] + '</td><td class="tdata">' + NHLplayer[funnyCounter][17] + '</td><td class="tdata">' + NHLplayer[funnyCounter][18] + '</td><td class="tdata">' + NHLplayer[funnyCounter][26] + '</td><td class="tdata">' + NHLplayer[funnyCounter][20] + '</td><td class="tdata">' + NHLplayer[funnyCounter][19] + '</td></tr>'
	}

	document.getElementById("dashboard").classList.remove("hide")
	document.getElementById("teamPicker").classList.add("hide")
	document.getElementById("rosterPage").classList.remove("hide")


	var newLeagueTeam = document.getElementById("chooser").innerHTML
	var newLeagueName = document.getElementById("leagueName").value
	var newLeagueRosters = document.getElementById("rosterPage").innerHTML
	savedLeagues[savedLeagues.length] = newLeagueName
	savedLeagueTeams[savedLeagueTeams.length] = newLeagueTeam
	savedLeagueRosters[savedLeagueRosters.length] = newLeagueRosters
	savedLeaguePlayers[savedLeaguePlayers.length] = NHLplayer
	var finalSave = JSON.stringify(savedLeagues)
	var finalTeamSave = JSON.stringify(savedLeagueTeams)
	var finalRosterSave = JSON.stringify(savedLeagueRosters)
	var finalPlayerSave = JSON.stringify(savedLeaguePlayers)
	localStorage.setItem("saves", finalSave)
	localStorage.setItem("teamers", finalTeamSave)
	localStorage.setItem("rosters", finalRosterSave)
	localStorage.setItem("players", finalPlayerSave)
}

function showFreeAgents(clicked_id) {
	var a;
	for (a = 0; a < 33; a++) {
		document.getElementById("team" + a + "a").classList.remove("active")
		document.getElementById("team" + a + "roster").classList.add("hide")
	}
	document.getElementById(clicked_id).classList.add("active");
	var getTeamId = clicked_id.length - 1
	var newTeamId = clicked_id.slice(0, getTeamId) + "roster"
	document.getElementById(newTeamId).classList.remove("hide")
}



function showAllPlayers(clicked_id) {
	var a;
	for (a = 0; a < 33; a++) {
		document.getElementById("team" + a + "a").classList.remove("active")
		document.getElementById("team" + a + "roster").classList.add("hide")
	}
	var getTeamId = clicked_id.length - 1
	var newTeamId = clicked_id.slice(0, getTeamId) + "roster"
	document.getElementById(newTeamId).classList.remove("hide")
	document.getElementById("teamContainer").classList.add("hide")
	document.getElementById("realRosters").classList.add("hide")
	document.getElementById("teamRosters").classList.remove("hide")
	sortTableOverall()
}

document.getElementById("chooser").addEventListener("click", teamSelectionLoader)

function teamSelectionLoader() {
	var a;
	for (a = 0; a < 31; a++) {
		document.getElementById("dropDiv").innerHTML += '<p id="team' + a + '" onClick="replyClick(this.id)" class="dropClass">' + NHLteams[a] + '</p><br>'
		document.getElementById("dropDiv").classList.toggle("hide")
	}
}

function switchRoster(clicked_id) {
	var a;
	for (a = 0; a < 33; a++) {
		document.getElementById("team" + a + "a").classList.remove("active")
		document.getElementById("team" + a + "roster").classList.add("hide")
	}
	document.getElementById(clicked_id).classList.add("active");
	var getTeamId = clicked_id.length - 1
	var newTeamId = clicked_id.slice(0, getTeamId) + "roster"
	var newTeamColor = NHLteamColors[clicked_id.slice(4, getTeamId)]
	document.getElementById(newTeamId).classList.remove("hide")
	var numberTD = 	Number(document.getElementsByClassName("teamColorGradient").length)
	var b;
	for (b = 0; b < numberTD; b++) {
		document.getElementsByClassName("teamColorGradient")[b].style = "background-image: linear-gradient(to right, rgb(220, 220, 220), " + newTeamColor + "); border: 4px solid " + newTeamColor + ";"
	}
}

function openPlayerPage (clicked_id) {
	var playerIdLocate = clicked_id
	if (playerIdLocate.endsWith("a") == true) {
		var teamIdSearch = playerIdLocate.slice(4, 7)
		if (teamIdSearch.endsWith("0") || teamIdSearch.endsWith("1") || teamIdSearch.endsWith("2")) {
			var teamIdSearchTwo = Number(teamIdSearch.slice(0, 2))
			var teamIdSearchThree = Number(teamIdSearch.slice(2, 3))
			var PlayerId = teamIdSearchTwo * 12 + 1 + teamIdSearchThree
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchTwo] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		} else {
			var teamIdSearchFour = playerIdLocate.slice(4, 6)
			var teamIdSearchFive = Number(teamIdSearchFour.slice(0, 1))
			var teamIdSearchSix = Number(teamIdSearchFour.slice(1, 2))
			var PlayerId = teamIdSearchFive * 12 + 1 + teamIdSearchSix
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchFive] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		}
	} else if (playerIdLocate.endsWith("b") == true) {
		var teamIdSearch = playerIdLocate.slice(4, 7)
		if (teamIdSearch.endsWith("0") || teamIdSearch.endsWith("1") || teamIdSearch.endsWith("2")) {
			var teamIdSearchTwo = Number(teamIdSearch.slice(0, 2))
			var teamIdSearchThree = Number(teamIdSearch.slice(2, 3))
			var PlayerId = teamIdSearchTwo * 12 + 4 + teamIdSearchThree
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchTwo] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		} else {
			var teamIdSearchFour = playerIdLocate.slice(4, 6)
			var teamIdSearchFive = Number(teamIdSearchFour.slice(0, 1))
			var teamIdSearchSix = Number(teamIdSearchFour.slice(1, 2))
			var PlayerId = teamIdSearchFive * 12 + 4 + teamIdSearchSix
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchFive] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		}
	} else if (playerIdLocate.endsWith("c") == true) {
		var teamIdSearch = playerIdLocate.slice(4, 7)
		if (teamIdSearch.endsWith("0") || teamIdSearch.endsWith("1") || teamIdSearch.endsWith("2")) {
			var teamIdSearchTwo = Number(teamIdSearch.slice(0, 2))
			var teamIdSearchThree = Number(teamIdSearch.slice(2, 3))
			var PlayerId = teamIdSearchTwo * 12 + 7 + teamIdSearchThree
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchTwo] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		} else {
			var teamIdSearchFour = playerIdLocate.slice(4, 6)
			var teamIdSearchFive = Number(teamIdSearchFour.slice(0, 1))
			var teamIdSearchSix = Number(teamIdSearchFour.slice(1, 2))
			var PlayerId = teamIdSearchFive * 12 + 7 + teamIdSearchSix
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchFive] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		}
	} else if (playerIdLocate.endsWith("d") == true) {
		var teamIdSearch = playerIdLocate.slice(4, 7)
		if (teamIdSearch.endsWith("0") || teamIdSearch.endsWith("1") || teamIdSearch.endsWith("2")) {
			var teamIdSearchTwo = Number(teamIdSearch.slice(0, 2))
			var teamIdSearchThree = Number(teamIdSearch.slice(2, 3))
			var PlayerId = teamIdSearchTwo * 12 + 10 + teamIdSearchThree
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchTwo] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		} else {
			var teamIdSearchFour = playerIdLocate.slice(4, 6)
			var teamIdSearchFive = Number(teamIdSearchFour.slice(0, 1))
			var teamIdSearchSix = Number(teamIdSearchFour.slice(1, 2))
			var PlayerId = teamIdSearchFive * 12 + 10 + teamIdSearchSix
			document.getElementById("rosterPage").classList.add("hide")
			document.getElementById("playerPage").classList.remove("hide")
			document.getElementById("backButton").classList.remove("hide")
			document.getElementById("playerPage").innerHTML = '<h1 style="text-align: center;">' + NHLplayer[PlayerId][1] + '</h1><hr><p style="text-align: center;">' + NHLplayer[PlayerId][0] + ' , ' + NHLplayer[PlayerId][4] + ' <span style="border-right: 2px solid black;"></span> Age: ' + NHLplayer[PlayerId][2] + ' <span style="border-right: 2px solid black;"> </span> ' + NHLteams[teamIdSearchFive] + '</p><p style="font-size: 25px;">Overall: ' + NHLplayer[PlayerId][3] + '<br>Potential: ' + NHLplayer[PlayerId][5] + '<br>Salary: ' + NHLplayer[PlayerId][21] + '<br>Years Left: ' + NHLplayer[PlayerId][22] + '</p><div style="position: absolute; right: 10%; top: 150px;"><table><tr><th>Offense</th><th>Defense</th><th>Physical</th></tr><tr><td>Offensive IQ: ' + NHLplayer[PlayerId][6] + '</td><td>Defensive IQ: ' + NHLplayer[PlayerId][11] + '</td><td>Faceoffs: ' + NHLplayer[PlayerId][16] + '</td></tr><tr><td>Shooting: ' + NHLplayer[PlayerId][7] + '</td><td>Rebounding: ' + NHLplayer[PlayerId][12] + '</td><td>Speed: ' + NHLplayer[PlayerId][17] + '</td></tr><tr><td>Shot Accuracy: ' + NHLplayer[PlayerId][8] + '</td><td>Shot Blocking: ' + NHLplayer[PlayerId][13] + '</td><td>Endurance: ' + NHLplayer[PlayerId][18] + '</td></tr><tr><td>Passing: ' + NHLplayer[PlayerId][9] + '</td><td>Strength: ' + NHLplayer[PlayerId][14] + '</td><td>Poise: ' + NHLplayer[PlayerId][19] + '</td></tr><tr><td>Passing Accuracy: ' + NHLplayer[PlayerId][10] + '</td><td>Checking: ' + NHLplayer[PlayerId][15] + '</td><td>Leadership: ' + NHLplayer[PlayerId][20] + '</td></tr><tr><td>Breakaway: ' + NHLplayer[PlayerId][24] + '</td><td>Stealing: ' + NHLplayer[PlayerId][25] + '</td><td>Drive: ' + NHLplayer[PlayerId][26] + '</td></tr></table></div>'
		}
	}
}

document.getElementById("backButton").addEventListener("click", closePlayerPage)

function closePlayerPage() {
	document.getElementById("rosterPage").classList.remove("hide")
	document.getElementById("playerPage").classList.add("hide")
	document.getElementById("backButton").classList.add("hide")
}

document.getElementById("newGame").addEventListener("click", newGame)

function newGame () {
	document.getElementById("gameChooser").classList.add("hide")
	document.getElementById("teamPicker").classList.remove("hide")
}

document.getElementById("resumeGame").addEventListener("click", resumeGame)

function resumeGame () {
	document.getElementById("gameChooser").classList.add("hide")
	document.getElementById("continueLeague").classList.remove("hide")
}

function showSpecificRosters(clicked_id) {
	var searchId = Number(clicked_id.slice(6, clicked_id.length))
	var searchRoster = savedLeagueRosters[searchId]
	NHLplayer = savedLeaguePlayers[searchId]
	document.getElementById("rosterPage").innerHTML = searchRoster
	document.getElementById("rosterPage").classList.remove("hide")
	document.getElementById("continueLeague").classList.add("hide")
	var secondCounter
	for(secondCounter = 0; secondCounter < 31; secondCounter++) {
		if (secondCounter == NHLteams.indexOf(savedLeagueTeams[searchId])) {
			playerTeam = "team" + secondCounter
			break;
		}
	}
	document.getElementById("teamRosters").innerHTML += '<table id="team31roster" style="" class="hide"><tr><td id="back100" class"header" onClick="reloadOthers()">Back</td><td id="forward100" class="header">Next</td></tr><tr><th class="header">Team</th><th class="header">Name</th><th class="header" title="Position">Pos</th><th class="header" onClick="sortTableAge()">Age</th><th class="header" title="Overall" onClick="sortTableOverall()">Ovr</th><th class="header" title="Potential" onClick="sortTablePotential()">Pot</th><th class="header" title="Offensive IQ" onClick="sortTableoIQ()">oIQ</th><th class="header" title"Shot Accuracy" onClick="sortTableshtacc()">St Acc</th><th class="header" title="Shooting" onClick="sortTablesht()">Sht</th><th class="header" title="Pass Accuracy">Ps Acc</th><th class="header" title="Passing">Pss</th><th class="header" title="Breakaway">Bkay</th><th class="header" title="Defensive IQ">dIQ</th><th class="header" title="Shot Blocking">St Blk</th><th class="header" title="Rebounding">Reb</th><th class="header" title="Stealing">Stl</th><th class="header" title="Checking">Chk</th><th class="header" title="Strength">Stg</th><th class="header" title="FaceOffs">F-off</th><th class="header" title="Speed">Spd</th><th class="header" title="Endurance">End</th><th class="header" title="Drive">Drv</th><th class="header" title="Leadership">Ldr</th><th class="header" title="Poise">Pse</th></tr></table>'

	var funnyCounter
	for(funnyCounter = 0; funnyCounter < NHLplayer.length; funnyCounter++) {
		var playerTeamName = NHLteamAbrev[NHLplayer[funnyCounter][23].slice(3, NHLplayer[funnyCounter][23].length)]
		playerRows[playerRows.length] = '<tr id="playerRow' + funnyCounter + '"><td class="tdata">' + playerTeamName + '</td><td class="tdata2">' + NHLplayer[funnyCounter][1] + '</td><td class="tdata">' + NHLplayer[funnyCounter][0] + '</td><td class="tdata">' + NHLplayer[funnyCounter][2] + '</td><td class="tdata">' + NHLplayer[funnyCounter][3] + '</td><td class="tdata">' + NHLplayer[funnyCounter][5] + '</td><td class="tdata">' + NHLplayer[funnyCounter][6] + '</td><td class="tdata">' + NHLplayer[funnyCounter][8] + '</td><td class="tdata">' + NHLplayer[funnyCounter][7] + '</td><td class="tdata">' + NHLplayer[funnyCounter][10] + '</td><td class="tdata">' + NHLplayer[funnyCounter][9] + '</td><td class="tdata">' + NHLplayer[funnyCounter][24] + '</td><td class="tdata">' + NHLplayer[funnyCounter][11] + '</td><td class="tdata">' + NHLplayer[funnyCounter][13] + '</td><td class="tdata">' + NHLplayer[funnyCounter][12] + '</td><td class="tdata">' + NHLplayer[funnyCounter][24] + '</td><td class="tdata">' + NHLplayer[funnyCounter][15] + '</td><td class="tdata">' + NHLplayer[funnyCounter][14] + '</td><td class="tdata">' + NHLplayer[funnyCounter][16] + '</td><td class="tdata">' + NHLplayer[funnyCounter][17] + '</td><td class="tdata">' + NHLplayer[funnyCounter][18] + '</td><td class="tdata">' + NHLplayer[funnyCounter][20] + '</td><td class="tdata">' + NHLplayer[funnyCounter][19] + '</td><td class="tdata">' + NHLplayer[funnyCounter][25] + '</td></tr>'
	}
}

function deleteLeague(clicked_id) {
	var deleteId = Number(clicked_id.slice(12, clicked_id.length))
	savedLeagues.splice(deleteId, 1)
	savedLeagueTeams.splice(deleteId, 1)
	savedLeagueRosters.splice(deleteId, 1)
	savedLeaguePlayers.splice(deleteId, 1)
	var finalSave = JSON.stringify(savedLeagues)
	var finalTeamSave = JSON.stringify(savedLeagueTeams)
	var finalRosterSave = JSON.stringify(savedLeagueRosters)
	var finalPlayerSave = JSON.stringify(savedLeaguePlayers)
	localStorage.setItem("saves", finalSave)
	localStorage.setItem("teamers", finalTeamSave)
	localStorage.setItem("rosters", finalRosterSave)
	localStorage.setItem("players", finalPlayerSave)
	location.reload()
}

//document.getElementById("dropLeagueOp").addEventListener("click", dropLeagueOp)

function dropLeagueOp() {
	document.getElementById("droppedLeagueOp").classList.toggle("hide")
	document.getElementById("droppedLeagueOp").classList.toggle("dropClass2")
	document.getElementById("droppedStatsOp").classList.add("hide")
	document.getElementById("droppedStatsOp").classList.remove("dropClass2")
	document.getElementById("droppedTeamOp").classList.add("hide")
	document.getElementById("droppedTeamOp").classList.remove("dropClass2")
	document.getElementById("droppedPlayerOp").classList.add("hide")
	document.getElementById("droppedPlayerOp").classList.remove("dropClass2")
	document.getElementById("droppedTradesOp").classList.add("hide")
	document.getElementById("droppedTradesOp").classList.remove("dropClass2")
}

//document.getElementById("dropTeamOp").addEventListener("click", dropTeamOp)

function dropTeamOp() {
	document.getElementById("droppedTeamOp").classList.toggle("hide")
	document.getElementById("droppedTeamOp").classList.toggle("dropClass2")
	document.getElementById("droppedStatsOp").classList.add("hide")
	document.getElementById("droppedStatsOp").classList.remove("dropClass2")
	document.getElementById("droppedLeagueOp").classList.add("hide")
	document.getElementById("droppedLeagueOp").classList.remove("dropClass2")
	document.getElementById("droppedPlayerOp").classList.add("hide")
	document.getElementById("droppedPlayerOp").classList.remove("dropClass2")
	document.getElementById("droppedTradesOp").classList.add("hide")
	document.getElementById("droppedTradesOp").classList.remove("dropClass2")
}

//document.getElementById("dropPlayerOp").addEventListener("click", dropPlayerOp)

function dropPlayerOp() {
	document.getElementById("droppedPlayerOp").classList.toggle("hide")
	document.getElementById("droppedPlayerOp").classList.toggle("dropClass2")
	document.getElementById("droppedStatsOp").classList.add("hide")
	document.getElementById("droppedStatsOp").classList.remove("dropClass2")
	document.getElementById("droppedLeagueOp").classList.add("hide")
	document.getElementById("droppedLeagueOp").classList.remove("dropClass2")
	document.getElementById("droppedTeamOp").classList.add("hide")
	document.getElementById("droppedTeamOp").classList.remove("dropClass2")
	document.getElementById("droppedTradesOp").classList.add("hide")
	document.getElementById("droppedTradesOp").classList.remove("dropClass2")
}

//document.getElementById("dropStatsOp").addEventListener("click", dropStatsOp)

function dropStatsOp() {
	document.getElementById("droppedStatsOp").classList.toggle("hide")
	document.getElementById("droppedStatsOp").classList.toggle("dropClass2")
	document.getElementById("droppedLeagueOp").classList.add("hide")
	document.getElementById("droppedLeagueOp").classList.remove("dropClass2")
	document.getElementById("droppedTeamOp").classList.add("hide")
	document.getElementById("droppedTeamOp").classList.remove("dropClass2")
	document.getElementById("droppedPlayerOp").classList.add("hide")
	document.getElementById("droppedPlayerOp").classList.remove("dropClass2")
	document.getElementById("droppedTradesOp").classList.add("hide")
	document.getElementById("droppedTradesOp").classList.remove("dropClass2")
}

//document.getElementById("dropTradesOp").addEventListener("click", dropTradesOp)

function dropTradesOp() {
	document.getElementById("droppedTradesOp").classList.toggle("hide")
	document.getElementById("droppedTradesOp").classList.toggle("dropClass2")
	document.getElementById("droppedStatsOp").classList.add("hide")
	document.getElementById("droppedStatsOp").classList.remove("dropClass2")
	document.getElementById("droppedLeagueOp").classList.add("hide")
	document.getElementById("droppedLeagueOp").classList.remove("dropClass2")
	document.getElementById("droppedTeamOp").classList.add("hide")
	document.getElementById("droppedTeamOp").classList.remove("dropClass2")
	document.getElementById("droppedPlayerOp").classList.add("hide")
	document.getElementById("droppedPlayerOp").classList.remove("dropClass2")
}

function showLineups() {
	document.getElementById(playerTeam + "a").classList += "active"
	document.getElementById(playerTeam + "roster").classList.remove("hide")
	document.getElementById("teamContainer").classList.remove("hide")
	document.getElementById("team31roster").classList.add("hide")
	document.getElementById("realRosters").classList.add("hide")
	document.getElementById("teamRosters").classList.remove("hide")
}

document.getElementById("dropLeagueOp2").addEventListener("click", dropTeamsOp2)

function dropTeamsOp2() {
	document.getElementById("droppedTOp2").classList.toggle("hide")
	document.getElementById("droppedTOp2").classList.toggle("dropClass2")
}

function showRosters() {
	document.getElementById("team31roster").classList.add("hide")
	document.getElementById("teamRosters").classList.add("hide")
	document.getElementById("teamContainer").classList.add("hide")
	document.getElementById("realRosters").classList.remove("hide")
	document.getElementById("teamNames").innerHTML = ""
	var moreCounting
	for (moreCounting = 0; moreCounting < 31; moreCounting++) {
		document.getElementById("teamNames").innerHTML += '<p id="roster' + moreCounting + '" onClick="anotherRoster(this.id)">' + NHLteams[moreCounting] + '</p>'
	}
	document.getElementById("insert").innerHTML = NHLteams[playerTeam.slice(4, playerTeam.length)]
	document.getElementById("playersByTeam").innerHTML = '<tr><th class="header">Pos</th><th class="header2">Name</th><th class="header">Age</th><th class="header">Ovr</th><th class="header">Pot</th><th class="header2">Contract</th><th class="header">Length</th></tr>'
	var theFirstCounter
	var twoCounter = 0
	var yourTeam = "tid" + playerTeam.slice(4, playerTeam.length)
	for(theFirstCounter = 0; theFirstCounter < NHLplayer.length; theFirstCounter++) {
		if (yourTeam == NHLplayer[theFirstCounter][23]) {
			document.getElementById("playersByTeam").innerHTML += '<tr><td class="tdata">' + NHLplayer[theFirstCounter][0] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][1] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][2] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][3] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][5] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][21] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][22] + '</td></tr>'
			twoCounter = twoCounter + NHLplayer[theFirstCounter][21]
		}
	}
	document.getElementById("playersByTeam").innerHTML += '<tr><td colspan=5></td><td class="tdata">' + twoCounter + '<td><td class="tdata"></td>'
}

function anotherRoster(clicked_id) {
	document.getElementById("insert").innerHTML = NHLteams[clicked_id.slice(6, clicked_id.length)]
	console.log(clicked_id)
	document.getElementById("playersByTeam").innerHTML = '<tr><th class="header">Pos</th><th class="header2">Name</th><th class="header">Age</th><th class="header">Ovr</th><th class="header">Pot</th><th class="header2">Contract</th><th class="header">Length</th></tr>'
	var theFirstCounter
	var twoCounter = 0
	var thisTeam = "tid" + clicked_id.slice(6, clicked_id.length)
	for(theFirstCounter = 0; theFirstCounter < NHLplayer.length; theFirstCounter++) {
		if (thisTeam == NHLplayer[theFirstCounter][23]) {
			document.getElementById("playersByTeam").innerHTML += '<tr><td class="tdata">' + NHLplayer[theFirstCounter][0] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][1] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][2] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][3] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][5] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][21] + '</td><td class="tdata">' + NHLplayer[theFirstCounter][22] + '</td></tr>'
			twoCounter = twoCounter + NHLplayer[theFirstCounter][21]
		}
	}
	document.getElementById("playersByTeam").innerHTML += '<tr><td colspan=5></td><td class="tdata">' + twoCounter + '<td><td class="tdata"></td>'
}