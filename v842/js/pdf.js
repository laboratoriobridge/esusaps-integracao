var $checkboxes = $('.pdf-select input[type=checkbox]');

$(document).ready(function() {
  // Aplicamos o filtro de checkboxes caso venha de uma URL: pdf.html?include={id}
  var search = window.location.search;
  var include = search.split('include')[1];

  if (include !== undefined) {
    include = include.split('=')[1];
    hideAll();
    checkByUrl(include);
  }
});

/**
 * Mostra/esconde as páginas correspondentes ao clicar nos checkboxes
 */
$checkboxes.on('change', function(e) {
  var checkbox = e.target;
  var id = checkbox.value;
  var checked = checkbox.checked;

  // Não utilizamos o seletor '#' pois IDs podem ter caracteres especiais
  // Exemplo: RF-REC.recebimento_por_lote
  var seletor = '[id="'+id+'"], [id="summary-'+id+'"]';

  $(seletor)
    .toggleClass('shown', checked)
    .toggleClass('hidden', !checked);
});

/**
 * Desmarca todos os checkboxes e esconde todas as páginas.
 */
function hideAll() {
  $checkboxes
    .prop('checked', false)
    .trigger('change');
}

/**
 * Marca/Desmarca o checkbox do item com id especificado e todos os seus
 * filhos, mostrando ou escondendo as páginas correspondentes
 */
function checkById(id, check) {
  if (check === undefined) {
    check = true;
  }

  $('#item-' + id).find('input[type=checkbox]')
    .prop('checked', check)
    .trigger('change');
}

/**
 * Marca o checkbox do item com url especificado e todos os seus filhos,
 * mostrando as páginas correspondentes
 */
function checkByUrl(url) {
  $('.pdf-select [data-url="' + url + '"]').find('input[type=checkbox]')
    .prop('checked', true)
    .trigger('change');
}

var monthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

/**
 * Gera o PDF conforme regras definidas na página.
 */
function generate() {
  var titulo = $('#input-titulo-documento').val();
  if (titulo.length !== 0) {
    $('.capa').addClass('visible-print');
    $('#target-titulo-documento').html(titulo);

    var now = new Date();
    var day = now.getDate();
    var monthIndex = now.getMonth();
    var year = now.getFullYear();
    $('#target-date-documento').html(day + ' de ' + monthNames[monthIndex] + ' de ' + year);
  }

  var host = window.location.hostname;
  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    window.print();
  } else {
    var html = $('html').clone();
    html.find('head').append('<base href="'+window.location+'">');

    $('#pdf-form input').val(html.html());
    $('#pdf-form').submit();
  }
}
// checkbox que gera um sumário a página de impressão, com contagem de páginas
$(document).ready(function () {
    var ckbox = $('#chkbx');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            $('#summary').show();
        } else {
            $('#summary').hide();
        }
    });
});
