//为每行tr的所有td添加类。因为td遮住tr无法直接对tr侦听mouseover
let classNameArr = ['r1','r2','r3','r4','r5','r6','r7','r8','r9']
function addClass2tr(){
    for(let i=0; i<9; i++){
        let tr = document.getElementById(i);
        let tdArr = tr.childNodes;
        for(let j=0; j<tdArr.length; j++){
            tdArr[j].classList.add(classNameArr[i]);
        }
    }
}
addClass2tr();

function cleanChart(){
    document.querySelector('#drawSVG').innerHTML = "";
    document.querySelector('#drawCanvas').innerHTML = ""
}

let table = document.querySelector('#saleTable');
table.onmouseover = function drawChart(ev){
    let target = ev.target || ev.srcElement;
    if(target.nodeName.toLocaleLowerCase() == 'td'){
        for(let i=0; i<9; i++){
            if(target.className.match(classNameArr[i])!=null){
                cleanChart();
                dataIndex = i;
                barDraw(dataIndex);
                drawCanvas(dataIndex);
                if(target.className.match("product")!=null || target.className.match("region")!=null){
                    console.log("not to input");
                }
                else {
                    td2input2td();
                }
            }
        }
    }
}
