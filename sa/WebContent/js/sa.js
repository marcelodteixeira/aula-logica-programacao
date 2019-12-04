function carregarDados(){
	const pais = 'Brasil';
	document.getElementById('nome_pais').value = pais;			
}

// Construtor Estado

function Estado(nome,pais){
		this.nome = nome;
		this.pais = pais;		
}

// antigo Salvar Estado
// function salvarEstado(){
// //Traz da página o nome do Estado
// let input = document.getElementById('nome_estado');
// // Pegar o valor de dentro de input, ou seja, o que usuário digitou
// let nome = input.value;
// //Traz da Pagina o nome do Pais
// input = document.getElementById('nome_pais');
// let pais = input.value;
// //Usa o construtor Estado para criar o objeto estado
// let estado = new Estado(nome,pais);
// //Salva o objeto no local storage
// let estadoStr = JSON.stringify(estado);
// localStorage.setItem('estado',estadoStr);
// }






function salvarEstado(){
let input = document.getElementById('nome_estado');
let nome = input.value;

input = document.getElementById('nome_pais');
let pais = input.value;

let estado = new Estado(nome,pais);
// Pega um item do local storage
let listEstadoStr = localStorage.getItem('listaEstado');
// Inicializa uma lista vazia
let listEstado=[];
// converte de para JSON a lista dos estados
// que estava no local storage
if(listEstadoStr != null){	
	
	listEstado = JSON.parse(listEstadoStr);	
}

// adiciona um novo estado a lista de estados

listEstado.push(estado);

listEstadoStr = JSON.stringify(listEstado);

localStorage.setItem('listaEstado', listEstadoStr);
}


// contrutor cidade

//function Cidade(nome,estado){
//	this.nome = nome;
//	this.estado = estado;
//	
//}
//
//
//function salvarCidade(){
//	let input = document.getElementById('nome_cidade');
//	let nome = input.value;
//	input = document.getElementById('nome_cidade');
//	let estado = input.value;
//	input = document.getElementById('comboEstado');
//	let cidade = new Cidade (nome,estado);
//	let listCidadeStr = localStorage.getItem('listaCidade');
//	let listCidade=[];
//	listCidade = JSON.parse(listCidadeStr);	
//	listCidade.push(cidade);
//	listCidadeStr = JSON.stringify(listCidade);
//	localStorage.setItem('listaCidade',listCidadestr);
//	}

//function carregarDadosCidade(){	
//	let listaEstadosStr = localStorage.getItem('listaEstado');
//	let listaEstados=[];
//if (listaEstadoStr !=null){
//	ListaEstados = JSON.parse(listaEstadosStr);
//	}
//	let opt;
//	for (let i = 0;i<listaEstados.length;i++){		
//		let opt = document.createElement("option");
//		opt.text = listaEstados[i].nome;
//		opt.value=listaEstados[i].nome;
//	comboEstado.add(opt);
//	}
//}


function carregarDadosCidade(){
	let stringEstado = localStorage.getItem('listaEstado');
	let estadoLista=[];
	estadoLista= JSON.parse(stringEstado);
	if(estadoString != null){
		
		estadoLista = JSON.parse(stringEstado);
		
	}
	
	let opt = 0
	for(let i; i<estadoLista.length;i++){
		
		opt = document.createElement('option');
		opt.text = estadoLista[i].nome;
		opt.value = estadoLista[i].nome;
		ComboEstado.add(opt);
		
	}
	
	
}




	
	

