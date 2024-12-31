/**
 * 根据查找函数查找树节点，并设置所有父节点
 * @template T 树节点类型
 * @template K 节点键名类型
 * @param {Array<T>} tree 树数据
 * @param {K} childrenKey 子节点的键名
 * @param {(node: T) => boolean} findFn 查找函数
 * @param {(node: T) => void} setParentNodesFn 设置父节点函数
 * @returns {T | undefined} 查找到的节点
 */
export function setTreeAllParentNodesByFoundNode<T, K extends keyof T>(
    tree: Array<T>,
    childrenKey: K,
    findFn: (node: T) => boolean,
    setParentNodesFn: (node: T) => void
): T | undefined {
    let _node: T | undefined;
    function findNodeByFindFn(node: T, findFn: (node: T) => boolean) {
        if (findFn(node)) {
            setParentNodesFn(node);
            _node = node;
            return true;
        }
        if (Array.isArray(node[childrenKey])) {
            for (let child of node[childrenKey] as T[]) {
                if (findNodeByFindFn(child, findFn)) {
                    setParentNodesFn(node);
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    for (let node of tree) {
        findNodeByFindFn(node, findFn);
    }
    return _node;
}

/**
 * 根据查找函数查找树节点，并返回所有父节点
 * @template T 树节点类型
 * @template K 节点键名类型
 * @param {Array<T>} tree 树数据
 * @param {K} childrenKey 子节点的键名
 * @param {(node: T) => boolean} findFn 查找函数
 * @returns {T[]} 查找到的节点路径
 */
export function getNodePathsByFindNode<T, K extends keyof T>(
    tree: Array<T>,
    childrenKey: K,
    findFn: (node: T) => boolean
): T[] {
    let _nodes: T[] = [];
    function findNodeByFindFn(node: T, findFn: (node: T) => boolean) {
        if (findFn(node)) {
            _nodes.push(node);
            return true;
        }
        if (Array.isArray(node[childrenKey])) {
            for (let child of node[childrenKey] as T[]) {
                if (findNodeByFindFn(child, findFn)) {
                    _nodes.push(node);
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    for (let node of tree) {
        findNodeByFindFn(node, findFn);
    }
    return _nodes.reverse();
}
