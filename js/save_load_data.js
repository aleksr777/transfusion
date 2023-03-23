var i, j, p, str, t1, t2, t3, t4, arr=[], pacient_nazn_ztk, pacient_nazn_nip, pacient_nazn_zspk, pacient_naim_lab, pacient_naim_lab_ch, pacient_gemztker_podbor, pacient_gemztker_podbor_ch;

var full_name, nabl_ad, nabl_4ss, nabl_t, nabl_diur, nabl_cvet, nabl_cvet_txt;

var pacient_podp_vr, pacient_pdp, pacient_pdp_lab, pacient_tel_vr, pacient_podp_vr_lab;

var pacient_ind_podb_otv_lico, pacient_ind_podb_dat_issled, pacient_proby_sovm;

var	gem_naim_glav, gem_naim_er_otmytye_8_razm_i_otm, gem_naim_er_s_udal_lts, gem_naim_er_leykoreduc, gem_naim_er_aferez, gem_naim_szp_patogenreduc, gem_naim_szp_pulirov, gem_naim_szp_patogeninact, gem_naim_szp_kriosupernat, gem_naim_szp_liofiliz, gem_naim_tr_aferez_8_iz_ed_kr, gem_naim_tr_pulirov, gem_naim_tr_v_dob_rastv, gem_naim_tr_patogenreduc, gem_naim_tr_leykoreduc, gem_naim_tr_kriokonserv, gem_grup_rez, gem_fen_C1, gem_fen_c0, gem_fen_D, gem_fen_Dw, gem_fen_Cw, gem_fen_E1, gem_fen_e0, gem_fen_K1, gem_fen_k0, gem_v, gem_ser, gem_kod_don, gem_dat_zagotov, gem_godn, gem_proizv, gem_naim_er_dobav_textarea, gem_naim_szp_dobav_textarea, gem_naim_tr_dobav_textarea;
//gemnip
var pacient_gemnip_naim_glav, pacient_gemnip_grup_rez, pacient_gemnip_naim_er_otmytye_8_razm_i_otm, pacient_gemnip_naim_er_s_udal_lts, pacient_gemnip_naim_er_leykoreduc, pacient_gemnip_naim_er_aferez, pacient_gemnip_naim_er_dobav_textarea, pacient_gemnip_treb_kolich;
//gemztker
var pacient_kn_ztk_er, pacient_gemztker_naim_glav, pacient_gemztker_grup_rez, pacient_gemztker_naim_er_otmytye_8_razm_i_otm, pacient_gemztker_naim_er_s_udal_lts, pacient_gemztker_naim_er_leykoreduc, pacient_gemztker_naim_er_aferez, pacient_gemztker_naim_er_dobav_textarea, pacient_gemztker_treb_kolich;
//gemztkszp
var pacient_kn_ztk_szp, pacient_gemztkszp_naim_glav, pacient_gemztkszp_grup_rez, pacient_gemztkszp_naim_szp_patogenreduc, pacient_gemztkszp_naim_szp_pulirov, pacient_gemztkszp_naim_szp_patogeninact, pacient_gemztkszp_naim_szp_kriosupernat, pacient_gemztkszp_naim_szp_liofiliz, pacient_gemztkszp_naim_er_dobav_textarea, pacient_gemztkszp_treb_kolich;
//gemztktr
var pacient_kn_ztk_tr, pacient_gemztktr_naim_glav, pacient_gemztktr_grup_rez, pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr, pacient_gemztktr_naim_tr_pulirov, pacient_gemztktr_naim_tr_v_dob_rastv, pacient_gemztktr_naim_tr_patogenreduc, pacient_gemztktr_naim_tr_leykoreduc, pacient_gemztktr_naim_tr_kriokonserv, pacient_gemztktr_naim_er_dobav_textarea, pacient_gemztktr_treb_kolich;

var	arr_pacients=[], pacient, pacient_otdel, pacient_FIO, pacient_no_ist, pacient_vozrast, pacient_data_rozhd, pacient_isl_at, pacient_isl_at_opisanie, pacient_allergia, pacient_diagnoz, pacient_tr_anamn, pacient_an_ind_podb, pacient_an_reakc, pacient_an_akush, pacient_rec_grup_rez, pacient_rec_fen_C1, pacient_rec_fen_c0, pacient_rec_fen_D, pacient_rec_fen_Dw, pacient_rec_fen_Cw, pacient_rec_fen_E1, pacient_rec_fen_e0, pacient_rec_fen_K1, pacient_rec_fen_k0, pacient_gem_naim_glav, pacient_gem_naim_er_otmytye_8_razm_i_otm, pacient_gem_naim_er_s_udal_lts, pacient_gem_naim_er_leykoreduc, pacient_gem_naim_er_aferez, pacient_gem_naim_szp_patogenreduc, pacient_gem_naim_szp_pulirov, pacient_gem_naim_szp_patogeninact, pacient_gem_naim_szp_kriosupernat, pacient_gem_naim_szp_liofiliz, pacient_gem_naim_tr_aferez_8_iz_ed_kr, pacient_gem_naim_tr_pulirov, pacient_gem_naim_tr_v_dob_rastv, pacient_gem_naim_tr_patogenreduc, pacient_gem_naim_tr_leykoreduc, pacient_gem_naim_tr_kriokonserv, pacient_gem_grup_rez, pacient_gem_fen_C1, pacient_gem_fen_c0, pacient_gem_fen_D, pacient_gem_fen_Dw, pacient_gem_fen_Cw, pacient_gem_fen_E1, pacient_gem_fen_e0, pacient_gem_fen_K1, pacient_gem_fen_k0, pacient_gem_v, pacient_gem_ser, pacient_gem_kod_don, pacient_gem_dat_zagotov, pacient_gem_godn, pacient_gem_proizv, pacient_gem_naim_er_dobav_textarea, pacient_gem_naim_szp_dobav_textarea, pacient_gem_naim_tr_dobav_textarea, pacient_objem_tansf, pacient_nabl_ad, pacient_nabl_4ss, pacient_nabl_t, pacient_nabl_diur, pacient_nabl_cvet, pacient_nabl_cvet_txt, pacient_pr_oslozh, pacient_pr_oslozh_opisanie, pacient_pokaz_ob_ock, pacient_pokaz_ob_ock_inptxt, pacient_pokaz_ob_prod_krovotech, pacient_pokaz_er_anemia, pacient_pokaz_er_vosp_kolich, pacient_pokaz_er_hbht, pacient_pokaz_er_hb_inptxt, pacient_pokaz_er_ht_inptxt, pacient_pokaz_er_drugie, pacient_pokaz_er_drugie_textarea, pacient_pokaz_szp_deficit_fakt, pacient_pokaz_szp_peredoz, pacient_pokaz_szp_plazmaferez, pacient_pokaz_szp_drugie, pacient_pokaz_szp_drugie_textarea, pacient_pokaz_tr, pacient_pokaz_tr_drugie, pacient_pokaz_tr_drugie_textarea, pacient_date_analiz, pacient_RBC, pacient_FIBR, pacient_HGB, pacient_PTI, pacient_HCT, pacient_A4TV, pacient_PLT, pacient_MNO, pacient_VSK;

function var_null(){
	"use strict";

i=null; j=null; p=null; str=null; t1=null; t2=null; t3=null; t4=null; arr=null; pacient_nazn_ztk=null; pacient_nazn_nip=null; pacient_nazn_zspk=null; pacient_naim_lab=null;  pacient_naim_lab_ch=null;   pacient_gemztker_podbor=null; pacient_gemztker_podbor_ch=null;

full_name=null; nabl_ad=null; nabl_4ss=null; nabl_t=null; nabl_diur=null; nabl_cvet=null; nabl_cvet_txt=null;

gem_naim_glav=null; gem_naim_er_otmytye_8_razm_i_otm=null; gem_naim_er_s_udal_lts=null; gem_naim_er_leykoreduc=null; gem_naim_er_aferez=null; gem_naim_szp_patogenreduc=null; gem_naim_szp_pulirov=null; gem_naim_szp_patogeninact=null; gem_naim_szp_kriosupernat=null; gem_naim_szp_liofiliz=null; gem_naim_tr_aferez_8_iz_ed_kr=null; gem_naim_tr_pulirov=null; gem_naim_tr_v_dob_rastv=null; gem_naim_tr_patogenreduc=null; gem_naim_tr_leykoreduc=null; gem_naim_tr_kriokonserv=null; gem_grup_rez=null; gem_fen_C1=null; gem_fen_c0=null; gem_fen_D=null; gem_fen_Dw=null; gem_fen_Cw=null; gem_fen_E1=null; gem_fen_e0=null; gem_fen_K1=null; gem_fen_k0=null; gem_v=null; gem_ser=null; gem_kod_don=null; gem_dat_zagotov=null; gem_godn=null; gem_proizv=null; gem_naim_er_dobav_textarea=null; gem_naim_szp_dobav_textarea=null; gem_naim_tr_dobav_textarea=null;
pacient_gemnip_naim_glav=null; pacient_gemnip_grup_rez=null; pacient_gemnip_naim_er_otmytye_8_razm_i_otm=null; pacient_gemnip_naim_er_s_udal_lts=null; pacient_gemnip_naim_er_leykoreduc=null; pacient_gemnip_naim_er_aferez=null; pacient_gemnip_naim_er_dobav_textarea=null; pacient_gemnip_treb_kolich=null; pacient_kn_ztk_er=null;
pacient_gemztker_naim_glav=null; pacient_gemztker_grup_rez=null; pacient_gemztker_naim_er_otmytye_8_razm_i_otm=null; pacient_gemztker_naim_er_s_udal_lts=null; pacient_gemztker_naim_er_leykoreduc=null; pacient_gemztker_naim_er_aferez=null; pacient_gemztker_naim_er_dobav_textarea=null; pacient_gemztker_treb_kolich=null;
pacient_kn_ztk_szp=null; pacient_gemztkszp_naim_glav=null; pacient_gemztkszp_grup_rez=null; pacient_gemztkszp_naim_szp_patogenreduc=null; pacient_gemztkszp_naim_szp_pulirov=null;
pacient_gemztkszp_naim_szp_patogeninact=null; pacient_gemztkszp_naim_szp_kriosupernat=null;
pacient_gemztkszp_naim_szp_liofiliz=null; pacient_gemztkszp_naim_er_dobav_textarea=null;
pacient_gemztkszp_treb_kolich=null; pacient_kn_ztk_tr=null; pacient_gemztktr_naim_glav=null;
pacient_gemztktr_grup_rez=null; pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr=null;
pacient_gemztktr_naim_tr_pulirov=null; pacient_gemztktr_naim_tr_v_dob_rastv=null;
pacient_gemztktr_naim_tr_patogenreduc=null; pacient_gemztktr_naim_tr_leykoreduc=null; pacient_gemztktr_naim_tr_kriokonserv=null; pacient_gemztktr_naim_er_dobav_textarea=null; pacient_gemztktr_treb_kolich=null; 
	
arr_pacients=null; pacient=null; pacient_otdel=null; pacient_FIO=null; pacient_no_ist=null; pacient_vozrast=null; pacient_data_rozhd=null; pacient_isl_at=null; pacient_isl_at_opisanie=null; pacient_allergia=null; pacient_diagnoz=null; pacient_tr_anamn=null; pacient_an_ind_podb=null; pacient_an_reakc=null; pacient_an_akush=null; pacient_rec_grup_rez=null; pacient_rec_fen_C1=null; pacient_rec_fen_c0=null; pacient_rec_fen_D=null; pacient_rec_fen_Dw=null; pacient_rec_fen_Cw=null; pacient_rec_fen_E1=null; pacient_rec_fen_e0=null; pacient_rec_fen_K1=null; pacient_rec_fen_k0=null; pacient_gem_naim_glav=null; pacient_gem_naim_er_otmytye_8_razm_i_otm=null; pacient_gem_naim_er_s_udal_lts=null; pacient_gem_naim_er_leykoreduc=null; pacient_gem_naim_er_aferez=null; pacient_gem_naim_szp_patogenreduc=null; pacient_gem_naim_szp_pulirov=null; pacient_gem_naim_szp_patogeninact=null; pacient_gem_naim_szp_kriosupernat=null; pacient_gem_naim_szp_liofiliz=null; pacient_gem_naim_tr_aferez_8_iz_ed_kr=null; pacient_gem_naim_tr_pulirov=null; pacient_gem_naim_tr_v_dob_rastv=null; pacient_gem_naim_tr_patogenreduc=null; pacient_gem_naim_tr_leykoreduc=null; pacient_gem_naim_tr_kriokonserv=null; pacient_gem_grup_rez=null; pacient_gem_fen_C1=null; pacient_gem_fen_c0=null; pacient_gem_fen_D=null; pacient_gem_fen_Dw=null; pacient_gem_fen_Cw=null; pacient_gem_fen_E1=null; pacient_gem_fen_e0=null; pacient_gem_fen_K1=null; pacient_gem_fen_k0=null; pacient_gem_v=null; pacient_gem_ser=null; pacient_gem_kod_don=null; pacient_gem_dat_zagotov=null; pacient_gem_godn=null; pacient_gem_proizv=null; pacient_gem_naim_er_dobav_textarea=null; pacient_gem_naim_szp_dobav_textarea=null; pacient_gem_naim_tr_dobav_textarea=null; pacient_objem_tansf=null; pacient_nabl_ad=null; pacient_nabl_4ss=null; pacient_nabl_t=null; pacient_nabl_diur=null; pacient_nabl_cvet=null; pacient_nabl_cvet_txt=null; pacient_pr_oslozh=null; pacient_pr_oslozh_opisanie=null;	pacient_pokaz_ob_ock=null; pacient_pokaz_ob_ock_inptxt=null; pacient_pokaz_ob_prod_krovotech=null; pacient_pokaz_er_anemia=null; pacient_pokaz_er_vosp_kolich=null; pacient_pokaz_er_hbht=null; pacient_pokaz_er_hb_inptxt=null; pacient_pokaz_er_ht_inptxt=null; pacient_pokaz_er_drugie=null; pacient_pokaz_er_drugie_textarea=null; pacient_pokaz_szp_deficit_fakt=null; pacient_pokaz_szp_peredoz=null; pacient_pokaz_szp_plazmaferez=null; pacient_pokaz_szp_drugie=null; pacient_pokaz_szp_drugie_textarea=null; pacient_pokaz_tr=null; pacient_pokaz_tr_drugie=null; pacient_pokaz_tr_drugie_textarea=null; pacient_date_analiz=null; pacient_RBC=null; pacient_FIBR=null; pacient_HGB=null; pacient_PTI=null; pacient_HCT=null; pacient_A4TV=null; pacient_PLT=null; pacient_MNO=null; pacient_VSK=null; pacient_ind_podb_otv_lico=null; pacient_ind_podb_dat_issled=null; pacient_proby_sovm=null; pacient_podp_vr=null; pacient_pdp=null; pacient_pdp_lab=null; pacient_tel_vr=null; pacient_podp_vr_lab=null;
}

function pacients_data_out_off(){
	"use strict";	
document.getElementById('pacients_data_out').style.display='none';
document.getElementById('fon').style.display='none';
document.getElementById('knopka_seagreen_glav1').style.display='';
document.getElementById('knopka_seagreen_glav2').style.display='';
document.getElementById('knopka_seagreen_glav3').style.display='';
document.getElementById('pacients_data_out').style.height='';
document.getElementById('pacients_data_out').style.width='';
}

function pacients_data_var(){
	"use strict";	
pacient_otdel = pacient + '_otdel';
pacient_FIO = pacient + '_FIO';
pacient_no_ist = pacient + '_no_ist'; 
pacient_vozrast = pacient + '_vozrast';
pacient_data_rozhd = pacient + '_data_rozhd'; 
pacient_isl_at = pacient + '_isl_at';
pacient_isl_at_opisanie = pacient + '_isl_at_opisanie';
pacient_diagnoz = pacient + '_diagnoz';
pacient_allergia = pacient + '_allergia';
pacient_tr_anamn = pacient + '_tr_anamn';
pacient_an_ind_podb = pacient + '_an_ind_podb';
pacient_an_reakc = pacient + '_an_reakc';
pacient_an_akush = pacient + '_an_akush';
	
pacient_nazn_ztk = pacient + '_nazn_ztk';
pacient_nazn_nip = pacient + '_nazn_nip';
pacient_nazn_zspk = pacient + '_nazn_zspk';
pacient_naim_lab = pacient + '_naim_lab';
pacient_naim_lab_ch = pacient + '_naim_lab_ch';
pacient_gemztker_podbor = pacient + '_gemztker_podbor';
pacient_gemztker_podbor_ch = pacient + '_gemztker_podbor_ch';
	
pacient_rec_grup_rez = pacient + '_rec_grup_rez';
pacient_rec_fen_C1 = pacient + '_rec_fen_C1';
pacient_rec_fen_c0 = pacient + '_rec_fen_c0';
pacient_rec_fen_D = pacient + '_rec_fen_D';
pacient_rec_fen_Dw = pacient + '_rec_fen_Dw';
pacient_rec_fen_Cw = pacient + '_rec_fen_Cw';
pacient_rec_fen_E1 = pacient + '_rec_fen_E1';
pacient_rec_fen_e0 = pacient + '_rec_fen_e0';
pacient_rec_fen_K1 = pacient + '_rec_fen_K1';
pacient_rec_fen_k0 = pacient + '_rec_fen_k0';
//gemnip
pacient_gemnip_naim_glav = pacient + '_gemnip_naim_glav';
pacient_gemnip_grup_rez = pacient + '_gemnip_grup_rez';
pacient_gemnip_naim_er_otmytye_8_razm_i_otm = pacient + '_gemnip_naim_er_otmytye_8_razm_i_otm';
pacient_gemnip_naim_er_s_udal_lts = pacient + '_gemnip_naim_er_s_udal_lts';
pacient_gemnip_naim_er_leykoreduc = pacient + '_gemnip_naim_er_leykoreduc';
pacient_gemnip_naim_er_aferez = pacient + '_gemnip_naim_er_aferez';
pacient_gemnip_naim_er_dobav_textarea = pacient + '_gemnip_naim_er_dobav_textarea';
pacient_gemnip_treb_kolich = pacient + '_gemnip_treb_kolich';
//gemztker
pacient_kn_ztk_er = pacient + '_kn_ztk_er';
pacient_gemztker_naim_glav = pacient + '_gemztker_naim_glav';
pacient_gemztker_grup_rez = pacient + '_gemztker_grup_rez';
pacient_gemztker_naim_er_otmytye_8_razm_i_otm = pacient + '_gemztker_naim_er_otmytye_8_razm_i_otm';
pacient_gemztker_naim_er_s_udal_lts = pacient + '_gemztker_naim_er_s_udal_lts';
pacient_gemztker_naim_er_leykoreduc = pacient + '_gemztker_naim_er_leykoreduc';
pacient_gemztker_naim_er_aferez = pacient + '_gemztker_naim_er_aferez';
pacient_gemztker_naim_er_dobav_textarea = pacient + '_gemztker_naim_er_dobav_textarea';
pacient_gemztker_treb_kolich = pacient + '_gemztker_treb_kolich';
//gemztkszp
pacient_kn_ztk_szp = pacient + '_kn_ztk_szp';
pacient_gemztkszp_naim_glav = pacient + '_gemztkszp_naim_glav';
pacient_gemztkszp_grup_rez = pacient + '_gemztkszp_grup_rez';
pacient_gemztkszp_naim_szp_patogenreduc = pacient + '_gemztkszp_naim_szp_patogenreduc';
pacient_gemztkszp_naim_szp_pulirov = pacient + '_gemztkszp_naim_szp_pulirov';
pacient_gemztkszp_naim_szp_patogeninact = pacient + '_gemztkszp_naim_szp_patogeninact';
pacient_gemztkszp_naim_szp_kriosupernat = pacient + '_gemztkszp_naim_szp_kriosupernat';
pacient_gemztkszp_naim_szp_liofiliz = pacient + '_gemztkszp_naim_szp_liofiliz';
pacient_gemztkszp_naim_er_dobav_textarea = pacient + '_gemztkszp_naim_er_dobav_textarea';
pacient_gemztkszp_treb_kolich = pacient + '_gemztkszp_treb_kolich';
//gemztktr
pacient_kn_ztk_tr = pacient + '_kn_ztk_tr';
pacient_gemztktr_naim_glav = pacient + '_gemztktr_naim_glav';
pacient_gemztktr_grup_rez = pacient + '_gemztktr_grup_rez';
pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr = pacient + '_gemztktr_naim_tr_aferez_8_iz_ed_kr';
pacient_gemztktr_naim_tr_pulirov = pacient + '_gemztktr_naim_tr_pulirov';
pacient_gemztktr_naim_tr_v_dob_rastv = pacient + '_gemztktr_naim_tr_v_dob_rastv';
pacient_gemztktr_naim_tr_patogenreduc = pacient + '_gemztktr_naim_tr_patogenreduc';
pacient_gemztktr_naim_tr_leykoreduc = pacient + '_gemztktr_naim_tr_leykoreduc';
pacient_gemztktr_naim_tr_kriokonserv = pacient + '_gemztktr_naim_tr_kriokonserv';
pacient_gemztktr_naim_er_dobav_textarea = pacient + '_gemztktr_naim_er_dobav_textarea';
pacient_gemztktr_treb_kolich = pacient + '_gemztktr_treb_kolich';
	
pacient_pokaz_ob_ock = pacient + '_pokaz_ob_ock'; 
pacient_pokaz_ob_ock_inptxt = pacient + '_pokaz_ob_ock_inptxt'; 
pacient_pokaz_ob_prod_krovotech = pacient + '_pokaz_ob_prod_krovotech'; 
pacient_pokaz_er_anemia = pacient + '_pokaz_er_anemia';
pacient_pokaz_er_vosp_kolich = pacient + '_pokaz_er_vosp_kolich'; 
pacient_pokaz_er_hbht = pacient + '_pokaz_er_hbht'; 
pacient_pokaz_er_hb_inptxt = pacient + '_pokaz_er_hb_inptxt'; 
pacient_pokaz_er_ht_inptxt = pacient + '_pokaz_er_ht_inptxt'; 
pacient_pokaz_er_drugie = pacient + '_pokaz_er_drugie'; 
pacient_pokaz_er_drugie_textarea = pacient + '_pokaz_er_drugie_textarea'; 
pacient_pokaz_szp_deficit_fakt = pacient + '_pokaz_szp_deficit_fakt';
pacient_pokaz_szp_peredoz = pacient + '_pokaz_szp_peredoz';
pacient_pokaz_szp_plazmaferez = pacient + '_pokaz_szp_plazmaferez';
pacient_pokaz_szp_drugie = pacient + '_pokaz_szp_drugie';
pacient_pokaz_szp_drugie_textarea = pacient + '_pokaz_szp_drugie_textarea'; 
pacient_pokaz_tr = pacient + '_pokaz_tr';
pacient_pokaz_tr_drugie = pacient + '_pokaz_tr_drugie';
pacient_pokaz_tr_drugie_textarea = pacient + '_pokaz_tr_drugie_textarea';

pacient_RBC = pacient + '_RBC';
pacient_FIBR = pacient + '_FIBR';
pacient_HGB = pacient + '_HGB';
pacient_PTI = pacient + '_PTI';
pacient_HCT = pacient + '_HCT';
pacient_A4TV = pacient + '_A4TV';
pacient_PLT = pacient + '_PLT';
pacient_MNO = pacient + '_MNO';
pacient_VSK = pacient + '_VSK';
	
pacient_ind_podb_otv_lico = pacient + '_ind_podb_otv_lico';
pacient_ind_podb_dat_issled = pacient + '_ind_podb_dat_issled';
pacient_proby_sovm = pacient + '_proby_sovm';
	
pacient_date_analiz = pacient + '_date_analiz';
	
pacient_podp_vr = pacient + '_podp_vr';
pacient_pdp = pacient + '_pdp';
pacient_pdp_lab = pacient + '_pdp_lab';
pacient_tel_vr = pacient + '_tel_vr';
pacient_podp_vr_lab = pacient + '_podp_vr_lab';
	
pacient_objem_tansf = pacient + '_objem_tansf';
pacient_pr_oslozh = pacient + '_pr_oslozh'; 
pacient_pr_oslozh_opisanie = pacient + '_pr_oslozh_opisanie';
}

function pacients_data_var2(){
	"use strict";	
	full_name = 'gem' + j + '_full_name';
	gem_naim_glav = 'gem' + j + '_naim_glav';
	gem_naim_er_otmytye_8_razm_i_otm = 'gem' + j + '_naim_er_otmytye_8_razm_i_otm';
	gem_naim_er_s_udal_lts = 'gem' + j + '_naim_er_s_udal_lts';
	gem_naim_er_leykoreduc = 'gem' + j + '_naim_er_leykoreduc';
	gem_naim_er_aferez = 'gem' + j + '_naim_er_aferez';
	gem_naim_szp_patogenreduc = 'gem' + j + '_naim_szp_patogenreduc';
	gem_naim_szp_pulirov = 'gem' + j + '_naim_szp_pulirov';
	gem_naim_szp_patogeninact = 'gem' + j + '_naim_szp_patogeninact';
	gem_naim_szp_kriosupernat = 'gem' + j + '_naim_szp_kriosupernat';
	gem_naim_szp_liofiliz = 'gem' + j + '_naim_szp_liofiliz';
	gem_naim_tr_aferez_8_iz_ed_kr = 'gem' + j + '_naim_tr_aferez_8_iz_ed_kr';
	gem_naim_tr_pulirov = 'gem' + j + '_naim_tr_pulirov';
	gem_naim_tr_v_dob_rastv = 'gem' + j + '_naim_tr_v_dob_rastv';
	gem_naim_tr_patogenreduc = 'gem' + j + '_naim_tr_patogenreduc';
	gem_naim_tr_leykoreduc = 'gem' + j + '_naim_tr_leykoreduc';
	gem_naim_tr_kriokonserv = 'gem' + j + '_naim_tr_kriokonserv';
	gem_naim_er_dobav_textarea = 'gem' + j + '_naim_er_dobav_textarea';
	gem_naim_szp_dobav_textarea = 'gem' + j + '_naim_szp_dobav_textarea';
	gem_naim_tr_dobav_textarea = 'gem' + j + '_naim_tr_dobav_textarea';
	pacient_gem_naim_glav = pacient +'_gem' + j + '_naim_glav';
	pacient_gem_naim_er_otmytye_8_razm_i_otm = pacient +'_gem' + j + '_naim_er_otmytye_8_razm_i_otm';
	pacient_gem_naim_er_s_udal_lts = pacient +'_gem' + j + '_naim_er_s_udal_lts';
	pacient_gem_naim_er_leykoreduc = pacient +'_gem' + j + '_naim_er_leykoreduc';
	pacient_gem_naim_er_aferez = pacient +'_gem' + j + '_naim_er_aferez';
	pacient_gem_naim_szp_patogenreduc = pacient +'_gem' + j + '_naim_szp_patogenreduc';
	pacient_gem_naim_szp_pulirov = pacient +'_gem' + j + '_naim_szp_pulirov';
	pacient_gem_naim_szp_patogeninact = pacient +'_gem' + j + '_naim_szp_patogeninact';
	pacient_gem_naim_szp_kriosupernat = pacient +'_gem' + j + '_naim_szp_kriosupernat';
	pacient_gem_naim_szp_liofiliz = pacient +'_gem' + j + '_naim_szp_liofiliz';
	pacient_gem_naim_tr_aferez_8_iz_ed_kr = pacient +'_gem' + j + '_naim_tr_aferez_8_iz_ed_kr';
	pacient_gem_naim_tr_pulirov = pacient +'_gem' + j + '_naim_tr_pulirov';
	pacient_gem_naim_tr_v_dob_rastv = pacient +'_gem' + j + '_naim_tr_v_dob_rastv';
	pacient_gem_naim_tr_patogenreduc = pacient +'_gem' + j + '_naim_tr_patogenreduc';
	pacient_gem_naim_tr_leykoreduc = pacient +'_gem' + j + '_naim_tr_leykoreduc';
	pacient_gem_naim_tr_kriokonserv = pacient +'_gem' + j + '_naim_tr_kriokonserv';
	pacient_gem_naim_er_dobav_textarea = pacient +'_gem' + j + '_naim_er_dobav_textarea';
	pacient_gem_naim_szp_dobav_textarea = pacient +'_gem' + j + '_naim_szp_dobav_textarea';
	pacient_gem_naim_tr_dobav_textarea = pacient +'_gem' + j + '_naim_tr_dobav_textarea';
	gem_grup_rez = 'gem' + j + '_grup_rez';
	gem_fen_C1 = 'gem' + j + '_fen_C1';
	gem_fen_c0 = 'gem' + j + '_fen_c0';
	gem_fen_D = 'gem' + j + '_fen_D';
	gem_fen_Dw = 'gem' + j + '_fen_Dw';
	gem_fen_Cw = 'gem' + j + '_fen_Cw';
	gem_fen_E1 = 'gem' + j + '_fen_E1';
	gem_fen_e0 = 'gem' + j + '_fen_e0';
	gem_fen_K1 = 'gem' + j + '_fen_K1';
	gem_fen_k0 = 'gem' + j + '_fen_k0';	
	pacient_gem_grup_rez = pacient +'_gem' + j + '_grup_rez';
	pacient_gem_fen_C1 = pacient +'_gem' + j + '_fen_C1';
	pacient_gem_fen_c0 = pacient +'_gem' + j + '_fen_c0';
	pacient_gem_fen_D = pacient +'_gem' + j + '_fen_D';
	pacient_gem_fen_Dw = pacient +'_gem' + j + '_fen_Dw';
	pacient_gem_fen_Cw = pacient +'_gem' + j + '_fen_Cw';
	pacient_gem_fen_E1 = pacient +'_gem' + j + '_fen_E1';
	pacient_gem_fen_e0 = pacient +'_gem' + j + '_fen_e0';
	pacient_gem_fen_K1 = pacient +'_gem' + j + '_fen_K1';
	pacient_gem_fen_k0 = pacient +'_gem' + j + '_fen_k0';
	gem_v = 'gem' + j + '_v';
	gem_ser = 'gem' + j + '_ser';
	gem_kod_don = 'gem' + j + '_kod_don';
	gem_dat_zagotov = 'gem' + j + '_dat_zagotov';
	gem_godn = 'gem' + j + '_godn';
	gem_proizv = 'gem' + j + '_proizv';	
	pacient_gem_v = pacient + '_gem' + j + '_v';
	pacient_gem_ser = pacient + '_gem' + j + '_ser';
	pacient_gem_kod_don = pacient + '_gem' + j + '_kod_don';
	pacient_gem_dat_zagotov = pacient + '_gem' + j + '_dat_zagotov';
	pacient_gem_godn = pacient + '_gem' + j + '_godn';
	pacient_gem_proizv = pacient + '_gem' + j + '_proizv';	
}

function pacients_data_var3(){
	"use strict";
	nabl_ad = 'nabl_ad_' + j;
	nabl_4ss = 'nabl_4ss_' + j;
	nabl_t = 'nabl_t_' + j;
	nabl_diur = 'nabl_diur_' + j;
	nabl_cvet = 'nabl_cvet_' + j;
	nabl_cvet_txt = 'nabl_cvet_3_' + j + '_txt';
	pacient_nabl_ad = pacient + '_nabl_ad_' + j; 
	pacient_nabl_4ss = pacient + '_nabl_4ss_' + j; 
	pacient_nabl_t = pacient + '_nabl_t_' + j; 
	pacient_nabl_diur = pacient + '_nabl_diur_' + j; 
	pacient_nabl_cvet = pacient + '_nabl_cvet_' + j; 
	pacient_nabl_cvet_txt = pacient + '_nabl_cvet_3_' + j + '_txt';
}

function full_name_sl(){
	"use strict";
var glav;
var er1, er2, er3, er4, er_d, glav_er1, er2_er3_er4;
var szp1, szp2, szp3, szp4, szp5, szp_d;
var tr1, tr2, tr3, tr4, tr5, tr6, tr_d, tr2_tr3_tr4_tr5_tr6;
var arr = [];
	
if (localStorage.getItem(gem_naim_glav)===null||
	localStorage.getItem(gem_naim_glav)===undefined||
	localStorage.getItem(gem_naim_glav)==='null'||
	localStorage.getItem(gem_naim_glav)==='undefined'){
	localStorage.setItem(gem_naim_glav,'');
}	

glav = localStorage.getItem(gem_naim_glav);

er1 = localStorage.getItem(gem_naim_er_otmytye_8_razm_i_otm); 
er2 = localStorage.getItem(gem_naim_er_s_udal_lts); 
er3 = localStorage.getItem(gem_naim_er_leykoreduc);
er4 = localStorage.getItem(gem_naim_er_aferez);
er_d = localStorage.getItem(gem_naim_er_dobav_textarea);

szp1 = localStorage.getItem(gem_naim_szp_patogenreduc); 
szp2 = localStorage.getItem(gem_naim_szp_pulirov); 
szp3 = localStorage.getItem(gem_naim_szp_patogeninact);  
szp4 = localStorage.getItem(gem_naim_szp_kriosupernat);  
szp5 = localStorage.getItem(gem_naim_szp_liofiliz); 
szp_d = localStorage.getItem(gem_naim_szp_dobav_textarea);

tr1 = localStorage.getItem(gem_naim_tr_aferez_8_iz_ed_kr);
tr2 = localStorage.getItem(gem_naim_tr_pulirov);
tr3 = localStorage.getItem(gem_naim_tr_v_dob_rastv);
tr4 = localStorage.getItem(gem_naim_tr_patogenreduc);
tr5 = localStorage.getItem(gem_naim_tr_leykoreduc);
tr6 = localStorage.getItem(gem_naim_tr_kriokonserv);
tr_d = localStorage.getItem(gem_naim_tr_dobav_textarea);
	
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
	
else if (glav==='Эритроциты'||glav==='Эритроцитная взвесь'||glav==='Эритроцитная масса'||glav==='Кровь консервированная'){
	
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
	
else if (glav==='Плазма'||glav==='Свежезамороженная плазма'||glav==='Криопреципитат'){
	
	arr = szp_d.split('');//разбивает строку на массив из символов
	
	if (arr[0]!=='.' && arr[0]!==',' && arr[0]!==';' && arr[0]!==':'){
		arr.splice(0,0,' ');//перед первой точкой сроки ставит пробел
	}
	
	szp_d = arr.join('');//формируем строку из массива
	
	localStorage.setItem(full_name, glav+szp1+szp2+szp3+szp4+szp5+szp_d);
	document.getElementById(full_name).innerHTML = glav+szp1+szp2+szp3+szp4+szp5+szp_d;
}
	
else if (glav==='Тромбоциты'||glav==='Концентрат тромбоцитов'){
	
	tr2_tr3_tr4_tr5_tr6=tr2+tr3+tr4+tr5+tr6;
	
	if (tr1!==' из единицы крови' && tr1!=='' && tr2_tr3_tr4_tr5_tr6!==''){
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

function pacients_data_FIO_window(){
	"use strict";
	if (localStorage.getItem('str_pacients')===null || localStorage.getItem('str_pacients')===undefined || localStorage.getItem('str_pacients')==='' || localStorage.getItem('str_pacients')===' '){
	document.getElementById('knopka_seagreen_glav1').style.display='none';
	document.getElementById('knopka_seagreen_glav2').style.display='none';
	document.getElementById('knopka_seagreen_glav3').style.display='none';
	document.getElementById('pacients_data_out').style.display='block';
	document.getElementById('fon').style.display='block';
	document.getElementById('pacients_data_out').style.height='40px';
	document.getElementById('pacients_data_out').style.width='500px';
	document.getElementById('pacients_data_out').innerHTML= '<span style="color:#A00E15; font-weight:900; font-size:17px; margin-left:20px; letter-spacing:1px; line-height:100%;">Нет сохранённых данных</span>' + '<label onclick="pacients_data_out_off()"><a><span class="knopka_zakr">X</span></a></label><hr>';
	}
	else {
		str=localStorage.getItem('str_pacients');
		arr_pacients = str.split(',');//разбивает строку на массив по знаку "," 
		str='';
		for (i = arr_pacients.length-1; i >-1 ; i--) {
			if (arr_pacients[i]===null || arr_pacients[i]==='' || arr_pacients[i]===' ' || arr_pacients[i]===undefined){
				arr_pacients.splice(i, 1);//удаление текущего элемента массива и сдвиг элементов массива
			}
			else {
			
			t1= '<label><span style="font-size:17px; font-weight:700; line-height:100%; margin-right:20px;">' + arr_pacients[i] + '</span></label>' + '<br> ';
			
			t2= '<label onclick="load_data_pacient()" style="margin-left:5px;"><input type="radio" value="' + arr_pacients[i] + '" name="save_FIO2" onclick="sn(this)" style="display:none;"><span class="knopka_p_d" >ввести только данные пациента</span></label>'+ ' ';
			
			t3= '<label onclick="load_data_session()" style="margin-left:20px;"><input type="radio" value="' + arr_pacients[i] + '" name="save_FIO2" onclick="sn(this)" style="display:none;"><span class="knopka_p_d" >продолжить сессию</span></label>'+ ' ';
			
			t4= '<label onclick="pacients_data_delete()" style="margin-left:20px; margin-right:20px;"><input type="radio" value="' + arr_pacients[i] + '" name="save_FIO" id="del_FIO_' + arr_pacients[i] + '" onclick="sn(this)" style="display:none;"><span class="knopka_del">удалить</span></label><hr>';
			
			str=str + t1 + t2 + t3 + t4;
			}
		}
	
	localStorage.setItem('str_pacients', arr_pacients);
	document.getElementById('knopka_seagreen_glav1').style.display='none';
	document.getElementById('knopka_seagreen_glav2').style.display='none';
	document.getElementById('knopka_seagreen_glav3').style.display='none';
	document.getElementById('pacients_data_out').style.display='block';
	document.getElementById('fon').style.display='block';
	document.getElementById('pacients_data_out').innerHTML= '<span style="color:#00514F; font-weight:900; font-size:17px; margin-left:20px; letter-spacing:1px; line-height:100%;">Сохранённые данные: </span>' + '<label onclick="pacients_data_out_off()"><a><span class="knopka_zakr">X</span></a></label><hr>' + str;
	}
}

function pacients_data_save_window(){
	"use strict";
	if (localStorage.getItem('FIO')===null || localStorage.getItem('FIO')===undefined || localStorage.getItem('FIO')===''|| localStorage.getItem('FIO')===' '){
		document.getElementById('knopka_seagreen_glav1').style.display='none';
		document.getElementById('knopka_seagreen_glav2').style.display='none';
		document.getElementById('knopka_seagreen_glav3').style.display='none';
		document.getElementById('pacients_data_out').style.display='block';
		document.getElementById('fon').style.display='block';
		document.getElementById('pacients_data_out').style.height='40px';
		document.getElementById('pacients_data_out').style.width='500px';
		document.getElementById('pacients_data_out').innerHTML= '<span style="color:#A00E15; font-weight:900; font-size:17px; margin-left:20px; letter-spacing:1px; line-height:100%;">Введите ФИО пациента, чтобы сохранить данные <span>' + '<label onclick="pacients_data_out_off()"><a><span class="knopka_zakr">X</span></a></label><hr>';
	}
	else {
		p=localStorage.getItem('FIO');
		
		t1= '<label><span style="color:#000000; font-weight:900; font-size:17px; margin-left:10px; letter-spacing:1px; line-height:100%;">' + p + '</span></label>';
			
		str= '<span style="color:#00514F; font-weight:900; font-size:17px; margin-left:5px; letter-spacing:1px; line-height:100%;">Данные пациента и текущая сессия сохранены </span><hr>' + t1;
			
		document.getElementById('knopka_seagreen_glav1').style.display='none';
		document.getElementById('knopka_seagreen_glav2').style.display='none';
		document.getElementById('knopka_seagreen_glav3').style.display='none';
		document.getElementById('pacients_data_out').style.display='block';
		document.getElementById('pacients_data_out').style.height='80px';
		document.getElementById('fon').style.display='block';
		document.getElementById('pacients_data_out').innerHTML= '<label onclick="pacients_data_out_off()"><a><span class="knopka_zakr">X</span></a></label><br>' + str;
		}
}

function save_data_pacient(){
	"use strict";
	
	if (localStorage.getItem('str_pacients')===null || localStorage.getItem('str_pacients')===undefined || localStorage.getItem('str_pacients')===''|| localStorage.getItem('str_pacients')===' '){
		str=''; 
	}
	else{
		str=document.getElementById('FIO').value;
		for (j = 0; j < 2; j++) {//удаляет тирэ и пробелы в конце строки
			arr = str.split('');//разбивает строку на массив из символов
			i = arr.length-1;
			if (arr[i]===' ' || arr[i]==='-'){ 
				arr.splice(i, 1);//удаляет символ и сдвигает массив	
			}
			str = arr.join('');//формируем строку из массива
		}
		document.getElementById('FIO').value=str;
		localStorage.setItem('FIO', str);
		
		str=localStorage.getItem('str_pacients');
	}
	
	arr_pacients = str.split(',');//разбивает строку на массив по знаку "," 
	
	pacient = localStorage.getItem('FIO');
	
	for (i = 0; i < arr_pacients.length; i++) {//Ищем такое же имя в массиве и удаляем данные (вместо них сохраняем новые)
		if (arr_pacients[i]===pacient){
			arr_pacients.splice(i, 1);//удаление текущего элемента массива и сдвиг элементов массива
		}
	}
	
	pacients_data_var();
	
	localStorage.setItem(pacient_otdel, localStorage.getItem('otdel'));
	localStorage.setItem(pacient_FIO, localStorage.getItem('FIO'));
	localStorage.setItem(pacient_no_ist, localStorage.getItem('no_ist'));
	localStorage.setItem(pacient_vozrast, localStorage.getItem('vozrast'));
	localStorage.setItem(pacient_data_rozhd, localStorage.getItem('data_rozhd'));
	localStorage.setItem(pacient_isl_at, localStorage.getItem('isl_at'));
	localStorage.setItem(pacient_isl_at_opisanie, localStorage.getItem('isl_at_opisanie'));
	localStorage.setItem(pacient_diagnoz, localStorage.getItem('diagnoz'));
	localStorage.setItem(pacient_allergia, localStorage.getItem('allergia'));
	localStorage.setItem(pacient_tr_anamn, localStorage.getItem('tr_anamn'));
	localStorage.setItem(pacient_an_ind_podb, localStorage.getItem('an_ind_podb'));
	localStorage.setItem(pacient_an_reakc, localStorage.getItem('an_reakc'));
	localStorage.setItem(pacient_an_akush, localStorage.getItem('an_akush'));	
	
    localStorage.setItem(pacient_nazn_ztk, localStorage.getItem('nazn_ztk'));	
    localStorage.setItem(pacient_nazn_nip, localStorage.getItem('nazn_nip'));	
    localStorage.setItem(pacient_nazn_zspk, localStorage.getItem('nazn_zspk'));	
    localStorage.setItem(pacient_naim_lab, localStorage.getItem('naim_lab'));	
    localStorage.setItem(pacient_naim_lab_ch, localStorage.getItem('naim_lab_ch'));
    localStorage.setItem(pacient_gemztker_podbor, localStorage.getItem('gemztker_podbor'));
    localStorage.setItem(pacient_gemztker_podbor_ch, localStorage.getItem('gemztker_podbor_ch'));

	localStorage.setItem(pacient_rec_grup_rez, localStorage.getItem('rec_grup_rez'));
	localStorage.setItem(pacient_rec_fen_C1, localStorage.getItem('rec_fen_C1'));
	localStorage.setItem(pacient_rec_fen_c0, localStorage.getItem('rec_fen_c0'));
	localStorage.setItem(pacient_rec_fen_D, localStorage.getItem('rec_fen_D'));
	localStorage.setItem(pacient_rec_fen_Dw, localStorage.getItem('rec_fen_Dw'));
	localStorage.setItem(pacient_rec_fen_Cw, localStorage.getItem('rec_fen_Cw'));
	localStorage.setItem(pacient_rec_fen_E1, localStorage.getItem('rec_fen_E1'));
	localStorage.setItem(pacient_rec_fen_e0, localStorage.getItem('rec_fen_e0'));
	localStorage.setItem(pacient_rec_fen_K1, localStorage.getItem('rec_fen_K1'));
	localStorage.setItem(pacient_rec_fen_k0, localStorage.getItem('rec_fen_k0'));
//gemztknip
localStorage.setItem(pacient_gemnip_naim_glav, localStorage.getItem('gemnip_naim_glav'));
localStorage.setItem(pacient_gemnip_grup_rez, localStorage.getItem('gemnip_grup_rez'));
localStorage.setItem(pacient_gemnip_naim_er_otmytye_8_razm_i_otm, localStorage.getItem('gemnip_naim_er_otmytye_8_razm_i_otm'));
localStorage.setItem(pacient_gemnip_naim_er_s_udal_lts, localStorage.getItem('gemnip_naim_er_s_udal_lts'));
localStorage.setItem(pacient_gemnip_naim_er_leykoreduc, localStorage.getItem('gemnip_naim_er_leykoreduc'));
localStorage.setItem(pacient_gemnip_naim_er_aferez, localStorage.getItem('gemnip_naim_er_aferez'));
localStorage.setItem(pacient_gemnip_naim_er_dobav_textarea, localStorage.getItem('gemnip_naim_er_dobav_textarea'));
localStorage.setItem(pacient_gemnip_treb_kolich, localStorage.getItem('gemnip_treb_kolich'));
//gemztker
localStorage.setItem(pacient_kn_ztk_er, localStorage.getItem('kn_ztk_er'));
localStorage.setItem(pacient_gemztker_naim_glav, localStorage.getItem('gemztker_naim_glav'));
localStorage.setItem(pacient_gemztker_grup_rez, localStorage.getItem('gemztker_grup_rez'));
localStorage.setItem(pacient_gemztker_naim_er_otmytye_8_razm_i_otm, localStorage.getItem('gemztker_naim_er_otmytye_8_razm_i_otm'));
localStorage.setItem(pacient_gemztker_naim_er_s_udal_lts, localStorage.getItem('gemztker_naim_er_s_udal_lts'));
localStorage.setItem(pacient_gemztker_naim_er_leykoreduc, localStorage.getItem('gemztker_naim_er_leykoreduc'));
localStorage.setItem(pacient_gemztker_naim_er_aferez, localStorage.getItem('gemztker_naim_er_aferez'));
localStorage.setItem(pacient_gemztker_naim_er_dobav_textarea, localStorage.getItem('gemztker_naim_er_dobav_textarea'));
localStorage.setItem(pacient_gemztker_treb_kolich, localStorage.getItem('gemztker_treb_kolich'));
//gemztkszp	
localStorage.setItem(pacient_kn_ztk_szp, localStorage.getItem('kn_ztk_szp'));
localStorage.setItem(pacient_gemztkszp_naim_glav, localStorage.getItem('gemztkszp_naim_glav'));
localStorage.setItem(pacient_gemztkszp_grup_rez, localStorage.getItem('gemztkszp_grup_rez'));
localStorage.setItem(pacient_gemztkszp_naim_szp_patogenreduc, localStorage.getItem('gemztkszp_naim_szp_patogenreduc'));
localStorage.setItem(pacient_gemztkszp_naim_szp_pulirov, localStorage.getItem('gemztkszp_naim_szp_pulirov'));
localStorage.setItem(pacient_gemztkszp_naim_szp_patogeninact, localStorage.getItem('gemztkszp_naim_szp_patogeninact'));
localStorage.setItem(pacient_gemztkszp_naim_szp_kriosupernat, localStorage.getItem('gemztkszp_naim_szp_kriosupernat'));
localStorage.setItem(pacient_gemztkszp_naim_szp_liofiliz, localStorage.getItem('gemztkszp_naim_szp_liofiliz'));
localStorage.setItem(pacient_gemztkszp_naim_er_dobav_textarea, localStorage.getItem('gemztkszp_naim_er_dobav_textarea'));
localStorage.setItem(pacient_gemztkszp_treb_kolich, localStorage.getItem('gemztkszp_treb_kolich'));
//gemztktr
localStorage.setItem(pacient_kn_ztk_tr, localStorage.getItem('kn_ztk_tr'));
localStorage.setItem(pacient_gemztktr_naim_glav, localStorage.getItem('gemztktr_naim_glav'));
localStorage.setItem(pacient_gemztktr_grup_rez, localStorage.getItem('gemztktr_grup_rez'));
localStorage.setItem(pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr, localStorage.getItem('gemztktr_naim_tr_aferez_8_iz_ed_kr'));
localStorage.setItem(pacient_gemztktr_naim_tr_pulirov, localStorage.getItem('gemztktr_naim_tr_pulirov'));
localStorage.setItem(pacient_gemztktr_naim_tr_v_dob_rastv, localStorage.getItem('gemztktr_naim_tr_v_dob_rastv'));
localStorage.setItem(pacient_gemztktr_naim_tr_patogenreduc, localStorage.getItem('gemztktr_naim_tr_patogenreduc'));
localStorage.setItem(pacient_gemztktr_naim_tr_leykoreduc, localStorage.getItem('gemztktr_naim_tr_leykoreduc'));
localStorage.setItem(pacient_gemztktr_naim_tr_kriokonserv, localStorage.getItem('gemztktr_naim_tr_kriokonserv'));
localStorage.setItem(pacient_gemztktr_naim_er_dobav_textarea, localStorage.getItem('gemztktr_naim_er_dobav_textarea'));
localStorage.setItem(pacient_gemztktr_treb_kolich, localStorage.getItem('gemztktr_treb_kolich'));
	
localStorage.setItem(pacient_pokaz_ob_ock, localStorage.getItem('pokaz_ob_ock'));
localStorage.setItem(pacient_pokaz_ob_ock_inptxt, localStorage.getItem('pokaz_ob_ock_inptxt')); 
localStorage.setItem(pacient_pokaz_ob_prod_krovotech, localStorage.getItem('pokaz_ob_prod_krovotech'));
localStorage.setItem(pacient_pokaz_er_anemia, localStorage.getItem('pokaz_er_anemia'));
localStorage.setItem(pacient_pokaz_er_vosp_kolich, localStorage.getItem('pokaz_er_vosp_kolich'));
localStorage.setItem(pacient_pokaz_er_hbht, localStorage.getItem('pokaz_er_hbht'));
localStorage.setItem(pacient_pokaz_er_hb_inptxt, localStorage.getItem('pokaz_er_hb_inptxt')); 
localStorage.setItem(pacient_pokaz_er_ht_inptxt, localStorage.getItem('pokaz_er_ht_inptxt')); 
localStorage.setItem(pacient_pokaz_er_drugie, localStorage.getItem('pokaz_er_drugie'));
localStorage.setItem(pacient_pokaz_er_drugie_textarea, localStorage.getItem('pokaz_er_drugie_textarea')); 
localStorage.setItem(pacient_pokaz_szp_deficit_fakt, localStorage.getItem('pokaz_szp_deficit_fakt'));
localStorage.setItem(pacient_pokaz_szp_peredoz, localStorage.getItem('pokaz_szp_peredoz'));
localStorage.setItem(pacient_pokaz_szp_plazmaferez, localStorage.getItem('pokaz_szp_plazmaferez'));
localStorage.setItem(pacient_pokaz_szp_drugie, localStorage.getItem('pokaz_szp_drugie')); 
localStorage.setItem(pacient_pokaz_szp_drugie_textarea, localStorage.getItem('pokaz_szp_drugie_textarea'));
localStorage.setItem(pacient_pokaz_tr, localStorage.getItem('pokaz_tr'));
localStorage.setItem(pacient_pokaz_tr_drugie, localStorage.getItem('pokaz_tr_drugie'));
localStorage.setItem(pacient_pokaz_tr_drugie_textarea, localStorage.getItem('pokaz_tr_drugie_textarea'));
	
localStorage.setItem(pacient_RBC, localStorage.getItem('RBC'));
localStorage.setItem(pacient_FIBR, localStorage.getItem('FIBR'));
localStorage.setItem(pacient_HGB, localStorage.getItem('HGB'));
localStorage.setItem(pacient_PTI, localStorage.getItem('PTI'));
localStorage.setItem(pacient_HCT, localStorage.getItem('HCT'));
localStorage.setItem(pacient_A4TV, localStorage.getItem('A4TV'));
localStorage.setItem(pacient_PLT, localStorage.getItem('PLT'));
localStorage.setItem(pacient_MNO, localStorage.getItem('MNO'));
localStorage.setItem(pacient_VSK, localStorage.getItem('VSK'));

localStorage.setItem(pacient_ind_podb_otv_lico, localStorage.getItem('ind_podb_otv_lico'));
localStorage.setItem(pacient_ind_podb_dat_issled, localStorage.getItem('ind_podb_dat_issled'));
localStorage.setItem(pacient_proby_sovm, localStorage.getItem('proby_sovm'));
	
localStorage.setItem(pacient_date_analiz, localStorage.getItem('date_analiz'));
	
localStorage.setItem(pacient_podp_vr, localStorage.getItem('podp_vr'));
localStorage.setItem(pacient_pdp, localStorage.getItem('pdp'));
localStorage.setItem(pacient_pdp_lab, localStorage.getItem('pdp_lab'));
localStorage.setItem(pacient_tel_vr, localStorage.getItem('tel_vr'));
localStorage.setItem(pacient_podp_vr_lab, localStorage.getItem('podp_vr_lab'));
	
localStorage.setItem(pacient_objem_tansf, localStorage.getItem('objem_tansf'));
localStorage.setItem(pacient_pr_oslozh, localStorage.getItem('pr_oslozh'));
localStorage.setItem(pacient_pr_oslozh_opisanie, localStorage.getItem('pr_oslozh_opisanie'));
	
	for (j = 1; j < 9; j++) { //Данные гемаконов 
		
		pacients_data_var2();
		
		localStorage.setItem(pacient_gem_naim_glav, localStorage.getItem(gem_naim_glav));
		localStorage.setItem(pacient_gem_naim_er_otmytye_8_razm_i_otm, localStorage.getItem(gem_naim_er_otmytye_8_razm_i_otm));
		localStorage.setItem(pacient_gem_naim_er_s_udal_lts, localStorage.getItem(gem_naim_er_s_udal_lts));
		localStorage.setItem(pacient_gem_naim_er_leykoreduc, localStorage.getItem(gem_naim_er_leykoreduc));
		localStorage.setItem(pacient_gem_naim_er_aferez, localStorage.getItem(gem_naim_er_aferez));
		localStorage.setItem(pacient_gem_naim_szp_patogenreduc, localStorage.getItem(gem_naim_szp_patogenreduc));
		localStorage.setItem(pacient_gem_naim_szp_pulirov, localStorage.getItem(gem_naim_szp_pulirov));
		localStorage.setItem(pacient_gem_naim_szp_patogeninact, localStorage.getItem(gem_naim_szp_patogeninact));
		localStorage.setItem(pacient_gem_naim_szp_kriosupernat, localStorage.getItem(gem_naim_szp_kriosupernat));
		localStorage.setItem(pacient_gem_naim_szp_liofiliz, localStorage.getItem(gem_naim_szp_liofiliz));
		localStorage.setItem(pacient_gem_naim_tr_aferez_8_iz_ed_kr, localStorage.getItem(gem_naim_tr_aferez_8_iz_ed_kr));
		localStorage.setItem(pacient_gem_naim_tr_pulirov, localStorage.getItem(gem_naim_tr_pulirov));
		localStorage.setItem(pacient_gem_naim_tr_v_dob_rastv, localStorage.getItem(gem_naim_tr_v_dob_rastv));
		localStorage.setItem(pacient_gem_naim_tr_patogenreduc, localStorage.getItem(gem_naim_tr_patogenreduc));
		localStorage.setItem(pacient_gem_naim_tr_leykoreduc, localStorage.getItem(gem_naim_tr_leykoreduc));
		localStorage.setItem(pacient_gem_naim_tr_kriokonserv, localStorage.getItem(gem_naim_tr_kriokonserv));
		
		localStorage.setItem(pacient_gem_naim_er_dobav_textarea, localStorage.getItem(gem_naim_er_dobav_textarea));
		localStorage.setItem(pacient_gem_naim_szp_dobav_textarea, localStorage.getItem(gem_naim_szp_dobav_textarea));
		localStorage.setItem(pacient_gem_naim_tr_dobav_textarea, localStorage.getItem(gem_naim_tr_dobav_textarea));
		
		localStorage.setItem(pacient_gem_grup_rez, localStorage.getItem(gem_grup_rez));
		localStorage.setItem(pacient_gem_fen_C1, localStorage.getItem(gem_fen_C1));
		localStorage.setItem(pacient_gem_fen_c0, localStorage.getItem(gem_fen_c0));
		localStorage.setItem(pacient_gem_fen_D, localStorage.getItem(gem_fen_D));
		localStorage.setItem(pacient_gem_fen_Dw, localStorage.getItem(gem_fen_Dw));
		localStorage.setItem(pacient_gem_fen_Cw, localStorage.getItem(gem_fen_Cw));
		localStorage.setItem(pacient_gem_fen_E1, localStorage.getItem(gem_fen_E1));
		localStorage.setItem(pacient_gem_fen_e0, localStorage.getItem(gem_fen_e0));
		localStorage.setItem(pacient_gem_fen_K1, localStorage.getItem(gem_fen_K1));
		localStorage.setItem(pacient_gem_fen_k0, localStorage.getItem(gem_fen_k0));
		
		localStorage.setItem(pacient_gem_v, localStorage.getItem(gem_v));
		localStorage.setItem(pacient_gem_ser, localStorage.getItem(gem_ser));
		localStorage.setItem(pacient_gem_kod_don, localStorage.getItem(gem_kod_don));
		localStorage.setItem(pacient_gem_dat_zagotov, localStorage.getItem(gem_dat_zagotov));
		localStorage.setItem(pacient_gem_godn, localStorage.getItem(gem_godn));
		localStorage.setItem(pacient_gem_proizv, localStorage.getItem(gem_proizv));
	}
	
for (j = 0; j < 4; j++) { //Данные из таблицы наблюдения
		
	pacients_data_var3();
		
	localStorage.setItem(pacient_nabl_ad, localStorage.getItem(nabl_ad));
	localStorage.setItem(pacient_nabl_4ss, localStorage.getItem(nabl_4ss));
	localStorage.setItem(pacient_nabl_t, localStorage.getItem(nabl_t));
	localStorage.setItem(pacient_nabl_diur, localStorage.getItem(nabl_diur));
	localStorage.setItem(pacient_nabl_cvet, localStorage.getItem(nabl_cvet));
	localStorage.setItem(pacient_nabl_cvet_txt, localStorage.getItem(nabl_cvet_txt));
}
}

function save_data_pacient_open_window(){
	"use strict";
	arr_pacients.push(localStorage.getItem('FIO'));
	localStorage.setItem('str_pacients', arr_pacients);
	pacients_data_save_window();
	var_null();
}

function save_data_pacient_no_window(){
	"use strict";
	arr_pacients.push(localStorage.getItem('FIO'));
	localStorage.setItem('str_pacients', arr_pacients);
	var_null();
}

function load_data_pacient(){
	"use strict"; 
	
pacient = localStorage.getItem('save_FIO2');

pacients_data_var();
	
localStorage.setItem('otdel', localStorage.getItem(pacient_otdel));	
localStorage.setItem('FIO', localStorage.getItem(pacient_FIO));
localStorage.setItem('no_ist', localStorage.getItem(pacient_no_ist));
localStorage.setItem('vozrast', localStorage.getItem(pacient_vozrast));
localStorage.setItem('data_rozhd', localStorage.getItem(pacient_data_rozhd));
localStorage.setItem('isl_at', localStorage.getItem(pacient_isl_at));
localStorage.setItem('isl_at_opisanie', localStorage.getItem(pacient_isl_at_opisanie));
localStorage.setItem('diagnoz', localStorage.getItem(pacient_diagnoz));
localStorage.setItem('allergia', localStorage.getItem(pacient_allergia));
localStorage.setItem('tr_anamn', localStorage.getItem(pacient_tr_anamn));
localStorage.setItem('an_ind_podb', localStorage.getItem(pacient_an_ind_podb));
localStorage.setItem('an_reakc', localStorage.getItem(pacient_an_reakc));
localStorage.setItem('an_akush', localStorage.getItem(pacient_an_akush));
	
localStorage.setItem('rec_grup_rez', localStorage.getItem(pacient_rec_grup_rez));
localStorage.setItem('rec_fen_C1', localStorage.getItem(pacient_rec_fen_C1));
localStorage.setItem('rec_fen_c0', localStorage.getItem(pacient_rec_fen_c0));
localStorage.setItem('rec_fen_D', localStorage.getItem(pacient_rec_fen_D));
localStorage.setItem('rec_fen_Dw', localStorage.getItem(pacient_rec_fen_Dw));
localStorage.setItem('rec_fen_Cw', localStorage.getItem(pacient_rec_fen_Cw));
localStorage.setItem('rec_fen_E1', localStorage.getItem(pacient_rec_fen_E1));
localStorage.setItem('rec_fen_e0', localStorage.getItem(pacient_rec_fen_e0));
localStorage.setItem('rec_fen_K1', localStorage.getItem(pacient_rec_fen_K1));
localStorage.setItem('rec_fen_k0', localStorage.getItem(pacient_rec_fen_k0));

if(localStorage.getItem('otdel')==='null'){localStorage.setItem('otdel', '');}	
if(localStorage.getItem('FIO')==='null'){localStorage.setItem('FIO', '');}
if(localStorage.getItem('no_ist')==='null'){localStorage.setItem('no_ist', '');}
if(localStorage.getItem('vozrast')==='null'){localStorage.setItem('vozrast', '');}
if(localStorage.getItem('data_rozhd')==='null'){localStorage.setItem('data_rozhd', '');}
if(localStorage.getItem('diagnoz')==='null'){localStorage.setItem('diagnoz', '');}
if(localStorage.getItem('allergia')==='null'){localStorage.setItem('allergia', '');}
if(localStorage.getItem('tr_anamn')==='null'){localStorage.setItem('tr_anamn', '');}
if(localStorage.getItem('an_ind_podb')==='null'){localStorage.setItem('an_ind_podb', '');}
if(localStorage.getItem('an_reakc')==='null'){localStorage.setItem('an_reakc', '');}
if(localStorage.getItem('an_akush')==='null'){localStorage.setItem('an_akush', '');}
	
location.reload();	
pacients_data_FIO_window();
document.getElementById('pacients_data_out').style.display='';
var_null();
}

function load_data_session(){// ЗАГРУЗИТЬ СОХРАНЁННУЮ СЕССИЮ
	"use strict"; 
	
pacient = localStorage.getItem('save_FIO2');

pacients_data_var();
	
localStorage.setItem('otdel', localStorage.getItem(pacient_otdel));	
localStorage.setItem('FIO', localStorage.getItem(pacient_FIO));
localStorage.setItem('no_ist', localStorage.getItem(pacient_no_ist));
localStorage.setItem('vozrast', localStorage.getItem(pacient_vozrast));
localStorage.setItem('data_rozhd', localStorage.getItem(pacient_data_rozhd));
localStorage.setItem('isl_at', localStorage.getItem(pacient_isl_at));
localStorage.setItem('isl_at_opisanie', localStorage.getItem(pacient_isl_at_opisanie));
localStorage.setItem('diagnoz', localStorage.getItem(pacient_diagnoz));
localStorage.setItem('allergia', localStorage.getItem(pacient_allergia));
localStorage.setItem('tr_anamn', localStorage.getItem(pacient_tr_anamn));
localStorage.setItem('an_ind_podb', localStorage.getItem(pacient_an_ind_podb));
localStorage.setItem('an_reakc', localStorage.getItem(pacient_an_reakc));
localStorage.setItem('an_akush', localStorage.getItem(pacient_an_akush));
	
localStorage.setItem('nazn_ztk', localStorage.getItem(pacient_nazn_ztk));	
localStorage.setItem('nazn_nip', localStorage.getItem(pacient_nazn_nip));
localStorage.setItem('nazn_zspk', localStorage.getItem(pacient_nazn_zspk));
localStorage.setItem('naim_lab', localStorage.getItem(pacient_naim_lab));
localStorage.setItem('naim_lab_ch', localStorage.getItem(pacient_naim_lab_ch));
localStorage.setItem('gemztker_podbor', localStorage.getItem(pacient_gemztker_podbor));
localStorage.setItem('gemztker_podbor_ch', localStorage.getItem(pacient_gemztker_podbor_ch));
	
localStorage.setItem('rec_grup_rez', localStorage.getItem(pacient_rec_grup_rez));
localStorage.setItem('rec_fen_C1', localStorage.getItem(pacient_rec_fen_C1));
localStorage.setItem('rec_fen_c0', localStorage.getItem(pacient_rec_fen_c0));
localStorage.setItem('rec_fen_D', localStorage.getItem(pacient_rec_fen_D));
localStorage.setItem('rec_fen_Dw', localStorage.getItem(pacient_rec_fen_Dw));
localStorage.setItem('rec_fen_Cw', localStorage.getItem(pacient_rec_fen_Cw));
localStorage.setItem('rec_fen_E1', localStorage.getItem(pacient_rec_fen_E1));
localStorage.setItem('rec_fen_e0', localStorage.getItem(pacient_rec_fen_e0));
localStorage.setItem('rec_fen_K1', localStorage.getItem(pacient_rec_fen_K1));
localStorage.setItem('rec_fen_k0', localStorage.getItem(pacient_rec_fen_k0));
///	gemnip
localStorage.setItem('gemnip_naim_glav', localStorage.getItem(pacient_gemnip_naim_glav));
localStorage.setItem('gemnip_grup_rez', localStorage.getItem(pacient_gemnip_grup_rez));
localStorage.setItem('gemnip_naim_er_otmytye_8_razm_i_otm', localStorage.getItem(pacient_gemnip_naim_er_otmytye_8_razm_i_otm));
localStorage.setItem('gemnip_naim_er_s_udal_lts', localStorage.getItem(pacient_gemnip_naim_er_s_udal_lts));
localStorage.setItem('gemnip_naim_er_leykoreduc', localStorage.getItem(pacient_gemnip_naim_er_leykoreduc));
localStorage.setItem('gemnip_naim_er_aferez', localStorage.getItem(pacient_gemnip_naim_er_aferez));
localStorage.setItem('gemnip_naim_er_dobav_textarea', localStorage.getItem(pacient_gemnip_naim_er_dobav_textarea));
if(localStorage.getItem('gemnip_naim_er_dobav_textarea')===null||
   localStorage.getItem('gemnip_naim_er_dobav_textarea')===undefined|| localStorage.getItem('gemnip_naim_er_dobav_textarea')==='undefined'|| localStorage.getItem('gemnip_naim_er_dobav_textarea')==='null'){
	localStorage.setItem('gemnip_naim_er_dobav_textarea', '');
}
localStorage.setItem('gemnip_treb_kolich', localStorage.getItem(pacient_gemnip_treb_kolich));
if(localStorage.getItem('gemnip_treb_kolich')===null||
   localStorage.getItem('gemnip_treb_kolich')===undefined|| localStorage.getItem('gemnip_treb_kolich')==='undefined'|| localStorage.getItem('gemnip_treb_kolich')==='null'){
	localStorage.setItem('gemnip_treb_kolich', '');
}	
gemnip_naim_er_vybor_dop();
///	gemztker
localStorage.setItem('kn_ztk_er', localStorage.getItem(pacient_kn_ztk_er));
localStorage.setItem('gemztker_naim_glav', localStorage.getItem(pacient_gemztker_naim_glav));
localStorage.setItem('gemztker_grup_rez', localStorage.getItem(pacient_gemztker_grup_rez));
localStorage.setItem('gemztker_naim_er_otmytye_8_razm_i_otm', localStorage.getItem(pacient_gemztker_naim_er_otmytye_8_razm_i_otm));
localStorage.setItem('gemztker_naim_er_s_udal_lts', localStorage.getItem(pacient_gemztker_naim_er_s_udal_lts));
localStorage.setItem('gemztker_naim_er_leykoreduc', localStorage.getItem(pacient_gemztker_naim_er_leykoreduc));
localStorage.setItem('gemztker_naim_er_aferez', localStorage.getItem(pacient_gemztker_naim_er_aferez));
localStorage.setItem('gemztker_naim_er_dobav_textarea', localStorage.getItem(pacient_gemztker_naim_er_dobav_textarea));
if(localStorage.getItem('gemztker_naim_er_dobav_textarea')===null||
   localStorage.getItem('gemztker_naim_er_dobav_textarea')===undefined|| localStorage.getItem('gemztker_naim_er_dobav_textarea')==='undefined'|| localStorage.getItem('gemztker_naim_er_dobav_textarea')==='null'){
	localStorage.setItem('gemztker_naim_er_dobav_textarea', '');
}
localStorage.setItem('gemztker_treb_kolich', localStorage.getItem(pacient_gemztker_treb_kolich));
if(localStorage.getItem('gemztker_treb_kolich')===null||
   localStorage.getItem('gemztker_treb_kolich')===undefined|| localStorage.getItem('gemztker_treb_kolich')==='undefined'|| localStorage.getItem('gemztker_treb_kolich')==='null'){
	localStorage.setItem('gemztker_treb_kolich', '');
}	
gemztker_naim_er_vybor_dop();
//gemztkszp
localStorage.setItem('kn_ztk_szp', localStorage.getItem(pacient_kn_ztk_szp));
localStorage.setItem('gemztkszp_naim_glav', localStorage.getItem(pacient_gemztkszp_naim_glav));
localStorage.setItem('gemztkszp_grup_rez', localStorage.getItem(pacient_gemztkszp_grup_rez));
localStorage.setItem('gemztkszp_naim_szp_patogenreduc', localStorage.getItem(pacient_gemztkszp_naim_szp_patogenreduc));
localStorage.setItem('gemztkszp_naim_szp_pulirov', localStorage.getItem(pacient_gemztkszp_naim_szp_pulirov));
localStorage.setItem('gemztkszp_naim_szp_patogeninact', localStorage.getItem(pacient_gemztkszp_naim_szp_patogeninact));
localStorage.setItem('gemztkszp_naim_szp_kriosupernat', localStorage.getItem(pacient_gemztkszp_naim_szp_kriosupernat));
localStorage.setItem('gemztkszp_naim_szp_liofiliz', localStorage.getItem(pacient_gemztkszp_naim_szp_liofiliz));
localStorage.setItem('gemztkszp_naim_er_dobav_textarea', localStorage.getItem(pacient_gemztkszp_naim_er_dobav_textarea));
if(localStorage.getItem('gemztkszp_naim_szp_dobav_textarea')===null||
   localStorage.getItem('gemztkszp_naim_szp_dobav_textarea')===undefined|| localStorage.getItem('gemztkszp_naim_szp_dobav_textarea')==='undefined'|| localStorage.getItem('gemztkszp_naim_szp_dobav_textarea')==='null'){
	localStorage.setItem('gemztkszp_naim_szp_dobav_textarea', '');
}
localStorage.setItem('gemztkszp_treb_kolich', localStorage.getItem(pacient_gemztkszp_treb_kolich));
if(localStorage.getItem('gemztkszp_treb_kolich')===null||
   localStorage.getItem('gemztkszp_treb_kolich')===undefined|| localStorage.getItem('gemztkszp_treb_kolich')==='undefined'|| localStorage.getItem('gemztkszp_treb_kolich')==='null'){
	localStorage.setItem('gemztkszp_treb_kolich', '');
}	
gemztkszp_naim_szp_vybor_dop();
//gemztktr
localStorage.setItem('kn_ztk_tr', localStorage.getItem(pacient_kn_ztk_tr));
localStorage.setItem('gemztktr_naim_glav', localStorage.getItem(pacient_gemztktr_naim_glav));
localStorage.setItem('gemztktr_grup_rez', localStorage.getItem(pacient_gemztktr_grup_rez));
localStorage.setItem('gemztktr_naim_tr_aferez_8_iz_ed_kr', localStorage.getItem(pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr));
localStorage.setItem('gemztktr_naim_tr_pulirov', localStorage.getItem(pacient_gemztktr_naim_tr_pulirov));
localStorage.setItem('gemztktr_naim_tr_v_dob_rastv', localStorage.getItem(pacient_gemztktr_naim_tr_v_dob_rastv));
localStorage.setItem('gemztktr_naim_tr_patogenreduc', localStorage.getItem(pacient_gemztktr_naim_tr_patogenreduc));
localStorage.setItem('gemztktr_naim_tr_leykoreduc', localStorage.getItem(pacient_gemztktr_naim_tr_leykoreduc));
localStorage.setItem('gemztktr_naim_tr_kriokonserv', localStorage.getItem(pacient_gemztktr_naim_tr_kriokonserv));
localStorage.setItem('gemztktr_naim_er_dobav_textarea', localStorage.getItem(pacient_gemztktr_naim_er_dobav_textarea));
if(localStorage.getItem('gemztktr_naim_tr_dobav_textarea')===null||
   localStorage.getItem('gemztktr_naim_tr_dobav_textarea')===undefined|| localStorage.getItem('gemztktr_naim_tr_dobav_textarea')==='undefined'|| localStorage.getItem('gemztktr_naim_tr_dobav_textarea')==='null'){
	localStorage.setItem('gemztktr_naim_tr_dobav_textarea', '');
}
localStorage.setItem('gemztktr_treb_kolich', localStorage.getItem(pacient_gemztktr_treb_kolich));
if(localStorage.getItem('gemztktr_treb_kolich')===null||
   localStorage.getItem('gemztktr_treb_kolich')===undefined|| localStorage.getItem('gemztktr_treb_kolich')==='undefined'|| localStorage.getItem('gemztktr_treb_kolich')==='null'){
	localStorage.setItem('gemztktr_treb_kolich', '');
}	
gemztktr_naim_tr_vybor_dop();

localStorage.setItem('pokaz_ob_ock', localStorage.getItem(pacient_pokaz_ob_ock));
localStorage.setItem('pokaz_ob_ock_inptxt', localStorage.getItem(pacient_pokaz_ob_ock_inptxt));
localStorage.setItem('pokaz_ob_prod_krovotech', localStorage.getItem(pacient_pokaz_ob_prod_krovotech));
localStorage.setItem('pokaz_er_anemia', localStorage.getItem(pacient_pokaz_er_anemia));
localStorage.setItem('pokaz_er_vosp_kolich', localStorage.getItem(pacient_pokaz_er_vosp_kolich));
localStorage.setItem('pokaz_er_hbht', localStorage.getItem(pacient_pokaz_er_hbht));
localStorage.setItem('pokaz_er_hb_inptxt', localStorage.getItem(pacient_pokaz_er_hb_inptxt)); 
localStorage.setItem('pokaz_er_ht_inptxt', localStorage.getItem(pacient_pokaz_er_ht_inptxt)); 
localStorage.setItem('pokaz_er_drugie', localStorage.getItem(pacient_pokaz_er_drugie));
localStorage.setItem('pokaz_er_drugie_textarea', localStorage.getItem(pacient_pokaz_er_drugie_textarea)); 
localStorage.setItem('pokaz_szp_deficit_fakt', localStorage.getItem(pacient_pokaz_szp_deficit_fakt));
localStorage.setItem('pokaz_szp_peredoz', localStorage.getItem(pacient_pokaz_szp_peredoz));
localStorage.setItem('pokaz_szp_plazmaferez', localStorage.getItem(pacient_pokaz_szp_plazmaferez));
localStorage.setItem('pokaz_szp_drugie', localStorage.getItem(pacient_pokaz_szp_drugie)); 
localStorage.setItem('pokaz_szp_drugie_textarea', localStorage.getItem(pacient_pokaz_szp_drugie_textarea));
localStorage.setItem('pokaz_tr', localStorage.getItem(pacient_pokaz_tr));
localStorage.setItem('pokaz_tr_drugie', localStorage.getItem(pacient_pokaz_tr_drugie));
localStorage.setItem('pokaz_tr_drugie_textarea', localStorage.getItem(pacient_pokaz_tr_drugie_textarea));
	
localStorage.setItem('RBC', localStorage.getItem(pacient_RBC));
localStorage.setItem('FIBR', localStorage.getItem(pacient_FIBR));
localStorage.setItem('HGB', localStorage.getItem(pacient_HGB));
localStorage.setItem('PTI', localStorage.getItem(pacient_PTI));
localStorage.setItem('HCT', localStorage.getItem(pacient_HCT));
localStorage.setItem('A4TV', localStorage.getItem(pacient_A4TV));
localStorage.setItem('PLT', localStorage.getItem(pacient_PLT));
localStorage.setItem('MNO', localStorage.getItem(pacient_MNO));
localStorage.setItem('VSK', localStorage.getItem(pacient_VSK));

localStorage.setItem('ind_podb_otv_lico', localStorage.getItem(pacient_ind_podb_otv_lico));
localStorage.setItem('ind_podb_dat_issled', localStorage.getItem(pacient_ind_podb_dat_issled));
localStorage.setItem('proby_sovm', localStorage.getItem(pacient_proby_sovm));
	
localStorage.setItem('date_analiz', localStorage.getItem(pacient_date_analiz));
	
localStorage.setItem('podp_vr', localStorage.getItem(pacient_podp_vr));
localStorage.setItem('pdp', localStorage.getItem(pacient_pdp));
localStorage.setItem('pdp_lab', localStorage.getItem(pacient_pdp_lab));
localStorage.setItem('tel_vr', localStorage.getItem(pacient_tel_vr));
localStorage.setItem('podp_vr_lab', localStorage.getItem(pacient_podp_vr_lab));
	
localStorage.setItem('objem_tansf', localStorage.getItem(pacient_objem_tansf));
localStorage.setItem('pr_oslozh', localStorage.getItem(pacient_pr_oslozh));
localStorage.setItem('pr_oslozh_opisanie', localStorage.getItem(pacient_pr_oslozh_opisanie));

if(localStorage.getItem('otdel')==='null'){
	localStorage.setItem('otdel', '');
}	
if(localStorage.getItem('FIO')==='null'){
	localStorage.setItem('FIO', '');
}
if(localStorage.getItem('no_ist')==='null'){
	localStorage.setItem('no_ist', '');
}
if(localStorage.getItem('vozrast')==='null'){
	localStorage.setItem('vozrast', '');
}
if(localStorage.getItem('data_rozhd')==='null'){
	localStorage.setItem('data_rozhd', '');
}
if(localStorage.getItem('diagnoz')==='null'){
	localStorage.setItem('diagnoz', '');
}
if(localStorage.getItem('allergia')==='null'){
	localStorage.setItem('allergia', '');
}
if(localStorage.getItem('tr_anamn')==='null'){
	localStorage.setItem('tr_anamn', '');
}
if(localStorage.getItem('an_ind_podb')==='null'){
	localStorage.setItem('an_ind_podb', '');
}
if(localStorage.getItem('an_reakc')==='null'){
	localStorage.setItem('an_reakc', '');
}
if(localStorage.getItem('an_akush')==='null'){
	localStorage.setItem('an_akush', '');
}	
if(localStorage.getItem('date_analiz')==='null'){
	localStorage.setItem('date_analiz', '');
}
if(localStorage.getItem('RBC')==='null'){
	localStorage.setItem('RBC', '');
}
if(localStorage.getItem('FIBR')==='null'){
	localStorage.setItem('FIBR', '');
}
if(localStorage.getItem('HGB')==='null'){
	localStorage.setItem('HGB', '');
}
if(localStorage.getItem('PTI')==='null'){
	localStorage.setItem('PTI', '');
}
if(localStorage.getItem('HCT')==='null'){
	localStorage.setItem('HCT', '');
}
if(localStorage.getItem('A4TV')==='null'){
	localStorage.setItem('A4TV', '');
}
if(localStorage.getItem('PLT')==='null'){
	localStorage.setItem('PLT', '');
}
if(localStorage.getItem('MNO')==='null'){
	localStorage.setItem('MNO', '');
}
if(localStorage.getItem('VSK')==='null'){
	localStorage.setItem('VSK', '');
}
if(localStorage.getItem('ind_podb_otv_lico')==='null'){
	localStorage.setItem('ind_podb_otv_lico', '');
}
if(localStorage.getItem('ind_podb_dat_issled')==='null'){
	localStorage.setItem('ind_podb_dat_issled', '');
}
if(localStorage.getItem('proby_sovm')==='null'){
	localStorage.setItem('proby_sovm', '');
}
if(localStorage.getItem('col_a_ser')==='null'){
	localStorage.setItem('col_a_ser', '');
}
if(localStorage.getItem('col_a_godn')==='null'){
	localStorage.setItem('col_a_godn', '');
}
if(localStorage.getItem('col_a_proizv')==='null'){
	localStorage.setItem('col_a_proizv', '');
}
if(localStorage.getItem('col_b_ser')==='null'){
	localStorage.setItem('col_b_ser', '');
}
if(localStorage.getItem('col_b_godn')==='null'){
	localStorage.setItem('col_b_godn', '');
}
if(localStorage.getItem('col_b_proizv')==='null'){
	localStorage.setItem('col_b_proizv', '');
}
if(localStorage.getItem('col_ab_ser')==='null'){
	localStorage.setItem('col_ab_ser', '');
}
if(localStorage.getItem('col_ab_godn')==='null'){
	localStorage.setItem('col_ab_godn', '');
}
if(localStorage.getItem('col_ab_proizv')==='null'){
	localStorage.setItem('col_ab_proizv', '');
}
if(localStorage.getItem('col_d_ser')==='null'){
	localStorage.setItem('col_d_ser', '');
}
if(localStorage.getItem('col_d_godn')==='null'){
	localStorage.setItem('col_d_godn', '');
}
if(localStorage.getItem('col_d_proizv')==='null'){
	localStorage.setItem('col_d_proizv', '');
}
if(localStorage.getItem('pol_ser')==='null'){
	localStorage.setItem('pol_ser', '');
}
if(localStorage.getItem('pol_godn')==='null'){
	localStorage.setItem('pol_godn', '');
}
if(localStorage.getItem('pol_proizv')==='null'){
	localStorage.setItem('pol_proizv', '');
}
if(localStorage.getItem('zhel_ser')==='null'){
	localStorage.setItem('zhel_ser', '');
}
if(localStorage.getItem('zhel_godn')==='null'){
	localStorage.setItem('zhel_godn', '');
}
if(localStorage.getItem('zhel_proizv')==='null'){
	localStorage.setItem('zhel_proizv', '');
}
if(localStorage.getItem('kumbs_ser')==='null'){
	localStorage.setItem('kumbs_ser', '');
}
if(localStorage.getItem('kumbs_godn')==='null'){
	localStorage.setItem('kumbs_godn', '');
}
if(localStorage.getItem('kumbs_proizv')==='null'){
	localStorage.setItem('kumbs_proizv', '');
}
if(localStorage.getItem('podp_vr')==='null'){
	localStorage.setItem('podp_vr', '');
}
if(localStorage.getItem('pdp')==='null'){
	localStorage.setItem('pdp', '');
}
if(localStorage.getItem('pdp_lab')==='null'){
	localStorage.setItem('pdp_lab', '');
}
if(localStorage.getItem('tel_vr')==='null'){
	localStorage.setItem('tel_vr', '');
}
if(localStorage.getItem('podp_vr_lab')==='null'){
	localStorage.setItem('podp_vr_lab', '');
}
if(localStorage.getItem('pr_oslozh')==='null'){
	localStorage.setItem('pr_oslozh', '');
}
if(localStorage.getItem('pr_oslozh_opisanie')==='null'){
	localStorage.setItem('pr_oslozh_opisanie', '');
}

for (j = 1; j < 9; j++) { //Данные гемаконов 
		
	pacients_data_var2();
	
	localStorage.setItem(gem_naim_glav, localStorage.getItem(pacient_gem_naim_glav));
	localStorage.setItem(gem_naim_er_otmytye_8_razm_i_otm, localStorage.getItem(pacient_gem_naim_er_otmytye_8_razm_i_otm));
	localStorage.setItem(gem_naim_er_s_udal_lts, localStorage.getItem(pacient_gem_naim_er_s_udal_lts));
	localStorage.setItem(gem_naim_er_leykoreduc, localStorage.getItem(pacient_gem_naim_er_leykoreduc));
	localStorage.setItem(gem_naim_er_aferez, localStorage.getItem(pacient_gem_naim_er_aferez));
	localStorage.setItem(gem_naim_szp_patogenreduc, localStorage.getItem(pacient_gem_naim_szp_patogenreduc));
	localStorage.setItem(gem_naim_szp_pulirov, localStorage.getItem(pacient_gem_naim_szp_pulirov));
	localStorage.setItem(gem_naim_szp_patogeninact, localStorage.getItem(pacient_gem_naim_szp_patogeninact));
	localStorage.setItem(gem_naim_szp_kriosupernat, localStorage.getItem(pacient_gem_naim_szp_kriosupernat));
	localStorage.setItem(gem_naim_szp_liofiliz, localStorage.getItem(pacient_gem_naim_szp_liofiliz));
	localStorage.setItem(gem_naim_tr_aferez_8_iz_ed_kr, localStorage.getItem(pacient_gem_naim_tr_aferez_8_iz_ed_kr));
	localStorage.setItem(gem_naim_tr_pulirov, localStorage.getItem(pacient_gem_naim_tr_pulirov));
	localStorage.setItem(gem_naim_tr_v_dob_rastv, localStorage.getItem(pacient_gem_naim_tr_v_dob_rastv));
	localStorage.setItem(gem_naim_tr_patogenreduc, localStorage.getItem(pacient_gem_naim_tr_patogenreduc));
	localStorage.setItem(gem_naim_tr_leykoreduc, localStorage.getItem(pacient_gem_naim_tr_leykoreduc));
	localStorage.setItem(gem_naim_tr_kriokonserv, localStorage.getItem(pacient_gem_naim_tr_kriokonserv));
	
	localStorage.setItem(gem_naim_er_dobav_textarea, localStorage.getItem(pacient_gem_naim_er_dobav_textarea));
	localStorage.setItem(gem_naim_szp_dobav_textarea, localStorage.getItem(pacient_gem_naim_szp_dobav_textarea));
	localStorage.setItem(gem_naim_tr_dobav_textarea, localStorage.getItem(pacient_gem_naim_tr_dobav_textarea));
		
	localStorage.setItem(gem_grup_rez, localStorage.getItem(pacient_gem_grup_rez));
	localStorage.setItem(gem_fen_C1, localStorage.getItem(pacient_gem_fen_C1));
	localStorage.setItem(gem_fen_c0, localStorage.getItem(pacient_gem_fen_c0));
	localStorage.setItem(gem_fen_D, localStorage.getItem(pacient_gem_fen_D));
	localStorage.setItem(gem_fen_Dw, localStorage.getItem(pacient_gem_fen_Dw));
	localStorage.setItem(gem_fen_Cw, localStorage.getItem(pacient_gem_fen_Cw));
	localStorage.setItem(gem_fen_E1, localStorage.getItem(pacient_gem_fen_E1));
	localStorage.setItem(gem_fen_e0, localStorage.getItem(pacient_gem_fen_e0));
	localStorage.setItem(gem_fen_K1, localStorage.getItem(pacient_gem_fen_K1));
	localStorage.setItem(gem_fen_k0, localStorage.getItem(pacient_gem_fen_k0));
	
	localStorage.setItem(gem_v, localStorage.getItem(pacient_gem_v));
	localStorage.setItem(gem_ser, localStorage.getItem(pacient_gem_ser));
	localStorage.setItem(gem_kod_don, localStorage.getItem(pacient_gem_kod_don));
	localStorage.setItem(gem_dat_zagotov, localStorage.getItem(pacient_gem_dat_zagotov));
	localStorage.setItem(gem_godn, localStorage.getItem(pacient_gem_godn));
	localStorage.setItem(gem_proizv, localStorage.getItem(pacient_gem_proizv));
		
	if(localStorage.getItem(gem_v)===null|| localStorage.getItem(gem_v)===undefined|| localStorage.getItem(gem_v)==='undefined'|| localStorage.getItem(gem_v)==='null'){
		localStorage.setItem(gem_v, '');
	}
	if(localStorage.getItem(gem_ser)===null|| localStorage.getItem(gem_ser)===undefined|| localStorage.getItem(gem_ser)==='undefined'|| localStorage.getItem(gem_ser)==='null'){
		localStorage.setItem(gem_ser, '');
	}
	if(localStorage.getItem(gem_kod_don)===null|| localStorage.getItem(gem_kod_don)===undefined|| localStorage.getItem(gem_kod_don)==='undefined'|| localStorage.getItem(gem_kod_don)==='null'){
		localStorage.setItem(gem_kod_don, '');
	}
	if(localStorage.getItem(gem_dat_zagotov)===null|| localStorage.getItem(gem_dat_zagotov)===undefined|| localStorage.getItem(gem_dat_zagotov)==='undefined'|| localStorage.getItem(gem_dat_zagotov)==='null'){
		localStorage.setItem(gem_dat_zagotov, '');
	}
	if(localStorage.getItem(gem_godn)===null|| localStorage.getItem(gem_godn)===undefined|| localStorage.getItem(gem_godn)==='undefined'|| localStorage.getItem(gem_godn)==='null'){
		localStorage.setItem(gem_godn, '');
	}
	if(localStorage.getItem(gem_proizv)===null|| localStorage.getItem(gem_proizv)===undefined|| localStorage.getItem(gem_proizv)==='undefined'|| localStorage.getItem(gem_proizv)==='null'){
		localStorage.setItem(gem_proizv, '');
	}
	
	if(localStorage.getItem(gem_naim_er_dobav_textarea)===null|| localStorage.getItem(gem_naim_er_dobav_textarea)===undefined|| localStorage.getItem(gem_naim_er_dobav_textarea)==='undefined'|| localStorage.getItem(gem_naim_er_dobav_textarea)==='null'){
		localStorage.setItem(gem_naim_er_dobav_textarea, '');
	}
	if(localStorage.getItem(gem_naim_szp_dobav_textarea)===null|| localStorage.getItem(gem_naim_szp_dobav_textarea)===undefined|| localStorage.getItem(gem_naim_szp_dobav_textarea)==='undefined'|| localStorage.getItem(gem_naim_szp_dobav_textarea)==='null'){
		localStorage.setItem(gem_naim_szp_dobav_textarea, '');
	}
	if(localStorage.getItem(gem_naim_tr_dobav_textarea)===null|| localStorage.getItem(gem_naim_tr_dobav_textarea)===undefined|| localStorage.getItem(gem_naim_tr_dobav_textarea)==='undefined'|| localStorage.getItem(gem_naim_tr_dobav_textarea)==='null'){
		localStorage.setItem(gem_naim_tr_dobav_textarea, '');
	}
	full_name_sl();
}

for (j = 0; j < 4; j++) { //Данные из таблицы наблюдения
		
	pacients_data_var3();
		
	localStorage.setItem(nabl_ad, localStorage.getItem(pacient_nabl_ad));
	localStorage.setItem(nabl_4ss, localStorage.getItem(pacient_nabl_4ss));
	localStorage.setItem(nabl_t, localStorage.getItem(pacient_nabl_t));
	localStorage.setItem(nabl_diur, localStorage.getItem(pacient_nabl_diur));
	localStorage.setItem(nabl_cvet, localStorage.getItem(pacient_nabl_cvet));
	localStorage.setItem(nabl_cvet_txt, localStorage.getItem(pacient_nabl_cvet_txt));
	
	if(localStorage.getItem(nabl_ad)===null|| localStorage.getItem(nabl_ad)===undefined|| localStorage.getItem(nabl_ad)==='undefined'|| localStorage.getItem(nabl_ad)==='null'){
		localStorage.setItem(nabl_ad, '');
	}
	if(localStorage.getItem(nabl_4ss)===null|| localStorage.getItem(nabl_4ss)===undefined|| localStorage.getItem(nabl_4ss)==='undefined'|| localStorage.getItem(nabl_4ss)==='null'){
		localStorage.setItem(nabl_4ss, '');
	}
	if(localStorage.getItem(nabl_t)===null|| localStorage.getItem(nabl_t)===undefined|| localStorage.getItem(nabl_t)==='undefined'|| localStorage.getItem(nabl_t)==='null'){
		localStorage.setItem(nabl_t, '');
	}
	if(localStorage.getItem(nabl_diur)===null|| localStorage.getItem(nabl_diur)===undefined|| localStorage.getItem(nabl_diur)==='undefined'|| localStorage.getItem(nabl_diur)==='null'){
		localStorage.setItem(nabl_diur, '');
	}
	if(localStorage.getItem(pacient_nabl_cvet)===null|| localStorage.getItem(pacient_nabl_cvet)===undefined|| localStorage.getItem(pacient_nabl_cvet)==='undefined'|| localStorage.getItem(pacient_nabl_cvet)==='null'){
		localStorage.setItem(pacient_nabl_cvet, '');
	}
}	

if(localStorage.getItem('nabl_cvet_3_3_txt')==='undefined'|| localStorage.getItem('nabl_cvet_3_3_txt')==='null'){
	localStorage.setItem('nabl_cvet_3_3_txt', '');
}
if(localStorage.getItem('nabl_cvet_3_2_txt')==='undefined'|| localStorage.getItem('nabl_cvet_3_2_txt')==='null'){
	localStorage.setItem('nabl_cvet_3_2_txt', '');
}
if(localStorage.getItem('nabl_cvet_3_1_txt')==='undefined'|| localStorage.getItem('nabl_cvet_3_1_txt')==='null'){
	localStorage.setItem('nabl_cvet_3_1_txt', '');
}
if(localStorage.getItem('nabl_cvet_3_0_txt')==='undefined'|| localStorage.getItem('nabl_cvet_3_0_txt')==='null'){
	localStorage.setItem('nabl_cvet_3_0_txt', '');
}
	
location.reload();	
pacients_data_FIO_window();
document.getElementById('pacients_data_out').style.display='';
var_null();
}

function pacients_data_delete(){
	"use strict";
	
pacient = localStorage.getItem('save_FIO');
	
pacients_data_var();
	
localStorage.removeItem(pacient_otdel);
localStorage.removeItem(pacient_FIO);
localStorage.removeItem(pacient_no_ist);
localStorage.removeItem(pacient_vozrast);
localStorage.removeItem(pacient_data_rozhd);
localStorage.removeItem(pacient_isl_at);
localStorage.removeItem(pacient_isl_at_opisanie);
localStorage.removeItem(pacient_diagnoz);
localStorage.removeItem(pacient_allergia);
localStorage.removeItem(pacient_tr_anamn);
localStorage.removeItem(pacient_an_ind_podb);
localStorage.removeItem(pacient_an_reakc);
localStorage.removeItem(pacient_an_akush);
	
localStorage.removeItem(pacient_nazn_ztk);
localStorage.removeItem(pacient_nazn_nip);
localStorage.removeItem(pacient_nazn_zspk);
localStorage.removeItem(pacient_naim_lab);
localStorage.removeItem(pacient_naim_lab_ch);
localStorage.removeItem(pacient_gemztker_podbor);
localStorage.removeItem(pacient_gemztker_podbor_ch);
	
localStorage.removeItem(pacient_rec_grup_rez);
localStorage.removeItem(pacient_rec_fen_C1);
localStorage.removeItem(pacient_rec_fen_c0);
localStorage.removeItem(pacient_rec_fen_D);
localStorage.removeItem(pacient_rec_fen_Dw);
localStorage.removeItem(pacient_rec_fen_Cw);
localStorage.removeItem(pacient_rec_fen_E1);
localStorage.removeItem(pacient_rec_fen_e0);
localStorage.removeItem(pacient_rec_fen_K1);
localStorage.removeItem(pacient_rec_fen_k0);
///gemnip	
localStorage.removeItem(pacient_gemnip_naim_glav);
localStorage.removeItem(pacient_gemnip_grup_rez);
localStorage.removeItem(pacient_gemnip_naim_er_otmytye_8_razm_i_otm);
localStorage.removeItem(pacient_gemnip_naim_er_s_udal_lts);
localStorage.removeItem(pacient_gemnip_naim_er_leykoreduc);
localStorage.removeItem(pacient_gemnip_naim_er_aferez);
localStorage.removeItem(pacient_gemnip_naim_er_dobav_textarea);
localStorage.removeItem(pacient_gemnip_treb_kolich);
///gemztker	
localStorage.removeItem(pacient_kn_ztk_er);
localStorage.removeItem(pacient_gemztker_naim_glav);
localStorage.removeItem(pacient_gemztker_grup_rez);
localStorage.removeItem(pacient_gemztker_naim_er_otmytye_8_razm_i_otm);
localStorage.removeItem(pacient_gemztker_naim_er_s_udal_lts);
localStorage.removeItem(pacient_gemztker_naim_er_leykoreduc);
localStorage.removeItem(pacient_gemztker_naim_er_aferez);
localStorage.removeItem(pacient_gemztker_naim_er_dobav_textarea);
localStorage.removeItem(pacient_gemztker_treb_kolich);
///gemztkszp	
localStorage.removeItem(pacient_kn_ztk_szp);
localStorage.removeItem(pacient_gemztkszp_naim_glav);
localStorage.removeItem(pacient_gemztkszp_grup_rez);
localStorage.removeItem(pacient_gemztkszp_naim_szp_patogenreduc);
localStorage.removeItem(pacient_gemztkszp_naim_szp_pulirov);
localStorage.removeItem(pacient_gemztkszp_naim_szp_patogeninact);
localStorage.removeItem(pacient_gemztkszp_naim_szp_kriosupernat);
localStorage.removeItem(pacient_gemztkszp_naim_szp_liofiliz);
localStorage.removeItem(pacient_gemztkszp_naim_er_dobav_textarea);
localStorage.removeItem(pacient_gemztkszp_treb_kolich);
///gemztktr	
localStorage.removeItem(pacient_kn_ztk_tr);
localStorage.removeItem(pacient_gemztktr_naim_glav);
localStorage.removeItem(pacient_gemztktr_grup_rez);
localStorage.removeItem(pacient_gemztktr_naim_tr_aferez_8_iz_ed_kr);
localStorage.removeItem(pacient_gemztktr_naim_tr_pulirov);
localStorage.removeItem(pacient_gemztktr_naim_tr_v_dob_rastv);
localStorage.removeItem(pacient_gemztktr_naim_tr_patogenreduc);
localStorage.removeItem(pacient_gemztktr_naim_tr_leykoreduc);
localStorage.removeItem(pacient_gemztktr_naim_tr_kriokonserv);
localStorage.removeItem(pacient_gemztktr_naim_er_dobav_textarea);
localStorage.removeItem(pacient_gemztktr_treb_kolich);
	
localStorage.removeItem(pacient_pokaz_ob_ock);
localStorage.removeItem(pacient_pokaz_ob_ock_inptxt);
localStorage.removeItem(pacient_pokaz_ob_prod_krovotech);
localStorage.removeItem(pacient_pokaz_er_anemia);
localStorage.removeItem(pacient_pokaz_er_vosp_kolich);
localStorage.removeItem(pacient_pokaz_er_hbht);
localStorage.removeItem(pacient_pokaz_er_hb_inptxt);
localStorage.removeItem(pacient_pokaz_er_ht_inptxt);
localStorage.removeItem(pacient_pokaz_er_drugie);
localStorage.removeItem(pacient_pokaz_er_drugie_textarea);
localStorage.removeItem(pacient_pokaz_szp_deficit_fakt);
localStorage.removeItem(pacient_pokaz_szp_peredoz);
localStorage.removeItem(pacient_pokaz_szp_plazmaferez);
localStorage.removeItem(pacient_pokaz_szp_drugie);
localStorage.removeItem(pacient_pokaz_szp_drugie_textarea);
localStorage.removeItem(pacient_pokaz_tr);
localStorage.removeItem(pacient_pokaz_tr_drugie);
localStorage.removeItem(pacient_pokaz_tr_drugie_textarea);
	
localStorage.removeItem(pacient_RBC);
localStorage.removeItem(pacient_FIBR);
localStorage.removeItem(pacient_HGB);
localStorage.removeItem(pacient_PTI);
localStorage.removeItem(pacient_HCT);
localStorage.removeItem(pacient_A4TV);
localStorage.removeItem(pacient_PLT);
localStorage.removeItem(pacient_MNO);
localStorage.removeItem(pacient_VSK);
	
localStorage.removeItem(pacient_ind_podb_otv_lico);
localStorage.removeItem(pacient_ind_podb_dat_issled);
localStorage.removeItem(pacient_proby_sovm);
	
localStorage.removeItem(pacient_date_analiz);
	
localStorage.removeItem(pacient_podp_vr);
localStorage.removeItem(pacient_pdp);
localStorage.removeItem(pacient_pdp_lab);
localStorage.removeItem(pacient_tel_vr);
localStorage.removeItem(pacient_podp_vr_lab);

localStorage.removeItem(pacient_objem_tansf);
localStorage.removeItem(pacient_pr_oslozh);
localStorage.removeItem(pacient_pr_oslozh_opisanie);

	
for (j = 1; j < 9; j++) { //Данные гемаконов 
		
	pacients_data_var2();
	
	localStorage.removeItem(pacient_gem_naim_glav);
	localStorage.removeItem(pacient_gem_naim_er_otmytye_8_razm_i_otm);
	localStorage.removeItem(pacient_gem_naim_er_s_udal_lts);
	localStorage.removeItem(pacient_gem_naim_er_leykoreduc);
	localStorage.removeItem(pacient_gem_naim_er_aferez);
	localStorage.removeItem(pacient_gem_naim_szp_patogenreduc);
	localStorage.removeItem(pacient_gem_naim_szp_pulirov);
	localStorage.removeItem(pacient_gem_naim_szp_patogeninact);
	localStorage.removeItem(pacient_gem_naim_szp_kriosupernat);
	localStorage.removeItem(pacient_gem_naim_szp_liofiliz);
	localStorage.removeItem(pacient_gem_naim_tr_aferez_8_iz_ed_kr);
	localStorage.removeItem(pacient_gem_naim_tr_pulirov);
	localStorage.removeItem(pacient_gem_naim_tr_v_dob_rastv);
	localStorage.removeItem(pacient_gem_naim_tr_patogenreduc);
	localStorage.removeItem(pacient_gem_naim_tr_leykoreduc);
	localStorage.removeItem(pacient_gem_naim_tr_kriokonserv);
	
	localStorage.removeItem(pacient_gem_naim_er_dobav_textarea);
	localStorage.removeItem(pacient_gem_naim_szp_dobav_textarea);
	localStorage.removeItem(pacient_gem_naim_tr_dobav_textarea);
	
	localStorage.removeItem(pacient_gem_grup_rez);
	localStorage.removeItem(pacient_gem_fen_C1);
	localStorage.removeItem(pacient_gem_fen_c0);
	localStorage.removeItem(pacient_gem_fen_D);
	localStorage.removeItem(pacient_gem_fen_Dw);
	localStorage.removeItem(pacient_gem_fen_Cw);
	localStorage.removeItem(pacient_gem_fen_E1);
	localStorage.removeItem(pacient_gem_fen_e0);
	localStorage.removeItem(pacient_gem_fen_K1);
	localStorage.removeItem(pacient_gem_fen_k0);
	
	localStorage.removeItem(pacient_gem_v);
	localStorage.removeItem(pacient_gem_ser);
	localStorage.removeItem(pacient_gem_kod_don);
	localStorage.removeItem(pacient_gem_dat_zagotov);
	localStorage.removeItem(pacient_gem_godn);
	localStorage.removeItem(pacient_gem_proizv);
}

for (j = 0; j < 4; j++) { //Данные из таблицы наблюдения
		
	pacients_data_var3();

	localStorage.removeItem(pacient_nabl_ad);
	localStorage.removeItem(pacient_nabl_4ss);
	localStorage.removeItem(pacient_nabl_t);
	localStorage.removeItem(pacient_nabl_diur);
	localStorage.removeItem(pacient_nabl_cvet);
	localStorage.removeItem(pacient_nabl_cvet_txt);
}	
	
str=localStorage.getItem('str_pacients');
arr_pacients = str.split(',');//разбивает строку на массив по знаку "," 
for (i = 0; i < arr_pacients.length; i++) {
	if (arr_pacients[i]===pacient){
		arr_pacients.splice(i, 1);//удаление текущего элемента массива и сдвиг элементов массива
	}
}
	
localStorage.setItem('str_pacients', arr_pacients);
pacients_data_FIO_window();
var_null();
}

//function ch777777(){
//	"use strict";
//document.getElementById('ch777').innerHTML =
//localStorage.getItem('Пупкин_date')+'<br>'+
//localStorage.getItem('Пупкин_podp_vr');
//}