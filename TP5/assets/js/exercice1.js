$(document).ready(function () {
    $('form').submit(function (event) {
        // Empêcher l'envoi du formulaire classique
        event.preventDefault();
        // Récupérer les champs du formulaire
        var $username = $('#username').val();
        var $password = $('input[type="password"]').val();
        console.log($username)
        console.log($password)
            // Envoyer une requête ajax en POST avec les deux champs soumis vers l'URL du formulaire
        $.ajax({
            url: $(this).attr('action')
            , type: 'POST'
            , data: {
                'username': $username
                , 'password': $password
            }
            , dataType: 'json'
            , success: function (response) {
                // Le traitement a réussi
                if (response.success == true){
                    $('form').hide();
                    suc = document.createElement('p');
                    suc.setAttribute("class","success")
                    suc.textContent="SUCCESS";
                    document.body.appendChild(suc);
                }
                else{
                    err = document.createElement('p');
                    err.textContent="ERROR";
                    err.setAttribute("class","error")
                    $('form').prepend(err);
                }
                console.log(response.success);

            }
            , error: function (xhr, status, error) {
                // Le traitement a échoué
                console.log(error);
            }
        });
    });
    // Ajouter un événement de saisie sur chaque champ
  $('#username, input[type="password"]').on('input', function() {
    // Enlever la couleur rouge des bords du champ si au moins une lettre est saisie
    if ($(this).val().length > 0) {
      $(this).removeClass('inputerr');
    }

    // Remettre la couleur rouge des bords du champ si le champ est vide à nouveau
    else {
      $(this).addClass('inputerr');
    }

    // Mettre les bords en rouge si le nombre de caractères saisis est > à 255
    if ($(this).val().length > 255) {
      $(this).addClass('inputerr');
    }
  });
    
});