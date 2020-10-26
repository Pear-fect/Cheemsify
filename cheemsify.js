javascript:(function(){ 
    let pageText = document.body.innerText.split(/[\s]/)
    for(let i = 0; i < pageText.length; i++){
        console.log(pageText[i] + ": " + i)
    }
}())