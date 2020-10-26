javascript:(function(){ 
    const matchAllExceptWhitespace = /\w+/g
    document.body.innerHTML.replace(matchAllExceptWhitespace, "test");
    /*
    let pageText = document.body.innerText.split(/[\n\s]/)
    for(let i = 0; i < pageText.length; i++){
        if(pageText[i].length > 2 && /^[a-zA-Z]+$/.test(pageText[i])) console.log(pageText[i] + ": " + i)
    }
    document.body.innerText = pageText

    document.body.innerHTML = document.body.innerHTML.replace(/^[a-zA-Z]+$/, "replacement string");

    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    const word = 'Lorem';

    let node;

    while (node = treeWalker.nextNode()) {
        node.textContent = node.textContent.replace(matchAllExceptWhitespace, word);
    }
    */
}())