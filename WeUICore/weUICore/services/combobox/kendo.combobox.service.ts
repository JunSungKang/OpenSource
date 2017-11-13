import { Injectable } from '@angular/core';
import { ComboBoxService } from './_combobox.service';

/**
 * 이 클래스는 kendoComboBox를 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 KendoComboBox의 특정 오브젝트를 가지고 ComboBox의 이벤트 역할을 수행한다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'KendoComboBoxService'를 생성자 선언을 통해 사용할 수 있다.
 * 또한 이 클래스는 KendoComboBox에 특화되어있으므로 다른 ComboBox와 혼용되어 사용하지 않도록 주의한다.
 *
 * @version     1.0.0 2017/09/13
 * @author      강준성(jskang)
 * @since       2017/09/13
 */
@Injectable()
export class KendoComboBoxService implements ComboBoxService {
    
    /**
     * @see 배열을 콤보박스 구조에 맞도록 변환
     * @param arrayData 콤보박스에 들어갈 배열 데이터
     * @returns [{"text": "Barcode_011", "value": "1011001010111"}, ...]
     * @author 강준성(jskang)
     */
    ArrayToComboBoxData(arrayData: Object[]) {
        let comboBoxData: Object = {};

        arrayData.forEach(element => {
            comboBoxData["text"] = element;
            comboBoxData["value"] = element;
        });

        return comboBoxData;
    }

    /**
     * @see 콤보박스를 특정 text를 선택, 값이 없어도 text는 변경됨 (textField, valueField 사용했을때만 사용가능)
     * @param obj ComboBox 오브젝트
     * @param text 선택할 값 (브라우저에 보여지는 text 값)
     * @author 강준성(jskang)
     */
    TextSelect(obj: any, text: String) {
        obj.text = text;
    }

    /**
     * @see 콤보박스를 특정 text를 선택, 값이 없어도 text는 변경됨 (textField, valueField 사용했을때만 사용가능)
     * @param obj ComboBox 오브젝트
     * @param value 선택할 값 (브라우저에 보이지 않는 value 값)
     * @author 강준성(jskang)
     */
    ValueSelect(obj: any, value: String) {
        let data = obj._data;
        let rst: Object;

        data.forEach(element => {
            if(value == element.value){
                rst = element;
            }
        });
    }

    /**
     * @see 콤보박스에 현재 선택된 value 값을 불러옴
     * @param obj ComboBox 오브젝트
     * @author 강준성(jskang)
     * @returns ComboBox에 선택된 데이터
     */
    getValue(obj: any) {
        return obj.dataItem;
    }

    /**
     * @see 콤보박스 선택 데이터를 변경
     * @param obj ComboBox 오브젝트
     * @param data 변경할 데이터 배열
     * @author 강준성(jskang)
     */
    setData(obj: any, data: Object[]){
        obj.data = data;
    }

    
}