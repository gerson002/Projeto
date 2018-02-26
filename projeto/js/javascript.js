function validarNumero(num){
	var str = num.value;	
	var regexp = new RegExp(/[^0-9]/i); //expressão regular buscar caso tenha alguma ocorrencia de um caracter que não seja numerico
	var n = regexp.exec(num.value);  
	if(isNaN(n)) {
		alert("O campo número endereço só permite números.");
		num.value = str.replace(/[^0-9]/ig, ""); //substituir deixar somente os numeros; modificador "g" considerar todas as ocorrencias;"i" maiscula ou minuscula
	}
	num.focus();
	return false;
}

function validarFormulario(formulario) {
	function validarSenha(senha,msg)
	{
		//var considera = ((senha.value == null)?"":"");
		if (senha.value == "" || senha.value == null) {
			alert(msg);
			return false;
		}
		else
			return true;
	}	
	// Valida Nome
	if((formulario.nome.value == "") || (formulario.nome.value == null)) {
		alert("O nome deve ser informado.");
		formulario.nome.focus();
		return false;
	}	
	//Valida Sexo
	opcaoSexo = -1; 
	for(x = formulario.sexo.length-1; x > -1; x--) {					
		if(formulario.sexo[x].checked) { 
		   opcaoSexo++; 
		}
	}	
	if(opcaoSexo == -1) {
		alert("Sexo não informado.");
		formulario.sexo[0].focus();
		return false;
	}
	//Valida Email
	if(formulario.email.value.indexOf("@") == -1 || formulario.email.value == "" || formulario.email.value == null) {
		alert("E-mail informado não é válido.");
		formulario.email.focus();
		return false;
	}		
	//Valida Senha
	if (!validarSenha(formulario.senha,"A senha deve ser informada")) {
		formulario.senha.focus();
		return false;		
	}
	if (formulario.senha.value != "" && formulario.senha.value != null) {
		if (!validarSenha(formulario.senha2,"A redefinição da senha deve ser informada")){
			formulario.senha2.focus();
			return false;
		}
	}	
	if( (formulario.senha.value != "") && (formulario.senha2.value != "") && (formulario.senha.value != formulario.senha2.value) ){
		alert("A redefinição da senha é diferente da senha.");		
		formulario.senha2.focus();
		return false;		 
	}	
}