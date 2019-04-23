document.body.charClasses = {
    valkyrie : {
        dmg: 'physical'
    },
    weaver : {
        dmg: 'physical'
    }
}

for (var char in document.body.charClasses) {
    document.write(document.body.charClasses[char] + "- \n Damage: " + document.body.charClasses[char].dmg);
}
