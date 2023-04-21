1.1
Création	d’un	objet	littéral

    c. Créér un objet x égal à personne, que se passe-t-il lorsque les champs de x sont modifiés. Que
    signifie ceci pour x ?
    
    Lorsque nous créons l'objet x égal à personne (const x = personne), x pointe vers la même référence en mémoire que personne. Cela signifie que si nous modifions les propriétés de personne, ces changements seront également reflétés dans x et vice versa.


2.1

     c. La différence entre les deux champs est que get fullName() est une propriété avec un getter tandis que fullName : function () { .. } est une méthode de l'objet personne.