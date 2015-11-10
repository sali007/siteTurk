function getcookie2(name)
{
var RESULT;

if (document.cookie) {

	var startPos, endPos;

	startPos = document.cookie.search(name) + name.length + 1;
 
	if(document.cookie.indexOf(";", startPos) !== -1)
	
	endPos = document.cookie.indexOf(";", startPos);
 
	else
	
	endPos = document.cookie.length;

	RESULT = document.cookie.substring(startPos, endPos);

}
 
else {

	return false;

}

return RESULT;
}

	if(!getcookie2("language"))
	{
		document.cookie = "language=rus";
	}
	
var language = getcookie2("language");	

function img_main(name)
{
	if (language=="rus")
	{
		document.write('<img border="0" src="./img/ui/main_'+name+'.gif">');
	}
	else
	{
		document.write('<img border="0" src="./img/ui/main_'+name+'_kz.gif">');		
	}
}

function img(name)
{
	if (language=="rus")
	{
		document.write('<img border="0" src="./img/ui/'+name+'.gif">');
	}
	else
	{
		document.write('<img border="0" src="./img/ui/'+name+'_kz.gif">');		
	}
}

function lngstr(name,dowrite)
{
	if (dowrite)
	{
	document.write(lang[name][language]);
	}
	else
	{
	return lang[name][language];
	}
}

var lang = new Array();

	lang["msg1"] = new Array();
	lang["msg1"]["rus"] = "строка рус";
    lang["msg1"]["kaz"] = "строка каз";	

	lang["prefix"] = new Array();
	lang["prefix"]["rus"] = "префикс";
	lang["prefix"]["kaz"] = "префикс";	

	lang["telnumber"] = new Array();
	lang["telnumber"]["rus"] = "номер";
	lang["telnumber"]["kaz"] = "нөмір";
	
	lang["telcomment"] = new Array();	
	lang["telcomment"]["rus"] = "Внимание! Номер телефона вводится без <8>,<br> в формате: (ХХХ) ХХХ-ХХ-ХХ<br>";
	lang["telcomment"]["kaz"] = "Назар аударыныз! Телефон номері(ХХХ) ХХХ-ХХ-ХХ форматта, сегізсіз енгізіледі."; 

	lang["numinfo"] = new Array();
	lang["numinfo"]["rus"] = "Информация о введенном номере:";
    lang["numinfo"]["kaz"] = "Терiлген номір жайында акпарат:";	

	lang["numnotdefined"] = new Array();
	lang["numnotdefined"]["rus"] = "Номер не определен!";
    lang["numnotdefined"]["kaz"] = "Нөмір анықталған жоқ!";	

	lang["checknum"] = new Array();
	lang["checknum"]["rus"] = "Проверьте, не ошиблись ли Вы при вводе номера:";
	lang["checknum"]["kaz"] = "Терiлген нөмірдi тексерiнiз:";

	lang["prefix_must_be"] = new Array();
	lang["prefix_must_be"]["rus"] = "Префикс должен быть 702, 701 или 775";
    lang["prefix_must_be"]["kaz"] = "Префикс 702, 701 немесе 775 болу керек";
	
	lang["repKaz"] = new Array();
	lang["repKaz"]["rus"] = "Республика Казахстан";
    lang["repKaz"]["kaz"] = "Қазақстан Республикасы";
	
	lang["payvalue"] = new Array();
	lang["payvalue"]["rus"] = "К зачислению на счет абонента:";
	lang["payvalue"]["kaz"] = "Абонент шотына аударылатын ақша:";	
	lang["enteremail"] = new Array();
	lang["enteremail"]["rus"] = "Введите Ваш E-mail:";
	lang["enteremail"]["kaz"] = "E-mail-іңізді енгізіңіз:";	

	lang["enteraddress"] = new Array();
	lang["enteraddress"]["rus"] = "Введите Ваш адрес:";
	lang["enteraddress"]["kaz"] = "Мекен-жайыңызды енгізіңіз:";	

	lang["enteraccount"] = new Array();
	lang["enteraccount"]["rus"] = "Введите номер Вашего договора:";
	lang["enteraccount"]["kaz"] = "Келісім-шарттың нөмірін енгізіңіз:";

	lang["entercount"] = new Array();
	lang["entercount"]["rus"] = "Введите номер счета:";
	lang["entercount"]["kaz"] = "Шот нөмірін енгізіңіз:";	

 	lang["entcompnumpred"]= new Array();
    lang["entcompnumpred"]["rus"] = "Введите компьютерный номер Представителя:";
    lang["entcompnumpred"]["kaz"] = "Өкіліңіздің компьютерлік нөмірін енгізіңіз:";   
	
	lang["entidnumb"] = new Array();
	lang["entidnumb"]["rus"] = "Введите Ваш ID:";
	lang["entidnumb"]["kaz"] = "ID номеріңізді еңгізіңіз:";

	lang["help1"] = new Array();
	lang["help1"]["rus"] = "Выберите пункт меню ОПЛАТА УСЛУГ:";
	lang["help1"]["kaz"] = "Менюден «Қызметтерді төлеу» пунктін таңданыз:";	

	lang["help2"] = new Array();
	lang["help2"]["rus"] = "Выберите категорию услуг:";
	lang["help2"]["kaz"] = "Қызмет категориясын таңданыз:";	

	lang["help3"] = new Array();
	lang["help3"]["rus"] = "Введите номер оплачиваемого мобильного телефона:";
	lang["help3"]["kaz"] = "Төленетін ұялы телефон номерін еңгізіңіз:";	

	lang["help4"] = new Array();
	lang["help4"]["rus"] = "Набрав номер, нажмите ВПЕРЕД:";
	lang["help4"]["kaz"] = "Номерді терген соң АЛҒА басыныз:";	

	lang["help5"] = new Array();
	lang["help5"]["rus"] = "Проверьте правильность набранного телефона:";
	lang["help5"]["kaz"] = "Терілген телефон номерін дұрыстылығын тексерініз:";	

	lang["help6"] = new Array();
	lang["help6"]["rus"] = "Если номер набран правильно, нажмите ВПЕРЕД";
	lang["help6"]["kaz"] = "Егер номер дұрыс терілсе АЛҒА басыныз";	

	lang["help7"] = new Array();
	lang["help7"]["rus"] = "Вставьте купюру (тенге) в отделение для купюр и дождитесь пока в поле<br>ВНЕСЁННАЯ СУММА не отобразится сумма внесённых вами купюр.<br>";
	lang["help7"]["kaz"] = "Купюраны(теңгені) купюра бөліміне салыңыз. «енгізілген сумма(сома)» алаңында сіз енгізген купюралар суммасы(сомасы) шыққанша күтініз.";	

	lang["help8"] = new Array();
	lang["help8"]["rus"] = "Нажмите ОПЛАТИТЬ";
	lang["help8"]["kaz"] = "ТӨЛЕУ белгісің басыңыз";	

	lang["help9"] = new Array();
	lang["help9"]["rus"] = "Благодарим за использование нашей системы!";
	lang["help9"]["kaz"] = "Біздің жүйені қолданғаныңыз үшін рахмет, келіп тұрыңыз";	

	lang["pathword1"] = new Array();
	lang["pathword1"]["rus"] = "Для оплаты абонентов сотовой связи PAThWORD. Выберети номинал карточки:";
	lang["pathword1"]["kaz"] = "PAThWORD уялы байланыс қызметінің абоненттеріне (қолданушыларына). Төлем ақы карточкасын таңдаңыз: ";	

	lang["pathword2"] = new Array();
	lang["pathword2"]["rus"] = "Для  абонентов сотовой связи &quot;PAThWORD&quot; сумма платежа фиксирована и составляет 700, 1500, 2900 платежи на другие суммы зачислены не будут! Внимание! Номер телефона вводится без «8»,  в формате:	(ХХХ) ХХХ-ХХ-ХХ. ";
	lang["pathword2"]["kaz"] = "PAThWORD уялы байланыс қызметінің абоненттеріне (Қолданушыларына): Төлем ақы сомасы: 700 тенге, 1 500 тенге, 2 900 тенге. Басқа соманы құрайтын төлем ақылар қабылданбайды!";	

 	lang["entnumsmcard"] = new Array();
    lang["entnumsmcard"]["rus"] = "Введите номер смарт-карты:";
    lang["entnumsmcard"]["kaz"] = "Смарт-картаның нөмірiн еңгiзіңiз:";
    
	lang["enttelnumelsenumcard"]= new Array();
    lang["enttelnumelsenumcard"]["rus"] = "Введите номер телефона или карточки:";
    lang["enttelnumelsenumcard"]["kaz"] = "Телефонның немесе карточканың нөмірін енгізіңіз:";
    
	lang["entregnumber"]= new Array();
    lang["entregnumber"]["rus"] = "Введите Ваш регистрационный номер:";
    lang["entregnumber"]["kaz"] = "Тіркелу нөмірін еңгізіңіз:"; 
	
	lang["entLicNumber"]= new Array();
    lang["entLicNumber"]["rus"] = "Введите лицевой счет абонента/№ договора:";
    lang["entLicNumber"]["kaz"] = "Өзіңіздің дербес есепшотыңызды енгізіңіз/келісім шарт №:";
    
	lang["entLicNumberandcod"]= new Array();
    lang["entLicNumberandcod"]["rus"] = "Введите номер лицевого счёта или код";
    lang["entLicNumberandcod"]["kaz"] = "Өзіңіздің дербес есепшотыңызды немесе кодыңызды енгізіңіз:";
	
    lang["entnumberlicscheta"]= new Array();
    lang["entnumberlicscheta"]["rus"] = " Введите  номер лицевого счета:";
    lang["entnumberlicscheta"]["kaz"] = "Жеке шот нөмірін енгізіңіз:";  
    
    lang["entnlsorsercard"]= new Array();
    lang["entnlsorsercard"]["rus"] = " Введите Ваш номер лицевого счета или серийный номер карточки:";
    lang["entnlsorsercard"]["kaz"] = "Шот номерін немесе карточканың сериалық номерін еңгізіңіз:";   

	lang["enterlogin"]= new Array();
    lang["enterlogin"]["rus"] = " Введите ваш логин:";
    lang["enterlogin"]["kaz"] = "Логиніңізді еңгізіңіз:";  	
	
	lang["enternum"]= new Array();
    lang["enternum"]["rus"] = " Введите номер:";
    lang["enternum"]["kaz"] = "Нөміріңізді енгізіңіз";  
	
	lang["entkodopl"]= new Array();
    lang["entkodopl"]["rus"] = " Введите код оплаты:";
    lang["entkodopl"]["kaz"] = "Төлеміңіздің кодын енгізіңіз:";  	
	
	lang["enter_e-mail_or_login"]= new Array();
    lang["enter_e-mail_or_login"]["rus"] = " Введите e-mail или логин, на который зарегистрирована анкета:";
    lang["enter_e-mail_or_login"]["kaz"] = "e-mail-ңізді немесе анкетада тіркеулі тұрған логиніңізді еңгізіңіз:";  	
	
	lang["erro_internet_doma"] = new Array();
	lang["erro_internet_doma"]["rus"] = "<b>Вниамние, формат ввода номера:(099) XXX-XX-XX<br> Пример:(099) 111-11-11</b> ";
	lang["erro_internet_doma"]["kaz"] = "<b>Назар аударыңыз, логин номері (099) XXX-XX-XX<br> форматында енгізіледі. Мысалы:(099) 111-11-11</b> ";	
	
	lang["internet_doma"] = new Array();
	lang["internet_doma"]["rus"] = "<b>Интернет үйіңізде<br>Интернет Дома</b> ";
	lang["internet_doma"]["kaz"] = "Интернет үйіңізде<br>Интернет Дома";
	
	lang["alert_avon"] = new Array();
	lang["alert_avon"]["rus"] = "<b>Внимание! Данная услуга предусмотрена ТОЛЬКО для оплаты за тренинг! Оплата за товар не принимается. Чтобы оплатить заказ, пожалуйста, вернитесь НАЗАД и выберите окно 'Оплата за товар'</b> ";
	lang["alert_avon"]["kaz"] = "<b>Назар аударыңыз! Бұл қызымет, тек AVON тренингтеріне төлем қабылауға арналған. Тауарларға төлем қабылданбайды. Егер сіз, AVON тауарларына төлегіңіз келсе АРТҚА шығып 'Оплата за товары' бөлімін таңдап алыңыз</b>";	
	
	lang["title_eshko"] = new Array();
	lang["title_eshko"]["rus"] = "Введите студенческий номер (лицевой счет):";
	lang["title_eshko"]["kaz"] = "Студенттік нөміріңізді енгізіңіз (дербес есепшот):";
	
	lang["title_sky_telecom"] = new Array();
	lang["title_sky_telecom"]["rus"] = "Введите ваш лицевой счет или номер телефона:";
	lang["title_sky_telecom"]["kaz"] = "Өзіңіздің дербес есепшотыңызды немесе телефоныңыздың номерін енгізіңіз:";

	lang["title_garena"] = new Array();
	lang["title_garena"]["rus"] = "Введите Ваш Идентификатор:";
	lang["title_garena"]["kaz"] = "Өзіңіздің Идентификаторыңызды енгізіңіз:";
	
	lang["individual_number"] = new Array();
	lang["individual_number"]["rus"] = "Введите индивидуальный номер покупателя:";
	lang["individual_number"]["kaz"] = "Сатып алушының жеке кодын енгізіңіз:";
	
	lang["enternumber"] = new Array();
	lang["enternumber"]["rus"] = "Введите номер телефона:";
	lang["enternumber"]["kaz"] = "Телефоныңыздың номерін енгізіңіз:";	
	
	lang["enterorder"] = new Array();
	lang["enterorder"]["rus"] = "Введите номер заказа:";
	lang["enterorder"]["kaz"] = "Тапсырыс нөмірін енгізіңіз:";	
	
	lang["enteryourcard"] = new Array();
	lang["enteryourcard"]["rus"] = "Введите номер карточки:";
	lang["enteryourcard"]["kaz"] = "Кртаңыздың номерін енгізіңіз:";
	
	lang["enterlknumber"] = new Array();
	lang["enterlknumber"]["rus"] = "Введите номер Вашего личного кабинета:";
	lang["enterlknumber"]["kaz"] = "Өзіңіздің жеке кеңсеңіздің номерін енгізіңіз:";	
	
	lang["enterpersnaccount"]= new Array();
    lang["enterpersnaccount"]["rus"] = "Введите Ваш Лицевой счет";
    lang["enterpersnaccount"]["kaz"] = "Өзіңіздің жеке есеп шотыңызды енгізіңіз";  
	
	lang["selectregion"]= new Array();
    lang["selectregion"]["rus"] = "Выберите ваш участок:";
    lang["selectregion"]["kaz"] = "Өз аумағыңызды таңдаңыз:";  
	
	lang["fio"]= new Array();
    lang["fio"]["rus"] = "Ф.И.О:";
    lang["fio"]["kaz"] = "Аты-Жөні:"; 
	
	lang["order_amount"]= new Array();
    lang["order_amount"]["rus"] = "Сумма заказа:";
    lang["order_amount"]["kaz"] = "Тапсырыс сомасы:"; 
	
	lang["current_balance"]= new Array();
    lang["current_balance"]["rus"] = "Текущий баланс:";
    lang["current_balance"]["kaz"] = "Қазіргі баланс:"; 
	
	lang["amounttopay"]= new Array();
    lang["amounttopay"]["rus"] = "Сумма к оплате:";
    lang["amounttopay"]["kaz"] = "Төлейтін сома:";
	
	lang["excluding_commissions_terminal"]= new Array();
    lang["excluding_commissions_terminal"]["rus"] = " (Без учета комиссии терминала)";
    lang["excluding_commissions_terminal"]["kaz"] = " (Терминал комисиясын есептемегенде)";
	
	lang["validate"]= new Array();
    lang["validate"]["rus"] = "Подтвердите правильность введенных данных";
    lang["validate"]["kaz"] = "Енгізілген ақпараттың дұрыстығын растаңыз";
	
	lang["productname"]= new Array();
    lang["productname"]["rus"] = "Название продукта";
    lang["productname"]["kaz"] = "Өнімнің атауы";
	
	lang["youremail"]= new Array();
    lang["youremail"]["rus"] = "Ваша e-mail";
    lang["youremail"]["kaz"] = "Сіздің e-mail-ңіз";
	
	lang["yourphone"]= new Array();
    lang["yourphone"]["rus"] = "Ваш номер телефона";
    lang["yourphone"]["kaz"] = "Сіздің телефоныңыз";
	
	lang["virtnumber"] = new Array();
	lang["virtnumber"]["rus"] = "Введите Ваш Виртуальный номер:";
	lang["virtnumber"]["kaz"] = "Өзіңіздің виртуальды номеріңізді енгізіңіз:";	
	
	lang["enterUID"] = new Array();
	lang["enterUID"]["rus"] = "Введите ваш UID";
	lang["enterUID"]["kaz"] = "UID-іңізді енгізіңіз";	
	
	lang["alert_accNum_look_in_reciept"] = new Array();
	lang["alert_accNum_look_in_reciept"]["rus"] = "Номер лицевого счёта смотрите на квитанции";
	lang["alert_accNum_look_in_reciept"]["kaz"] = "Дербес есепшотыңызды түбіртектен қараңыз";	
	
	
	
	//"Балансты тексеру"
function button_check_balance() {
    document.write('<table cellpadding="0" cellspacing="0" border="0" width="413" height="124">');
    document.write('<tr>');
    document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	if (language == "rus"){
    document.write('<td align="center" valign="middle" width="353" background="./img/ui/check_balance_ru.gif"></td>');
	}
	else{
	document.write('<td align="center" valign="middle" width="353" background="./img/ui/check_balance.gif"></td>');
	}
    document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
    document.write('</tr>');
    document.write('</table>');
}

function button_check_balance_inactive() {
    document.write('<table cellpadding="0" cellspacing="0" border="0" height="124">');
    document.write('<tr>');
    document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');
	if (language == "rus"){
    document.write('<td align="center" valign="middle" width="353" background="./img/ui/check_balance_ru.gif"></td>');
	}
	else{
	document.write('<td align="center" valign="middle" width="353" background="./img/ui/check_balance.gif"></td>');
	}
	document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
    document.write('</tr>');
    document.write('</table>');
}
function bottom_menu_check_balance() {
    document.write('<tr><td align="center" height="70">');
    document.write('<table cellpadding="10" cellspacing="0" border="0" width="100%">');
    document.write('<tr>');
    document.write('<td width="20%">');
    document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');
    document.write('<tr>');
    document.write('<td width="30%" bgcolor="#dedede">');
    document.write('<div id="check_balance_yes" name="check_balance_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=check_balance();><script>button_check_balance();</script></td></tr></table></div>');
    document.write('<div id="check_balance_no" name="check_balance_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_check_balance_inactive();</script></td></tr></table></div>');
    document.write('</td>');
    document.write('<td>&nbsp;</td>	');
    document.write('<td width="25%" bgcolor="#dedede">');
    document.write('<div id="forward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_forward();</script></td></tr></table></div>');
    document.write('<div id="forward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_forward_inactive();</script></td></tr></table></div>');
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</td></tr>');
}

	
//"назад"
function button_back(){

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');

	document.write('<tr>');

	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');

	if (language=="rus")
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_la.gif"></td>');
	}
	else
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_la_kz.gif"></td>');
	}

	document.write('<td width="30" background="./img/ui/b_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}

//"вперёд"
function button_forward() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');

	if (language=="rus")
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_ra.gif"></td>');
	}
	else
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_ra_kz.gif"></td>');
	}

	document.write('<td width="30" background="./img/ui/b_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');

}


function button_pay() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_left.gif"></td>');

	if (language=="rus")
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_pay.gif"></td>');
	}
	else
	{
		document.write('<td background="./img/ui/b_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_pay_kz.gif"></td>');
	}

	document.write('<td width="28" background="./img/ui/b_right.gif"></td>');

	document.write('</tr>');

	document.write('</table>');

}

//"вперёд"
function button_forward_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_ra.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');
}

function button_back_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_inactive_la.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');

}


//"в меню"
function button_menu() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_menu_left.gif"></td>');

	if (language=="rus")
	{
		document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_center.gif"></td>');
	}
	else
	{
		document.write('<td background="./img/ui/b_menu_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_center_kz.gif"></td>');
	}

	document.write('<td width="30" background="./img/ui/b_menu_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');

}


//"в меню"
function button_menu_inactive() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="124">');
	document.write('<tr>');
	document.write('<td width="30" background="./img/ui/b_inactive_left.gif"></td>');
	document.write('<td background="./img/ui/b_inactive_bg.gif" align="center" valign="middle"><img border="0" src="./img/ui/b_menu_inactive_center.gif"></td>');
	document.write('<td width="30" background="./img/ui/b_inactive_right.gif"></td>');
	document.write('</tr>');
	document.write('</table>');

}




function get_advert() {
	document.write('<div id="advert" style="display: ;">');
	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%">');
	document.write('<tr>');
	document.write('<td width="70%" id="advert_image" name="advert_image" background="./img/ui/advert_bg.gif">');
	document.write('</tr>');
	document.write('<tr><td bgcolor="#cfcfcf" height="1"></td></tr>');
	document.write('<tr><td bgcolor="#ffffff" height="1"></td></tr>');
	document.write('</table>');
	document.write('</div>');
}


function ui_item_left() {
	var left = '<table cellpadding="0" cellspacing="0" border="0" width="100%" height="140"><tr><td width="25" background="./img/ui/ui_item_left.gif"></td><td background="./img/ui/ui_item_bg.gif" align="center" valign="middle">';
	document.write(left);
}

function ui_item_right() {
	var right = '</td><td width="25" background="./img/ui/ui_item_right.gif"></td></tr>' + '</table>';
	document.write(right);
}



function bottom_menu() {



	document.write('<tr><td align="center" height="70">');

	document.write('<table cellpadding="10" cellspacing="0" border="0" width="100%">');

	document.write('<tr>');

	document.write('<td width="20%">');	

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%">');

	document.write('<tr>');

	document.write('<td width="25%" bgcolor="#dedede">');

	document.write('<div id="backward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=backward()><script>button_back();</script></td></tr></table></div>');

	document.write('<div id="backward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_back_inactive();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('<td>&nbsp;</td>	');

	document.write('<td width="30%" bgcolor="#dedede">');

	document.write('<div id="menu_yes" name="menu_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=menu();><script>button_menu();</script></td></tr></table></div>');

	document.write('<div id="menu_no" name="menu_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_menu_inactive();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('<td>&nbsp;</td>	');

	document.write('<td width="25%" bgcolor="#dedede">');

	document.write('<div id="forward_yes" name="forward_yes" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_forward();</script></td></tr></table></div>');

	document.write('<div id="forward_no" name="forward_no" style=display:><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td><script>button_forward_inactive();</script></td></tr></table></div>');

	document.write('<div id="pay" name="pay" style=display:none><table cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td onclick=forward();><script>button_pay();</script></td></tr></table></div>');

	document.write('</td>');

	document.write('</tr>');

	document.write('</table>');

	document.write('</td>');

	document.write('</tr>');

	document.write('</table>');

	document.write('</td></tr>');


}







//устройства ввода

//цифровая клавиатура, обычная

function get_keypad() {

	document.write('<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#dedede">');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_1_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_1_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_1_off.gif\'" onclick="press(\'1\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_2_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_2_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_2_off.gif\'" onclick="press(\'2\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_3_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_3_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_3_off.gif\'" onclick="press(\'3\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_4_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_4_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_4_off.gif\'" onclick="press(\'4\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_5_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_5_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_5_off.gif\'" onclick="press(\'5\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_6_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_6_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_6_off.gif\'" onclick="press(\'6\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_7_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_7_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_7_off.gif\'" onclick="press(\'7\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_8_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_8_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_8_off.gif\'" onclick="press(\'8\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_9_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_9_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_9_off.gif\'" onclick="press(\'9\');" border="0"></td>');

	document.write('</tr>');

	document.write('<tr>');

	document.write('<td style=\'padding: 0 1 1 0;\'><img src="./img/ui/kpad/button_keypad_c_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_c_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_c_off.gif\'" onclick="press(\'c\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 0;\'><img src="./img/ui/kpad/button_keypad_0_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_0_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_0_off.gif\'" onclick="press(\'0\');" border="0"></td>');

	document.write('<td style=\'padding: 0 0 1 1;\'><img src="./img/ui/kpad/button_keypad_bs_off.gif" onMouseOver="this.src=\'./img/ui/kpad/button_keypad_bs_on.gif\'" onMouseOut="this.src=\'./img/ui/kpad/button_keypad_bs_off.gif\'" onclick="press(\'bs\');" border="0"></td>');

	document.write('</tr>');

	document.write('</table>');

}


//буквенная клавиатура, обычная

function get_keyboard() {

	document.write('<table cellpadding="0" cellspacing="0" border="0">');

	document.write('<tr>');

	document.write('<td align="left" style="padding: 0 0 0 0;">');

		document.write('<table width="990" height="49" border="0" background="./img/ui/kboard/up_bg.gif">');

		document.write('<tr>');

		document.write('<td width="220"><img name="raskl" src="./img/ui/kboard/latin-raskl.gif" border="0"></td>');

		document.write('<td  width="10">|</td>');

		document.write('<td>&nbsp;</td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td></tr><tr><td>');

		document.write('<table cellpadding="1" cellspacing="0" width="916">');

		document.write('<tr>');

		document.write('<td><img src="./img/ui/kboard/b_00.gif"  onClick="press(\'`~ёЁ\');" width="64" height="64" border="0"><img src="./img/ui/null.gif" alt="" width="2" height="1" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_1.gif"  onClick="press(\'1!1!\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_2.gif"  onClick="press(\'2@2@\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_3.gif"  onClick="press(\'3#3№\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_4.gif"  onClick="press(\'4$4;\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_5.gif"  onClick="press(\'5%5%\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_6.gif"  onClick="press(\'6^6:\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_7.gif"  onClick="press(\'7&7?\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_8.gif"  onClick="press(\'8*8*\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_9.gif"  onClick="press(\'9(9(\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b_0.gif"  onClick="press(\'0)0)\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b__.gif"  onClick="press(\'-_-_\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b__2.gif"  onClick="press(\'=+=+\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b__3.gif"  onClick="press(\'|/\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b__4.gif"  onClick="press(\'b4\');" width="64" height="64" border="0"></td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td></tr><tr><td>');

		document.write('<table cellpadding="1" cellspacing="0" width="919">');

		document.write('<tr>');

		document.write('<td><img src="./img/ui/kboard/b2_empty.gif" border="0"><img src="./img/ui/null.gif" alt="" width="2" height="1" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_q.gif"  onClick="press(\'qQйЙ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_w.gif"  onClick="press(\'wWцЦ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_e.gif"  onClick="press(\'eEуУ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_r.gif"  onClick="press(\'rRкК\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_t.gif"  onClick="press(\'tTеЕ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_y.gif"  onClick="press(\'yYнН\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_u.gif"  onClick="press(\'uUгГ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_i.gif"  onClick="press(\'iIшШ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_o.gif"  onClick="press(\'oOщЩ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_p.gif"  onClick="press(\'pPзЗ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b2_00.gif"  onClick="press(\'[{хХ\');" width="64" height="64" border="0"></td>');

		document.write('<td ><img src="./img/ui/kboard/b2_01.gif"  onClick="press(\']}ъЪ\');" width="64" height="64" border="0"></td>');

		document.write('<td align="left"><img onClick="press(\'enter\');" src="./img/ui/kboard/enter2.gif" border="0"></td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td></tr><tr><td>');

		document.write('<table cellpadding="1" cellspacing="0"  width="920">');

		document.write('<tr>');

		document.write('<td><img src="./img/ui/kboard/b3_caps_lock.gif" name="shift" onClick="press(\'shift\');" border="0"><img src="./img/ui/null.gif" width="2" height="1" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_a.gif"  onClick="press(\'aAфФ\');" width="64" height="64" border="0"></td>');
	
		document.write('<td><img src="./img/ui/kboard/b3_s.gif"  onClick="press(\'sSыЫ\');" width="64" height="64" border="0"></td>');
	
		document.write('<td><img src="./img/ui/kboard/b3_d.gif"  onClick="press(\'dDвВ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_f.gif"  onClick="press(\'fFаА\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_g.gif"  onClick="press(\'gGпП\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_h.gif"  onClick="press(\'hHрР\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_j.gif"  onClick="press(\'jJоО\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_k.gif"  onClick="press(\'kKлЛ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_l.gif"  onClick="press(\'lLдД\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_00.gif"  onClick="press(\';:жЖ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b3_01.gif"  onClick="press(\'эЭэЭ\');" width="64" height="64" border="0"></td>');

		document.write('<td align="left"><img src="./img/ui/kboard/enter.gif"  onClick="press(\'enter\');" border="0"></td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td></tr><tr><td>');

		document.write('<table cellpadding="1" cellspacing="0"  width="915">');

		document.write('<tr>');

		document.write('<td><img src="./img/ui/kboard/b4_shift.gif" name="shiftflagn" onClick="shiftflag(\'1\');" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_z.gif"  onClick="press(\'zZяЯ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_x.gif"  onClick="press(\'xXчЧ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_c.gif"  onClick="press(\'cCсС\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_v.gif"  onClick="press(\'vVмМ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_b.gif"  onClick="press(\'bBиИ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_n.gif"  onClick="press(\'nNтТ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_m.gif"  onClick="press(\'mMьЬ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_00.gif"  onClick="press(\',<бБ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_01.gif"  onClick="press(\'.>юЮ\');" width="64" height="64" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b4_02.gif"  onClick="press(\'/?.,\');" width="64" height="64" border="0"></td>');

		document.write('<td align="right"><img src="./img/ui/kboard/b4_empty.gif" border="0"></td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td></tr><tr><td>');

		document.write('<table cellpadding="1" cellspacing="1" border="0">');

		document.write('<tr>');

		document.write('<td><img src="./img/ui/kboard/b5_engrus.gif" onClick="press(\'engrus\');" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b5_probel.gif" onClick="press(\'    \');" alt="" border="0"></td>');

		document.write('<td><img src="./img/ui/kboard/b5_ochistit.gif" onClick="press(\'ochistit\');" border="0"></td>');

		document.write('</tr>');

		document.write('</table>');

	document.write('</td>');

	document.write('</tr>');

	document.write('</table>');

}

