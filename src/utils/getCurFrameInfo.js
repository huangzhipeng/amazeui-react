'use strict';

function getCurFrameInfo(element) {

    var curDocument = element.ownerDocument
    var curWindow = 'defaultView' in curDocument ? curDocument.defaultView : curDocument.parentWindow

    return {
        curDocument: curDocument,
        curWindow: curWindow
    }
}

module.exports = getCurFrameInfo