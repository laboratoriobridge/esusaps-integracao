---
layout: null
---
(function() {  
  // Inicializando o lunr com os campos em que irá pesquisar.
  var idx = lunr(function () {
    this.field('id');
    // um boost de 10 para indicar que os matches neste campo são mais importantes.
    this.field('title', { boost: 10 });   
    this.field('content');

    for (var key in SEARCH_DOCS) { // Adciona dados ao lunr
      this.add({
        'id': key,
        'title': SEARCH_DOCS[key].title,   
        'content': SEARCH_DOCS[key].content
      });
    }
  });

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    var results = idx.search(searchTerm); // Obtém o Lunr para realizar uma pesquisa
    displaySearchResults(results, SEARCH_DOCS); // Isso é escrito na primeira seção
  }

  /*
    Exibição dos resultados
  */
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('resultados');

    if (results.length) { // Existem alguns resultados?
      searchResults.innerHTML = '<h5 class="label label-primary"> A pesquisa retornou <b>' + results.length + '</b> resultado(s) </h5>';
      var appendString = '';
      for (var i = 0; i < results.length; i++) {  // Iterando sobre os resultados
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML += appendString;
    } else {
      searchResults.innerHTML += '<div align="center"><img src="{{ site.baseurl }}/img/searchNoResults.png"></div>';
    }
  }

  /*
    Obtendo o termo de pesquisa

    Vamos adicionar uma função getParameterByName  para fazer a leitura dos parâmetros GET
    Basicamente manipular a seqüência de consulta para dividi-la em variáveis.

    É usado o  getParameterByName para obter o termo de pesquisa:
  */
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  // Função para a cada palavra digitada no campo de pesquisa fazer uma iteração sobre o json e trazer resultados
  $('#quick-search').keydown(function() {    
    var searchTerm = $(this).val();
    var results = idx.search(searchTerm);

    var appendString = ''
    for (var i = 0; i < results.length && i < 10; i++) {  // Iterate over the results
      var ref = results[i].ref
      var item = SEARCH_DOCS[ref]
      appendString += '<li><a href="' + item.url + '">' + item.title + '</a></li>';
    }
    $('#search-results').html(appendString)
  })
})();

/*
  Funções para executar um bloqueio de carregamento enquanto as pesquisar não foram carregadas na tela
*/
function hide(elemento) {
    var elem = document.getElementById(elemento)
    if (elem) {
      elem.style.display = 'none'; //esconde a página até que seja carregada
    }
}

window.onload = function () {
    var elem = document.getElementById('resultados')
    if (elem) {
      elem.style.display = 'block';
    }
    hide('loading');
}
