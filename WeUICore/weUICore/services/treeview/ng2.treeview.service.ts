import { Injectable } from '@angular/core';
import { TreeviewService } from './_treeview.service';

/**
 * 이 클래스는 Treeview를 간편하게 사용하기 위한 클래스이다.
 * 이 클래스는 ng2-tree의 특정 오브젝트를 가지고 Treeview의 이벤트 역할을 수행한다.
 * 이 클래스는 각 컴포넌트에서 import 한 후 'Ng2TreeviewService'를 생성자 선언을 통해 사용할 수 있다.
 * 또한 이 클래스는 Ng2TreeviewService에 특화되어있으므로 다른 Treeview와 혼용되어 사용하지 않도록 주의한다.
 *
 * @version     1.0.0 2017/09/22
 * @author      강준성(jskang)
 * @since       2017/09/22
 */
@Injectable()
export class Ng2TreeviewService implements TreeviewService {
    constructor(){}
    
    private nodeSubSearch(obj: any, children: any){
        let rst: any;
        for(let i in children){
            // 이미 다른 단계에서 선택된 노드를 발견했을 때, 단계별로 모든 반복문 탈출
            if(rst){ break; }

            // 선택한 노드를 발견했을 때
            if(obj.getControllerByNodeId(children[i].id).isSelected()){
                rst = {id: children[i].id, value: children[i].value};
                break;
            }
            // 해당 노드의 자식노드가 존재할 때(재귀)
            if(children[i].children){
                rst = this.nodeSubSearch(obj, children[i].children);
            }
        }
        return rst;
    }

    private nodeSearch(obj: any){
        let treeModel = obj.treeModel;
        let rst: any;

        // 최상위 노드를 클릭한 경우
        if(obj.getControllerByNodeId(treeModel.id).isSelected()){
            return {id: treeModel.id, value: treeModel.value};
        }

        // 자식노드가 존재할 때(재귀)
        if(treeModel.children){
            rst = this.nodeSubSearch(obj, treeModel.children);
        }
        return rst;
    }

    /**
     * @see 선택한 노드 정보 얻어오기
     * @param obj 트리뷰 오브젝트
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    getSelectNode(obj: any){
        return this.nodeSearch(obj);
    }

    /**
     * @see 특정 노드 선택하기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 트리 노드 ID 값
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    select(obj: any, nodeId: any) {
        obj.getControllerByNodeId(nodeId).select();
    }

    /**
     * @see 특정 노드 접기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 접을 NodeId
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    collapse(obj: any, nodeId: any) {
        obj.getControllerByNodeId(nodeId).collapse();
    }

    /**
     * @see 특정 노트가 접혀있는지 체크
     * @param obj 트리뷰 오브젝트
     * @param nodeId 체크할 노드 ID 값
     * @return 접혀있는 경우 true / 접혀있지 않는 경우 false
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    isCollapsed(obj: any, nodeId: any) {
        return obj.getControllerByNodeId(nodeId).isCollapsed();
    }

    /**
     * @see 특정 노드 펼치기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 펼칠 NodeId
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    expand(obj: any, nodeId: any) {
        obj.getControllerByNodeId(nodeId).expand();
    }

    /**
     * @see 특정 노트가 펼쳐져 있는지 체크
     * @param obj 트리뷰 오브젝트
     * @param nodeId 체크할 노드 ID 값
     * @return 펼쳐져있는 경우 true / 펼쳐져있지 않는 경우 false
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    isExpaned(obj: any, nodeId: any) {
        return obj.getControllerByNodeId(nodeId).isExpanded();
    }

    /**
     * @see 특정 노드 텍스트 변경
     * @param obj 트리뷰 오브젝트
     * @param nodeId 변경 할 노드 ID 값
     * @param text 변경 할 텍스트
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    rename(obj: any, nodeId: any, text: String) {
        obj.getControllerByNodeId(nodeId).rename(text);
    }

    /**
     * @see 특정 노드 ID 변경
     * @param obj 트리뷰 오브젝트
     * @param nodeId 변경 할 노드 ID 값
     * @param changeNodeId 변경 될 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    changeNodeId(obj: any, nodeId: any, changeNodeId: String) {
        obj.getControllerByNodeId(nodeId).changeNodeId(changeNodeId);
    }

    /**
     * @see 특정 노드 삭제
     * @param obj 트리뷰 오브젝트
     * @param nodeId 삭제 할 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    remove(obj: any, nodeId: any) {
        obj.getControllerByNodeId(nodeId).remove();
    }

    /**
     * @see 특정 노드에 자식노드를 새롭게 추가
     * @param obj 트리뷰 오브젝트
     * @param nodeId 추가할 부모 노드
     * @param childArray 추가할 노드(TreeModel 타입으로 된 변수 사용)
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    addChild(obj: any, nodeId: any, childArray: Object) {
        obj.getControllerByNodeId(nodeId).addChild(childArray);
    }

    /**
     * @see 특정 노드의 자식 노드 다시 불러오기
     * @param obj 트리뷰 오브젝트
     * @param NodeId 다시 불러올 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    childReload(obj: any, nodeId: any) {
        obj.getControllerByNodeId(nodeId).reloadChildren();
    }

    /**
     * @see 특정 노드의 자식 노드 세팅하기(변경도 가능)
     * @param obj 트리뷰 오브젝트
     * @param nodeId 추가할 부모 노드
     * @param childArray 새롭게 세팅하거나 변경할 노드
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    setChildNode(obj: any, nodeId: any, childArray: any) {
        obj.getControllerByNodeId(nodeId).setChildren(childArray);
    }
    
}