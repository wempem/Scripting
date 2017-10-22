function getElementById(id) {
    walkTheDOM(document.body, function (node) {
        if (node.id === id) {
            return node;
        }
    });
}