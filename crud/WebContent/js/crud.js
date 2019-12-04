// crudClientes é um objeto que representa toda a aplicação de CRUD
var crudClientes = new function() {

	// Exemplo de JSON com objetos. 
	// TODO Carregar do Local Storage. Modelo usando ID.
	// TODO Separar os dados da cidade e do estado
	this.tabelaClientes = [ {
		ID : '1',
		nome : 'Jorge da Silva',
		cidade : 'Florianopolis - SC',
		telefone : '48 99171-9876'
	}, {
		ID : '2',
		nome : 'Maria Pereira',
		cidade : 'Sao Jose - SC',
		telefone : '48 99878-5566'
	}, {
		ID : '3',
		nome : 'Guga Kuerten',
		cidade : 'Florianopolis - SC',
		telefone : '48 99454-0987'
	} ]

	this.cidade = [ 'Florianopolis - SC', 'Sao Jose - SC', 'Palhoça - SC' ];

	// Array de colunas da tabela
	this.col = [];

	// Função de criação da tabela dinâmica do CRUD
	this.criarTabela = function() {

		// Extrair a chave do atributo do objeto JSON Para ser o cabeçalho da
		// tabela. Pode ser com valores fixos.
		for (var i = 0; i < this.tabelaClientes.length; i++) {
			// Exemplo de for-in
			for ( var key in this.tabelaClientes[i]) {
				if (this.col.indexOf(key) === -1) {
					this.col.push(key);
				}
			}
		}

		// Criando a tabela.
		var table = document.createElement('table');
		table.setAttribute('id', 'tabelaClientes'); 

		var tr = table.insertRow(-1); // criando a linha do cabeçalho.

		for (var h = 0; h < this.col.length; h++) {
			// Adicionando o cabeçalho
			var th = document.createElement('th');
			th.innerHTML = this.col[h].replace('_', ' ');
			tr.appendChild(th);
		}

		// Adicionando as linhas usando o aray de tabelaClientes em JSON.
		for (var i = 0; i < this.tabelaClientes.length; i++) {

			tr = table.insertRow(-1); // Criando uma nova linha.

			for (var j = 0; j < this.col.length; j++) {
				var tabCell = tr.insertCell(-1);
				tabCell.innerHTML = this.tabelaClientes[i][this.col[j]];
			}

			// Criando e adicionando dinamicamente os elementos às células da
			// tabela com eventos

			this.td = document.createElement('td');

			// *** Opção Cancelar.
			tr.appendChild(this.td);
			
			var lblCancelar = document.createElement('label');
			lblCancelar.innerHTML = '✖';
			lblCancelar.setAttribute('onclick', 'crudClientes.cancelar(this)'); // Evento
																				// onlcick
			lblCancelar.setAttribute('style', 'display:none;');
			lblCancelar.setAttribute('title', 'Cancelar');
			lblCancelar.setAttribute('id', 'lbl' + i);
			this.td.appendChild(lblCancelar);

			// *** Opção Salvar
			tr.appendChild(this.td);
			var btnSalvar = document.createElement('input');

			btnSalvar.setAttribute('type', 'button');
			btnSalvar.setAttribute('value', 'Salvar');
			// Definindo ID do botão oculto
			btnSalvar.setAttribute('id', 'Salvar' + i);
			btnSalvar.setAttribute('style', 'display:none;');
			btnSalvar.setAttribute('onclick', 'crudClientes.salvar(this)'); // Evento
																			// onclick
			this.td.appendChild(btnSalvar);

			// *** Opção Editar.
			tr.appendChild(this.td);
			var btnEditar = document.createElement('input');

			btnEditar.setAttribute('type', 'button');
			btnEditar.setAttribute('value', 'Editar');
			btnEditar.setAttribute('id', 'Editar' + i);
			btnEditar.setAttribute('style', 'background-color:#44CCEB;');
			btnEditar.setAttribute('onclick', 'crudClientes.editar(this)'); // Evento
																			// onclick.
			this.td.appendChild(btnEditar);

			// *** Opção Excluir.
			this.td = document.createElement('th');
			tr.appendChild(this.td);
			var btnExcluir = document.createElement('input');
			btnExcluir.setAttribute('type', 'button');
			btnExcluir.setAttribute('value', 'Excluir'); // TODO pedir
															// confirmação
															// alert no futuro
			btnExcluir.setAttribute('style', 'background-color:#ED5650;');
			btnExcluir.setAttribute('onclick', 'crudClientes.excluir(this)'); // Evento
																				// onclick
			this.td.appendChild(btnExcluir);
		}

		var div = document.getElementById('container');
		div.innerHTML = '';
		div.appendChild(table); // adicionando a tabela à página.
	};

	// ****** Início das funções do CRUD.

	// Função Cancelar
	this.cancelar = function(btnAcao) {

		// Ocultar o botão
		btnAcao.setAttribute('style', 'display:none; float:none;');

		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;

		// Ocultar o botão Salvar
		var btnSalvar = document.getElementById('Salvar' + (linhaAtiva - 1));
		btnSalvar.setAttribute('style', 'display:none;');

		// Mostrar botão Editar novamente
		var btnEditar = document.getElementById('Editar' + (linhaAtiva - 1));
		btnEditar.setAttribute('style',
				'display:block; margin:0 auto; background-color:#44CCEB;');

		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];

		for (i = 0; i < this.col.length; i++) {
			var td = tab.getElementsByTagName("td")[i];
			td.innerHTML = this.tabelaClientes[(linhaAtiva - 1)][this.col[i]];
		}
	}

	// Função Editar.
	this.editar = function(btnAcao) {
		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];

		// Mostrar select com cidades e estados
		// TODO Separar os dados da cidade e do estado
		for (i = 1; i < 4; i++) {
			if (i == 2) {
				var td = tab.getElementsByTagName("td")[i];
				var ele = document.createElement('select'); // incluir select.
				ele.innerHTML = '<option value="' + td.innerText + '">'
						+ td.innerText + '</option>';
				for (k = 0; k < this.cidade.length; k++) {
					ele.innerHTML = ele.innerHTML + '<option value="'
							+ this.cidade[k] + '">' + this.cidade[k]
							+ '</option>';
				}
				td.innerText = '';
				td.appendChild(ele);
			} else {
				var td = tab.getElementsByTagName("td")[i];
				var ele = document.createElement('input');
				ele.setAttribute('type', 'text');
				ele.setAttribute('value', td.innerText);
				td.innerText = '';
				td.appendChild(ele);
			}
		}

		var lblCancelar = document.getElementById('lbl' + (linhaAtiva - 1));
		lblCancelar
				.setAttribute('style',
						'cursor:pointer; display:block; width:20px; float:left; position: absolute;');

		var btnSalvar = document.getElementById('Salvar' + (linhaAtiva - 1));
		btnSalvar
				.setAttribute('style',
						'display:block; margin-left:30px; float:left; background-color:#2DBF64;');

		// Ocultar botão oculto
		btnAcao.setAttribute('style', 'display:none;');
	};

	// Função Excluir
	this.excluir = function(btnAcao) {
		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
		this.tabelaClientes.splice((linhaAtiva - 1), 1); // Exclui a linha
															// atual - TODO
															// pedir confirmação
		this.criarTabela(); // Recria a tabela
		// TODO após excluir regravar o array JSON no local storage
	};

	// Função Salvar
	this.salvar = function(btnAcao) {
		var linhaAtiva = btnAcao.parentNode.parentNode.rowIndex;
		var tab = document.getElementById('tabelaClientes').rows[linhaAtiva];

		// Atualizar o array tabelaClientes
		for (i = 1; i < this.col.length; i++) {
			var td = tab.getElementsByTagName("td")[i];
			if (td.childNodes[0].getAttribute('type') == 'text'
					|| td.childNodes[0].tagName == 'SELECT') { // verifica se o
																// elemento é um
																// select ou um
																// input
				this.tabelaClientes[(linhaAtiva - 1)][this.col[i]] = td.childNodes[0].value; // Salva
																								// o
																								// valor
			}
		}
		// TODO após salvar regravar o array JSON no local storage
		this.criarTabela(); // Recria a tabela
	}

	// ****** Fim das funções do CRUD
}

crudClientes.criarTabela();