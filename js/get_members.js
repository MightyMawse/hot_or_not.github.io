function getmembers(){
    var allNames = [ "aleece hunt.png","amaya scard.png","amy.png",
    "angel de los angeles.png","april parnaby.png","asha hynes.png",
    "ashley gray.png","ayla fing.png","aylodog.png",
    "bailee pedlow.png","bodhi brambleby.png","cashlin townsend.png",
    "charlotte foster.png","diya sidhu.png","elizabeth warne.png",
    "ella charman.png","ella rainford.png","ella spratt.png",
    "elyce kuhnell.png","emma farrelly.png","felicity noble.png",
    "frida kolominskas.png","georgia lollback.png","grace acret.png",
    "grace kelly.png","hallie nash.png","hannah davis.png",
    "hollie arthur.png","indie.png","isabella anderson.png",
    "isobel gresham.png","jamie cotelli.png","jasmine arnold.png",
    "jayda mcdermott.png","jorja evans.PNG","katie mcdonald.png",
    "kelsey wyborn.png","kiana mcabe.png","kirra johnson.png",
    "kirrily leach.png","kloe mills.png","lara ewing.png",
    "layla marr.png","lily darby.png","lily robinson.png","lily van.png",
    "lucia alexandra.png","lucy foster.png","mackenzie lyndon.png",
    "mahli johnson.png","matilda mctaggart.png","maya.png",
    "mia page.png","milla pearson.png","mischa zabala.png",
    "morgan.png","olivia glazebrook.png","paige rochford.png",
    "pan.png","phoebe.png","rihannon nolan.png",
    "rosie davis.png","ruby cummins.png","ruby van.png",
    "rui hoggard.png","sadie glynn.png","sasha hendrikse.png",
    "scarlett.png","shana kussrow.png","sierra mudgeway freeman.png",
    "sohpie bucanan.png","sunny hewett.png","tabitha stratton.png",
    "tobe.png","zara cranage.png",
    ];

    // Believe me, i didnt want to do it this way!

    var rndIndex = Math.floor(Math.random() * allNames.length);
    var rndImg1 = allNames[rndIndex];
    var rndImg2 = allNames[rndIndex];

    while(rndImg1 == rndImg2){
        rndImg2 = allNames[Math.floor(Math.random() * allNames.length)];
    }

    document.getElementById("img1").setAttribute("src", "../res/" + rndImg1);
    document.getElementById("img2").setAttribute("src", "../res/" + rndImg2);

    // remove file extension
    var rndImages = [rndImg1, rndImg2];
    for(let i = 0; i < 2; i++){
        var processedName = "";
        for(let j = 0; j < rndImages[i].length; j++){
            if(rndImages[i][j] == '.'){
                rndImages[i] = processedName;
                processedName = "";
                break;
            }
            else{
                processedName += rndImages[i][j];
            }
        }
    }

    document.getElementById("name1").innerText = rndImages[0].toUpperCase();
    document.getElementById("name2").innerText = rndImages[1].toUpperCase();
}