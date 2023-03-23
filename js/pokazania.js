function pokazania(){
	"use strict";
	
	var ob1, ob2, er1, er2, er3, er_dr, szp1, szp2, szp3, szp_dr, tr1, tr_dr, pokaz_ob_ock, pokaz_er_hbht, pokaz_hb, pokaz_ht;
		
if(document.getElementById('pokaz_er_drugie').checked===true){
	document.getElementById('pokaz_er_drugie_textarea').disabled=false;
	document.getElementById('pokaz_er_drugie_textarea').style.background = '';
	document.getElementById('pokaz_er_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_er_drugie_textarea').style.color = '';
	er_dr = ' ' + localStorage.getItem('pokaz_er_drugie_textarea');
}
	else {
	document.getElementById('pokaz_er_drugie_textarea').disabled=true;
	document.getElementById('pokaz_er_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_drugie_textarea').style.color = '#A7A7A7';
	er_dr = '';
	}
	
if(document.getElementById('pokaz_szp_drugie').checked===true){
	document.getElementById('pokaz_szp_drugie_textarea').disabled=false;
	document.getElementById('pokaz_szp_drugie_textarea').style.background = '';
	document.getElementById('pokaz_szp_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_szp_drugie_textarea').style.color = '';
	szp_dr = ' ' + localStorage.getItem('pokaz_szp_drugie_textarea');
}
	else {
	document.getElementById('pokaz_szp_drugie_textarea').disabled=true;
	document.getElementById('pokaz_szp_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_szp_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_szp_drugie_textarea').style.color = '#A7A7A7';
	szp_dr = '';
	}
	
if(document.getElementById('pokaz_tr_drugie').checked===true){
	document.getElementById('pokaz_tr_drugie_textarea').disabled=false;
	document.getElementById('pokaz_tr_drugie_textarea').style.background = '';
	document.getElementById('pokaz_tr_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_tr_drugie_textarea').style.color = '';
	tr_dr = ' ' + localStorage.getItem('pokaz_tr_drugie_textarea');
}
	else {
	document.getElementById('pokaz_tr_drugie_textarea').disabled=true;
	document.getElementById('pokaz_tr_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_tr_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_tr_drugie_textarea').style.color = '#A7A7A7';
	tr_dr = '';
	}
	
if (document.getElementById('pokaz_ob_ock_').checked===false && 
	document.getElementById('pokaz_ob_ock25').checked===false){
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '#F1F2F2';
	pokaz_ob_ock ='';
}
	else if (document.getElementById('pokaz_ob_ock_').checked===false && 
	document.getElementById('pokaz_ob_ock25').checked===true){
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '#F1F2F2';	
	pokaz_ob_ock = ' ' + document.getElementById('pokaz_ob_ock25').value;
}
	else {
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '';
	if (document.getElementById('pokaz_ob_ock_inptxt').value===''){	
		pokaz_ob_ock = document.getElementById('pokaz_ob_ock_').value + '___' + ' % ОЦК. ';
	}
		else {
		pokaz_ob_ock = document.getElementById('pokaz_ob_ock_').value + document.getElementById('pokaz_ob_ock_inptxt').value + ' % ОЦК. ';
		}
	}

if (document.getElementById('pokaz_er_hb_ht').checked===false && 
   document.getElementById('pokaz_er_hb70ht25').checked===false){
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '#F1F2F2';
	pokaz_er_hbht = '';
}
	else if (document.getElementById('pokaz_er_hb_ht').checked===false && document.getElementById('pokaz_er_hb70ht25').checked===true){
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '#F1F2F2';
	pokaz_er_hbht = document.getElementById('pokaz_er_hb70ht25').value;
}
	else {
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '';
	if (document.getElementById('pokaz_er_hb_inptxt').value===''){	
		pokaz_hb = '___';
	}
		else {
		pokaz_hb = document.getElementById('pokaz_er_hb_inptxt').value;
		}
	if (document.getElementById('pokaz_er_ht_inptxt').value===''){	
		pokaz_ht = '___';
	}
		else {
		pokaz_ht = document.getElementById('pokaz_er_ht_inptxt').value;
		}
	pokaz_er_hbht = 'Снижение HGB менее ' + pokaz_hb + ' г/л и HTC менее ' + pokaz_ht + ' %.'; 
	}
	
	ob1 = pokaz_ob_ock;
	ob2 = localStorage.getItem('pokaz_ob_prod_krovotech'); 
	er1 = localStorage.getItem('pokaz_er_anemia'); 
	er2 = localStorage.getItem('pokaz_er_vosp_kolich'); 
	er3 = pokaz_er_hbht; 
	szp1 = localStorage.getItem('pokaz_szp_deficit_fakt'); 
	szp2 = localStorage.getItem('pokaz_szp_peredoz'); 
	szp3 = localStorage.getItem('pokaz_szp_plazmaferez'); 
	tr1 = localStorage.getItem('pokaz_tr'); 
	
	if (ob1===null||ob1===undefined||ob1==='null'||ob1==='undefined'){ob1='';}
	if (ob2===null||ob2===undefined||ob2===null||ob2==='undefined'){ob2='';}
	if (er1===null||er1===undefined||er1==='null'||er1==='undefined'){er1='';}
	if (er2===null||er2===undefined||er2==='null'||er2==='undefined'){er2='';}
	if (er3===null||er3===undefined||er3==='null'||er3==='undefined'){er3='';}
	if (er_dr===null||er_dr===undefined||er_dr==='null'||er_dr==='undefined'){er_dr='';}
	if (szp1===null||szp1===undefined||szp1==='null'||szp1==='undefined'){szp1='';}
	if (szp2===null||szp2===undefined||szp2==='null'||szp2==='undefined'){szp2='';}
	if (szp3===null||szp3===undefined||szp3==='null'||szp3==='undefined'){szp3='';}
	if (szp_dr===null||szp_dr===undefined||szp_dr===null||szp_dr===undefined){szp_dr='';}
	if (tr1===null||tr1===undefined||tr1==='null'||tr1==='undefined'){tr1='';}
	if (tr_dr===null||tr_dr===undefined||tr_dr==='null'||tr_dr==='undefined'){tr_dr='';}
	
	localStorage.setItem('full_pokaz_all', ob1+ob2+er1+er2+er3+er_dr+szp1+szp2+szp3+szp_dr+tr1+tr_dr);
	
	if (er1==='' && er2==='' && er3==='' && er_dr===''){
		localStorage.setItem('full_pokaz_er', ob1+ob2);
	}
	else {
		localStorage.setItem('full_pokaz_er', er1+er2+er3+er_dr);
	}
	
	if (szp1==='' && szp2==='' && szp3==='' && szp_dr===''){
		localStorage.setItem('full_pokaz_szp', ob1+ob2);
	}
	else {
		localStorage.setItem('full_pokaz_szp', szp1+szp2+szp3+szp_dr);
	}
	
	if (tr1==='' && tr_dr===''){
		localStorage.setItem('full_pokaz_tr', ob1+ob2);
	}
	else {
		localStorage.setItem('full_pokaz_tr', tr1+tr_dr);
	}
	
}

function pokazania_start(){
	"use strict";
	
//////коррекция данных сессии/////
	
if (localStorage.getItem('pokaz_ob_ock')===null||
	localStorage.getItem('pokaz_ob_ock')===undefined||
	localStorage.getItem('pokaz_ob_ock')==='null'||
	localStorage.getItem('pokaz_ob_ock')==='undefined'){
	localStorage.setItem('pokaz_ob_ock','');
}	
if (localStorage.getItem('pokaz_ob_ock_inptxt')===null||
	localStorage.getItem('pokaz_ob_ock_inptxt')===undefined||
	localStorage.getItem('pokaz_ob_ock_inptxt')==='null'||
	localStorage.getItem('pokaz_ob_ock_inptxt')==='undefined'){
	localStorage.setItem('pokaz_ob_ock_inptxt','');
}	
if (localStorage.getItem('pokaz_ob_prod_krovotech')===null||
	localStorage.getItem('pokaz_ob_prod_krovotech')===undefined||
	localStorage.getItem('pokaz_ob_prod_krovotech')==='null'||
	localStorage.getItem('pokaz_ob_prod_krovotech')==='undefined'){
	localStorage.setItem('pokaz_ob_prod_krovotech','');
}
if (localStorage.getItem('pokaz_er_anemia')===null||
	localStorage.getItem('pokaz_er_anemia')===undefined||
	localStorage.getItem('pokaz_er_anemia')==='null'||
	localStorage.getItem('pokaz_er_anemia')==='undefined'){
	localStorage.setItem('pokaz_er_anemia','');
}
if (localStorage.getItem('pokaz_er_vosp_kolich')===null||
	localStorage.getItem('pokaz_er_vosp_kolich')===undefined||
	localStorage.getItem('pokaz_er_vosp_kolich')==='null'||
	localStorage.getItem('pokaz_er_vosp_kolich')==='undefined'){
	localStorage.setItem('pokaz_er_vosp_kolich','');
}
if (localStorage.getItem('pokaz_er_hbht')===null||
	localStorage.getItem('pokaz_er_hbht')===undefined||
	localStorage.getItem('pokaz_er_hbht')==='null'||
	localStorage.getItem('pokaz_er_hbht')==='undefined'){
	localStorage.setItem('pokaz_er_hbht','');
}
if (localStorage.getItem('pokaz_er_hb_inptxt')===null||
	localStorage.getItem('pokaz_er_hb_inptxt')===undefined||
	localStorage.getItem('pokaz_er_hb_inptxt')==='null'||
	localStorage.getItem('pokaz_er_hb_inptxt')==='undefined'){
	localStorage.setItem('pokaz_er_hb_inptxt','');
}
if (localStorage.getItem('pokaz_er_ht_inptxt')===null||
	localStorage.getItem('pokaz_er_ht_inptxt')===undefined||
	localStorage.getItem('pokaz_er_ht_inptxt')==='null'||
	localStorage.getItem('pokaz_er_ht_inptxt')==='undefined'){
	localStorage.setItem('pokaz_er_ht_inptxt','');
}
if (localStorage.getItem('pokaz_er_drugie')===null||
	localStorage.getItem('pokaz_er_drugie')===undefined||
	localStorage.getItem('pokaz_er_drugie')==='null'||
	localStorage.getItem('pokaz_er_drugie')==='undefined'){
	localStorage.setItem('pokaz_er_drugie','');
}
if (localStorage.getItem('pokaz_er_drugie_textarea')===null||
	localStorage.getItem('pokaz_er_drugie_textarea')===undefined||
	localStorage.getItem('pokaz_er_drugie_textarea')==='null'||
	localStorage.getItem('pokaz_er_drugie_textarea')==='undefined'){
	localStorage.setItem('pokaz_er_drugie_textarea','');
}
if (localStorage.getItem('pokaz_szp_deficit_fakt')===null||
	localStorage.getItem('pokaz_szp_deficit_fakt')===undefined||
	localStorage.getItem('pokaz_szp_deficit_fakt')==='null'||
	localStorage.getItem('pokaz_szp_deficit_fakt')==='undefined'){
	localStorage.setItem('pokaz_szp_deficit_fakt','');
}
if (localStorage.getItem('pokaz_szp_peredoz')===null||
	localStorage.getItem('pokaz_szp_peredoz')===undefined||
	localStorage.getItem('pokaz_szp_peredoz')==='null'||
	localStorage.getItem('pokaz_szp_peredoz')==='undefined'){
	localStorage.setItem('pokaz_szp_peredoz','');
}
if (localStorage.getItem('pokaz_szp_plazmaferez')===null||
	localStorage.getItem('pokaz_szp_plazmaferez')===undefined||
	localStorage.getItem('pokaz_szp_plazmaferez')==='null'||
	localStorage.getItem('pokaz_szp_plazmaferez')==='undefined'){
	localStorage.setItem('pokaz_szp_plazmaferez','');
}
if (localStorage.getItem('pokaz_szp_drugie')===null||
	localStorage.getItem('pokaz_szp_drugie')===undefined||
	localStorage.getItem('pokaz_szp_drugie')==='null'||
	localStorage.getItem('pokaz_szp_drugie')==='undefined'){
	localStorage.setItem('pokaz_szp_drugie','');
}
if (localStorage.getItem('pokaz_szp_drugie_textarea')===null||
	localStorage.getItem('pokaz_szp_drugie_textarea')===undefined||
	localStorage.getItem('pokaz_szp_drugie_textarea')==='null'||
	localStorage.getItem('pokaz_szp_drugie_textarea')==='undefined'){
	localStorage.setItem('pokaz_szp_drugie_textarea','');
}
if (localStorage.getItem('pokaz_tr')===null||
	localStorage.getItem('pokaz_tr')===undefined||
	localStorage.getItem('pokaz_tr')==='null'||
	localStorage.getItem('pokaz_tr')==='undefined'){
	localStorage.setItem('pokaz_tr','');
}
if (localStorage.getItem('pokaz_tr_drugie')===null||
	localStorage.getItem('pokaz_tr_drugie')===undefined||
	localStorage.getItem('pokaz_tr_drugie')==='null'||
	localStorage.getItem('pokaz_tr_drugie')==='undefined'){
	localStorage.setItem('pokaz_tr_drugie','');
}
if (localStorage.getItem('pokaz_tr_drugie_textarea')===null||
	localStorage.getItem('pokaz_tr_drugie_textarea')===undefined||
	localStorage.getItem('pokaz_tr_drugie_textarea')==='null'||
	localStorage.getItem('pokaz_tr_drugie_textarea')==='undefined'){
	localStorage.setItem('pokaz_tr_drugie_textarea','');
}

////// Чекбоксы /////	
	
if(localStorage.getItem('pokaz_ob_prod_krovotech')!==''){
	document.getElementById('pokaz_ob_prod_krovotech').checked=true;
}
if(localStorage.getItem('pokaz_er_anemia')!==''){
	document.getElementById('pokaz_er_anemia').checked=true;
}
if(localStorage.getItem('pokaz_er_vosp_kolich')!==''){
	document.getElementById('pokaz_er_vosp_kolich').checked=true;
}
if(localStorage.getItem('pokaz_szp_deficit_fakt')!==''){
	document.getElementById('pokaz_szp_deficit_fakt').checked=true;
}
if(localStorage.getItem('pokaz_szp_peredoz')!==''){
	document.getElementById('pokaz_szp_peredoz').checked=true;
}
if(localStorage.getItem('pokaz_szp_plazmaferez')!==''){
   document.getElementById('pokaz_szp_plazmaferez').checked=true;
}
	
if(localStorage.getItem('pokaz_er_drugie')!==''){
	document.getElementById('pokaz_er_drugie').checked=true;
	document.getElementById('pokaz_er_drugie_textarea').disabled=false;
	document.getElementById('pokaz_er_drugie_textarea').style.background = '';
	document.getElementById('pokaz_er_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_er_drugie_textarea').style.color = '';
}
	else {
	document.getElementById('pokaz_er_drugie_textarea').disabled=true;
	document.getElementById('pokaz_er_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_drugie_textarea').style.color = '#A7A7A7';
	}
	
if(localStorage.getItem('pokaz_szp_drugie')!==''){
	document.getElementById('pokaz_szp_drugie').checked=true;
	document.getElementById('pokaz_szp_drugie_textarea').disabled=false;
	document.getElementById('pokaz_szp_drugie_textarea').style.background = '';
	document.getElementById('pokaz_szp_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_szp_drugie_textarea').style.color = '';
}
	else {
	document.getElementById('pokaz_szp_drugie_textarea').disabled=true;
	document.getElementById('pokaz_szp_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_szp_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_szp_drugie_textarea').style.color = '#A7A7A7';
	}
	
if(localStorage.getItem('pokaz_tr_drugie')!==''){
	document.getElementById('pokaz_tr_drugie').checked=true;
	document.getElementById('pokaz_tr_drugie_textarea').disabled=false;
	document.getElementById('pokaz_tr_drugie_textarea').style.background = '';
	document.getElementById('pokaz_tr_drugie_textarea').style.borderColor = '';
	document.getElementById('pokaz_tr_drugie_textarea').style.color = '';
}
	else {
	document.getElementById('pokaz_tr_drugie_textarea').disabled=true;
	document.getElementById('pokaz_tr_drugie_textarea').style.background = '#F1F2F2';
	document.getElementById('pokaz_tr_drugie_textarea').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_tr_drugie_textarea').style.color = '#A7A7A7';
	}
	
// Текстровые поля и текстовые инпуты //

document.getElementById('pokaz_er_drugie_textarea').value=
	localStorage.getItem('pokaz_er_drugie_textarea');
document.getElementById('pokaz_szp_drugie_textarea').value=
	localStorage.getItem('pokaz_szp_drugie_textarea');
document.getElementById('pokaz_tr_drugie_textarea').value=
	localStorage.getItem('pokaz_tr_drugie_textarea');	
	
document.getElementById('pokaz_ob_ock_inptxt').value=
	localStorage.getItem('pokaz_ob_ock_inptxt');
document.getElementById('pokaz_er_hb_inptxt').value=
	localStorage.getItem('pokaz_er_hb_inptxt');
document.getElementById('pokaz_er_ht_inptxt').value=
	localStorage.getItem('pokaz_er_ht_inptxt');

if (localStorage.getItem('pokaz_ob_ock')===''){
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_ob_ock25').checked=false;
	document.getElementById('pokaz_ob_ock_').checked=false;
}
	else if (localStorage.getItem('pokaz_ob_ock')==='Острая кровопотеря более 25% ОЦК. '){
	document.getElementById('pokaz_ob_ock25').checked=true;
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '#F1F2F2';
}
	else {
	document.getElementById('pokaz_ob_ock_').checked=true;
	document.getElementById('pokaz_ob_ock_inptxt').style.borderColor = '';
	document.getElementById('pokaz_ob_ock_inptxt').style.color = '';
	document.getElementById('pokaz_ob_ock_inptxt').style.background = '';
	}	
	
if (localStorage.getItem('pokaz_er_hbht')===''){
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_hb70ht25').checked=false;
	document.getElementById('pokaz_er_hb_ht').checked=false;
}
	else if (localStorage.getItem('pokaz_er_hbht')==='Снижение HGB менее 70 г/л и HTC менее 25%. '){
	document.getElementById('pokaz_er_hb70ht25').checked=true;
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '#F1F2F2';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '#A7A7A7';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '#F1F2F2';
}
	else {
	document.getElementById('pokaz_er_hb_ht').checked=true;
	document.getElementById('pokaz_er_hb_inptxt').style.borderColor = '';
	document.getElementById('pokaz_er_hb_inptxt').style.color = '';
	document.getElementById('pokaz_er_hb_inptxt').style.background = '';
	document.getElementById('pokaz_er_ht_inptxt').style.borderColor = '';
	document.getElementById('pokaz_er_ht_inptxt').style.color = '';
	document.getElementById('pokaz_er_ht_inptxt').style.background = '';
	}	
	
if (localStorage.getItem('pokaz_tr')===''){
	document.getElementById('pokaz_tr_gemorr_sindr').checked=false;
	document.getElementById('pokaz_tr_vysokij_risk').checked=false;
}
	else if (localStorage.getItem('pokaz_tr')==='Тромбоцитопения, геморрагический синдром. '){
		document.getElementById('pokaz_tr_gemorr_sindr').checked=true;
}
	else if (localStorage.getItem('pokaz_tr')==='Тромбоцитопения, высокий риск кровотечения. '){
		document.getElementById('pokaz_tr_vysokij_risk').checked=true;
	}
	
pokazania();	
}