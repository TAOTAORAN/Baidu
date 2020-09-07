function initialTable (){
    let saleArr = []; //存储每个sale属性中的数组
    for(let i=0; i<sourceData.length; i++){//遍历sourceData数组，生成对应个数的行
        let tr = document.createElement("tr");
        tr.setAttribute("class","data");
        tr.setAttribute("id",i);
        document.querySelector('#saleTable').appendChild(tr);
        for(name in sourceData[i]){//遍历sourceData数组中每个对象的属性,并生成对应内容的td.
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerText = sourceData[i][name];
        }
        saleArr.push(sourceData[i].sale);//由于sale是数组，上面的td生成后不符合要求.先把它存储到数组中
    }
    // console.log(saleArr);
    let allTr = document.querySelectorAll('tr');
    for(let i=1;i<allTr.length;i++){//删除错误的tr,从第二行开始
        allTr[i].removeChild(allTr[i].childNodes[2]);//删除每行错误的td
        allTr[i].firstChild.setAttribute("class","product");
        allTr[i].lastChild.setAttribute("class","region");

        for(let j=0; j<saleArr[1].length; j++){//生成sale长度个td
            let td = document.createElement("td");
            allTr[i].appendChild(td);
            td.setAttribute("class",j);
            td.innerText = saleArr[i-1][j]//i的初始值为1,所以减1
        }
    }
}

initialTable ();

function initialize(){
    //删除所data类td,保留表头
    var elements = document.getElementsByClassName('data');
    for(var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
    }
}

function select (){
    initialize();
    initialTable();
    let table = document.querySelector('#saleTable');
    let productSelect = document.querySelector('#product-select');
    let regionSelect = document.querySelector('#region-select');
    let monthSelect = document.querySelector('#month-select');
    let allTr = document.querySelectorAll('tr');
    let index1 = productSelect.selectedIndex;
    let index2 = regionSelect.selectedIndex;
    let index3 = monthSelect.selectedIndex;
    for(let i=1;i<allTr.length;i++){//遍历所有行,根据产品选择，移除行
        if(productSelect[index1].text!=allTr[i].firstChild.innerText){
            table.removeChild(allTr[i]);
        }
    }
    allTr = document.querySelectorAll('tr');//剩余行构成新的表格行集合
    for(let i=1;i<allTr.length;i++){//遍历所有行,根据地区选择，移除行
        if(regionSelect[index2].text!=allTr[i].firstChild.nextSibling.innerText){
            table.removeChild(allTr[i]);
        }
    }
    allTr = document.querySelectorAll('tr');//更新表格行集合
    let td = allTr[1].childNodes;//第二行的td集合

    for(let m=2; m<td.length; m++){//遍历所有td，找到索引等于Num(类名)的td
        if(Number(td[m].getAttribute("class")) == index3){
            console.log(Number(td[m].getAttribute("class"))+1+"月:"+td[m].innerText);
        }
    }
}

// let falseNum = 0;
// function pCheckCheck(){
//     let allCheckBox = document.querySelectorAll('input');
//     let checkedNum = 0;
//     let checkProduct = [];
//     let all = allCheckBox[6];
//     let lastIndex = new Number();
//     checkProduct.unshift(allCheckBox[0],allCheckBox[1],allCheckBox[2]);
//     // console.log(checkProduct);
//     for(let i=0; i<checkProduct.length; i++){
//         let lastChecked = [];
//         let lastId = "";
//         let falseId1= "";
//         let falseId2= "";
//
//         if(checkProduct[i].checked==false){
//             falseNum++;
//         }
//         if(falseNum >= 2){
//             for(let j=0; j<checkProduct.length; j++){
//                 if(checkProduct[j].checked==true){
//                     lastIndex = j;
//                     lastChecked = checkProduct[j];
//                     lastId = lastChecked.getAttribute("id");
//                     checkProduct.splice(lastIndex,1);
//                     falseId1 = checkProduct[0].getAttribute("id");
//                     falseId2= checkProduct[1].getAttribute("id");
//
//                 }
//             }
//             lastChecked.disabled = true;
//             if(lastChecked.disabled == true){
//                 document.getElementById(falseId1).onclick = function(){
//                     lastChecked.disabled = false;
//                 }
//                 document.getElementById(falseId2).onclick = function(){
//                     lastChecked.disabled = false;
//                 }
//             }
//         }
//     }
// }
//
// function rCheckCheck(){
//     let allCheckBox = document.querySelectorAll('input');
//     let checkedNum = 0;
//     let checkRegion = [];
//     let all = allCheckBox[6];
//     let lastIndex = new Number();
//
//     checkRegion.unshift(allCheckBox[3],allCheckBox[4],allCheckBox[5]);
//     // console.log(checkProduct);
//     for(let i=0; i<checkRegion.length; i++){
//         let lastChecked = [];
//         let lastId = "";
//         if(checkRegion[i].checked==false){
//             falseNum++;
//         }
//         if(falseNum >= 2){
//             for(let j=0; j<checkRegion.length; j++){
//                 if(checkRegion[j].checked==true){
//                     lastChecked = checkRegion[j];
//                     lastIndex = j;
//                     lastId = lastChecked.getAttribute("id");
//                     checkRegion.splice(lastIndex,1);
//                     falseId1 = checkRegion[0].getAttribute("id");
//                     falseId2= checkRegion[1].getAttribute("id");
//                 }
//             }
//             function trick(){
//                 lastChecked.checked = true;
//             }
//             document.getElementById(lastId).addEventListener('click', trick);
//
//             if(lastChecked.checked == true){
//                 document.getElementById(falseId1).onclick = function(){
//                     document.getElementById(lastId).removeEventListener('click',trick);
//                 }
//                 document.getElementById(falseId2).onclick = function(){
//                     document.getElementById(lastId).removeEventListener('click',trick);
//                 }
//             }
//         }
//     }
// }

//按钮：显示全部
document.querySelector('#initialize').onclick = function(){
    initialize();
    initialTable();
    addClass2tr();//添加类，重置后保持动态绘制
}
//按钮:提交
document.querySelector('#submit').onclick = function(){
    select ();
    cleanChart();
    //提交同时，只显示留下一行的对应图表
    let dataIndex =Number(document.getElementById("saleTable").lastChild.id);
    barDraw(dataIndex);
    drawCanvas(dataIndex);
}
// //产品勾选
// document.querySelector('#checkProduct').onclick = function(e){
//     let target = e.target || e.srcElement;
//     if(target.nodeName.toLocaleLowerCase() == 'input'){
//         falseNum = 0;
//         pCheckCheck();
//     }
// }
// //地区勾选,移除侦听有问题
// document.querySelector('#checkRegion').onclick = function(e){
//     let target = e.target || e.srcElement;
//     if(target.nodeName.toLocaleLowerCase() == 'input'){
//         falseNum = 0;
//         rCheckCheck();
//     }
// }
