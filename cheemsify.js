javascript:(function(){ 
    let pageText = document.body.innerText.replace(/[^\w\s]/g,'').split(/[\n\s]/)
    for(let i = 0; i < pageText.length; i++){
        if(pageText[i].length > 2) console.log(pageText[i] + ": " + i)
    }
}())