<?php
/**
 * Fuel is a fast, lightweight, community driven PHP 5.4+ framework.
 *
 * @package    Fuel
 * @version    1.8.2
 * @author     Fuel Development Team
 * @license    MIT License
 * @copyright  2010 - 2019 Fuel Development Team
 * @link       https://fuelphp.com
 */

/**
 * The Welcome Controller.
 *
 * A basic controller example.  Has examples of how to set the
 * response body and status.
 *
 * @package  app
 * @extends  Controller
 */
class Controller_CheckList extends Controller
{
	/**
	 * The basic welcome message
	 *
	 * @access  public
	 * @return  Response
	 */
	public function get_checklist()
	{
		return Response::forge(View::forge("checklist/checklist"));
	}
	public function get_adicionar(){
		return Response::forge(View::forge("checklist/adicionar"));
	}
	public function post_adicionar(){
		$properties = array(
	        "identificacao" => Input::post("idt_",""),
	        "proc_cirurgico" => Input::post("proc_cirur_",""),
	        "nome_cirurgiao" => Input::post("nome_cirur_",""),
	        "termo_conse" => Input::post("radio_termo_",""),
	        "profilaxia_tvp" => Input::post("radio_tvp_",""),
	        "pre_anestesica" => Input::post("radio_anestesica_",""),
	        "via_aerea" => Input::post("radio_via_",""),
	        "aparelho_anestesia" => Input::post("radio_anestesia_",""),
	        "monotorizacao_adequada" => Input::post("radio_motorizacao_",""),
	        "vadp" => Input::post("radio_viadificil_",""),
	        "equipamento_disponivel" => Input::post("radio_equipamento",""),
	        "alergia_conhecida" => Input::post("radio_alergia_",""),
	        "alergia_conhecida" => Input::post("alergia_conhecida_",""),
	        "perda_sanguinea" => Input::post("radio_risco_",""),
	        "risco_nv" => Input::post("risco_nausea_",""),
	        "risco_h" => Input::post("radio_hipotermia_",""),
	        "risco_d" => Input::post("radio_delirium_",""),
	        "acesso_ea" => Input::post("radio_acesso_",""),
	        "solicitado_rs" => Input::post("radio_sangue_",""),
	        "sitio_marcado" => Input::post("radio_sitio_",""),
	        "tricotomia" => Input::post("radio_tricotomia_",""),
	        "hora_maltodexitrina" => Input::post("hr_maltodexitrina_",""),
	        "nome_cirurgioes" => Input::post("radio_cirurgiao_",""),
	        "nome_anestesiologista" => Input::post("radio_anestesiologista_",""),
	        "nome_enfermagem" => Input::post("radio_enfermeiro_",""),
	        "confirmam_ideniticacao" => Input::post("radio_confirmacao_",""),
	        "ecp" => Input::post("radio_critica_",""),
			"duracao_cirurgia" => Input::post("duracao_cirur_",""),
	        "ecp_perda_sanguinea" => Input::post("radio_perdasangue_",""),
	        "preocupacoes_espercificas" => Input::post("preo_espec_",""),
	        "enfermagem_equipamentos" => Input::post("radio_equipamentos_",""),
	        "enfermagem_esterelizacao" => Input::post("radio_esteralizacao_",""),
	        "placa_b" => Input::post("radio_bisturi_",""),
	        "cefazolina" => Input::post("cefazolina_",""),
	        "cefuroxima" => Input::post("cefuroxima_",""),
	        "cefalotina" => Input::post("cefalotina_",""),
	        "outro" => Input::post("outro_",""),
	        "outro_descri" => Input::post("outro_descri_",""),
	        "hora_administracao" => Input::post("hr_adm",""),
	        "rep_perda_sanguinea" => Input::post("radio_repeticao_",""),
	        "hr_repeticao" => Input::post("hr_repeticao_",""),
	        "hiora_incisao_cirurgica" => Input::post("hr_incisao_",""),
	        "instrumentos" => Input::post("radio_contagem_",""),
	        "compressas" => Input::post("radio_compressa_",""),
	        "agulhas" => Input::post("radio_agulha_",""),
	        "amostra" => Input::post("radio_patologica_",""),
	        "intercorrencias_clinicas" => Input::post("radio_intercorrencia_",""),
	        "inter_cli" => Input::post("inter_cli_",""),
	        "nome_procedimento" => Input::post("nome_procedimento_",""),
	        "hora_termino" => Input::post("termino_cirur_",""),
	        "revisao_equipamentos" => Input::post("radio_revisao_",""),
	        "hora_chegada" => Input::post("hr_srpa_chegada_",""),
	        "hora_maltodexitrina_srpa" => Input::post("hr_srpa_maltodexitrina_",""),
	        "hora_maltodexitrina" => Input::post("hr_srpa_maltodexitrina_","")
	    );
		var_dump(Input::post());
		if(Input::post("salvar_")){
			$checklist = new Model_CheckList($properties);
			$checklist->save();
			return "Salvando";
		}
		return "Concluindo";
	}

	/**
	 * The 404 action for the application.
	 *
	 * @access  public
	 * @return  Response
	 */
	public function action_404()
	{
		return Response::forge(Presenter::forge('welcome/404'), 404);
	}
}
