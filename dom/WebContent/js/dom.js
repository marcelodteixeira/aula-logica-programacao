// Captura o evento load da página
window.onload=function(){
// Localiza o elemento com id "id_p"
var p = document.getElementById('id_p');
// configura a propriedade backgroundColor do elemento
	p.style.backgroundColor='#0000FF';
	p.style.color='#FF3333';
}


Captura o evento load da página
window.onload=function(){
	// Seleciona a div do documento
	var a_div = document.getElementById('a-div');
	
	// Cria um novo nó <p>
	var novo_p = document.createElement('p');
	
	// Altera a cor de fundo do novo <p>
	novo_p.style.background = 'red';
	
	// Cria um novo nó de texto
	var novo_texto = document.createTextNode('Este é o texto do p!');
	// Adiciona o nó de texto no parágrafo
	novo_p.appendChild(novo_texto);
	
	// Adiciona o nó <p> com seu texto na nossa div
	a_div.appendChild(novo_p);
	
	// Conta 5 segundos e remove o novo elemento
	setTimeout(function(){
		// Remove o nó <p>
		a_div.removeChild(novo_p);
	}, 5000);
}


