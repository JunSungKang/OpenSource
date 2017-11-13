import { Injectable } from '@angular/core';
import { DatePickerService } from './_datepicker.service';

/**
 * 이 클래스는 kendoComboBox를 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 KendoComboBox의 특정 오브젝트를 가지고 ComboBox의 이벤트 역할을 수행한다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'KendoComboBoxService'를 생성자 선언을 통해 사용할 수 있다.
 * 또한 이 클래스는 KendoComboBox에 특화되어있으므로 다른 ComboBox와 혼용되어 사용하지 않도록 주의한다.
 *
 * @version     1.0.0 2017/09/22
 * @author      강준성(jskang)
 * @since       2017/09/22
 */
@Injectable()
export class KendoDatePickerService implements DatePickerService {
    
    /**
     * @see 특정 DatePicker에 선택된 날짜를 얻어옴
     * @param obj DatePicker 오브젝트
     * @author 강준성(jskang)
     * @returns ComboBox에 선택된 데이터
     */
    getDate(obj: any) {
        return obj.value;
    }

    /**
     * @see 특정 DatePicker에 날짜를 선택함
     * @param obj DatePicker 오브젝트
     * @param date 변경할 날짜
     * @author 강준성(jskang)
     */
    setDate(obj: any, date: Date){
        obj.value = date;
    }

    
}