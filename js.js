let pieniadze = 0;
let drewno = 0;
let marmur = 0;
let mieso = 0;

let pieniadzens = 10;
let drewnons = 5;
let marmuns = 1;
let miesons = 3;

function dodajsurowce(){
    dodajpieniadze();
    dodajdrewno();
    dodajmarmur();
    dodajmienso();
    setTimeout(dodajsurowce, 1000);
}

function dodajpieniadze(){

   pieniadze += pieniadzens;
   document.getElementById("hajs").innerHTML = "Pieniadze: " + pieniadze;
}


function dodajdrewno(){
    
    drewno += drewnons;
    document.getElementById("drewno").innerHTML = "Drewno: " + drewno;
}


function dodajmarmur(){
    
    marmur += marmuns;
    document.getElementById("kamien").innerHTML = "Marmur: " + marmur;
}


function dodajmienso(){
    
    mieso += miesons;
    document.getElementById("miesko").innerHTML = "Mięso: " + mieso;
    
}

function wies(){

    if(pieniadze >= 50 && drewno >= 20)
    {
    pieniadze = pieniadze - 50;
    drewno = drewno - 20;

    pieniadzens += 5;
    drewnons += 2;

    document.getElementById("hajs").innerHTML = "Pieniadze: " + pieniadze;
    document.getElementById("drewno").innerHTML = "Drewno: " + drewno;
    }
}