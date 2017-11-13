/**
 * 이 인터페이스는 Grid의 공통적으로 사용되어 필수적으로 구현해야 할 메소드를 나열한 것이다.
 * 이 인터페이스에 선언되어있는 메소드는 공통적으로 사용되므로 각각의 gridService 마다
 * 모두 필수적으로 기능을 구현해줘야한다.
 * 
 * Note : 나중에 개발상황에 따라 인터페이스를 추상클래스로 바꿀 가능성도 있음
 *
 * @version     1.0.0 2017/09/18
 * @author      강준성(jskang)
 * @since       2017/09/18
 */
export interface GridService {
    /**
     * @see 선택한 Row에 대한 정보를 얻어옴
     * @param obj Grid 오브젝트
     * @param text 선택한 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/18
     */
    getRowData(obj: any, selectRow: Object);

    /**
     * @see 그리드에 새로운 데이터를 삽입
     * @param obj Grid 오브젝트
     * @param data 그리드에 새로 삽입할 데이터
     * @author 강준성(jskang)
     * @since 2017/09/18
     */
    setData(obj: any, data: Object);

    /**
     * @see 그리드에 새로운 1개의 Row 를 추가
     * @param obj Grid 오브젝트
     * @param data 그리드에 새로 삽입할 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    addRow(obj: any, data: Object);

    /**
     * @see 그리드에서 특정 Row 1개를 제거
     * @param obj Grid 오브젝트
     * @param data 그리드에서 삭제할 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    removeRow(obj: any, data: Object);

    /**
     * @see 특정 Row 를 편집 수정
     * @param obj Grid 오브젝트
     * @param selectRow 그리드에서 변경하기위해 선택된 원본 Row 데이터
     * @param editData 그리드에서 변경될 내용인 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    editRow(obj: any, selectRow: Object, editData: String);
}