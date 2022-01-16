// var btn_send = "/html/body/div[1]/div/div/div[4]/div/footer/div[1]/div[3]/button";

if (document.getElementsByClassName("_1awRl copyable-text selectable-text")[1].outerText == "") {
    alert("diisi pesannya dulu goblok!");
} else {
    var berapa_kali = prompt("mau berapa kali bos?", "");
    var pesan = document.getElementsByClassName("_1awRl copyable-text selectable-text")[1].outerText;
    for(var i = 0; i < parseInt(berapa_kali); i++){
        document.getElementsByClassName("Srlyw")[1].style.visibility = "hidden";
        InputEvent = Event || InputEvent;
        var evt = new InputEvent('input', {
            bubbles: true,
	        composer: true
        });
        document.getElementsByClassName("_1awRl copyable-text selectable-text")[1].innerHTML = pesan;
        document.getElementsByClassName("_1awRl copyable-text selectable-text")[1].dispatchEvent(evt);
        if(typeof document.getElementsByClassName("_2Ujuu")[0] == "object"){
            eventFire(document.getElementsByClassName("_2Ujuu")[0], 'click');
        }
        const timer = ms => new Promise(res => setTimeout(res, ms))
        await timer(100);
    }
}
function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
}
