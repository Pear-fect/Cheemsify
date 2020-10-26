javascript:(function(){ 
    let pageText = document.body.innerText.split(/[\n\s]/)
    for(let i = 0; i < pageText.length; i++){
        if(pageText[i].length > 2 && /^[a-zA-Z]+$/.test(pageText[i])) console.log(pageText[i] + ": " + i)
    }
    document.body.innerText = pageText
}())