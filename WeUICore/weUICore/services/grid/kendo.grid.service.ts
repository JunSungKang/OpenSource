import { Injectable } from '@angular/core';
import { GridService } from './_grid.service';

/**
 * 이 클래스는 kendoGrid를 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 KendoGrid의 특정 오브젝트를 가지고 Grid의 이벤트 역할을 수행한다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'KendoGridService'를 생성자 선언을 통해 사용할 수 있다.
 * 또한 이 클래스는 KendoGrid의 특화되어있으므로 다른 Grid와 혼용되어 사용하지 않도록 주의한다.
 *
 * @version     1.0.0 2017/09/18
 * @author      강준성(jskang)
 * @since       2017/09/18
 */
@Injectable()
export class KendoGridService implements GridService {

    /**
     * @see 선택한 Row에 대한 정보를 얻어옴
     * @param obj Grid 오브젝트
     * @param text 선택한 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/18
     */
    getRowData(obj: any, selectRow: Object) {
        if(!selectRow || selectRow["index"] == undefined){
            console.log({"Error": "No grid data information selected.", "ErrorNo": 404});
            return {"Error": "No grid data information selected.", "ErrorNo": 404};
        }
        return obj.data[selectRow["index"]]; 
    }

    /**
     * @see 그리드에 새로운 데이터를 삽입
     * @param obj Grid 오브젝트
     * @param data 그리드에 새로 삽입할 데이터
     * @author 강준성(jskang)
     * @since 2017/09/18
     */
    setData(obj: any, data: Object){
        obj.data = data;
    }

    /**
     * @see 그리드에 새로운 1개의 Row 를 추가
     * @param obj Grid 오브젝트
     * @param data 그리드에 새로 삽입할 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    addRow(obj: any, data: Object){
        let gridData = obj.data.data;
        gridData.push(data);
    }

    /**
     * @see 그리드에서 특정 Row 1개를 제거
     * @param obj Grid 오브젝트
     * @param data 그리드에서 삭제할 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    removeRow(obj: any, data: Object){
        let i = 0;
        obj.data.forEach(element => {
            if(element == data){
                obj.data.splice(i, 1);
            }
            i++;
        });
    }

    /**
     * @see 특정 Row 를 편집 수정
     * @param obj Grid 오브젝트
     * @param selectRow 그리드에서 변경하기위해 선택된 원본 Row 데이터
     * @param editData 그리드에서 변경될 내용인 Row 데이터
     * @author 강준성(jskang)
     * @since 2017/09/22
     */
    editRow(obj: any, selectRow: Object, editData: String){
        let i = 0;
        obj.data.forEach(element => {
            if(element == selectRow){
                obj.data[i] = editData;
            }
            i++;
        });
    }
}