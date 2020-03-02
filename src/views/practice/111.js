function FnEvent() {
    alert('...')
}
document.onkeydown=function(event) {

    var e = event || window.event || arguments.callee.caller.arguments[0];

    let nameEl = document.getElementsByClassName('vm_name')[0].getElementsByTagName('span')[1];
    if (e.keyCode == 86 && e.ctrlKey) {
        nameEl.innerHTML = '（进入普通模式）';
    } else if (e.keyCode == 65 && e.ctrlKey) {
        nameEl.innerHTML = '（进入复制粘贴模式）';
    } else if (e.keyCode == 67 && e.ctrlKey) {
        nameEl.innerHTML = '（进入普通模式）';
    }
}
