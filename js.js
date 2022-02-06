let numberOnScreen = 0;
let sign = "";
let firstArr = [];
let cache = 0;
let test = 0;

function zero (){
    firstArr.push(0);
    display();
    max ();
}
function one (){
    firstArr.push(1);
    display();
    max ();
}
function two (){
    firstArr.push(2);
    display();
    max ();
}
function three (){
    firstArr.push(3);
    display();
    max ();
}
function four (){
    firstArr.push(4);
    display();
    max ();
}
function five (){
    firstArr.push(5);
    display();
    max ();
}
function six (){
    firstArr.push(6);
    display();
    max ();
}
function seven (){
    firstArr.push(7);
    display();
    max ();
}
function eight (){
    firstArr.push(8);
    display();
}
function nine (){
    firstArr.push(9);
    display();
    max ();
}

function display (){
    let screenP = document.getElementById("screen");
    screenP.textContent = firstArr.join("");
    }

function max () {
    if (firstArr.length >= 11){
        let maxMessage = document.getElementById("screen");
        maxMessage.textContent = "no bueno";
    }
}


function sum(){
    test = cache + parseInt(firstArr.join(""))
    cache = parseInt(firstArr.join(""));
    
    firstArr = [];
    sign = "+";

}

function minus (){
    cache = parseInt(firstArr.join(""));
    firstArr = [];
    sign = "-";
}






function equals (){
    if (sign == "+"){
    let mezisoucet = cache + parseInt(firstArr.join(""));
    let displaySum = document.getElementById("screen");
    mezisoucet >= 9999999999? displaySum.textContent = "no bueno" : displaySum.textContent = mezisoucet;
    cache = mezisoucet;
    }
    else if (sign == "-"){
        let mezisoucet = cache - parseInt(firstArr.join(""));
        let displaySum = document.getElementById("screen");
        mezisoucet >= 9999999999? displaySum.textContent = "no bueno" : displaySum.textContent = mezisoucet;
    }




}