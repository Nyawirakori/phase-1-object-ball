//function called gameObject
console.log(gameObject());
function gameObject(){
//top object with two keys,home & away, which have values
    const obj={
        home:{
            teamName:"Brooklyn Nets",
            colors:["Black", "White"],
            players:{
            "Alan Anderson":{
                number:0,shoe:16,points:22,rebounds:12,assists:12,steals:3,blocks:1,slamDunks:1,
            },
            "Reggie Evans":{
                 number:30,shoe:14,points:12,rebounds:12,assists:12,steals:12,blocks:12,slamDunks:7,
            },
            "Brook Lopez":{
                 number:11,shoe:17,points:17,rebounds:19,assists:10,steals:3,blocks:1,slamDunks:15,
            },
            "Mason Plumlee":{
                 number:1,shoe:19,points:26,rebounds:12,assists:6,steals:3,blocks:8,slamDunks:5,
            },
            "Jason Terry":{
                 number:31,shoe:15,points:19,rebounds:2,assists:2,steals:4,blocks:11,slamDunks:1,
            },
           },
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{
            "Jeff Adrien":{
                number:4,shoe:18,points:10,rebounds:1,assists:1,steals:2,blocks:7,slamDunks:2,
            },
            "Bismak Biyombo":{
                 number:0,shoe:16,points:12,rebounds:4,assists:7,steals:7,blocks:15,slamDunks:10,
            },
            "DeSagna Diop":{
                 number:2,shoe:14,points:24,rebounds:12,assists:12,steals:4,blocks:5,slamDunks:5,
            },
            "Ben Gordon":{
                 number:8,shoe:15,points:33,rebounds:3,assists:2,steals:1,blocks:1,slamDunks:0,
            },
            "Brendan Haywood":{
                 number:33,shoe:15,points:6,rebounds:12,assists:12,steals:22,blocks:5,slamDunks:12,
            },
        },
    },
}
return obj;
}

//points scored function
function numPointsScored(playerName){
    let scored = gameObject();
    for (let team in scored) {
        for (let player in scored[team].players) {
            if (player === playerName) {
                return scored[team].players[player].points;
            }
        }
    }
    return "Player not found";
}
console.log(numPointsScored("Jason Terry"));
console.log(numPointsScored("Brendan Haywood"));

//shoe size function
function shoeSize(playerName){
    let scored = gameObject();
    for (let team in scored) {
        if (scored[team].players[playerName]) {
            return scored[team].players[playerName].shoe;
        }
    }
    return "Player not found";
}
console.log(shoeSize("Jason Terry"));
console.log(shoeSize("Brendan Haywood"));

//colors function
function teamColors(teamName){
    let scored = gameObject();
    for (let team in scored) {
        if (scored[team].teamName === teamName) {
            return scored[team].colors;
        }
    }
    return "Team not found";
}
console.log(teamColors("Brooklyn Nets"));

//team names function
function teamNames(){
    let scored = gameObject();
    return [scored.home.teamName, scored.away.teamName];
}
console.log(teamNames());

//player numbers function

//stats function
function playerStat(playerName){
    let scored = gameObject();
    for (let team in scored) {
        for (let player in scored[team].players) {
            if (player === playerName) {
                return scored[team].players[player];
            }
        }
    }
}

console.log(playerStat("Ben Gordon"));

//shoe function
function bigShoeRebounds(){
    let scored = gameObject();
    let maxShoe = 0;
    let rebounds = 0;
    for (let team in scored) {
        for (let player in scored[team].players) {
            if (scored[team].players[player].shoe > maxShoe) {
                maxShoe = scored[team].players[player].shoe;
                rebounds = scored[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}
console.log(bigShoeRebounds());