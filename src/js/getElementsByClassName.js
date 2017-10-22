function getElementsByClassName(className) {
    var results = [];
    walkTheDOM(document.body, function (node) {
        var a, c = node.className, i;
        if (c) {
            a = c.split(' ');
            for (i = 0; i < a.length; i += 1) {
                if (a[i] == className) {
                    results.push(node);
                    break;
                }
            }
        }
    });
    return results;
}