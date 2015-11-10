var nAdvTimer = 0;
var startPosY = 200;
var endPosY = 600;
var currentPosY = 440;
var flag = false;
var dat = new Date();
var advert3;

function init() {
        processEnterSummAdvert();
        storage.clearExcept(["_adv_counter", "_group_rotator"]);
        date();
        storage.put("pay_info", "null");
        storage.clearExcept("_adv_counter");
        startAdvert("Index");
        if($("advert_3").innerHTML.length > 0)
        {
            $("advert_5").style.display = "none";
	        advert3 = $("advert_3");
	        moveAdvert();
        }
        else
        {
            if($("advert_5").innerHTML.length > 0)
                $("advert_5").style.display = "block";
        }
        clock();

        attachEventListener('btn_1', 'click', click1);
        new CInnerShadow($('btn_1'), { radius: 32, ellipse: true });

        attachEventListener('btn_2', 'click', click2);
        new CInnerShadow($('btn_2'), { color: 30, radius: 32 });

        attachEventListener('btn_3', 'click', click3);
        new CInnerShadow($('btn_3'), { radius: 32, height: 130 });

        var interval = 180 * 1000;
         setInterval(reloadDocument, interval);
//        if($browser.agent != BWR_UNKNOWN)
//        {
//	        setTimeout(preloadMain, 50);
//	        setInterval(reloadIndex, interval);
//        }
//        else
//        {
//	        setInterval(reloadDocument, interval);
//        }
        $('logo').innerHTML = '<div>' + getFlashDef('./swf/kiwi_logo.swf', true) + '</div>';
};

function reloadDocument()
{
        document.location.reload();
};

//function click1()
//{
//        if($browser.agent != BWR_UNKNOWN)
//        {
//	        showInnerShadow('btn_1');
//	        preloadMain();
//	        $('preload').className = 'active';
//        }
//        else
//        {
//	        onButtonClick(1);
//        }
//};
function click1(){ onButtonClick(1) };
function click2(){ onButtonClick(2) };
function click3(){ onButtonClick(3) };

function reloadIndex()
{
	if(!$('preload') || $('preload').className.indexOf('active') == -1) document.location.reload();
};

function showInnerShadow(id)
{
        if(!canRaphael) $(id).className = 'show';
};

function processEnterSummAdvert() {
        var sIsEnterSummAdvert = escape(storage.get('es_advert'));

        if(parseInt(sIsEnterSummAdvert))
        {
            storage.put('es_advert', '0');
	
            var ff = $('ff');
            ff.appendChild(createInput('prv_id', '323'));
            ff.appendChild(createInput('prv_name', 'Magitel'));
            ff.appendChild(createInput('getAccountNumber', '0000000000'));
            ff.appendChild(createInput('_extra_fake_provider', 'true'));
            ff.appendChild(createInput('_extra_result_int_page', 'index.html'));
            ff.appendChild(createInput('_extra_no_print_check', 'true'));
            ff.appendChild(createInput('_extra_MGT_project_number', unescape(storage.get('es_prj_id'))));
            ff.appendChild(createInput('_extra_MGT_action_number', unescape(storage.get('es_action_number'))));
            ff.appendChild(createInput('_extra_MGT_phone_number', unescape(storage.get('es_phone_number').substr(0).replace(new RegExp("[ ]", "g"), ""))));
            ff.appendChild(createInput('_extra_MGT_summ', unescape(storage.get('es_summ'))));
            ff.action = './index.html';
            ff.submit();
        }
}

function clock(bTimeout) {
    now= new Date();
    hours= now.getHours();
    minutes= now.getMinutes();
    timeStr= "" + hours;
    timeStr+= ((minutes < 10) ? ":0"  : ":") + minutes;
    $("clock").innerHTML = timeStr;
    setTimeout("clock()", 5000);

}

var nMonthNames = ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым', 'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'],
    nDay2Names = ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'];
function date() {
    var nMonth = 1 + dat.getMonth();
    var nDay = dat.getDate();
    var nDay2 = dat.getDay();
    
    $("date").innerHTML = [ 
	        nDay,
	        ' ',
	        nMonthNames[nMonth - 1], 
	        '<br />',
	        '<span style="width: 100%; font-size: 26px; font-weight: normal;">', 
	        nDay2Names[nDay2], 
	        '</span>'
        ].join('');
}

function moveAdvert() {
    if (currentPosY == endPosY)
        flag = true;
    if (currentPosY == startPosY)
        flag = false;
    if (flag)
    {
        advert3.style.top = currentPosY;
        currentPosY--;
    }
    else
    {
        advert3.style.top = currentPosY;
        currentPosY++;
    }
    setTimeout('moveAdvert()', 40);
}    

function onButtonClick(nBtnNum) {
        storage.put("last_page", document.location.href);
        showInnerShadow('btn_'+nBtnNum);
        switch (nBtnNum)
        {
	        case 1:
		        top.location.href = "./main.html";
	        break;
	        case 2:
		        top.location.href = "./embed_flash_mylk.html";
	        break;
	        case 3:
		        /*storage.put("group", "-161");
		        top.location.href = "./pages.html";*/
		        top.location.href = "./bank.html";
	        break;
        }
}

//function preloadMain()
//{
//        if(!$('preload'))
//        {
//    	        var preload = document.createElement('iframe');
//    	        preload.src = "main.html";
//    	        preload.name = "preload";
//    	        preload.id = "preload";
//    	        preload.frameborder = "0";
//    	        preload.scroll = "no";
//    	        document.getElementsByTagName('body')[0].appendChild(preload);
//        }
//} 

function createInput(sName, sValue) {
    var oInput = document.createElement('input');
    oInput.id = oInput.name = sName;
    oInput.type = 'hidden';
    oInput.value = sValue;

    return oInput;
}  	

