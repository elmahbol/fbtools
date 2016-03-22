 var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/feed/filter_action/nfx_action_execute?__pc=EXP1%3ADEFAULT&dpr=1";
  var XParams = "&confirmed=1&action_name=UNSUBSCRIBE&context=%7B%22breadcrumbs%22%3A[%22scam%22]%2C%22story_location%22%3A%22page%22%2C%22is_from_feed_tombstone%22%3Afalse%2C%22actions_taken%22%3A%22%22%2C%22reportable_ent_token%22%3A%22289226391273473%22%2C%22is_impostor%22%3A%22%22%7D&av="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&__dyn=aKTyAW8-aloAwmgDDzbHaF8x9xq9AGUZz8-8mAdyemkyrWqGmcXmnxnCWyWGaxuifhKagByAp2WCGq5aykfCK49FGwwz8KFUgCkwy48G5WAzHBApuVWxeUlAzV-ElDgSuuazF9VQimmu6rCz9qBh8Cmexvz8-cx2qt38x5GUOeiyE&__req=p&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"&ttstamp=&__rev=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
