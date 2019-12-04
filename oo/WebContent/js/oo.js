function Produto(nome,marca,preco){
	this.nome=nome;
	this.marca = marca;
	this.preco = preco;

	
}

function calcularIcms(aliquota){
	
	this.icms = this.preco * aliquota/100
	
	Produto.prototype.icms = 0;
	
}


	

Produto.prototype.calcularIcms = calcularIcms;




