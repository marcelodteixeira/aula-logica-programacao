function soma(numero1, numero2) {
	var resultado = numero1 + numero2;
	return resultado;
}

function multiplica(numero1, numero2) {
	var resultado = numero1 * numero2;
	return resultado;
}

function exibeValor(valor) {
	alert("Valor: "+valor);
}

function somaNumeros(numeros) {
	var total = 0;
	for (var i=0; i<numeros.length; i++) {
		total = total + numeros[i];
	}
	return total;
}

function imprimeCliente(cliente) {
	var texto = cliente.nome  + ", " +
				cliente.email + ", " +
				cliente.telefone + ", "+
				cliente.cpf;
	alert(texto);
}

function Cliente(nome, email, telefone, cpf) {
	this.nome = nome;
	this.email = email;
	this.telefone = telefone;
	this.cpf = cpf;
}