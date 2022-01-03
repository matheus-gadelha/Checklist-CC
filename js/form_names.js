function getAllNames(){

	function getItem(selector, type = "value"){

		item = document.querySelectorAll(selector);


		if(type == "value"){
			return (item.length > 0 ? item[0].value : "");
		}

		
		return (item.length > 0 ? (item[0].checked ? 1 : 0) : "");

	}

	let idt = getItem("input[name=idt]", "checked");
	let proc_cirur = getItem("input[name=proc_cirur]", "checked");
	let nome_cirur = getItem("input[name=nome_cirur]", "checked");
	let radio_termo = getItem("input[name=radio_termo]:checked");
	let radio_tvp = getItem("input[name=radio_tvp]:checked");

	let radio_anestesica = getItem("input[name=radio_anestesica]:checked");
	let radio_via = getItem("input[name=radio_via]:checked");
	let radio_anestesia = getItem("input[name=radio_anestesia]:checked");
	let radio_motorrizacao = getItem("input[name=radio_motorrizacao]:checked");
	let radio_viadificil = getItem("input[name=radio_viadificil]:checked");
	let radio_equipamento = getItem("input[name=radio_equipamento]:checked");
	let radio_alergia = getItem("input[name=radio_alergia]:checked");
	let radio_risco = getItem("input[name=radio_risco]:checked");
	let radio_nausea = getItem("input[name=radio_nausea]:checked");
	let radio_hipotermia = getItem("input[name=radio_hipotermia]:checked");
	let radio_delirium = getItem("input[name=radio_delirium]:checked");
	let radio_acesso = getItem("input[name=radio_acesso]:checked");
	let radio_sangue = getItem("input[name=radio_sangue]:checked");
	let radio_sitio = getItem("input[name=radio_sitio]:checked");
	let radio_tricotomia = getItem("input[name=radio_tricotomia]:checked");
	let hr_maltodexitrina = getItem("input[name=hr_maltodexitrina]");
	let horario = getItem("input[name=horario]");

	let radio_cirurgiao = getItem("input[name=radio_cirurgiao]:checked");
	let radio_anestesiologista = getItem("input[name=radio_anestesiologista]:checked");
	let radio_enfermeiro = getItem("input[name=radio_enfermeiro]:checked");
	let radio_confirmacao = getItem("input[name=radio_confirmacao]:checked");

	let radio_critica = getItem("input[name=radio_critica]:checked");
	let duracao_cirur = getItem("input[name=duracao_cirur]");
	let radio_perdasangue = getItem("input[name=radio_perdasangue]:checked");

	let preo_espec = getItem("textarea[name=preo_espec]");

	let radio_equipamentos = getItem("input[name=radio_equipamentos]:checked");
	let radio_esteralizacao = getItem("input[name=radio_esteralizacao]:checked");
	let radio_bisturi = getItem("input[name=radio_bisturi]:checked");

	let cefazolina = getItem("input[name=cefazolina]", "checked");
	let cefuroxima = getItem("input[name=cefuroxima]", "checked");
	let cefalotina = getItem("input[name=cefalotina]", "checked");
	let outro = getItem("input[name=outro]", "checked");
	let outro_descri = getItem("input[name=outro_descri]");
	let hr_adm = getItem("input[name=hr_adm]");
	let radio_repeticao = getItem("input[name=radio_repeticao]:checked");
	let hr_repeticao = getItem("input[name=hr_repeticao]");

	let hr_incisao = getItem("input[name=hr_incisao]");
	let radio_instrumentos = getItem("input[name=radio_instrumentos]:checked");
	let radio_compressa = getItem("input[name=radio_compressa]:checked");
	let radio_agulha = getItem("input[name=radio_agulha]:checked");
	let radio_patologica = getItem("input[name=radio_patologica]:checked");
	let radio_intercorrencia = getItem("input[name=radio_intercorrencia]:checked");
	let inter_cli = getItem("input[name=inter_cli]");
	let nome_procedimento = getItem("input[name=nome_procedimento]");
	let termino_cirur = getItem("input[name=termino_cirur]");
	let radio_revisao = getItem("input[name=radio_revisao]:checked");

	let hr_srpa_chegada = getItem("input[name=hr_srpa_chegada]");
	let radio_maltodexitrina = getItem("input[name=radio_maltodexitrina]:checked");
	let hr_srpa_maltodexitrina = getItem("input[name=hr_srpa_maltodexitrina]");


	let dados = {
		idt: idt,
		proc_cirur: proc_cirur,
		nome_cirur: nome_cirur,
		radio_termo: radio_termo,
		radio_tvp: radio_tvp,
		radio_anestesica: radio_anestesica,
		radio_via: radio_via,
		radio_anestesia: radio_anestesia,
		radio_motorrizacao: radio_motorrizacao,
		radio_viadificil: radio_viadificil,
		radio_equipamento: radio_equipamento,
		radio_alergia: radio_alergia,
		radio_risco: radio_risco, 
		radio_nausea: radio_nausea,
		radio_hipotermia: radio_hipotermia,
		radio_delirium: radio_delirium,
		radio_acesso: radio_acesso,
		radio_sangue: radio_sangue,
		radio_sitio: radio_sitio,
		radio_tricotomia: radio_tricotomia,
		hr_maltodexitrina: hr_maltodexitrina,
		horario: horario,
		radio_cirurgiao: radio_cirurgiao, 
		radio_anestesiologista: radio_anestesiologista,
		radio_enfermeiro: radio_enfermeiro,
		radio_confirmacao: radio_confirmacao,
		radio_critica: radio_critica,
		duracao_cirur: duracao_cirur,
		radio_perdasangue: radio_perdasangue,
		preo_espec: preo_espec,
		radio_equipamentos: radio_equipamentos,
		radio_esteralizacao: radio_esteralizacao,
		radio_bisturi: radio_bisturi,
		cefazolina: cefazolina, 
		cefuroxima: cefuroxima,
		cefalotina: cefalotina,
		outro: outro,
		outro_descri: outro_descri,
		hr_adm: hr_adm,
		radio_repeticao: radio_repeticao,
		hr_repeticao: hr_repeticao,
		hr_incisao: hr_incisao,
		radio_instrumentos: radio_instrumentos,
		radio_compressa: radio_compressa,
		radio_agulha: radio_agulha,
		radio_patologica: radio_patologica,
		radio_intercorrencia: radio_intercorrencia,
		inter_cli: inter_cli,
		nome_procedimento: nome_procedimento,
		termino_cirur: termino_cirur,
		radio_revisao: radio_revisao,
		hr_srpa_chegada: hr_srpa_chegada,
		radio_maltodexitrina: radio_maltodexitrina,
		hr_srpa_maltodexitrina: hr_srpa_maltodexitrina

	}

	//console.log(dados);

	enviar(dados);

	function enviar(dados){
		const xhttp = new XMLHttpRequest();
		xhttp.open("POST", "index.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

		dataKeys = Object.keys(dados);
		dataDados = [];


		for(let i = 0; i < dataKeys.length; i++){
			dataDados.push(`${dataKeys[i]} = ${dados[dataKeys[i]]}`); 
		}		

		dataDadosText = dataDados.join("&");

		//console.log(dataDadosText);

		xhttp.send(dataDadosText);
	}

}


