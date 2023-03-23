var id, id_check, id_correct, i, j, x;
var str, arr=[], arr2=[];
var yr, mnth, day, yr2, mnth2, day2;	
var d30, d, date, date_trsf, month, today;

function enter_date(c){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date').value= today;
localStorage.setItem('date',today);
d=null; date=null; month=null; today=null;
}

function enter_date_analiz(){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_analiz').value= today;
localStorage.setItem('date_analiz',today);
d=null; date=null; month=null; today=null;
}

function enter_date_vskr_fl(){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_vskr_fl').value= today;
localStorage.setItem('date_vskr_fl',today);
d=null; date=null; month=null; today=null;
}

function enter_date_ztk(){
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_ztk').value= today;
localStorage.setItem('date_ztk',today);
d=null; date=null; month=null; today=null;
}

function enter_date_zspk(){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_zspk').value= today;
localStorage.setItem('date_zspk',today);
d=null; date=null; month=null; today=null;
}

function enter_date_nl(){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_nl').value= today;
localStorage.setItem('date_nl',today);
d=null; date=null; month=null; today=null;
}

function enter_date_nip(){
"use strict";
d = new Date();
date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
document.getElementById('date_nip').value= today;
localStorage.setItem('date_nip',today);
d=null; date=null; month=null; today=null;
}

function isprav_datu(){
	"use strict";
	document.getElementById(id).style.borderColor='#D50026';
	document.getElementById(id).style.color='#D50026';
	document.getElementById(id+'_correct').style.color='#D50026';
	document.getElementById(id+'_correct').innerHTML='Исправьте дату!';
	localStorage.setItem(id+'_check', '');
	start_attention();
}

function norm_date(){
	"use strict";
	document.getElementById(id).style.borderColor='';
	document.getElementById(id).style.color='';
	document.getElementById(id+'_correct').style.color='#004F4E';
	document.getElementById(id+'_correct').innerHTML='';
	localStorage.setItem(id+'_check', 'ok');
	start_attention();
}

function data_rozhd(g){
	"use strict";
	str=g.value;
	id=g.id;
	id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[5]==='.' && arr[6]!==undefined && arr[7]!==undefined && arr[8]===undefined){
	isprav_datu(); localStorage.setItem(id, str);
	document.getElementById(id_correct).innerHTML='Исправьте год рождения! Год должен быть введён полностью (напр. 1984, 2002, 2017).';
	str = arr.join('');//формируем строку из массива
	g.value = str;
	localStorage.setItem(id, str); data_rozhd();
	}
	else{
	if (arr[0]===undefined || arr[1]===undefined || arr[2]===undefined || arr[3]===undefined || arr[4]===undefined || arr[5]===undefined || arr[6]===undefined || arr[7]===undefined || arr[8]===undefined || arr[9]===undefined){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[0]!=='0' && arr[0]!=='1' && arr[0]!=='2' && arr[0]!=='3'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[2]!=='.' && arr[5]!=='.'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[3]!=='0' && arr[3]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	// Проверка последних трёх месяцев
	else if (arr[3]==='1' && arr[4]!=='0' && arr[4]!=='1' && arr[4]!=='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	// Проверка соответствия даты к месяцу
	else if (arr[0]==='3' && arr[1]!=='0' && arr[1]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//Проверить те месяцы, где нет 31й даты
	else if (arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='2'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='4'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='6'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='9'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='1'&& arr[4]==='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить февраль
	else if (arr[0]==='3' && arr[1]==='0' && arr[3]==='0' && arr[4]==='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить високосные года для 29го числа
	else if (arr[0]==='2'&&arr[1]==='9'&&arr[3]==='0'&&arr[4]==='2'){
		if (arr[8]==='0'&&arr[9]==='4'|| arr[8]==='0'&&arr[9]==='8'|| arr[8]==='1'&&arr[9]==='2'||
			arr[8]==='1'&&arr[9]==='6'|| arr[8]==='2'&&arr[9]==='0'|| arr[8]==='2'&&arr[9]==='4'|| arr[8]==='2'&&arr[9]==='8'|| arr[8]==='3'&&arr[9]==='2'|| arr[8]==='3'&&arr[9]==='6'|| 
			arr[8]==='4'&&arr[9]==='0'|| arr[8]==='4'&&arr[9]==='8'|| arr[8]==='5'&&arr[9]==='2'|| 
			arr[8]==='5'&&arr[9]==='6'|| arr[8]==='6'&&arr[9]==='0'|| arr[8]==='6'&&arr[9]==='4'|| 
			arr[8]==='6'&&arr[9]==='8'|| arr[8]==='7'&&arr[9]==='2'|| arr[8]==='7'&&arr[9]==='6'|| 
			arr[8]==='8'&&arr[9]==='0'|| arr[8]==='8'&&arr[9]==='4'|| arr[8]==='8'&&arr[9]==='8'|| 
			arr[8]==='9'&&arr[9]==='2'|| arr[8]==='9'&&arr[9]==='6'|| 
			arr[6]==='2'&&arr[7]==='0'&&arr[8]==='0'&&arr[9]==='0'|| 
			arr[6]==='2'&&arr[7]==='4'&&arr[8]==='0'&&arr[9]==='0'){
			arr[0]==='2';
		}
		else {
			isprav_datu(); localStorage.setItem(id, '');
		}
	}	
	else {
		norm_date();
	}
	// Если год не 19** и не 20**, то нужно исправить
	if (arr[6]!=='2'&& arr[6]!=='1'){
		isprav_datu(); 
	}
	else if (arr[7]!=='0'&& arr[7]!=='9'){
		isprav_datu(); 
	}
	else if (arr[6]==='2'&& arr[7]==='9'){
		isprav_datu(); 
	}
	else if (arr[6]==='1'&& arr[7]==='0'){
		isprav_datu(); 
	}
	str = arr.join('');//формируем строку из массива}
	g.value = str;
	
	if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
				}
				else {
					norm_date();
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function date_transf(g){
	"use strict";
	str=g.value;
	id=g.id;
	id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, ''); date_transf();
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20);  norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str; localStorage.setItem(id_check, '');
		localStorage.setItem(id, str); date_transf();
	}
	else{
	if (arr[0]===undefined || arr[1]===undefined || arr[2]===undefined || arr[3]===undefined || arr[4]===undefined || arr[5]===undefined || arr[6]===undefined || arr[7]===undefined || arr[8]===undefined || arr[9]===undefined){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[0]!=='0' && arr[0]!=='1' && arr[0]!=='2' && arr[0]!=='3'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[2]!=='.' && arr[5]!=='.'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[3]!=='0' && arr[3]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	// Проверка последних трёх месяцев
	else if (arr[3]==='1' && arr[4]!=='0' && arr[4]!=='1' && arr[4]!=='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	// Проверка соответствия даты к месяцу
	else if (arr[0]==='3' && arr[1]!=='0' && arr[1]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//Проверить те месяцы, где нет 31й даты
	else if (arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='2'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='4'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='6'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='9'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='1'&& arr[4]==='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить февраль
	else if (arr[0]==='3' && arr[1]==='0' && arr[3]==='0' && arr[4]==='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить високосные года для 29го числа
	else if (arr[0]==='2'&&arr[1]==='9'&&arr[3]==='0'&&arr[4]==='2'){
		if (arr[8]==='0'&&arr[9]==='4'|| arr[8]==='0'&&arr[9]==='8'|| arr[8]==='1'&&arr[9]==='2'||
			arr[8]==='1'&&arr[9]==='6'|| arr[8]==='2'&&arr[9]==='0'|| arr[8]==='2'&&arr[9]==='4'|| arr[8]==='2'&&arr[9]==='8'|| arr[8]==='3'&&arr[9]==='2'|| arr[8]==='3'&&arr[9]==='6'|| 
			arr[8]==='4'&&arr[9]==='0'|| arr[8]==='4'&&arr[9]==='8'|| arr[8]==='5'&&arr[9]==='2'|| 
			arr[8]==='5'&&arr[9]==='6'|| arr[8]==='6'&&arr[9]==='0'|| arr[8]==='6'&&arr[9]==='4'|| 
			arr[8]==='6'&&arr[9]==='8'|| arr[8]==='7'&&arr[9]==='2'|| arr[8]==='7'&&arr[9]==='6'|| 
			arr[8]==='8'&&arr[9]==='0'|| arr[8]==='8'&&arr[9]==='4'|| arr[8]==='8'&&arr[9]==='8'|| 
			arr[8]==='9'&&arr[9]==='2'|| arr[8]==='9'&&arr[9]==='6'|| 
			arr[6]==='2'&&arr[7]==='0'&&arr[8]==='0'&&arr[9]==='0'|| 
			arr[6]==='2'&&arr[7]==='4'&&arr[8]==='0'&&arr[9]==='0'){
			arr[0]==='2';
		}
		else {
			isprav_datu(); localStorage.setItem(id, '');
		}
	}	
	else {
		norm_date();
	}
	// Если год не 2020-2100, то нужно исправить
	if (arr[6]!=='2'){
		isprav_datu();
	}
	else if (arr[6]==='2'&& arr[7]==='0'&& arr[8]==='0'){
		isprav_datu();
	}
	else if (arr[6]==='2'&& arr[7]==='0'&& arr[8]==='1'){
		isprav_datu();
	}
	str = arr.join('');//формируем строку из массива}
	g.value = str;
	
	if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
				}
				else {
					norm_date();
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

//Коррекция даты во время ввода
function correct_date(g){
	"use strict";
	id=g.id;
	norm_date();
	str=g.value;
	x=1;
	if (str==='' || str===null || str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); localStorage.setItem(id, '');
	}
	else {
		arr = str.split('');//разбивает строку на массив из символов
		for (i = 0; i < arr.length; i++){
			if (arr[i]!=='0'&& arr[i]!=='1'&& arr[i]!=='2'&& arr[i]!=='3'&& arr[i]!=='4'&& arr[i]!=='5'&& arr[i]!=='6'&& arr[i]!=='7'&& arr[i]!=='8'&& arr[i]!=='9'&& arr[i]!=='0'&& arr[i]!=='.'&& arr[i]!==','&& arr[i]!=='/'){
				g.value=''; 
				str=null; i=null; j=null; x=null; arr=null;
		}
	}
		while (x!==0){	
		arr = str.split('');//разбивает строку на массив из символов
		for (j = 0; j < 10; j++) {//удаляет неправильные символы в начале строки
			if (arr[0]==='.'||arr[0]===','||arr[0]==='/'){
				arr.splice(0, 1);//удаляет символ и сдвигает массив
				x=1;
			}
			else {
				x=0;
			}
		}
		for (j = 0; j < 6; j++) {
			for (i = 0; i < arr.length; i++) {//удаляет повторяющиеся символы
				if (arr[i-1]==='.' && arr[i]==='.'||
				arr[i-1]===',' && arr[i]===',' || 
				arr[i-1]==='/' && arr[i]==='/' || 
				arr[i-1]==='/' && arr[i]===',' || 
				arr[i-1]==='/' && arr[i]==='.' || 
				arr[i-1]==='.' && arr[i]===',' || 
				arr[i-1]==='.' && arr[i]==='/' ||
				arr[i-1]===',' && arr[i]==='.' || 
				arr[i-1]===',' && arr[i]==='/'){
				arr.splice(i, 1);//удаляет символ и сдвигает массив
				x=1;
				}
				else {
				x=0;
				}
			}
		}
		for (i = 0; i < arr.length; i++) {//Меняем оставшиеся символы на точку
			if (arr[i]===','||arr[i]==='/'){
				arr[i]='.';
			}
		}
		for (i = 7; i < 11; i++) {//Последние 4 символа не должны быть точкой
			if (arr[i]==='.'){
				arr.splice(i, 1);//удаляет символ и сдвигает массив
			}
		}
		str = arr.join('');//формируем строку из массива
	}		
	g.value = str;
	str=null; i=null; j=null; arr=null;
	}
}

function correct_date3(){
	"use strict";
	if (arr[0]===undefined || arr[1]===undefined || arr[2]===undefined || arr[3]===undefined || arr[4]===undefined || arr[5]===undefined || arr[6]===undefined || arr[7]===undefined || arr[8]===undefined || arr[9]===undefined){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[0]!=='0' && arr[0]!=='1' && arr[0]!=='2' && arr[0]!=='3'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[2]!=='.' && arr[5]!=='.'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[3]!=='0' && arr[3]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	// Проверка последних трёх месяцев
	else if (arr[3]==='1' && arr[4]!=='0' && arr[4]!=='1' && arr[4]!=='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	// Проверка соответствия даты к месяцу
	else if (arr[0]==='3' && arr[1]!=='0' && arr[1]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//Проверить те месяцы, где нет 31й даты
	else if (arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='2'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='4'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='6'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='9'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='1'&& arr[4]==='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить февраль
	else if (arr[0]==='3' && arr[1]==='0' && arr[3]==='0' && arr[4]==='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить високосные года для 29го числа
	else if (arr[0]==='2'&&arr[1]==='9'&&arr[3]==='0'&&arr[4]==='2'){
		if (arr[8]==='0'&&arr[9]==='4'|| arr[8]==='0'&&arr[9]==='8'|| arr[8]==='1'&&arr[9]==='2'||
			arr[8]==='1'&&arr[9]==='6'|| arr[8]==='2'&&arr[9]==='0'|| arr[8]==='2'&&arr[9]==='4'|| arr[8]==='2'&&arr[9]==='8'|| arr[8]==='3'&&arr[9]==='2'|| arr[8]==='3'&&arr[9]==='6'|| 
			arr[8]==='4'&&arr[9]==='0'|| arr[8]==='4'&&arr[9]==='8'|| arr[8]==='5'&&arr[9]==='2'|| 
			arr[8]==='5'&&arr[9]==='6'|| arr[8]==='6'&&arr[9]==='0'|| arr[8]==='6'&&arr[9]==='4'|| 
			arr[8]==='6'&&arr[9]==='8'|| arr[8]==='7'&&arr[9]==='2'|| arr[8]==='7'&&arr[9]==='6'|| 
			arr[8]==='8'&&arr[9]==='0'|| arr[8]==='8'&&arr[9]==='4'|| arr[8]==='8'&&arr[9]==='8'|| 
			arr[8]==='9'&&arr[9]==='2'|| arr[8]==='9'&&arr[9]==='6'|| 
			arr[6]==='2'&&arr[7]==='0'&&arr[8]==='0'&&arr[9]==='0'|| 
			arr[6]==='2'&&arr[7]==='4'&&arr[8]==='0'&&arr[9]==='0'){
			arr[0]==='2';
		}
		else {
			isprav_datu(); localStorage.setItem(id, '');
		}
	}	
	else {
		norm_date();
	}
	// Если год не 19** и не 20**, то нужно исправить
	if (arr[6]!=='2'&& arr[6]!=='1'){
		isprav_datu();
	}
	else if (arr[7]!=='0'&& arr[7]!=='9'){
		isprav_datu();
	}
	else if (arr[6]==='2'&& arr[7]==='9'){
		isprav_datu();
	}
	else if (arr[6]==='1'&& arr[7]==='0'){
		isprav_datu();
	}
}

//Коррекция даты после ввода
function correct_date2(g){
	"use strict";
	str=g.value;
	id=g.id;
	id_check=id+'_check';
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); localStorage.setItem(id, '');
	}
	else {			
		arr = str.split('');//разбивает строку на массив из символов	
		if (arr[1]==='.'&& arr[0]!=='0'){//вставляем недостающий ноль
			arr.unshift(0);//вставляет символ в начало массива
		}
		if (arr[2]==='.' && arr[4]==='.' && arr[3]!=='0'){//вставляем недостающий ноль
			arr.splice(3, 0, 0);
		}
		if (arr[10]!==undefined){
			//удаляем лишние случайные символы в конце строки
			arr.splice(10, 100)
		}
		str = arr.join('');//формируем строку из массива
		arr = str.split('');//разбивает строку на массив из символов
		correct_date3();		
		str = arr.join('');//формируем строку из массива
	}		
	document.getElementById(id).value = str;
	arr=null;
}

function correct_date4(g){
	//Коррекция даты. Проверить, чтобы дата не была позднее даты трансфузии.
	"use strict";
	str=g.value;
	id=g.id;	
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date4();
	}
	else{
	correct_date3();	
	if (localStorage.getItem('date_check')==='ok'){//если дата трансфузии введена верно
		if (localStorage.getItem(id_check)==='ok'){//если текущая дата введена верно
			date_trsf = localStorage.getItem('date');
			arr2 = date_trsf.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr > yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
			}
			else {
				if (yr === yr2 && mnth > mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
				}
				else {
					if (yr === yr2 && mnth === mnth2 && day > day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	else {//если дата трансфузии введена неверно или не введена, сравнение идёт с текущей датой
		if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
				}
				else {
					norm_date(); x=2;
				}
			}
		}
	}
	}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date5(g){//коррекция даты, проверка срока годности по дате трансфузии
	"use strict";
	str=g.value;
	id=g.id;	
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		g.value = str;
		localStorage.setItem(id, str); correct_date5();
	}
	else{
	correct_date3();	
	if (localStorage.getItem('date_check')==='ok'){
		if (localStorage.getItem(id_check)==='ok'){	
			date_trsf = localStorage.getItem('date');
			arr2 = date_trsf.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	else {
		if (localStorage.getItem(id_check)==='ok'){
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date6(){
	//Коррекция даты. Проверить, чтобы эта дата не была позднее текущей даты (системная дата).
	"use strict";	
		if (localStorage.getItem(id_check)==='ok'){
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr = str.split('');
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr > yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
			}
			else {
				if (yr === yr2 && mnth > mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
				}
				else {
					if (yr === yr2 && mnth === mnth2 && day > day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
					}
					else {
						norm_date(); x=2;
					}
				}
			}
		}
}

function correct_date7(g){
	//коррекция даты, проверка срока годности по текущей дате
	"use strict";
	str=g.value;
	id=g.id;	
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date7();
	}
	else{
	correct_date3();
		if (localStorage.getItem(id_check)==='ok'){
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; d=null; date=null; month=null; today=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date8(g){
	//коррекция даты, проверка срока годности по текущей дате (для цоликлонов)
	"use strict";
	str=g.value;
	id=g.id;	
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date8();
	}
	else{
		arr = str.split('');
	correct_date3();
	if (localStorage.getItem(id_check)==='ok'){
	yr= arr[6] + arr[7] + arr[8] + arr[9];
	mnth= arr[3] + arr[4];
	day= arr[0] + arr[1];
	yr=Number.parseInt(yr);//преобразуем строку в число
	mnth=Number.parseInt(mnth);
	day=Number.parseInt(day);
	if(mnth===4|| mnth===6|| mnth===9|| mnth===4|| mnth===11){
		mnth=mnth+1;
		if (mnth<10){mnth='0'+mnth;}
		if (day<10){day='0'+day;}
		d30= day + '.' + mnth + '.' + yr;
	}
	else if (mnth===1|| mnth===3|| mnth===5|| mnth===7|| mnth===8|| mnth===10){
		if (day===1){	
			if (mnth<10){mnth='0'+mnth;}
			if (day<10){day='0'+day;}
			d30=  '31.' + mnth + '.' + yr;
		}
		else {
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day-1;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}
	}
	else if (mnth===12){
		if (day===1){
			d30= '31.12.' + yr;
		}
		else {
			day=day-1;
			if (day<10){day='0'+day;}
			yr=yr+1;
			d30= day + '.01.' + yr;
		}
	}
	else if (mnth===2){
		if (yr===2020|| yr===2024|| yr===2028|| yr===2032|| yr===2036|| yr===2040|| yr===2044|| yr===2048|| yr===2052|| yr===2056|| yr===2060|| yr===2064|| yr===2068|| yr===2072|| yr===2080|| yr===2084|| yr===2088|| yr===2092|| yr===2096){
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day+1;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}
		else {
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day+2;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}	 
	}
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr = d30.split('');
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
		if (yr < yr2){
					isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
		}
		else {
			if (yr === yr2 && mnth < mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day < day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
				}
				else {
					correct_date6();
					if (x===2){
						norm_date();
						document.getElementById(id_correct).innerHTML= 'Срок годности после вскрытия флаконов - до '+d30+' включительно.';
					}
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; d=null; date=null; month=null; today=null; x=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date7_start(){	
	//коррекция даты, проверка срока годности по текущей дате
	"use strict";	
    id_correct=id+'_correct';
	id_check=id+'_check';
	if (localStorage.getItem(id_check)!=='ok'){
		localStorage.setItem(id, ''); localStorage.setItem(id_check, '');
	}
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date7_start();
	}
	else{
		arr = str.split('');
	correct_date3();
		if (localStorage.getItem(id_check)==='ok'){
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; d=null; date=null; month=null; today=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date8_start(){
	//коррекция даты, проверка срока годности по текущей дате (для цоликлонов)
	"use strict";	
    id_correct=id+'_correct';
	id_check=id+'_check';
	if (localStorage.getItem(id_check)!=='ok'){
		localStorage.setItem(id, ''); localStorage.setItem(id_check, '');
	}
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date8_start();
	}
	else{
	correct_date3();
	if (localStorage.getItem(id_check)==='ok'){
	yr= arr[6] + arr[7] + arr[8] + arr[9];
	mnth= arr[3] + arr[4];
	day= arr[0] + arr[1];
	yr=Number.parseInt(yr);//преобразуем строку в число
	mnth=Number.parseInt(mnth);
	day=Number.parseInt(day);
	if(mnth===4|| mnth===6|| mnth===9|| mnth===4|| mnth===11){
		mnth=mnth+1;
		if (mnth<10){mnth='0'+mnth;}
		if (day<10){day='0'+day;}
		d30= day + '.' + mnth + '.' + yr;
	}
	else if (mnth===1|| mnth===3|| mnth===5|| mnth===7|| mnth===8|| mnth===10){
		if (day===1){	
			if (mnth<10){mnth='0'+mnth;}
			if (day<10){day='0'+day;}
			d30=  '31.' + mnth + '.' + yr;
		}
		else {
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day-1;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}
	}
	else if (mnth===12){
		if (day===1){
			d30= '31.12.' + yr;
		}
		else {
			day=day-1;
			if (day<10){day='0'+day;}
			yr=yr+1;
			d30= day + '.01.' + yr;
		}
	}
	else if (mnth===2){
		if (yr===2020|| yr===2024|| yr===2028|| yr===2032|| yr===2036|| yr===2040|| yr===2044|| yr===2048|| yr===2052|| yr===2056|| yr===2060|| yr===2064|| yr===2068|| yr===2072|| yr===2080|| yr===2084|| yr===2088|| yr===2092|| yr===2096){
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day+1;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}
		else {
			mnth=mnth+1;
			if (mnth<10){mnth='0'+mnth;}
			day=day+2;
			if (day<10){day='0'+day;}
			d30= day + '.' + mnth + '.' + yr;
		}	 
	}
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr = d30.split('');
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
		if (yr < yr2){
		isprav_datu();
		document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
		}
		else {
			if (yr === yr2 && mnth < mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day < day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности после вскрытия флаконов истёк '+d30+'!';
				}
				else {
					correct_date6();
					if (x===2){
						norm_date();
						document.getElementById(id_correct).innerHTML= 'Срок годности после вскрытия флаконов - до '+d30+' включительно.';
					}
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; d=null; date=null; month=null; today=null; x=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date4_start(){
	//Коррекция даты. Проверить, чтобы дата не была позднее даты трансфузии.
	"use strict";	
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str);
	}
	else{
	correct_date3();	
	if (localStorage.getItem('date_check')==='ok'){//если дата трансфузии введена верно
		if (localStorage.getItem(id_check)==='ok'){//если текущая дата введена верно
			date_trsf = localStorage.getItem('date');
			arr2 = date_trsf.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr > yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
			}
			else {
				if (yr === yr2 && mnth > mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
				}
				else {
					if (yr === yr2 && mnth === mnth2 && day > day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее даты трансфузии!';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	else {//если дата трансфузии введена неверно или не введена, сравнение идёт с текущей датой
		if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!'; x=1;
				}
				else {
					norm_date(); x=2;
				}
			}
		}
	}
	}
	}
	str=null; arr=null; id=null; id_check=null; id_correct=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function correct_date5_start(){//коррекция даты, проверка срока годности по дате трансфузии
	"use strict";
    id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); correct_date5_start();
	}
	else{
	correct_date3();	
	if (localStorage.getItem('date_check')==='ok'){
		if (localStorage.getItem(id_check)==='ok'){	
			date_trsf = localStorage.getItem('date');
			arr2 = date_trsf.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по дате трансфузии)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	else {
		if (localStorage.getItem(id_check)==='ok'){
			d = new Date();
			date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
			month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
			today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
			arr2 = today.split('');
			yr= arr[6] + arr[7] + arr[8] + arr[9];
			yr=Number.parseInt(yr);
			mnth= arr[3] + arr[4];
			mnth=Number.parseInt(mnth);
			day= arr[0] + arr[1];
			day=Number.parseInt(day);
			yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
			yr2=Number.parseInt(yr2);
			mnth2= arr2[3] + arr2[4];
			mnth2=Number.parseInt(mnth2);
			day2= arr2[0] + arr2[1];
			day2=Number.parseInt(day2);
			if (yr < yr2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
			}
			else {
				if (yr === yr2 && mnth < mnth2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
				}		
				else {
					if (yr === yr2 && mnth === mnth2 && day <= day2){
						isprav_datu();
						document.getElementById(id_correct).innerHTML='Срок годности истёк! (контроль по текущей дате)';
					}
					else {
						norm_date();
					}
				}
			}
		}
	}
	}
	str=null; arr=null; arr2=null; id=null; id_check=null; id_correct=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

//Коррекция даты после ввода
function correct_date2_start(){
	"use strict";
	id_check=id+'_check';
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); localStorage.setItem(id, '');
	}
	else {			
		arr = str.split('');//разбивает строку на массив из символов	
		if (arr[1]==='.'&& arr[0]!=='0'){//вставляем недостающий ноль
			arr.unshift(0);//вставляет символ в начало массива
		}
		if (arr[2]==='.' && arr[4]==='.' && arr[3]!=='0'){//вставляем недостающий ноль
			arr.splice(3, 0, 0);
		}
		if (arr[10]!==undefined){
			//удаляем лишние случайные символы в конце строки
			arr.splice(10, 100)
		}
		str = arr.join('');//формируем строку из массива
		arr = str.split('');//разбивает строку на массив из символов
		correct_date3();		
		str = arr.join('');//формируем строку из массива
	}		
	document.getElementById(id).value = str;
	arr=null;
}

function data_rozhd_start(){
	"use strict";
	id_correct=id+'_correct';
	id_check=id+'_check';
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, ''); 
		localStorage.setItem(id, ''); data_rozhd_start();
	}
	else if (arr[5]==='.' && arr[6]!==undefined && arr[7]!==undefined && arr[8]===undefined){
	isprav_datu(); localStorage.setItem(id, str);
	document.getElementById(id_correct).innerHTML='Исправьте год рождения! Год должен быть введён полностью (напр. 1984, 2002, 2017).';
	str = arr.join('');//формируем строку из массива
	document.getElementById(id).value = str;
	localStorage.setItem(id, str);
	}
	else{
	if (arr[0]===undefined || arr[1]===undefined || arr[2]===undefined || arr[3]===undefined || arr[4]===undefined || arr[5]===undefined || arr[6]===undefined || arr[7]===undefined || arr[8]===undefined || arr[9]===undefined){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[0]!=='0' && arr[0]!=='1' && arr[0]!=='2' && arr[0]!=='3'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[2]!=='.' && arr[5]!=='.'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[3]!=='0' && arr[3]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	// Проверка последних трёх месяцев
	else if (arr[3]==='1' && arr[4]!=='0' && arr[4]!=='1' && arr[4]!=='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	// Проверка соответствия даты к месяцу
	else if (arr[0]==='3' && arr[1]!=='0' && arr[1]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//Проверить те месяцы, где нет 31й даты
	else if (arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='2'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='4'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='6'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='9'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='1'&& arr[4]==='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить февраль
	else if (arr[0]==='3' && arr[1]==='0' && arr[3]==='0' && arr[4]==='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить високосные года для 29го числа
	else if (arr[0]==='2'&&arr[1]==='9'&&arr[3]==='0'&&arr[4]==='2'){
		if (arr[8]==='0'&&arr[9]==='4'|| arr[8]==='0'&&arr[9]==='8'|| arr[8]==='1'&&arr[9]==='2'||
			arr[8]==='1'&&arr[9]==='6'|| arr[8]==='2'&&arr[9]==='0'|| arr[8]==='2'&&arr[9]==='4'|| arr[8]==='2'&&arr[9]==='8'|| arr[8]==='3'&&arr[9]==='2'|| arr[8]==='3'&&arr[9]==='6'|| 
			arr[8]==='4'&&arr[9]==='0'|| arr[8]==='4'&&arr[9]==='8'|| arr[8]==='5'&&arr[9]==='2'|| 
			arr[8]==='5'&&arr[9]==='6'|| arr[8]==='6'&&arr[9]==='0'|| arr[8]==='6'&&arr[9]==='4'|| 
			arr[8]==='6'&&arr[9]==='8'|| arr[8]==='7'&&arr[9]==='2'|| arr[8]==='7'&&arr[9]==='6'|| 
			arr[8]==='8'&&arr[9]==='0'|| arr[8]==='8'&&arr[9]==='4'|| arr[8]==='8'&&arr[9]==='8'|| 
			arr[8]==='9'&&arr[9]==='2'|| arr[8]==='9'&&arr[9]==='6'|| 
			arr[6]==='2'&&arr[7]==='0'&&arr[8]==='0'&&arr[9]==='0'|| 
			arr[6]==='2'&&arr[7]==='4'&&arr[8]==='0'&&arr[9]==='0'){
			arr[0]==='2';
		}
		else {
			isprav_datu(); localStorage.setItem(id, '');
		}
	}	
	else {
		norm_date();
	}
	// Если год не 19** и не 20**, то нужно исправить
	if (arr[6]!=='2'&& arr[6]!=='1'){
		isprav_datu(); 
	}
	else if (arr[7]!=='0'&& arr[7]!=='9'){
		isprav_datu(); 
	}
	else if (arr[6]==='2'&& arr[7]==='9'){
		isprav_datu(); 
	}
	else if (arr[6]==='1'&& arr[7]==='0'){
		isprav_datu(); 
	}
	str = arr.join('');//формируем строку из массива}
	document.getElementById(id).value = str;
	
	if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
				}
				else {
					norm_date();
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}

function date_transf_start(){
	"use strict";
	id_correct=id+'_correct';
	id_check=id+'_check';
	if (localStorage.getItem(id_check)!=='ok'){
		localStorage.setItem(id, ''); localStorage.setItem(id_check, '');
	}
	arr = str.split('');//разбивает строку на массив из символов
	if (str===''|| str===null|| str===undefined|| str===' '|| str==='null'|| str==='undefined'){
		localStorage.setItem(id_check, '');
		localStorage.setItem(id, '');
	}
	else if (arr[7]!==undefined && arr[8]===undefined && arr[9]===undefined){
			//переправляем на **20 год
		arr.splice(6, 0, 20); norm_date();
		str = arr.join('');//формируем строку из массива
		document.getElementById(id).value = str;
		localStorage.setItem(id, str); 
		localStorage.setItem(id_check, '');
	}
	else{
	if (arr[0]===undefined || arr[1]===undefined || arr[2]===undefined || arr[3]===undefined || arr[4]===undefined || arr[5]===undefined || arr[6]===undefined || arr[7]===undefined || arr[8]===undefined || arr[9]===undefined){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[0]!=='0' && arr[0]!=='1' && arr[0]!=='2' && arr[0]!=='3'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[2]!=='.' && arr[5]!=='.'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	else if (arr[3]!=='0' && arr[3]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}	
	// Проверка последних трёх месяцев
	else if (arr[3]==='1' && arr[4]!=='0' && arr[4]!=='1' && arr[4]!=='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	// Проверка соответствия даты к месяцу
	else if (arr[0]==='3' && arr[1]!=='0' && arr[1]!=='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//Проверить те месяцы, где нет 31й даты
	else if (arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='2'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='4'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='6'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='0'&& arr[4]==='9'|| arr[0]==='3'&& arr[1]==='1'&& arr[3]==='1'&& arr[4]==='1'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить февраль
	else if (arr[0]==='3' && arr[1]==='0' && arr[3]==='0' && arr[4]==='2'){
		isprav_datu(); localStorage.setItem(id, '');
	}
	//проверить високосные года для 29го числа
	else if (arr[0]==='2'&&arr[1]==='9'&&arr[3]==='0'&&arr[4]==='2'){
		if (arr[8]==='0'&&arr[9]==='4'|| arr[8]==='0'&&arr[9]==='8'|| arr[8]==='1'&&arr[9]==='2'||
			arr[8]==='1'&&arr[9]==='6'|| arr[8]==='2'&&arr[9]==='0'|| arr[8]==='2'&&arr[9]==='4'|| arr[8]==='2'&&arr[9]==='8'|| arr[8]==='3'&&arr[9]==='2'|| arr[8]==='3'&&arr[9]==='6'|| 
			arr[8]==='4'&&arr[9]==='0'|| arr[8]==='4'&&arr[9]==='8'|| arr[8]==='5'&&arr[9]==='2'|| 
			arr[8]==='5'&&arr[9]==='6'|| arr[8]==='6'&&arr[9]==='0'|| arr[8]==='6'&&arr[9]==='4'|| 
			arr[8]==='6'&&arr[9]==='8'|| arr[8]==='7'&&arr[9]==='2'|| arr[8]==='7'&&arr[9]==='6'|| 
			arr[8]==='8'&&arr[9]==='0'|| arr[8]==='8'&&arr[9]==='4'|| arr[8]==='8'&&arr[9]==='8'|| 
			arr[8]==='9'&&arr[9]==='2'|| arr[8]==='9'&&arr[9]==='6'|| 
			arr[6]==='2'&&arr[7]==='0'&&arr[8]==='0'&&arr[9]==='0'|| 
			arr[6]==='2'&&arr[7]==='4'&&arr[8]==='0'&&arr[9]==='0'){
			arr[0]==='2';
		}
		else {
			isprav_datu(); localStorage.setItem(id, '');
		}
	}	
	else {
		norm_date();
	}
	// Если год не 2020-2100, то нужно исправить
	if (arr[6]!=='2'){
		isprav_datu();
	}
	else if (arr[6]==='2'&& arr[7]==='0'&& arr[8]==='0'){
		isprav_datu();
	}
	else if (arr[6]==='2'&& arr[7]==='0'&& arr[8]==='1'){
		isprav_datu();
	}
	str = arr.join('');//формируем строку из массива}
	document.getElementById(id).value = str;
	
	if (localStorage.getItem(id_check)==='ok'){
		d = new Date();
		date = new Array("","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
		month=new Array("01","02","03","04","05","06","07","08","09","10","11","12");
		today = date[d.getDate()]+ "." + month[d.getMonth()]+ "." + d.getFullYear();
		arr = str.split('');
		arr2 = today.split('');
		yr= arr[6] + arr[7] + arr[8] + arr[9];
		yr=Number.parseInt(yr);
		mnth= arr[3] + arr[4];
		mnth=Number.parseInt(mnth);
		day= arr[0] + arr[1];
		day=Number.parseInt(day);
		yr2= arr2[6] + arr2[7] + arr2[8] + arr2[9];
		yr2=Number.parseInt(yr2);
		mnth2= arr2[3] + arr2[4];
		mnth2=Number.parseInt(mnth2);
		day2= arr2[0] + arr2[1];
		day2=Number.parseInt(day2);
		if (yr > yr2){
			isprav_datu();
			document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
		}
		else {
			if (yr === yr2 && mnth > mnth2){
				isprav_datu();
				document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
			}
			else {
				if (yr === yr2 && mnth === mnth2 && day > day2){
					isprav_datu();
					document.getElementById(id_correct).innerHTML='Эта дата не может быть позднее текущей даты!';
				}
				else {
					norm_date();
				}
			}
		}
	}
	}
	str=null; arr=null; id=null; id_check=null; day=null; day2=null; mnth=null; mnth2=null; yr=null; yr2=null;
}