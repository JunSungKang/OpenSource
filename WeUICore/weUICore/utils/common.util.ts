import { Injectable } from '@angular/core';
import { NotificationService } from "mes/shared/utils/notification.service";

/**
 * 이 클래스는 여러가지 자주 사용하는 메소드들을 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 notificationService 및 인코딩 라이브러리가 일부 활용되었습니다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'CommonUtil'을 생성자 선언을 통해 사용할 수 있다.
 *
 * @version     1.0.0 2017/09/24
 * @author      강준성(jskang)
 * @since       2017/09/24
 */
@Injectable()
export class CommonUtil {
    private notificationService: NotificationService = new NotificationService();
    private _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    private SUCCESS = "SUCCESS";
    private ERROR = "ERROR";
    private WARNING = "WARNING";
    private INFO = "INFO";

    /**
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @param color color: 알림창 배경색
     * @param icon icon: 알림 아이콘
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    private smallBox(title, content, color, icon) {
        this.notificationService.smallBox({
            title: title,
            content: content,
            color: color,
            timeout: 3000,
            icon: "fa fa-" + icon
        });
    }
    
    /**
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @param color color: 알림창 배경색
     * @param icon icon: 알림 아이콘
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    private bigBox(title, content, color, icon) {
        this.notificationService.bigBox({
            title: title,
            content: content,
            color: color,
            timeout: 3000,
            icon: "fa fa-" + icon
        })
    }

    /**
     * @see 전체화면 예/아니오 박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @param fs "Yes" 버튼 눌렀을 때 function
     * @param ff "No" 버튼 눌렀을 때 function
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    MessageConfirmFullScreen(title, content, fs, ff) {
        this.notificationService.smartMessageBox({
            title: title,
            content: content,
            buttons: '[No][Yes]'
        }, (ButtonPressed) => {
            if (ButtonPressed == "Yes") {
                fs();
            } else if (ButtonPressed == "No") {
                ff();
            }
        });
    }

    /**
     * @see 화면 우측 상단 작은 메세지 성공박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    smallMessageBoxSuccess(content) { this.smallBox(this.SUCCESS, content, "#21610B", "check-circle"); }

    /**
     * @see 화면 우측 상단 작은 메세지 에러박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    smallMessageBoxError(content) { this.smallBox(this.ERROR, content, "#8A0808", "exclamation-circle"); }

    /**
     * @see 화면 우측 상단 작은 메세지 경고박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    smallMessageBoxWarning(content) { this.smallBox(this.WARNING, content, "#B45F04", "exclamation-triangle"); }

    /**
     * @see 화면 우측 상단 작은 메세지 정보박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    smallMessageBoxInfo(content) { this.smallBox(this.INFO, content, "#086A87", "info-circle"); }

    /**
     * @see 화면 우측 하단 큰 메세지 성공박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    bigMessageBoxSuccess(content) { this.bigBox(this.SUCCESS, content, "#21610B", "check-circle"); }

    /**
     * @see 화면 우측 하단 큰 메세지 에러박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    bigMessageBoxError(content) { this.bigBox(this.ERROR, content, "#8A0808", "exclamation-circle"); }

    /**
     * @see 화면 우측 하단 큰 메세지 경고박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    bigMessageBoxWarning(content) { this.bigBox(this.WARNING, content, "#B45F04", "exclamation-triangle"); }

    /**
     * @see 화면 우측 하단 큰 메세지 정보박스
     * @param title title: 알림창 제목
     * @param content content: 상세 설명
     * @since 2017/09/13
     * @author 강준성(jskang)
     */
    bigMessageBoxInfo(content) { this.bigBox(this.INFO, content, "#086A87", "info-circle"); }

    /**
     * @see 랜덤숫자 생성하기
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    random() { return Math.random()*10000000000000000; }
    
    /**
     * @see Base64로 인코딩
     * @param input input: 원본 문자열
     * @returns Base64로 변환된 값
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    Base64Encode(input){
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
  
      input = this.UTF8Encode(input);
  
      while (i < input.length) {
  
          chr1 = input.charCodeAt(i++);
          chr2 = input.charCodeAt(i++);
          chr3 = input.charCodeAt(i++);
  
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
          enc4 = chr3 & 63;
  
          if (isNaN(chr2)) {
              enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
              enc4 = 64;
          }
  
          output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
  
      }
  
      return output;
    }
  
    /**
     * @see Base64로된 문자열을 디코딩
     * @param base64text base64text: Base64로 변환된 값
     * @returns 원본 문자열
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    Base64Decode(base64text){
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
  
      base64text = base64text.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  
      while (i < base64text.length) {
  
          enc1 = this._keyStr.indexOf(base64text.charAt(i++));
          enc2 = this._keyStr.indexOf(base64text.charAt(i++));
          enc3 = this._keyStr.indexOf(base64text.charAt(i++));
          enc4 = this._keyStr.indexOf(base64text.charAt(i++));
  
          chr1 = (enc1 << 2) | (enc2 >> 4);
          chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
          chr3 = ((enc3 & 3) << 6) | enc4;
  
          output = output + String.fromCharCode(chr1);
  
          if (enc3 != 64) {
              output = output + String.fromCharCode(chr2);
          }
          if (enc4 != 64) {
              output = output + String.fromCharCode(chr3);
          }
  
      }
  
      output = this.UTF8Decode(output);
  
      return output;
    }
  
    /**
     * @see UTF8로 인코딩
     * @param string string: 원본 문자열
     * @returns UTF8로 변환된 값
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    UTF8Encode(string: string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";
  
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        }
        else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
  
      return utftext;
    }
  
    /**
     * @see UTF8로 인코딩된 문자열을 디코딩
     * @param utftext utftext: UTF8로 변환된 값
     * @returns 원본 문자열
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    UTF8Decode(utftext: string) {
      var string = "";
      var i=0;
      var c=0, c1=0, c2=0, c3=0;
  
      while (i < utftext.length) {
  
          c = utftext.charCodeAt(i);
  
          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if ((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i + 1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i + 1);
              c3 = utftext.charCodeAt(i + 2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }
  
      }
  
      return string;
    }
}