import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as weUICoreUtils from '../utils.module';

/**
 * 이 클래스는 http통신을 할 때 이벤트를 발생시킨 사람의 내역을 남기기위해 사용되는 클래스이다.
 * 각 컴포넌트에서 사용되지 않으며 http통신을 보낼 때 함께 보내지는 것으로 히스토리를 남길 수 있다.
 *
 * @version     1.0.0 2017/09/13
 * @author      강준성(jskang)
 * @since       2017/09/13
 */
class Event {
    constructor() { };
    LastEventId: String;
    LastEventPerson: String;
    LastEventTime: Date;
    LastEventComment: String;
}

/**
 * 이 클래스는 각 컴포넌트에서 Restful로 http통신을 간단하게 사용하기 위한 클래스이다.
 * 이 클래스는 각 컴포넌트에서 utils를 통합하고있는 utils.module를 "* as weUICore"의 명칭으로 import 한 후 
 * 사용할 메소드에서 weUICore.HttpUtil.methodName()을 통해 사용할 수 있다.
 *
 * @version     1.0.0 2017/09/13
 * @author      강준성(jskang)
 * @since       2017/09/13
 */
@Injectable()
export class HttpUtil extends Event {

    constructor(private http: Http) {
        super();
    }
    baseURL: string = "http://127.0.0.1:8080/";
    event: Event = new Event();

    /**
     * @see 공통 URL 세팅
     * @param url 앞부분에 들어가는 공통 URL
     * @since 2017/10/10
     * @author jskang
     */
    setURL(url: string) { this.baseURL = url; }

    /**
     * @see URL 불러오기
     * @since 2017/10/10
     * @author jskang
     */
    getURL() { return this.baseURL; }

    /**
     * @see LastEvent 컬럼 세팅
     * @param eventName eventName: 이벤트 이름
     * @param eventUser eventUser: 이벤트 발생한 유저
     * @param eventComment eventComment: 이벤트 특이사항
     * @since 2017/09/13
     * @author jskang
     */
    setLastEventInfo(LastEventId: string, LastEventPerson: string, LastEventTime: Date, LastEventComment: string) {
        this.event.LastEventId = LastEventId;
        this.event.LastEventPerson = LastEventPerson;
        this.event.LastEventTime = LastEventTime;
        this.event.LastEventComment = LastEventComment;
    }

    /**
     * @see LastEvent 컬럼 불러오기
     * @returns EventInfo 저장된 정보 반환
     * @since 2017/09/13
     * @author jskang
     */
    getLastEventInfo() {
        return this.event;
    }

    /**
     * @see http GET 통신
     * @param url Server URL/value
     * @since 2017/09/13
     * @author jskang
     */
    get(url: string): Promise<{ data: any }> {
        return new Promise((resolve) => {

            let headers = new Headers();
            headers.append("Content-Type", "application/json")

            this.http.get(url)
                //.map(response=>response.json())
                .subscribe(
                data => { resolve({ "data": JSON.parse(data["_body"]), "status": 200, "statusText": "Success" }); },
                error => { resolve({ "data": error, "status": error.status, "statusText": error.statusText }); }
                )

        });
    }

    /**
     * @see http POST 통신
     * @param url Server URL/value
     * @param param Server에 함께 보낼 Json 배열 데이터
     * @since 2017/09/13
     * @author jskang
     */
    post(url: string, param: any): Promise<{ data: any }> {
        return new Promise((resolve) => {

            let headers = new Headers();
            headers.append("Content-Type", "application/json")

            this.http.post(url, param)
                //.map(response=>response.json())
                .subscribe(
                data => { resolve({ "data": JSON.parse(data["_body"]), "status": 200, "statusText": "Success" }); },
                error => { resolve({ "data": error, "status": error.status, "statusText": error.statusText }); }
                )

        });
    }

    /**
     * @see http PUT 통신
     * @param url Server URL/value
     * @param param Server에 함께 보낼 Json 배열 데이터
     * @since 2017/09/13
     * @author jskang
     */
    put(url: string, param: any): Promise<{ data: any }> {
        return new Promise((resolve) => {

            let headers = new Headers();
            headers.append("Content-Type", "application/json")

            this.http.put(url, param)
                //.map(response=>response.json())
                .subscribe(
                data => { resolve({ "data": JSON.parse(data["_body"]), "status": 200, "statusText": "Success Data" }); },
                error => { resolve({ "data": error, "status": error.status, "statusText": error.statusText }); }
                )

        });
    }

    /**
     * @see http DELETE 통신
     * @param url Server URL/value
     * @since 2017/09/13
     * @author jskang
     */
    delete(url: string): Promise<{ data: any }> {
        return new Promise((resolve) => {

            let headers = new Headers();
            headers.append("Content-Type", "application/json")

            this.http.delete(url)
                //.map(response=>response.json())
                .subscribe(
                data => { resolve({ "data": JSON.parse(data["_body"]), "status": 200, "statusText": "Success" }); },
                error => { resolve({ "data": error, "status": error.status, "statusText": error.statusText }); }
                )

        });
    }

}