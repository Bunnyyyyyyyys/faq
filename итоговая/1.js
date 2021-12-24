function clickCube(){

    var red=getRandomInt(230);
    var Violet=getRandomInt(230);
    var yellow=getRandomInt(230);
    console.log(red, Violet, yellow);
    document.getElementById("cube").style.backgroundColor="rgb("+ red +","+ Violet +","+ yellow + ")"

    var stringBoxShadow =  "0 0 5px rgba("+ red +","+ Violet +","+ yellow +", 1), " +
    "0 0 25px rgba("+ red +","+ Violet +","+ yellow +", 1), " +
    "0 0 50px rgba("+ red +","+ Violet +","+ yellow +", 1), " +
    "0 0 100px rgba("+ red +","+ Violet +","+ yellow +", .75), " +
    "0 0 200px rgba("+ red +","+ Violet +","+ yellow +", .5), " +
    "0 0 300px rgba("+ red +","+ Violet +","+ yellow +", .25) "

    var boo=getRandomInt(200);
    var boob=getRandomInt(200);

    var storonaOne= boo + "px" ;
    var storonaTwo= boob + "px" ;

    var goop=getRandomInt(225);
    var bloop=getRandomInt(50);

    var rad= bloop + "px";

    document.getElementById("cube").style.border=" 5px solid rgb("+ red +","+ Violet +","+ yellow +")"
    document.getElementById("cube").style.boxShadow=stringBoxShadow;
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.height=storonaOne;
    document.getElementById("cube").style.width=storonaTwo;
    document.getElementById("cube").style.borderRadius=rad;
}

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}