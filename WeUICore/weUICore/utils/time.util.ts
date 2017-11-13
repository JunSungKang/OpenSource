import { Injectable } from '@angular/core';
import { isNumeric } from "@angular/common/src/pipes/number_pipe";
import { isDate, isNumber } from "util";
import { forEach } from "@angular/router/src/utils/collection";

import * as moment from 'moment';

/**
 * 이 클래스는 Date 복잡한 로직을 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 moment 라이브러리를 일부 활용되었습니다.
 * 이 클래스는 각 컴포넌트에서 utils를 통합하고있는 utils.module를 "* as weUICore"의 명칭으로 import 한 후 
 * 사용할 메소드에서 weUICore.TimeUtil.methodName()을 통해 사용할 수 있다.
 *
 * @version     1.0.0 2017/09/24
 * @author      강준성(jskang)
 * @since       2017/09/24
 */
@Injectable()
export class TimeUtil {
  /*
   * 날짜 관련 코드 정의
   */

  /**@see 원하는 포맷으로 현재 날짜를 얻어옴
    * @param format 날짜형식
    * @return 현재 날짜
    * @since 2017/09/24
    * @author 강준성(jskang) */
  static getToday(format: string) {
    return moment(new Date()).format(format);
  }

  /**@see 날짜를 원하는 포맷으로 변환
    * @param format 날짜형식
    * @return 원하는 포맷으로 변환
    * @since 2017/09/24
    * @author 강준성(jskang) */
  static getFromFormat(date: Date, format: string){
    return moment(date).format(format);
  }

  /**@see 원하는 몇일 전 날짜를 알려줌
    * @param unit "Year": 몇 년전?, "Month": 몇 달전?, "Day": 몇 일전?
    * @return 현재 날짜
    * @since 2017/09/24
    * @author 강준성(jskang) */
  static getBeforeday = function(unit: string, value: number, format: string){
     if(!format){
        format = "yyyy/MM/dd";
     }
     var date = new Date();

     if(unit == "Year"){
        date.setFullYear(date.getFullYear() - value.valueOf());
     }else if(unit == "Month"){
        date.setMonth(date.getMonth() - value.valueOf());
     }else if(unit == "Day"){
        date.setDate(date.getDate() - value.valueOf());
     }
     return this.getFromFormat(date, format);
  }

  /**@see 날짜형식의 문자열을 Tiemstamp로 변환
    * @param value 날짜 형식
    * @return Timestamp형식 ex)1564651321415 
    * @author YcBak */
  static getTimestamp = function (value: any) {
    var rslt;
    if (value.length == 8) {
      rslt = new Date(value.substring(0, 4), value.substring(4, 6) - 1, value.substring(6)).getTime();
    } else {
      rslt = new Date(Date.parse(value)).getTime();
    }
    return rslt;

  }

  /**@see 시작날짜와 마지막날짜가 몇일차이인지 계산
    * @param val1 시작 날짜(ex. 2017/09/15등 10자로 된 날짜 포맷)
   * @param val2 끝나는 날짜(ex. 2017/09/15등 10자로 된 날짜 포맷)
    * @return 시작과 마지막 날짜의 일수 계산
    * @since 2017/09/24
    * @author 강준성(jskang) */
  static calDateRange = function (val1: any, val2: any) {
    // FORMAT을 포함한 길이 체크
    if (val1.length != 10 || val2.length != 10) {
      return {"error": "function calDateRange(), Date format error."};
    }
    // 년도, 월, 일로 분리
    let start_dt: any = [
      Number.parseInt(val1.substring(0, 4)), val1.substring(5, 7) - 1, Number.parseInt(val1.substring(8))
    ]
    let end_dt: any = [
      Number.parseInt(val2.substring(0, 4)), val2.substring(5, 7) - 1, Number.parseInt(val2.substring(8))
    ]
    // 월 - 1(월이 0부터 시작하기 때문에...)
    // Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
    start_dt[1] = (Number(start_dt[1]) - 1) + "";
    end_dt[1] = (Number(end_dt[1]) - 1) + "";

    var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
    var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);

    return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24; // 1000 / 60 / 60 / 24;
  }

  /**@see 날짜형식의 String인지 체크, 아닐 경우 false을 반환
    * @param dateVal 날짜형식 ex)"2017/07/15" 등
   * @return 날짜인 경우 true, 날짜가 아닌 경우 false
    * @author YcBak */
  static isDate = function (dateVal: string) {
    var rslt = true;
    if (new Date(Date.parse(dateVal)).toString() == "Invalid Date") {
      rslt = false;
    }
    return rslt;
  }

  /**@see value값이 type에서 지정한 날짜형식에 맞으면 true반환
    * @param value ex)"2017-07-15", "14:30:06", "2001-09-09 14:30:06"
   * @param type date, time, all
   * @return 날짜 형식인 경우 true, 날짜 형식이 아닌 경우 false
    * @author YcBak */
  static isDateTypeByString = function (value: string, type: string) {
    var validateTimeFormat = null;
    if (type == "date") {
      validateTimeFormat = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    } else if (type == "time") {
      validateTimeFormat = /^([1-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/;
    }
    /*시간 지정 안할경우 */
    else if (type == "all" && value.length < 11) {
      validateTimeFormat = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
    } else {
      validateTimeFormat = /^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/;
    }
    return validateTimeFormat.test(value);
  }

  // //돌아갈꺼같긴한데 데이터값을 몰라서 결과값을 확인 못했어요.
  //    static isDateTypeByList = function(data,List,type,form){

  //        var returnJson = {check: true , field : ""};
  //        var validateTimeFormat = null;

  //        if(type == "date"){
  //           validateTimeFormat = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  //        }else if(type == "time"){
  //           validateTimeFormat =  /^(0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  //        }else{
  //           validateTimeFormat = /^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  //        }

  //        if(form){
  //           List = ["fromDate","toDate"];
  //           validateTimeFormat = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  //        }

  //       for(var i in List){
  //          var dateField = List[i];
  //    data.forEach(data => function(value,key){
  //             if(key == dateField){
  //                if(value != "" && value != null){

  //                   if(type == "all"){
  //                      if(value.length < 11){
  //                         //console.log(value +"==" +value.length )
  //                         validateTimeFormat = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  //                      }else{
  //                         validateTimeFormat = /^\d{4}-(0[1-9]|1[0-2])-([0-2]\d|3[01]) (0\d|1\d|2[0-3]):[0-5]\d:[0-5]\d$/;
  //                      }
  //                   }
  //                   //console.log("---"+key + "--"+value+"--" + validateTimeFormat);
  //                   if(!validateTimeFormat.test(value)){
  //                      returnJson.check = false;
  //                      returnJson.field = key;
  //                   }
  //                }
  //             }
  //          });
  //          if(!returnJson.check){
  //             break;
  //          }
  //       }      
  //       return returnJson;
  //    }
}