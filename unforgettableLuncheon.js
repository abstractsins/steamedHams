// An Unforgettable Luncheon

unforgettableLuncheon('Roast');
function unforgettableLuncheon(food, guest={}) {
    let houseOnFire = false;

    let host = {
        name: 'Seymour',
        honest: false
    }
    guest.name = "Superintendent Chalmers";
    guest.irked = true;
    guest.confrontational = true;

    const greeting = guest => {
        if (guest.irked) console.log(`> Well, ${host.name}, I made it... Despite your directions.`);
        console.log(`# Ahhh, ${guest.name}! Welcome! I hope you're prepared for an unforgettable luncheon.`);
        if (guest.irked) console.log(`> Nyeh...`);
    };

    const intro = () => {
        const jingle = `\n♫ Skinner, with his crazy explanations,
        \nThe Superintendent's gonna need his medication.
        \nWhen he hears Skinner's lame exaggerations,
        \nThere'll be trouble in town - tonight. ♪\n`
        return jingle;
    }

    if (guest) greeting(guest);
    let meal = {
        food: this.food, 
        guest: this.guest, 
        oven: {
            on: true, 
            hasSmokePouringOut: false
        }
    };

    class _KrustyBurger {
        constructor(method, adj, item='hamburgers') {
            this.method = method;
            this.adj = adj;
            this.item = item;
        }
        transaction = true;
        scheme(){
            console.log(`# But what if... I were to purchase fast food and disguise it as my own cooking? Oh ho ho ho ho ho! Delightfully devilish, ${host.name}.`);
            if (meal.oven.hasSmokePouringOut) {
                confrontation('uh');
                console.log(intro());
                confrontation('window'); simplyLie('window');
                confrontation('steam'); simplyLie('steam');
                if (meal.coastIsClear) console.log(`# Whew...`);
                if (this.transaction) console.log(`# Superintendent, I hope you're ready for ${this.adj} ${this.item}.`)
                confrontation('clams'); simplyLie('clams');
                confrontation('slang'); simplyLie('slang');
                confrontation('region'); simplyLie('region');
                confrontation('dialect'); simplyLie('dialect');
                if (guest.beginningToTire) console.log(`> I see.`);
                beginEating('familiar taste'); simplyLie('source');
                confrontation('hams'); simplyLie();
                confrontation('grilled'); simplyLie('grilled');
                guest.confrontational = false;
                confrontation();
                wrapItUp();
            }
        }
    }

    const checkFood = dish => {
        const catchBreak = () => Math.random() < 0.5 ? true : false; 
        if (catchBreak() === false) {
            console.log(`# GASP! Oh egads! My ${dish} is ruined!`) 
            return false;
        } else checkFood(dish);
    }   
    
    if (!checkFood('Roast')) {
        meal.oven.hasSmokePouringOut = true;
        meal.ruined = true;
    }

    let steamedHams = new _KrustyBurger('grilled', 'mouth-watering');
    meal.ruined ? disguiseFood(steamedHams) : checkFood(meal.food);

    function confrontation(event){
        if (guest.confrontational) {
            switch (event) {
                case 'uh': console.log(`> Uh--`); break;
                case 'hams': console.log(`> For steamed hams...`); break;
                case 'steam': console.log(`> Why is there smoke coming out of your oven, ${host.name}?`); break;
                case 'clams': console.log(`> I thought we were having steamed clams.`); break;
                case 'slang': console.log(`> You call hamburgers 'steamed hams'?`); break;
                case 'region': console.log(`> Uh-huh. What region?`); break;
                case 'lights': console.log(`> A---Aurora Borealis?? At this time of year! At this time of day! In this part of the country! Localized entirely within your kitchen?!?`); 
                    guest.curious = true; 
                    guest.confrontational = false; 
                    break;
                case 'wtf': console.log(`> Yes, I should be---GOOD LORD! What is happening in there?`); break;
                case 'dialect': console.log(`> Really. Well, I'm from Utica and I've never heard anyone use the phrase 'steamed hams'.`); break;
                case 'window': console.log(`> ${host.name}!`); break;
                case 'source': console.log(`> You know, these ${steamedHams.item} are quite similar to the ones they have at Krusty Burger.`); break;
                case 'grilled': console.log(`> Yes, and you call them steamed hams, despite the fact that they are obviously grilled.`); break;
            } 
        } else switch (event) {
            case 'see': console.log(`> May I see it?`); host.honest = true; break;
            default: console.log(`> Of course.`);
        } 
    }

    function simplyLie(bs){
        if (!host.honest) {
            switch (bs) {
                case 'steam': console.log(`# Uh... Ooh! That isn't smoke. It's steam. Steam from the steamed clams we're having. Mmmm. Steamed Clams!`);
                    meal.coastIsClear = true;
                    break;
                case 'clams': console.log(`# D'oh no, I said Steamed Hams! That's what I call hamburgers.`); break;
                case 'slang': console.log(`# Yes! It's a regional dialect.`); break;
                case 'region': console.log(`# Uhhh-upstate New York?`); break;
                case 'fire': console.log(`# No, Mother, it's just the Northern Lights.`); break;
                case 'wtf': console.log(`# Aurora Borealis?`); break;
                case 'dialect': console.log(`# Oh, not in Utica, no, it's an Albany expression.`);
                    guest.beginningToTire = true; 
                    break;
                case 'window': console.log(`# Superintendent, I was just-- uh, just stretching my calves on the windowsill. Isometric exercise! Care to join me?`); break;
                case 'source': console.log(`# Oh ho ho ho no! Patented Skinner Burgers; Old family recipe!`); break;
                case 'grilled': console.log(`# Y-- You know th-- One thing I sh-- 'Scuse me for one second...`); break;
                default: console.log(`# Yes.`);
            }
        } else console.log(`# No.`);
    }

    function disguiseFood(forgery) {return forgery.scheme();}

    function beginEating(sense){
        switch (sense) {
            case 'familiar taste': confrontation('source'); break;
            default: console.log(`Don't taste like nothin`); break;
        }
    }

    function wrapItUp(){
        if (!guest.confrontational) console.log(`# Well, that was wonderful. Good time was had by all, I'm pooped.`)
        if (meal.oven.on && meal.oven.hasSmokePouringOut) houseOnFire = true;
        guest.readyToLeave = true;
        guest.confrontational = true;
    }

    let NorthernLights = new Promise(function(resolve, reject) {
        confrontation('wtf'); simplyLie('wtf');
        confrontation('lights'); simplyLie();
        if (guest.curious && !guest.confrontational) confrontation('see');
        if (guest.beginningToTire) resolve(simplyLie());
        else reject(Error("> You're fired"));        
    })

    if (houseOnFire) console.log(`% ${host.name}! The house is on fire!`);
    host.honest = false;
    simplyLie('fire');
    guest.satisfied = true;
    guest.farewell = function(){if (guest.satisfied) console.log(`> Well, ${host.name}, you are an odd fellow, but I must say - you steam a good ham.`)};
    guest.farewell();
    houseOnFire? console.log('% Heeeeelp! HEEEEEEEELP!!!') : null;
}


/** THIS SPACE INTENTIONALLY LEFT BLANK - DO NOT WRITE BELOW THIS LINE
 * 
 * 
 * 
 * 
 OK */