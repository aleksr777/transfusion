// Пример для радиокнопок и чекбоксов в основном коде:
// <input type="radio" onclick="sс(this)">
//
// Пример для текстовых полей и текстовых импутов в основном коде:
// <input type="text" 
//	onkeypress="sn(this)" 
//	onkeyup="sn(this)" 
//	onblur="sn(this)"
//	onmouseover="sn(this)" 
//	onmouseout="sn(this)" 
//	onChange="sn(this)"/>
//
// Необходим также скрипт для восстановления отображения выбора при перезагрузке страницы
// <body onload="start">

function sс(c){
	// выбор + сохранение из localStorage по "name" // отмена + удаление из localStorage по "name".
	// для радиокнопок (с возможностью отмены выбора) и чекбоксов.
	"use strict";
	if (localStorage.getItem(c.name)===c.value){
		c.checked=false;
		localStorage.removeItem(c.name);
	}
    else {localStorage.setItem(c.name, c.value);}		  
}

function sn(c){
	// сохранение в localStorage по "name"
	"use strict";
	localStorage.setItem(c.name, c.value);	
}

function si(c){
	// сохранение в localStorage по "id"
	"use strict";
	localStorage.setItem(c.id, c.value);
}

function sli(c){
	// сохранение в localStorage по "id" с сохранением в localStorage
	"use strict";
	localStorage.setItem(c.id, c.value);
	localStorage.setItem(c.id, localStorage.getItem(c.id));
}

function ch(c){
	// Для радиокнопок и чекбоксов. Для установки выбора "по-умолчанию" через java.
	// Если за текущую сессию не было клика на радиокнопке или чекбоксе, то localStorage.getItem(c.name+'_ch')=null.
	"use strict";
	localStorage.setItem(c.name+'_ch', 1);
}

function save_FIO(c){
	"use strict";
localStorage.setItem('save_FIO', c.id);
}