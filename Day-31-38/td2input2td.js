function td2input2td(){
    let target = event.target || event.srcElement;
    let input = document.createElement('input');
    input.setAttribute('type','text');
    input.setAttribute('style','width:30px');
    input.setAttribute('placeholder','num');
    let originData = target.innerHTML;
    target.onclick = function addInput(){
        target.innerHTML = "";
        target.appendChild(input);
        input.focus();
    }
    let newData = input.value;
    input.onchange = function changeData(){
        newData = input.value;
    }
    input.onblur = function removeInputChangeData(){
        if(isNaN(newData)){
            target.innerHTML = originData;
            alert("请输入数字!");
        }
        else if(newData != ""){
            target.innerHTML = newData;
        }
        else {
            target.innerHTML = originData;
        }
    }
}
