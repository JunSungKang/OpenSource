import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
    
    /**
     * @see- 해당하는 특정 field값에 대한 Value를 배열로 변환
     * @param data 전체 Json 데이터
     * @param field 변환할 키 값
     * @return field에 해당하는 배열
     * @author jskang
     * @since 20170905
     */
    getFieldValueList(data: Object[], field: String){
        let rst: Object[] = [];

        for(let i in data){
            rst.push(data[i][field.toString()]);
        }
        return rst;
    }

    /**
     * @see- 해당하는 여러개의 Key값에 대한 Value들을 새로운 Json에 각각의 Key값의 배열로 변환
     * @param data 전체 Json 데이터
     * @param filter 변환할 여러개의 키 배열
     * @return 각 key에 해당하는 Json 배열
     * @author jskang
     * @since 20170905
     */
    fieldByCreateJson(data: Object[], filter: any){
        let rst: Object[] = [];

        for(let i in data){
            var json: Object = {};
            for(let j in filter){
				if(data[i][filter[j]]){
                    json[filter[j]] = data[i][filter[j]];
                }
            }
            rst.push(json);
        }
        return rst;
    }

    /**
     * @see- 해당하는 field에 대한 모든 값 가져오기
     * @param data 전체 Json 데이터
     * @param field 가져올 value의 키 값
     * @return field에 해당하는 값
     * @author jskang
     * @since 20170905
     */
    getKeyToValue(data: Object[], field: String){
        let rst: any = undefined;

        for(let i in data){
            if(i == field){ rst = data[i]; break; }
        }
        return rst;
    }

    /**
     * @see- 배열의 중복데이터 체크
     * @param data 전체 배열 데이터
     * @param value 가져올 value의 키 값
     * @return 중복인 경우 true 반환
     * @author jskang
     * @since 20170905
     */
    isUnique(data: Object[], value: String){
        for(let i in data){
            if(data[i] == value){ 
                return true;
            }
        }
        return false;
    }

    /**
     * @see- 특정 필드 널 값 체크
     * @param data Json 1 Row 데이터
     * @param field 확인하고 싶은 field 명
     * @return 값이 존재하는 경우 true 반환, 존재하지 않는 경우 false 반환
     * @author jskang
     * @since 20170921
     */
    jsonFieldIsNull(data: Object, field: String){
        if(!data[field.toString()]) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @see- field명 전부 소문자로 변환
     * @param data 변환할 Json 배열 데이터
     * @return field명을 전부 소문자로 변환
     * @author jskang
     * @since 20170921
     */
    jsonFieldTranslateLower(data: Object[]){
        let rst: Object[] = [];

        for(let array in data){
            var map: Object = {};
            for(let field in data[array]){
                map[field.toLowerCase()] = data[array][field];
            }
            rst.push(map);
        }

        return rst;
    }

    /**
     * @see- field명 전부 대문자로 변환
     * @param data 변환할 Json 배열 데이터
     * @return field명을 전부 대문자로 변환
     * @author jskang
     * @since 20170921
     */
    jsonFieldTranslateUpper(data: Object[]){
        let rst: Object[] = [];
        
        for(let array in data){
            var map: Object = {};
            for(let field in data[array]){
                map[field.toUpperCase()] = data[array][field];
            }
            rst.push(map);
        }

        return rst;
    }

    /**
     * @see- 데이터 배열을 특정 field 명으로 된 Json으로 변환
     * @param data 변환할 배열 데이터
     * @return 새로 구성 된 Json 배열 [{field: data.value}, ...]
     * @author jskang
     * @since 20170921
     */
    listToJson(data: Object[], fieldName: String){
        let rst: Object[] = [];
        let i: Number = 0;
        
        data.forEach(element=>{
            let map: Object = {};
            map[fieldName.toString()] = element;
            rst.push(map);
        });

        return rst;
    }

    /**
     * @see- Json에서 추출한 field 명을 배열로 묶음
     * @param data field를 추출할 Json 데이터
     * @return field명으로 구성된 배열
     * @author jskang
     * @since 20170921
     */
    findByAllField(data: Object[]){
        let rst: Object[] = [];

        for(let array in data){
            var map: Object = {};
            for(let field in data[array]){
                rst.push(field);
            }
        }

        return rst;
    }
        
    /**
     * @see- Json에 새로운 field를 추가
     * @param data 삽입할 원본 Json
     * @param addData 삽입할 데이터
     * @return 삽입이 완료된 Json 데이터
     * @author jskang
     * @since 20170921
     */
    addJsonField(data: Object, addData: Object){
        for(let value in addData){
            data[value] = addData[value];
        }
        
        return data;
    }

    /**
     * @see- Json 배열에 새로운 Row를 추가
     * @param data 삽입할 원본 Json 배열
     * @param addData 삽입할 Row 데이터
     * @return 삽입이 완료된 Json 배열 데이터
     * @author jskang
     * @since 20170922
     */
    addJsonRowData(data: Object[], addData: Object){
        data.push(addData);
        return data;
    }

    /**
     * @see- Json value 값에 공백 또는 Null, Undefined가 있는지 체크
     * @param data 체크할 Json
     * @return 공백, Null, Undefined가 있는 경우 false 반환/ 없는 경우 true 반환
     * @author jskang
     * @since 20170921
     */
    jsonIsRequired(data: Object){
        for(let value in data){
            if(!data[value]){
                return false;
            }
        }
        
        return true;
    }

    /**
     * @see- key 필드로 묶여있는 데이터를 key 필드가 없는 구조로 변환
     * @param data key 필드를 제거할 Json
     * @return Key 필드가 제거되고 내부에 있던 값을 꺼내온 데이터
     * @author jskang
     * @since 20170929
     */
    jsonKeyTakeOut(data: Object){
        let keyField: Object[] = [];
        for(let i in data["key"]){
            keyField.push(i);
        }

        for(let i=0; i<keyField.length; i++){
            data[keyField[i].toString()] = data["key"][keyField[i].toString()];
        }
        delete data["key"];
        return data;
    }
}