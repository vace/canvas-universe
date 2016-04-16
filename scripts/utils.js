function $$(){}
$$.gid = function(e){return document.getElementById(e)}
$$.qs = function(e){return document.querySelector(e)}
$$.qsa = function(e){document.querySelectorAll(e)}
$$.random = function(min,max){
    if(max === undefined){max = min,min = 0}
    return Math.random() * (max - min) + min
}
