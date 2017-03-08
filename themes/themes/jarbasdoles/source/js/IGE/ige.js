document.addEventListener("DOMContentLoaded", function () {
  var ige = 'igeespecifica';

  document.querySelector('#igeespecifica').addEventListener('click', function (ev) {
    ige = 'igeespecifica';
    CriaIgE()
  });
  document.querySelector('#igemultiplo').addEventListener('click', function (ev) {
    ige = 'igemultiplo';
    CriaIgE()
  });
  document.querySelector('#perfilAlergicoIge').addEventListener('click', function (ev) {
    ige = 'perfilAlergicoIge';
    CriaIgE()
  });

  CriaIgE();

  function CriaIgE() {
    var table = criarTabela();
    criarHeadTable(table);
    var tabela = document.querySelector('.jarbas_IGE .tabelasIges .tabela');
    tabela.innerHTML = '';
    tabela.appendChild(table);

    function criarHeadTable(table) {
      var thead = createElemente('thead');
      if (ige == 'igeespecifica') {
        var tr = createElemente('tr');

        var thAlergeno = createElemente('th');
        thAlergeno.innerHTML = 'Alérgeno';
        addClass(thAlergeno, 'mdl-data-table__cell--non-numeric');

        var thCodigo = createElemente('th');
        thCodigo.innerHTML = 'Código';
        addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

        var thClasse = createElemente('th');
        thClasse.innerHTML = 'Classe';
        addClass(thClasse, 'mdl-data-table__cell--non-numeric');

        tr.appendChild(thAlergeno);
        tr.appendChild(thCodigo);
        tr.appendChild(thClasse);

        thead.appendChild(tr);
        table.appendChild(thead);

        adicionaConteudoTable(table);
      }
      if (ige == 'igemultiplo') {
        var tr = createElemente('tr');

        var thClasse = createElemente('th');
        thClasse.innerHTML = 'Classe';
        addClass(thClasse, 'mdl-data-table__cell--non-numeric');

        var thCodigo = createElemente('th');
        thCodigo.innerHTML = 'Código';
        addClass(thCodigo, 'mdl-data-table__cell--non-numeric');

        var thComponentes = createElemente('th');
        thComponentes.innerHTML = 'Componentes';
        addClass(thComponentes, 'mdl-data-table__cell--non-numeric');

        tr.appendChild(thClasse);
        tr.appendChild(thCodigo);
        tr.appendChild(thComponentes);

        thead.appendChild(tr);
        table.appendChild(thead);

        adicionaConteudoTable(table);
      }
      if (ige == 'perfilAlergicoIge') {
        var tr = createElemente('tr');

        var thGrupo = createElemente('th');
        thGrupo.innerHTML = 'Grupo';
        addClass(thGrupo, 'mdl-data-table__cell--non-numeric');

        var thComponentes = createElemente('th');
        thComponentes.innerHTML = 'Componentes';
        addClass(thComponentes, 'mdl-data-table__cell--non-numeric');

        tr.appendChild(thGrupo);
        tr.appendChild(thComponentes);

        thead.appendChild(tr);
        table.appendChild(thead);

        adicionaConteudoTable(table);
      }
    }

    function adicionaConteudoTable() {
      var tbody = createElemente('tbody');
      if (ige == 'igeespecifica') {
        IGEEspecifica.forEach(function (ige) {
          var tr = createElemente('tr');

          var tdAlergeno = createElemente('td');
          tdAlergeno.innerHTML = ige.alergeno;
          addClass(tdAlergeno, 'mdl-data-table__cell--non-numeric');

          var tdCodigo = createElemente('td');
          tdCodigo.innerHTML = ige.codigo;
          addClass(tdCodigo, 'mdl-data-table__cell--non-numeric');

          var tdClasse = createElemente('td');
          tdClasse.innerHTML = ige.classe;
          addClass(tdClasse, 'mdl-data-table__cell--non-numeric');

          tr.appendChild(tdAlergeno);
          tr.appendChild(tdCodigo);
          tr.appendChild(tdClasse);

          tbody.appendChild(tr);
        });
      }
      if (ige == 'igemultiplo') {
        IGEMultiplo.forEach(function (ige) {
          var tr = createElemente('tr');

          var tdAlergeno = createElemente('td');
          tdAlergeno.innerHTML = ige.classe;
          addClass(tdAlergeno, 'mdl-data-table__cell--non-numeric');

          var tdCodigo = createElemente('td');
          tdCodigo.innerHTML = ige.codigo;
          addClass(tdCodigo, 'mdl-data-table__cell--non-numeric');

          var tdClasse = createElemente('td');
          tdClasse.innerHTML = ige.componentes;
          addClass(tdClasse, 'mdl-data-table__cell--non-numeric');

          tr.appendChild(tdAlergeno);
          tr.appendChild(tdCodigo);
          tr.appendChild(tdClasse);

          tbody.appendChild(tr);
        });
      }
      if (ige == 'perfilAlergicoIge') {
        IGEPerfilAlergico.forEach(function (ige) {
          var tr = createElemente('tr');

          var tdGrupo = createElemente('td');
          tdGrupo.innerHTML = ige.grupo;
          addClass(tdGrupo, 'mdl-data-table__cell--non-numeric');

          var tdComponentes = createElemente('td');
          tdComponentes.innerHTML = ige.componentes;
          addClass(tdComponentes, 'mdl-data-table__cell--non-numeric');

          tr.appendChild(tdGrupo);
          tr.appendChild(tdComponentes);

          tbody.appendChild(tr);
        });
      }
      table.appendChild(tbody);
    }

    function criarTabela() {
      var table = createElemente("table");
      addClass(table, 'mdl-data-table');
      addClass(table, 'mdl-js-data-table');
      return table;
    }
  }
});

function createElemente(name) {
  return document.createElement(name);
}
