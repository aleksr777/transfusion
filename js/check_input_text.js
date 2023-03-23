//arr.push(...items) – добавляет элементы в конец,
//arr.pop() – извлекает элемент из конца,
//arr.shift() – извлекает элемент из начала,
//arr.unshift(...items) – добавляет элементы в начало.
//arr.splice(p, n) - удаляет элемент(ы) и сдвигает массив (p- позиция, n- количество элементов для удаления)
//arr.splice(p, n, e) - удаляет элемент(ы), вставляет элемент(ы)вместо удалённых и сдвигает массив (p- позиция, e- вставляемый элемент(ы), n- количество элементов для удаления)
//arr.slice(p1, p2) удаляет элемент(ы) и сдвигает массив (p1- начальная позиция,p2- конечная позиция для удаления) 
//arr.reverse меняет порядок элементов в arr на обратный.

//Только цифры, точка, запятая и '/', замена '/' и запятой на точку (для введения даты)
function cfr_tchk_zpt_splsh(){
	"use strict";
if((event.keyCode<47)&&(event.keyCode!==46)&&(event.keyCode!==44)||(event.keyCode>57))
{event.returnValue=false;}
}


//Только цыфры
function cyfry(){"use strict";  
if((event.keyCode<48)||(event.keyCode>57))
{event.returnValue=false;}
}

//Только буквы, пробел, тире (для ввода ФИО)
function bukvy_probel_tire(){"use strict";  
if((event.keyCode<65)&&(event.keyCode!==45)&&(event.keyCode!==32)||(event.keyCode>90)&&(event.keyCode<97)||(event.keyCode>122)&&(event.keyCode<256)||(event.keyCode===8470))
{event.returnValue=false;}
}

//Только буквы и цыфры
function cyfry_bukvy(){"use strict";  
if((event.keyCode<48)||(event.keyCode>57)&&(event.keyCode<65)||(event.keyCode>90)&&(event.keyCode<97)||(event.keyCode>122))
{event.returnValue=false;}
}

//Только цыфры и пробел
function cyfry_probel(){"use strict";  
if((event.keyCode<48)&&(event.keyCode!==32)||(event.keyCode>57))
{event.returnValue=false;}
}

//только цифры и ./
function cyfry_tochka_flash(){"use strict";
if((event.keyCode<46)&&(event.keyCode!==32)||(event.keyCode>57)&&(event.keyCode!==92)) {event.returnValue=false;}
}


//Только цифры и /
function cyfry_flash(){"use strict";  
if((event.keyCode<47)||(event.keyCode>57))
{event.returnValue=false;}
}

//Только буквы, пробел и . , ! - : ; ? " ' ( )
function bukvy_probel_znaki1(){"use strict";  
if((event.keyCode<65)&&(event.keyCode!==63)&&(event.keyCode!==59)&&(event.keyCode!==58)&&(event.keyCode!==46)&&(event.keyCode!==45)&&(event.keyCode!==44)&&(event.keyCode!==39)&&(event.keyCode!==34)&&(event.keyCode!==33)&&(event.keyCode!==32)||(event.keyCode>90)&&(event.keyCode<97)||(event.keyCode>122)&&(event.keyCode<256)||(event.keyCode===8470))
{event.returnValue=false;}
}

//Только буквы, цыфры, пробел и . , ! - : ; \ / ? " ' ( ) % @ & # № 
function bukvy_probel_znaki2(){"use strict";  
if((event.keyCode<32)||(event.keyCode===36)||(event.keyCode===42)||(event.keyCode===43)||(event.keyCode>59)&&(event.keyCode<63)||(event.keyCode>90)&&(event.keyCode<97)&&(event.keyCode!==92)||(event.keyCode>122)&&(event.keyCode<255))
{event.returnValue=false;}
}

function correct_name(c){
	// УДАЛЕНИЕ запрещённых и повторяющихся символов, удаление пробела и тире в начале строки (для ввода ФИО)
	"use strict";
	var str, i, j, x, arr=[];
	str=c.value;
	x=1;
	
	if (str==='' || str===null || str===undefined){
		str=null; i=null; j=null; x=null; arr=null;
	}
	
	else {
		
	while (x!==0){
		arr = str.split('');//разбивает строку на массив из символов
		
		for (j = 0; j < 6; j++) {
		for (i = 0; i < arr.length; i++) {//удаляет повторяющиеся символы
			if (arr[i-1]===' ' && arr[i]===' ' || 
				arr[i-1]==='.' && arr[i]==='.' || 
				arr[i-1]==='-' && arr[i]===' ' && arr[i+1]==='-' ||
				arr[i-1]==='-' && arr[i]==='-' || 
				arr[i-1]===',' && arr[i]===',' || 
				arr[i-1]===';' && arr[i]===';' || 
				arr[i-1]===':' && arr[i]===':' || 
				arr[i-1]==='!' && arr[i]==='!' || 
				arr[i-1]==='№' && arr[i]==='№' || 
				arr[i-1]==='%' && arr[i]==='%' || 
				arr[i-1]==='(' && arr[i]==='(' || 
				arr[i-1]===')' && arr[i]===')' || 
				arr[i-1]==='_' && arr[i]==='_' || 
				arr[i-1]==='+' && arr[i]==='+' || 
				arr[i-1]==='*' && arr[i]==='*' || 
				arr[i-1]==='/' && arr[i]==='/' || 
				arr[i-1]==='`' && arr[i]==='`' || 
				arr[i-1]==='~' && arr[i]==='~' || 
				arr[i-1]==='@' && arr[i]==='@' || 
				arr[i-1]==='#' && arr[i]==='#' || 
				arr[i-1]==='$' && arr[i]==='$' || 
				arr[i-1]==='^' && arr[i]==='^' || 
				arr[i-1]==='&' && arr[i]==='&' || 
				arr[i-1]==='{' && arr[i]==='{' || 
				arr[i-1]==='}' && arr[i]==='}' || 
				arr[i-1]==='[' && arr[i]==='[' || 
				arr[i-1]===']' && arr[i]===']' || 
				arr[i-1]==='<' && arr[i]==='<' || 
				arr[i-1]==='>' && arr[i]==='>' || 
				arr[i-1]==='1' && arr[i]==='1' || 
				arr[i-1]==='2' && arr[i]==='2' || 
				arr[i-1]==='3' && arr[i]==='3' || 
				arr[i-1]==='4' && arr[i]==='4' || 
				arr[i-1]==='5' && arr[i]==='5' || 
				arr[i-1]==='6' && arr[i]==='6' || 
				arr[i-1]==='7' && arr[i]==='7' || 
				arr[i-1]==='8' && arr[i]==='8' || 
				arr[i-1]==='9' && arr[i]==='9' || 
				arr[i-1]==='0' && arr[i]==='0'){
				arr.splice(i, 1);//удаляет символ и сдвигает массив
				x=1;
			}
			else {
				x=0;
			}
		}
		}
		for (j = 0; j < 6; j++) {
		for (i = 0; i < arr.length; i++) {//удаляет оставшиеся запрещённые знаки
			if (arr[i]==='.' || 
				arr[i]==='_' || 
				arr[i]===',' || 
				arr[i]===';' || 
				arr[i]===':' || 
				arr[i]==='!' || 
				arr[i]==='№' || 
				arr[i]==='%' || 
				arr[i]==='(' || 
				arr[i]===')' || 
				arr[i]==='+' || 
				arr[i]==='*' || 
				arr[i]==='/' || 
				arr[i]==='`' || 
				arr[i]==='~' || 
				arr[i]==='@' || 
				arr[i]==='#' || 
				arr[i]==='$' || 
				arr[i]==='^' || 
				arr[i]==='&' || 
				arr[i]==='{' || 
				arr[i]==='}' || 
				arr[i]==='[' || 
				arr[i]===']' || 
				arr[i]==='<' || 
				arr[i]==='>' || 
				arr[i]==='1' || 
				arr[i]==='2' || 
				arr[i]==='3' || 
				arr[i]==='4' || 
				arr[i]==='5' || 
				arr[i]==='6' || 
				arr[i]==='7' || 
				arr[i]==='8' || 
				arr[i]==='9' || 
				arr[i]==='0'){
				arr.splice(i, 1);//удаляет символ и сдвигает массив
				x=1;
				}
			else {
				x=0;
				}
			}
		}
		
		if (arr[0]==='-'||arr[0]===' '){//удаляет пробелы и тирэ в начале строки
			arr.splice(0, 1);//удаляет символ и сдвигает массив
				x=1;
			}
			else {
				x=0;
			}
			
		str = arr.join('');//формируем строку из массива
	}		
	c.value = str;
	str=null; i=null; j=null; x=null; arr=null;
	}
}