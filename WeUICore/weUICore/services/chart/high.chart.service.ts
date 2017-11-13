import { Injectable } from '@angular/core';
import { ChartService } from './_chart.service';

import { Chart } from 'angular-highcharts';
/**
 * 이 클래스는 HighChart를 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 HighChart의 특정 오브젝트 변수를 가지고 HighChart의 이벤트 역할을 수행한다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'HighChartService'를 생성자 선언을 통해 사용할 수 있다.
 * 또한 이 클래스는 HighChart에 특화되어있으므로 다른 Chart와 혼용되어 사용하지 않도록 주의한다.
 *
 * @version     1.0.0 2017/09/22
 * @author      강준성(jskang)
 * @since       2017/09/22
 */
@Injectable()
export class HighChartService implements ChartService {
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
    staticInitOptions(title: string, type: string, xAxisColumns: Object[], yAxisTitle: string, series: Object[]) {
        if (!type) { type = "line"; }
        let obj = new Chart({
            chart: { type: type },
            title: { text: title },
            xAxis: { categories: xAxisColumns },
            yAxis: {
                title: {
                    text: yAxisTitle
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: series
        });
        return obj;
    }

    /**
    * @see Chart에 데이터를 삽입함
    * @param obj chart 오브젝트
    * @param series 그려질 차트 데이터
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setData(obj: any, series: Object[]) {
        obj.options.series = series;
        obj = new Chart(obj.options);
        return obj;
    }

    /**
    * @see Chart에 새로운 데이터를 추가함
    * @param obj chart 오브젝트
    * @param data 추가할 데이터
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    addPoint(obj: any, data: Object) {
        obj.addPoint(data);
        return obj;
    }

    /**
    * @see Chart에 Title을 삽입함
    * @param obj chart 오브젝트
    * @param title 입력될 Title
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setTitle(obj: any, title: string) {
        console.log(obj);
        obj.options.title.text = title;
        obj = new Chart(obj.options);
        return obj;
    }

    /**
    * @see Chart에 X 축 카테고리를 삽입함
    * @param obj chart 오브젝트
    * @param categories 입력될 categories
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setXAxisCategories(obj: any, categories: Object[]) {
        obj.options.xAxis.categories = categories;
        obj = new Chart(obj.options);
        return obj;
    }

    /**
    * @see Chart에 Y 축 타이틀과 카테고리를 삽입함
    * @param obj chart 오브젝트
    * @param title 입력될 Title
    * @param label 표시될 단위
    * @author 강준성(jskang)
    * @since       2017/10/10
    */
    setYAxis(obj: any, title: string, firstLabel: string, lastLabel: string) {
        obj.options.yAxis.labels.formatter = function () { return firstLabel + this.value + lastLabel; };
        obj = new Chart(obj.options);
        return obj;
    }
    
}