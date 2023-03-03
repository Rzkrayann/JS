'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
    //defineHeading1();
    //defineHeading2();
    //defineHeading3();
    defineHeading4();
    swapInnerHTML();
    dateAlter();
    decompteDate();
    window.setInterval(updateClock1,1000);
    window.setInterval(function() {
      let timeString = getTime();
      let timeImages = graphicClock(timeString);
    }, 1000);
    validateInput();
    menuD();
    //updateClock2();
	// Your JavaScript code goes here !
}

function defineHeading1(){
    let titleT = document.getElementById("titleT").innerHTML;
    document.querySelector("title").innerHTML = titleT;
}

function defineHeading2(){
    let titleT2 = document.querySelectorAll("h2");
    document.querySelector("title").innerHTML = titleT2[1].innerHTML;
}

function defineHeading3(){
    let titleT2 = document.querySelectorAll("h2");
    if (titleT2.length != 0){
        document.querySelector("title").innerHTML = titleT2[1].innerHTML;
        
    }
    else{
        document.querySelector("title").innerHTML = "Rayan El Armouzi";
        
    }
    
    
}

function defineHeading4(){
    let titleT2 = document.getElementsByClassName("firstOrLast");
    if (titleT2.length !=0){
        switch (titleT2.length % 2){
            case 0:
                document.querySelector("title").innerHTML = titleT2[0].innerHTML;
                break;
            default:
                document.querySelector("title").innerHTML = titleT2[titleT2.length-1].innerHTML;
                break;
        }
    }
    else{
        document.querySelector("title").innerHTML = "El Armouzi Rayan";
    }

}

function swapInnerHTML(){
    let p = document.querySelectorAll("p");
    let temp = p[0].innerHTML;
    p[0].innerHTML = p[1].innerHTML;
    p[1].innerHTML = temp;
}

function dateAlter(){
    let date = new Date();
    date = date.toLocaleString('fr-FR',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    });
    
    let author = document.querySelectorAll('meta[name="author"]');
    let div = document.getElementById("update-date");
    let p = document.createElement('p');
    p.textContent = "Dernière modification : le "+date+" par "+author[author.length-1].content;
    div.append(p);
}

function decompteDate(){
    let p = document.getElementById('dcp');
    p.addEventListener("click",modifX);
}

function modifX(){
    let j = document.getElementById('nbJ');
    let y = document.getElementById('year');
    let actu = new Date();
    let annee = actu.getFullYear();
    let jlt = new Date("19 Jully, " + 2023);
    let intervalle = jlt.getTime() - actu.getTime();
    intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));
    
    j.textContent = intervalle;
    y.textContent = annee;
}

function updateClock1(){
    let date = new Date();
    let p = document.getElementById('clock');
    p.textContent = date.getHours()+":"+ date.getMinutes() +":"+ date.getSeconds() ;
}

function updateClock2(){
    let date = new Date();
    let p = document.getElementById('clock');
    p.textContent = date.getHours()+":"+ date.getMinutes() +":"+ date.getSeconds() ;
    window.setTimeout(updateClock2,1000);
}



function getTime() {
      let now = new Date();
      let hours = now.getHours().toString().padStart(2, '0');
      let minutes = now.getMinutes().toString().padStart(2, '0');
      let seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    }

    function graphicClock(timeString) {
      let imageFolder = 'assets/images/';
      let imageNames = ['0.gif', '1.gif', '2.gif', '3.gif', '4.gif', '5.gif', '6.gif', '7.gif', '8.gif', '9.gif'];
      let result = '';
      for (let i = 0; i < timeString.length; i++) {
        let char = timeString.charAt(i);
        if (char === ':') {
          result += ':';
        } else {
          let digit = parseInt(char);
          result += '<img src="' + imageFolder + imageNames[digit] + '">';
        }
      }
     document.getElementById('graphic-clock').innerHTML = result;

    }

function validateInput(){
    let valuee = document.getElementById('input');
    valuee.addEventListener('input',(event)=>{
        if (valuee.value.length == 0){
            valuee.style.backgroundColor='white';
        }
        else if (!isNaN(valuee.value)){
            valuee.style.backgroundColor='green';
        }  
        else if (isNaN(valuee.value)){
            valuee.style.backgroundColor='red';
        }
        
        
    });
}

function menuD(){
    let bt1 = document.getElementById('IG');
    let bt2 = document.getElementById('IGD');
    let img1 = document.getElementById("img1");
    img1.innerHTML = "<img src='./assets/images/plus.gif'>";
    let verif = false;
    
    let bt3 = document.getElementById('IG2');
    let bt4 = document.getElementById('IGD2');
    let img2 = document.getElementById("img2");
    img2.innerHTML = "<img src='./assets/images/plus.gif'>";
    let verif2 = false;
    
    let bt5 = document.getElementById('IG3');
    let bt6 = document.getElementById('IGD3');
    let img3 = document.getElementById("img3");
    img3.innerHTML = "<img src='./assets/images/plus.gif'>";
    let verif3 = false;
    
    bt1.addEventListener("click", (event)=>{
        if(verif){
            verif = false;
            img1.innerHTML = "<img src='./assets/images/plus.gif'>";
            bt2.style.display= "none";
        }
        else{
            verif = true;
            img1.innerHTML = "<img src='./assets/images/minus.gif'>";
            bt2.style.display= "block";
        }
        
    });
    
    bt3.addEventListener("click", (event)=>{
        if(verif2){
            verif2 = false;
            img2.innerHTML = "<img src='./assets/images/plus.gif'>";
            bt4.style.display= "none";
        }
        else{
            verif2 = true;
            img2.innerHTML = "<img src='./assets/images/minus.gif'>";
            bt4.style.display= "block";
        }
        
    });
    
    bt5.addEventListener("click", (event)=>{
        if(verif3){
            verif3 = false;
            img3.innerHTML = "<img src='./assets/images/plus.gif'>";
            bt6.style.display= "none";
        }
        else{
            verif3 = true;
            img3.innerHTML = "<img src='./assets/images/minus.gif'>";
            bt6.style.display= "block";
        }
        
    });
   
    
}

    


        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
