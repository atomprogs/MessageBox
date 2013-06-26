// MessageBox V1.0 By Rajeev Ranjan
/* This Message Box is Opensource any one can modify this code according to their requirement */
/* Please vist me http://www.hackme.co.vu */

// declaration of variables
var bgClass = "mbackground";
$(function () {
    /* To Show MessageBox Using ESC*/
    $addHandler(document, "keydown", onKeyDown);
    $('.notification').hover(function () {
        $(this).css('cursor', 'pointer');
    }, function () {
        $(this).css('cursor', 'auto');
    });


});


/* To Change Class */
function addClass(eleID) {
    $('#' + eleID).addClass('buttonhover');
}
function MessageBox(mType, mMessage) {
    var Tlen = $('.' + bgClass).length;
    var Clen = $('.CenterSUC').length;

    var b = $.browser.version.substring(0, 1);
    //alert(b);
    if ($.browser.msie && $.browser.version.substring(0, 1) == "6") {
        //alert($.browser.version.substring(0, 1));
        bgClass = "mbackgroundIE";
    }
    if (Tlen <= 0 && Clen <= 0) {
        var content = '<div class=' + bgClass + ' style="display:none;"></div>';
        content += ' <div class="CenterSUC" style="height: 60px; width: 60px;" id="sucessMsg">';
        content += '<div id="nm" style="display: none;" > <div class="text">  <div class="pUpperBox"> </div></div></div></div>';

        $('body').append(content);
        $('.' + bgClass).show();
        $('#nm').addClass(SelectMessageBoxType(mType));
        $('.pUpperBox').html("");
        if (mType.toUpperCase() == "ALERT") {
            $('.pUpperBox').prepend(' <table style="width: 100%; margin: 0px 45px auto;"> <tbody><tr> <td align="left" valign="top"><img alt="' + mType.toUpperCase() + '" src="images/MessageBox/' + mType.toUpperCase() + '.png" /> </td><td><table ><tr> <td colspan="2" align="right" valign="bottom" class="pLowerBox">' + mMessage + '.</td> </tr> <tr style="height: 40px;"> <td  align="right" valign="bottom"> <input id="btnClose" type="button" class="button" onclick="return alertCancel();" style="margin-right:30px;" class="button" value="ok" /><input id="btnCancel" type="button" class="button" onclick="return alertCancel();" style="margin-right:20px;" value="cancel" /></td> </tr></table></td></tr></tbody></table>')
        }
        else {
            $('.pUpperBox').prepend('<table style="width: 100%; margin: 0px 45px auto;"> <tbody><tr> <td align="left" valign="top"><img alt="' + mType.toUpperCase() + '" src="images/MessageBox/' + mType.toUpperCase() + '.png" /> </td><td><table ><tr> <td colspan="2" align="right" valign="bottom" class="pLowerBox">' + mMessage + '.</td> </tr> <tr style="height: 40px;"> <td  align="right" valign="bottom"><input id="btnClosenm" type="button" class="button"  onclick="hidenotificationmessage()" value="ok"  style="margin-right:20px;" /></td></tr></table></td></tr></tbody></table>')

        }
        if ($.browser.msie && $.browser.version.substring(0, 1) == "6") {
            //  alert(bgClass);
            //$('#tbAlert').css('margin-left','35px');

            $('.' + bgClass).bgiframe();
        }
        $('#nm').fadeIn(200);
    }

}
/* To Hide MessageBox Using ESC*/
function onKeyDown(e) {
    if (e && e.keyCode == Sys.UI.Key.esc) {
        // if the key pressed is the escape key, dismiss the dialog
        var options = {};
        $('#nm').effect('clip', options, 400);
        $('.' + bgClass).hide();
        setTimeout(function () {
            $('.' + bgClass).remove(); $('.CenterSUC').remove();
        }, 420);

    }
}
/* To Hide MessageBox Using Button*/
function hidenotificationmessage() {
    // most effect types need no options passed by default
    var options = {};
    $('#nm').effect('clip', options, 400);
    $('.' + bgClass).hide();
    setTimeout(function () {
        $('.' + bgClass).remove(); $('.CenterSUC').remove();
    }, 420);

}
/* To Select MessageBox Type*/
function SelectMessageBoxType(mType) {

    if (mType.toUpperCase() == "SUCCESS") {
        return "messageBox msuccess";
    }
    else if (mType.toUpperCase() == "ERROR") {
        return "messageBox merror";
    }
    else if (mType.toUpperCase() == "INFO") {
        return "messageBox minfo";
    }
    else if (mType.toUpperCase() == "ALERT") {
        return "messageBox malert";
    }
}

/* MessageBox Alert Ok Click */
function alertOK() {
    hidenotificationmessage();
    return true;
}
/* MessageBox Alert Cancel Click */
function alertCancel() {
    hidenotificationmessage();
    return false;
}

