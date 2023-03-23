var gem, fen1, fen2, fen_out, fen_out1, fen_out2, fen_height, grup_rez, grup, rez, C1, c0, Cw, D, Dw, E1, e0, K1, k0, ss_C1, ss_c0, ss_Cw, ss_D, ss_Dw, ss_E1, ss_e0, ss_K1, ss_k0, s_C, s_Cw, s_D, s_E, s_K, s_Dw;

var grup_rez_11, grup_rez_10,grup_rez_21, grup_rez_20, grup_rez_31, grup_rez_30, grup_rez_41, grup_rez_40;


var C1_min, C1_pl, c0_min, c0_pl;
var D_min, D_pl, Dw_pl, Cw_min, Cw_pl, E1_min, E1_pl, e0_min, e0_pl, K1_min, K1_pl, k0_min, k0_pl;

function gr_fen(){
	"use strict";
	fen1 = gem + 'fen1';
	fen2 = gem + 'fen2';
	fen_out = gem + 'fen_out';
	fen_out1 = gem + 'fen_out1';
	fen_out2 = gem + 'fen_out2';
	fen_height = gem + 'fen_height';
	grup_rez = gem + 'grup_rez';
	grup = gem + 'grup';
	grup_rez_11 = gem + 'grup_rez_11';
	grup_rez_10 = gem + 'grup_rez_10';
	grup_rez_21 = gem + 'grup_rez_21';
	grup_rez_20 = gem + 'grup_rez_20';
	grup_rez_31 = gem + 'grup_rez_31';
	grup_rez_30 = gem + 'grup_rez_30';
	grup_rez_41 = gem + 'grup_rez_41';
	grup_rez_40 = gem + 'grup_rez_40';
	rez = gem + 'rez';
	C1 = gem + 'fen_C1';
	c0 = gem + 'fen_c0';
	Cw = gem + 'fen_Cw';
	D = gem + 'fen_D';
	Dw = gem + 'fen_Dw';
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
	ss_C1 = localStorage.getItem(C1);
	ss_c0 = localStorage.getItem(c0);
	ss_Cw = localStorage.getItem(Cw);
	ss_D = localStorage.getItem(D);
	ss_Dw = localStorage.getItem(Dw);
	ss_E1 = localStorage.getItem(E1);
	ss_e0 = localStorage.getItem(e0);
	ss_K1 = localStorage.getItem(K1);
	ss_k0 = localStorage.getItem(k0);
	grup_rez = localStorage.getItem(grup_rez);
	
	if (grup_rez===undefined||grup_rez===null||grup_rez===''){
				localStorage.setItem(grup,'');
				localStorage.setItem(rez,'');
				document.getElementById(grup_rez_10).checked=false;
				document.getElementById(grup_rez_11).checked=false;
				document.getElementById(grup_rez_20).checked=false;
				document.getElementById(grup_rez_21).checked=false;
				document.getElementById(grup_rez_30).checked=false;
				document.getElementById(grup_rez_31).checked=false;
				document.getElementById(grup_rez_40).checked=false;
				document.getElementById(grup_rez_41).checked=false;
	}
	switch(grup_rez) {
			case'10':
				localStorage.setItem(grup, 'O(I)');
				localStorage.setItem(rez, 'Rh(-) отриц.');
				document.getElementById(grup_rez_10).checked=true;
				break;	
			case'20':
				localStorage.setItem(grup, 'A(II)');
				localStorage.setItem(rez, 'Rh(-) отриц.');
				document.getElementById(grup_rez_20).checked=true;
				break;	
			case'30': 
				localStorage.setItem(grup, 'B(III)');
				localStorage.setItem(rez, 'Rh(-) отриц.');
				document.getElementById(grup_rez_30).checked=true;
				break;	
			case'40':
				localStorage.setItem(grup, 'AB(IV)');
				localStorage.setItem(rez, 'Rh(-) отриц.');
				document.getElementById(grup_rez_40).checked=true;
				break;							   
			case'11':
				localStorage.setItem(grup, 'O(I)');
				localStorage.setItem(rez, 'Rh(+) полож.');
				document.getElementById(grup_rez_11).checked=true;
				break;				   
			case'21':
				localStorage.setItem(grup, 'A(II)');
				localStorage.setItem(rez, 'Rh(+) полож.');
				document.getElementById(grup_rez_21).checked=true;
				break;		
			case'31':
				localStorage.setItem(grup, 'B(III)');
				localStorage.setItem(rez, 'Rh(+) полож.');
				document.getElementById(grup_rez_31).checked=true;
				break;	
			case'41':
				localStorage.setItem(grup, 'AB(IV)');
				localStorage.setItem(rez, 'Rh(+) полож.');
				document.getElementById(grup_rez_41).checked=true;
				break;	
		}
	
	switch(localStorage.getItem(Cw)){
		case'':  document.getElementById(Cw_min).checked=false;
	document.getElementById(Cw_pl).checked=false; break;
		case'+': document.getElementById(Cw_min).checked=false;
	document.getElementById(Cw_pl).checked=true; break;
		case'-': document.getElementById(Cw_pl).checked=false;
	document.getElementById(Cw_min).checked=true; break;
	}
	
	if (ss_C1===null || ss_C1===undefined || ss_C1==='null' || ss_C1==='undefined' || ss_C1==='NaN' || ss_C1===''){
		ss_C1=''
		document.getElementById(C1_pl).checked=false;
		document.getElementById(C1_min).checked=false;
	}
	else {
		switch(ss_C1) {
			case '+': ss_C1='C+ ';
			document.getElementById(C1_pl).checked=true; break;
			case '-': ss_C1='C- ';
			document.getElementById(C1_min).checked=true; break;
		}
	}
	
	if (ss_c0===null || ss_c0===undefined || ss_c0==='null' || ss_c0==='undefined' || ss_c0==='NaN' || ss_c0===''){
		ss_c0=''
		document.getElementById(c0_pl).checked=false;
		document.getElementById(c0_min).checked=false;
	}
	else {
		switch(ss_c0) {
			case '+': ss_c0='c+ ';
			document.getElementById(c0_pl).checked=true; break;
			case '-': ss_c0='c- ';
			document.getElementById(c0_min).checked=true; break;
		}
	}
	
	if (ss_C1==='' && ss_c0==='' || 
		ss_C1==='C- ' && ss_c0==='' || 
		ss_C1==='' && ss_c0==='c- ' || 
		ss_C1==='C- ' && ss_c0==='c- '){
		s_C='';
	}
	else if (ss_C1==='' && ss_c0==='c+ '){
		s_C='c';
	}
	else if (ss_C1==='C+ ' && ss_c0===''){
		s_C='C';
	}
	else if (ss_C1==='C+ ' && ss_c0==='c+ '){
		s_C='Cc';
	}
	else if (ss_C1==='C- ' && ss_c0==='c+ '){
		s_C='cc';
	}
	else if (ss_C1==='C+ ' && ss_c0==='c- '){
		s_C='CC';
	}
	
	if (ss_E1===null || ss_E1===undefined || ss_E1==='null' || ss_E1==='undefined' || ss_E1==='NaN' || ss_E1===''){
		ss_E1=''
		document.getElementById(E1_pl).checked=false;
		document.getElementById(E1_min).checked=false;
	}
	else {
	switch(ss_E1) {
			case '+': ss_E1='E+ ';
			document.getElementById(E1_pl).checked=true; break;
			case '-': ss_E1='E- ';
			document.getElementById(E1_min).checked=true; break;
		}
	}
	
	if (ss_e0===null || ss_e0===undefined || ss_e0==='null' || ss_e0==='undefined' || ss_e0==='NaN' || ss_e0===''){
		ss_e0=''
		document.getElementById(e0_pl).checked=false;
		document.getElementById(e0_min).checked=false;
	}
	else {
	switch(ss_e0) {
			case '+': ss_e0='e+ ';
			document.getElementById(e0_pl).checked=true; break;
			case '-': ss_e0='e- ';
			document.getElementById(e0_min).checked=true; break;
		}
	}
	
	if (ss_E1==='' && ss_e0==='' || 
		ss_E1==='E- ' && ss_e0==='' || 
		ss_E1==='' && ss_e0==='e- ' || 
		ss_E1==='E- ' && ss_e0==='e- '){
		s_E='';
	}
	else if (ss_E1==='' && ss_e0==='e+ '){
		s_E='e';
	}
	else if (ss_E1==='E+ ' && ss_e0===''){
		s_E='E';
	}
	else if (ss_E1==='E+ ' && ss_e0==='e+ '){
		s_E='Ee';
	}
	else if (ss_E1==='E- ' && ss_e0==='e+ '){
		s_E='ee';
	}
	else if (ss_E1==='E+ ' && ss_e0==='e- '){
		s_E='EE';
	}
	
	
	if (ss_K1===null || ss_K1===undefined || ss_K1==='null' || ss_K1==='undefined' || ss_K1==='NaN' || ss_K1===''){
		ss_K1=''
		document.getElementById(K1_pl).checked=false;
		document.getElementById(K1_min).checked=false;
	}
	else {
	switch(ss_K1) {
			case '+': ss_K1='K+ ';
			document.getElementById(K1_pl).checked=true; break;
			case '-': ss_K1='K- ';
			document.getElementById(K1_min).checked=true; break;
		}
	}
		
	if (ss_k0===null || ss_k0===undefined || ss_k0==='null' || ss_k0==='undefined' || ss_k0==='NaN' || ss_k0===''){
		ss_k0=''
		document.getElementById(k0_pl).checked=false;
		document.getElementById(k0_min).checked=false;
	}
	else {	
	switch(ss_k0) {
			case '+': ss_k0='k+ ';
			document.getElementById(k0_pl).checked=true; break;
			case '-': ss_k0='k- ';
			document.getElementById(k0_min).checked=true; break;
		}
	}
		
	if (ss_K1==='' && ss_k0==='' || 
		ss_K1==='K- ' && ss_k0==='' || 
		ss_K1==='' && ss_k0==='k- ' || 
		ss_K1==='K- ' && ss_k0==='k- '){
		s_K='';
	}
	else if (ss_K1==='' && ss_k0==='k+ '){
		s_K='k';
	}
	else if (ss_K1==='K+ ' && ss_k0===''){
		s_K='K';
	}
	else if (ss_K1==='K+ ' && ss_k0==='k+ '){
		s_K='Kk';
	}
	else if (ss_K1==='K- ' && ss_k0==='k+ '){
		s_K='kk';
	}
	else if (ss_K1==='K+ ' && ss_k0==='k- '){
		s_K='KK';
	}
		
	if (ss_Cw===null || ss_Cw===undefined || ss_Cw==='null' || ss_Cw==='undefined' || ss_Cw==='NaN' || ss_Cw===''){
		ss_Cw='';
		s_Cw='';
		document.getElementById(Cw_min).checked=false;
		document.getElementById(Cw_pl).checked=false;
	}
	else {
		switch(ss_Cw){
			case'+': ss_Cw='C<sup>w</sup>+ '; s_Cw='C<sup>w</sup>';
				document.getElementById(Cw_pl).checked=true; break;
			case'-': ss_Cw='C<sup>w</sup>- '; s_Cw='';
				document.getElementById(Cw_min).checked=true; break;
		}	
	}
	
	if (ss_D===null || ss_D===undefined || ss_D==='null' || ss_D==='undefined' || ss_D==='NaN' || ss_D===''){
		ss_D='';
		s_D='';
		document.getElementById(D_min).checked=false;
		document.getElementById(D_pl).checked=false;
	}
	else {
		switch(ss_D){
			case'+': ss_D='D+ '; s_D='D';
				document.getElementById(D_pl).checked=true; break;
			case'-': ss_D='D- '; s_D='dd';
				document.getElementById(D_min).checked=true; break;
		}	
	}
	
	if (ss_Dw===null || ss_Dw===undefined || ss_Dw==='null' || ss_Dw==='undefined' || ss_Dw==='NaN' || ss_Dw===''){
		ss_Dw='';
		s_Dw='';
		document.getElementById(Dw_pl).checked=false;
	}
	else if (ss_Dw==='+'){
		ss_Dw='D<sup>w</sup>+ '; s_Dw='D<sup>w</sup>';
		document.getElementById(Dw_pl).checked=true;
	}
	
	if (ss_Dw!==''||ss_Cw!==''){
		document.getElementById(fen_height).style.height='5px';
	}
	else {document.getElementById(fen_height).style.height='10px';}	
	
	localStorage.setItem(fen1, ss_C1 + ss_c0 + ss_Cw + ss_D + ss_Dw + ss_E1 + ss_e0 + ss_K1 + ss_k0 + ' ');
	localStorage.setItem(fen2, s_C + s_Cw + s_D + s_Dw + s_E + s_K);
	
	document.getElementById(fen_out1).innerHTML = localStorage.getItem(fen1);
	document.getElementById(fen_out2).innerHTML = localStorage.getItem(fen2);
	
	if (ss_C1===''&&ss_c0===''&&ss_D===''&&ss_Dw===''&&ss_Cw===''&&ss_E1===''&&ss_e0===''&&ss_K1===''&&ss_k0===''){
	document.getElementById(fen_out).style.display='none';
	}
	else {
		document.getElementById(fen_out).style.display='';
	}
	
	gem=null; grup_rez=null; grup=null; rez=null; fen1=null; fen2=null; fen_out=null; fen_out1=null; fen_out2=null; fen_height=null;
	C1=null; c0=null; Cw=null; D=null; Dw=null;
	E1=null; e0=null; K1=null; k0=null;	
	ss_C1=null; ss_c0=null; ss_Cw=null; ss_D=null; ss_Dw=null;
	ss_E1=null; ss_e0=null; ss_K1=null; ss_k0=null;	
	s_C=null; s_Cw=null; s_D=null; s_E=null; s_K=null; s_Dw=null;
}

///////////////////// Реципиент ////////////////////////////////////
function gr_fenotip_rec(){
	"use strict";
	gem = 'rec_';
	gr_fen();
}
///////////////////// Гемакон 1 ////////////////////////////////////
function gr_fenotip_gem1(){
	"use strict";
	gem = 'gem1_';
	gr_fen();
}
///////////////////// Гемакон 2 ////////////////////////////////////
function gr_fenotip_gem2(){
	"use strict";
	gem = 'gem2_';
	gr_fen();
}
///////////////////// Гемакон 3 ////////////////////////////////////
function gr_fenotip_gem3(){
	"use strict";
	gem = 'gem3_';
	gr_fen();
}
///////////////////// Гемакон 4 ////////////////////////////////////
function gr_fenotip_gem4(){
	"use strict";
	gem = 'gem4_';
	gr_fen();
}
///////////////////// Гемакон 5 ////////////////////////////////////
function gr_fenotip_gem5(){
	"use strict";
	gem = 'gem5_';
	gr_fen();
}
///////////////////// Гемакон 6 ////////////////////////////////////
function gr_fenotip_gem6(){
	"use strict";
	gem = 'gem6_';
	gr_fen();
}
///////////////////// Гемакон 7 ////////////////////////////////////
function gr_fenotip_gem7(){
	"use strict";
	gem = 'gem7_';
	gr_fen();
}
///////////////////// Гемакон 8 ////////////////////////////////////
function gr_fenotip_gem8(){
	"use strict";
	gem = 'gem8_';
	gr_fen();
}
///////////////////// gemztker ////////////////////////////////////
function gr_fenotip_gemztker(){
	"use strict";
	gem = 'gemztker_';
	gr_fen();
}
///////////////////// gemztkszp ////////////////////////////////////
function gr_fenotip_gemztkszp(){
	"use strict";
	gem = 'gemztkszp_';
	gr_fen();
}
///////////////////// gemnip ////////////////////////////////////
function gr_fenotip_gemnip(){
	"use strict";
	gem = 'gemnip_';
	gr_fen();
}
///////////////////// gemztktr ////////////////////////////////////
function gr_fenotip_gemztktr(){
	"use strict";
	gem = 'gemztktr_';
	gr_fen();
}