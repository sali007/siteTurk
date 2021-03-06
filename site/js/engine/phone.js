log.add('Cellular start');
var Phone_Number = '',
    sLogoContent = './img/ui/cellular.gif',
    flag = true,
    sNumber = '',
    nPrvId = 0,
    sPrv = "",
    oInfo = {},
    js = null,
    head = null,
    oProv = null,
    parser = new phoneParser(),
    number,
    realnumber = false,
    r1 = RegExp('^8[( ]{2}[0-9]{2}[) ]{3}$'),
    r2 = RegExp('^8[( ]{2}[0-9][) ]{5}$'),
    nTest = /^\d{10}$/,
    nClean = new RegExp('[ ()-]', 'g'),
    providerButton = {};

function start()
{
	log.add('Start start');

    $('banner').innerHTML = getFlashDef('./swf/banner.swf');
	new CInnerShadow($('btn_del').getElementsByTagName('img')[0], { color: 30 });
	new CInnerShadow($('btn_back').getElementsByTagName('img')[0], { color: 30 });
	keyboard();

	number = $("number");
	realnumber = number.value.replace(nClean, '').substr(1);

	providerButton.logo = $('logo').getElementsByTagName('div')[0].style;
	providerButton.text = $('logo').getElementsByTagName('p')[0];

	var oPrv = oProv;
	providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
	providerButton.text.innerHTML = '';
	vAlignP();
	
	log.add('Start finish');
};

var printTimer;
function press(digit)
{
    // удаление
    if(digit == 'c')
    {
        flag = true;
        clearProviderButton();
        realnumber = realnumber.substr(0, realnumber.length - 1);
    }
    // добавление
    else if(realnumber !== false && realnumber.length < 10)
    {
    	if(realnumber == '1' || (realnumber == '1' && digit == '1'))
    	{
    		realnumber = digit;
    	}
    	else
    	{
    		realnumber += digit;
    	}
    }
    if(printTimer) clearTimeout(printTimer);
    printTimer = setTimeout(print, 50);
};
function clearProviderButton()
{
    this;
	$("btn_forward").style.display = 'none';
	$("num_info").style.display = "none";
	$('container7').className = 'init_l';
	providerButton.logo.backgroundImage = 'url(' + sLogoContent + ')';
	providerButton.text.innerHTML = '';
	vAlignP();
};
function print()
{
    if(printTimer) clearTimeout(printTimer);
    // форматирование
    var s = parser.spliceNumber(realnumber),
        r = ['8'];
    if(s.str.prefix != '')
    {
	r.push(' (', s.str.prefix, parser.nulls(s.str.prefix, 3, '  '), ')');
	if(s.str.pre != '')
	{
		r.push(' ', s.str.pre);
		if(s.str.number1 != '')
		{
			r.push('-', s.str.number1);
			if(s.str.number2 != '')
			{
				r.push('-', s.str.number2);
			}
		}
	}
    }
    number.value = r.join('');
    
    preTest();
};
function preTest()
{
    // проверка    
    if(realnumber !== false && realnumber.length == 10)
    {
        if(flag)
        {
		flag = false;
		
				var sLang = storage.get("language");
       if(sLang == "F1")
       {
		
		
		if(!$("btn_forward").shadowed)
		{
			$("btn_forward").style.display = 'block';
			new CInnerShadow($('btn_forward').getElementsByTagName('img')[0], { color: 30 });
			$("btn_forward").shadowed = true;
			$("btn_forward").style.display = 'none';
		}}
		else{if(!$("btn_forward_kaz").shadowed){
		$("btn_forward_kaz").style.display = 'block';
			new CInnerShadow($('btn_forward_kaz').getElementsByTagName('img')[0], { color: 30 });
			$("btn_forward_kaz").shadowed = true;
			$("btn_forward_kaz").style.display = 'none';
		}
		
		}
		test(realnumber);
        }
    }
}

function isCorrectPrvInfo(oInfo) 
{
    return (!$isNoU(oInfo) &&
            oInfo.hasOwnProperty("from") &&
            oInfo.hasOwnProperty("to"));
}


function test(sNumber)
{
    nPrvId = 0;
    window.sNumber = sNumber;

    if(nTest.test(sNumber))
    {
    	parser.get(sNumber, process);
    }
    else
    {
    	process();
    }

}

function process(result)
{
var sLang = storage.get("language");

if(sLang == "F1"){
    var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt =
        "Проверьте, не ошиблись ли Вы при вводе номера<br /><br />" +
        "Если номер набран верно, нажмите \"Вперед\" для выбора оператора";
    var sNoPrv = "Невозможно оплатить данного провайдера";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Сотовая связь";
    var bIsFoundProvider = false;}
    
    else{
        var sLogoContent2 = sLogoContent;
    var BEELINE_INTERNET_VALUE = 50;
    var nPrefix = 0;
    var oProvider = {};
    var sRegion = "";
    var sTxt =
        "Терілген нөмірдің дұрыстығын тексеріңіз<br /><br />" +
        "Егер нөмір дұрыс терілсе, провайдерді таңдау үшін \“АЛҒА\” басыңыз";
    var sNoPrv = "Көрсетілген провайдерға төлеу мүмкін емес";
    var sNoRegion = "Регион не определен";
    var sCellularProvider = "Ұялы байланыс";
    var bIsFoundProvider = false;
    }

	       if(sLang == "F1")
       {
	$("btn_forward").style.display = 'block';
	}
	else
	{
	$("btn_forward_kaz").style.display = 'block';
	
	}

	providerButton.logo.backgroundImage = 'url('+sLogoContent+')';
	providerButton.text.innerHTML = '';
	vAlignP();

	if(!$isNoU(result) && !$isNoU(result.provider) && !$isNoU(result.provider.sName))
	{
		bIsFoundProvider = true;
		nPrvId = result.provider.id;
		if (nPrvId == 2 && result.priority == BEELINE_INTERNET_VALUE)
		{
			sPrv = "Билайн Интернет";
		}
		else
		{
			sPrv = result.provider.sName;
		}
		if(!$isNoU(result) && !$isNoU(result.region))
	    {
	        sRegion = result.region;
	    }
	}
	else
	    $("btn_forward").style.display = 'none';
	
	if(bIsFoundProvider)
	{
	    sTxt = sPrv + "<br />" + sRegion;

	    if (!$isNoU(result) && !$isNoU(result.provider))
	    {
		   	oProv = result.provider;
			if(
				result.provider.hasOwnProperty("logo") &&
				!$isNoU(result.provider.logo) &&
				result.provider.logo.is(String)
			)
			{
				providerButton.logo.backgroundImage = 'url(./img/ui_item/' + getFileName(result.provider.logo) + ')';
			}
			
			providerButton.text.innerHTML = result.provider.buttonName || result.provider.sName;
			vAlignP();
	    }
	    else
	    {
			result.provider.id = nPrvId.toString(10);
			result.provider.sName = sPrv != sNoPrv ? sPrv : sCellularProvider;
		   	oProv = {};
		   	
	    }
	}
	
	
    $('container7').className = 'init_l' + (bIsFoundProvider ? '' : ' undefined');

    $("num_info").style.marginTop = (bIsFoundProvider || !$isNoU(result)) ? "55px" : "10px";
    $("num_info").style.display = "block";
        
    if (!$isNoU(result) && !$isNoU(result.provider))
    {
        if (result.provider == "false")
        {
            sTxt = sNoPrv;
            $("btn_forward").style.display = 'none';
        }
    }
    
    $("num_info_txt").innerHTML = sTxt;

    setTimeout(function(){
	    startAdvert("Adv_Cellular");
    }, 100);
}

function getMinSumm(sPrvId) {
    switch (sPrvId.toString()) {
        case '2'    : return '2';
        case '4'    : return '30';
        case '36'   : return '10';
        case '42'   : return '2';
        case '60'   : return '10';
        case '79'   : return '100';
        case '84'   : return '5';
        case '96'   : return '10';
        case '279'  : return '10';
        case '303'  : return '5';
        case '329'  : return '5';
        case '352'  : return '5';
        case '358'  : return '10';
        case '383'  : return '50';
        case '881'  : return '5';
        default: return '1';
    }
}

function backward()
{  
    document.location.href = './menu.html';
}

function forward()
{
	ff.PrvId2.value = nPrvId;
	ff.PrvName2.value = sPrv;
	ff.AccNum2.value = sNumber;
	ff.MinCashLimit2.value = getMinSumm(nPrvId);
	ff.action = './validate_confirm.html';
	ff.submit();
}

function keyboard()
{
	var imgs = $('keyboard').getElementsByTagName('img');
	for(var i = 0, l = imgs.length; i < l; i++)
	{
		var isLast = (i + 1 == l);
		new CInnerShadow(imgs[i], isLast ? { height: 95 } : null);
	}
}

function vAlignP()
{
	providerButton.text.style.marginTop = (providerButton.text.parentNode.clientHeight - providerButton.text.clientHeight) / 2 + 'px';
}

log.add('Cellular finish');













