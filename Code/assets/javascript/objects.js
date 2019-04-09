// Global Variables and Functions
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
        "<form id='character-creation' class='fullWidth'>" +
            "<div id='name-div' class='fullWidth'>" +
                "<label type='text' for='name' class='niceLabel'>" + "What is Your Name: " + "</label><input type='text' class='niceInput'>" +
            "</div>" +
            "<div id='genderDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "What is Your Gender: " + "</p>" +
            "</div>" +
            "<div id='raceDiv' class='fullWidth'>" +
                "<p class='niceLabel'>" + "Choose Your Race: " + "</label>" +
            "</div>" +
        "</form>"
    )
    for (var gender in genders) {
        $('#genderDiv').append("<button id='" + gender + "' value='" + gender + "' class='selectionBtn genderBtn'>" + gender + "</button>")
    }
    for (var race in races) {
        $('#raceDiv').append("<button id='" + race + "' value='" + race + "' class='selectionBtn raceBtn'>" + race + "</button>")
    }
    $('.selectionBtn').on('click', function(){
        var selectedBtn = $(this);
        if(selectedBtn.hasClass('genderBtn')) {
            playerGender = selectedBtn.val();
            alert(playerGender);
        } else if(selectedBtn.hasClass('raceBtn')) {
            playerRace = selectedBtn.val();
            alert(playerRace);
        }
    })
}


$(document).on('keypress', function(e){
    console.log(e.which);
    gameStart();
    $(document).off('keypress');
})

var gameStart = function() {
    $('#start-screen').remove('');
    characterCreation();
};





//Set up Dice
//Roll is invoked by 'object.roll()'
    
    var d4 = {
        sides: 4,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    }
    var d6 = {
        sides: 6,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    }
    var d8 = {
        sides: 8,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    }
    var d10 = {
        sides: 10,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    }
    var d12 = {
        sides: 12,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        } 
    }
    var d20 = {
        sides: 20,
        roll: function () {
            var randomNum = Math.floor(Math.random() * this.sides) + 1;
            console.log(randomNum);
            return randomNum;
        }
    }

//-------------------Weapons & Gear------------------------------------------------------------------
//Item Rarities
var common, uncommon, rare, epic, legendary, mythic;
// Convert all these to Objects
common = {
    gearSlot: '',
    statGain1: 0, //Adds hard stat to playerClass Object
    colorCode: 'white',
    itemValue: 'low', //Determines what price an item of this rarity might sell or barter for
    isInfusable: false, //Whether this level rarity item is able to receive other items to level up
    powerLevel: 0, //Number displaying how powerful an item is before any Infusion. Mostly for user clarity. (May be unnecessary).
}
uncommon = {
    gearSlot: '',
    statGain1: 0,
    statGain2: 0,
    colorCode: 'green',
    itemValue: 'low to moderate',
    powerLevel: 0,
    isInfusable: false
}
rare = {
    gearSlot: '',
    statGain1: 0,
    statGain2: 0,
    statGain3: 0,
    colorCode: 'blue',
    itemValue: 'moderate to high',
    powerLevel: 0,
    isInfusable: false,
    flavorText: ' '
    
}
epic = {
    gearSlot: '',
    statGain1: 0,
    statGain2: 0,
    statGain3: 0,
    colorCode: 'purple',
    itemValue: 'high',
    powerLevel: 0,
    isInfusable: true,
    infusionStatus: 0, //Item's current infusion status by percentage
    flavorText: ' '
}
legendary = {
    gearSlot: '',
    statGain1: 0,
    statGain2: 0,
    statGain3: 0,
    passive: ' ',
    colorCode: 'gold',
    itemValue: 'very high', 
    powerLevel: 0,
    isInfusable: true,
    infusionStatus: 0,
    flavorText: ' '
}
mythic = {
    gearSlot: '',
    statGain1: 0,
    statGain2: 0,
    statGain3: 0,
    passive: 0,
    colorCode: 'red',
    itemValue: 'invaluable',
    powerLevel: 0,
    isInfusable: true,
    infusionStatus: 0,
    flavorText: ' '
}
// var itemRarities = [common, uncommon, rare, epic, legendary, mythic];
// var gearSlot = [helmet, torso, legs, arms, ring, weaponOne, weaponTwo, weaponThree];

// var helmOfAwe_Aegishjalmr = {
//     gearSlot: helmet,
//     itemRarity: mythic,
//     statGain1: playerStats.baseHealth + 250,
//     statGain2: playerStats.baseAtk + 100,
//     passive: 'While surrounded by more than two enemies and further than 30ft from the nearest ally, gain 50% damage reduction and +5 * (number of enemies in range) to attacks.',
//     flavorText: 'The Helm of Awe I wore before the sons of men In defense of my treasure; Amongst all, I alone was strong, I thought to myself, For I found no power a match for my own.',
// }

// var rustyDagger = {
//     gearSlot: weaponThree,
//     itemRarity: common,
//     statGain1: playerStats.baseAtk + 10,
//     flavorText: '',
// }

// //
// class commonItem {
//     constructor(gearSlot, itemRarity, statGain1) {
        
//     }
// }
// var commonLoot = {
//     rustyDagger: {
//         gearSlot: weaponThree,
//         itemRarity: common,
//         statGain1: playerStats.baseAtk + 10
//     },
//     standardIssueRifle: {
//         gearSlot: weaponTwo,
//         itemRarity: common,
//         statGain1: playerStats.baseAtk + 20
//     },
//     shoddyBow: {
//         gearSlot: weaponOne,
//         itemRarity: common,
//         statGain1: playerStats.baseAtk + 15
//     }

// }

// Audio Autoplay
var audio = document.getElementById('myAudio');
audio.volume = 0.05;

//Set up Player Class Objects
// The Classes below may become subclasses. At the very least subclasses need to be fleshed out.
    
var isCharChosen = false;


var characterClasses = {
    valkyrie : {
        'className': 'valkyrie',
        'statBaseHealth': 100,
        'statBaseAtk': 125,
        'statDamageType': 'Magic',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'statBaseSpeed': 100,
        'classDescription': 'The Valkyrie is a melee-ranged spellcasting hybrid. Their main focus is providing consistent damage from afar while having excellent defenses up close while threatened. ',
        'mainWeapon': 'Javelin - a long lance like rod that fires devastating energy projectiles.',
        'subclasses': []
    },
    weaver : {
        'className': 'weaver',
        'statBaseHealth': 90,
        'statBaseAtk': 100,
        'statDamageType': 'Magic',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'statBaseSpeed': 100,
        'classDescription': 'The Weaver is a student of the universe, but strives to be its sculptor. Manipulating fundamental principles of physics, the weaver',
        'mainWeapon': 'Javelin - a long lance like rod that fires devastating energy projectiles.',
        'subclasses': ['Loki - illusory powers', 'Grav - Devastating Damage and crowd control']
    },
    colossus : {
        'className': 'colossus',
        'statBaseHealth': 150,
        'statBaseAtk': 100,
        'statDamageType': 'Physical',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'statBaseSpeed': 100,
        'classDescription': 'Frontline and center, the Colossus throws themself with calculated abandon to consume all the damage they can and provide openings for their team to lay down damage.',
        'mainWeapon': 'Barrier Shield - projected from an inconspicuous piece of tech on their wrists',
        'subclasses': ['Behemoth - increased defenses', 'Tamer - increased mobility through Mech', 'Titan - more control abilities, and they cost less']
    },
    hunter : {
        'className': 'hunter',
        'statBaseHealth': 75,
        'statBaseAtk': 100,
        'statDamageType': 'Physical',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'statBaseSpeed': 100,
        'classDescription': 'The Hunter, also known as the Dancer for its agility and apex control of its body in space, is the paragon of assassination. Killing is an art.',
        'mainWeapon': 'Atoms Edge (name pending) - a blade sharpened to a submolecular level. Will cut through just about anything.',
        'subclasses': ['Dancer - increased mobility', 'Apparition - increased stealth', 'Silencer - increased range and traps']
    },
    vocalist : {
        'className': 'vocalist',
        'statBaseHealth': 85,
        'statBaseAtk': 100,
        'statDamageType': 'Physical',
        'statBaseDefense': 100,
        'statBaseResistance': 100,
        'statBaseSpeed': 100,
        'classDescription': 'The Vocalist employs the power of suggestion and logic to reason the conditions of those around him into better or worse states.',
        'mainWeapon': 'Atoms Edge (name pending) - a blade sharpened to a submolecular level. Will cut through just about anything.',
        'subclasses': {
            'speaker':  '',
            'soothSayer': ''
        }
    }
}
    
    // ------------------------ presenting options to choose
    var makeCharacters = function() {
        for (var charClass in characterClasses) {
            var characterCard = $("<div id='" + charClass + "' class='character-card'>" + "<h2>" + charClass + "</h2>" + "</div>");
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

    makeCharacters();

    
    //Player Stats
    var playerStats = {
        'pName': '',
        'pSex': '',
        'pRace': '',
        'pClass': '',
        'pLevel': 1,
        'pExp': 0,
        'baseHealth': 0,
        'baseAtk': 0,
        'damageType': '',
        'baseDefense': 0,
        'baseResistance': 0,
        'baseSpeed': 0,
        'classDescription': '',
        'mainWeapon': '', //Maybe change to proficientWeapons[]
        'subclass': '',
        'inventory': [],
        'equipment': [] //This may be better as a separate object. I could copy the items in this array to corresponding properties in a Child Object
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
