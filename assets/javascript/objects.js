// Global Variables, Objects, Functions

// ----------- Audio Autoplay -----------
// NOT CURRENTLY NEEDED, PLUS AUTOPLAY FUNCTIONALITY REMOVED FROM CHROME
// var audio = document.getElementById('myAudio');
// audio.volume = 0.05;

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
        this.xp = 0,
        this.xpToLevelUp
        this.statBaseHealth = 0,
        this.statBaseAtk = 0,
        this.statBaseDefense = 0,
        this.statBaseResistance = 0
    }
    attack(otherChar){
        otherChar.statBaseHealth -= this.statBaseAtk;
        console.log(otherChar.name + " has " + otherChar.statBaseHealth + " health left.");
    }
    modifyClassStats(health, atk, def, res){
        this.statBaseHealth += health,
        this.statBaseAtk += atk,
        this.statBaseDefense += def,
        this.statBaseResistance += res
    }
    renderButton(){
        var self = this;
        function renderClass() {
            $('#character-choice').empty();
            $('.charClassTab').on('click', function(){
                $('.active').removeClass('active');
                $(this).addClass('active');
            })
    
            var characterCard = $("<div id='" + self.name + "-demoCard' class='character-card'>" + "<h2>" + self.name + "</h2>" + "</div>");
            var cardImgDiv = $("<div class='cardImgDiv'><p>Placeholder</p></div>");
            var charInfoDiv = $("<div class='charInfoDiv'></div>");
            var charStatsDiv = $("<div class ='charStatsDiv'>");
            var charDescDiv = $("<div class ='charDescDiv'>" + "<p>" + self.classDescription + "</p>" + "</div>");
            
            characterCard.append(cardImgDiv);
            charStatsDiv.append("<h4>HP: " + self.statBaseHealth);
            charStatsDiv.append("<h4>ATK: " + self.statBaseAtk);
            charStatsDiv.append("<h4>DEF: " + self.statBaseDefense);
            charStatsDiv.append("<h4>RES: " + self.statBaseResistance);
            charInfoDiv.append(charStatsDiv);
            charInfoDiv.append(charDescDiv);
            characterCard.append(charInfoDiv);

            
            $('#character-choice').append(characterCard);
    
            // $('#char-desc').append("<div>" + self.classDescription + "</div>" );
            $(characterCard).on('click', function(){
                $('#playerHealth').val("<h4>HP: ");
                $('#playerAtk').val("<h4>ATK: ");
                $('#playerDef').val("<h4>DEF: ");
                $('#playerRes').val("<h4>RES: ");
    
                $('#playerHealth').html("<h4>HP: " + self.statBaseHealth);
                playerStats.statBaseHealth = self.statBaseHealth;
                $('#playerAtk').html("<h4>ATK: " + self.statBaseAtk);
                playerStats.statBaseAtk = self.statBaseAtk;
                $('#playerDef').html("<h4>DEF: " + self.statBaseDefense);
                playerStats.statBaseDefense = self.statBaseDefense;
                $('#playerRes').html("<h4>RES: " + self.statBaseResistance);
                playerStats.statBaseResistance = self.statBaseResistance;
            });
        }
        var classButton = $("<button/>").attr({
            'type': 'button',
            'id': this.name + '-btn',
            'class': 'charClassTab',
            'title': this.name,
            'value': this.name
        }).html(this.name).bind('click', renderClass);
        
        $('#class-tabs').append(classButton);
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
        this.modifyClassStats(100, 50, 20, 20);
        this.renderButton();
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
        this.modifyClassStats(90, 60, 20, 30);
        this.renderButton();
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
        this.modifyClassStats(120, 30, 40, 40);
        this.renderButton();
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
        this.modifyClassStats(80, 70, 30, 20);
        this.renderButton();
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
        this.modifyClassStats(100, 30, 30, 30);
        this.renderButton();
    }
}

// -----Testing Initiating Character Classes-----

// const bryan = new Weaver('Bryan', 'male', 'Avianni');
// bryan.modifyWeavStats();
// console.log(bryan);

// const kach = new Colossus('Kach', 'male', 'Human');
// kach.modifyColoStats();
// console.log(kach);

// const caroline = new Hunter('Caroline', 'female', 'Praenobis');
// caroline.modifyHuntStats();
// console.log(caroline);

// const ian = new Vocalist('Ian', 'non-binary', 'Praenobis');
// ian.modifyVocaStats();
// console.log(ian);


// --------------------------------SubClasses-------------------------------------------


// valkyrie.attack(colossus);

var playerStats = {
    'pName': '',
    'pGender': '',
    'pRace': '',
    'pClass': '',
    'pLevel': 1,
    'pExp': 0,
    'statBaseHealth': 0,
    'statBaseAtk': 0,
    'damageType': '',
    'statBaseDefense': 0,
    'statBaseResistance': 0,
    'classDescription': '',
    'mainWeapon': '', //Maybe change to proficientWeapons[]
    'subclass': '',
    'inventory': [],
    'equipment': [] //This may be better as a separate object. I could copy the items in this array to corresponding properties in a Child Object
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
    },
    anthrosimilim : {
        description: 'Men and women who traded their flesh for cold, metal bodies in pursuit of eternal concsciousness whether by their will or not.'
    }
}

var playerName;
var playerGender;
var playerRace;
var playerHealth;
var playerAtk;
var playerDef;
var playerRes;

var characterCreation = function(){
    $('body').prepend(
        "<div id='character-creation'>" +
            '<div id="creation-nav">' +
                '<button id="nav-name" class="nav-btn">Name</button>' +
                '<button id="nav-gender" class="nav-btn">Gender</button>' +
                '<button id="nav-race" class="nav-btn">Race</button>' +
                '<button id="nav-class" class="nav-btn">Class</button>' +
                '<button id="nav-confirm" class="nav-btn">Create</button>' +
            '</div>' +
            '<div id="player-action" class="options-box container">' +
                '<div id="character-choice"></div>' +
                '<div id="char-desc"></div>' +
            '</div>' +
        "</div>"
    );
    $('#player-action').prepend(
        "<div id='classDiv' class='container'>" +
        "<p class='niceLabel'>" + "Choose Your Class: " + "</p>" +
        "<div id='class-tabs'>" +
        "</div>"
    );
    $('body').prepend(
        // "<div id='playerCharacterInfo' class='container options-box'>" +
        //     "<h3 id='playerName'>Name: </h3>" +
        //     "<h3 id='playerGender'>Gender: </h3>" +
        //     "<h3 id='playerRace'>Race: </h3>" +
        //     "<div id='playerStats'>" + 
        //         "<h3 id='playerHealth'>Health: </h3>" +
        //         "<h3 id='playerAtk'>Attack: </h3>" +
        //         "<h3 id='playerDef'>Defense: </h3>" + 
        //         "<h3 id='playerRes'>Resistance: </h3>" + 
        //     "</div>" +
        // "</div>"
    );
    $('body').on('click', '#nav-name', function(){
        $('#player-action').html(
            "<div id='name-div' class='fullWidth'>" +
                "<label type='text' for='name' class='niceLabel'>" + "What is Your Name: " + "</label><input id='charName' type='text' class='niceInput'> <button id='submitName' class='selectionBtn'>Submit Name</button>" +
            "</div>"
        );
        $('#submitName').on('click', function(){
            playerName = $('#charName').val();
            $('#charName').val('');
            playerStats.pName = playerName;
            
            // $(document).off('keypress');
        })
    });
    $('body').on('click', '#nav-gender', function(){
        $('#player-action').html(
            "<div id='genderDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "What is Your Gender: " + "</p>" +
            "</div>"
        );
        for (var gender in genders) {
            $('#genderDiv').append("<button id='" + gender + "' value='" + gender + "' class='selectionBtn genderBtn'>" + gender + "</button>");
        }
        $('.selectionBtn').on('click', function(){
            var selectedBtn = $(this);
            if(selectedBtn.hasClass('genderBtn')) {
                playerGender = selectedBtn.val();
                playerStats.pGender = playerGender;
                $('#playerGender').append(playerStats.pGender);
                
            } else {
                return false;
            }
        })
    });
    $('body').on('click', '#nav-race', function(){
        $('#player-action').html(
            "<div id='raceDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "Choose Your Race: " + "</label>" +
            "</div>"
        );
        for (var race in races) {
            $('#raceDiv').append("<button id='" + race + "' value='" + race + "' class='selectionBtn raceBtn'>" + race + "</button>")
        }
        $('.selectionBtn').on('click', function(){
            var selectedBtn = $(this);
            if(selectedBtn.hasClass('raceBtn')) {
                playerRace = selectedBtn.val();
                playerStats.pRace = playerRace;
                $('#playerRace').append(playerStats.pRace);
                
            } else {
                return false;
            }
        })
    });
    $('body').on('click', '#nav-class', function(){
        $('#player-action').html(
            "<div id='classDiv' class='container'>" +
                "<p class='niceLabel'>" + "Choose Your Class: " + "</p>" +
                "<div id='class-tabs'></div>" +
            "</div>" 
        );
    });
    $('body').on('click', '#nav-confirm', function(){
        $('#player-action').html(
            "<div id='playerCharacterInfo'>" +
            "<h3 id='playerName'>Name: </h3>" + playerStats.pName +
            "<h3 id='playerGender'>Gender: </h3>" + playerStats.pGender +
            "<h3 id='playerRace'>Race: </h3>" + playerStats.pRace +
            "<div id='playerStats'>" + 
                "<h3 id='playerHealth'>Health: </h3>" + playerStats.statBaseHealth +
                "<h3 id='playerAtk'>Attack: </h3>" + playerStats.statBaseAtk +
                "<h3 id='playerDef'>Defense: </h3>" + playerStats.statBaseDefense +
                "<h3 id='playerRes'>Resistance: </h3>" + playerStats.statBaseResistance +
            "</div>" +
            "<div id='finish' class='fullWidth'>" +
            "<button id='submitOne' class='selectionBtn'> Submit </button>" +
        "</div>"
        );
    });

    function renderClass() {
        
    }
    // Instantiate Demo versions of classes to display stats on cards.
    // ---------------------------------------------------------------
    // ---------------------------------------------------------------
    const demoValk = new Valkyrie();
    console.log(demoValk);
    const demoWeaver = new Weaver();
    console.log(demoWeaver);
    const demoColo = new Colossus();
    console.log(demoColo);
    const demoHunter = new Hunter();
    console.log(demoHunter);
    const demoVocalist = new Vocalist();
    console.log(demoVocalist);
    // ---------------------------------------------------------------



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





// --------------------------------***IGNORE EVERYTHING BELOW FOR NOW*** ------------------------------------------
// --------------------------------***IGNORE EVERYTHING BELOW FOR NOW*** ------------------------------------------
// --------------------------------***IGNORE EVERYTHING BELOW FOR NOW*** ------------------------------------------
// --------------------------------***IGNORE EVERYTHING BELOW FOR NOW*** ------------------------------------------
// --------------------------------***IGNORE EVERYTHING BELOW FOR NOW*** ------------------------------------------

    
    // ------------------------ presenting options to choose
    // var makeCharacters = function() {
    //     for (var charClass in characterClasses) {
    //         characterCard = $("<div id='" + charClass + "' class='character-card'>" + "<h2>" + charClass + "</h2>" + "</div>");
    //         var cardImg = $("<img src='assets/images/voice.gif' width='175px' height='100px'>");
    //         var charStatsDiv = $("<div class ='char-stats'>");

    //         characterCard.append(cardImg);
    //         characterCard.append(charStatsDiv);
    //         $('#character-choice').append(characterCard);

    //         var character = characterClasses[charClass];
    //         $('#char-desc').append("<div>" + character.classDescription + "</div>" );
    //         console.log(character);
    //         for (var prop in character) {
    //             console.log(prop + ": " + character[prop]);
    //             if(prop.indexOf('stat') !== -1) {
    //                 $(charStatsDiv).append("<p>" + prop + ": " + character[prop] + "</p>");
    //             }
                
    //         }
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

    // console.log(playerStats);