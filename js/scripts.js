//Scripts que executam assim que a página é carregada
$(document).ready(function(){

    //Modifica o tamanho do botão de concluir
    let win = $(this);
    if (win.width() > 480) {
        $('#submit').addClass('btn-md');
    
    } else {
        $('#submit').removeClass('btn-lg');
    }

    //Desabilita o envio do formulário pela tecla enter
    $("#form").on("keypress", function (event) {
        let keyPressed = event.keyCode || event.which;
        if (keyPressed === 13) {
            event.preventDefault();
            return false;
        }
    });

//Pega o dia e a hora que o checklis foi aberto:
    let data = new Date();

		let dia = data.getDate();
		let mes = data.getMonth() + 1;
		let ano = data.getFullYear();
		let hora = data.getHours();
		let min = data.getMinutes();

        let abertura_checklist = "hoje é "+dia+"/"+mes+"/"+ano+" - "+hora+":"+min;

		console.log(abertura_checklist);

//Scripts das máscaras dos inputs:

    //Profilaxia TVP
    $("#hr-tvp").mask("00:00");

    // Maltodexitrina
    $("#hr-maltodexitrina").mask("00:00");

    //Duração da cirurgia
    $("#dr-cirurgia").mask("00:00");

    //Hora da incisão
    $("#hr-incisao").mask("00:00");

    //Término do ato cirúrgico
    $("#fim-cirurgia").mask("00:00");

    //Hora de administracao
    $("#hr-administracao").mask("00:00");

    //Hora de chegada
    $("#hr-chegada").mask("00:00");

    //Hora da entrada na sala
    $("#hr-entrada").mask("00:00");

    //Tricotomia
    $("#hr_tricotomia").mask("00:00");

        //Tricotomia Domicilio
        $("#hr_domicilio_tricotomia").mask("00:00");

    //Repetição
    $("#rep").mask("00:00");

    //SRPA
    $("#srpa-mal").mask(" 00:00");

//Script para surgir os campos:
    $(".form-check-input").on("click", function(){

        //TVP
        if($("#sim-tvp").is(":checked")){
            $("#hr_tvp").fadeIn(0);

        }else if($("#nao-tvp").is(":checked")){
            $("#hr_tvp").fadeOut(0);

        }else if($("#nd-tvp").is(":checked")){
            $("#hr_tvp").fadeOut(0);
        }

        //Alergia
        if($("#sim-alergia").is(":checked")){
            $("#alergia").fadeIn(0);

        }else if($("#nao-alergia").is(":checked")){
            $("#alergia").fadeOut(0);
        }

        //Cefazolina
        if($("#check-cefazolina").is(":checked")){
            $("#cefazolina").fadeIn(0);
        }else{
            $("#cefazolina").fadeOut(0);
        }


        //Cefuroxima
        if($("#check-cefuroxima").is(":checked")){
            $("#cefuroxima").fadeIn(0);
        }else{
            $("#cefuroxima").fadeOut(0);
        }


        //Cefalotina
        if($("#check-cefalotina").is(":checked")){
            $("#cefalotina").fadeIn(0);
        }else{
            $("#cefalotina").fadeOut(0);
        }


        //ATB
        if($("#check-atb").is(":checked")){
            $("#atb").fadeIn(0);
        }else{
            $("#atb").fadeOut(0);
        }


        //Tricotomia
        if($("#sim_tricotomia").is(":checked")){
            $("#hr_tricotomia").fadeIn(0);
            $("#tricotomia_domicilio").fadeOut(0);

        }else if($("#nao_tricotomia").is(":checked")){
            $("#tricotomia_domicilio").fadeIn(0);
            $("#hr_tricotomia").fadeOut(0);

            if($("#check_domicilio").is(":checked")){
                $("#hr_domicilio_tricotomia").fadeIn(0);
            }else{
                $("#hr_domicilio_tricotomia").fadeOut(0);
            }


        }else if($("#nd_tricotomia").is(":checked")){
            $("#hr_tricotomia").fadeOut(0);
            $("#tricotomia_domicilio").fadeOut(0);
        }

        
        //Repetição de dose
        if($("#sim-rep").is(":checked")){
            $("#rep").fadeIn(0);

        }else if($("#nao-rep").is(":checked")){
            $("#rep").fadeOut(0);

        }else if($("#nd-rep").is(":checked")){
            $("#rep").fadeOut(0);
        }


        //Intercorrência clínica
        if($("#sim-inter").is(":checked")){
            $("#inter-cli").fadeIn(0);

        }else if($("#nao-inter").is(":checked")){
            $("#inter-cli").fadeOut(0);
        }


        //SRPA
        if($("#sim_srpa").is(":checked")){
            $("#srpa-mal").fadeIn(0);

        }else if($("#nao_srpa").is(":checked")){
            $("#srpa-mal").fadeOut(0);

        }else if($("#nd_srpa").is(":checked")){
            $("#srpa-mal").fadeOut(0);
        }

    });
    
//Barra de progresso:
    var getMax = function () {
        return $(document).height() - $(window).height();
    };

    var getValue = function () {
        return $(window).scrollTop();
    };

    var progressBar = $(".progress-bar"),
        max = getMax(),
        value,
        width;

        console.log(progressBar);

    var getWidth = function () {
        // Calcula largura em porcentagem
        value = getValue();
        width = (value / max) * 100;
        width = width + "%";

        return width;
    };

    var setWidth = function () {
        progressBar.css({ width: getWidth() });
    };

    $(document).on("scroll", setWidth);
    $(window).on("resize", function () {
        // Need to reset max
        max = getMax();
        setWidth();

    });


});

$(function(){
    $("#btn-salvar").click(function(e){
        e.preventDefault();
    });
});

function salvar(){
    var query = $('#form').serialize();
    var url = 'index.php';
    $.post(url, query, function (response) {
     alert (response);
    });

};

function reset(){
    document.getElementById("form").reset();
}


function add(){
    let nome = document.querySelector("#nome_col").value;
    let destino = document.querySelector("#responsavel").innerText = nome.toUpperCase();

    document.querySelector("#nome_col").addEventListener("keypress", function(e){
        if(e.key === "Enter"){
            document.querySelector("#nome_col").style.display = "none";
        }
    });

};
