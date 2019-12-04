
function Dados(nome,bairro){
	
	this.nome = nome;
	this.bairro = bairro;
	
}


function salvarDados(){
	
	let nome = document.getElementById("nome").value;
	nome = nome.value;
	let bairro = document.getElementById("bairro").value;
	bairro = bairro.value;
	let dadosUser = new Dados(nome,bairro); 
	let form = [];
	form.push(dadosUser);
	sessionStorage.setItem("dados", form);
	
	
	
	
}

function checkform () {
    let f = document.forms["form1"].elements;

    for ( let i = 0; i < f.length; i++ ) {
        if (f[i].value != '') {
            continue;
        }else{
        
        	f.input.style.backgroundColor='#0000FF';
        	f.input.style.color='#FF3333';
        }
    }

    
    
   
    
    
}


function carregarDados(){
	salvarDados();
	checkform();
		
}