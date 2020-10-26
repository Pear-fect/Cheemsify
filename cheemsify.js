javascript:(function(){ 
    var html = document.querySelector('html')
    var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT)
    var node
    while (node = walker.nextNode()) {
        if(node.nodeValue.length > 3 && Math.random() > 0){
            node.nodeValue = node.nodeValue.replace(/an/g, "am")
            node.nodeValue = node.nodeValue.replace(/es/g, "ems")
            node.nodeValue = node.nodeValue.replace(/ing/g, "img")
            node.nodeValue = node.nodeValue.replace(/ls/g, "lms")
            node.nodeValue = node.nodeValue.replace(/lg/g, "lmg")
            node.nodeValue = node.nodeValue.replace(/ns/g, "ms")
            node.nodeValue = node.nodeValue.replace(/nts/g, "mts")
            node.nodeValue = node.nodeValue.replace(/on/g, "om")
            node.nodeValue = node.nodeValue.replace(/og/g, "omg")
            node.nodeValue = node.nodeValue.replace(/rce/g, "rmce")
            node.nodeValue = node.nodeValue.replace(/rd/g, "rmd")
            node.nodeValue = node.nodeValue.replace(/rt/g, "rmt")
            node.nodeValue = node.nodeValue.replace(/rk/g, "rmk")
            node.nodeValue = node.nodeValue.replace(/ys/g, "yms")
        }
    }
}())