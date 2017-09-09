import { SecurityInterface } from './security.interface';
import { AES_Function } from './AES/security.aes';

export class Security implements SecurityInterface {
    private AES = new AES_Function();
    private base64Key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    Base64Encode(data) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        data = this.Utf8Encode(data);

        while (i < data.length) {

            chr1 = data.charCodeAt(i++);
            chr2 = data.charCodeAt(i++);
            chr3 = data.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) { enc3 = enc4 = 64; }
            else if (isNaN(chr3)) { enc4 = 64; }

            output = output +
                this.base64Key.charAt(enc1) +
                this.base64Key.charAt(enc2) +
                this.base64Key.charAt(enc3) +
                this.base64Key.charAt(enc4);

        }
        return output;
    }

    Base64Decode(data) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        data = data.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < data.length) {
            enc1 = this.base64Key.indexOf(data.charAt(i++));
            enc2 = this.base64Key.indexOf(data.charAt(i++));
            enc3 = this.base64Key.indexOf(data.charAt(i++));
            enc4 = this.base64Key.indexOf(data.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            } if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = this.Utf8Decode(output);
        return output;
    }

    Utf8Encode(data) {
        data = data.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < data.length; n++) {
            var c = data.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }

        return utftext;
    }

    Utf8Decode(data) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0, c3 = 0;

        while (i < data.length) {
            c = data.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = data.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = data.charCodeAt(i + 1);
                c3 = data.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return string;
    }
    
    AESEncode(data){
        return this.AES.SubBytes(data);
    }

    AESDecode(data){
        return this.AES.InvSubBytes(this.AES.SubBytes(data));
    }
    
}