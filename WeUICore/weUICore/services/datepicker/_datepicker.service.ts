/**
 * 이 인터페이스는 ComboBox의 공통적으로 사용되어 필수적으로 구현해야 할 메소드를 나열한 것이다.
 * 이 인터페이스에 선언되어있는 메소드는 공통적으로 사용되므로 각각의 comboBoxService 마다
 * 모두 필수적으로 기능을 구현해줘야한다.
 * 
 * Note : 나중에 개발상황에 따라 인터페이스를 추상클래스로 바꿀 가능성도 있음
 *
 * @version     1.0.0 2017/09/22
 * @author      강준성(jskang)
 * @since       2017/09/22
 */
export interface DatePickerService {
    /**
    * @see 특정 DatePicker에 선택된 날짜를 얻어옴
    * @param obj DatePicker 오브젝트
    * @author 강준성(jskang)
    * @returns ComboBox에 선택된 데이터
    */
   getDate(obj: any);

   /**
    * @see 특정 DatePicker에 날짜를 선택함
    * @param obj DatePicker 오브젝트
    * @param date 변경할 날짜
    * @author 강준성(jskang)
    */
   setDate(obj: any, date: Date);
}