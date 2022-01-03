function show(){

    function getItem(selector, id){

		item = document.getElementsByName(selector);
        text = document.getElementById(id);

		return (item.length > 0 ? (item[0].checked ? text.innerText + ", <br/>" : "") : "");

	}

    function getInput(idInput, idText){
        let input = document.getElementById(idInput);
        let inputText = document.getElementById(idText);

        if(input.value != ""){
            return inputText.innerText + ", <br/>";
        }
    }


    let idt = getItem("idt", "title_idt");
    let proc_cirur = getItem("proc_cirur", "title_proc_cirur");
    let nome_cirur = getItem("nome_cirur", "title_nome_cirur");
    let termo = getItem("radio_termo", "title_termo");
    let tvp = getItem("radio_tvp", "title_tvp");
    let anestesica = getItem("radio_anestesica", "title_anestesica");
    let via_aerea = getItem("radio_via", "title_via_aerea");
    let anestesia = getItem("radio_anestesia", "title_anestesia");
    let motorizacao = getItem("radio_motorizacao", "title_motorizacao");
    let via_difil = getItem("radio_viadificil", "title_via_dificil");
    let equipamento = getItem("radio_equipamento", "title_equipamento");
    let alergia = getItem("radio_alergia", "title_alergia");
    let perda_sangue = getItem("radio_risco", "title_perda_sangue");
    let nausea = getItem("radio_nausea", "title_nausea");
    let hipotermia = getItem("radio_hipotermia", "title_hipotermia");
    let delirium = getItem("radio_delirium", "title_delirium");
    let acesso = getItem("radio_acesso", "title_acesso");
    let sangue = getItem("radio_sangue", "title_sangue");
    let sitio = getItem("radio_sitio", "title_sitio");
    let tricotomia = getItem("radio_tricotomia", "title_tricotomia");
    let hr_maltodexitrina = getInput("hr-maltodexitrina", "title_hr_malto");
    let hr_entrada = getInput("hr-entrada", "title_hr_entrada");
    let cirurgioes = getItem("radio_cirurgiao", "title_cirurgioes");
    let anestesiologista = getItem("radio_anestesiologista", "title_anestesiologista");
    let eq_enfermagem = getItem("radio_enfermeiro", "title_enfermagem");
    let confirmacao = getItem("radio_confirmacao", "title_confirmacao");
    let critica = getItem("radio_critica", "title_critica");
    let dr_cirurgia = getInput("dr-cirurgia", "title_dr_cirurgia");
    let perda_sanguinea = getItem("radio_perdasangue", "title_perda_sanguinea");
    let preo_espec = getInput("preo_espec", "title_preo_espec");
    let equipamentos_enf = getItem("radio_equipamentos", "title_equipamentos");
    let esterelizacao = getItem("radio_esteralizacao", "title_esterelizacao");
    let bisturi = getItem("radio_bisturi", "title_bisturi");
    let cefazolina = getItem("cefazolina", "title_cefazolina");
    let cefuroxima = getItem("cefuroxima", "title_cefuroxina");
    let cefalotina = getItem("cefalotina", "title_cefalotina");
    let outro = getItem("outro", "title_outro");
    let hr_administracao = getInput("hr-administracao", "title_hr_administracao");
    let repeticao = getItem("radio_repeticao", "title_repeticao");
    let hr_incisao = getInput("hr-incisao", "title_hr_incisao");
    let contagem = getItem("radio_contagem", "title_contagem");
    let compressa = getItem("radio_compressa", "title_compressa");
    let agulha = getItem("radio_agulha", "title_agulhas");
    let patologica = getItem("radio_patologica", "title_patologica");
    let intercorrencia = getItem("radio_intercorrencia", "title_inter");
    let procedimento = getInput("nome_procedimento", "title_nome_procedimento");
    let fim_cirur = getInput("fim-cirurgia", "title_fim_cirur");
    let revisao = getItem("radio_revisao", "title_revisao");
    let hr_chegada =getInput("hr-chegada", "title_srpa_chegada");
    let maltodexitrina = getItem("radio_maltodexitrina", "title_malto_srpa");


    let nomes = [
        idt,
        proc_cirur,
        nome_cirur,
        termo,
        tvp,
        anestesica,
        via_aerea,
        anestesia,
        motorizacao,
        via_difil,
        equipamento,
        alergia,
        perda_sangue,
        nausea,
        hipotermia,
        delirium,
        acesso,
        sangue,
        sitio,
        tricotomia,
        hr_maltodexitrina,
        hr_entrada,
        cirurgioes,
        anestesiologista,
        eq_enfermagem,
        confirmacao,
        critica,
        dr_cirurgia,
        perda_sanguinea,
        preo_espec,
        equipamentos_enf,
        esterelizacao,
        bisturi,
        cefazolina,
        cefuroxima,
        cefalotina,
        outro,
        hr_administracao,
        repeticao,
        hr_incisao,
        contagem,
        compressa,
        agulha,
        patologica,
        intercorrencia,
        procedimento,
        fim_cirur,
        revisao,
        hr_chegada,
        maltodexitrina
    ]

    document.querySelector("#show_campos").innerHTML = nomes.join(" ");

}