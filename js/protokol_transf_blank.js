var g, gg, vr, gem, i, n;
var full_name, naim_glav, grup, rez, fen, fen1, fen2, v, ser, kod_don, dat_zagotov, godn, proizv, vr_nach, vr_kon, vr_v_itog, vr_naim, vr_ser, vr_makrosk_ocenka, vr_bio_pr, vr_kontr_grup_don, vr_kontr_rez_don, vr_prob_plosk, vr_prob_ind, nabl_ad, nabl_4ss, nabl_t, nabl_diur, nabl_cvet, nabl_cvet_itog;
	
var arr_all_full_name=[], arr_all_naim_glav=[], arr_all_grup=[], arr_all_rez=[], arr_all_fen1=[], arr_all_fen2=[], arr_all_v=[], arr_all_ser=[], arr_all_kod_don=[], arr_all_dat_zagotov=[], arr_all_godn=[], arr_all_proizv=[], arr_all_vr_nach=[], arr_all_vr_kon=[], arr_all_vr_v_itog=[];
	
var arr_er_full_name=[], arr_er_naim_glav=[], arr_er_grup=[], arr_er_rez=[], arr_er_fen1=[], arr_er_fen2=[], arr_er_v=[], arr_er_ser=[], arr_er_kod_don=[], arr_er_dat_zagotov=[], arr_er_godn=[], arr_er_proizv=[], arr_er_vr_nach=[], arr_er_vr_kon=[], arr_er_vr_v_itog=[];
	
var arr_szp_full_name=[], arr_szp_naim_glav=[], arr_szp_grup=[], arr_szp_rez=[], arr_szp_fen1=[], arr_szp_fen2=[], arr_szp_v=[], arr_szp_ser=[], arr_szp_kod_don=[], arr_szp_dat_zagotov=[], arr_szp_godn=[], arr_szp_proizv=[], arr_szp_vr_nach=[], arr_szp_vr_kon=[], arr_szp_vr_v_itog=[];

var arr_tr_full_name=[], arr_tr_naim_glav=[], arr_tr_grup=[], arr_tr_rez=[], arr_tr_fen1=[], arr_tr_fen2=[], arr_tr_v=[], arr_tr_ser=[], arr_tr_kod_don=[], arr_tr_dat_zagotov=[], arr_tr_godn=[], arr_tr_proizv=[], arr_tr_vr_nach=[], arr_tr_vr_kon=[], arr_tr_vr_v_itog=[];

function protokol(){
	"use strict";
	
check_session_blank();
	
if (localStorage.getItem('oglavl')===null|| 
	localStorage.getItem('oglavl')===undefined|| 
	localStorage.getItem('oglavl')==='null'|| 
	localStorage.getItem('oglavl')==='undefined'|| 
	localStorage.getItem('oglavl')===''){
	localStorage.setItem('oglavl','pr');
}
if (localStorage.getItem('oglavl')==='pr'){
	document.getElementById('protocol_nip').style.display='none';
	document.getElementById('protocol_nl').style.display='none';
	document.getElementById('protocol_nl2').style.display='none';
	document.getElementById('nl_page_').style.display='none';
	document.getElementById('protocol_ztk_er').style.display='none';
	document.getElementById('protocol_ztk_szp').style.display='none';
	document.getElementById('protocol_ztk_tr').style.display='none';
	document.getElementById('protocol_ztk_er2').style.display='none';
	document.getElementById('protocol_ztk_szp2').style.display='none';
	document.getElementById('protocol_ztk_tr2').style.display='none';
	document.getElementById('ztk_page_').style.display='none';
	document.getElementById('prtr_page_').style.display='block';
	document.getElementById('protocol_1.1').style.display='block';
	document.getElementById('protocol_1.2').style.display='block';
	document.getElementById('protocol_4').style.display='block';
	if (localStorage.getItem('prtr_page_ch')===null||
		localStorage.getItem('prtr_page_ch')===undefined||
		localStorage.getItem('prtr_page_ch')==='null'||
		localStorage.getItem('prtr_page_ch')==='undefined'||
		localStorage.getItem('prtr_page_ch')===''){
			localStorage.setItem('prtr_page','1');
	}
	if (localStorage.getItem('prtr_page')==='1'){
		document.getElementById('prtr_page1').checked=true;
	prtr_pages();
	}
	else if (localStorage.getItem('prtr_page')==='2'){
		document.getElementById('prtr_page2').checked=true;
	prtr_pages();
	}
	else if (localStorage.getItem('prtr_page')==='3'){
		document.getElementById('prtr_page3').checked=true;
	prtr_pages();
	}
}
else if (localStorage.getItem('oglavl')==='ztk'){
	document.getElementById('protocol_nip').style.display='none';
	document.getElementById('protocol_nl').style.display='none';
	document.getElementById('protocol_nl2').style.display='none';
	document.getElementById('nl_page_').style.display='none';
	document.getElementById('protocol_ztk_er').style.display='block';
	document.getElementById('protocol_ztk_szp').style.display='block';
	document.getElementById('protocol_ztk_tr').style.display='block';
	document.getElementById('protocol_ztk_er2').style.display='block';
	document.getElementById('protocol_ztk_szp2').style.display='block';
	document.getElementById('protocol_ztk_tr2').style.display='block';
	document.getElementById('ztk_page_').style.display='block';
	document.getElementById('prtr_page_').style.display='none';
	document.getElementById('protocol_1.1').style.display='none';
	document.getElementById('protocol_1.2').style.display='none';
	document.getElementById('protocol_4').style.display='none';
	ztk_pages1();
	if (localStorage.getItem('ztk_page_er_ch')!=='1'){
		document.getElementById('ztk_page_er_1').checked=true; localStorage.setItem('ztk_page_er','er_1');
		document.getElementById('ztk_page_szp_1').checked=true; localStorage.setItem('ztk_page_szp','szp_1');
		document.getElementById('ztk_page_szp_1').checked=true; localStorage.setItem('ztk_page_szp','szp_1');
	}
	if (localStorage.getItem('ztk_page_ch')===null||
		localStorage.getItem('ztk_page_ch')===undefined||
		localStorage.getItem('ztk_page_ch')==='null'||
		localStorage.getItem('ztk_page_ch')==='undefined'||
		localStorage.getItem('ztk_page_ch')===''){
		
		if (document.getElementById('ztk_page1_').style.display==='inline'){
			localStorage.setItem('ztk_page','1');
		}
		else if (document.getElementById('ztk_page1_').style.display==='none'&& document.getElementById('ztk_page2_').style.display==='inline'){
			localStorage.setItem('ztk_page','2');
		}
		else if (document.getElementById('ztk_page1_').style.display==='none'&& document.getElementById('ztk_page2_').style.display==='none'&& document.getElementById('ztk_page3_').style.display==='inline'){
			localStorage.setItem('ztk_page','3');
		}
	}
	if (localStorage.getItem('ztk_page')==='1'){
		document.getElementById('ztk_page1').checked=true;
	ztk_pages2();
	}
	else if (localStorage.getItem('ztk_page')==='2'){
		document.getElementById('ztk_page2').checked=true;
	ztk_pages2();
	}
	else if (localStorage.getItem('ztk_page')==='3'){
		document.getElementById('ztk_page3').checked=true;
	ztk_pages2();
	}
}
else if (localStorage.getItem('oglavl')==='zspk'){
	document.getElementById('protocol_nip').style.display='none';
	document.getElementById('protocol_nl').style.display='none';
	document.getElementById('protocol_nl2').style.display='none';
	document.getElementById('nl_page_').style.display='none';
	document.getElementById('protocol_ztk_er').style.display='none';
	document.getElementById('protocol_ztk_szp').style.display='none';
	document.getElementById('protocol_ztk_tr').style.display='none';
	document.getElementById('protocol_ztk_er2').style.display='none';
	document.getElementById('protocol_ztk_szp2').style.display='none';
	document.getElementById('protocol_ztk_tr2').style.display='none';
	document.getElementById('ztk_page_').style.display='none';
	document.getElementById('prtr_page_').style.display='none';
	document.getElementById('protocol_1.1').style.display='none';
	document.getElementById('protocol_1.2').style.display='none';
	document.getElementById('protocol_4').style.display='none';
}
else if (localStorage.getItem('oglavl')==='nl'){
	document.getElementById('protocol_nip').style.display='none';
	document.getElementById('protocol_nl').style.display='block';
	document.getElementById('protocol_nl2').style.display='block';
	document.getElementById('nl_page_').style.display='block';
	document.getElementById('protocol_ztk_er').style.display='none';
	document.getElementById('protocol_ztk_szp').style.display='none';
	document.getElementById('protocol_ztk_tr').style.display='none';
	document.getElementById('protocol_ztk_er2').style.display='none';
	document.getElementById('protocol_ztk_szp2').style.display='none';
	document.getElementById('protocol_ztk_tr2').style.display='none';	
	document.getElementById('ztk_page_').style.display='none';
	document.getElementById('prtr_page_').style.display='none';
	document.getElementById('protocol_1.1').style.display='none';
	document.getElementById('protocol_1.2').style.display='none';
	document.getElementById('protocol_4').style.display='none';
	if (localStorage.getItem('nl_page_ch')===null||
		localStorage.getItem('nl_page_ch')===undefined||
		localStorage.getItem('nl_page_ch')==='null'||
		localStorage.getItem('nl_page_ch')==='undefined'||
		localStorage.getItem('nl_page_ch')===''){
			localStorage.setItem('nl_page','1');
	}
	if (localStorage.getItem('nl_page')==='1'){
		document.getElementById('nl_page1').checked=true;
	nl_pages();
	}
	else if (localStorage.getItem('nl_page')==='2'){
		document.getElementById('nl_page2').checked=true;
	nl_pages();
	}
}
else if (localStorage.getItem('oglavl')==='nip'){
	document.getElementById('protocol_nip').style.display='block';
	document.getElementById('protocol_nl').style.display='none';
	document.getElementById('protocol_nl2').style.display='none';
	document.getElementById('nl_page_').style.display='none';
	document.getElementById('protocol_ztk_er').style.display='none';
	document.getElementById('protocol_ztk_szp').style.display='none';
	document.getElementById('protocol_ztk_tr').style.display='none';
	document.getElementById('protocol_ztk_er2').style.display='none';
	document.getElementById('protocol_ztk_szp2').style.display='none';
	document.getElementById('protocol_ztk_tr2').style.display='none';
	document.getElementById('ztk_page_').style.display='none';
	document.getElementById('prtr_page_').style.display='none';
	document.getElementById('protocol_1.1').style.display='none';
	document.getElementById('protocol_1.2').style.display='none';
	document.getElementById('protocol_4').style.display='none';
}

	// Назначение компонентов ztk
	if (localStorage.getItem('nazn_ztk')==='1'){
		document.getElementById('nazn_ztk_er').innerHTML=' для плановой трансфузии';
		document.getElementById('nazn_ztk_szp').innerHTML=' для плановой трансфузии';
		document.getElementById('nazn_ztk_tr').innerHTML=' для плановой трансфузии';
	}
	else if (localStorage.getItem('nazn_ztk')==='2'){
		document.getElementById('nazn_ztk_er').innerHTML=' для экстренной трансфузии';
		document.getElementById('nazn_ztk_szp').innerHTML=' для экстренной трансфузии';
		document.getElementById('nazn_ztk_tr').innerHTML=' для экстренной трансфузии';
	}
	else {
		document.getElementById('nazn_ztk_er').innerHTML='';
		document.getElementById('nazn_ztk_szp').innerHTML='';
		document.getElementById('nazn_ztk_tr').innerHTML='';
	}
	
	// Назначение компонентов nip
	if (localStorage.getItem('nazn_nip')==='1'){
		document.getElementById('nazn_nip').innerHTML=' для плановой трансфузии';
	}
	else if (localStorage.getItem('nazn_nip')==='2'){
		document.getElementById('nazn_nip').innerHTML=' для экстренной трансфузии';
	}
	else {
		document.getElementById('nazn_nip').innerHTML='';
	}
	
    if (localStorage.getItem('naim_lab')==='1'){
		document.getElementById('naim_lab_nl').innerHTML = 'клинико-диагностическую лабораторию МСЧ №32';
    }
    else if (localStorage.getItem('naim_lab')==='2'){
		document.getElementById('naim_lab_nl').innerHTML = 'клинико-диагностическую лабораторию СПК ФМБА в г.Екатеринбурге';
    }


    if (localStorage.getItem('gemztker_podbor')==='0'){
		document.getElementById('prim_ztk_er').innerHTML = ' совмещение по фенотипу и индивидуальный подбор не требуется';
    }
    else if (localStorage.getItem('gemztker_podbor')==='1'){
		document.getElementById('prim_ztk_er').innerHTML = ' требуется совмещение по фенотипу';
    }
    else if (localStorage.getItem('gemztker_podbor')==='2'){
		document.getElementById('prim_ztk_er').innerHTML = ' требуется индивидуальный подбор';
    }
    else {
		document.getElementById('prim_ztk_er').innerHTML = '';
    }
	
	document.getElementById('date').innerHTML = localStorage.getItem('date');
	document.getElementById('podp_vr').innerHTML = localStorage.getItem('podp_vr');
	
	document.getElementById('rec_fio').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd').innerHTML = localStorage.getItem('data_rozhd');

if (localStorage.getItem('isl_at')==='Не выявлены'){
		document.getElementById('isl_at_bl').innerHTML = 'Не выявлены';
		document.getElementById('isl_at_bl_nip').innerHTML = 'Не выявлены';
	}
else if (localStorage.getItem('isl_at')==='Выявлены'){
		document.getElementById('isl_at_bl').innerHTML = localStorage.getItem('isl_at_opisanie');
		document.getElementById('isl_at_bl_nip').innerHTML = localStorage.getItem('isl_at_opisanie');
	}

	document.getElementById('rec_grup').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen1').innerHTML = localStorage.getItem('rec_fen1');
	document.getElementById('rec_fen2').innerHTML = localStorage.getItem('rec_fen2');
	
	document.getElementById('date_1ztk_er').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('date_2ztk_er').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('podp_vr_ztk_er').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('podp_lab_ztk_er').innerHTML = localStorage.getItem('podp_vr_lab');
	document.getElementById('poluch_ztk_er').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('rec_fio_ztk_er').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist_ztk_er').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel_ztk_er').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast_ztk_er').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd_ztk_er').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('rec_grup_ztk_er').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez_ztk_er').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen1_ztk_er').innerHTML = localStorage.getItem('rec_fen1');
	document.getElementById('rec_fen2_ztk_er').innerHTML = localStorage.getItem('rec_fen2');
	
	document.getElementById('date_1ztk_szp').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('date_2ztk_szp').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('podp_vr_ztk_szp').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('podp_lab_ztk_szp').innerHTML = localStorage.getItem('podp_vr_lab');
	document.getElementById('poluch_ztk_szp').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('rec_fio_ztk_szp').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist_ztk_szp').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel_ztk_szp').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast_ztk_szp').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd_ztk_szp').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('rec_grup_ztk_szp').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez_ztk_szp').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen1_ztk_szp').innerHTML = localStorage.getItem('rec_fen1');
	document.getElementById('rec_fen2_ztk_szp').innerHTML = localStorage.getItem('rec_fen2');
	
	document.getElementById('date_1ztk_tr').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('date_2ztk_tr').innerHTML = localStorage.getItem('date_ztk');
	document.getElementById('podp_vr_ztk_tr').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('podp_lab_ztk_tr').innerHTML = localStorage.getItem('podp_vr_lab');
	document.getElementById('poluch_ztk_tr').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('rec_fio_ztk_tr').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist_ztk_tr').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel_ztk_tr').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast_ztk_tr').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd_ztk_tr').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('rec_grup_ztk_tr').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez_ztk_tr').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen1_ztk_tr').innerHTML = localStorage.getItem('rec_fen1');
	document.getElementById('rec_fen2_ztk_tr').innerHTML = localStorage.getItem('rec_fen2');
	
	document.getElementById('date_nl').innerHTML = localStorage.getItem('date_nl');
	document.getElementById('date2_nl').innerHTML = localStorage.getItem('date_nl');
	document.getElementById('podp_vr_nl').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('rec_fio_nl').innerHTML = localStorage.getItem('FIO');
	document.getElementById('rec_fio2_nl').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist_nl').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('no_ist2_nl').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel_nl').innerHTML = localStorage.getItem('otdel');
	document.getElementById('otdel2_nl').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast_nl').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('vozrast2_nl').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd_nl').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('data_rozhd2_nl').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('rec_grup_nl').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez_nl').innerHTML = localStorage.getItem('rec_rez');
	
	document.getElementById('date_nip').innerHTML = localStorage.getItem('date_nip');
	document.getElementById('podp_vr_nip').innerHTML = localStorage.getItem('podp_vr');
	document.getElementById('tel_vr_nip').innerHTML = localStorage.getItem('tel_vr');
	document.getElementById('rec_fio_nip').innerHTML = localStorage.getItem('FIO');
	document.getElementById('no_ist_nip').innerHTML = localStorage.getItem('no_ist');
	document.getElementById('otdel_nip').innerHTML = localStorage.getItem('otdel');
	document.getElementById('vozrast_nip').innerHTML = localStorage.getItem('vozrast');
	document.getElementById('data_rozhd_nip').innerHTML = localStorage.getItem('data_rozhd');
	document.getElementById('rec_grup_nip').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez_nip').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('rec_fen1_nip').innerHTML = localStorage.getItem('rec_fen1');
	document.getElementById('rec_fen2_nip').innerHTML = localStorage.getItem('rec_fen2');
	
if(localStorage.getItem('rec_fen_Cw')===null|| 
   localStorage.getItem('rec_fen_Cw')===undefined|| 
   localStorage.getItem('rec_fen_Cw')==='null'|| 
   localStorage.getItem('rec_fen_Cw')==='undefined'){
		document.getElementById('rec_fen1').style.marginTop='1px';
		document.getElementById('rec_fen2').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_er').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_er').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_szp').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_szp').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_tr').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_tr').style.marginTop='1px';
		document.getElementById('rec_fen1_nip').style.marginTop='1px';
		document.getElementById('rec_fen2_nip').style.marginTop='1px';
}
if(localStorage.getItem('rec_fen_Dw')===null|| 
   localStorage.getItem('rec_fen_Dw')===undefined|| 
   localStorage.getItem('rec_fen_Dw')==='null'|| 
   localStorage.getItem('rec_fen_Dw')==='undefined'){
		document.getElementById('rec_fen1').style.marginTop='1px';
		document.getElementById('rec_fen2').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_er').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_er').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_szp').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_szp').style.marginTop='1px';
		document.getElementById('rec_fen1_ztk_tr').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_tr').style.marginTop='1px';
		document.getElementById('rec_fen1_nip').style.marginTop='1px';
		document.getElementById('rec_fen2_nip').style.marginTop='1px';
}
if (localStorage.getItem('rec_fen_Cw')==='+'){
		document.getElementById('rec_fen1').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_er').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_szp').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_tr').style.marginTop='-4px';
		document.getElementById('rec_fen1_nip').style.marginTop='-4px';
		document.getElementById('rec_fen2').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_er').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_szp').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_tr').style.marginTop='-4px';
		document.getElementById('rec_fen2_nip').style.marginTop='-4px';
}
if (localStorage.getItem('rec_fen_Cw')==='-'){
		document.getElementById('rec_fen1').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_er').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_szp').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_tr').style.marginTop='-4px';
		document.getElementById('rec_fen1_nip').style.marginTop='-4px';
		document.getElementById('rec_fen2').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_er').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_szp').style.marginTop='1px';
		document.getElementById('rec_fen2_ztk_tr').style.marginTop='1px';
		document.getElementById('rec_fen2_nip').style.marginTop='1px';
}
if (localStorage.getItem('rec_fen_Dw')==='+'){
		document.getElementById('rec_fen1').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_er').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_szp').style.marginTop='-4px';
		document.getElementById('rec_fen1_ztk_tr').style.marginTop='-4px';
		document.getElementById('rec_fen1_nip').style.marginTop='-4px';
		document.getElementById('rec_fen2').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_er').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_szp').style.marginTop='-4px';
		document.getElementById('rec_fen2_ztk_tr').style.marginTop='-4px';
		document.getElementById('rec_fen2_nip').style.marginTop='-4px';
}
	
	document.getElementById('full_pokaz_all').innerHTML = localStorage.getItem('full_pokaz_all');
	document.getElementById('full_pokaz_ztk_er').innerHTML = localStorage.getItem('full_pokaz_er');
	document.getElementById('full_pokaz_ztk_szp').innerHTML = localStorage.getItem('full_pokaz_szp');
	document.getElementById('full_pokaz_ztk_tr').innerHTML = localStorage.getItem('full_pokaz_tr');
	document.getElementById('full_pokaz_nip').innerHTML = localStorage.getItem('full_pokaz_all');
	
	document.getElementById('date_analiz').innerHTML = localStorage.getItem('date_analiz');
	document.getElementById('RBC').innerHTML = localStorage.getItem('RBC');
	document.getElementById('HGB').innerHTML = localStorage.getItem('HGB');
	document.getElementById('HCT').innerHTML = localStorage.getItem('HCT');
	document.getElementById('PLT').innerHTML = localStorage.getItem('PLT');
	document.getElementById('VSK').innerHTML = localStorage.getItem('VSK');
	document.getElementById('FIBR').innerHTML = localStorage.getItem('FIBR');
	document.getElementById('PTI').innerHTML = localStorage.getItem('PTI');
	document.getElementById('A4TV').innerHTML = localStorage.getItem('A4TV');
	document.getElementById('MNO').innerHTML = localStorage.getItem('MNO');
	
	document.getElementById('date_analiz_ztk_er').innerHTML = localStorage.getItem('date_analiz');
	document.getElementById('RBC_ztk_er').innerHTML = localStorage.getItem('RBC');
	document.getElementById('HGB_ztk_er').innerHTML = localStorage.getItem('HGB');
	document.getElementById('HCT_ztk_er').innerHTML = localStorage.getItem('HCT');
	document.getElementById('PLT_ztk_er').innerHTML = localStorage.getItem('PLT');
	document.getElementById('VSK_ztk_er').innerHTML = localStorage.getItem('VSK');
	document.getElementById('FIBR_ztk_er').innerHTML = localStorage.getItem('FIBR');
	document.getElementById('PTI_ztk_er').innerHTML = localStorage.getItem('PTI');
	document.getElementById('A4TV_ztk_er').innerHTML = localStorage.getItem('A4TV');
	document.getElementById('MNO_ztk_er').innerHTML = localStorage.getItem('MNO');
	
	document.getElementById('date_analiz_ztk_szp').innerHTML = localStorage.getItem('date_analiz');
	document.getElementById('RBC_ztk_szp').innerHTML = localStorage.getItem('RBC');
	document.getElementById('HGB_ztk_szp').innerHTML = localStorage.getItem('HGB');
	document.getElementById('HCT_ztk_szp').innerHTML = localStorage.getItem('HCT');
	document.getElementById('PLT_ztk_szp').innerHTML = localStorage.getItem('PLT');
	document.getElementById('VSK_ztk_szp').innerHTML = localStorage.getItem('VSK');
	document.getElementById('FIBR_ztk_szp').innerHTML = localStorage.getItem('FIBR');
	document.getElementById('PTI_ztk_szp').innerHTML = localStorage.getItem('PTI');
	document.getElementById('A4TV_ztk_szp').innerHTML = localStorage.getItem('A4TV');
	document.getElementById('MNO_ztk_szp').innerHTML = localStorage.getItem('MNO');
	
	document.getElementById('date_analiz_ztk_tr').innerHTML = localStorage.getItem('date_analiz');
	document.getElementById('RBC_ztk_tr').innerHTML = localStorage.getItem('RBC');
	document.getElementById('HGB_ztk_tr').innerHTML = localStorage.getItem('HGB');
	document.getElementById('HCT_ztk_tr').innerHTML = localStorage.getItem('HCT');
	document.getElementById('PLT_ztk_tr').innerHTML = localStorage.getItem('PLT');
	document.getElementById('VSK_ztk_tr').innerHTML = localStorage.getItem('VSK');
	document.getElementById('FIBR_ztk_tr').innerHTML = localStorage.getItem('FIBR');
	document.getElementById('PTI_ztk_tr').innerHTML = localStorage.getItem('PTI');
	document.getElementById('A4TV_ztk_tr').innerHTML = localStorage.getItem('A4TV');
	document.getElementById('MNO_ztk_tr').innerHTML = localStorage.getItem('MNO');
	
	document.getElementById('diagnoz_ztk_er').innerHTML = localStorage.getItem('diagnoz');
	document.getElementById('naim_trsr_ztk_er').innerHTML = localStorage.getItem('gemztker_full_name');
	document.getElementById('gr_trsr_ztk_er').innerHTML = localStorage.getItem('gemztker_grup');
	document.getElementById('rz_trsr_ztk_er').innerHTML = localStorage.getItem('gemztker_rez');
	document.getElementById('kolich_ztk_er').innerHTML=localStorage.getItem('gemztker_treb_kolich');
	
	document.getElementById('diagnoz_ztk_szp').innerHTML= localStorage.getItem('diagnoz');
	document.getElementById('naim_trsr_ztk_szp').innerHTML= localStorage.getItem('gemztkszp_full_name');
	document.getElementById('gr_trsr_ztk_szp').innerHTML= localStorage.getItem('gemztkszp_grup');
	document.getElementById('rz_trsr_ztk_szp').innerHTML= localStorage.getItem('gemztkszp_rez');
	document.getElementById('kolich_ztk_szp').innerHTML=localStorage.getItem('gemztkszp_treb_kolich');
	
	document.getElementById('diagnoz_ztk_tr').innerHTML= localStorage.getItem('diagnoz');
	document.getElementById('naim_trsr_ztk_tr').innerHTML= localStorage.getItem('gemztktr_full_name');
	document.getElementById('gr_trsr_ztk_tr').innerHTML= localStorage.getItem('gemztktr_grup');
	document.getElementById('rz_trsr_ztk_tr').innerHTML= localStorage.getItem('gemztktr_rez');
	document.getElementById('kolich_ztk_tr').innerHTML=localStorage.getItem('gemztktr_treb_kolich');
	
	document.getElementById('diagnoz_nip').innerHTML= localStorage.getItem('diagnoz');
	document.getElementById('naim_trsr_nip').innerHTML= localStorage.getItem('gemnip_full_name');
	document.getElementById('gr_trsr_nip').innerHTML= localStorage.getItem('gemnip_grup');
	document.getElementById('rz_trsr_nip').innerHTML= localStorage.getItem('gemnip_rez');
	document.getElementById('kolich_nip').innerHTML=localStorage.getItem('gemnip_treb_kolich');
	
	document.getElementById('diagnoz_nl').innerHTML= localStorage.getItem('diagnoz');
	
	document.getElementById('tr_anamn').innerHTML= localStorage.getItem('tr_anamn');
	document.getElementById('an_ind_podb').innerHTML= localStorage.getItem('an_ind_podb');
	document.getElementById('an_reakc').innerHTML= localStorage.getItem('an_reakc');
	document.getElementById('an_akush').innerHTML= localStorage.getItem('an_akush');
	
	document.getElementById('tr_anamn_nl').innerHTML= localStorage.getItem('tr_anamn');
	document.getElementById('an_ind_podb_nl').innerHTML= localStorage.getItem('an_ind_podb');
	document.getElementById('an_reakc_nl').innerHTML= localStorage.getItem('an_reakc');
	document.getElementById('an_akush_nl').innerHTML= localStorage.getItem('an_akush');
	document.getElementById('al_bl_nl').innerHTML= localStorage.getItem('allergia');

	document.getElementById('tr_anamn_nip').innerHTML= localStorage.getItem('tr_anamn');
	document.getElementById('an_ind_podb_nip').innerHTML= localStorage.getItem('an_ind_podb');
	document.getElementById('an_reakc_nip').innerHTML= localStorage.getItem('an_reakc');
	document.getElementById('an_akush_nip').innerHTML= localStorage.getItem('an_akush');
	document.getElementById('allergia_nip').innerHTML= localStorage.getItem('allergia');
	
if (localStorage.getItem('pr_oslozh')==='Не было'){
	document.getElementById('reakc').innerHTML = 'Не было';	
  }
else if (localStorage.getItem('pr_oslozh')==='Были'){
	document.getElementById('reakc').innerHTML = localStorage.getItem('pr_oslozh_opisanie');
  }	

	//////
	tabl_massivy();
	tabl_ztk_er();
	tabl_ztk_szp();
	tabl_ztk_tr();
	protokol_tabl();
	list_registracii();
	
	//РЕАКТИВЫ
	document.getElementById('col_a_ser').innerHTML = localStorage.getItem('col_a_ser');
	document.getElementById('col_a_godn').innerHTML = localStorage.getItem('col_a_godn');
	document.getElementById('col_a_proizv').innerHTML = localStorage.getItem('col_a_proizv');
	document.getElementById('col_b_ser').innerHTML = localStorage.getItem('col_b_ser');
	document.getElementById('col_b_godn').innerHTML = localStorage.getItem('col_b_godn');
	document.getElementById('col_b_proizv').innerHTML = localStorage.getItem('col_b_proizv');
	document.getElementById('col_ab_ser').innerHTML = localStorage.getItem('col_ab_ser');
	document.getElementById('col_ab_godn').innerHTML = localStorage.getItem('col_ab_godn');
	document.getElementById('col_ab_proizv').innerHTML = localStorage.getItem('col_ab_proizv');
	document.getElementById('col_d_ser').innerHTML = localStorage.getItem('col_d_ser');
	document.getElementById('col_d_godn').innerHTML = localStorage.getItem('col_d_godn');
	document.getElementById('col_d_proizv').innerHTML = localStorage.getItem('col_d_proizv');
	
	document.getElementById('col_a_ser_nl').innerHTML = localStorage.getItem('col_a_ser');
	document.getElementById('col_a_godn_nl').innerHTML = localStorage.getItem('col_a_godn');
	document.getElementById('col_a_proizv_nl').innerHTML = localStorage.getItem('col_a_proizv');
	document.getElementById('col_b_ser_nl').innerHTML = localStorage.getItem('col_b_ser');
	document.getElementById('col_b_godn_nl').innerHTML = localStorage.getItem('col_b_godn');
	document.getElementById('col_b_proizv_nl').innerHTML = localStorage.getItem('col_b_proizv');
	document.getElementById('col_ab_ser_nl').innerHTML = localStorage.getItem('col_ab_ser');
	document.getElementById('col_ab_godn_nl').innerHTML = localStorage.getItem('col_ab_godn');
	document.getElementById('col_ab_proizv_nl').innerHTML = localStorage.getItem('col_ab_proizv');
	document.getElementById('col_d_ser_nl').innerHTML = localStorage.getItem('col_d_ser');
	document.getElementById('col_d_godn_nl').innerHTML = localStorage.getItem('col_d_godn');
	document.getElementById('col_d_proizv_nl').innerHTML = localStorage.getItem('col_d_proizv');
	
	document.getElementById('pol_ser').innerHTML = localStorage.getItem('pol_ser');
	document.getElementById('pol_godn').innerHTML = localStorage.getItem('pol_godn');
	document.getElementById('pol_proizv').innerHTML = localStorage.getItem('pol_proizv');
	
	document.getElementById('zhel_ser').innerHTML = localStorage.getItem('zhel_ser');
	document.getElementById('zhel_godn').innerHTML = localStorage.getItem('zhel_godn');
	document.getElementById('zhel_proizv').innerHTML = localStorage.getItem('zhel_proizv');
	
	document.getElementById('ind_p_organiz').innerHTML = localStorage.getItem('ind_podb_organiz');
	document.getElementById('ind_p_otv_lico').innerHTML = localStorage.getItem('ind_podb_otv_lico');
	document.getElementById('ind_p_dat_issled').innerHTML = localStorage.getItem('ind_podb_dat_issled');
	
	switch(localStorage.getItem('proby_sovm')){
	case'zhelatin':
			document.getElementById('b2_ind_sovm_info').style.display='none';
			document.getElementById('sovm_tabl_nadp').innerHTML='Проба на индивиду-<br>альную<br>совместимость<br>с желати-<br>ном 10% в пробирке *';
			document.getElementById('b2_zagolovok').innerHTML='Для контрольных исследований и проб на совместимость использовались реагенты:';
			document.getElementById('b2_zhel').style.display='inline';
			document.getElementById('b2_pol').style.display='none';break;
	case'poliglukin':
			document.getElementById('b2_ind_sovm_info').style.display='none';
			document.getElementById('sovm_tabl_nadp').innerHTML='Проба на индивиду-<br>альную<br>совместимость<br>с полиглю-<br>кином 33% в пробирке *';
			document.getElementById('b2_zagolovok').innerHTML='Для контрольных исследований и проб на совместимость использовались реагенты:';
			document.getElementById('b2_zhel').style.display='none';
			document.getElementById('b2_pol').style.display='inline'; break;
	case'individual':
			document.getElementById('b2_ind_sovm_info').style.display='inline';
			document.getElementById('sovm_tabl_nadp').innerHTML='Индивиду-<br>альный<br>подбор<br>в клинико-<br>диагно-<br>стической<br>лаборатории *';
			document.getElementById('b2_zagolovok').innerHTML='Для контрольных исследований использовались реагенты:';
			document.getElementById('b2_pol').style.display='none';
			document.getElementById('b2_zhel').style.display='none'; break;
	}
		
}

function list_registracii(){
	"use strict";
	var list_reg_n, list_reg_data_transf, list_reg_pokaz, list_reg_sp, list_reg_v, list_reg_naim, list_reg_grup, list_reg_rez, list_reg_ser_proizv, list_reg_data_izgot, list_reg_kod_don, list_reg_sovm_gr, list_reg_sovm_rez, list_reg_sovm_biol, list_reg_reakc, list_reg_podp_vr, list_reg_ser, list_reg_proizv;
	
	document.getElementById('bol_grup').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('bol_rez').innerHTML = localStorage.getItem('rec_rez');
	document.getElementById('bol_fio').innerHTML = localStorage.getItem('FIO');
	
	n=0;
	for (i = 0; i < arr_all_full_name.length; i++) {
		n=n+1;
		list_reg_n = 'list_reg'+n+'_n';
		list_reg_data_transf = 'list_reg'+n+'_data_transf';
		list_reg_pokaz = 'list_reg'+n+'_pokaz';
		list_reg_sp = 'list_reg'+n+'_sp';
		list_reg_v = 'list_reg'+n+'_v';
		list_reg_naim = 'list_reg'+n+'_naim';
		list_reg_grup = 'list_reg'+n+'_grup';
		list_reg_rez = 'list_reg'+n+'_rez';
		list_reg_ser_proizv = 'list_reg'+n+'_ser_proizv';
		list_reg_data_izgot = 'list_reg'+n+'_data_izgot';
		list_reg_kod_don = 'list_reg'+n+'_kod_don';
		list_reg_sovm_gr = 'list_reg'+n+'_sovm_gr';
		list_reg_sovm_rez = 'list_reg'+n+'_sovm_rez';
		list_reg_sovm_biol = 'list_reg'+n+'_sovm_biol';
		list_reg_reakc = 'list_reg'+n+'_reakc';
		list_reg_podp_vr = 'list_reg'+n+'_podp_vr';
		gem= 'gem'+n;
		naim_glav = gem + '_naim_glav';
		full_name = gem + '_full_name';
		
		if (arr_all_naim_glav[i]===''||
			arr_all_naim_glav[i]===null||
			arr_all_naim_glav[i]===undefined){
			continue;
		}
		else {
			document.getElementById(list_reg_n).innerHTML = n+'.'; document.getElementById(list_reg_sp).innerHTML = 'в/в';
		}
		
		document.getElementById(list_reg_data_transf).innerHTML = localStorage.getItem('date');
		document.getElementById(list_reg_v).innerHTML = arr_all_v[i];
		document.getElementById(list_reg_naim).innerHTML = arr_all_full_name[i];
		document.getElementById(list_reg_grup).innerHTML = arr_all_grup[i];
		document.getElementById(list_reg_rez).innerHTML = arr_all_rez[i];
		list_reg_ser = arr_all_ser[i];
		list_reg_proizv	= arr_all_proizv[i];
		document.getElementById(list_reg_ser_proizv).innerHTML = list_reg_ser+'<br>'+list_reg_proizv;
		document.getElementById(list_reg_data_izgot).innerHTML = arr_all_dat_zagotov[i];
		document.getElementById(list_reg_kod_don).innerHTML = arr_all_kod_don[i];
		
		if (localStorage.getItem(naim_glav)==='Эритроциты'||
				arr_all_naim_glav[i]==='Эритроцитная взвесь'||
				arr_all_naim_glav[i]==='Эритроцитная масса'||
				arr_all_naim_glav[i]==='Кровь консервированная'){
			document.getElementById(list_reg_pokaz).innerHTML = localStorage.getItem('full_pokaz_er');
			document.getElementById(list_reg_sovm_gr).innerHTML = 'совмес-<br>тима';
			document.getElementById(list_reg_sovm_rez).innerHTML = 'совмес-<br>тима';
		}
		else if (arr_all_naim_glav[i]==='Плазма'||
				arr_all_naim_glav[i]==='Свежезамороженная плазма'||
				arr_all_naim_glav[i]==='Криопреципитат'){
			document.getElementById(list_reg_pokaz).innerHTML = localStorage.getItem('full_pokaz_szp');
			document.getElementById(list_reg_sovm_gr).innerHTML = '';
			document.getElementById(list_reg_sovm_rez).innerHTML = '';
		}
		else if (arr_all_naim_glav[i]==='Тромбоциты'||
				arr_all_naim_glav[i]==='Тромбоцитный концентрат'||
				arr_all_naim_glav[i]==='Концентрат тромбоцитов'){
			document.getElementById(list_reg_pokaz).innerHTML = localStorage.getItem('full_pokaz_tr');
			document.getElementById(list_reg_sovm_gr).innerHTML = '';
			document.getElementById(list_reg_sovm_rez).innerHTML = '';
		}
		
		document.getElementById(list_reg_sovm_biol).innerHTML = 'совмес-<br>тима';
		document.getElementById(list_reg_podp_vr).innerHTML = localStorage.getItem('podp_vr');
		
		if (localStorage.getItem('pr_oslozh')==='Не было'){
			document.getElementById(list_reg_reakc).innerHTML = 'Ослож-<br>нений и<br>реакций<br>не было.';
		}
		else{document.getElementById(list_reg_reakc).innerHTML = '';}
		
	}	
list_reg_n=null; list_reg_data_transf=null; list_reg_pokaz=null; list_reg_sp=null; list_reg_v=null; list_reg_naim=null; list_reg_grup=null; list_reg_rez=null; list_reg_ser_proizv=null; list_reg_data_izgot=null; list_reg_kod_don=null; list_reg_sovm_gr=null; list_reg_sovm_rez=null; list_reg_sovm_biol=null; list_reg_reakc=null; list_reg_podp_vr=null; list_reg_ser=null; list_reg_proizv=null; gem=null; naim_glav=null; full_name=null; n=null; i=null;
}

function protokol_tabl(){
	"use strict";
	n=0;
	for (i = 0; i < arr_all_full_name.length; i++) {
		n=n+1;
		g='g'+n;
		gg='gg'+n;
		gem= 'gem' + n;
		vr= 'vr'+n; 
		vr_naim = vr + '_naim';
		vr_ser = vr + '_ser';
		vr_nach = vr + '_nach';
		vr_kon = vr + '_kon';
        vr_v_itog = vr + '_v_itog';
		vr_makrosk_ocenka = vr + '_makrosk_ocenka';
		vr_kontr_grup_don = vr + '_kontr_grup_don';
		vr_kontr_rez_don = vr + '_kontr_rez_don';
		vr_prob_plosk = vr + '_prob_plosk';
		vr_prob_ind = vr + '_prob_ind';
		vr_bio_pr = vr + '_bio_pr';
		naim_glav = gem + '_naim_glav';
		full_name = gem + '_full_name';
		grup = gem + '_grup';
		rez = gem + '_rez';
		fen = gem + '_fen';
		v = gem + '_v';
		ser = gem + '_ser';
		kod_don = gem + '_kod_don';
		dat_zagotov = gem + '_dat_zagotov';
		godn = gem + '_godn';
		proizv = gem + '_proizv';
		
		document.getElementById(g).innerHTML = n+'.';
		document.getElementById(gg).innerHTML = n+'.';
		document.getElementById(vr_makrosk_ocenka).innerHTML = 'пригодна, герметич- ность не нарушена';
		document.getElementById(vr_bio_pr).innerHTML = 'совместимо';
		
		var nglv = arr_all_naim_glav[i];
		if (nglv==='Эритроциты'||
			nglv==='Эритроцитная взвесь'||
			nglv==='Эритроцитная масса'||
			nglv==='Кровь консервированная'){
			document.getElementById(vr_kontr_grup_don).innerHTML = arr_all_grup[i];
			document.getElementById(vr_kontr_rez_don).innerHTML = arr_all_rez[i];
			document.getElementById(vr_prob_plosk).innerHTML = 'совместимо';
			document.getElementById(vr_prob_ind).innerHTML = 'совместимо';
		}
		else {
			document.getElementById(vr_kontr_grup_don).innerHTML = '---';
			document.getElementById(vr_kontr_rez_don).innerHTML = '---';
			document.getElementById(vr_prob_plosk).innerHTML = '---';
			document.getElementById(vr_prob_ind).innerHTML = '---';
		}
		
		document.getElementById(full_name).innerHTML = arr_all_full_name[i];
		document.getElementById(grup).innerHTML = arr_all_grup[i];
		document.getElementById(rez).innerHTML = arr_all_rez[i];
		if (arr_all_fen1[i]===null||arr_all_fen1[i]==='null') {document.getElementById(fen).innerHTML = ' ';}
		else {document.getElementById(fen).innerHTML = arr_all_fen1[i]+'<br><br>'+arr_all_fen2[i];}
		document.getElementById(v).innerHTML = arr_all_v[i];
		document.getElementById(ser).innerHTML = arr_all_ser[i];
		document.getElementById(kod_don).innerHTML = arr_all_kod_don[i];
		document.getElementById(dat_zagotov).innerHTML = arr_all_dat_zagotov[i];
		document.getElementById(godn).innerHTML = arr_all_godn[i];
		document.getElementById(proizv).innerHTML = arr_all_proizv[i];
		document.getElementById(vr_naim).innerHTML = arr_all_full_name[i];
		document.getElementById(vr_ser).innerHTML = arr_all_ser[i];
		document.getElementById(vr_nach).innerHTML = arr_all_vr_nach[i];
		document.getElementById(vr_kon).innerHTML = arr_all_vr_kon[i];
		
		if (arr_all_vr_v_itog[i]===null|| arr_all_vr_v_itog[i]==='null'|| arr_all_vr_v_itog[i]===undefined|| arr_all_vr_v_itog[i]==='undefined'|| arr_all_vr_v_itog[i]===''){
			document.getElementById(vr_v_itog).innerHTML = '';
		}
		else{
			document.getElementById(vr_v_itog).innerHTML = arr_all_vr_v_itog[i];
		}
	}
	
///Проверка группы крови
	///
	document.getElementById('rec_grup2').innerHTML = localStorage.getItem('rec_grup');
	document.getElementById('rec_rez2').innerHTML = localStorage.getItem('rec_rez');
		
	///Реактивы и наименование проб на совместимость
	
	///Таблица наблюдения
	////
	for (i = 0; i < 4; i++) {
		nabl_ad = 'nabl_ad_' + i;
		nabl_4ss = 'nabl_4ss_' + i;
		nabl_t = 'nabl_t_' + i;
		nabl_diur = 'nabl_diur_' + i;
		nabl_cvet = 'nabl_cvet_' + i;
        nabl_cvet_itog = 'nabl_cvet_itog_' + i;
		
		document.getElementById(nabl_ad).innerHTML = localStorage.getItem(nabl_ad);
		document.getElementById(nabl_4ss).innerHTML = localStorage.getItem(nabl_4ss);
		document.getElementById(nabl_t).innerHTML = localStorage.getItem(nabl_t);
		document.getElementById(nabl_diur).innerHTML = localStorage.getItem(nabl_diur);
		document.getElementById(nabl_cvet).innerHTML = localStorage.getItem(nabl_cvet_itog);
	}
	i=null; n=null; vr=null; vr_naim=null; vr_ser=null; vr_nach=null; vr_kon=null; vr_v_itog=null; nabl_ad=null; nabl_4ss=null; nabl_t=null; nabl_diur=null; nabl_cvet=null; nabl_cvet_itog=null;
}

function tabl_ztk_er(){
	"use strict";
	if (localStorage.getItem('gem_vkl')===null|| localStorage.getItem('gem_vkl')===undefined|| localStorage.getItem('gem_vkl')==='null'|| localStorage.getItem('gem_vkl')==='undefined'|| localStorage.getItem('gem_vkl')===''){
		n=0;
	}
	else {
	n=0;
	for (i = 0; i < arr_er_full_name.length; i++) {
		n=n+1;
		g='g'+n+'_ztk_er';
		gem= 'gem' + n;
		full_name = gem + '_full_name_ztk_er';
		grup = gem + '_grup_ztk_er';
		rez = gem + '_rez_ztk_er';
		fen = gem + '_fen_ztk_er';
		v = gem + '_v_ztk_er';
		ser = gem + '_ser_ztk_er';
		kod_don = gem + '_kod_don_ztk_er';
		dat_zagotov = gem + '_dat_zagotov_ztk_er';
		godn = gem + '_godn_ztk_er';
		proizv = gem + '_proizv_ztk_er';
		
		document.getElementById(g).innerHTML = n+'.';
		document.getElementById(full_name).innerHTML = arr_er_full_name[i];
		document.getElementById(grup).innerHTML = arr_er_grup[i];
		document.getElementById(rez).innerHTML = arr_er_rez[i];
		if (arr_er_fen1[i]===null) {document.getElementById(fen).innerHTML = ' ';}
		else {document.getElementById(fen).innerHTML = arr_er_fen1[i]+'<br><br>'+arr_er_fen2[i];}
		document.getElementById(v).innerHTML = arr_er_v[i];
		document.getElementById(ser).innerHTML = arr_er_ser[i];
		document.getElementById(kod_don).innerHTML = arr_er_kod_don[i];
		document.getElementById(dat_zagotov).innerHTML = arr_er_dat_zagotov[i];
		document.getElementById(godn).innerHTML = arr_er_godn[i];
		document.getElementById(proizv).innerHTML = arr_er_proizv[i];
	}
	}
}

function tabl_ztk_szp(){
	"use strict";
	if (localStorage.getItem('gem_vkl')===null|| localStorage.getItem('gem_vkl')===undefined|| localStorage.getItem('gem_vkl')==='null'|| localStorage.getItem('gem_vkl')==='undefined'|| localStorage.getItem('gem_vkl')===''){
		n=0;
	}
	else {
	n=0;
	for (i = 0; i < arr_szp_full_name.length; i++) {
		n=n+1;
		g='g'+n+'_ztk_szp';
		gem= 'gem' + n;
		full_name = gem + '_full_name_ztk_szp';
		grup = gem + '_grup_ztk_szp';
		rez = gem + '_rez_ztk_szp';
		fen = gem + '_fen_ztk_szp';
		v = gem + '_v_ztk_szp';
		ser = gem + '_ser_ztk_szp';
		kod_don = gem + '_kod_don_ztk_szp';
		dat_zagotov = gem + '_dat_zagotov_ztk_szp';
		godn = gem + '_godn_ztk_szp';
		proizv = gem + '_proizv_ztk_szp';
		
		document.getElementById(g).innerHTML = n+'.';
		document.getElementById(full_name).innerHTML = arr_szp_full_name[i];
		document.getElementById(grup).innerHTML = arr_szp_grup[i];
		document.getElementById(rez).innerHTML = arr_szp_rez[i];
		if (arr_szp_fen1[i]===null) {document.getElementById(fen).innerHTML = ' ';}
		else {document.getElementById(fen).innerHTML = arr_szp_fen1[i]+'<br><br>'+arr_szp_fen2[i];}
		document.getElementById(v).innerHTML = arr_szp_v[i];
		document.getElementById(ser).innerHTML = arr_szp_ser[i];
		document.getElementById(kod_don).innerHTML = arr_szp_kod_don[i];
		document.getElementById(dat_zagotov).innerHTML = arr_szp_dat_zagotov[i];
		document.getElementById(godn).innerHTML = arr_szp_godn[i];
		document.getElementById(proizv).innerHTML = arr_szp_proizv[i];
	}
	}	
}

function tabl_ztk_tr(){
	"use strict";
	if (localStorage.getItem('gem_vkl')===null|| localStorage.getItem('gem_vkl')===undefined|| localStorage.getItem('gem_vkl')==='null'|| localStorage.getItem('gem_vkl')==='undefined'|| localStorage.getItem('gem_vkl')===''){
		n=0;
	}
	else {
	n=0;
	for (i = 0; i < arr_tr_full_name.length; i++) {
		n=n+1;
		g='g'+n+'_ztk_tr';
		gem= 'gem' + n;
		full_name = gem + '_full_name_ztk_tr';
		grup = gem + '_grup_ztk_tr';
		rez = gem + '_rez_ztk_tr';
		fen = gem + '_fen_ztk_tr';
		v = gem + '_v_ztk_tr';
		ser = gem + '_ser_ztk_tr';
		kod_don = gem + '_kod_don_ztk_tr';
		dat_zagotov = gem + '_dat_zagotov_ztk_tr';
		godn = gem + '_godn_ztk_tr';
		proizv = gem + '_proizv_ztk_tr';
		
		document.getElementById(g).innerHTML = n+'.';
		document.getElementById(full_name).innerHTML = arr_tr_full_name[i];
		document.getElementById(grup).innerHTML = arr_tr_grup[i];
		document.getElementById(rez).innerHTML = arr_tr_rez[i];
		if (arr_tr_fen1[i]===null) {document.getElementById(fen).innerHTML = ' ';}
		else {document.getElementById(fen).innerHTML = arr_tr_fen1[i]+'<br><br>'+arr_tr_fen2[i];}
		document.getElementById(v).innerHTML = arr_tr_v[i];
		document.getElementById(ser).innerHTML = arr_tr_ser[i];
		document.getElementById(kod_don).innerHTML = arr_tr_kod_don[i];
		document.getElementById(dat_zagotov).innerHTML = arr_tr_dat_zagotov[i];
		document.getElementById(godn).innerHTML = arr_tr_godn[i];
		document.getElementById(proizv).innerHTML = arr_tr_proizv[i];
	}
}
}

function ztk_pages1(){
	"use strict";
var e, p, t;
	
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
	
	/// 000
	if (e==='-'&& p==='-'&& t==='-'){
		document.getElementById('ztk_page1_').style.display='none';
		document.getElementById('ztk_page2_').style.display='none';
		document.getElementById('ztk_page3_').style.display='none';
	}
	/// 111
	else if (e==='+'&& p==='+'&& t==='+'){
		document.getElementById('ztk_page1_').style.display='inline';
		document.getElementById('ztk_page2_').style.display='inline';
		document.getElementById('ztk_page3_').style.display='inline';
	}
	// 110
	else if (e==='-'&& p==='+'&& t==='+'){
		document.getElementById('ztk_page1_').style.display='none';
		document.getElementById('ztk_page2_').style.display='inline';
		document.getElementById('ztk_page3_').style.display='inline';
	}
	else if (e==='+'&& p==='-'&& t==='+'){
		document.getElementById('ztk_page1_').style.display='inline';
		document.getElementById('ztk_page2_').style.display='none';
		document.getElementById('ztk_page3_').style.display='inline';
	}
	else if (e==='+'&& p==='+'&& t==='-'){
		document.getElementById('ztk_page1_').style.display='inline';
		document.getElementById('ztk_page2_').style.display='inline';
		document.getElementById('ztk_page3_').style.display='none';
	}
	// 100	
	else if (e==='-'&& p==='-'&& t==='+'){
		document.getElementById('ztk_page1_').style.display='none';
		document.getElementById('ztk_page2_').style.display='none';
		document.getElementById('ztk_page3_').style.display='inline';
	}
	else if (e==='-'&& p==='+'&& t==='-'){
		document.getElementById('ztk_page1_').style.display='none';
		document.getElementById('ztk_page2_').style.display='inline';
		document.getElementById('ztk_page3_').style.display='none';
	}
	else if (e==='+'&& p==='-'&& t==='-'){
		document.getElementById('ztk_page1_').style.display='inline';
		document.getElementById('ztk_page2_').style.display='none';
		document.getElementById('ztk_page3_').style.display='none';
	}
	e=null;p=null;t=null;
}

function ztk_pages2(){
	"use strict";
	if (localStorage.getItem('ztk_page')==='1'){
		if (localStorage.getItem('ztk_page_er')==='er_2'){
			document.getElementById('ztk_page_er_2').checked=true;
		}
		else {
			document.getElementById('ztk_page_er_1').checked=true;
			localStorage.setItem('ztk_page_er','er_1');
		}		
		if (document.getElementById('ztk_page_er_1').checked===true){
			document.getElementById('protocol_ztk_er').style.display='';
			document.getElementById('protocol_ztk_er2').style.display='none';
		}
		else if (document.getElementById('ztk_page_er_2').checked===true){
			document.getElementById('protocol_ztk_er').style.display='none';
			document.getElementById('protocol_ztk_er2').style.display='';
		}
		document.getElementById('protocol_ztk_szp').style.display='none';
		document.getElementById('protocol_ztk_tr').style.display='none';
		document.getElementById('protocol_ztk_szp2').style.display='none';
		document.getElementById('protocol_ztk_tr2').style.display='none';
		document.getElementById('ztk_page_er_span').style.display='';
		document.getElementById('ztk_page_szp_span').style.display='none';
		document.getElementById('ztk_page_tr_span').style.display='none';
		
	}
	else if (localStorage.getItem('ztk_page')==='2'){
		if (localStorage.getItem('ztk_page_szp')==='szp_2'){
			document.getElementById('ztk_page_szp_2').checked=true;
		}
		else {
			document.getElementById('ztk_page_szp_1').checked=true;
			localStorage.setItem('ztk_page_szp','szp_1');
		}		
		if (document.getElementById('ztk_page_szp_1').checked===true){
			document.getElementById('protocol_ztk_szp').style.display='';
			document.getElementById('protocol_ztk_szp2').style.display='none';
		}
		else if (document.getElementById('ztk_page_szp_2').checked===true){
			document.getElementById('protocol_ztk_szp').style.display='none';
			document.getElementById('protocol_ztk_szp2').style.display='';
		}		
		document.getElementById('protocol_ztk_er').style.display='none';
		document.getElementById('protocol_ztk_tr').style.display='none';
		document.getElementById('protocol_ztk_er2').style.display='none';
		document.getElementById('protocol_ztk_tr2').style.display='none';
		document.getElementById('ztk_page_er_span').style.display='none';
		document.getElementById('ztk_page_szp_span').style.display='';
		document.getElementById('ztk_page_tr_span').style.display='none';
	}
	else if (localStorage.getItem('ztk_page')==='3'){
		if (localStorage.getItem('ztk_page_tr')==='tr_2'){
			document.getElementById('ztk_page_tr_2').checked=true;
		}
		else {
			document.getElementById('ztk_page_tr_1').checked=true;
			localStorage.setItem('ztk_page_tr','tr_1');
		}		
		if (document.getElementById('ztk_page_tr_1').checked===true){
			document.getElementById('protocol_ztk_tr').style.display='';
			document.getElementById('protocol_ztk_tr2').style.display='none';
		}
		else if (document.getElementById('ztk_page_tr_2').checked===true){
			document.getElementById('protocol_ztk_tr').style.display='none';
			document.getElementById('protocol_ztk_tr2').style.display='';
		}		
		document.getElementById('protocol_ztk_er').style.display='none';
		document.getElementById('protocol_ztk_szp').style.display='none';
		document.getElementById('protocol_ztk_er2').style.display='none';
		document.getElementById('protocol_ztk_szp2').style.display='none';
		document.getElementById('ztk_page_er_span').style.display='none';
		document.getElementById('ztk_page_szp_span').style.display='none';
		document.getElementById('ztk_page_tr_span').style.display='';
	}
}

function prtr_pages(){
	"use strict";
	if (localStorage.getItem('prtr_page')==='1'){
		document.getElementById('protocol_1.1').style.display='block';
		document.getElementById('protocol_1.2').style.display='none';
		document.getElementById('protocol_4').style.display='none';
	}
	else if (localStorage.getItem('prtr_page')==='2'){
		document.getElementById('protocol_1.1').style.display='none';
		document.getElementById('protocol_1.2').style.display='block';
		document.getElementById('protocol_4').style.display='none';
	}
	else if (localStorage.getItem('prtr_page')==='3'){
		document.getElementById('protocol_1.1').style.display='none';
		document.getElementById('protocol_1.2').style.display='none';
		document.getElementById('protocol_4').style.display='block';
	}
}

function nl_pages(){
	"use strict";
	if (localStorage.getItem('nl_page')==='1'){
		document.getElementById('protocol_nl').style.display='block';
		document.getElementById('protocol_nl2').style.display='none';
	}
	else if (localStorage.getItem('nl_page')==='2'){
		document.getElementById('protocol_nl').style.display='none';
		document.getElementById('protocol_nl2').style.display='block';
	}
}

function tabl_massivy(){
	"use strict";
		
	for (i = 1; i<9; i++) {
		gem= 'gem'+i; 
		vr= 'vr'+i;
		naim_glav = gem + '_naim_glav';
		full_name = gem + '_full_name';
		grup = gem + '_grup';
		rez = gem + '_rez';
		fen1 = gem + '_fen1';
		fen2 = gem + '_fen2';
		v = gem + '_v';
		ser = gem + '_ser';
		kod_don = gem + '_kod_don';
		dat_zagotov = gem + '_dat_zagotov';
		godn = gem + '_godn';
		proizv = gem + '_proizv';
		vr_nach = vr + '_nach';
		vr_kon = vr + '_kon';
        vr_v_itog = vr + '_v_itog';
		
		if (localStorage.getItem(naim_glav)===''||
			localStorage.getItem(naim_glav)===null||
			localStorage.getItem(naim_glav)===undefined){
			continue;
		}
		else {	
		arr_all_full_name.push(localStorage.getItem(full_name));
		arr_all_naim_glav.push(localStorage.getItem(naim_glav));
		arr_all_grup.push(localStorage.getItem(grup));
		arr_all_rez.push(localStorage.getItem(rez));
		arr_all_fen1.push(localStorage.getItem(fen1)); 
		arr_all_fen2.push(localStorage.getItem(fen2));
		arr_all_v.push(localStorage.getItem(v));
			
			if (localStorage.getItem(ser)===null){
				arr_all_ser.push(' ');
			}
			else{
				arr_all_ser.push(localStorage.getItem(ser));
			}	
			
		arr_all_kod_don.push(localStorage.getItem(kod_don));
		arr_all_dat_zagotov.push(localStorage.getItem(dat_zagotov));
		arr_all_godn.push(localStorage.getItem(godn));
		arr_all_proizv.push(localStorage.getItem(proizv));
		arr_all_vr_nach.push(localStorage.getItem(vr_nach));
		arr_all_vr_kon.push(localStorage.getItem(vr_kon));
		arr_all_vr_v_itog.push(localStorage.getItem(vr_v_itog));
			
			if (localStorage.getItem(naim_glav)==='Эритроциты'||
				localStorage.getItem(naim_glav)==='Эритроцитная взвесь'||
				localStorage.getItem(naim_glav)==='Эритроцитная масса'||
				localStorage.getItem(naim_glav)==='Кровь консервированная'){
				
				arr_er_full_name.push(localStorage.getItem(full_name));
				arr_er_naim_glav.push(localStorage.getItem(naim_glav));
				arr_er_grup.push(localStorage.getItem(grup));
				arr_er_rez.push(localStorage.getItem(rez));
				arr_er_fen1.push(localStorage.getItem(fen1));
				arr_er_fen2.push(localStorage.getItem(fen2));
				arr_er_v.push(localStorage.getItem(v));
				
				if (localStorage.getItem(ser)===null){
					arr_er_ser.push(' ');
				}
				else{
					arr_er_ser.push(localStorage.getItem(ser));
				}
				
				arr_er_kod_don.push(localStorage.getItem(kod_don));
				arr_er_dat_zagotov.push(localStorage.getItem(dat_zagotov));
				arr_er_godn.push(localStorage.getItem(godn));
				arr_er_proizv.push(localStorage.getItem(proizv));
				arr_er_vr_nach.push(localStorage.getItem(vr_nach));
				arr_er_vr_kon.push(localStorage.getItem(vr_kon));
				arr_er_vr_v_itog.push(localStorage.getItem(vr_v_itog));
			}
			
			if (localStorage.getItem(naim_glav)==='Плазма'||
				localStorage.getItem(naim_glav)==='Свежезамороженная плазма'||
				localStorage.getItem(naim_glav)==='Криопреципитат'){
				
				arr_szp_full_name.push(localStorage.getItem(full_name));
				arr_szp_naim_glav.push(localStorage.getItem(naim_glav));
				arr_szp_grup.push(localStorage.getItem(grup));
				arr_szp_rez.push(localStorage.getItem(rez));
				arr_szp_fen1.push(localStorage.getItem(fen1));
				arr_szp_fen2.push(localStorage.getItem(fen2));
				arr_szp_v.push(localStorage.getItem(v));
				
				if (localStorage.getItem(ser)===null){
					arr_szp_ser.push(' ');
				}
				else{
					arr_szp_ser.push(localStorage.getItem(ser));
				}
				
				arr_szp_kod_don.push(localStorage.getItem(kod_don));
				arr_szp_dat_zagotov.push(localStorage.getItem(dat_zagotov));
				arr_szp_godn.push(localStorage.getItem(godn));
				arr_szp_proizv.push(localStorage.getItem(proizv));
				arr_szp_vr_nach.push(localStorage.getItem(vr_nach));

				arr_szp_vr_kon.push(localStorage.getItem(vr_kon));
				arr_szp_vr_v_itog.push(localStorage.getItem(vr_v_itog));
			}
			
			if (localStorage.getItem(naim_glav)==='Тромбоциты'||
				localStorage.getItem(naim_glav)==='Тромбоцитный концентрат'||
				localStorage.getItem(naim_glav)==='Концентрат тромбоцитов'){
				
				arr_tr_full_name.push(localStorage.getItem(full_name));
				arr_tr_naim_glav.push(localStorage.getItem(naim_glav));
				arr_tr_grup.push(localStorage.getItem(grup));
				arr_tr_rez.push(localStorage.getItem(rez));
				arr_tr_fen1.push(localStorage.getItem(fen1));
				arr_tr_fen2.push(localStorage.getItem(fen2));
				arr_tr_v.push(localStorage.getItem(v));
				
				if (localStorage.getItem(ser)===null){
					arr_tr_ser.push(' ');
				}
				else{
					arr_tr_ser.push(localStorage.getItem(ser));
				}
				
				arr_tr_kod_don.push(localStorage.getItem(kod_don));
				arr_tr_dat_zagotov.push(localStorage.getItem(dat_zagotov));
				arr_tr_godn.push(localStorage.getItem(godn));
				arr_tr_proizv.push(localStorage.getItem(proizv));
				arr_tr_vr_nach.push(localStorage.getItem(vr_nach));
				arr_tr_vr_kon.push(localStorage.getItem(vr_kon));
				arr_tr_vr_v_itog.push(localStorage.getItem(vr_v_itog));
			}
		}
		
	gem=null; vr=null; naim_glav=null; full_name=null; grup=null; rez=null; fen1=null; fen2=null; v=null; ser=null; kod_don=null; dat_zagotov=null; godn=null; proizv=null; vr_nach=null; vr_kon=null; vr_v_itog=null;
	}
}

function check_session_blank(){
	"use strict";	
if (sessionStorage.getItem('check_session_blank')===''|| 
	sessionStorage.getItem('check_session_blank')===null||
	sessionStorage.getItem('check_session_blank')==='null'||
	sessionStorage.getItem('check_session_blank')===undefined||
	sessionStorage.getItem('check_session_blank')==='undefined'||
	sessionStorage.getItem('check_session_blank')==='NaN'){
	sessionStorage.setItem('check_session_blank', 1);	
	x='nl_page';DS();	
	x='nl_page_ch';DS();	
	x='ztk_page';DS();	
	x='ztk_page_ch';DS();
	x='ztk_page_er';DS();
	x='ztk_page_szp';DS();
	x='ztk_page_tr';DS();
	x='prtr_page';DS();	
	x='prtr_page_ch';DS();	
}
else {
	sessionStorage.setItem('check_session_blank', 2);
}
}

var x;
function DS(){
	"use strict";
	localStorage.removeItem(x);
	x=null;
}