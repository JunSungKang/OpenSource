/**
 * 이 인터페이스는 ComboBox의 공통적으로 사용되어 필수적으로 구현해야 할 메소드를 나열한 것이다.
 * 이 인터페이스에 선언되어있는 메소드는 공통적으로 사용되므로 각각의 comboBoxService 마다
 * 모두 필수적으로 기능을 구현해줘야한다.
 * 
 * Note : 나중에 개발상황에 따라 인터페이스를 추상클래스로 바꿀 가능성도 있음
 *
 * @version     1.0.0 2017/09/13
 * @author      강준성(jskang)
 * @since       2017/09/13
 */
export interface ComboBoxService {
    /**
     * @param arrayData 콤보박스에 들어갈 배열 데이터
     * @returns [{"text": "Barcode_011", "value": "1011001010111"}, ...]
     * @author 강준성(jskang)
     */
    ArrayToComboBoxData(arrayData: Object[]);

    /**
     * @param obj ComboBox 오브젝트
     * @param text 선택할 값 (브라우저에 보여지는 text 값)
     * @author 강준성(jskang)
     */
    TextSelect(obj: any, text: String);

    /**
     * @param obj ComboBox 오브젝트
     * @param value 선택할 값 (브라우저에 보이지 않는 value 값)
     * @author 강준성(jskang)
     */
    ValueSelect(obj: any, value: String);

    /**
     * @param obj ComboBox 오브젝트
     * @author 강준성(jskang)
     * @returns ComboBox에 선택된 데이터
     */
    getValue(obj: any);

    /**
     * @param obj ComboBox 오브젝트
     * @param data 변경할 데이터 배열
     * @author 강준성(jskang)
     */
    setData(obj: any, data: Object[]);
}