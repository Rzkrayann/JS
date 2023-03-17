# M413 - TD2 : Réponses aux Questions

6.1
    ➢ Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
    L'élément le plus haut est "window" et nous lui avons affecté l'évèenment de cette manière :
    window.addEventListener("click", initSelect);
    et la fonction initSelect est la suivante : 
    function initSelect(e){
        e.target.style.backgroundColor='green'
    }
    
    ➢ Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
    currentTarget renverra systématiquement à l'élément auquel l'écouteur d'évènement est rattaché.
    Dans notre cas cela génèrera une erreur car nous avons rattaché l'élément window qui ne peux pas avoir de backgroundcolor.
    Si nous rattachions body, alors peut importe ou nous cliquerions, seul la couleur du body changerait.

6.2

    ➢ Comment avez-vous ajouté l’élément ?
    en faisant appelle à notre fonction d'ajout depuis select2().
    function insertElementTarget(target){
    let type = document.getElementById('insert-type').value;
    let txt = document.getElementById('insert-text').value
    let element = document.createElement(type);
    element.setAttribute('value',type);
    element.textContent=txt;
    target.parentNode.insertBefore(element,target);
}


    ➢ Comment avez-vous fait pour que la fonction select2() ignore les évèments de la <div>
    donnée ci-dessus ?
    en excluant toutes les id des elements de la div.
    if(e.target.id != document.getElementById('insert-div').id && e.target.id != document.getElementById('insert-type').id &&  e.target.id != document.getElementById('insert-text').id )