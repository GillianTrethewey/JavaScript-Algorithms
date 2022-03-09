let supernatural = {
    "actors": ['Jared Padalecki', 'Jensen Ackels', 'Mark Sheppard', 'Misha Collins'],
    "characters": ['Sam', 'Dean', 'Crowley', 'Castiel'],
    "seasons": 12
};

for (let key in supernatural) {
    console.log(key, supernatural[key]); // NOT dot notation for .key part since can access actors with dot
}

for (let key in supernatural.actors) {
    console.log(key, supernatural.actors[key]);
}

for (let key in supernatural.characters) { // returns the key:value pair IN is key plus whatever you want
    console.log(key, supernatural.characters[key]);
}

for (let actor of supernatural.actors) { // returns the values of key:value pairs OF is values only
    console.log(actor);
}

let monsters = {'Canada':'Sasquatch', 'Nepal': 'Yeti', 'Scotland': 'Loch Ness Monster'};

for (let key in monsters) {
    console.log(key, monsters[key]); //NOT dot notation
}

let pets = ["Woody", "Roxy", "Bob"];

for (let key in pets) {
    console.log("In", key, ", we have the petname:", pets[key]);
}