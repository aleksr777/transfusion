function page_prtcl(){
	"use strict";
	
	document.getElementById('content_enter_protocol').style.marginTop='';
	
	document.getElementById('zagolovok_pr').style.display='inline';
	document.getElementById('zagolovok_ztk').style.display='none';
	document.getElementById('zagolovok_nl').style.display='none';
	document.getElementById('zagolovok_nip').style.display='none';
	
	document.getElementById('nl_s').style.display='none';
	document.getElementById('nip_s').style.display='none';
	
	document.getElementById('ss_all').style.display='inline';
	
	document.getElementById('date__prtcl').style.display='inline';
	document.getElementById('date__ztk').style.display='none';
	//document.getElementById('date__zspk').style.display='none';
	document.getElementById('date__nl').style.display='none';
	document.getElementById('date__nip').style.display='none';
	
	document.getElementById('tr-z').innerHTML='трансфузии';
	document.getElementById('tr-z').style.display='inline';
	
	document.getElementById('naim_spk').style.display='none';
	
	document.getElementById('nazn_ztk').style.display='none';
	document.getElementById('nazn_zspk').style.display='none';
	document.getElementById('nazn_nip').style.display='none';
	
	document.getElementById('v_lab').style.display='none';
	
	document.getElementById('rec_fen_opr').style.display='inline';
	
	document.getElementById('telvr').style.display='none';
	
	document.getElementById('gem-1').style.display='inline';
	document.getElementById('gem-2').style.display='inline';
	
	document.getElementById('gemnip_').style.display='none';
	
	document.getElementById('prtr1').style.display='inline';
	document.getElementById('isl_at_').style.display='inline';
	document.getElementById('anamnez').style.display='inline';
	document.getElementById('alerg_anamnez').style.display='none';
	document.getElementById('prtr7').style.display='inline';
	document.getElementById('prtr8').style.display='inline';
	document.getElementById('prtr9').style.display='inline';
	
	document.getElementById('p_lab').style.display='none';
	
	document.getElementById('dgnz').style.display='none';
	
	document.getElementById('pokazania').style.display='inline';
	document.getElementById('analyz_krovi').style.display='inline';
	
	document.getElementById('proby').style.display='inline';
	
	document.getElementById('reakt').style.display='inline';
	
	document.getElementById('ztk1').style.display='none';
	document.getElementById('ztk2').style.display='none';
}

function page_ztk(){
	"use strict";
	
	document.getElementById('content_enter_protocol').style.marginTop='75px';
	
	document.getElementById('zagolovok_pr').style.display='none';
	document.getElementById('zagolovok_ztk').style.display='inline';
	document.getElementById('zagolovok_nl').style.display='none';
	document.getElementById('zagolovok_nip').style.display='none';
	
	document.getElementById('nl_s').style.display='none';
	document.getElementById('nip_s').style.display='none';
	
	document.getElementById('ss_all').style.display='inline';
	
	document.getElementById('date__prtcl').style.display='none';
	document.getElementById('date__ztk').style.display='inline';
	//document.getElementById('date__zspk').style.display='none';
	document.getElementById('date__nl').style.display='none';
	document.getElementById('date__nip').style.display='none';
	
	document.getElementById('tr-z').innerHTML='заявки';
	document.getElementById('tr-z').style.display='inline';
	
	document.getElementById('naim_spk').style.display='none';
	
	document.getElementById('nazn_ztk').style.display='inline';
	document.getElementById('nazn_zspk').style.display='none';
	document.getElementById('nazn_nip').style.display='none';
	
	document.getElementById('v_lab').style.display='none';
	
	document.getElementById('rec_fen_opr').style.display='inline';
	
	document.getElementById('telvr').style.display='none';
	
	document.getElementById('gem-1').style.display='none';
	document.getElementById('gem-2').style.display='none';
	
	document.getElementById('gemnip_').style.display='none';
	
	document.getElementById('prtr1').style.display='none';
	document.getElementById('isl_at_').style.display='none';
	document.getElementById('anamnez').style.display='none';
	document.getElementById('alerg_anamnez').style.display='none';
	document.getElementById('prtr7').style.display='none';
	document.getElementById('prtr8').style.display='none';
	document.getElementById('prtr9').style.display='none';
	
	document.getElementById('p_lab').style.display='inline';
	
	document.getElementById('dgnz').style.display='inline';
	
	document.getElementById('pokazania').style.display='inline';
	document.getElementById('analyz_krovi').style.display='inline';
	
	document.getElementById('proby').style.display='none';
	
	document.getElementById('reakt').style.display='none';
	
	document.getElementById('ztk1').style.display='inline';
	document.getElementById('ztk2').style.display='inline';
	
	gem_vkl_ztk();
}

function gem_vkl_ztk(){
	"use strict";
	
	if (document.getElementById('gem_vkl').checked===true){
		document.getElementById('gem-1').style.display='inline';
		document.getElementById('gem-2').style.display='inline';
}
	else {
		document.getElementById('gem-1').style.display='none';
		document.getElementById('gem-2').style.display='none';
	} 
}

function page_zspk(){
	"use strict";
	
	document.getElementById('content_enter_protocol').style.marginTop='85px';
	
	document.getElementById('zagolovok_pr').style.display='none';
	document.getElementById('zagolovok_ztk').style.display='none';
	document.getElementById('zagolovok_nl').style.display='none';
	document.getElementById('zagolovok_nip').style.display='none';
	
	document.getElementById('nl_s').style.display='none';
	document.getElementById('nip_s').style.display='none';
	
	document.getElementById('ss_all').style.display='inline';
	
	document.getElementById('date__prtcl').style.display='none';
	document.getElementById('date__ztk').style.display='none';
	//document.getElementById('date__zspk').style.display='inline';
	document.getElementById('date__nl').style.display='none';
	document.getElementById('date__nip').style.display='none';
	
	document.getElementById('tr-z').innerHTML='';
	document.getElementById('tr-z').style.display='none';
	
	document.getElementById('naim_spk').style.display='inline';
	
	document.getElementById('nazn_ztk').style.display='none';
	document.getElementById('nazn_zspk').style.display='inline';
	document.getElementById('nazn_nip').style.display='none';
	
	document.getElementById('v_lab').style.display='none';
	
	document.getElementById('rec_fen_opr').style.display='inline';
	
	document.getElementById('telvr').style.display='inline';
	
	document.getElementById('gem-1').style.display='none';
	document.getElementById('gem-2').style.display='none';
	
	document.getElementById('gemnip_').style.display='none';
	
	document.getElementById('prtr1').style.display='none';
	document.getElementById('isl_at_').style.display='none';
	document.getElementById('anamnez').style.display='none';
	document.getElementById('alerg_anamnez').style.display='none';
	document.getElementById('prtr7').style.display='none';
	document.getElementById('prtr8').style.display='none';
	document.getElementById('prtr9').style.display='none';
	
	document.getElementById('p_lab').style.display='none';
	
	document.getElementById('dgnz').style.display='inline';
	
	document.getElementById('pokazania').style.display='none';
	document.getElementById('analyz_krovi').style.display='none';
	
	document.getElementById('proby').style.display='none';
	
	document.getElementById('reakt').style.display='none';
	
	document.getElementById('ztk1').style.display='none';
	document.getElementById('ztk2').style.display='none';
}

function page_nl(){
	"use strict";
	
	document.getElementById('content_enter_protocol').style.marginTop='85px';
	
	document.getElementById('zagolovok_pr').style.display='none';
	document.getElementById('zagolovok_ztk').style.display='none';
	document.getElementById('zagolovok_nl').style.display='inline';
	document.getElementById('zagolovok_nip').style.display='none';
	
	document.getElementById('nl_s').style.display='inline';
	document.getElementById('nip_s').style.display='none';
	
	document.getElementById('ss_all').style.display='inline';
	
	document.getElementById('date__prtcl').style.display='none';
	document.getElementById('date__ztk').style.display='none';
	//document.getElementById('date__zspk').style.display='none';
	document.getElementById('date__nl').style.display='inline';
	document.getElementById('date__nip').style.display='none';
	
	document.getElementById('tr-z').innerHTML='';
	document.getElementById('tr-z').style.display='none';
	
	document.getElementById('naim_spk').style.display='none';
	
	document.getElementById('nazn_ztk').style.display='none';
	document.getElementById('nazn_zspk').style.display='none';
	document.getElementById('nazn_nip').style.display='none';
	
	document.getElementById('v_lab').style.display='inline';
	
	document.getElementById('rec_fen_opr').style.display='none';
	
	document.getElementById('telvr').style.display='none';
	
	document.getElementById('gem-1').style.display='none';
	document.getElementById('gem-2').style.display='none';
	
	document.getElementById('gemnip_').style.display='none';
	
	document.getElementById('prtr1').style.display='none';
	document.getElementById('isl_at_').style.display='none';
	document.getElementById('anamnez').style.display='inline';
	document.getElementById('alerg_anamnez').style.display='inline';
	document.getElementById('prtr7').style.display='none';
	document.getElementById('prtr8').style.display='none';
	document.getElementById('prtr9').style.display='none';
	
	document.getElementById('p_lab').style.display='none';
	
	document.getElementById('dgnz').style.display='inline';
	
	document.getElementById('proby').style.display='none';
	
	document.getElementById('pokazania').style.display='none';
	document.getElementById('analyz_krovi').style.display='none';
	
	document.getElementById('reakt').style.display='inline';
	
	document.getElementById('ztk1').style.display='none';
	document.getElementById('ztk2').style.display='none';
}
function page_nip(){
	"use strict";
	
	document.getElementById('content_enter_protocol').style.marginTop='85px';
	
	document.getElementById('zagolovok_pr').style.display='none';
	document.getElementById('zagolovok_ztk').style.display='none';
	document.getElementById('zagolovok_nl').style.display='none';
	document.getElementById('zagolovok_nip').style.display='inline';
	
	document.getElementById('nl_s').style.display='none';
	document.getElementById('nip_s').style.display='inline';
	
	document.getElementById('ss_all').style.display='inline';
	
	document.getElementById('date__prtcl').style.display='none';
	document.getElementById('date__ztk').style.display='none';
	//document.getElementById('date__zspk').style.display='none';
	document.getElementById('date__nl').style.display='none';
	document.getElementById('date__nip').style.display='inline';
	
	document.getElementById('tr-z').innerHTML='';
	document.getElementById('tr-z').style.display='inline';
	
	document.getElementById('naim_spk').style.display='none';
	
	document.getElementById('nazn_ztk').style.display='none';
	document.getElementById('nazn_zspk').style.display='none';
	document.getElementById('nazn_nip').style.display='inline';
	
	document.getElementById('v_lab').style.display='none';
	
	document.getElementById('rec_fen_opr').style.display='inline';
	
	document.getElementById('telvr').style.display='inline';
	
	document.getElementById('gem-1').style.display='none';
	document.getElementById('gem-2').style.display='none';
	
	document.getElementById('gemnip_').style.display='inline';
	
	document.getElementById('prtr1').style.display='none';
	document.getElementById('isl_at_').style.display='inline';
	document.getElementById('anamnez').style.display='inline';
	document.getElementById('alerg_anamnez').style.display='inline';
	document.getElementById('prtr7').style.display='none';
	document.getElementById('prtr8').style.display='none';
	document.getElementById('prtr9').style.display='none';
	
	document.getElementById('p_lab').style.display='inline';
	
	document.getElementById('dgnz').style.display='inline';
	
	document.getElementById('pokazania').style.display='inline';
	document.getElementById('analyz_krovi').style.display='none';
	
	document.getElementById('proby').style.display='none';
	
	document.getElementById('reakt').style.display='none';
	
	document.getElementById('ztk1').style.display='none';
	document.getElementById('ztk2').style.display='none';
}