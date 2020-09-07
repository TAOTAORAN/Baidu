var dec2bin = function () {
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
    var decNumber = document.querySelector('#dec-number').value;
    var binBit = document.querySelector('#bin-bit').value;
    var arr = [];
    if (decNumber > 0 && decNumber%1===0){
        do {
            if (decNumber%2===1){
            arr.push(1);
            }
            else {
            arr.push(0);
            }
            decNumber = Math.floor(decNumber/2);
        }
        while (decNumber>0);
        
        if (arr.length<binBit){
            for (var i = binBit-arr.length; i>0; i--){
                arr.push(0);
            }
        }
        else{
            console.log("输入位数小于转换结果位数")
        }
        arr.reverse();
        var result = arr.join('');

        document.querySelector('#result').innerHTML=result;
    }
    else {
        alert("请输入大于零的整数");
    }

}
// 当点击转化按钮时，将输入的十进制数字转化为二进制，并显示在result的p标签内
// Some coding
document.querySelector('#trans-btn').onclick = dec2bin;
