var gem, gem_all;

var full_name, er_full_name, szp_full_name, tr_full_name, naim_glav, eritr, er_vzves, er_massa, er_konserv, szp, plazma_svezhezam, krioprec, trombocyty, koncentrat_tr;

var naim_er_otmytye, naim_er_s_udal_lts, naim_er_s_udal_lts_txt, naim_er_leykoreduc, naim_er_leykoreduc_txt, naim_er_aferez, naim_er_aferez_txt, naim_er_razm_i_otm, naim_er_razm_i_otm_txt, naim_er_otmytye_8_razm_i_otm, naim_er_dobav, naim_er_dobav_txt, naim_er_dobav_textarea;

var naim_szp_patogenreduc, naim_szp_patogenreduc_txt, naim_szp_pulirov, naim_szp_pulirov_txt, naim_szp_patogeninact, naim_szp_patogeninact_txt, naim_szp_kriosupernat, naim_szp_liofiliz, naim_szp_dobav_textarea, naim_szp_dobav, naim_szp_dobav_txt; 

var naim_tr_aferez_8_iz_ed_kr, naim_tr_iz_ed_kr, naim_tr_aferez, naim_tr_aferez_txt, naim_tr_pulirov, naim_tr_pulirov_txt, naim_tr_v_dob_rastv, naim_tr_patogenreduc, naim_tr_patogenreduc_txt, naim_tr_leykoreduc, naim_tr_leykoreduc_txt, naim_tr_kriokonserv, naim_tr_kriokonserv_txt, naim_tr_dobav_textarea, naim_tr_dobav, naim_tr_dobav_txt;

function naim_var_on(){
	"use strict";
	
full_name = gem + 'full_name';
er_full_name = gem + 'er_full_name';
szp_full_name = gem + 'szp_full_name';
tr_full_name = gem + 'tr_full_name';
	
naim_glav = gem + 'naim_glav';
	
eritr = gem + 'eritr';
er_vzves = gem + 'er_vzves'; 
er_massa = gem + 'er_massa'; 
er_konserv = gem + 'er_konserv';  
szp = gem + 'szp';  
plazma_svezhezam = gem + 'plazma_svezhezam'; 
krioprec = gem + 'krioprec';
trombocyty = gem + 'trombocyty';  
koncentrat_tr = gem + 'koncentrat_tr'; 
	
naim_er_otmytye_8_razm_i_otm = gem + 'naim_er_otmytye_8_razm_i_otm';	
naim_er_otmytye = gem + 'naim_er_otmytye';
naim_er_s_udal_lts = gem + 'naim_er_s_udal_lts'; 
naim_er_s_udal_lts_txt = gem + 'naim_er_s_udal_lts_txt';
naim_er_leykoreduc = gem + 'naim_er_leykoreduc';
naim_er_leykoreduc_txt = gem + 'naim_er_leykoreduc_txt';
naim_er_aferez = gem + 'naim_er_aferez';
naim_er_aferez_txt = gem + 'naim_er_aferez_txt';
naim_er_razm_i_otm = gem + 'naim_er_razm_i_otm'; 
naim_er_razm_i_otm_txt = gem + 'naim_er_razm_i_otm_txt';
naim_er_dobav = gem + 'naim_er_dobav';
naim_er_dobav_txt = gem + 'naim_er_dobav_txt';
naim_er_dobav_textarea = gem + 'naim_er_dobav_textarea';

naim_szp_patogenreduc = gem + 'naim_szp_patogenreduc';
naim_szp_patogenreduc_txt = gem + 'naim_szp_patogenreduc_txt';
naim_szp_pulirov = gem + 'naim_szp_pulirov';
naim_szp_pulirov_txt = gem + 'naim_szp_pulirov_txt';
naim_szp_patogeninact = gem + 'naim_szp_patogeninact';
naim_szp_patogeninact_txt = gem + 'naim_szp_patogeninact_txt';
naim_szp_kriosupernat = gem + 'naim_szp_kriosupernat';
naim_szp_liofiliz = gem + 'naim_szp_liofiliz';
naim_szp_dobav_txt = gem + 'naim_szp_dobav_txt';
naim_szp_dobav_textarea = gem + 'naim_szp_dobav_textarea';

naim_tr_aferez_8_iz_ed_kr = gem + 'naim_tr_aferez_8_iz_ed_kr';
naim_tr_iz_ed_kr = gem + 'naim_tr_iz_ed_kr';
naim_tr_aferez = gem + 'naim_tr_aferez';
naim_tr_aferez_txt = gem + 'naim_tr_aferez_txt';
naim_tr_pulirov = gem + 'naim_tr_pulirov';
naim_tr_pulirov_txt = gem + 'naim_tr_pulirov_txt';
naim_tr_v_dob_rastv = gem + 'naim_tr_v_dob_rastv';
naim_tr_patogenreduc = gem + 'naim_tr_patogenreduc';
naim_tr_patogenreduc_txt = gem + 'naim_tr_patogenreduc_txt';
naim_tr_leykoreduc = gem + 'naim_tr_leykoreduc';
naim_tr_leykoreduc_txt = gem + 'naim_tr_leykoreduc_txt';
naim_tr_kriokonserv = gem + 'naim_tr_kriokonserv';
naim_tr_kriokonserv_txt = gem + 'naim_tr_kriokonserv_txt';
naim_tr_dobav_textarea = gem + 'naim_tr_dobav_textarea';
naim_tr_dobav = gem + 'naim_tr_dobav';
naim_tr_dobav_txt = gem + 'naim_tr_dobav_txt';
}

function var_name_null(){
	"use strict";

full_name=null;
	
eritr=null;
er_vzves=null;
er_massa=null;
er_konserv=null;
szp=null;
plazma_svezhezam=null;
krioprec=null;
trombocyty=null;
koncentrat_tr=null;

naim_er_otmytye_8_razm_i_otm=null;	
naim_er_otmytye=null;
naim_er_s_udal_lts=null;
naim_er_s_udal_lts_txt=null;
naim_er_leykoreduc=null;
naim_er_leykoreduc_txt=null;
naim_er_aferez=null;
naim_er_aferez_txt=null;
naim_er_razm_i_otm=null;
naim_er_razm_i_otm_txt=null;
naim_er_dobav=null;
naim_er_dobav_txt=null;
naim_er_dobav_textarea=null;
	
naim_szp_patogenreduc=null;
naim_szp_patogenreduc_txt=null;
naim_szp_pulirov=null;
naim_szp_pulirov_txt=null;
naim_szp_patogeninact=null;
naim_szp_patogeninact_txt=null;
naim_szp_kriosupernat=null;
naim_szp_liofiliz=null;
naim_szp_dobav_txt=null;
naim_szp_dobav_textarea=null;

naim_tr_aferez_8_iz_ed_kr=null;
naim_tr_iz_ed_kr=null;
naim_tr_aferez=null;
naim_tr_aferez_txt=null;
naim_tr_pulirov=null;
naim_tr_pulirov_txt=null;
naim_tr_v_dob_rastv=null;
naim_tr_patogenreduc=null;
naim_tr_patogenreduc_txt=null;
naim_tr_leykoreduc=null;
naim_tr_leykoreduc_txt=null;
naim_tr_kriokonserv=null;
naim_tr_kriokonserv_txt=null;
naim_tr_dobav_textarea=null;
naim_tr_dobav=null;
naim_tr_dobav_txt=null;
}

function naim_eritr_checked(){
	"use strict";
	
document.getElementById(naim_er_otmytye).disabled=false;

document.getElementById(naim_er_razm_i_otm).disabled=false;
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженные, отмытые';
document.getElementById(naim_er_razm_i_otm).value=' размороженные, отмытые';

	if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)===' отмытые'){
	document.getElementById(naim_er_otmytye).checked=true;
	}
	else if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!==null && localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!=='null'){
	localStorage.setItem(naim_er_otmytye_8_razm_i_otm, ' размороженные, отмытые');
	document.getElementById(naim_er_razm_i_otm).checked=true;
	}

document.getElementById(naim_er_aferez).disabled=false;
document.getElementById(naim_er_aferez_txt).innerHTML='полученные методом афереза';
document.getElementById(naim_er_aferez).value=', полученные методом афереза';
	if (localStorage.getItem(naim_er_aferez)!==null && localStorage.getItem(naim_er_aferez)!=='null'){
		document.getElementById(naim_er_aferez).checked=true;
		localStorage.setItem(naim_er_aferez, ', полученные методом афереза');
	}

document.getElementById(naim_er_leykoreduc).disabled=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированные';
document.getElementById(naim_er_leykoreduc).value=' лейкоредуцированные';
	if (localStorage.getItem(naim_er_leykoreduc)!==null && localStorage.getItem(naim_er_leykoreduc)!=='null'){
		document.getElementById(naim_er_leykoreduc).checked=true;
		localStorage.setItem(naim_er_leykoreduc, ' лейкоредуцированные');
	}

document.getElementById(naim_er_s_udal_lts).disabled=false;
	if (localStorage.getItem(naim_er_s_udal_lts)===' с удалённым лейкотромбоцитным слоем'){
		document.getElementById(naim_er_s_udal_lts).checked=true;
	}
	else {
		localStorage.setItem(naim_er_s_udal_lts, '');
		document.getElementById(naim_er_s_udal_lts).checked=false;
	}
	
document.getElementById(naim_er_dobav_txt).style.color='#A00E15';
document.getElementById(naim_er_dobav_textarea).disabled=false;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
}

function naim_er_vzves_checked(){
	"use strict";
	
document.getElementById(naim_er_otmytye).checked=false;
document.getElementById(naim_er_otmytye).disabled=true;

document.getElementById(naim_er_razm_i_otm).disabled=false;
document.getElementById(naim_er_razm_i_otm).value=' размороженная, отмытая';
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженная, отмытая';

	if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)===' отмытые'){
	localStorage.removeItem(naim_er_otmytye_8_razm_i_otm);
	}
	else if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!==null && localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!=='null'){
	localStorage.setItem(naim_er_otmytye_8_razm_i_otm, ' размороженная, отмытая');
	document.getElementById(naim_er_razm_i_otm).checked=true;
	}
	else if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)===null || localStorage.getItem(naim_er_otmytye_8_razm_i_otm)==='null'){			
	document.getElementById(naim_er_razm_i_otm).disabled=false;
	document.getElementById(naim_er_razm_i_otm).checked=false;
	}

document.getElementById(naim_er_aferez).disabled=false;
document.getElementById(naim_er_aferez_txt).innerHTML='полученная методом афереза';
document.getElementById(naim_er_aferez).value=', полученная методом афереза';	
	if (localStorage.getItem(naim_er_aferez)!==null && localStorage.getItem(naim_er_aferez)!=='null'){
		document.getElementById(naim_er_aferez).checked=true;
		localStorage.setItem(naim_er_aferez, ', полученная методом афереза');
	}

document.getElementById(naim_er_leykoreduc).disabled=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированная';
document.getElementById(naim_er_leykoreduc).value=' лейкоредуцированная';
	if (localStorage.getItem(naim_er_leykoreduc)!==null && localStorage.getItem(naim_er_leykoreduc)!=='null'){
		document.getElementById(naim_er_leykoreduc).checked=true;
		localStorage.setItem(naim_er_leykoreduc, ' лейкоредуцированная');
	}

document.getElementById(naim_er_s_udal_lts).disabled=false;
	if (localStorage.getItem(naim_er_s_udal_lts)===' с удалённым лейкотромбоцитным слоем'){
		document.getElementById(naim_er_s_udal_lts).checked=true;
	}
	else {
		localStorage.setItem(naim_er_s_udal_lts, '');
		document.getElementById(naim_er_s_udal_lts).checked=false;
	}
document.getElementById(naim_er_dobav_txt).style.color='#A00E15';
document.getElementById(naim_er_dobav_textarea).disabled=false;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
}

function naim_er_massa_checked(){
	"use strict";
	
document.getElementById(naim_er_otmytye).checked=false;
document.getElementById(naim_er_otmytye).disabled=true;

document.getElementById(naim_er_razm_i_otm).disabled=false;
document.getElementById(naim_er_razm_i_otm).value=' размороженная, отмытая';
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженная, отмытая';

	if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)===' отмытые'){
	localStorage.removeItem(naim_er_otmytye_8_razm_i_otm);
	}
	else if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!==null && localStorage.getItem(naim_er_otmytye_8_razm_i_otm)!=='null'){
	localStorage.setItem(naim_er_otmytye_8_razm_i_otm, ' размороженная, отмытая');
	document.getElementById(naim_er_razm_i_otm).checked=true;
	}
	else if (localStorage.getItem(naim_er_otmytye_8_razm_i_otm)===null || localStorage.getItem(naim_er_otmytye_8_razm_i_otm)==='null'){		
	document.getElementById(naim_er_razm_i_otm).disabled=false;
	document.getElementById(naim_er_razm_i_otm).checked=false;
	}

document.getElementById(naim_er_aferez).disabled=false;
document.getElementById(naim_er_aferez_txt).innerHTML='полученная методом афереза';
document.getElementById(naim_er_aferez).value=', полученная методом афереза';
	if (localStorage.getItem(naim_er_aferez)!==null && localStorage.getItem(naim_er_aferez)!=='null'){
		document.getElementById(naim_er_aferez).checked=true;
		localStorage.setItem(naim_er_aferez, ', полученная методом афереза');
	}
	
document.getElementById(naim_er_leykoreduc).disabled=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированная';
document.getElementById(naim_er_leykoreduc).value=' лейкоредуцированная';
	if (localStorage.getItem(naim_er_leykoreduc)!==null && localStorage.getItem(naim_er_leykoreduc)!=='null'){
		document.getElementById(naim_er_leykoreduc).checked=true;
		localStorage.setItem(naim_er_leykoreduc, ' лейкоредуцированная');
	}

document.getElementById(naim_er_s_udal_lts).disabled=false;
	if (localStorage.getItem(naim_er_s_udal_lts)===' с удалённым лейкотромбоцитным слоем'){
		document.getElementById(naim_er_s_udal_lts).checked=true;
	}
	else {
		localStorage.setItem(naim_er_s_udal_lts, '');
		document.getElementById(naim_er_s_udal_lts).checked=false;
	}

document.getElementById(naim_er_dobav_txt).style.color='#A00E15';
document.getElementById(naim_er_dobav_textarea).disabled=false;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
}

function naim_er_konserv_checked(){
	"use strict";
	
document.getElementById(naim_er_otmytye).disabled=true;
document.getElementById(naim_er_otmytye).checked=false;

document.getElementById(naim_er_razm_i_otm).disabled=true;
document.getElementById(naim_er_razm_i_otm).checked=false;
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженные(-ая), отмытые(-ая)';

localStorage.removeItem(naim_er_otmytye_8_razm_i_otm);

document.getElementById(naim_er_aferez).disabled=true;
document.getElementById(naim_er_aferez).checked=false;
document.getElementById(naim_er_aferez).value='';
document.getElementById(naim_er_aferez_txt).innerHTML='полученные(-ая) методом афереза';
localStorage.removeItem(naim_er_aferez);

	if (localStorage.getItem(naim_er_leykoreduc)!==null && localStorage.getItem(naim_er_leykoreduc)!=='null'){
		document.getElementById(naim_er_leykoreduc).checked=true;
		localStorage.setItem(naim_er_leykoreduc, ' лейкоредуцированная');
	}
document.getElementById(naim_er_leykoreduc).disabled=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированная';
document.getElementById(naim_er_leykoreduc).value=' лейкоредуцированная';

document.getElementById(naim_er_s_udal_lts).disabled=true;
document.getElementById(naim_er_s_udal_lts).checked=false;
localStorage.removeItem(naim_er_s_udal_lts);
	
document.getElementById(naim_er_dobav_txt).style.color='#A00E15';
document.getElementById(naim_er_dobav_textarea).disabled=false;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
}

function naim_szp_checked(){
	"use strict";

document.getElementById(naim_szp_patogenreduc).disabled=false;
document.getElementById(naim_szp_patogenreduc_txt).innerHTML='патогенредуцированная';
document.getElementById(naim_szp_patogenreduc).value=' патогенредуцированная';
	if (localStorage.getItem(naim_szp_patogenreduc)!==null && localStorage.getItem(naim_szp_patogenreduc)!=='null'){
		document.getElementById(naim_szp_patogenreduc).checked=true;
		localStorage.setItem(naim_szp_patogenreduc, ' патогенредуцированная');
	}

document.getElementById(naim_szp_pulirov).disabled=false;
	if (localStorage.getItem(naim_szp_pulirov)!==null && localStorage.getItem(naim_szp_pulirov)!=='null'){
		document.getElementById(naim_szp_pulirov).checked=true;
		localStorage.setItem(naim_szp_pulirov, ' пулированная');
	}

document.getElementById(naim_szp_patogeninact).disabled=false;
document.getElementById(naim_szp_patogeninact_txt).innerHTML='патогенинактивированная';
document.getElementById(naim_szp_patogeninact).value=' патогенинактивированная';
	if (localStorage.getItem(naim_szp_patogeninact)!==null && localStorage.getItem(naim_szp_patogeninact)!=='null'){
		document.getElementById(naim_szp_patogeninact).checked=true;
		localStorage.setItem(naim_szp_patogeninact, ' патогенинактивированная');
	}

document.getElementById(naim_szp_kriosupernat).disabled=false;
	if (localStorage.getItem(naim_szp_kriosupernat)!==null && localStorage.getItem(naim_szp_kriosupernat)!=='null'){
		document.getElementById(naim_szp_kriosupernat).checked=true;
		localStorage.setItem(naim_szp_kriosupernat, ' криосупернатантная');
	}

document.getElementById(naim_szp_liofiliz).disabled=false;
	if (localStorage.getItem(naim_szp_liofiliz)!==null && localStorage.getItem(naim_szp_liofiliz)!=='null'){
		document.getElementById(naim_szp_liofiliz).checked=true;
		localStorage.setItem(naim_szp_liofiliz, ' лиофилизированная');
	}
	
document.getElementById(naim_szp_dobav_txt).style.color='#BE3B00';
document.getElementById(naim_szp_dobav_textarea).disabled=false;
document.getElementById(naim_szp_dobav_textarea).innerHTML=localStorage.getItem(naim_szp_dobav_textarea);	
}

function naim_plazma_svezhezam_checked(){
	"use strict";
	
document.getElementById(naim_szp_patogenreduc).disabled=false;
document.getElementById(naim_szp_patogenreduc_txt).innerHTML='патогенредуцированная';
document.getElementById(naim_szp_patogenreduc).value=' патогенредуцированная';
	if (localStorage.getItem(naim_szp_patogenreduc)!==null && localStorage.getItem(naim_szp_patogenreduc)!=='null'){
		document.getElementById(naim_szp_patogenreduc).checked=true;
		localStorage.setItem(naim_szp_patogenreduc, ' патогенредуцированная');
	}

document.getElementById(naim_szp_pulirov).disabled=false;
	if (localStorage.getItem(naim_szp_pulirov)!==null && localStorage.getItem(naim_szp_pulirov)!=='null'){
		document.getElementById(naim_szp_pulirov).checked=true;
		localStorage.setItem(naim_szp_pulirov, ' пулированная');
	}

document.getElementById(naim_szp_patogeninact).disabled=false;
document.getElementById(naim_szp_patogeninact_txt).innerHTML='патогенинактивированная';
document.getElementById(naim_szp_patogeninact).value=' патогенинактивированная';
	if (localStorage.getItem(naim_szp_patogeninact)!==null && localStorage.getItem(naim_szp_patogeninact)!=='null'){
		document.getElementById(naim_szp_patogeninact).checked=true;
		localStorage.setItem(naim_szp_patogeninact, ' патогенинактивированная');
	}

document.getElementById(naim_szp_kriosupernat).disabled=false;
	if (localStorage.getItem(naim_szp_kriosupernat)!==null && localStorage.getItem(naim_szp_kriosupernat)!=='null'){
		document.getElementById(naim_szp_kriosupernat).checked=true;
		localStorage.setItem(naim_szp_kriosupernat, ' криосупернатантная');
	}

document.getElementById(naim_szp_liofiliz).disabled=false;
	if (localStorage.getItem(naim_szp_liofiliz)!==null && localStorage.getItem(naim_szp_liofiliz)!=='null'){
		document.getElementById(naim_szp_liofiliz).checked=true;
		localStorage.setItem(naim_szp_liofiliz, ' лиофилизированная');
	}
	
document.getElementById(naim_szp_dobav_txt).style.color='#BE3B00';
document.getElementById(naim_szp_dobav_textarea).disabled=false;
document.getElementById(naim_szp_dobav_textarea).innerHTML=localStorage.getItem(naim_szp_dobav_textarea);	
}

function naim_krioprec_checked(){
	"use strict";
	
document.getElementById(naim_szp_patogenreduc).disabled=false;
document.getElementById(naim_szp_patogenreduc_txt).innerHTML='патогенредуцированный';
document.getElementById(naim_szp_patogenreduc).value=' патогенредуцированный';
	if (localStorage.getItem(naim_szp_patogenreduc)!==null && localStorage.getItem(naim_szp_patogenreduc)!=='null'){
		document.getElementById(naim_szp_patogenreduc).checked=true;
		localStorage.setItem(naim_szp_patogenreduc, ' патогенредуцированный');
	}
	
document.getElementById(naim_szp_pulirov).disabled=true;
document.getElementById(naim_szp_pulirov).checked=false;
localStorage.removeItem(naim_szp_pulirov);

document.getElementById(naim_szp_patogeninact).disabled=false;
document.getElementById(naim_szp_patogeninact_txt).innerHTML='патогенинактивированный';
document.getElementById(naim_szp_patogeninact).value=' патогенинактивированный';
	if (localStorage.getItem(naim_szp_patogeninact)!==null && localStorage.getItem(naim_szp_patogeninact)!=='null'){
		document.getElementById(naim_szp_patogeninact).checked=true;
		localStorage.setItem(naim_szp_patogeninact, ' патогенинактивированный');
	}

document.getElementById(naim_szp_kriosupernat).disabled=true;
document.getElementById(naim_szp_kriosupernat).checked=false;
localStorage.removeItem(naim_szp_kriosupernat);

document.getElementById(naim_szp_liofiliz).disabled=true;
document.getElementById(naim_szp_liofiliz).checked=false;
localStorage.removeItem(naim_szp_liofiliz);
	
document.getElementById(naim_szp_dobav_txt).style.color='#BE3B00';
document.getElementById(naim_szp_dobav_textarea).disabled=false;
document.getElementById(naim_szp_dobav_textarea).innerHTML=localStorage.getItem(naim_szp_dobav_textarea);	
}

function naim_trombocyty_checked(){
	"use strict";
	
document.getElementById(naim_tr_iz_ed_kr).disabled=false;

document.getElementById(naim_tr_aferez).disabled=false;
document.getElementById(naim_tr_aferez).value=', полученные методом афереза';
document.getElementById(naim_tr_aferez_txt).innerHTML='полученные методом афереза';
	
	if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===' из единицы крови'){
	document.getElementById(naim_tr_iz_ed_kr).checked=true;
	}
	else if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===', полученные методом афереза'){
	document.getElementById(naim_tr_aferez).checked=true;
	}
	else if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===', полученный методом афереза'){
	localStorage.setItem(naim_tr_aferez_8_iz_ed_kr, ', полученные методом афереза');
	document.getElementById(naim_tr_aferez).checked=true;
	}
	
document.getElementById(naim_tr_pulirov).disabled=false;
document.getElementById(naim_tr_pulirov).value=' пулированные';
document.getElementById(naim_tr_pulirov_txt).innerHTML='пулированные';
	if (localStorage.getItem(naim_tr_pulirov)!==null && localStorage.getItem(naim_tr_pulirov)!=='null'){
	localStorage.setItem(naim_tr_pulirov, ' пулированные');
	document.getElementById(naim_tr_pulirov).checked=true;
	}
	
document.getElementById(naim_tr_v_dob_rastv).disabled=false;
	if (localStorage.getItem(naim_tr_v_dob_rastv)!==null && localStorage.getItem(naim_tr_v_dob_rastv)!=='null'){
	document.getElementById(naim_tr_v_dob_rastv).checked=true;
	}
	
document.getElementById(naim_tr_patogenreduc).disabled=false;
document.getElementById(naim_tr_patogenreduc).value=' патогенредуцированные';
document.getElementById(naim_tr_patogenreduc_txt).innerHTML='патогенредуцированные';
	if (localStorage.getItem(naim_tr_patogenreduc)!==null && localStorage.getItem(naim_tr_patogenreduc)!=='null'){
	localStorage.setItem(naim_tr_patogenreduc, ' патогенредуцированные');
	document.getElementById(naim_tr_patogenreduc).checked=true;
	}
	
document.getElementById(naim_tr_leykoreduc).disabled=false;
document.getElementById(naim_tr_leykoreduc).value=' лейкоредуцированные';
document.getElementById(naim_tr_leykoreduc_txt).innerHTML='лейкоредуцированные';
	if (localStorage.getItem(naim_tr_leykoreduc)!==null && localStorage.getItem(naim_tr_leykoreduc)!=='null'){
	localStorage.setItem(naim_tr_leykoreduc, ' лейкоредуцированные');
	document.getElementById(naim_tr_leykoreduc).checked=true;
	}
	
document.getElementById(naim_tr_kriokonserv).disabled=false;
document.getElementById(naim_tr_kriokonserv).value=' криоконсервированные, размороженные';
document.getElementById(naim_tr_kriokonserv_txt).innerHTML='криоконсервированные, размороженные';
	if (localStorage.getItem(naim_tr_kriokonserv)!==null && localStorage.getItem(naim_tr_kriokonserv)!=='null'){
	localStorage.setItem(naim_tr_kriokonserv, ' криоконсервированные, размороженные');
	document.getElementById(naim_tr_kriokonserv).checked=true;
	}
	
document.getElementById(naim_tr_dobav_txt).style.color='#0044A3';
document.getElementById(naim_tr_dobav_textarea).disabled=false;
document.getElementById(naim_tr_dobav_textarea).innerHTML=localStorage.getItem(naim_tr_dobav_textarea);	
}

function naim_koncentrat_tr_checked(){
	"use strict";
	
document.getElementById(naim_tr_iz_ed_kr).disabled=false;

document.getElementById(naim_tr_aferez).disabled=false;
document.getElementById(naim_tr_aferez).value=', полученный методом афереза';
document.getElementById(naim_tr_aferez_txt).innerHTML='полученный методом афереза';
	
	if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===' из единицы крови'){
	document.getElementById(naim_tr_iz_ed_kr).checked=true;
	}
	else if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===', полученный методом афереза'){
	document.getElementById(naim_tr_aferez).checked=true;
	}
	else if (localStorage.getItem(naim_tr_aferez_8_iz_ed_kr)===', полученные методом афереза'){
	localStorage.setItem(naim_tr_aferez_8_iz_ed_kr, ', полученный методом афереза');
	document.getElementById(naim_tr_aferez).checked=true;
	}
	
document.getElementById(naim_tr_pulirov).disabled=false;
document.getElementById(naim_tr_pulirov).value=' пулированный';
document.getElementById(naim_tr_pulirov_txt).innerHTML='пулированный';
	if (localStorage.getItem(naim_tr_pulirov)!==null && localStorage.getItem(naim_tr_pulirov)!=='null'){
	localStorage.setItem(naim_tr_pulirov, ' пулированный');
	document.getElementById(naim_tr_pulirov).checked=true;
	}
	
document.getElementById(naim_tr_v_dob_rastv).disabled=false;
	if (localStorage.getItem(naim_tr_v_dob_rastv)!==null && localStorage.getItem(naim_tr_v_dob_rastv)!=='null'){
	document.getElementById(naim_tr_v_dob_rastv).checked=true;
	}
	
document.getElementById(naim_tr_patogenreduc).disabled=false;
document.getElementById(naim_tr_patogenreduc).value=' патогенредуцированный';
document.getElementById(naim_tr_patogenreduc_txt).innerHTML='патогенредуцированный';
	if (localStorage.getItem(naim_tr_patogenreduc)!==null && localStorage.getItem(naim_tr_patogenreduc)!=='null'){
	localStorage.setItem(naim_tr_patogenreduc, ' патогенредуцированный');
	document.getElementById(naim_tr_patogenreduc).checked=true;
	}
	
document.getElementById(naim_tr_leykoreduc).disabled=false;
document.getElementById(naim_tr_leykoreduc).value=' лейкоредуцированный';
document.getElementById(naim_tr_leykoreduc_txt).innerHTML='лейкоредуцированный';
	if (localStorage.getItem(naim_tr_leykoreduc)!==null && localStorage.getItem(naim_tr_leykoreduc)!=='null'){
	localStorage.setItem(naim_tr_leykoreduc, ' лейкоредуцированный');
	document.getElementById(naim_tr_leykoreduc).checked=true;
	}
	
document.getElementById(naim_tr_kriokonserv).disabled=false;
document.getElementById(naim_tr_kriokonserv).value=' криоконсервированный, размороженный';
document.getElementById(naim_tr_kriokonserv_txt).innerHTML='криоконсервированный, размороженный';
	if (localStorage.getItem(naim_tr_kriokonserv)!==null && localStorage.getItem(naim_tr_kriokonserv)!=='null'){
	localStorage.setItem(naim_tr_kriokonserv, ' криоконсервированный, размороженный');
	document.getElementById(naim_tr_kriokonserv).checked=true;
	}
	
document.getElementById(naim_tr_dobav_txt).style.color='#0044A3';
document.getElementById(naim_tr_dobav_textarea).disabled=false;
document.getElementById(naim_tr_dobav_textarea).innerHTML=localStorage.getItem(naim_tr_dobav_textarea);	
}

function naim_off(){
	"use strict";
	
document.getElementById(naim_er_dobav_txt).style.color='';
document.getElementById(naim_er_dobav_textarea).disabled=true;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
	
localStorage.removeItem(naim_er_otmytye_8_razm_i_otm);
	
document.getElementById(naim_er_otmytye).disabled=true;
document.getElementById(naim_er_otmytye).checked=false;

document.getElementById(naim_er_razm_i_otm).disabled=true;
document.getElementById(naim_er_razm_i_otm).checked=false;
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженные(-ая), отмытые(-ая)';
document.getElementById(naim_er_razm_i_otm).value='';

document.getElementById(naim_er_s_udal_lts).disabled=true;
document.getElementById(naim_er_s_udal_lts).checked=false;
localStorage.removeItem(naim_er_s_udal_lts);

document.getElementById(naim_er_leykoreduc).disabled=true;
document.getElementById(naim_er_leykoreduc).checked=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированные(-ая)';
document.getElementById(naim_er_leykoreduc).value='';
localStorage.removeItem(naim_er_leykoreduc);

document.getElementById(naim_er_aferez).disabled=true;
document.getElementById(naim_er_aferez).checked=false;
document.getElementById(naim_er_aferez_txt).innerHTML='полученные(-ая) методом афереза';
document.getElementById(naim_er_aferez).value='';
localStorage.removeItem(naim_er_aferez);

document.getElementById(naim_szp_dobav_txt).style.color='';
document.getElementById(naim_szp_dobav_textarea).disabled=true;
document.getElementById(naim_szp_dobav_textarea).innerHTML=localStorage.getItem(naim_szp_dobav_textarea);

document.getElementById(naim_szp_patogenreduc).disabled=true;
document.getElementById(naim_szp_patogenreduc).checked=false;
document.getElementById(naim_szp_patogenreduc_txt).innerHTML='патогенредуцированная(-ый)';
document.getElementById(naim_szp_patogenreduc).value='';
localStorage.removeItem(naim_szp_patogenreduc);

document.getElementById(naim_szp_pulirov).disabled=true;
document.getElementById(naim_szp_pulirov).checked=false;
localStorage.removeItem(naim_szp_pulirov);

document.getElementById(naim_szp_patogeninact).disabled=true;
document.getElementById(naim_szp_patogeninact).checked=false;
document.getElementById(naim_szp_patogeninact_txt).innerHTML='патогенинактивированная(-ый)';
document.getElementById(naim_szp_patogeninact).value='';
localStorage.removeItem(naim_szp_patogeninact);

document.getElementById(naim_szp_kriosupernat).disabled=true;
document.getElementById(naim_szp_kriosupernat).checked=false;
localStorage.removeItem(naim_szp_kriosupernat);

document.getElementById(naim_szp_liofiliz).disabled=true;
document.getElementById(naim_szp_liofiliz).checked=false;
localStorage.removeItem(naim_szp_liofiliz);

document.getElementById(naim_tr_dobav_textarea).disabled=true;
document.getElementById(naim_tr_dobav_txt).style.color='';
document.getElementById(naim_tr_dobav_textarea).innerHTML=localStorage.getItem(naim_tr_dobav_textarea);

localStorage.removeItem(naim_tr_aferez_8_iz_ed_kr);
	
document.getElementById(naim_tr_iz_ed_kr).disabled=true;
document.getElementById(naim_tr_iz_ed_kr).checked=false;
	
document.getElementById(naim_tr_aferez).disabled=true;	
document.getElementById(naim_tr_aferez).checked=false;
document.getElementById(naim_tr_aferez_txt).innerHTML='полученные(-ый) методом афереза';
document.getElementById(naim_tr_aferez).value='';
	
document.getElementById(naim_tr_pulirov).disabled=true;
document.getElementById(naim_tr_pulirov).checked=false;
document.getElementById(naim_tr_pulirov_txt).innerHTML='пулированные(-ый)';
document.getElementById(naim_tr_pulirov).value='';
localStorage.removeItem(naim_tr_pulirov);
	
document.getElementById(naim_tr_v_dob_rastv).disabled=true;
document.getElementById(naim_tr_v_dob_rastv).checked=false;
localStorage.removeItem(naim_tr_v_dob_rastv);
	
document.getElementById(naim_tr_patogenreduc).disabled=true;
document.getElementById(naim_tr_patogenreduc).checked=false;
document.getElementById(naim_tr_patogenreduc_txt).innerHTML='патогенредуцированные(-ый)';
document.getElementById(naim_tr_patogenreduc).value='';
localStorage.removeItem(naim_tr_patogenreduc);
	
document.getElementById(naim_tr_leykoreduc).disabled=true;
document.getElementById(naim_tr_leykoreduc).checked=false;
document.getElementById(naim_tr_leykoreduc_txt).innerHTML='лейкоредуцированные(-ый)';
document.getElementById(naim_tr_leykoreduc).value='';
localStorage.removeItem(naim_tr_leykoreduc);
	
document.getElementById(naim_tr_kriokonserv).disabled=true;
document.getElementById(naim_tr_kriokonserv).checked=false;
document.getElementById(naim_tr_kriokonserv_txt).innerHTML='криоконсервированные(-ый), размороженные(-ый)';
document.getElementById(naim_tr_kriokonserv).value='';
localStorage.removeItem(naim_tr_kriokonserv);
}

function naim_er_off(){
	"use strict";	
document.getElementById(naim_er_dobav_txt).style.color='';
document.getElementById(naim_er_dobav_textarea).disabled=true;
document.getElementById(naim_er_dobav_textarea).innerHTML=localStorage.getItem(naim_er_dobav_textarea);
	
localStorage.removeItem(naim_er_otmytye_8_razm_i_otm);
	
document.getElementById(naim_er_otmytye).disabled=true;
document.getElementById(naim_er_otmytye).checked=false;

document.getElementById(naim_er_razm_i_otm).disabled=true;
document.getElementById(naim_er_razm_i_otm).checked=false;
document.getElementById(naim_er_razm_i_otm_txt).innerHTML='размороженные(-ая), отмытые(-ая)';
document.getElementById(naim_er_razm_i_otm).value='';

document.getElementById(naim_er_s_udal_lts).disabled=true;
document.getElementById(naim_er_s_udal_lts).checked=false;
localStorage.removeItem(naim_er_s_udal_lts);

document.getElementById(naim_er_leykoreduc).disabled=true;
document.getElementById(naim_er_leykoreduc).checked=false;
document.getElementById(naim_er_leykoreduc_txt).innerHTML='лейкоредуцированные(-ая)';
document.getElementById(naim_er_leykoreduc).value='';
localStorage.removeItem(naim_er_leykoreduc);

document.getElementById(naim_er_aferez).disabled=true;
document.getElementById(naim_er_aferez).checked=false;
document.getElementById(naim_er_aferez_txt).innerHTML='полученные(-ая) методом афереза';
document.getElementById(naim_er_aferez).value='';
localStorage.removeItem(naim_er_aferez);
}

function naim_szp_off(){
	"use strict";

document.getElementById(naim_szp_dobav_txt).style.color='';
document.getElementById(naim_szp_dobav_textarea).disabled=true;
document.getElementById(naim_szp_dobav_textarea).innerHTML=localStorage.getItem(naim_szp_dobav_textarea);

document.getElementById(naim_szp_patogenreduc).disabled=true;
document.getElementById(naim_szp_patogenreduc).checked=false;
document.getElementById(naim_szp_patogenreduc_txt).innerHTML='патогенредуцированная(-ый)';
document.getElementById(naim_szp_patogenreduc).value='';
localStorage.removeItem(naim_szp_patogenreduc);

document.getElementById(naim_szp_pulirov).disabled=true;
document.getElementById(naim_szp_pulirov).checked=false;
localStorage.removeItem(naim_szp_pulirov);

document.getElementById(naim_szp_patogeninact).disabled=true;
document.getElementById(naim_szp_patogeninact).checked=false;
document.getElementById(naim_szp_patogeninact_txt).innerHTML='патогенинактивированная(-ый)';
document.getElementById(naim_szp_patogeninact).value='';
localStorage.removeItem(naim_szp_patogeninact);

document.getElementById(naim_szp_kriosupernat).disabled=true;
document.getElementById(naim_szp_kriosupernat).checked=false;
localStorage.removeItem(naim_szp_kriosupernat);

document.getElementById(naim_szp_liofiliz).disabled=true;
document.getElementById(naim_szp_liofiliz).checked=false;
localStorage.removeItem(naim_szp_liofiliz);
}

function naim_tr_off(){
	"use strict";

document.getElementById(naim_tr_dobav_textarea).disabled=true;
document.getElementById(naim_tr_dobav_txt).style.color='';
document.getElementById(naim_tr_dobav_textarea).innerHTML=localStorage.getItem(naim_tr_dobav_textarea);

localStorage.removeItem(naim_tr_aferez_8_iz_ed_kr);
	
document.getElementById(naim_tr_iz_ed_kr).disabled=true;
document.getElementById(naim_tr_iz_ed_kr).checked=false;
	
document.getElementById(naim_tr_aferez).disabled=true;	
document.getElementById(naim_tr_aferez).checked=false;
document.getElementById(naim_tr_aferez_txt).innerHTML='полученные(-ый) методом афереза';
document.getElementById(naim_tr_aferez).value='';
	
document.getElementById(naim_tr_pulirov).disabled=true;
document.getElementById(naim_tr_pulirov).checked=false;
document.getElementById(naim_tr_pulirov_txt).innerHTML='пулированные(-ый)';
document.getElementById(naim_tr_pulirov).value='';
localStorage.removeItem(naim_tr_pulirov);
	
document.getElementById(naim_tr_v_dob_rastv).disabled=true;
document.getElementById(naim_tr_v_dob_rastv).checked=false;
localStorage.removeItem(naim_tr_v_dob_rastv);
	
document.getElementById(naim_tr_patogenreduc).disabled=true;
document.getElementById(naim_tr_patogenreduc).checked=false;
document.getElementById(naim_tr_patogenreduc_txt).innerHTML='патогенредуцированные(-ый)';
document.getElementById(naim_tr_patogenreduc).value='';
localStorage.removeItem(naim_tr_patogenreduc);
	
document.getElementById(naim_tr_leykoreduc).disabled=true;
document.getElementById(naim_tr_leykoreduc).checked=false;
document.getElementById(naim_tr_leykoreduc_txt).innerHTML='лейкоредуцированные(-ый)';
document.getElementById(naim_tr_leykoreduc).value='';
localStorage.removeItem(naim_tr_leykoreduc);
	
document.getElementById(naim_tr_kriokonserv).disabled=true;
document.getElementById(naim_tr_kriokonserv).checked=false;
document.getElementById(naim_tr_kriokonserv_txt).innerHTML='криоконсервированные(-ый), размороженные(-ый)';
document.getElementById(naim_tr_kriokonserv).value='';
localStorage.removeItem(naim_tr_kriokonserv);
}