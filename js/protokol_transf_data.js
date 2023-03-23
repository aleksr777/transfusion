var reaktiv_date, reakt_data, ch_d, sov_r;
var gem, i, j, n;
var str, id, cs, cg, cp, col, cv;
var fen_out, fen_out1, fen_out2, fen1, fen2, fen_height;

var full_name, er_full_name, szp_full_name, tr_full_name, naim_glav, eritr, er_vzves, er_massa, er_konserv, szp, plazma_svezhezam, krioprec, trombocyty, koncentrat_tr;

var naim_er_otmytye, naim_er_s_udal_lts, naim_er_s_udal_lts_txt, naim_er_leykoreduc, naim_er_leykoreduc_txt, naim_er_aferez, naim_er_aferez_txt, naim_er_razm_i_otm, naim_er_razm_i_otm_txt, naim_er_otmytye_8_razm_i_otm, naim_er_dobav, naim_er_dobav_txt, naim_er_dobav_textarea;

var naim_szp_patogenreduc, naim_szp_patogenreduc_txt, naim_szp_pulirov, naim_szp_pulirov_txt, naim_szp_patogeninact, naim_szp_patogeninact_txt, naim_szp_kriosupernat, naim_szp_kriosupernat_txt, naim_szp_liofiliz, naim_szp_liofiliz_txt, naim_szp_dobav_textarea, naim_szp_dobav, naim_szp_dobav_txt;  

var naim_tr_aferez_8_iz_ed_kr, naim_tr_iz_ed_kr, naim_tr_aferez, naim_tr_aferez_txt, naim_tr_pulirov, naim_tr_pulirov_txt, naim_tr_v_dob_rastv, naim_tr_patogenreduc, naim_tr_patogenreduc_txt, naim_tr_leykoreduc, naim_tr_leykoreduc_txt, naim_tr_kriokonserv, naim_tr_kriokonserv_txt, naim_tr_dobav_textarea, naim_tr_dobav, naim_tr_dobav_txt;

var grup_rez, C1, c0, Cw, D, Dw, E1, e0, K1, k0;
var grup_rez_11, grup_rez_10, grup_rez_21, grup_rez_20, grup_rez_31, grup_rez_30, grup_rez_41, grup_rez_40;
var C1_min, C1_pl, c0_min, c0_pl;
var D_min, D_pl, Dw_pl, Cw_min, Cw_pl, E1_min, E1_pl, e0_min, e0_pl, K1_min, K1_pl, k0_min, k0_pl;

var v, ser, kod_don, dat_zagotov, godn, proizv, proizv_ch, proizv_fmba, proizv_ospk, proizv_kam;
var vr_nach, vr_kon, gem_v_itog, vr_v_itog, gem_v_itog_1, gem_v_itog_2, gem_inp_v_itog; 

function check_reaktiv_date(){
	"use strict";
	
	if (localStorage.getItem(reaktiv_date)===null||
		localStorage.getItem(reaktiv_date)==='null'||
		localStorage.getItem(reaktiv_date)===undefined||
		localStorage.getItem(reaktiv_date)==='undefined'){
		localStorage.setItem(reaktiv_date, '');
	}
	if (localStorage.getItem(reaktiv_date+'_check')===null||
		localStorage.getItem(reaktiv_date+'_check')==='null'||
		localStorage.getItem(reaktiv_date+'_check')===undefined||
		localStorage.getItem(reaktiv_date+'_check')==='undefined'){
		localStorage.setItem(reaktiv_date+'_check', '');
	}
	
	if (localStorage.getItem(reaktiv_date+'_check')==='ok'){
		if (localStorage.getItem(reaktiv_date)===''){
			document.getElementById(reaktiv_date).style.borderColor='#D50026';
			document.getElementById(reaktiv_date).style.color='#D50026';
			document.getElementById(reaktiv_date+'_correct').style.color='#D50026';
			document.getElementById(reaktiv_date+'_correct').innerHTML='Введите дату!';
			ch_d='1';
		}
	}
	else if (localStorage.getItem(reaktiv_date+'_check')===''){
		ch_d='1';
		if (localStorage.getItem(reaktiv_date)===''){
			document.getElementById(reaktiv_date).style.borderColor='#D50026';
			document.getElementById(reaktiv_date).style.color='#D50026';
			document.getElementById(reaktiv_date+'_correct').style.color='#D50026';
			document.getElementById(reaktiv_date+'_correct').innerHTML='Введите дату!';
		}

	}
}

function check_reakt_data(){
	"use strict";
	if (localStorage.getItem(reakt_data)===null||
		localStorage.getItem(reakt_data)==='null'||
		localStorage.getItem(reakt_data)===undefined||
		localStorage.getItem(reakt_data)==='undefined'){
		localStorage.setItem(reakt_data, '');
	}
	if (localStorage.getItem(reakt_data)===''){
		document.getElementById(reakt_data).style.borderColor='#D50026';
		document.getElementById(reakt_data).style.color='#D50026';
		document.getElementById(reakt_data+'_correct').style.color='#D50026';
		document.getElementById(reakt_data+'_correct').innerHTML='Введите данные!';
		ch_d='1';
		}
	else {
		document.getElementById(reakt_data).style.borderColor='';
		document.getElementById(reakt_data).style.color='';
		document.getElementById(reakt_data+'_correct').style.color='';
		document.getElementById(reakt_data+'_correct').innerHTML='';}
}

function start_attention(){
	"use strict";
	ch_d='0'; 
	sov_r= localStorage.getItem('proby_sovm');
	reaktiv_date='col_date_vskr_fl';
	check_reaktiv_date();
	reaktiv_date='col_a_godn';
	check_reaktiv_date();
	reaktiv_date='col_b_godn';
	check_reaktiv_date();
	reaktiv_date='col_ab_godn';
	check_reaktiv_date();
	reaktiv_date='col_d_godn';
	check_reaktiv_date();
	
	reakt_data='col_a_ser';
	check_reakt_data();
	reakt_data='col_b_ser';
	check_reakt_data();
	reakt_data='col_ab_ser';
	check_reakt_data();
	reakt_data='col_d_ser';
	check_reakt_data();
	
	reakt_data='col_a_proizv';
	check_reakt_data();
	reakt_data='col_b_proizv';
	check_reakt_data();
	reakt_data='col_ab_proizv';
	check_reakt_data();
	reakt_data='col_d_proizv';
	check_reakt_data();
	
	if (sov_r==='poliglukin'){
	reaktiv_date='pol_godn';
	check_reaktiv_date();
	reakt_data='pol_ser';
	check_reakt_data();
	reakt_data='pol_proizv';
	check_reakt_data();
	document.getElementById('b_pol').style.display='inline';
	document.getElementById('b_zhel').style.display='none'; document.getElementById('b_ind_sovm_info').style.display='none';
	}
	else if (sov_r==='zhelatin'){
	reaktiv_date='zhel_godn';
	check_reaktiv_date();
	reakt_data='zhel_ser';
	check_reakt_data();
	reakt_data='zhel_proizv';
	check_reakt_data();
	document.getElementById('b_pol').style.display='none';
	document.getElementById('b_zhel').style.display='inline'; document.getElementById('b_ind_sovm_info').style.display='none';
	}
	else if (sov_r==='individual'){
	document.getElementById('b_pol').style.display='none';
	document.getElementById('b_zhel').style.display='none'; document.getElementById('b_ind_sovm_info').style.display='inline';
	}
	
	if (ch_d==='0'){
		document.getElementById('attention').innerHTML='';
		document.getElementById('attention').style.display='none';
	}
	else {
		document.getElementById('attention').innerHTML='<a href="#reaktivy" id="att_ss">Проверьте реактивы!</a>';
		document.getElementById('attention').style.display='inline';
	}
sov_r=null;
}

///////// START_ENTER_PROTOCOL//////////////////
function start_enter_protocol(){
	"use strict";
check_session();
start_attention();	
pokazania_start();
naim_transf_sredy_start(); 

for (j = 1; j < 9; j++) {
	gem='gem'+j+'_'; vr='vr'+j+'_'; gem_dis_or_abl_start();
}
	
if (localStorage.getItem('oglavl_ch')===null|| 
	localStorage.getItem('oglavl_ch')===undefined|| 
	localStorage.getItem('oglavl_ch')==='null'|| 
	localStorage.getItem('oglavl_ch')==='undefined'|| 
	localStorage.getItem('oglavl_ch')===''){
	localStorage.setItem('oglavl','pr');
}
if (localStorage.getItem('oglavl')===null|| 
	localStorage.getItem('oglavl')===undefined|| 
	localStorage.getItem('oglavl')==='null'|| 
	localStorage.getItem('oglavl')==='undefined'|| 
	localStorage.getItem('oglavl')===''){
	localStorage.setItem('oglavl','pr');
}
if (localStorage.getItem('oglavl')==='pr'){
	document.getElementById('prtr').checked=true;
	page_prtcl(); knopka_bl();
}
else if (localStorage.getItem('oglavl')==='ztk'){
	document.getElementById('ztk').checked=true;
	page_ztk(); gem_vkl(); knopka_bl();
}
else if (localStorage.getItem('oglavl')==='zspk'){
	document.getElementById('zspk').checked=true;
	page_zspk(); knopka_bl();
}
else if (localStorage.getItem('oglavl')==='nl'){
	document.getElementById('nl').checked=true;
	page_nl(); knopka_bl();
}
else if (localStorage.getItem('oglavl')==='nip'){
	document.getElementById('nip').checked=true;
	page_nip(); knopka_bl();
}
	
	document.getElementById('date').value = localStorage.getItem('date');
	document.getElementById('date_analiz').value = localStorage.getItem('date_analiz');
	document.getElementById('date_ztk').value = localStorage.getItem('date_ztk');
	document.getElementById('date_zspk').value = localStorage.getItem('date_zspk');
	document.getElementById('date_nl').value = localStorage.getItem('date_nl');
	document.getElementById('date_nip').value = localStorage.getItem('date_nip');
	
if (localStorage.getItem('pdp')==='1'){
	document.getElementById('pdp1').checked=true;
	podp_vr();
}
else if (localStorage.getItem('pdp')==='2'){
	document.getElementById('pdp2').checked=true;
	podp_vr();
}
else if (localStorage.getItem('pdp')==='3'){
	document.getElementById('pdp3').checked=true;
	podp_vr();
}
else if (localStorage.getItem('pdp')==='4'){
	document.getElementById('pdp4').checked=true;
	podp_vr();
}
else if (localStorage.getItem('pdp')==='5'){
	document.getElementById('pdp5').checked=true;
	podp_vr();
}
else if (localStorage.getItem('pdp')===''|| 
		localStorage.getItem('pdp')===null||  
		localStorage.getItem('pdp')==='null'||  
		localStorage.getItem('pdp')===undefined||  
		localStorage.getItem('pdp')==='undefined'){
	document.getElementById('podp_vr').value = localStorage.getItem('podp_vr');
}	
	
if (localStorage.getItem('pdp_lab')==='1'){
	document.getElementById('pdp_lab1').checked=true;
	podp_vr_lab();
}
else if (localStorage.getItem('pdp_lab')==='2'){
	document.getElementById('pdp_lab2').checked=true;
	podp_vr_lab();
}
else if (localStorage.getItem('pdp_lab')==='3'){
	document.getElementById('pdp_lab3').checked=true;
	podp_vr_lab();
}
else if (localStorage.getItem('pdp_lab')==='4'){
	document.getElementById('pdp_lab4').checked=true;
	podp_vr_lab();
}
else if (localStorage.getItem('pdp_lab')===''|| 
		localStorage.getItem('pdp_lab')===null||  
		localStorage.getItem('pdp_lab')==='null'||  
		localStorage.getItem('pdp_lab')===undefined||  
		localStorage.getItem('pdp_lab')==='undefined') {
	document.getElementById('podp_vr_lab').value = localStorage.getItem('podp_vr_lab');
}
	
	document.getElementById('tel_vr').value = localStorage.getItem('tel_vr');
	
	document.getElementById('FIO').value = localStorage.getItem('FIO');
	document.getElementById('no_ist').value = localStorage.getItem('no_ist');
	document.getElementById('vozrast').value = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd').value = localStorage.getItem('data_rozhd');
	document.getElementById('diagnoz').value = localStorage.getItem('diagnoz');
	
	// Наименование СПК
	if (localStorage.getItem('naim_spk_ch')===null||
		localStorage.getItem('naim_spk_ch')===undefined||
		localStorage.getItem('naim_spk_ch')==='null'||
		localStorage.getItem('naim_spk_ch')==='undefined'||
		localStorage.getItem('naim_spk_ch')===''){
		localStorage.setItem('naim_spk','1');
	}
	if (localStorage.getItem('naim_spk')==='1'){
		document.getElementById('naim_spk_fmba').checked=true;
	}
	else if (localStorage.getItem('naim_spk')==='2'){
		document.getElementById('naim_spk_ospk').checked=true;
	}
	else if (localStorage.getItem('naim_spk')==='3'){
		document.getElementById('naim_spk_kam').checked=true;
	}
	
	// Назначение компонентов ztk
	if (localStorage.getItem('nazn_ztk')==='1'){
		document.getElementById('nazn_ztk_pl').checked=true;
	}
	else if (localStorage.getItem('nazn_ztk')==='2'){
		document.getElementById('nazn_ztk_ex').checked=true;
	}
	
	// Назначение компонентов nip
	if (localStorage.getItem('nazn_nip')==='1'){
		document.getElementById('nazn_nip_pl').checked=true;
	}
	else if (localStorage.getItem('nazn_nip')==='2'){
		document.getElementById('nazn_nip_ex').checked=true;
	}
	
	// Назначение компонентов zspk
	if (localStorage.getItem('nazn_zspk')==='1'){
		document.getElementById('nazn_zspk_zap').checked=true;
	}
	else if (localStorage.getItem('nazn_zspk')==='2'){
		document.getElementById('nazn_zspk_pl').checked=true;
	}
	else if (localStorage.getItem('nazn_zspk')==='3'){
		document.getElementById('nazn_zspk_ex').checked=true;
	}
	
	//Инд. подбор и фенотипирование
	if (localStorage.getItem('gemztker_podbor_ch')===null|| 
		localStorage.getItem('gemztker_podbor_ch')===undefined|| 
		localStorage.getItem('gemztker_podbor_ch')==='null'|| 
		localStorage.getItem('gemztker_podbor_ch')==='undefined'|| 
		localStorage.getItem('gemztker_podbor_ch')===''){
		localStorage.setItem('gemztker_podbor','0');
	}
	if (localStorage.getItem('gemztker_podbor')==='0'){
		document.getElementById('gemztker_podbor_0').checked=true;
	}
	else if (localStorage.getItem('gemztker_podbor')==='1'){
		document.getElementById('gemztker_podbor_fen').checked=true;
	}
	else if (localStorage.getItem('gemztker_podbor')==='2'){
		document.getElementById('gemztker_podbor_ind').checked=true;
	}
	
	//Наименование лаборатории
	if (localStorage.getItem('naim_lab_ch')===null|| localStorage.getItem('naim_lab_ch')===undefined|| localStorage.getItem('naim_lab_ch')==='null'|| localStorage.getItem('naim_lab_ch')==='undefined'|| localStorage.getItem('naim_lab_ch')===''){
		localStorage.setItem('naim_lab','1');
	}
	if (localStorage.getItem('naim_lab')==='1'){
		document.getElementById('naim_lab_msch32').checked=true;
	}
	else if (localStorage.getItem('naim_lab')==='2'){
		document.getElementById('naim_lab_spk_fmba_ekb').checked=true;
	}
		
	gem = 'rec_';
	gr_fen();
	
	for (j = 1; j < 9; j++) {
	gem = 'gem'+j+'_'; gr_fen();
	n=null;
	}
	
	gem = 'gemztker_';
	gr_fen();	
	gem = 'gemztkszp_';
	gr_fen();	
	gem = 'gemztktr_';
	gr_fen();	
	gem = 'gemnip_';
	gr_fen();		
	gem = null;
	
	//определение антител
	if (localStorage.getItem('isl_at_opisanie')===null||localStorage.getItem('isl_at_opisanie')==='null'){
		localStorage.setItem('isl_at_opisanie','');
	}
	document.getElementById('isl_at_opisanie').innerHTML = localStorage.getItem('isl_at_opisanie');
	if (localStorage.getItem('isl_at')===null||
		localStorage.getItem('isl_at')==='null'||
		localStorage.getItem('isl_at')===undefined||
		localStorage.getItem('isl_at')==='undefined'||
		localStorage.getItem('isl_at')===''){
		localStorage.setItem('isl_at','Не выявлены');
		document.getElementById('isl_at_n').checked=true;
		isl_at();
	}
	else if (localStorage.getItem('isl_at')==='Не выявлены'){
		document.getElementById('isl_at_n').checked=true;
		isl_at();
	}
	else if (localStorage.getItem('isl_at')==='Выявлены'){
		document.getElementById('isl_at_y').checked=true;
		isl_at();
	}
	
	document.getElementById('tr_anamn').innerHTML = localStorage.getItem('tr_anamn');
	document.getElementById('an_ind_podb').innerHTML = localStorage.getItem('an_ind_podb');
	document.getElementById('an_reakc').innerHTML = localStorage.getItem('an_reakc');
	document.getElementById('an_akush').innerHTML = localStorage.getItem('an_akush');
	document.getElementById('allergia').innerHTML = localStorage.getItem('allergia');
	
	switch(localStorage.getItem('otdel')){
	case '': break;
	case'реанимационное': 
		document.getElementById('otdel_rao').checked=true; break;
	case'инфекционное': 
		document.getElementById('otdel_io').checked=true; break;
	case'хирургическое': 
		document.getElementById('otdel_ho').checked=true; break;
	case'акушерское': 
		document.getElementById('otdel_ao').checked=true; break;
	case'терапевтическое': 
		document.getElementById('otdel_to').checked=true; break;
	case'детское': 
		document.getElementById('otdel_do').checked=true; break;
	}
	
	if (localStorage.getItem('gemztker_treb_kolich')===null||
		localStorage.getItem('gemztker_treb_kolich')===undefined||
		localStorage.getItem('gemztker_treb_kolichr')==='null'||
		localStorage.getItem('gemztker_treb_kolich')==='undefined'){
		localStorage.setItem('gemztker_treb_kolich', '');
	}
	
	if (localStorage.getItem('gemztkszp_treb_kolich')===null||
		localStorage.getItem('gemztkszp_treb_kolich')===undefined||
		localStorage.getItem('gemztkszp_treb_kolichr')==='null'||
		localStorage.getItem('gemztkszp_treb_kolich')==='undefined'){
		localStorage.setItem('gemztkszp_treb_kolich', '');
	}
	
	if (localStorage.getItem('gemztktr_treb_kolich')===null||
		localStorage.getItem('gemztktr_treb_kolich')===undefined||
		localStorage.getItem('gemztktr_treb_kolichr')==='null'||
		localStorage.getItem('gemztktr_treb_kolich')==='undefined'){
		localStorage.setItem('gemztktr_treb_kolich', '');
	}
	
	if (localStorage.getItem('gemnip_treb_kolich')===null||
		localStorage.getItem('gemnip_treb_kolich')===undefined||
		localStorage.getItem('gemnip_treb_kolichr')==='null'||
		localStorage.getItem('gemnip_treb_kolich')==='undefined'){
		localStorage.setItem('gemnip_treb_kolich', '');
	}
	
	switch(localStorage.getItem('gemnip_treb_kolich')){
	case '': break;
	case'1 доза': 
		document.getElementById('gemnip_treb_kolich_1').checked=true; break;
	case'2 дозы': 
		document.getElementById('gemnip_treb_kolich_2').checked=true; break;
	case'3 дозы': 
		document.getElementById('gemnip_treb_kolich_3').checked=true; break;
	case'4 дозы': 
		document.getElementById('gemnip_treb_kolich_4').checked=true; break;
	case'5 доз': 
		document.getElementById('gemnip_treb_kolich_5').checked=true; break;
	case'6 доз': 
		document.getElementById('gemnip_treb_kolich_6').checked=true; break;
	case'7 доз': 
		document.getElementById('gemnip_treb_kolich_7').checked=true; break;
	case'8 доз': 
		document.getElementById('gemnip_treb_kolich_8').checked=true; break;
	}
	
	
	switch(localStorage.getItem('gemztker_treb_kolich')){
	case '': break;
	case'1 доза': 
		document.getElementById('gemztker_treb_kolich_1').checked=true; break;
	case'2 дозы': 
		document.getElementById('gemztker_treb_kolich_2').checked=true; break;
	case'3 дозы': 
		document.getElementById('gemztker_treb_kolich_3').checked=true; break;
	case'4 дозы': 
		document.getElementById('gemztker_treb_kolich_4').checked=true; break;
	case'5 доз': 
		document.getElementById('gemztker_treb_kolich_5').checked=true; break;
	case'6 доз': 
		document.getElementById('gemztker_treb_kolich_6').checked=true; break;
	case'7 доз': 
		document.getElementById('gemztker_treb_kolich_7').checked=true; break;
	case'8 доз': 
		document.getElementById('gemztker_treb_kolich_8').checked=true; break;
	}
	
	switch(localStorage.getItem('gemztkszp_treb_kolich')){
	case '': break;
	case'1 доза': 
		document.getElementById('gemztkszp_treb_kolich_1').checked=true; break;
	case'2 дозы': 
		document.getElementById('gemztkszp_treb_kolich_2').checked=true; break;
	case'3 дозы': 
		document.getElementById('gemztkszp_treb_kolich_3').checked=true; break;
	case'4 дозы': 
		document.getElementById('gemztkszp_treb_kolich_4').checked=true; break;
	case'5 доз': 
		document.getElementById('gemztkszp_treb_kolich_5').checked=true; break;
	case'6 доз': 
		document.getElementById('gemztkszp_treb_kolich_6').checked=true; break;
	case'7 доз': 
		document.getElementById('gemztkszp_treb_kolich_7').checked=true; break;
	case'8 доз': 
		document.getElementById('gemztkszp_treb_kolich_8').checked=true; break;
	}
	
	switch(localStorage.getItem('gemztktr_treb_kolich')){
	case '': break;
	case'1 доза': 
		document.getElementById('gemztktr_treb_kolich_1').checked=true; break;
	case'2 дозы': 
		document.getElementById('gemztktr_treb_kolich_2').checked=true; break;
	case'3 дозы': 
		document.getElementById('gemztktr_treb_kolich_3').checked=true; break;
	case'4 дозы': 
		document.getElementById('gemztktr_treb_kolich_4').checked=true; break;
	case'5 доз': 
		document.getElementById('gemztktr_treb_kolich_5').checked=true; break;
	case'6 доз': 
		document.getElementById('gemztktr_treb_kolich_6').checked=true; break;
	case'7 доз': 
		document.getElementById('gemztktr_treb_kolich_7').checked=true; break;
	case'8 доз': 
		document.getElementById('gemztktr_treb_kolich_8').checked=true; break;
	}
	
////анализы///////
document.getElementById('RBC').value = localStorage.getItem('RBC');
document.getElementById('HGB').value = localStorage.getItem('HGB');
document.getElementById('HCT').value = localStorage.getItem('HCT');
document.getElementById('PLT').value = localStorage.getItem('PLT');
document.getElementById('VSK').value = localStorage.getItem('VSK');
document.getElementById('FIBR').value = localStorage.getItem('FIBR');
document.getElementById('PTI').value = localStorage.getItem('PTI');
document.getElementById('A4TV').value = localStorage.getItem('A4TV');
document.getElementById('MNO').value = localStorage.getItem('MNO');	
	
////пробы на совместимость////////
switch(localStorage.getItem('proby_sovm')){
	case null: document.getElementById('proby_sovm_pol').checked=true; document.getElementById('b_ind_sovm_info').style.display='none'; document.getElementById('b_pol').style.display='inline';
	document.getElementById('b_zhel').style.display='none';
	localStorage.setItem('proby_sovm', 'poliglukin'); break;
	case'zhelatin': document.getElementById('proby_sovm_zhel').checked=true; document.getElementById('b_ind_sovm_info').style.display='none'; document.getElementById('b_pol').style.display='none';
	document.getElementById('b_zhel').style.display='inline'; break;
	case'poliglukin': document.getElementById('proby_sovm_pol').checked=true; document.getElementById('b_ind_sovm_info').style.display='none'; document.getElementById('b_pol').style.display='inline';
	document.getElementById('b_zhel').style.display='none';break;
	case'individual': document.getElementById('proby_sovm_ind').checked=true; document.getElementById('b_ind_sovm_info').style.display='inline'; document.getElementById('b_pol').style.display='none';
	document.getElementById('b_zhel').style.display='none'; break;
}

document.getElementById('ind_podb_organiz').value = localStorage.getItem('ind_podb_organiz');
document.getElementById('ind_podb_otv_lico').value = localStorage.getItem('ind_podb_otv_lico');
document.getElementById('ind_podb_dat_issled').value = localStorage.getItem('ind_podb_dat_issled');
	
z_dis_gemztker();
z_dis_gemztkszp();
z_dis_gemztktr();
z_dis_gemnip();
nabl();
pr_oslozh();
reakt_start();
control_dates();
vr_ob();
//document.getElementById('321').innerHTML = localStorage.getItem('vr1_v_itog');	
}

function isl_at(){
	"use strict";
		if (document.getElementById('isl_at_n').checked===true){
		document.getElementById('isl_at_opisanie').style.borderColor = '#A7A7A7';
		document.getElementById('isl_at_opisanie').disabled=true;
		document.getElementById('isl_at_opisanie').placeholder=' ';
		}
		else if (document.getElementById('isl_at_y').checked===true){
		document.getElementById('isl_at_opisanie').style.borderColor='';
		document.getElementById('isl_at_opisanie').disabled=false;
		document.getElementById('isl_at_opisanie').placeholder='Краткое описание';
	}
}
	
function gem_vkl(){// Вкл/откл полученных компонентов
		if (localStorage.getItem('gem_vkl')===null|| localStorage.getItem('gem_vkl')===undefined|| localStorage.getItem('gem_vkl')==='null'|| localStorage.getItem('gem_vkl')==='undefined'|| localStorage.getItem('gem_vkl')===''){
		document.getElementById('gem_vkl').checked=false;
		document.getElementById('gem-1').style.display='none';
		document.getElementById('gem-2').style.display='none';
		document.getElementById('ss_ztk_span').style.marginTop='';
			
		}
		else if (localStorage.getItem('gem_vkl')==='vkl'){
			document.getElementById('gem_vkl').checked=true;
			document.getElementById('gem-1').style.display='inline';
			document.getElementById('gem-2').style.display='inline';
			document.getElementById('ss_ztk_span').style.marginTop='93px';
		}
	}

////////// Наблюдение /////////
function nabl(){
	"use strict";
var w, nabl_cvet, nabl_cvet_1, nabl_cvet_2, nabl_cvet_3, nabl_cvet_3_txt, nabl_diur, nabl_t, nabl_4ss, nabl_ad, nabl_cvet_itog;
for (i=0; i<4; i++){ 
nabl_diur = 'nabl_diur_' + i; 
nabl_t = 'nabl_t_' + i;
nabl_4ss = 'nabl_4ss_' + i;
nabl_ad = 'nabl_ad_' + i;
nabl_cvet = 'nabl_cvet_' + i;
nabl_cvet_1 = 'nabl_cvet_1_' + i;
nabl_cvet_2 = 'nabl_cvet_2_' + i;
nabl_cvet_3 = 'nabl_cvet_3_' + i;
nabl_cvet_3_txt = 'nabl_cvet_3_' + i + '_txt';
nabl_cvet_itog = 'nabl_cvet_itog_' + i;
	
document.getElementById(nabl_diur).value = localStorage.getItem(nabl_diur);	
document.getElementById(nabl_t).value = localStorage.getItem(nabl_t);	
document.getElementById(nabl_4ss).value = localStorage.getItem(nabl_4ss);	
document.getElementById(nabl_ad).value = localStorage.getItem(nabl_ad);
	
if (localStorage.getItem(nabl_cvet)===null || localStorage.getItem(nabl_cvet)===undefined || localStorage.getItem(nabl_cvet)==='null' || localStorage.getItem(nabl_cvet)==='undefined' ){
	document.getElementById(nabl_cvet_3_txt).value = localStorage.getItem(nabl_cvet_3_txt);
	document.getElementById(nabl_cvet_3_txt).style.background = '#F1F2F2';
	document.getElementById(nabl_cvet_3_txt).style.borderColor = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).style.color = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).disabled=true;
	localStorage.setItem(nabl_cvet_itog, '');
}
if (localStorage.getItem(nabl_cvet)==='Светло-жёлтая'){
	document.getElementById(nabl_cvet_1).checked=true;
	document.getElementById(nabl_cvet_3_txt).value = localStorage.getItem(nabl_cvet_3_txt);
	document.getElementById(nabl_cvet_3_txt).style.background = '#F1F2F2';
	document.getElementById(nabl_cvet_3_txt).style.borderColor = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).style.color = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).disabled=true;
	w=localStorage.getItem(nabl_cvet);
	localStorage.setItem(nabl_cvet_itog, w);
}
if (localStorage.getItem(nabl_cvet)==='Тёмно-жёлтая'){
	document.getElementById(nabl_cvet_2).checked=true;
	document.getElementById(nabl_cvet_3_txt).value = localStorage.getItem(nabl_cvet_3_txt);
	document.getElementById(nabl_cvet_3_txt).style.background = '#F1F2F2';
	document.getElementById(nabl_cvet_3_txt).style.borderColor = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).style.color = '#A7A7A7';
	document.getElementById(nabl_cvet_3_txt).disabled=true;
	w=localStorage.getItem(nabl_cvet);
	localStorage.setItem(nabl_cvet_itog, w);
}
if (localStorage.getItem(nabl_cvet)==='Другой'){
	document.getElementById(nabl_cvet_3).checked=true;
	document.getElementById(nabl_cvet_3_txt).value = localStorage.getItem(nabl_cvet_3_txt);
	document.getElementById(nabl_cvet_3_txt).style.background = '';
	document.getElementById(nabl_cvet_3_txt).style.borderColor = '';
	document.getElementById(nabl_cvet_3_txt).style.color = '';
	document.getElementById(nabl_cvet_3_txt).disabled=false;
	if (localStorage.getItem(nabl_cvet_3_txt)===null || localStorage.getItem(nabl_cvet_3_txt)==='null' || localStorage.getItem(nabl_cvet_3_txt)==='')
	{w=' ';}
	else {w=localStorage.getItem(nabl_cvet_3_txt);}
	localStorage.setItem(nabl_cvet_itog, w);
  }
}
nabl_cvet=null; nabl_cvet_1=null; nabl_cvet_2=null; nabl_cvet_3=null; nabl_cvet_3_txt=null; nabl_diur=null; nabl_t, nabl_4ss=null; nabl_ad=null; nabl_cvet_itog=null; w=null; i=null;
}

/////////////////////
function pr_oslozh(){
	"use strict";
  if (localStorage.getItem('pr_oslozh')===null|| localStorage.getItem('pr_oslozh')==='null'|| localStorage.getItem('pr_oslozh')===undefined|| localStorage.getItem('pr_oslozh')==='undefined'|| localStorage.getItem('pr_oslozh')===''){
  localStorage.setItem('pr_oslozh','Не было');
  }
	if (localStorage.getItem('pr_oslozh')==='Не было'){
	document.getElementById('pr_oslozh_n').checked=true;
	document.getElementById('pr_oslozh_opisanie').innerHTML = localStorage.getItem('pr_oslozh_opisanie');
	document.getElementById('pr_oslozh_opisanie').style.background = '#F1F2F2';
	document.getElementById('pr_oslozh_opisanie').style.borderColor = '#A7A7A7';
	document.getElementById('pr_oslozh_opisanie').style.color = '#A7A7A7';
	document.getElementById('pr_oslozh_opisanie').disabled=true;	
  }
	if (localStorage.getItem('pr_oslozh')==='Были'){
	document.getElementById('pr_oslozh_y').checked=true;
	document.getElementById('pr_oslozh_opisanie').innerHTML = localStorage.getItem('pr_oslozh_opisanie');
	document.getElementById('pr_oslozh_opisanie').style.background = '';
	document.getElementById('pr_oslozh_opisanie').style.borderColor = '';
	document.getElementById('pr_oslozh_opisanie').style.color = '';
	document.getElementById('pr_oslozh_opisanie').disabled=false;	
  }
}

//////// ЗАЯВКИ ///////////////////
function start_zajavka(){
	"use strict";
	document.getElementById('otdel').innerHTML = localStorage.getItem('otdel');
	document.getElementById('FIO').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('vozrast').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('rec_grup').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen').innerHTML = localStorage.getItem('rec_fen');
	
////// показания /////
	
////анализы///////
document.getElementById('date_analiz').value = localStorage.getItem('date_analiz');
document.getElementById('RBC').value = localStorage.getItem('RBC');
document.getElementById('HGB').value = localStorage.getItem('HGB');
document.getElementById('HCT').value = localStorage.getItem('HCT');
document.getElementById('PLT').value = localStorage.getItem('PLT');
document.getElementById('VSK').value = localStorage.getItem('VSK');
document.getElementById('FIBR').value = localStorage.getItem('FIBR');
document.getElementById('PTI').value = localStorage.getItem('PTI');
document.getElementById('A4TV').value = localStorage.getItem('A4TV');
document.getElementById('MNO').value = localStorage.getItem('MNO');
}

////////////// ФУНКЦИИ //////////////////////////

////// группа-резус-фенотип//////////
function gr_rz_fen(){
	"use strict";
	fen1 = gem + 'fen1';
	fen2 = gem + 'fen2';
	fen_out = gem + 'fen_out';
	fen_out1 = gem + 'fen_out1';
	fen_out2 = gem + 'fen_out2';
	fen_height = gem + 'fen_height';
	grup_rez = gem + 'grup_rez';
	grup_rez_11 = gem + 'grup_rez_11';
	grup_rez_10 = gem + 'grup_rez_10';
	grup_rez_21 = gem + 'grup_rez_21';
	grup_rez_20 = gem + 'grup_rez_20';
	grup_rez_31 = gem + 'grup_rez_31';
	grup_rez_30 = gem + 'grup_rez_30';
	grup_rez_41 = gem + 'grup_rez_41';
	grup_rez_40 = gem + 'grup_rez_40';
	C1 = gem + 'fen_C1';
	c0 = gem + 'fen_c0';
	D = gem + 'fen_D';
	Dw = gem + 'fen_Dw';
	Cw = gem + 'fen_Cw';
	E1 = gem + 'fen_E1';
	e0 = gem + 'fen_e0';
	K1 = gem + 'fen_K1';
	k0 = gem + 'fen_k0';
	C1_min = gem + 'fen_C1-';
	C1_pl = gem + 'fen_C1+';
	c0_min = gem + 'fen_c0-';
	c0_pl = gem + 'fen_c0+';
	D_min = gem + 'fen_D-';
	D_pl = gem + 'fen_D+';
	Dw_pl = gem + 'fen_Dw+';
	Cw_min = gem + 'fen_Cw-';
	Cw_pl = gem + 'fen_Cw+';
	E1_min = gem + 'fen_E1-';
	E1_pl = gem + 'fen_E1+';
	e0_min = gem + 'fen_e0-';
	e0_pl = gem + 'fen_e0+';
	K1_min = gem + 'fen_K1-';
	K1_pl = gem + 'fen_K1+';
	k0_min = gem + 'fen_k0-';
	k0_pl = gem + 'fen_k0+';
	
	switch(localStorage.getItem(grup_rez)){
		case'': break;
		case'11': document.getElementById(grup_rez_11).checked=true; break;
		case'10': document.getElementById(grup_rez_10).checked=true; break;
		case'21': document.getElementById(grup_rez_21).checked=true; break;
		case'20': document.getElementById(grup_rez_20).checked=true; break;
		case'31': document.getElementById(grup_rez_31).checked=true; break;
		case'30': document.getElementById(grup_rez_30).checked=true; break;
		case'41': document.getElementById(grup_rez_41).checked=true; break;
		case'40': document.getElementById(grup_rez_40).checked=true; break;
	}
	switch(localStorage.getItem(C1)){
		case'': document.getElementById(C1_min).checked=false;
	document.getElementById(C1_pl).checked=false; break;
		case'+': document.getElementById(C1_min).checked=false;
	document.getElementById(C1_pl).checked=true; break;
		case'-': document.getElementById(C1_pl).checked=false;
	document.getElementById(C1_min).checked=true; break;
	}
	switch(localStorage.getItem(c0)){
		case'':  document.getElementById(c0_min).checked=false;
	document.getElementById(c0_pl).checked=false; break;
		case'+': document.getElementById(c0_min).checked=false;
	document.getElementById(c0_pl).checked=true; break;
		case'-': document.getElementById(c0_pl).checked=false;
	document.getElementById(c0_min).checked=true; break;
	}
	switch(localStorage.getItem(D)){
		case'':  document.getElementById(D_min).checked=false;
	document.getElementById(D_pl).checked=false; break;
		case'+': document.getElementById(D_min).checked=false;
	document.getElementById(D_pl).checked=true; break;
		case'-': document.getElementById(D_pl).checked=false;
	document.getElementById(D_min).checked=true; break;
    }
	switch(localStorage.getItem(Dw)){
		case'':  document.getElementById(Dw_pl).checked=false; break;
		case'+': document.getElementById(Dw_pl).checked=true; break;
	}
	switch(localStorage.getItem(Cw)){
		case'':  document.getElementById(Cw_min).checked=false;
	document.getElementById(Cw_pl).checked=false; break;
		case'+': document.getElementById(Cw_min).checked=false;
	document.getElementById(Cw_pl).checked=true; break;
		case'-': document.getElementById(Cw_pl).checked=false;
	document.getElementById(Cw_min).checked=true; break;
	}
	switch(localStorage.getItem(E1)){
		case'':  document.getElementById(E1_min).checked=false;
	document.getElementById(E1_pl).checked=false; break;
		case'+': document.getElementById(E1_min).checked=false;
	document.getElementById(E1_pl).checked=true; break;
		case'-': document.getElementById(E1_pl).checked=false;
	document.getElementById(E1_min).checked=true; break;
	}
	switch(localStorage.getItem(e0)){
		case'':  document.getElementById(e0_min).checked=false;
	document.getElementById(e0_pl).checked=false; break;
		case'+': document.getElementById(e0_min).checked=false;
	document.getElementById(e0_pl).checked=true; break;
		case'-': document.getElementById(e0_pl).checked=false;
	document.getElementById(e0_min).checked=true; break;
	}
	switch(localStorage.getItem(K1)){
		case'':  document.getElementById(K1_min).checked=false;
	document.getElementById(K1_pl).checked=false; break;
		case'+': document.getElementById(K1_min).checked=false;
	document.getElementById(K1_pl).checked=true; break;
		case'-': document.getElementById(K1_pl).checked=false;
	document.getElementById(K1_min).checked=true; break;
	}
	switch(localStorage.getItem(k0)){
		case'':  document.getElementById(k0_min).checked=false;
	document.getElementById(k0_pl).checked=false; break;
		case'+': document.getElementById(k0_min).checked=false;
	document.getElementById(k0_pl).checked=true; break;
		case'-': document.getElementById(k0_pl).checked=false;
	document.getElementById(k0_min).checked=true; break;
	}
	
	document.getElementById(fen_out1).innerHTML = localStorage.getItem(fen1);
	document.getElementById(fen_out2).innerHTML = localStorage.getItem(fen2);
	
	if (localStorage.getItem(C1)===null&&
		localStorage.getItem(c0)===null&&
		localStorage.getItem(D)===null&&
		localStorage.getItem(Dw)===null&&
		localStorage.getItem(Cw)===null&&
		localStorage.getItem(E1)===null&&
		localStorage.getItem(K1)===null&&
		localStorage.getItem(k0)===null || 
		localStorage.getItem(C1)==='null'&&
		localStorage.getItem(c0)==='null'&&
		localStorage.getItem(D)==='null'&&
		localStorage.getItem(Dw)==='null'&&
		localStorage.getItem(Cw)==='null'&&
		localStorage.getItem(E1)==='null'&&
		localStorage.getItem(K1)==='null'&&
		localStorage.getItem(k0)==='null'){
		document.getElementById(fen_out).style.display='none';}
	else {document.getElementById(fen_out).style.display='';}
	
	if(localStorage.getItem(Cw)===null||localStorage.getItem(Cw)==='null'){
		document.getElementById(fen_height).style.height='10px';
	}
	if(localStorage.getItem(Dw)===null||localStorage.getItem(Dw)===null){
		document.getElementById(fen_height).style.height='10px';
	}
	
	if (localStorage.getItem(Cw)!==null && localStorage.getItem(Cw)!=='null'){
		document.getElementById(fen_height).style.height='5px';
	}
	if (localStorage.getItem(Dw)!==null && localStorage.getItem(Dw)!=='null'){
		document.getElementById(fen_height).style.height='5px';
	}
	
	fen_out1=null; fen_out2=null; fen1=null; fen2=null; fen_height=null;
	Cw=null; C1=null; c0=null; D=null; Dw=null; E1=null; e0=null; K1=null; k0=null; 
	grup_rez=null; grup_rez_11=null; grup_rez_10=null; grup_rez_21=null; grup_rez_20=null; grup_rez_31=null; grup_rez_30=null; grup_rez_41=null; grup_rez_40=null;
    C1_min=null; C1_pl=null; c0_min=null; c0_pl=null; D_min=null; D_pl=null; Dw_pl=null; Cw_min=null; Cw_pl=null; E1_min=null; E1_pl=null; e0_min=null; e0_pl=null; K1_min=null; K1_pl=null; k0_min=null; k0_pl=null;
}

function gem_data(){
	"use strict";
	v = gem + 'v';
	ser = gem + 'ser';
	kod_don = gem + 'kod_don';
	dat_zagotov = gem + 'dat_zagotov';
	godn = gem + 'godn';
	proizv = gem + 'proizv';
	proizv_ch = gem + 'proizv_ch';
	proizv_fmba = gem + 'proizv_fmba';
	proizv_ospk = gem + 'proizv_ospk';
	proizv_kam = gem + 'proizv_kam';
	
	document.getElementById(v).value = localStorage.getItem(v);
	document.getElementById(ser).value = localStorage.getItem(ser);
	document.getElementById(kod_don).value = localStorage.getItem(kod_don);
	document.getElementById(dat_zagotov).value = localStorage.getItem(dat_zagotov);
	document.getElementById(godn).value = localStorage.getItem(godn);
	
	if (localStorage.getItem(proizv_ch)===null || localStorage.getItem(proizv_ch)==='null'){
		localStorage.setItem(proizv, 'ФГБУЗ "Станция переливания крови ФМБА России в г. Екатеринбурге"');
	}
	switch(localStorage.getItem(proizv)){		
	case 'null': 
			document.getElementById(proizv_fmba).checked=false;
			document.getElementById(proizv_ospk).checked=false;
			document.getElementById(proizv_kam).checked=false; 
			break;
	case null: 
			document.getElementById(proizv_fmba).checked=false;
			document.getElementById(proizv_ospk).checked=false;
			document.getElementById(proizv_kam).checked=false; 
			break;
			
	case'ФГБУЗ "Станция переливания крови ФМБА России в г. Екатеринбурге"': 
			document.getElementById(proizv_fmba).checked=true; break;
			
	case'ГБУЗ СО "Областная станция переливания крови" г.Екатеринбург': 
			document.getElementById(proizv_ospk).checked=true; break;
			
	case'"Обособленное структурное подразделение №1" г. Каменск-Уральский': 
			document.getElementById(proizv_kam).checked=true; break;
	}
	v=null;
	ser=null;
	kod_don=null;
	dat_zagotov=null;
	godn=null; 
	proizv=null;
	proizv_fmba=null; 
	proizv_ospk=null; 
	proizv_kam=null;
}

function knopka_bl(){
	"use strict";
	var e,p,t,o;
	
	if (localStorage.getItem('oglavl')==='ztk'){
		o='+';
	}
	else {o='-';}
	
	if (localStorage.getItem('gemztker_naim_glav')===null||
		localStorage.getItem('gemztker_naim_glav')===undefined||
		localStorage.getItem('gemztker_naim_glav')==='null'||
		localStorage.getItem('gemztker_naim_glav')==='undefined'||
		localStorage.getItem('gemztker_naim_glav')===''){
		e='-';
	}
	else {e='+';}
	
	if (localStorage.getItem('gemztkszp_naim_glav')===null||
		localStorage.getItem('gemztkszp_naim_glav')===undefined||
		localStorage.getItem('gemztkszp_naim_glav')==='null'||
		localStorage.getItem('gemztkszp_naim_glav')==='undefined'||
		localStorage.getItem('gemztkszp_naim_glav')===''){
		p='-';
	}
	else {p='+';}
	
	if (localStorage.getItem('gemztktr_naim_glav')===null||
		localStorage.getItem('gemztktr_naim_glav')===undefined||
		localStorage.getItem('gemztktr_naim_glav')==='null'||
		localStorage.getItem('gemztktr_naim_glav')==='undefined'||
		localStorage.getItem('gemztktr_naim_glav')===''){
		t='-';
	}
	else {t='+';}
	
	if (e==='-'&&
		p==='-'&&
		t==='-'&&
	    o==='+'){
		document.getElementById('knopka_seagreen_glav3').innerHTML='<span style="color: #00FFF3;font-weight:500;font-size:18px;">Выберите компоненты крови для заявки.</span>';
	}
	else {
		document.getElementById('knopka_seagreen_glav3').innerHTML='<a href="protokol_transf_blank.htm" class="knopka_seagreen2" target="_blank">Заполнить бланки</a>';
	}
	e=null;p=null;t=null;
}

function podp_vr(){
	"use strict";

	if (document.getElementById('pdp1').checked===true){
		document.getElementById('podp_vr').value='Петров Александр Николаевич';
		localStorage.setItem('podp_vr','Петров Александр Николаевич');
		document.getElementById('podp_vr').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr').style.fontWeight = '700';
		document.getElementById('podp_vr').style.fontSize = '16px';
		document.getElementById('podp_vr').disabled=true;
	}
	else if (document.getElementById('pdp2').checked===true){
		document.getElementById('podp_vr').value='Ларин Александр Владимирович';
		localStorage.setItem('podp_vr','Ларин Александр Владимирович');
		document.getElementById('podp_vr').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr').style.fontWeight = '700';
		document.getElementById('podp_vr').style.fontSize = '16px';
		document.getElementById('podp_vr').disabled=true;
	}
	else if (document.getElementById('pdp3').checked===true){
		document.getElementById('podp_vr').value='Костюк Виктор Адамович';
		localStorage.setItem('podp_vr','Костюк Виктор Адамович');
		document.getElementById('podp_vr').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr').style.fontWeight = '700';
		document.getElementById('podp_vr').style.fontSize = '16px';
		document.getElementById('podp_vr').disabled=true;
	}
	else if (document.getElementById('pdp4').checked===true){
		document.getElementById('podp_vr').value='Черкашин Роман Сергеевич';
		localStorage.setItem('podp_vr','Черкашин Роман Сергеевич');
		document.getElementById('podp_vr').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr').style.fontWeight = '700';
		document.getElementById('podp_vr').style.fontSize = '16px';
		document.getElementById('podp_vr').disabled=true;
	}
	else if (document.getElementById('pdp5').checked===true){
		document.getElementById('podp_vr').value='Гомзиков Сергей Николаевич';
		localStorage.setItem('podp_vr','Гомзиков Сергей Николаевич');
		document.getElementById('podp_vr').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr').style.fontWeight = '700';
		document.getElementById('podp_vr').style.fontSize = '16px';
		document.getElementById('podp_vr').disabled=true;
	}
	else {
		document.getElementById('podp_vr').value='';
		localStorage.setItem('podp_vr','');
		document.getElementById('podp_vr').style.borderColor = '';
		document.getElementById('podp_vr').style.fontWeight = '';
		document.getElementById('podp_vr').style.fontSize = '';
		document.getElementById('podp_vr').disabled=false;
	}
}

function podp_vr_lab(){
	"use strict";

	if (document.getElementById('pdp_lab1').checked===true){
		document.getElementById('podp_vr_lab').value='Чуева Татьяна Алексеевна';
		localStorage.setItem('podp_vr_lab','Чуева Татьяна Алексеевна');
		document.getElementById('podp_vr_lab').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr_lab').style.fontWeight = '700';
		document.getElementById('podp_vr_lab').style.fontSize = '16px';
		document.getElementById('podp_vr_lab').disabled=true;
	}
	else if (document.getElementById('pdp_lab2').checked===true){
		document.getElementById('podp_vr_lab').value='Леонтьева Наталья Васильевна';
		localStorage.setItem('podp_vr_lab','Леонтьева Наталья Васильевна');
		document.getElementById('podp_vr_lab').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr_lab').style.fontWeight = '700';
		document.getElementById('podp_vr_lab').style.fontSize = '16px';
		document.getElementById('podp_vr_lab').disabled=true;
	}
	else if (document.getElementById('pdp_lab3').checked===true){
		document.getElementById('podp_vr_lab').value='Шехурина Наталья Ивановна';
		localStorage.setItem('podp_vr_lab','Шехурина Наталья Ивановна');
		document.getElementById('podp_vr_lab').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr_lab').style.fontWeight = '700';
		document.getElementById('podp_vr_lab').style.fontSize = '16px';
		document.getElementById('podp_vr_lab').disabled=true;
	}
	else if (document.getElementById('pdp_lab4').checked===true){
		document.getElementById('podp_vr_lab').value='Петров Александр Николаевич';
		localStorage.setItem('podp_vr_lab','Петров Александр Николаевич');
		document.getElementById('podp_vr_lab').style.borderColor = '#F1F2F2';
		document.getElementById('podp_vr_lab').style.fontWeight = '700';
		document.getElementById('podp_vr_lab').style.fontSize = '16px';
		document.getElementById('podp_vr_lab').disabled=true;
	}
	else {
		document.getElementById('podp_vr_lab').value='';
		localStorage.setItem('podp_vr_lab','');
		document.getElementById('podp_vr_lab').style.borderColor = '';
		document.getElementById('podp_vr_lab').style.fontWeight = '';
		document.getElementById('podp_vr_lab').style.fontSize = '';
		document.getElementById('podp_vr_lab').disabled=false;
	}
}

function reakt_start(){
	"use strict";
	
document.getElementById('col_a_ser').value = localStorage.getItem('col_a_ser');
document.getElementById('col_a_godn').value = localStorage.getItem('col_a_godn');
document.getElementById('col_a_proizv').value = localStorage.getItem('col_a_proizv');
document.getElementById('col_date_vskr_fl').value = localStorage.getItem('col_date_vskr_fl');
	
document.getElementById('col_b_ser').value = localStorage.getItem('col_b_ser');
document.getElementById('col_b_godn').value = localStorage.getItem('col_b_godn');
document.getElementById('col_b_proizv').value = localStorage.getItem('col_b_proizv');
	
document.getElementById('col_ab_ser').value = localStorage.getItem('col_ab_ser');
document.getElementById('col_ab_godn').value = localStorage.getItem('col_ab_godn');
document.getElementById('col_ab_proizv').value = localStorage.getItem('col_ab_proizv');
	
document.getElementById('col_d_ser').value = localStorage.getItem('col_d_ser');
document.getElementById('col_d_godn').value = localStorage.getItem('col_d_godn');
document.getElementById('col_d_proizv').value = localStorage.getItem('col_d_proizv');
	
document.getElementById('pol_ser').value = localStorage.getItem('pol_ser');
document.getElementById('pol_godn').value = localStorage.getItem('pol_godn');
document.getElementById('pol_proizv').value = localStorage.getItem('pol_proizv');
	
document.getElementById('zhel_ser').value = localStorage.getItem('zhel_ser');
document.getElementById('zhel_godn').value = localStorage.getItem('zhel_godn');
document.getElementById('zhel_proizv').value = localStorage.getItem('zhel_proizv');		
}

function control_dates(){
	"use strict";

str=document.getElementById('date').value; id='date';
correct_date2_start(); date_transf_start();
str=document.getElementById('date').value;
localStorage.setItem('date', str);
	
str=document.getElementById('col_a_godn').value; id='col_a_godn';
correct_date2_start(); correct_date7_start();
str=document.getElementById('col_b_godn').value; id='col_b_godn';
correct_date2_start(); correct_date7_start();
str=document.getElementById('col_ab_godn').value; id='col_ab_godn';
correct_date2_start(); correct_date7_start();
str=document.getElementById('col_d_godn').value; id='col_d_godn';
correct_date2_start(); correct_date7_start();
str=document.getElementById('pol_godn').value; id='pol_godn';
correct_date2_start(); correct_date7_start();
str=document.getElementById('zhel_godn').value; id='zhel_godn';
correct_date2_start(); correct_date7_start();
	
	
str=document.getElementById('col_date_vskr_fl').value; id='col_date_vskr_fl';
correct_date2_start(); correct_date8_start();
		
str=document.getElementById('gem1_dat_zagotov').value; id='gem1_dat_zagotov';	
correct_date2_start(); correct_date4_start();	
str=document.getElementById('gem2_dat_zagotov').value; id='gem2_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem3_dat_zagotov').value; id='gem3_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem4_dat_zagotov').value; id='gem4_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem5_dat_zagotov').value; id='gem5_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem6_dat_zagotov').value; id='gem6_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem7_dat_zagotov').value; id='gem7_dat_zagotov';	
correct_date2_start(); correct_date4_start();
str=document.getElementById('gem8_dat_zagotov').value; id='gem8_dat_zagotov';	
correct_date2_start(); correct_date4_start();		
		
str=document.getElementById('gem1_godn').value; id='gem1_godn';		
correct_date2_start(); correct_date5_start();	
str=document.getElementById('gem2_godn').value; id='gem2_godn';		
correct_date2_start(); correct_date5_start();		
str=document.getElementById('gem3_godn').value; id='gem3_godn';		
correct_date2_start(); correct_date5_start();			
str=document.getElementById('gem4_godn').value; id='gem4_godn';		
correct_date2_start(); correct_date5_start();			
str=document.getElementById('gem5_godn').value; id='gem5_godn';		
correct_date2_start(); correct_date5_start();			
str=document.getElementById('gem6_godn').value; id='gem6_godn';		
correct_date2_start(); correct_date5_start();			
str=document.getElementById('gem7_godn').value; id='gem7_godn';		
correct_date2_start(); correct_date5_start();			
str=document.getElementById('gem8_godn').value; id='gem8_godn';		
correct_date2_start(); correct_date5_start();	
	
//str=localStorage.getItem('data_rozhd'); id='data_rozhd';	
//correct_date2_start(); data_rozhd_start();	
	
//str=document.getElementById('date_ztk').value; id='date_ztk';	
//correct_date2_start(); date_transf_start();	
//str=document.getElementById('date_zspk').value; id='date_zspk';	
//correct_date2_start(); date_transf_start();	
//str=document.getElementById('date_nl').value; id='date_nl';	
//correct_date2_start(); date_transf_start();	
//str=document.getElementById('date_nip').value; id='date_nip';	
//correct_date2_start(); date_transf_start();

//str=document.getElementById('zhel_godn').value; id='zhel_godn';
//correct_date7_start();
//str=document.getElementById('kumbs_godn').value; id='kumbs_godn';
//correct_date7_start();
}

function check_session(){
	"use strict";	
if (sessionStorage.getItem('check_session')===''|| 
	sessionStorage.getItem('check_session')===null||
	sessionStorage.getItem('check_session')==='null'||
	sessionStorage.getItem('check_session')===undefined||
	sessionStorage.getItem('check_session')==='undefined'||
	sessionStorage.getItem('check_session')===NaN||
	sessionStorage.getItem('check_session')==='NaN'){
	sessionStorage.setItem('check_session', '1');
	x='gem_vkl';DS();
	x='oglavl';DS();
	x='date';DS(); x='date_ztk';DS(); x='date_zspk';DS(); x='date_nl';DS();
	x='date_nip';DS(); x='naim_spk';DS();  x='naim_lab';DS();
	x='nazn_ztk';DS(); x='nazn_nip';DS(); x='nazn_zspk';DS();
	x='otdel';DS();
	x='podp_vr';DS(); x='pdp';DS();  x='tel_vr';DS();
	x='podp_vr_lab';DS(); x='pdp_lab';DS();
	x='FIO';DS(); x='no_ist';DS(); x='data_rozhd';DS(); x='vozrast';DS();
	x='rec_grup_rez';DS(); x='rec_fen_C1';DS(); x='rec_fen_c0';DS(); x='rec_fen_Cw';DS(); x='rec_fen_D';DS(); x='rec_fen_Dw';DS(); x='rec_fen_E1';DS(); x='rec_fen_e0';DS(); x='rec_fen_K1';DS(); x='rec_fen_k0';DS();
	x='isl_at';DS();
	x='tr_anamn';DS(); x='an_ind_podb';DS(); x='an_reakc';DS(); x='an_akush';DS(); x='allergia';DS();
	x='pokaz_ob_ock';DS(); x='pokaz_ob_ock_inptxt';DS(); x='pokaz_ob_prod_krovotech';DS();
	x='pokaz_er_anemia';DS(); x='pokaz_er_vosp_kolich';DS(); x='pokaz_er_hbht';DS(); x='pokaz_er_hb_inptxt';DS(); x='pokaz_er_ht_inptxt';DS(); x='pokaz_er_drugie';DS(); x='pokaz_er_drugie_textarea';DS();
	x='pokaz_szp_deficit_fakt';DS(); x='pokaz_szp_peredoz';DS(); x='pokaz_szp_plazmaferez';DS(); 
	x='pokaz_szp_drugie';DS(); x='pokaz_szp_drugie_textarea';DS(); 
	x='pokaz_tr';DS(); x='pokaz_tr_drugie';DS(); x='pokaz_tr_drugie_textarea';DS(); 
	x='date_analiz';DS(); 
	x='RBC';DS(); x='FIBR';DS(); x='HGB';DS(); x='PTI';DS(); x='HCT';DS(); x='A4TV';DS(); x='PLT';DS(); x='MNO';DS(); x='VSK';DS();
	x='proby_sovm';DS();
	x='ind_podb_organiz';DS(); x='ind_podb_otv_lico';DS(); x='ind_podb_dat_issled';DS();
	x='nabl_ad_0';DS();
	x='nabl_4ss_0';DS();
	x='nabl_t_0';DS();
	x='nabl_diur_0';DS();
	x='nabl_cvet_0';DS();
	x='nabl_cvet_3_0_txt';DS();
	x='nabl_ad_1';DS();
	x='nabl_4ss_1';DS();
	x='nabl_t_1';DS();
	x='nabl_diur_1';DS();
	x='nabl_cvet_1';DS();
	x='nabl_cvet_3_1_txt';DS();
	x='nabl_ad_2';DS();
	x='nabl_4ss_2';DS();
	x='nabl_t_2';DS();
	x='nabl_diur_2';DS();
	x='nabl_cvet_2';DS();
	x='nabl_cvet_3_2_txt';DS();
	x='nabl_ad_3';DS();
	x='nabl_4ss_3';DS();
	x='nabl_t_3';DS();
	x='nabl_diur_3';DS();
	x='nabl_cvet_3';DS();
	x='nabl_cvet_3_3_txt';DS();
	x='pr_oslozh';DS();
	x='pr_oslozh_opisanie';DS();
	x='diagnoz';DS();
	gemnip_remove();
	gemztker_remove();
	gemztkszp_remove();
	gemztktr_remove();
	n=1; gem_remove();
	n=2; gem_remove();
	n=3; gem_remove();
	n=4; gem_remove();
	n=5; gem_remove();
	n=6; gem_remove();
	n=7; gem_remove();
	n=8; gem_remove();
	n=null;	
	//x='**';DS();
}
}

var x;
function DS(){
	"use strict";
	localStorage.removeItem(x);
	x=null;
}

function gemnip_remove(){
	"use strict";
	x='gemnip_naim_glav';DS();
	x='gemnip_naim_er_otmytye_8_razm_i_otm';DS();
	x='gemnip_naim_er_s_udal_lts';DS();
	x='gemnip_naim_er_leykoreduc';DS();
	x='gemnip_naim_er_aferez';DS();
	x='gemnip_naim_er_dobav_textarea';DS();
	x='gemnip_grup_rez';DS();
	x='gemnip_treb_kolich';DS();
}
function gemztker_remove(){
	"use strict";
	x='kn_ztk_er';DS();
	x='gemztker_naim_glav';DS();
	x='gemztker_naim_er_otmytye_8_razm_i_otm';DS();
	x='gemztker_naim_er_s_udal_lts';DS();
	x='gemztker_naim_er_leykoreduc';DS();
	x='gemztker_naim_er_aferez';DS();
	x='gemztker_naim_er_dobav_textarea';DS();
	x='gemztker_podbor';DS();
	x='gemztker_podbor_ch';DS();
	x='gemztker_grup_rez';DS();
	x='gemztker_treb_kolich';DS();
}
function gemztkszp_remove(){
	"use strict";
	x='kn_ztk_szp';DS();
	x='gemztkszp_naim_glav';DS();
	x='gemztkszp_naim_szp_patogenreduc';DS();
	x='gemztkszp_naim_szp_pulirov';DS();
	x='gemztkszp_naim_szp_patogeninact';DS();
	x='gemztkszp_naim_szp_kriosupernat';DS();
	x='gemztkszp_naim_szp_liofiliz';DS();
	x='gemztkszp_naim_szp_dobav_textarea';DS();
	x='gemztkszp_grup_rez';DS();
	x='gemztkszp_treb_kolich';DS();
}
function gemztktr_remove(){
	"use strict";
	x='kn_ztk_tr';DS();
	x='gemztktr_naim_glav';DS();
	x='gemztktr_naim_tr_aferez_8_iz_ed_kr';DS();
	x='gemztktr_naim_tr_pulirov';DS();
	x='gemztktr_naim_tr_v_dob_rastv';DS();
	x='gemztktr_naim_tr_patogenreduc';DS();
	x='gemztktr_naim_tr_leykoreduc';DS();
	x='gemztktr_naim_tr_kriokonserv';DS();
	x='gemztktr_naim_tr_dobav_textarea';DS();
	x='gemztktr_grup_rez';DS();
	x='gemztktr_treb_kolich';DS();
}

var n;
function gem_remove(){
	"use strict";
	x='gem'+n+'_naim_glav';DS();
	x='gem'+n+'_naim_er_otmytye_8_razm_i_otm';DS();
	x='gem'+n+'_naim_er_s_udal_lts';DS();
	x='gem'+n+'_naim_er_leykoreduc';DS();
	x='gem'+n+'_naim_er_aferez';DS();
	x='gem'+n+'_naim_er_dobav_textarea';DS();
	x='gem'+n+'_naim_szp_patogenreduc';DS();
	x='gem'+n+'_naim_szp_pulirov';DS();
	x='gem'+n+'_naim_szp_patogeninact';DS();
	x='gem'+n+'_naim_szp_kriosupernat';DS();
	x='gem'+n+'_naim_szp_liofiliz';DS();
	x='gem'+n+'_naim_szp_dobav_textarea';DS();
	x='gem'+n+'_naim_tr_aferez_8_iz_ed_kr';DS();
	x='gem'+n+'_naim_tr_pulirov';DS();
	x='gem'+n+'_naim_tr_v_dob_rastv';DS();
	x='gem'+n+'_naim_tr_patogenreduc';DS();
	x='gem'+n+'_naim_tr_leykoreduc';DS();
	x='gem'+n+'_naim_tr_kriokonserv';DS();
	x='gem'+n+'_naim_tr_dobav_textarea';DS();
	x='gem'+n+'_grup_rez';DS();
	x='gem'+n+'_fen_C1';DS();
	x='gem'+n+'_fen_c0';DS();
	x='gem'+n+'_fen_Cw';DS();
	x='gem'+n+'_fen_D';DS();
	x='gem'+n+'_fen_Dw';DS();
	x='gem'+n+'_fen_E1';DS();
	x='gem'+n+'_fen_e0';DS();
	x='gem'+n+'_fen_K1';DS();
	x='gem'+n+'_fen_k0';DS();
	x='gem'+n+'_v';DS();
	x='gem'+n+'_ser';DS();
	x='gem'+n+'_kod_don';DS();
	x='gem'+n+'_dat_zagotov';DS();
	x='gem'+n+'_godn';DS();
	x='gem'+n+'_proizv_ch';DS();
	x='gem'+n+'_proizv';DS();
	x='vr'+n+'_nach';DS();
	x='vr'+n+'_kon';DS();
	x='gem'+n+'_inp_v_itog';DS();
	x='vr'+n+'_v_itog';DS();
	x='gem'+n+'_v_itog';DS();
}	

var q;// Время трансфузии и перелитый объём
function gem_vr_ob(){
	"use strict";
	
	vr_nach = 'vr'+ n + '_nach';
	vr_kon = 'vr'+ n + '_kon';
	gem_v= 'gem' + n + '_v';
	gem_v_itog = 'gem' + n + '_v_itog';
	vr_v_itog = 'vr'+ n + '_v_itog';
	gem_v_itog_1 = 'gem' + n + '_v_itog_1';
	gem_v_itog_2 = 'gem' + n + '_v_itog_2';
	gem_inp_v_itog = 'gem' + n + '_inp_v_itog';
	
	document.getElementById(vr_nach).value = localStorage.getItem(vr_nach);
	document.getElementById(vr_kon).value = localStorage.getItem(vr_kon);
	document.getElementById(gem_inp_v_itog).value = localStorage.getItem(gem_inp_v_itog);
	
	if (localStorage.getItem(gem_v_itog)===null|| 
		localStorage.getItem(gem_v_itog)==='null'|| 
		localStorage.getItem(gem_v_itog)===undefined|| 
		localStorage.getItem(gem_v_itog)==='undefined'|| 
		localStorage.getItem(gem_v_itog)===''){
		localStorage.setItem(gem_v_itog, '1');
	}
		
	if (localStorage.getItem(gem_v_itog)==='1'){
			document.getElementById(gem_v_itog_1).checked=true;
	}
	else if (localStorage.getItem(gem_v_itog)==='2'){
		document.getElementById(gem_v_itog_2).checked=true;
	}
	
	if (document.getElementById(gem_v_itog_1).checked===true){
		document.getElementById(gem_inp_v_itog).disabled=true;
		document.getElementById(gem_inp_v_itog).style.borderColor = '#A7A7A7';
		document.getElementById(gem_inp_v_itog).style.color = '#A7A7A7';
		document.getElementById(gem_inp_v_itog).style.background = '#F1F2F2';
		q=localStorage.getItem(gem_v);
		localStorage.setItem(vr_v_itog, q);
	}
	else if (document.getElementById(gem_v_itog_2).checked===true){
		document.getElementById(gem_inp_v_itog).disabled=false;
		document.getElementById(gem_inp_v_itog).style.borderColor = '';
		document.getElementById(gem_inp_v_itog).style.color = '';
		document.getElementById(gem_inp_v_itog).style.background = '';
		q=localStorage.getItem(gem_inp_v_itog);
		localStorage.setItem(vr_v_itog, q);
	}
	
vr_nach=null;
vr_kon=null;
gem_v_itog=null;
gem_v_itog_1=null;
gem_v_itog_2=null;
gem_inp_v_itog=null;
q=null;
}

// Время трансфузии и перелитый объём
function vr_ob(){
	"use strict";
	for (j = 1; j < 9; j++) {
	n=j; gem_vr_ob();
	n=null;
	}
}
