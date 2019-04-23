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

