/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
    
	window.addEventListener("click", select2);
    createDiv();
    traiter("ornare");
    
    

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
var cpt = 0;


function initSelect(e){
  e.target.style.backgroundColor='green';
}



function select(e){
    if (e.target.style.backgroundColor === 'green'){
        e.target.style.backgroundColor = '';
    }
    else{
        initSelect(e);
    }
}


function select2(e){
    if(e.target.id != document.getElementById('insert-div').id && e.target.id != document.getElementById('insert-type').id &&  e.target.id != document.getElementById('insert-text').id ){
        console.log("cc");
    
    if (cpt === 0){
        e.target.style.backgroundColor='blue';
        console.log(cpt);
        if(e.target.tagName.toLowerCase() !="html"){
            insertElementTarget(e.target);
        }
        
        cpt++;
    }
   
    else{
        cpt = 0;
        var allElements = document.querySelectorAll("*");
        for (var i = 0; i < allElements.length; i++) {
            allElements[i].style.backgroundColor = '';
        }
        e.target.style.backgroundColor='blue';
        if(e.target.tagName.toLowerCase() !="html"){
            insertElementTarget(e.target);
        }
        cpt++;
    }
}
    
}

function createDiv(){
    let div = document.createElement('div');
    div.setAttribute('id','insert-div');
    
    let select = document.createElement('select');
    select.setAttribute('id','insert-type');
    select.setAttribute('name','type');
    
    let optionDiv = document.createElement('option');
    optionDiv.setAttribute('value','div');
    optionDiv.textContent='div';
    select.appendChild(optionDiv);
    
    let optionP = document.createElement('option');
    optionP.setAttribute('value','p');
    optionP.textContent='p';
    select.appendChild(optionP);
    
    let optionSpan = document.createElement('option');
    optionSpan.setAttribute('value','span');
    optionSpan.textContent='span';
    select.appendChild(optionSpan);
    
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('id','insert-text');
    input.setAttribute('value','My New Text Element');
    
    div.appendChild(select);
    div.appendChild(input);
    
    let h1 = document.getElementById("title");
    document.body.insertBefore(div,h1);
}

function insertElementTarget(target){
    let type = document.getElementById('insert-type').value;
    let txt = document.getElementById('insert-text').value
    let element = document.createElement(type);
    element.setAttribute('value',type);
    element.textContent=txt;
    target.parentNode.insertBefore(element,target);
}

  function traiter(mot){
    var leTexte = document.getElementById("auCentre").innerHTML;
    var termes = mot;

    leTexte = leTexte.split("<span style=\"color:red; background-color:yellow;\">").join("");
    leTexte = leTexte.split("</span>").join("");

    if(termes!="")
    {
        var expReg = new RegExp(termes, "ig");
        var formeRplcmt = "<span style='color:red; background-color:yellow;'>" + termes +"</span>";

        leTexte = leTexte.replace(expReg, formeRplcmt);
        document.getElementById("auCentre").innerHTML = leTexte;
    }
}
  
  















