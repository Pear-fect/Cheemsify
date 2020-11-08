javascript:(function(){ 
    var html = document.querySelector('html')
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT)
    var search = { "am": /an/g, "amt": /at/g, "ems": /es/g, "emp": /ep/g, "img": /ing/g, "lms": /ls/g, "lmg": /lg/g, "ms": /ns/g, "mts": /nts/g, "om": /on/g, "omg": /og/g, "rmce": /rce/g, "rmd": /rd/g, "rmt": /rt/g, "yms": /rk/g }
    var node
    while (node = walker.nextNode()) if(node.nodeValue.length > 3 && Math.random() > 0) for([key, val] of Object.entries(search)) node.nodeValue = node.nodeValue.replace(val, key)
}())