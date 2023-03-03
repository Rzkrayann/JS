# M413 - TD1 : Réponses aux Questions

6.1)

Quel sera l’évènement qui déclenchera l’appelle de votre fonction ? 
 Notre fontion est appellé dans la fonction "OnLoad()" qui s'éxécute au chargement de la page.

Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ? 
 let titleT = document.getElementById("titleT");

Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer 
le texte de celui-ci ? 
 innerHTML;

Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première 
 balise <h2> ?
 let titleT2 = document.querySelector("h2").innerHTML;

Comment faire pour connaitre le nombre de balise <h2> du document ?
 let titleT2 = document.querySelectorAll("h2");
 console.log(titleT2.lenght);
 
Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?
 let titleT2 = document.getElementsByClassName("firstOrLast");
 
Comment avez-vous déterminé si un nombre est pair ?
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
    
    
6.2)

Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?
    - textContents est tout le texte contenu par un élément et tous ses enfants qui sont uniquement à des fins de formatage.
    - innerText renvoie tout le texte contenu par un élément et tous ses éléments enfants.
    - innerHtml renvoie tout le texte, y compris les balises html, contenu dans un élément.
    
    
6.3)

 Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?
    +author[0].content; //Premier element
 Même question avec le dernier auteur de la liste.
    +author[author.length-1].content; //Dernier element
    
7)

 Comment obtenez-vous le nombre de jours ?
    
    let actu = new Date();
    let annee = actu.getFullYear();
    let jlt = new Date("19 Jully, " + 2023);
    let intervalle = jlt.getTime() - actu.getTime();
    
 Comment faites-vous la mise à jour du texte ?
 
    En modifiant le texte des balises grace au TextContent /
    
    let j = document.getElementById('nbJ');
    let y = document.getElementById('year');
    j.textContent = intervalle;
    y.textContent = annee;
    
7.1)

 Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?
    J'ai utilisé la fonction setInterval(), elle est plus pratique que le settimeout() et s'actualise automatiquement.
    
8.1)

 Quel évènement avez-vous utilisé ?
 valuee etant mon input HTML, j'ai utilisé un addEventListener 'input'
    valuee.addEventListener('input',(event)=>{};
    
 Comment avez-vous fait changer la couleur du champ texte ?
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
