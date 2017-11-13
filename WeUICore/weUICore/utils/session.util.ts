import { Injectable } from '@angular/core';

/**
 * 이 클래스는 세션정보를 관리하기 위한 클래스이다.
 * 이 클래스는 각 컴포넌트에서 utils를 통합하고있는 utils.module를 "* as weUICore"의 명칭으로 import 한 후 
 * 사용할 메소드에서 weUICore.SessionUtil.methodName()을 통해 사용할 수 있다.
 *
 * @version     1.0.0 2017/09/13
 * @author      강준성(jskang)
 * @since       2017/09/13
 */
@Injectable()
export class SessionUtil {

    /**
     * @see 세션 정보 얻어오기
     * @param key key: 세션 키 값
     * @return key에 해당하는 세션 정보
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    static getSession(key: string) {
        return sessionStorage.getItem(key);
    }

    /**
     * @see 선택된 세션 지우기
     * @param key key: 세션 키 값
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    static removeSession(key: string) {
        sessionStorage.removeItem(key);
    }

    /**
     * @see 세션 등록하기
     * @param key key: 세션 키 값
     * @param value value: 세션 정보
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    static setSession(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }

    /**
     * @see 세션 모두 지우기
     * @author 강준성(jskang)
     * @since 2017/09/13
     */
    static clearSession(): void {
        sessionStorage.clear();
    }
}