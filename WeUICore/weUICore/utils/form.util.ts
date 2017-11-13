import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as weUICoreUtils from "../utils.module";

@Injectable()
export class FormUtil  {

    /**
     * @see 특정 Input 폼의 value 값 추출하기
     * @param obj Input form 오브젝트
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    static getData(obj: any){
        return obj.nativeElement.value;
    }
    
    /**
     * @see 특정 Input 폼에 value 값 입력하기
     * @param obj Input form 오브젝트
     * @param data 입력할 value 값
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    static setData(obj: any, data: String){
        obj.nativeElement.value = data;
    }

    /**
     * @see 특정 Input 폼에 value 필수 값 입력 체크
     * @param obj 필수 값 체크할 input 폼
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    static validateCheck(obj: any){
        if(!obj.nativeElement.value){
            return false;
        } else {
            return true;
        }
    }

    /**
     * @see FormGroup으로 묶여있는 Form을 한꺼번에 입력
     * @param obj 입력시킬 FormGroup
     * @param data 입력할 Json 구조 데이터 // null=초기화
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    static setFormGroup(obj: FormGroup, data: Object){
        var setObj: Object = {};
        
        if(data != null) { //null을 입력하지 않은 경우
            for(let field in data){
                if(field.toLocaleLowerCase().indexOf("time") != -1){
                    setObj[field.toString()] = new Date(data[field]);
                } else {
                    setObj[field.toString()] = data[field];
                }
            }
        } else { //null 입력한 경우에는 값 초기화
            for(let field in obj.value){
                setObj[field.toString()] = null;
            }
        }
        
        obj.setValue(setObj);
    }

    /**
     * @see FormGroup으로 묶여있는 Form의 데이터 추출
     * @param obj 추출해올 FormGroup
     * @author 강준성(jskang)
     * @since 2017/09/24
     */
    static getFormGroup(obj: FormGroup){
        return obj.value;
    }
}