/**
 * 이 인터페이스는 Chart의 공통적으로 사용되어 필수적으로 구현해야 할 메소드를 나열한 것이다.
 * 이 인터페이스에 선언되어있는 메소드는 공통적으로 사용되므로 각각의 chartService 마다
 * 모두 필수적으로 기능을 구현해줘야한다.
 * 
 * Note : 나중에 개발상황에 따라 인터페이스를 추상클래스로 바꿀 가능성도 있음
 *
 * @version     1.0.0
 * @author      강준성(jskang)
 * @since       2017/10/10
 */
export interface ChartService {
/**
    * @see Chart 데이터를 초기 값으로 세팅함
    * @param obj chart에 들어가는 옵션 변수
    * @param type 차트 형태(line, spline, bar, column, pie)
    * @param xAxisColumns X축 컬럼명 (series의 데이터갯수와 동일해야함)
    * @param yAxisTitle Y축에 보여질 타이틀
    * @param series 그려질 차트 데이터
    * @author 강준성(jskang)
    * @since  2017/10/10
    */
    staticInitOptions(title: string, type: string, xAxisColumns: Object[], yAxisTitle: string, series: Object[]);

    /**
    * @see Chart에 데이터를 삽입함
    * @param obj chart 오브젝트
    * @param series 그려질 차트 데이터
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setData(obj: any, series: Object[]);

    /**
    * @see Chart에 새로운 데이터를 추가함
    * @param obj chart 오브젝트
    * @param data 추가할 데이터
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    addPoint(obj: any, data: Object);

    /**
    * @see Chart에 Title을 삽입함
    * @param obj chart 오브젝트
    * @param title 입력될 Title
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setTitle(obj: any, title: string);

    /**
    * @see Chart에 X 축 카테고리를 삽입함
    * @param obj chart 오브젝트
    * @param categories 입력될 categories
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setXAxisCategories(obj: any, categories: Object[]);

    /**
    * @see Chart에 Y 축 타이틀과 카테고리를 삽입함
    * @param obj chart 오브젝트
    * @param title 입력될 Title
    * @param label 표시될 단위
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setYAxis(obj: any, title: string, firstLabel: string, lastLabel: string);
}