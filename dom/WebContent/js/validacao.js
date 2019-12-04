function validar(){
	
	var nome = document.getElementById('nome');
	if (!nome.value.trim()){
		
		nome.classList.add('erro-validacao');
		
	}else{
		
		nome.classList.remove('erro-validacao');
		let form = document.getElementById('formDados');
		salvar.Nome();
		alert('Nome salva com sucesso!');
	}
}

function salvarNome(){
	
	localStorage.setItem('nome',JSON.stringify(nome.value));
}
