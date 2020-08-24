console.log("hello")
console.log("hello2")

function clickIE4(){
    if (event.button==2){
        console.log("hello5")
    return false;
    }
    }
    
    function clickNS4(e){
        console.log("hello3")
    if (document.layers||document.getElementById&&!document.all){
    if (e.which==2||e.which==3){
    return false;
    }
    }
    }
    
    if (document.layers){
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
    }
    else if (document.all&&!document.getElementById){
    document.onmousedown=clickIE4;
    }
    
    else {
        console.log("Nothing...")
    }
