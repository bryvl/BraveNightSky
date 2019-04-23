// Global Variables, Objects, Functions

// ----------- Audio Autoplay -----------
var audio = document.getElementById('myAudio');
audio.volume = 0.1;

// ------------Generate Stars------------
// Define Star

let star = $("<div class = 'star'>.</div>");

function generateStars(){
    for (var i = 0; i < 100; i++) {
        var star = '<div class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
        $('#start-screen').append(star);    
    }
}
generateStars();
// --------------------------------------


// ------------------------------------------Classes-----------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

class Hero {
    constructor(heroName, gender, race){
        this.heroName = heroName,
        this.gender = gender,
        this.race = race,
        this.level = 1,
        this.statBaseHealth = 0,
        this.statBaseAtk = 0,
        this.statBaseDefense = 0,
        this.statBaseResistance = 0
    }
    attack(otherChar){
        otherChar.statBaseHealth -= this.statBaseAtk;
        console.log(otherChar.name + " has " + otherChar.statBaseHealth + " health left.");
    }
}
// ------------------------------------------------------------------------------------------------------------

class Valkyrie extends Hero {
    constructor(heroName, gender, race, health, atk, def, res){
        super(heroName, gender, race, health, atk, def, res);

        //extend heroClass with valkyrie specific stats
        this.name =  'Valkyrie',
        this.classDescription = 'The Valkyrie is a melee-ranged spellcasting hybrid. Their main focus is providing consistent damage from afar while having excellent defenses up close while threatened.'
        this.mainWeapon = 'Javelin - a long lance like rod that fires devastating energy projectiles.';
        this.subclasses = [];
    }
    modifyValkStats(){
        this.statBaseHealth += 100,
        this.statBaseAtk += 50,
        this.statBaseDefense += 20,
        this.statBaseResistance += 20
    }
}

class Weaver extends Hero {
    constructor(heroName, gender, race, health, atk, def, res){
        super(heroName, gender, race, health, atk, def, res);
        //extend heroClass with weaver specific stats
        this.name =  'Weaver',
        this.classDescription = 'The Weaver is a conduit of the universe, but strives to be its conductor. Manipulating fundamental principles of physics, the weaver';
        this.mainWeapon = 'Javelin - a long lance like rod that fires devastating energy projectiles.';
        this.subclasses = ['Loki - illusory powers', 'Grav - Devastating Damage and crowd control'];
    }
    modifyWeavStats(){
        this.statBaseHealth += 90,
        this.statBaseAtk += 60,
        this.statBaseDefense += 20,
        this.statBaseResistance += 30
    }
}

class Colossus extends Hero {
    constructor(heroName, gender, race, health, atk, def, res){
        super(heroName, gender, race, health, atk, def, res);
        //extend heroClass with weaver specific stats
        this.name =  'Colossus',
        this.classDescription = 'Frontline and center, the Colossus throws themself with calculated abandon to consume all the damage they can and provide openings for their team to lay down damage.';
        this.mainWeapon = 'Barrier Shield - projected from an inconspicuous piece of tech on their wrists';
        this.subclasses = ['Behemoth - increased defenses', 'Tamer - increased mobility through Mech', 'Titan - more control abilities, and they cost less'];
    }
    modifyColoStats(){
        this.statBaseHealth += 120,
        this.statBaseAtk += 30,
        this.statBaseDefense += 40,
        this.statBaseResistance += 40
    }
}

class Hunter extends Hero {
    constructor(heroName, gender, race, health, atk, def, res){
        super(heroName, gender, race, health, atk, def, res);
        //extend heroClass with weaver specific stats
        this.name =  'Hunter',
        this.classDescription = 'The Hunter, also known as the Dancer for its agility and apex control of its body in space, is the paragon of assassination. Killing is an art.';
        this.mainWeapon = 'Atoms Edge (name pending) - a blade sharpened to a submolecular level. Will cut through just about anything.';
        this.subclasses = ['Dancer - increased mobility', 'Apparition - increased stealth', 'Silencer - increased range and traps'];
    }
    modifyHuntStats(){
        this.statBaseHealth += 80,
        this.statBaseAtk += 70,
        this.statBaseDefense += 30,
        this.statBaseResistance += 20
        
    }
}

class Vocalist extends Hero {
    constructor(heroName, gender, race, health, atk, def, res){
        super(heroName, gender, race, health, atk, def, res);
        //extend heroClass with weaver specific stats
        this.name =  'Vocalist',
        this.classDescription = 'The Vocalist employs the power of suggestion and logic to reason the conditions of those around him into better or worse states.';
        this.mainWeapon = 'Atoms Edge (name pending) - a blade sharpened to a submolecular level. Will cut through just about anything.';
        this.subclasses = ['Speaker', 'Soothsayer'];
    }
    modifyVocaStats(){
        this.statBaseHealth += 120,
        this.statBaseAtk += 30,
        this.statBaseDefense += 40,
        this.statBaseResistance += 40
        
    }
}

var characters = [Valkyrie, Weaver, Colossus, Hunter, Vocalist];

// --------------------------------------------------------------------------------------------------------
console.log("Character Classes: " + characters);
console.log(Hero);
console.log(Valkyrie);

// -----Testing Initiating Character Classes-----
const leigh = new Valkyrie('Leigh', 'female', 'Avianni');
leigh.modifyValkStats();
console.log(leigh);

const bryan = new Weaver('Bryan', 'male', 'Avianni');
bryan.modifyWeavStats();
console.log(bryan);

const kach = new Colossus('Kach', 'male', 'Human');
kach.modifyColoStats();
console.log(kach);

const caroline = new Hunter('Caroline', 'female', 'Praenobis');
caroline.modifyHuntStats();
console.log(caroline);

const ian = new Vocalist('Ian', 'non-binary', 'Praenobis');
ian.modifyVocaStats();
console.log(ian);


// --------------------------------SubClasses-------------------------------------------


// valkyrie.attack(colossus);

var playerStats = {
    'pName': '',
    'pGender': '',
    'pRace': '',
    'pClass': '',
    'pLevel': 1,
    'pExp': 0,
    'baseHealth': 0,
    'baseAtk': 0,
    'damageType': '',
    'baseDefense': 0,
    'baseResistance': 0,
    'classDescription': '',
    'mainWeapon': '', //Maybe change to proficientWeapons[]
    'subclass': '',
    'inventory': [],
    'equipment': [] //This may be better as a separate object. I could copy the items in this array to corresponding properties in a Child Object
}

var characterClasses = {
    vocalist : {
        'className': 'vocalist',
        'statBaseHealth': 85,
        'statBaseAtk': 100,
        'statDamageType': 'Physical',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'classDescription': 'The Vocalist employs the power of suggestion and logic to reason the conditions of those around him into better or worse states.',
        'mainWeapon': 'Atoms Edge (name pending) - a blade sharpened to a submolecular level. Will cut through just about anything.',
        'subclasses': {
            'speaker':  '',
            'soothSayer': ''
        }
    }
}

var genders = {
    male: '',
    female: '',
    'non-binary': ''
}

var races = {
    human: {
        description: 'Your standard human from Earth.'
    },
    avianni : {
        description: 'A race from the other side of the Milky Way evolved in the skies.'
    },
    praenobis : {
        description: 'A Roman and Elven like race, predating humanity and who knows what else'
    }
}

var playerName;
var playerGender;
var playerRace;

var characterCreation = function(){
    $('body').prepend(
        "<div id='character-creation' class='fullWidth'>" +
            "<div id='name-div' class='fullWidth'>" +
                "<label type='text' for='name' class='niceLabel'>" + "What is Your Name: " + "</label><input id='charName' type='text' class='niceInput'> <button id='submitName' class='selectionBtn'>Submit Name</button>" +
            "</div>" +
            "<div id='genderDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "What is Your Gender: " + "</p>" +
            "</div>" +
            "<div id='raceDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "Choose Your Race: " + "</label>" +
            "</div>" +
            "<div id='finish' class='fullWidth'>" +
                "<button id='submitOne' class='selectionBtn'> Submit </button>" +
            "</div>" +
            '<div id="player-action">' +
                '<div id="character-choice"></div>' +
                '<div id="char-desc" class="invisible"></div>' +
            '</div>' +
        "</div>"
    );
    $('#player-action').prepend(
        "<div id='classDiv' class='fullWidth'>" +
        "<p class='niceLabel'>" + "Choose Your Class: " + "</p>" +
        "</div>"
    );
    makeCharacters();

    for (var gender in genders) {
        $('#genderDiv').append("<button id='" + gender + "' value='" + gender + "' class='selectionBtn genderBtn'>" + gender + "</button>")
    }
    for (var race in races) {
        $('#raceDiv').append("<button id='" + race + "' value='" + race + "' class='selectionBtn raceBtn'>" + race + "</button>")
    }
    $('#submitName').on('click', function(){
        playerName = $('#charName').val();
        playerStats.pName = playerName;
        // $(document).off('keypress');
    })
    $('.selectionBtn').on('click', function(){
        var selectedBtn = $(this);
        if(selectedBtn.hasClass('genderBtn')) {
            playerGender = selectedBtn.val();
            playerStats.pGender = playerGender;
            
        } else if(selectedBtn.hasClass('raceBtn')) {
            playerRace = selectedBtn.val();
            playerStats.pRace = playerRace;
        }
    })
    $('#submitOne').on('click', function(){
        console.log('Your name is ' + playerStats.pName + '. Your gender is ' + playerStats.pGender + '. Your race is ' + playerStats.pRace + '.');
    })
}

//---------------------------- Start Game ------------------------------------------------------------------------------------
$(document).on('keypress', function(e){
    console.log(e.which);
    gameStart();
    $(document).off('keypress');
})

var gameStart = function() {
    $('#start-screen').remove('');
    // Move to Character Creation Screen
    characterCreation();
};





// Ignore Everything below for now ------------------------------------------------------------------------------------------
    


//Set up Player Class Objects
// The Classes below may become subclasses. At the very least subclasses need to be fleshed out.
    
var isCharChosen = false;

    
    // ------------------------ presenting options to choose
    var makeCharacters = function() {
        for (var charClass in characterClasses) {
            characterCard = $("<div id='" + charClass + "' class='character-card'>" + "<h2>" + charClass + "</h2>" + "</div>");
            var cardImg = $("<img src='assets/images/voice.gif' width='175px' height='100px'>");
            var charStatsDiv = $("<div class ='char-stats'>");

            characterCard.append(cardImg);
            characterCard.append(charStatsDiv);
            $('#character-choice').append(characterCard);

            var character = characterClasses[charClass];
            $('#char-desc').append("<div>" + character.classDescription + "</div>" );
            console.log(character);
            for (var prop in character) {
                console.log(prop + ": " + character[prop]);
                if(prop.indexOf('stat') !== -1) {
                    $(charStatsDiv).append("<p>" + prop + ": " + character[prop] + "</p>");
                }
                
            }
        }
        
    }

    
    
    //Ask the player questions regarding their character
    // var playerName = prompt('What is your name?').toLowerCase();
    // var playerSex = prompt('Are you male or female?').toLowerCase();
    // var playerRace = prompt('Pick from the following races: ' + 'Human, Sofia (new stage in human evolution), Mechan (human conscience in a mech frame), Brakke (From nearby system, hardened exterior)').toLowerCase();
    // var playerClass = prompt('Pick from the following classes: ' + 'Valkyrie, Weaver, Colossus, Hunter, Vocalist').toLowerCase();

    //Validate Sex 
    // while (playerSex !== 'male' || playerSex !== 'female') {
    //     playerSex = prompt(" '" + playerSex + "' " + 'is not a valid entry. Are you male or female?');
    // }

    //Store base stats in the player stats object based on what the player chose as their class
    // if(playerClass === 'valkyrie') {
    //     // Yay! This loop does what it sets out to accomplish. It looks for 'x' property in playerStats and copies its value to properties
    //     // in valkyrieStats of the same name as 'x'. Anything else is left undefined.
    //     var x;
    //     for (x in playerStats) {
    //         playerStats[x] = valkyrieStats[x]; 
    //         // console.log(playerStats);
    //     }

    // } else if(playerClass === 'weaver'){
    //     var x;
    //     for (x in playerStats) {
    //         playerStats[x] = weaverStats[x]; 
    //         console.log(playerStats);
    //     }
    // } else if(playerClass === 'colossus'){
    //     var x;
    //     for (x in playerStats) {
    //         playerStats[x] = colossusStats[x]; 
    //         console.log(playerStats);
    //     }
    // } else if(playerClass === 'hunter'){
    //     var x;
    //     for (x in playerStats) { 
    //         playerStats[x] = hunterStats[x]; 
    //         console.log(playerStats);
    //     }
    // } else if(playerClass === 'vocalist'){
    //     var x;
    //     for (x in playerStats) { 
    //         playerStats[x] = vocalistStats[x]; 
    //         console.log(playerStats);
    //     }
    // }
    
    
    // playerStats.pName = playerName;
    // playerStats.pSex = playerSex;
    // playerStats.pRace = playerRace;
    // playerStats.pClass = playerClass;
    // playerStats.pLevel = 1;
    // playerStats.pExp = 0;
    
    // //Level Up Function
    // //Should track experience and change level when experience reaches certain point
    
    // function levelUp(expGained) {
    //     //Instead of a flat number, expGained should be a fluid dynamic variable that receives the value 
    //     var expGained = 25;
    //     if (expGained !== 0) {
    //         playerStats.pExp += expGained;
    //         console.log('Current experience is: ' + playerStats.pExp);
    //     }
    // }
    // //Battle Sequence

    // levelUp();

    // console.log(playerStats);



    // export {
    //     valkyrieStats,
    //     weaverStats,
    //     colossusStats,
    //     hunterStats,
    //     vocalistStats
        
    // }
