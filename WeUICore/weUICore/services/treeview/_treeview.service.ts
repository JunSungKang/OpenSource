/**
 * 이 인터페이스는 Treeview의 공통적으로 사용되어 필수적으로 구현해야 할 메소드를 나열한 것이다.
 * 이 인터페이스에 선언되어있는 메소드는 공통적으로 사용되므로 각각의 TreeviewService 마다
 * 모두 필수적으로 기능을 구현해줘야한다.
 * 
 * Note : 나중에 개발상황에 따라 인터페이스를 추상클래스로 바꿀 가능성도 있음
 *
 * @version     1.0.0 2017/09/26
 * @author      강준성(jskang)
 * @since       2017/09/26
 */
export interface TreeviewService {
    /**
     * @see 선택한 노드 정보 얻어오기
     * @param obj 트리뷰 오브젝트
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    getSelectNode(obj: any);

    /**
     * @see 특정 노드 선택하기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 트리 노드 ID 값
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    select(obj: any, nodeId: any);

    /**
     * @see 특정 노드 접기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 접을 NodeId
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    collapse(obj: any, nodeId: any);

    /**
     * @see 특정 노트가 접혀있는지 체크
     * @param obj 트리뷰 오브젝트
     * @param nodeId 체크할 노드 ID 값
     * @return 접혀있는 경우 true / 접혀있지 않는 경우 false
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    isCollapsed(obj: any, nodeId: any);

    /**
     * @see 특정 노드 펼치기
     * @param obj 트리뷰 오브젝트
     * @param nodeId 펼칠 NodeId
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    expand(obj: any, nodeId: any);
    
    /**
     * @see 특정 노트가 펼쳐져 있는지 체크
     * @param obj 트리뷰 오브젝트
     * @param nodeId 체크할 노드 ID 값
     * @return 펼쳐져있는 경우 true / 펼쳐져있지 않는 경우 false
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    isExpaned(obj: any, nodeId: any);

    /**
     * @see 특정 노드 텍스트 변경
     * @param obj 트리뷰 오브젝트
     * @param nodeId 변경 할 노드 ID 값
     * @param text 변경 할 텍스트
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    rename(obj: any, nodeId: any, text: String);

    /**
     * @see 특정 노드 ID 변경
     * @param obj 트리뷰 오브젝트
     * @param nodeId 변경 할 노드 ID 값
     * @param changeNodeId 변경 될 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    changeNodeId(obj: any, nodeId: any, changeNodeId: String);

    /**
     * @see 특정 노드 삭제
     * @param obj 트리뷰 오브젝트
     * @param nodeId 삭제 할 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    remove(obj: any, nodeId: any);

    /**
     * @see 특정 노드에 자식노드를 새롭게 추가
     * @param obj 트리뷰 오브젝트
     * @param nodeId 추가할 부모 노드
     * @param childArray 추가할 노드(TreeModel 타입으로 된 변수 사용)
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    addChild(obj: any, nodeId: any, childArray: Object);
    
    /**
     * @see 특정 노드의 자식 노드 다시 불러오기
     * @param obj 트리뷰 오브젝트
     * @param NodeId 다시 불러올 노드 ID
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    childReload(obj: any, nodeId: any);

    /**
     * @see 특정 노드의 자식 노드 세팅하기(변경도 가능)
     * @param obj 트리뷰 오브젝트
     * @param nodeId 추가할 부모 노드
     * @param childArray 새롭게 세팅하거나 변경할 노드
     * @since 2017/09/26
     * @author 강준성(jskang)
     */
    setChildNode(obj: any, nodeId: any, childArray: any);
}