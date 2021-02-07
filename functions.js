function createNode (nodeType, text) {
    if (nodeType == 'element') {
        return document.createElement(text)
    }
    if (nodeType == text) {
        return document.createTextNode(text)
    }
}

function createAttribute (node, key, value) {
    return node.setattribute(key, value)
}

function concatNode (fatherNode, sonNode) {
    fatherNode.appendchild(sonNode)
}

function loan (value, intrest, years) {
    let calculus = value * intrest * years 
    return calculus.toFixed(2)
}