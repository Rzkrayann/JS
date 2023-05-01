$(document).ready(function() {
  // Au clic sur le bouton "Regénérer", on recharge les produits
  $('#product-generation').on('click', function() {
    // Pour chaque produit de 1 à 3
    for (var i = 1; i <= 3; i++) {
      // On fait une requête AJAX pour récupérer les données JSON
      $.ajax({
        url: 'https://dummyjson.com/products/' + i,
        type: 'GET',
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function(data) {
          // On crée un élément de produit à partir des données
          var product = $('.product-template').clone().removeClass('product-template');
          product.find('.name .title').text(data.title);
          product.find('.name .brand').text("("+data.brand+")");
          product.find('.img').attr('src', data.thumbnail);
          product.find('.price').text((data.price-(data.discountPercentage*data.price/100)) + "&euro");
          product.find('.old-price').text(data.price + ' €');
          product.find('.stock').text(data.stock);
          // On ajoute l'élément de produit au HTML
          $('body').append(product);
        },
        error: function() {
          console.log('Erreur lors de la récupération des données pour le produit ' + i);
        }
      });
    }
  });
});
