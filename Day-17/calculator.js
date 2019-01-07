var add = function (){
    const num1 = Number(document.querySelector('#first-number').value);
    const num2 = Number(document.querySelector('#second-number').value);
    let addResult=num1+num2;
    document.querySelector('#result').innerHTML = addResult;
}

var sub = function (){
    const num1 = Number(document.querySelector('#first-number').value);
    const num2 = Number(document.querySelector('#second-number').value);
    let subResult=num1-num2;
    document.querySelector('#result').innerHTML = subResult;
}

var mul = function (){
    const num1 = Number(document.querySelector('#first-number').value);
    const num2 = Number(document.querySelector('#second-number').value);
    let mulResult=num1*num2;
    document.querySelector('#result').innerHTML = mulResult;
}

var div = function (){
    const num1 = Number(document.querySelector('#first-number').value);
    const num2 = Number(document.querySelector('#second-number').value);
    if (num2===0){
        alert('除数不能为0');
    }
    else {
        let divResult=num1/num2;
        document.querySelector('#result').innerHTML = divResult;
    }

}

document.querySelector('#add-btn').onclick = add;
document.querySelector('#minus-btn').onclick = sub;
document.querySelector('#times-btn').onclick = mul;
document.querySelector('#divide-btn').onclick = div;
