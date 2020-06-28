function addLoadEvent(func){
    var preLoad = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            preLoad();
            func();
        }
    }
}