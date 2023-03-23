var gem, vr, gemz_dis, gem_treb_kolich_1, gem_treb_kolich_2,  gem_treb_kolich_3, gem_treb_kolich_4, gem_treb_kolich_5, gem_treb_kolich_6, gem_treb_kolich_7, gem_treb_kolich_8, gem_treb_kolich_1_txt, gem_treb_kolich_2_txt,  gem_treb_kolich_3_txt, gem_treb_kolich_4_txt, gem_treb_kolich_5_txt, gem_treb_kolich_6_txt, gem_treb_kolich_7_txt, gem_treb_kolich_8_txt, gem_all;

var gemz_fen_out1, gemz_fen_out2, gem_grup_rez_11, gem_grup_rez_10, gem_grup_rez_21, gem_grup_rez_20, gem_grup_rez_31, gem_grup_rez_30, gem_grup_rez_41, gem_grup_rez_40, gem_grup_rez_11_txt, gem_grup_rez_10_txt, gem_grup_rez_21_txt, gem_grup_rez_20_txt, gem_grup_rez_31_txt, gem_grup_rez_30_txt, gem_grup_rez_41_txt, gem_grup_rez_40_txt, gem_fen_C11, gem_fen_C10, gem_fen_c01, gem_fen_c00, gem_fen_Cw1, gem_fen_Cw0, gem_fen_D1, gem_fen_D0, gem_fen_Dw1, gem_fen_E11, gem_fen_E10, gem_fen_e01, gem_fen_e00, gem_fen_K11, gem_fen_K10, gem_fen_k01, gem_fen_k00, gem_fen_C11_txt, gem_fen_C10_txt, gem_fen_c01_txt, gem_fen_c00_txt, gem_fen_Cw1_txt, gem_fen_Cw0_txt, gem_fen_D1_txt, gem_fen_D0_txt, gem_fen_Dw1_txt, gem_fen_E11_txt, gem_fen_E10_txt, gem_fen_e01_txt, gem_fen_e00_txt, gem_fen_K11_txt, gem_fen_K10_txt, gem_fen_k01_txt, gem_fen_k00_txt;

var full_name, eritr, er_vzves, er_massa, er_konserv, szp, plazma_svezhezam, krioprec, trombocyty, koncentrat_tr;

var naim_er_otmytye, naim_er_s_udal_lts, naim_er_s_udal_lts_txt, naim_er_leykoreduc, naim_er_leykoreduc_txt, naim_er_aferez, naim_er_aferez_txt, naim_er_razm_i_otm, naim_er_razm_i_otm_txt, naim_er_otmytye_8_razm_i_otm, naim_er_dobav, naim_er_dobav_txt, naim_er_dobav_textarea;

var naim_szp_patogenreduc, naim_szp_patogenreduc_txt, naim_szp_pulirov, naim_szp_pulirov_txt, naim_szp_patogeninact, naim_szp_patogeninact_txt, naim_szp_kriosupernat, naim_szp_kriosupernat_txt, naim_szp_liofiliz, naim_szp_liofiliz_txt, naim_szp_dobav_textarea, naim_szp_dobav, naim_szp_dobav_txt; 

var naim_tr_aferez_8_iz_ed_kr, naim_tr_iz_ed_kr, naim_tr_aferez, naim_tr_aferez_txt, naim_tr_pulirov, naim_tr_pulirov_txt, naim_tr_v_dob_rastv, naim_tr_patogenreduc, naim_tr_patogenreduc_txt, naim_tr_leykoreduc, naim_tr_leykoreduc_txt, naim_tr_kriokonserv, naim_tr_kriokonserv_txt, naim_tr_dobav_textarea, naim_tr_dobav, naim_tr_dobav_txt;

var gem_all, vr_nach, vr_kon, gem_v, gem_v_itog_1, gem_v_itog_2, gem_v_itog_1_txt, gem_v_itog_2_txt, gem_inp_v_itog, gem_ser, gem_kod_don, gem_dat_zagotov, gem_godn, gem_proizv_fmba, gem_proizv_ospk, gem_proizv_kam, gem_proizv_fmba_txt, gem_proizv_ospk_txt, gem_proizv_kam_txt;

function naim_er_vybor_glav(){
	"use strict";
	naim_var_on();
	
	if (document.getElementById(eritr).checked===false&&
		document.getElementById(er_vzves).checked===false&&
		document.getElementById(er_massa).checked===false&&
		document.getElementById(er_konserv).checked===false&&
		document.getElementById(szp).checked===false&&
		document.getElementById(plazma_svezhezam).checked===false&&
		document.getElementById(krioprec).checked===false&&
		document.getElementById(trombocyty).checked===false&&
		document.getElementById(koncentrat_tr).checked===false){
		naim_off();
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_dis();
		}
		
		document.getElementById(full_name).style.borderColor='';
		document.getElementById(full_name).style.color='';
	}	
	else {
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_abl();
		}
		
		naim_szp_off();
		naim_tr_off();
		document.getElementById(full_name).style.borderColor='#000000';
		document.getElementById(full_name).style.color='#000000';
		
		if (document.getElementById(eritr).checked===true){
		naim_eritr_checked();	
		}
		
		if (document.getElementById(er_vzves).checked===true){
		naim_er_vzves_checked();
		}	
		
		if (document.getElementById(er_massa).checked===true){
		naim_er_massa_checked();
		}
		
		if (document.getElementById(er_konserv).checked===true){
		naim_er_konserv_checked();
		}
	}
	full_name_();
	var_name_null();
}

function naim_szp_vybor_glav(){
	"use strict";
	naim_var_on();
	
	if (document.getElementById(eritr).checked===false&&
		document.getElementById(er_vzves).checked===false&&
		document.getElementById(er_massa).checked===false&&
		document.getElementById(er_konserv).checked===false&&
		document.getElementById(szp).checked===false&&
		document.getElementById(plazma_svezhezam).checked===false&&
		document.getElementById(krioprec).checked===false&&
		document.getElementById(trombocyty).checked===false&&
		document.getElementById(koncentrat_tr).checked===false){
		
		naim_off();
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_dis();
		}
		
		document.getElementById(full_name).style.borderColor='';
		document.getElementById(full_name).style.color='';
	}
	
	else {
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_abl();
		}
		
		naim_er_off();
		naim_tr_off();
		document.getElementById(full_name).style.borderColor='#000000';
		document.getElementById(full_name).style.color='#000000';
		
		if (document.getElementById(szp).checked===true){
		naim_szp_checked();	
		}
		
		if (document.getElementById(plazma_svezhezam).checked===true){
		naim_plazma_svezhezam_checked();
		}	
		
		if (document.getElementById(krioprec).checked===true){
		naim_krioprec_checked();
		}
	}
		full_name_();
		var_name_null();
}

function naim_tr_vybor_glav(){
	"use strict";
	naim_var_on();
	
	if (document.getElementById(eritr).checked===false&&
		document.getElementById(er_vzves).checked===false&&
		document.getElementById(er_massa).checked===false&&
		document.getElementById(er_konserv).checked===false&&
		document.getElementById(szp).checked===false&&
		document.getElementById(plazma_svezhezam).checked===false&&
		document.getElementById(krioprec).checked===false&&
		document.getElementById(trombocyty).checked===false&&
		document.getElementById(koncentrat_tr).checked===false){
		
		naim_off();
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_dis();
		}
		
		document.getElementById(full_name).style.borderColor='';
		document.getElementById(full_name).style.color='';
	}
	else {
		
		if (gem==='gem1_'|| gem==='gem2_'|| gem==='gem3_'|| gem==='gem4_'|| gem==='gem5_'|| gem==='gem6_'|| gem==='gem7_'|| gem==='gem8_'){
		gem_data_abl();
		}
		
		naim_szp_off();
		naim_er_off();
		document.getElementById(full_name).style.borderColor='#000000';
		document.getElementById(full_name).style.color='#000000';
		
		if (document.getElementById(trombocyty).checked===true){
		naim_trombocyty_checked();
		naim_er_off();
		naim_szp_off();
		}
		
		if (document.getElementById(koncentrat_tr).checked===true){
		naim_koncentrat_tr_checked();
		naim_er_off();
		naim_szp_off();
		}
	}
	full_name_();
	var_name_null();
}

//
function gem1_naim_er_vybor_glav(){
"use strict";
gem = 'gem1_';
vr = 'vr1_';
naim_er_vybor_glav();
}
function gem1_naim_szp_vybor_glav(){
"use strict";
gem = 'gem1_';	
vr = 'vr1_';
naim_szp_vybor_glav();
}
function gem1_naim_tr_vybor_glav(){
"use strict";
gem = 'gem1_';
vr = 'vr1_';	
naim_tr_vybor_glav();
}
//
function gem2_naim_er_vybor_glav(){
"use strict";
gem = 'gem2_';
vr = 'vr2_';
naim_er_vybor_glav();
}
function gem2_naim_szp_vybor_glav(){
"use strict";
gem = 'gem2_';
vr = 'vr2_';
naim_szp_vybor_glav();
}
function gem2_naim_tr_vybor_glav(){
"use strict";
gem = 'gem2_';
vr = 'vr2_';	
naim_tr_vybor_glav();
}
//
function gem3_naim_er_vybor_glav(){
"use strict";
gem = 'gem3_';
vr = 'vr3_';
naim_er_vybor_glav();
}
function gem3_naim_szp_vybor_glav(){
"use strict";
gem = 'gem3_';
vr = 'vr3_';	
naim_szp_vybor_glav();
}
function gem3_naim_tr_vybor_glav(){
"use strict";
gem = 'gem3_';	
vr = 'vr3_';
naim_tr_vybor_glav();
}
//
function gem4_naim_er_vybor_glav(){
"use strict";
gem = 'gem4_';
vr = 'vr4_';
naim_er_vybor_glav();
}
function gem4_naim_szp_vybor_glav(){
"use strict";
gem = 'gem4_';	
vr = 'vr4_';
naim_szp_vybor_glav();
}
function gem4_naim_tr_vybor_glav(){
"use strict";
gem = 'gem4_';
vr = 'vr4_';	
naim_tr_vybor_glav();
}
//
function gem5_naim_er_vybor_glav(){
"use strict";
gem = 'gem5_';
vr = 'vr5_';
naim_er_vybor_glav();
}
function gem5_naim_szp_vybor_glav(){
"use strict";
gem = 'gem5_';
vr = 'vr5_';	
naim_szp_vybor_glav();
}
function gem5_naim_tr_vybor_glav(){
"use strict";
gem = 'gem5_';
vr = 'vr5_';	
naim_tr_vybor_glav();
}
//
function gem6_naim_er_vybor_glav(){
"use strict";
gem = 'gem6_';
vr = 'vr6_';
naim_er_vybor_glav();
}
function gem6_naim_szp_vybor_glav(){
"use strict";
gem = 'gem6_';
vr = 'vr6_';	
naim_szp_vybor_glav();
}
function gem6_naim_tr_vybor_glav(){
"use strict";
gem = 'gem6_';	
vr = 'vr6_';
naim_tr_vybor_glav();
}
//
function gem7_naim_er_vybor_glav(){
"use strict";
gem = 'gem7_';
vr = 'vr7_';
naim_er_vybor_glav();
}
function gem7_naim_szp_vybor_glav(){
"use strict";
gem = 'gem7_';
vr = 'vr7_';	
naim_szp_vybor_glav();
}
function gem7_naim_tr_vybor_glav(){
"use strict";
gem = 'gem7_';	
vr = 'vr7_';
naim_tr_vybor_glav();
}
//
function gem8_naim_er_vybor_glav(){
"use strict";
gem = 'gem8_';
vr = 'vr8_';
naim_er_vybor_glav();
}
function gem8_naim_szp_vybor_glav(){
"use strict";
gem = 'gem8_';
vr = 'vr8_';	
naim_szp_vybor_glav();
}
function gem8_naim_tr_vybor_glav(){
"use strict";
gem = 'gem8_';
vr = 'vr8_';	
naim_tr_vybor_glav();
}

//gemztker
function gemztker_naim_er_vybor_glav(){
"use strict";
gem = 'gemztker_';
naim_er_vybor_glav();
gemztker_podbor();
}

function gemztker_podbor(){
"use strict";
	if (document.getElementById('gemztker_eritr').checked===false&&
		document.getElementById('gemztker_er_vzves').checked===false&&
		document.getElementById('gemztker_er_massa').checked===false&&
		document.getElementById('gemztker_er_konserv').checked===false){
		
		document.getElementById('gemztker_podbor_0_txt').style.background = '#F1F2F2';
		document.getElementById('gemztker_podbor_0_txt').style.borderColor = '#A7A7A7';
		document.getElementById('gemztker_podbor_0_txt').style.color = '#A7A7A7';
		document.getElementById('gemztker_podbor_0_txt').disabled=true;
		document.getElementById('gemztker_podbor_0').disabled=true;
		document.getElementById('gemztker_podbor_fen_txt').style.background = '#F1F2F2';
		document.getElementById('gemztker_podbor_fen_txt').style.borderColor = '#A7A7A7';
		document.getElementById('gemztker_podbor_fen_txt').style.color = '#A7A7A7';
		document.getElementById('gemztker_podbor_fen_txt').disabled=true;
		document.getElementById('gemztker_podbor_fen').disabled=true;
		document.getElementById('gemztker_podbor_ind_txt').style.background = '#F1F2F2';
		document.getElementById('gemztker_podbor_ind_txt').style.borderColor = '#A7A7A7';
		document.getElementById('gemztker_podbor_ind_txt').style.color = '#A7A7A7';
		document.getElementById('gemztker_podbor_ind_txt').disabled=true;
		document.getElementById('gemztker_podbor_ind').disabled=true;
	}	
	else {
		document.getElementById('gemztker_podbor_0_txt').style.background = '';
		document.getElementById('gemztker_podbor_0_txt').style.borderColor = '';
		document.getElementById('gemztker_podbor_0_txt').style.color = '';
		document.getElementById('gemztker_podbor_0_txt').disabled=false;
		document.getElementById('gemztker_podbor_0').disabled=false;
		document.getElementById('gemztker_podbor_fen_txt').style.background = '';
		document.getElementById('gemztker_podbor_fen_txt').style.borderColor = '';
		document.getElementById('gemztker_podbor_fen_txt').style.color = '';
		document.getElementById('gemztker_podbor_fen_txt').disabled=false;
		document.getElementById('gemztker_podbor_fen').disabled=false;
		document.getElementById('gemztker_podbor_ind_txt').style.background = '';
		document.getElementById('gemztker_podbor_ind_txt').style.borderColor = '';
		document.getElementById('gemztker_podbor_ind_txt').style.color = '';
		document.getElementById('gemztker_podbor_ind_txt').disabled=false;
		document.getElementById('gemztker_podbor_ind').disabled=false;
	}
}

function gemztker_naim_szp_vybor_glav(){
"use strict";
gem = 'gemztker_';	
naim_szp_vybor_glav();
}
function gemztker_naim_tr_vybor_glav(){
"use strict";
gem = 'gemztker_';
naim_tr_vybor_glav();
}
//gemztkszp
function gemztkszp_naim_er_vybor_glav(){
"use strict";
gem = 'gemztkszp_';
naim_er_vybor_glav();
}
function gemztkszp_naim_szp_vybor_glav(){
"use strict";
gem = 'gemztkszp_';	
naim_szp_vybor_glav();
}
function gemztkszp_naim_tr_vybor_glav(){
"use strict";
gem = 'gemztkszp_';
naim_tr_vybor_glav();
}
//gemztktr
function gemztktr_naim_er_vybor_glav(){
"use strict";
gem = 'gemztktr_';
naim_er_vybor_glav();
}
function gemztktr_naim_szp_vybor_glav(){
"use strict";
gem = 'gemztktr_';	
naim_szp_vybor_glav();
}
function gemztktr_naim_tr_vybor_glav(){
"use strict";
gem = 'gemztktr_';
naim_tr_vybor_glav();
}
//gemnip
function gemnip_naim_er_vybor_glav(){
"use strict";
gem = 'gemnip_';
naim_er_vybor_glav();
}
function gemnip_naim_szp_vybor_glav(){
"use strict";
gem = 'gemnip_';	
naim_szp_vybor_glav();
}
function gemnip_naim_tr_vybor_glav(){
"use strict";
gem = 'gemnip_';
naim_tr_vybor_glav();
}

// Дополнить к наименованию (текстовое поле)

function gem1_naim_er_vybor_dop(){
	"use strict";
gem = 'gem1_';
naim_var_on();
full_name_();
}
function gem1_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem1_';
naim_var_on();
full_name_();
}
function gem1_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem1_';
naim_var_on();
full_name_();
}
function gem2_naim_er_vybor_dop(){
	"use strict";
gem = 'gem2_';
naim_var_on();
full_name_();
}
function gem2_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem2_';
naim_var_on();
full_name_();
}
function gem2_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem2_';
naim_var_on();
full_name_();
}
function gem3_naim_er_vybor_dop(){
	"use strict";
gem = 'gem3_';
naim_var_on();
full_name_();
}
function gem3_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem3_';
naim_var_on();
full_name_();
}
function gem3_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem3_';
naim_var_on();
full_name_();
}
function gem4_naim_er_vybor_dop(){
	"use strict";
gem = 'gem4_';
naim_var_on();
full_name_();
}
function gem4_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem4_';
naim_var_on();
full_name_();
}
function gem4_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem4_';
naim_var_on();
full_name_();
}
function gem5_naim_er_vybor_dop(){
	"use strict";
gem = 'gem5_';
naim_var_on();
full_name_();
}
function gem5_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem5_';
naim_var_on();
full_name_();
}
function gem5_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem5_';
naim_var_on();
full_name_();
}
function gem6_naim_er_vybor_dop(){
	"use strict";
gem = 'gem6_';
naim_var_on();
full_name_();
}
function gem6_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem6_';
naim_var_on();
full_name_();
}
function gem6_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem6_';
naim_var_on();
full_name_();
}
function gem7_naim_er_vybor_dop(){
	"use strict";
gem = 'gem7_';
naim_var_on();
full_name_();
}
function gem7_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem7_';
naim_var_on();
full_name_();
}
function gem7_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem7_';
naim_var_on();
full_name_();
}
function gem8_naim_er_vybor_dop(){
	"use strict";
gem = 'gem8_';
naim_var_on();
full_name_();
}
function gem8_naim_szp_vybor_dop(){
	"use strict";
gem = 'gem8_';
naim_var_on();
full_name_();
}
function gem8_naim_tr_vybor_dop(){
	"use strict";
gem = 'gem8_';
naim_var_on();
full_name_();
}
//gemztker
function gemztker_naim_er_vybor_dop(){
	"use strict";
gem = 'gemztker_';
naim_var_on();
full_name_();
}
//gemztkszp
function gemztkszp_naim_szp_vybor_dop(){
	"use strict";
gem = 'gemztkszp_';
naim_var_on();
full_name_();
}
//gemztktr
function gemztktr_naim_tr_vybor_dop(){
	"use strict";
gem = 'gemztktr_';
naim_var_on();
full_name_();
}
//gemnip
function gemnip_naim_er_vybor_dop(){
	"use strict";
gem = 'gemnip_';
naim_var_on();
full_name_();
}

function naim_start(){
"use strict";
	
naim_var_on();
gr_rz_fen();
gem_data();
	
//////коррекция данных сессии/////
	
if (localStorage.getItem(naim_glav)===null||
	localStorage.getItem(naim_glav)===undefined||
	localStorage.getItem(naim_glav)==='null'||
	localStorage.getItem(naim_glav)==='undefined'){
	localStorage.setItem(naim_glav,'');
}	

if (localStorage.getItem(naim_glav)===''){
	naim_off(); 
	document.getElementById(full_name).innerHTML = '';
	document.getElementById(full_name).style.borderColor='';
	document.getElementById(full_name).style.color='';
}
  else {
	document.getElementById(full_name).innerHTML = localStorage.getItem(full_name);
	document.getElementById(full_name).style.borderColor='#000000';
	document.getElementById(full_name).style.color='#000000';
	  
   switch(localStorage.getItem(naim_glav)){
	case'Эритроциты': document.getElementById(eritr).checked=true; 
	naim_eritr_checked();		   
	naim_szp_off(); naim_tr_off();
		break;
	case'Эритроцитная взвесь': document.getElementById(er_vzves).checked=true;
	naim_er_vzves_checked();
	naim_szp_off(); naim_tr_off();
		break;
	case'Эритроцитная масса': document.getElementById(er_massa).checked=true; 
	naim_er_massa_checked();
	naim_szp_off(); naim_tr_off();
		break;
	case'Кровь консервированная': document.getElementById(er_konserv).checked=true;
	naim_er_konserv_checked();
	naim_szp_off(); naim_tr_off();	
		break;
	case'Плазма': document.getElementById(szp).checked=true;
	naim_szp_checked();	   
	naim_er_off(); naim_tr_off();
		break;
	case'Свежезамороженная плазма': document.getElementById(plazma_svezhezam).checked=true;
	naim_plazma_svezhezam_checked();	   
	naim_er_off(); naim_tr_off();
		break;
	case'Криопреципитат': document.getElementById(krioprec).checked=true;
	naim_krioprec_checked();
	naim_er_off(); naim_tr_off();
		break;
	case'Тромбоциты': document.getElementById(trombocyty).checked=true;
	naim_trombocyty_checked();
	naim_er_off(); naim_szp_off();
		break;
	case'Концентрат тромбоцитов': document.getElementById(koncentrat_tr).checked=true;
	naim_koncentrat_tr_checked();  
	naim_er_off(); naim_szp_off();
	break;
	}
  }
}

function naim_transf_sredy_start(){
	"use strict";

	gem='gem1_';
	naim_start();

	gem='gem2_';
	naim_start();

	gem='gem3_';
	naim_start();

	gem='gem4_';
	naim_start();

	gem='gem5_';
	naim_start();

	gem='gem6_';
	naim_start();

	gem='gem7_';
	naim_start();

	gem='gem8_';
	naim_start();
	
	gem = 'gemztker_';
	naim_start();
	
	gem = 'gemztkszp_';
	naim_start();
	
	gem = 'gemztktr_';
	naim_start();
	
	gem = 'gemnip_';
	naim_start();
}

function full_name_(){
	"use strict";
var glav;
var er1, er2, er3, er4, er_d, glav_er1, er2_er3_er4;
var szp1, szp2, szp3, szp4, szp5, szp_d;
var tr1, tr2, tr3, tr4, tr5, tr6, tr_d, tr2_tr3_tr4_tr5_tr6;
var arr = [];

if (localStorage.getItem(naim_glav)===null||
	localStorage.getItem(naim_glav)===undefined||
	localStorage.getItem(naim_glav)==='null'||
	localStorage.getItem(naim_glav)==='undefined'){
	localStorage.setItem(naim_glav,'');
}	
	
glav = localStorage.getItem(naim_glav);

er1 = localStorage.getItem(naim_er_otmytye_8_razm_i_otm); 
er2 = localStorage.getItem(naim_er_s_udal_lts); 
er3 = localStorage.getItem(naim_er_leykoreduc);
er4 = localStorage.getItem(naim_er_aferez);
er_d = localStorage.getItem(naim_er_dobav_textarea);

szp1 = localStorage.getItem(naim_szp_patogenreduc); 
szp2 = localStorage.getItem(naim_szp_pulirov); 
szp3 = localStorage.getItem(naim_szp_patogeninact);  
szp4 = localStorage.getItem(naim_szp_kriosupernat);  
szp5 = localStorage.getItem(naim_szp_liofiliz); 
szp_d = localStorage.getItem(naim_szp_dobav_textarea);

tr1 = localStorage.getItem(naim_tr_aferez_8_iz_ed_kr);
tr2 = localStorage.getItem(naim_tr_pulirov);
tr3 = localStorage.getItem(naim_tr_v_dob_rastv);
tr4 = localStorage.getItem(naim_tr_patogenreduc);
tr5 = localStorage.getItem(naim_tr_leykoreduc);
tr6 = localStorage.getItem(naim_tr_kriokonserv);
tr_d = localStorage.getItem(naim_tr_dobav_textarea);
	
if (er1===null||er1==='null'){er1='';}
if (er2===null||er2==='null'){er2='';}
if (er3===null||er3==='null'){er3='';}
if (er4===null||er4==='null'){er4='';}
if (er_d===null||er_d==='null'){er_d='';}
	
if (szp1===null||szp1==='null'){szp1='';}
if (szp2===null||szp2==='null'){szp2='';}
if (szp3===null||szp3==='null'){szp3='';}
if (szp4===null||szp4==='null'){szp4='';}
if (szp5===null||szp5==='null'){szp5='';}
if (szp_d===null||szp_d==='null'){szp_d='';}
	
if (tr1===null||tr1==='null'){tr1='';}
if (tr2===null||tr2==='null'){tr2='';}
if (tr3===null||tr3==='null'){tr3='';}
if (tr4===null||tr4==='null'){tr4='';}
if (tr5===null||tr5==='null'){tr5='';}
if (tr6===null||tr6==='null'){tr6='';}
if (tr_d===null||tr_d==='null'){tr_d='';}

if (glav===''){
	localStorage.setItem(full_name, '');
	document.getElementById(full_name).innerHTML = '';
}
	
else if (glav==='Эритроциты'||
		 glav==='Эритроцитная взвесь'||
		 glav==='Эритроцитная масса'||
		 glav==='Кровь консервированная'){
	
	if (glav==='Эритроциты' && er1===' отмытые'){
		glav_er1='Отмытые эритроциты';
	}
	else {
		glav_er1=glav+er1;
	}
	
	er2_er3_er4=er2+er3+er4
	if (er1!==' отмытые' && er1!=='' && er2_er3_er4!==''){
		glav_er1=glav+er1;
		glav_er1= glav_er1+',';
	}
	
	arr = er_d.split('');//разбивает строку на массив из символов
	if (arr[0]!=='.' && arr[0]!==',' && arr[0]!==';' && arr[0]!==':'){
		arr.splice(0,0,' ');//перед первой точкой сроки ставит пробел
	}
	er_d = arr.join('');//формируем строку из массива
	
	localStorage.setItem(full_name, glav_er1+er2+er3+er4+er_d);
	document.getElementById(full_name).innerHTML = glav_er1+er2+er3+er4+er_d;
}
	
else if (glav==='Плазма'||
		 glav==='Свежезамороженная плазма'||
		 glav==='Криопреципитат'){
	
	arr = szp_d.split('');//разбивает строку на массив из символов
	if (arr[0]!=='.' && arr[0]!==',' && arr[0]!==';' && arr[0]!==':'){
		arr.splice(0,0,' ');//перед первой точкой сроки ставит пробел
	}
	szp_d = arr.join('');//формируем строку из массива
	
	localStorage.setItem(full_name, glav+szp1+szp2+szp3+szp4+szp5+szp_d);
	document.getElementById(full_name).innerHTML = glav+szp1+szp2+szp3+szp4+szp5+szp_d;
}
	
else if (glav==='Тромбоциты'||
		 glav==='Концентрат тромбоцитов'){
	
	tr2_tr3_tr4_tr5_tr6=tr2+tr3+tr4+tr5+tr6;
	
	if (tr1!==' из единицы крови'&&
		tr1!==''&&
		tr2_tr3_tr4_tr5_tr6!==''){
		tr1= tr1+',';
	}
	
	arr = tr_d.split('');//разбивает строку на массив из символов
	
	if (arr[0]!=='.' && arr[0]!==',' && arr[0]!==';' && arr[0]!==':'){
		arr.splice(0,0,' ');//перед первой точкой сроки ставит пробел
	}
	
	tr_d = arr.join('');//формируем строку из массива
	
	localStorage.setItem(full_name, glav+tr1+tr2+tr3+tr4+tr5+tr6+tr_d);
	document.getElementById(full_name).innerHTML = glav+tr1+tr2+tr3+tr4+tr5+tr6+tr_d;	
}
glav=null;
er1=null; er2=null; er3=null; er4=null; er_d=null; glav_er1=null; er2_er3_er4=null;
szp1=null; szp2=null; szp3=null; szp4=null; szp5=null; szp_d=null;
tr1=null; tr2=null; tr3=null; tr4=null; tr5=null; tr6=null; tr_d=null; tr2_tr3_tr4_tr5_tr6=null;
arr=null;
}

function z_dis(){
	"use strict";
	
	gemz_dis =  gem + '_dis';
	
	eritr = gem + '_eritr';
	er_vzves = gem + '_er_vzves'; 
	er_massa = gem + '_er_massa'; 
	er_konserv = gem + '_er_konserv';  
	szp = gem + '_szp';  
	plazma_svezhezam = gem + '_plazma_svezhezam'; 
	krioprec = gem + '_krioprec';
	trombocyty = gem + '_trombocyty';  
	koncentrat_tr = gem + '_koncentrat_tr';
	
	gem_treb_kolich_1 =  gem + '_treb_kolich_1';
	gem_treb_kolich_2 =  gem + '_treb_kolich_2';
	gem_treb_kolich_3 =  gem + '_treb_kolich_3';
	gem_treb_kolich_4 =  gem + '_treb_kolich_4';
	gem_treb_kolich_5 =  gem + '_treb_kolich_5';
	gem_treb_kolich_6 =  gem + '_treb_kolich_6';
	gem_treb_kolich_7 =  gem + '_treb_kolich_7';
	gem_treb_kolich_8 =  gem + '_treb_kolich_8';
	gem_treb_kolich_1_txt =  gem + '_treb_kolich_1_txt';
	gem_treb_kolich_2_txt =  gem + '_treb_kolich_2_txt';
	gem_treb_kolich_3_txt =  gem + '_treb_kolich_3_txt';
	gem_treb_kolich_4_txt =  gem + '_treb_kolich_4_txt';
	gem_treb_kolich_5_txt =  gem + '_treb_kolich_5_txt';
	gem_treb_kolich_6_txt =  gem + '_treb_kolich_6_txt';
	gem_treb_kolich_7_txt =  gem + '_treb_kolich_7_txt';
	gem_treb_kolich_8_txt =  gem + '_treb_kolich_8_txt';
	
	gem_grup_rez_11 = gem + '_grup_rez_11';
	gem_grup_rez_10 = gem + '_grup_rez_10';
	gem_grup_rez_21 = gem + '_grup_rez_21';
	gem_grup_rez_20 = gem + '_grup_rez_20';
	gem_grup_rez_31 = gem + '_grup_rez_31';
	gem_grup_rez_30 = gem + '_grup_rez_30';
	gem_grup_rez_41 = gem + '_grup_rez_41';
	gem_grup_rez_40 = gem + '_grup_rez_40';
	gem_grup_rez_11_txt = gem + '_grup_rez_11_txt';
	gem_grup_rez_10_txt = gem + '_grup_rez_10_txt';
	gem_grup_rez_21_txt = gem + '_grup_rez_21_txt';
	gem_grup_rez_20_txt = gem + '_grup_rez_20_txt';
	gem_grup_rez_31_txt = gem + '_grup_rez_31_txt';
	gem_grup_rez_30_txt = gem + '_grup_rez_30_txt';
	gem_grup_rez_41_txt = gem + '_grup_rez_41_txt';
	gem_grup_rez_40_txt = gem + '_grup_rez_40_txt';
	
	gemz_fen_out1 = gem + '_fen_out1';
	gemz_fen_out2 = gem + '_fen_out2';
	gem_fen_C11 = gem + '_fen_C1+';
	gem_fen_C10 = gem + '_fen_C1-';
	gem_fen_c01 = gem + '_fen_c0+';
	gem_fen_c00 = gem + '_fen_c0-';
	gem_fen_Cw1 = gem + '_fen_Cw+';
	gem_fen_Cw0 = gem + '_fen_Cw-';
	gem_fen_D1 = gem + '_fen_D+';
	gem_fen_D0 = gem + '_fen_D-';
	gem_fen_Dw1 = gem + '_fen_Dw+';
	gem_fen_E11 = gem + '_fen_E1+';
	gem_fen_E10 = gem + '_fen_E1-';
	gem_fen_e01 = gem + '_fen_e0+';
	gem_fen_e00 = gem + '_fen_e0-';
	gem_fen_K11 = gem + '_fen_K1+';
	gem_fen_K10 = gem + '_fen_K1-';
	gem_fen_k01 = gem + '_fen_k0+';
	gem_fen_k00 = gem + '_fen_k0-';
	
	gem_fen_C11_txt = gem + '_fen_C1+_txt';
	gem_fen_C10_txt = gem + '_fen_C1-_txt';
	gem_fen_c01_txt = gem + '_fen_c0+_txt';
	gem_fen_c00_txt = gem + '_fen_c0-_txt';
	gem_fen_Cw1_txt = gem + '_fen_Cw+_txt';
	gem_fen_Cw0_txt = gem + '_fen_Cw-_txt';
	gem_fen_D1_txt = gem + '_fen_D+_txt';
	gem_fen_D0_txt = gem + '_fen_D-_txt';
	gem_fen_Dw1_txt = gem + '_fen_Dw+_txt';
	gem_fen_E11_txt = gem + '_fen_E1+_txt';
	gem_fen_E10_txt = gem + '_fen_E1-_txt';
	gem_fen_e01_txt = gem + '_fen_e0+_txt';
	gem_fen_e00_txt = gem + '_fen_e0-_txt';
	gem_fen_K11_txt = gem + '_fen_K1+_txt';
	gem_fen_K10_txt = gem + '_fen_K1-_txt';
	gem_fen_k01_txt = gem + '_fen_k0+_txt';
	gem_fen_k00_txt = gem + '_fen_k0-_txt';
	
	if (document.getElementById(eritr).checked===false&&
		document.getElementById(er_vzves).checked===false&&
		document.getElementById(er_massa).checked===false&&
		document.getElementById(er_konserv).checked===false&&
		document.getElementById(szp).checked===false&&
		document.getElementById(plazma_svezhezam).checked===false&&
		document.getElementById(krioprec).checked===false&&
		document.getElementById(trombocyty).checked===false&&
		document.getElementById(koncentrat_tr).checked===false){
		
		document.getElementById(gemz_dis).style.color='#A7A7A7';
		document.getElementById(gem_treb_kolich_1).disabled=true;
		document.getElementById(gem_treb_kolich_1_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_1_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_1_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_2).disabled=true;
		document.getElementById(gem_treb_kolich_2_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_2_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_2_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_3).disabled=true;
		document.getElementById(gem_treb_kolich_3_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_3_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_3_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_4).disabled=true;
		document.getElementById(gem_treb_kolich_4_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_4_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_4_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_5).disabled=true;
		document.getElementById(gem_treb_kolich_5_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_5_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_5_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_6).disabled=true;
		document.getElementById(gem_treb_kolich_6_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_6_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_6_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_7).disabled=true;
		document.getElementById(gem_treb_kolich_7_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_7_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_7_txt).style.color = '#A7A7A7';
		document.getElementById(gem_treb_kolich_8).disabled=true;
		document.getElementById(gem_treb_kolich_8_txt).style.background = '#F1F2F2';
		document.getElementById(gem_treb_kolich_8_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_treb_kolich_8_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_11).disabled=true;
		document.getElementById(gem_grup_rez_10).disabled=true;
		document.getElementById(gem_grup_rez_21).disabled=true;
		document.getElementById(gem_grup_rez_20).disabled=true;
		document.getElementById(gem_grup_rez_31).disabled=true;
		document.getElementById(gem_grup_rez_30).disabled=true;
		document.getElementById(gem_grup_rez_41).disabled=true;
		document.getElementById(gem_grup_rez_40).disabled=true;
		document.getElementById(gem_grup_rez_11_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_10_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_21_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_20_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_31_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_30_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_41_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_40_txt).style.background = '#F1F2F2';
		document.getElementById(gem_grup_rez_11_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_10_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_21_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_20_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_31_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_30_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_41_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_40_txt).style.borderColor = '#A7A7A7';
		document.getElementById(gem_grup_rez_11_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_10_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_21_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_20_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_31_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_30_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_41_txt).style.color = '#A7A7A7';
		document.getElementById(gem_grup_rez_40_txt).style.color = '#A7A7A7';
		
		document.getElementById(gemz_fen_out1).style.borderColor = '#A7A7A7';
		document.getElementById(gemz_fen_out2).style.borderColor = '#A7A7A7';
		document.getElementById(gem_fen_C11).disabled=true;
		document.getElementById(gem_fen_C10).disabled=true;
		document.getElementById(gem_fen_c01).disabled=true;
		document.getElementById(gem_fen_c00).disabled=true;
		document.getElementById(gem_fen_Cw1).disabled=true;
		document.getElementById(gem_fen_Cw0).disabled=true;
		document.getElementById(gem_fen_D1).disabled=true;
		document.getElementById(gem_fen_D0).disabled=true;
		document.getElementById(gem_fen_Dw1).disabled=true;
		document.getElementById(gem_fen_E11).disabled=true;
		document.getElementById(gem_fen_E10).disabled=true;
		document.getElementById(gem_fen_e01).disabled=true;
		document.getElementById(gem_fen_e00).disabled=true;
		document.getElementById(gem_fen_K11).disabled=true;
		document.getElementById(gem_fen_K10).disabled=true;
		document.getElementById(gem_fen_k01).disabled=true;
		document.getElementById(gem_fen_k00).disabled=true;
		document.getElementById(gem_fen_C11_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_C10_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_c01_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_c00_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_Cw1_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_Cw0_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_D1_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_D0_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_Dw1_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_E11_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_E10_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_e01_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_e00_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_K11_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_K10_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_k01_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_k00_txt).style.borderColor = '#F1F2F2';
		document.getElementById(gem_fen_C11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_C10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_c01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_c00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_Cw1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_Cw0_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_D1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_D0_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_Dw1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_E11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_E10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_e01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_e00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_K11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_K10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		document.getElementById(gem_fen_k01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
		document.getElementById(gem_fen_k00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
		
	}	
	else {
		document.getElementById(gemz_dis).style.color='';
		document.getElementById(gem_treb_kolich_1).disabled=false;
		document.getElementById(gem_treb_kolich_1_txt).style.background = '';
		document.getElementById(gem_treb_kolich_1_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_1_txt).style.color = '';
		document.getElementById(gem_treb_kolich_2).disabled=false;
		document.getElementById(gem_treb_kolich_2_txt).style.background = '';
		document.getElementById(gem_treb_kolich_2_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_2_txt).style.color = '';
		document.getElementById(gem_treb_kolich_3).disabled=false;
		document.getElementById(gem_treb_kolich_3_txt).style.background = '';
		document.getElementById(gem_treb_kolich_3_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_3_txt).style.color = '';
		document.getElementById(gem_treb_kolich_4).disabled=false;
		document.getElementById(gem_treb_kolich_4_txt).style.background = '';
		document.getElementById(gem_treb_kolich_4_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_4_txt).style.color = '';
		document.getElementById(gem_treb_kolich_5).disabled=false;
		document.getElementById(gem_treb_kolich_5_txt).style.background = '';
		document.getElementById(gem_treb_kolich_5_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_5_txt).style.color = '';
		document.getElementById(gem_treb_kolich_6).disabled=false;
		document.getElementById(gem_treb_kolich_6_txt).style.background = '';
		document.getElementById(gem_treb_kolich_6_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_6_txt).style.color = '';
		document.getElementById(gem_treb_kolich_7).disabled=false;
		document.getElementById(gem_treb_kolich_7_txt).style.background = '';
		document.getElementById(gem_treb_kolich_7_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_7_txt).style.color = '';
		document.getElementById(gem_treb_kolich_8).disabled=false;
		document.getElementById(gem_treb_kolich_8_txt).style.background = '';
		document.getElementById(gem_treb_kolich_8_txt).style.borderColor = '';
		document.getElementById(gem_treb_kolich_8_txt).style.color = '';
		document.getElementById(gem_grup_rez_11).disabled=false;
		document.getElementById(gem_grup_rez_10).disabled=false;
		document.getElementById(gem_grup_rez_21).disabled=false;
		document.getElementById(gem_grup_rez_20).disabled=false;
		document.getElementById(gem_grup_rez_31).disabled=false;
		document.getElementById(gem_grup_rez_30).disabled=false;
		document.getElementById(gem_grup_rez_41).disabled=false;
		document.getElementById(gem_grup_rez_40).disabled=false;
		document.getElementById(gem_grup_rez_11_txt).style.background = '';
		document.getElementById(gem_grup_rez_10_txt).style.background = '';
		document.getElementById(gem_grup_rez_21_txt).style.background = '';
		document.getElementById(gem_grup_rez_20_txt).style.background = '';
		document.getElementById(gem_grup_rez_31_txt).style.background = '';
		document.getElementById(gem_grup_rez_30_txt).style.background = '';
		document.getElementById(gem_grup_rez_41_txt).style.background = '';
		document.getElementById(gem_grup_rez_40_txt).style.background = '';
		document.getElementById(gem_grup_rez_11_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_10_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_21_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_20_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_31_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_30_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_41_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_40_txt).style.borderColor = '';
		document.getElementById(gem_grup_rez_11_txt).style.color = '';
		document.getElementById(gem_grup_rez_10_txt).style.color = '';
		document.getElementById(gem_grup_rez_21_txt).style.color = '';
		document.getElementById(gem_grup_rez_20_txt).style.color = '';
		document.getElementById(gem_grup_rez_31_txt).style.color = '';
		document.getElementById(gem_grup_rez_30_txt).style.color = '';
		document.getElementById(gem_grup_rez_41_txt).style.color = '';
		document.getElementById(gem_grup_rez_40_txt).style.color = '';
		
		document.getElementById(gemz_fen_out1).style.borderColor = '';
		document.getElementById(gemz_fen_out2).style.borderColor = '';
		document.getElementById(gem_fen_C11).disabled=false;
		document.getElementById(gem_fen_C10).disabled=false;
		document.getElementById(gem_fen_c01).disabled=false;
		document.getElementById(gem_fen_c00).disabled=false;
		document.getElementById(gem_fen_Cw1).disabled=false;
		document.getElementById(gem_fen_Cw0).disabled=false;
		document.getElementById(gem_fen_D1).disabled=false;
		document.getElementById(gem_fen_D0).disabled=false;
		document.getElementById(gem_fen_Dw1).disabled=false;
		document.getElementById(gem_fen_E11).disabled=false;
		document.getElementById(gem_fen_E10).disabled=false;
		document.getElementById(gem_fen_e01).disabled=false;
		document.getElementById(gem_fen_e00).disabled=false;
		document.getElementById(gem_fen_K11).disabled=false;
		document.getElementById(gem_fen_K10).disabled=false;
		document.getElementById(gem_fen_k01).disabled=false;
		document.getElementById(gem_fen_k00).disabled=false;
		document.getElementById(gem_fen_C11_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_C10_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_c01_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_c00_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_Cw1_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_Cw0_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_D1_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_D0_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_Dw1_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_E11_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_E10_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_e01_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_e00_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_K11_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_K10_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_k01_txt).style.backgroundImage = '';
		document.getElementById(gem_fen_k00_txt).style.backgroundImage = '';
	}
gemz_dis=null;eritr=null;er_vzves=null;er_massa=null;er_konserv=null;szp=null;plazma_svezhezam=null;krioprec=null;trombocyty=null;koncentrat_tr=null;gem_treb_kolich_1=null;gem_treb_kolich_2=null;gem_treb_kolich_3=null;gem_treb_kolich_4=null;gem_treb_kolich_5=null;gem_treb_kolich_6=null;gem_treb_kolich_7=null;gem_treb_kolich_8=null;gem_treb_kolich_1_txt=null;gem_treb_kolich_2_txt=null;gem_treb_kolich_3_txt=null;gem_treb_kolich_4_txt=null;gem_treb_kolich_5_txt=null;gem_treb_kolich_6_txt=null;gem_treb_kolich_7_txt=null;gem_treb_kolich_8_txt=null;gem_grup_rez_11=null;gem_grup_rez_10=null;gem_grup_rez_21=null;gem_grup_rez_20=null;gem_grup_rez_31=null;gem_grup_rez_30=null;gem_grup_rez_41=null;gem_grup_rez_40=null;gem_grup_rez_11_txt=null;gem_grup_rez_10_txt=null;gem_grup_rez_21_txt=null;gem_grup_rez_20_txt=null;gem_grup_rez_31_txt=null;gem_grup_rez_30_txt=null;gem_grup_rez_41_txt=null;gem_grup_rez_40_txt=null;gemz_fen_out1=null;gemz_fen_out2=null;gem_fen_C11=null;gem_fen_C10=null;gem_fen_c01=null;gem_fen_c00=null;gem_fen_Cw1=null;gem_fen_Cw0=null;gem_fen_D1=null;gem_fen_D0=null;gem_fen_Dw1=null;gem_fen_E11=null;gem_fen_E10=null;gem_fen_e01=null;gem_fen_e00=null;gem_fen_K11=null;gem_fen_K10=null;gem_fen_k01=null;gem_fen_k00=null;gem_fen_C11_txt=null;gem_fen_C10_txt=null;gem_fen_c01_txt=null;gem_fen_c00_txt=null;gem_fen_Cw1_txt=null;gem_fen_Cw0_txt=null;gem_fen_D1_txt=null;gem_fen_D0_txt=null;gem_fen_Dw1_txt=null;gem_fen_E11_txt=null;gem_fen_E10_txt=null;gem_fen_e01_txt=null;gem_fen_e00_txt=null;gem_fen_K11_txt=null;gem_fen_K10_txt=null;gem_fen_k01_txt=null;gem_fen_k00_txt=null;
}

function z_dis_gemztker(){
	"use strict";
	gem = 'gemztker';
	z_dis();
	gemztker_podbor();
	gem=null;
}
function z_dis_gemztkszp(){
	"use strict";
	gem = 'gemztkszp';
	z_dis();
	gem=null;
}
function z_dis_gemztktr(){
	"use strict";
	gem = 'gemztktr';
	z_dis();
	gem=null;
}
function z_dis_gemnip(){
	"use strict";
	gem = 'gemnip';
	z_dis();
	gem=null;
}

function gem_data_vr(){
	"use strict";
	gem_all = gem + 'all';
	vr_nach = vr + 'nach';
	vr_kon = vr + 'kon';
	gem_v = gem + 'v';
	gem_v_itog_1 = gem + 'v_itog_1';
	gem_v_itog_2 = gem + 'v_itog_2';
	gem_v_itog_1_txt = gem + 'v_itog_1_txt';
	gem_v_itog_2_txt = gem + 'v_itog_2_txt';
	gem_inp_v_itog = gem + 'inp_v_itog';
	gem_ser = gem + 'ser';
	gem_kod_don = gem + 'kod_don';
	gem_dat_zagotov = gem + 'dat_zagotov';
	gem_godn = gem + 'godn';
	gem_proizv_fmba = gem + 'proizv_fmba';
	gem_proizv_ospk = gem + 'proizv_ospk';
	gem_proizv_kam = gem + 'proizv_kam';
	gem_proizv_fmba_txt = gem + 'proizv_fmba_txt';
	gem_proizv_ospk_txt = gem + 'proizv_ospk_txt';
	gem_proizv_kam_txt = gem + 'proizv_kam_txt';
}

function gem_data_dis(){
	"use strict";
	gem_data_vr();
	gem_gr_rz_fen_dis();
	document.getElementById(gem_all).style.color = '#A7A7A7';
	
    document.getElementById(vr_nach).disabled=true;
	document.getElementById(vr_nach).style.color = '#A7A7A7';
	document.getElementById(vr_nach).style.borderColor = '#A7A7A7';
	document.getElementById(vr_nach).style.background = '#F1F2F2';
	
    document.getElementById(vr_kon).disabled=true;
	document.getElementById(vr_kon).style.color = '#A7A7A7';
	document.getElementById(vr_kon).style.borderColor = '#A7A7A7';
	document.getElementById(vr_kon).style.background = '#F1F2F2';	
	
    document.getElementById(gem_v).disabled=true;
	document.getElementById(gem_v).style.color = '#A7A7A7';
	document.getElementById(gem_v).style.borderColor = '#A7A7A7';
	document.getElementById(gem_v).style.background = '#F1F2F2';	
	
    document.getElementById(gem_v_itog_1).disabled=true;
	document.getElementById(gem_v_itog_1_txt).style.color = '#A7A7A7';
	document.getElementById(gem_v_itog_1_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_v_itog_1_txt).style.background = '#F1F2F2';
	
    document.getElementById(gem_v_itog_2).disabled=true;
	document.getElementById(gem_v_itog_2_txt).style.color = '#A7A7A7';
	document.getElementById(gem_v_itog_2_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_v_itog_2_txt).style.background = '#F1F2F2';
	
    document.getElementById(gem_inp_v_itog).disabled=true;
	document.getElementById(gem_inp_v_itog).style.color = '#A7A7A7';
	document.getElementById(gem_inp_v_itog).style.borderColor = '#A7A7A7';
	document.getElementById(gem_inp_v_itog).style.background = '#F1F2F2';
	
    document.getElementById(gem_ser).disabled=true;
	document.getElementById(gem_ser).style.color = '#A7A7A7';
	document.getElementById(gem_ser).style.borderColor = '#A7A7A7';
	document.getElementById(gem_ser).style.background = '#F1F2F2';
	
    document.getElementById(gem_kod_don).disabled=true;
	document.getElementById(gem_kod_don).style.color = '#A7A7A7';
	document.getElementById(gem_kod_don).style.borderColor = '#A7A7A7';
	document.getElementById(gem_kod_don).style.background = '#F1F2F2';
	
    document.getElementById(gem_dat_zagotov).disabled=true;
	document.getElementById(gem_dat_zagotov).style.color = '#A7A7A7';
	document.getElementById(gem_dat_zagotov).style.borderColor = '#A7A7A7';
	document.getElementById(gem_dat_zagotov).style.background = '#F1F2F2';
	
    document.getElementById(gem_godn).disabled=true;
	document.getElementById(gem_godn).style.color = '#A7A7A7';
	document.getElementById(gem_godn).style.borderColor = '#A7A7A7';
	document.getElementById(gem_godn).style.background = '#F1F2F2';
	
	document.getElementById(gem_proizv_fmba).disabled=true;
	document.getElementById(gem_proizv_fmba_txt).style.color = '#A7A7A7';
	document.getElementById(gem_proizv_fmba_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_proizv_fmba_txt).style.background = '#F1F2F2';
	
	document.getElementById(gem_proizv_ospk).disabled=true;
	document.getElementById(gem_proizv_ospk_txt).style.color = '#A7A7A7';
	document.getElementById(gem_proizv_ospk_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_proizv_ospk_txt).style.background = '#F1F2F2';
	
	document.getElementById(gem_proizv_kam).disabled=true;
	document.getElementById(gem_proizv_kam_txt).style.color = '#A7A7A7';
	document.getElementById(gem_proizv_kam_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_proizv_kam_txt).style.background = '#F1F2F2';
}
		
function gem_data_abl(){
	"use strict";
	gem_data_vr();
	gem_gr_rz_fen_abl();
	document.getElementById(gem_all).style.color = '';
	
    document.getElementById(vr_nach).disabled=false;
	document.getElementById(vr_nach).style.color = '';
	document.getElementById(vr_nach).style.borderColor = '';
	document.getElementById(vr_nach).style.background = '';
	
    document.getElementById(vr_kon).disabled=false;
	document.getElementById(vr_kon).style.color = '';
	document.getElementById(vr_kon).style.borderColor = '';
	document.getElementById(vr_kon).style.background = '';
	
    document.getElementById(gem_v).disabled=false;
	document.getElementById(gem_v).style.color = '';
	document.getElementById(gem_v).style.borderColor = '';
	document.getElementById(gem_v).style.background = '';	
	
    document.getElementById(gem_v_itog_1).disabled=false;
	document.getElementById(gem_v_itog_1_txt).style.color = '';
	document.getElementById(gem_v_itog_1_txt).style.borderColor = '';
	document.getElementById(gem_v_itog_1_txt).style.background = '';
	
    document.getElementById(gem_v_itog_2).disabled=false;
	document.getElementById(gem_v_itog_2_txt).style.color = '';
	document.getElementById(gem_v_itog_2_txt).style.borderColor = '';
	document.getElementById(gem_v_itog_2_txt).style.background = '';
	
    document.getElementById(gem_inp_v_itog).disabled=false;
	document.getElementById(gem_inp_v_itog).style.color = '';
	document.getElementById(gem_inp_v_itog).style.borderColor = '';
	document.getElementById(gem_inp_v_itog).style.background = '';
	
    document.getElementById(gem_ser).disabled=false;
	document.getElementById(gem_ser).style.color = '';
	document.getElementById(gem_ser).style.borderColor = '';
	document.getElementById(gem_ser).style.background = '';
	
    document.getElementById(gem_kod_don).disabled=false;
	document.getElementById(gem_kod_don).style.color = '';
	document.getElementById(gem_kod_don).style.borderColor = '';
	document.getElementById(gem_kod_don).style.background = '';
	
    document.getElementById(gem_dat_zagotov).disabled=false;
	document.getElementById(gem_dat_zagotov).style.color = '';
	document.getElementById(gem_dat_zagotov).style.borderColor = '';
	document.getElementById(gem_dat_zagotov).style.background = '';
	
    document.getElementById(gem_godn).disabled=false;
	document.getElementById(gem_godn).style.color = '';
	document.getElementById(gem_godn).style.borderColor = '';
	document.getElementById(gem_godn).style.background = '';
	
	document.getElementById(gem_proizv_fmba).disabled=false;
	document.getElementById(gem_proizv_fmba_txt).style.color = '';
	document.getElementById(gem_proizv_fmba_txt).style.borderColor = '';
	document.getElementById(gem_proizv_fmba_txt).style.background = '';
	
	document.getElementById(gem_proizv_ospk).disabled=false;
	document.getElementById(gem_proizv_ospk_txt).style.color = '';
	document.getElementById(gem_proizv_ospk_txt).style.borderColor = '';
	document.getElementById(gem_proizv_ospk_txt).style.background = '';
	
	document.getElementById(gem_proizv_kam).disabled=false;
	document.getElementById(gem_proizv_kam_txt).style.color = '';
	document.getElementById(gem_proizv_kam_txt).style.borderColor = '';
	document.getElementById(gem_proizv_kam_txt).style.background = '';
}

function gem_gr_rz_fen_dis(){
	"use strict";
	gem_gr_rz_fen_var();
    document.getElementById(gem_grup_rez_11).disabled=true;
	document.getElementById(gem_grup_rez_10).disabled=true;
	document.getElementById(gem_grup_rez_21).disabled=true;
	document.getElementById(gem_grup_rez_20).disabled=true;
	document.getElementById(gem_grup_rez_31).disabled=true;
	document.getElementById(gem_grup_rez_30).disabled=true;
	document.getElementById(gem_grup_rez_41).disabled=true;
	document.getElementById(gem_grup_rez_40).disabled=true;
	document.getElementById(gem_grup_rez_11_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_10_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_21_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_20_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_31_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_30_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_41_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_40_txt).style.background = '#F1F2F2';
	document.getElementById(gem_grup_rez_11_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_10_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_21_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_20_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_31_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_30_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_41_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_40_txt).style.borderColor = '#A7A7A7';
	document.getElementById(gem_grup_rez_11_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_10_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_21_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_20_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_31_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_30_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_41_txt).style.color = '#A7A7A7';
	document.getElementById(gem_grup_rez_40_txt).style.color = '#A7A7A7';
		
	document.getElementById(gemz_fen_out1).style.borderColor = '#A7A7A7';
	document.getElementById(gemz_fen_out2).style.borderColor = '#A7A7A7';
	document.getElementById(gem_fen_C11).disabled=true;
	document.getElementById(gem_fen_C10).disabled=true;
	document.getElementById(gem_fen_c01).disabled=true;
	document.getElementById(gem_fen_c00).disabled=true;
	document.getElementById(gem_fen_Cw1).disabled=true;
	document.getElementById(gem_fen_Cw0).disabled=true;
	document.getElementById(gem_fen_D1).disabled=true;
	document.getElementById(gem_fen_D0).disabled=true;
	document.getElementById(gem_fen_Dw1).disabled=true;
	document.getElementById(gem_fen_E11).disabled=true;
	document.getElementById(gem_fen_E10).disabled=true;
	document.getElementById(gem_fen_e01).disabled=true;
	document.getElementById(gem_fen_e00).disabled=true;
	document.getElementById(gem_fen_K11).disabled=true;
	document.getElementById(gem_fen_K10).disabled=true;
	document.getElementById(gem_fen_k01).disabled=true;
	document.getElementById(gem_fen_k00).disabled=true;
	document.getElementById(gem_fen_C11_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_C10_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_c01_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_c00_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_Cw1_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_Cw0_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_D1_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_D0_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_Dw1_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_E11_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_E10_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_e01_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_e00_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_K11_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_K10_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_k01_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_k00_txt).style.borderColor = '#F1F2F2';
	document.getElementById(gem_fen_C11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_C10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_c01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_c00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_Cw1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_Cw0_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_D1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_D0_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_Dw1_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_E11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_E10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_e01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_e00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_K11_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_K10_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
	document.getElementById(gem_fen_k01_txt).style.backgroundImage = "url('images/grup_rez/fen_+_unchecked_grey.png')";
	document.getElementById(gem_fen_k00_txt).style.backgroundImage = "url('images/grup_rez/fen_-_unchecked_grey.png')";
}

function gem_gr_rz_fen_abl(){
	"use strict";
	gem_gr_rz_fen_var();
	document.getElementById(gem_grup_rez_11).disabled=false;
	document.getElementById(gem_grup_rez_10).disabled=false;
	document.getElementById(gem_grup_rez_21).disabled=false;
	document.getElementById(gem_grup_rez_20).disabled=false;
	document.getElementById(gem_grup_rez_31).disabled=false;
	document.getElementById(gem_grup_rez_30).disabled=false;
	document.getElementById(gem_grup_rez_41).disabled=false;
	document.getElementById(gem_grup_rez_40).disabled=false;
	document.getElementById(gem_grup_rez_11_txt).style.background = '';
	document.getElementById(gem_grup_rez_10_txt).style.background = '';
	document.getElementById(gem_grup_rez_21_txt).style.background = '';
	document.getElementById(gem_grup_rez_20_txt).style.background = '';
	document.getElementById(gem_grup_rez_31_txt).style.background = '';
	document.getElementById(gem_grup_rez_30_txt).style.background = '';
	document.getElementById(gem_grup_rez_41_txt).style.background = '';
	document.getElementById(gem_grup_rez_40_txt).style.background = '';
	document.getElementById(gem_grup_rez_11_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_10_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_21_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_20_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_31_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_30_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_41_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_40_txt).style.borderColor = '';
	document.getElementById(gem_grup_rez_11_txt).style.color = '';
	document.getElementById(gem_grup_rez_10_txt).style.color = '';
	document.getElementById(gem_grup_rez_21_txt).style.color = '';
	document.getElementById(gem_grup_rez_20_txt).style.color = '';
	document.getElementById(gem_grup_rez_31_txt).style.color = '';
	document.getElementById(gem_grup_rez_30_txt).style.color = '';
	document.getElementById(gem_grup_rez_41_txt).style.color = '';
	document.getElementById(gem_grup_rez_40_txt).style.color = '';
		
	document.getElementById(gemz_fen_out1).style.borderColor = '';
	document.getElementById(gemz_fen_out2).style.borderColor = '';
	document.getElementById(gem_fen_C11).disabled=false;
	document.getElementById(gem_fen_C10).disabled=false;
	document.getElementById(gem_fen_c01).disabled=false;
	document.getElementById(gem_fen_c00).disabled=false;
	document.getElementById(gem_fen_Cw1).disabled=false;
	document.getElementById(gem_fen_Cw0).disabled=false;
	document.getElementById(gem_fen_D1).disabled=false;
	document.getElementById(gem_fen_D0).disabled=false;
	document.getElementById(gem_fen_Dw1).disabled=false;
	document.getElementById(gem_fen_E11).disabled=false;
	document.getElementById(gem_fen_E10).disabled=false;
	document.getElementById(gem_fen_e01).disabled=false;
	document.getElementById(gem_fen_e00).disabled=false;
	document.getElementById(gem_fen_K11).disabled=false;
	document.getElementById(gem_fen_K10).disabled=false;
	document.getElementById(gem_fen_k01).disabled=false;
	document.getElementById(gem_fen_k00).disabled=false;
	document.getElementById(gem_fen_C11_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_C10_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_c01_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_c00_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_Cw1_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_Cw0_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_D1_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_D0_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_Dw1_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_E11_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_E10_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_e01_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_e00_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_K11_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_K10_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_k01_txt).style.backgroundImage = '';
	document.getElementById(gem_fen_k00_txt).style.backgroundImage = '';
}

function gem_gr_rz_fen_var(){
	"use strict";
	gem_grup_rez_11 = gem + 'grup_rez_11';
	gem_grup_rez_10 = gem + 'grup_rez_10';
	gem_grup_rez_21 = gem + 'grup_rez_21';
	gem_grup_rez_20 = gem + 'grup_rez_20';
	gem_grup_rez_31 = gem + 'grup_rez_31';
	gem_grup_rez_30 = gem + 'grup_rez_30';
	gem_grup_rez_41 = gem + 'grup_rez_41';
	gem_grup_rez_40 = gem + 'grup_rez_40';
	gem_grup_rez_11_txt = gem + 'grup_rez_11_txt';
	gem_grup_rez_10_txt = gem + 'grup_rez_10_txt';
	gem_grup_rez_21_txt = gem + 'grup_rez_21_txt';
	gem_grup_rez_20_txt = gem + 'grup_rez_20_txt';
	gem_grup_rez_31_txt = gem + 'grup_rez_31_txt';
	gem_grup_rez_30_txt = gem + 'grup_rez_30_txt';
	gem_grup_rez_41_txt = gem + 'grup_rez_41_txt';
	gem_grup_rez_40_txt = gem + 'grup_rez_40_txt';
	
	gemz_fen_out1 = gem + 'fen_out1';
	gemz_fen_out2 = gem + 'fen_out2';
	gem_fen_C11 = gem + 'fen_C1+';
	gem_fen_C10 = gem + 'fen_C1-';
	gem_fen_c01 = gem + 'fen_c0+';
	gem_fen_c00 = gem + 'fen_c0-';
	gem_fen_Cw1 = gem + 'fen_Cw+';
	gem_fen_Cw0 = gem + 'fen_Cw-';
	gem_fen_D1 = gem + 'fen_D+';
	gem_fen_D0 = gem + 'fen_D-';
	gem_fen_Dw1 = gem + 'fen_Dw+';
	gem_fen_E11 = gem + 'fen_E1+';
	gem_fen_E10 = gem + 'fen_E1-';
	gem_fen_e01 = gem + 'fen_e0+';
	gem_fen_e00 = gem + 'fen_e0-';
	gem_fen_K11 = gem + 'fen_K1+';
	gem_fen_K10 = gem + 'fen_K1-';
	gem_fen_k01 = gem + 'fen_k0+';
	gem_fen_k00 = gem + 'fen_k0-';
	
	gem_fen_C11_txt = gem + 'fen_C1+_txt';
	gem_fen_C10_txt = gem + 'fen_C1-_txt';
	gem_fen_c01_txt = gem + 'fen_c0+_txt';
	gem_fen_c00_txt = gem + 'fen_c0-_txt';
	gem_fen_Cw1_txt = gem + 'fen_Cw+_txt';
	gem_fen_Cw0_txt = gem + 'fen_Cw-_txt';
	gem_fen_D1_txt = gem + 'fen_D+_txt';
	gem_fen_D0_txt = gem + 'fen_D-_txt';
	gem_fen_Dw1_txt = gem + 'fen_Dw+_txt';
	gem_fen_E11_txt = gem + 'fen_E1+_txt';
	gem_fen_E10_txt = gem + 'fen_E1-_txt';
	gem_fen_e01_txt = gem + 'fen_e0+_txt';
	gem_fen_e00_txt = gem + 'fen_e0-_txt';
	gem_fen_K11_txt = gem + 'fen_K1+_txt';
	gem_fen_K10_txt = gem + 'fen_K1-_txt';
	gem_fen_k01_txt = gem + 'fen_k0+_txt';
	gem_fen_k00_txt = gem + 'fen_k0-_txt';
}

function gem_dis_or_abl_start(){
	"use strict";
	gem_naim_glav = gem + 'naim_glav';
	if (localStorage.getItem(gem_naim_glav)===''|| 
	   localStorage.getItem(gem_naim_glav)===null|| 
		localStorage.getItem(gem_naim_glav)===undefined|| 
		localStorage.getItem(gem_naim_glav)==='null'|| 
		localStorage.getItem(gem_naim_glav)==='undefined'){
	gem_data_dis();
	}
	else {
	gem_data_abl();
	}
}