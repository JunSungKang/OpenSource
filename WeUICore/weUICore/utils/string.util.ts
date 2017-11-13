import { Injectable } from "@angular/core";
import { isNumber } from "util";

/**
 * 이 클래스는 각 컴포넌트에서 String값들을 간단하게 처리하기 위한 클래스이다.
 * 대표적으로 널값체크, 문자열변환등이 있다.
 * 이 클래스는 각 컴포넌트에서 utils를 통합하고있는 utils.module를 "* as weUICore"의 명칭으로 import 한 후 
 * 사용할 메소드에서 weUICore.StringUtil.methodName()을 통해 사용할 수 있다.
 *
 * @version     1.0.0 2017/09/15
 * @author      박유찬(YcBak)
 * @since       2017/09/15
 */
@Injectable()
export class StringUtil {
    private static SUCCESS = "Success";
    private static FAIL = "Fail";
    private static ERROR = "Error";

    static $SUCCESS(){ return this.SUCCESS; }
    static $FAIL(){ return this.FAIL; }
    static $ERROR(){ return this.ERROR; }

    /**@see 값이 숫자일 경우 true반환
     * @param value value: 판별하고싶은 값
     * @return true/false
     * @author YcBak */
    static isNumber(value: string) {
        return isNumber(value);
    }

    /**@see 앞,뒤 공백을 제거
      * @param value value: 공백을 제거할 값
      * @return 앞,뒤 공백이 제거된 value값
      * @author YcBak */
    static trim(value: string) {
        return value.trim();
    }

    /**@see 해당 값이 비어있으면 true를 반환
      * @param value 비어있는지 판별할 값
      * @return true/false
      * @author YcBak */
    static isEmpty(value: any) {
        if (value == ""
            || value == null
            || value == undefined
            || (value != null && typeof value == "object" && !Object.keys(value).length)) {
            return true;
        } else {
            return false;
        }
    };

    /**@see 전체문자열에서 특정 문자값을 원하는 문자값으로 치환
      * @param orgValue orgValue: 전체 문자열
     * @param newValue newValue: 새로 넣을 문자값
     * @param searchValue searchValue: 바꿔야할 문자값
      * @return 일부값이 변경된 orgValue
      * @author YcBak */
    static replace(orgValue: string, searchValue: string, newValue: string) {
        return orgValue.replace(searchValue, newValue);
    }

    /**@see 원하는 초과된 n자리수 만큼 앞에 0을 붙임
      * @param n n: 대상값
     * @param digits digits: 앞에 늘리고자 하는 자리수
      * @return 자리수만큼 앞에 0이붙은 n값
      * @author YcBak */
    static leadingZeros(n: string, digits: any) {
        var zero = '';
        n = n;

        if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    }
}