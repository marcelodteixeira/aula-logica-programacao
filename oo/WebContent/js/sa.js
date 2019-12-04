/*funçoes para tela de estado*/
function carregarPais(){
	const pais = "Brasil";
	document.getElementById("nome_pais").value = pais;
}

//construtor para Estado
function Estado(nome, pais){
	this.nome = nome;
	this.pais = pais;
}

function salvarEstado(){
	let input = document.getElementById("nome_estado");
	let nome = input.value;
	
	input = document.getElementById("nome_pais");
	let pais = input.value;
	
	let estado = new Estado(nome, pais);
	
	let listaEstadosStr = localStorage.getItem("listaEstados");
	let listaEstados = [];
	if(listaEstadosStr != null){
		listaEstados= JSON.parse(listaEstadosStr);
	}
	listaEstados.push(estado);
	
	listaEstadosStr = JSON.stringify(listaEstados);
	
    localStorage.setItem("listaEstados", listaEstadosStr);
    let javascript = AbrirPagina('../html/cidade.html');
}

/*funções para tela de cidades*/

function carregarEstados(){
	let listaEstadosStr = localStorage.getItem("listaEstados");
	let listaEstados = [];
		if (listaEstadosStr != null){
			listaEstados = JSON.parse(listaEstadosStr);
	}
	let comboEstado = document.getElementById("comboEstado");
	let option;
	for(let index = 0; index < listaEstados.length; index++){
		option = document.createElement("option");
		option.text = listaEstados[index].nome;
		option.value = listaEstados[index].nome;
		comboEstado.add(option);
	}
}

function Cidade(nome, estado){
	this.nome = nome;
	this.estado = estado;
}

function salvarCidade(){
	let input = document.getElementById("nome_cidade");
	let nome = input.value;
	
	input = document.getElementById("comboEstado");
	let estado = input.options[input.selectedIndex].value;
	
	let cidade = new Cidade(nome, estado);
	let cidadeStr = JSON.stringify(cidade);
	localStorage.setItem("cidade", cidadeStr);
    let javascript = AbrirPagina('../html/dadosCliente.html');
}


function AbrirPagina(link){
	document.getElementById("form1").action = link;
	document.getElementById("form1").submit();
}

function Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade){
	this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.nome_mae = nome_mae;
	this.rua = rua;
	this.numero = numero;
	this.bairro = bairro;
	this.tel = tel;
	this.cel = cel;
	this.email = email;
	this.estado = estado;
	this.cidade = cidade;
}

function salvarCliente() {
	let input = document.getElementById("nome_cliente");
	let nome = input.value;
	input = document.getElementById("cpf");
    let cpf = input.value;
    input = document.getElementById("nascimento");
    let nascimento = input.value;
    input = document.getElementById("nome_mae");
    let nome_mae = input.value;
	input = document.getElementById("rua");
	let rua = input.value;
	input = document.getElementById("numero");
	let numero = input.value;
	input = document.getElementById("bairro");
	let bairro = input.value;
	input = document.getElementById("tel");
	let tel = input.value;
	input = document.getElementById("cel");
	let cel = input.value;
	input = document.getElementById("email");
	let email = input.value;
	input = document.getElementById("comboEstado");
	let estado = input.value;
	input = document.getElementById("comboCidade");
	let cidade = input.value;

    let cliente = new Cliente(nome, cpf, nascimento, nome_mae, rua, numero, bairro, tel, cel, email, estado, cidade);
	
	let listaClienteStr = localStorage.getItem("listaCliente");
	let listaCliente = [];
	if(listaClienteStr != null){
		listaCliente = JSON.parse(listaClienteStr);
	}
	listaCliente.push(cliente);
	
	listaClienteStr = JSON.stringify(listaCliente);
	
    localStorage.setItem("listaCliente", listaClienteStr);
    //Abrir página para Novo Cadastro
    let javascript = AbrirPagina('../index.html');
}




//função para carregar lista de clientes e atributos da lista
function carregarCliente(){
	let cidadeStr = localStorage.getItem("cidade");
	let cidade = JSON.parse(cidadeStr);
	let input = document.getElementById("comboCidade");
	input.value = cidade.nome;
	input = document.getElementById("comboEstado");
	input.value = cidade.estado;
	input = document.getElementById("pais");
	input = carregarPais();
	
	let listaClienteStr = localStorage.getItem("listaCliente");
	    listaCliente = [];
		if (listaCliente != null){
			listaCliente = JSON.parse(listaClienteStr);
		}
	let comboCliente = document.getElementById("comboCliente");
	let option;
	for(let index = 0; index < listaCliente.length; index++){
		option = document.createElement('option');
		option.text = listaCliente[index].nome;
		option.value = listaCliente[index].nome;
        comboCliente.add(option);
		}
}
	
function AbrirPaginaIndex(link) {
    document.getElementById('../../WebContent/index.html').action = link;
    document.getElementById('../../WebContent/index.html').submit();
}


function comboCidade(){
	let input = document.getElementById("cidade");
	let cidade = input.options[input.selectedIndex].value;
	let option;
	option.value = listaCidade[index].nome;
	
}
function comboCliente() {
    let input = document.getElementById("listaCliente");
    let cliente = input.options[input.selectedIndex].value;
    let option;
    option.value = listaCliente[index].nome;
}

//mascaras min javascript
function mascaras(){
	for(var o=document.getElementsByTagName("input"),e=0;e<o.length;e++)"text"==o[e].type&&(o[e].style.backgroundColor="",o[e].style.borderColor="")
}
function coresMask(o){
	var e=o.value,r=e.length,
	t=o.maxLength;0==r?(o.style.borderColor="",o.style.backgroundColor=""):r<t?(o.style.borderColor=corIncompleta,o.style.backgroundColor=corIncompleta):(o.style.borderColor=corCompleta,o.style.backgroundColor=corCompleta)}
		function mascara(o,e,r,t){
			var l=e.selectionStart,a=e.value;a=a.replace(/\D/g,"");
			var s=a.length,c=o.length;window.event?id=r.keyCode:r.which&&(id=r.which),cursorfixo=!1,l<s&&(cursorfixo=!0);
			var n=!1;
				if((16==id||19==id||id>=33&&id<=40)&&(n=!0),ii=0,mm=0,!n){
					if(8!=id)for(e.value="",j=0,i=0;i<c&&("#"==o.substr(i,1)?(e.value+=a.substr(j,1),j++):"#"!=o.substr(i,1)&&(e.value+=o.substr(i,1)),8==id||cursorfixo||l++,j!=s+1);i++);
					t&&coresMask(e)}cursorfixo&&!n&&l--,e.setSelectionRange(l,l)
		}
		var corCompleta="#99ff8f",corIncompleta="#eff70b";

	
function mascararTel(){
    tel=tel.replace(/\D/g,"");            
    tel=tel.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    tel=tel.replace(/(\d)(\d{4})$/,"$1-$2");   
    return tel;
    }
var corCompleta = "#99ff8f"
	var corIncompleta = "#eff70b"

	function ResetCampos(){
	    var textFields = document.getElementsByTagName("input");
	        for(var i=0; i < textFields.length; i++){
	        if(textFields[i].type == "text"){
	            textFields[i].style.backgroundColor = "";
	            textFields[i].style.borderColor = "";
	        }
	    }   
	}

	function coresMask(t){
		var l = t.value;
		var m = l.length;
		var x = t.maxLength;
		if(m==0){
			t.style.borderColor="";
			t.style.backgroundColor="";
		}
		else if(m<x){
			t.style.borderColor=corIncompleta;
			t.style.backgroundColor=corIncompleta;
		}else{
			t.style.borderColor=corCompleta;
			t.style.backgroundColor=corCompleta;
		}
	}

	function mascara(m,t,e,c){
		var cursor = t.selectionStart;
		var texto = t.value;
		texto = texto.replace(/\D/g,'');
		var l = texto.length;
		var lm = m.length;
		if(window.event) {                  
		    id = e.keyCode;
		} else if(e.which){                 
		    id = e.which;
		}
		cursorfixo=false;
		if(cursor < l)cursorfixo=true;
		var livre = false;
		if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
	 	ii=0;
	 	mm=0;
	 	if(!livre){
		 	if(id!=8){
			 	t.value="";
			 	j=0;
			 	for(i=0;i<lm;i++){
			 		if(m.substr(i,1)=="#"){
			 			t.value+=texto.substr(j,1);
			 			j++;
			 		}else if(m.substr(i,1)!="#"){
			 			t.value+=m.substr(i,1);
			 		}
			 		if(id!=8 && !cursorfixo)cursor++;
			 		if((j)==l+1)break;
			 		
			 	} 	
		 	}
		 	if(c)coresMask(t);
	 	}
	 	if(cursorfixo && !livre)cursor--;
	 	t.setSelectionRange(cursor, cursor);
}

function gerarRelatorio() {
    let cliente = localStorage.getItem('listaCliente');
    let clienteStr = JSON.parse(localStorage.getItem(cliente));
    let clienteStr = [];
    for (let i = 0; i <listaCliente.lenght; i++) {
        le
    }
    
    
}
