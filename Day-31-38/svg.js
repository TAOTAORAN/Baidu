function barDraw(dataIndex){
//定义绘制区域
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("version","1.1");
    svg.setAttribute('width','670');
    svg.setAttribute('height','271');
    svg.setAttribute('id','svg');
    document.querySelector('#drawSVG').appendChild(svg);
//定义轴
    let axisX = '<line x1="50" y1="20" x2="50" y2="270"style="stroke:rgb(99,99,99);stroke-width:2"/>';
    let axisY = '<line x1="50" y1="270" x2="670" y2="270"style="stroke:rgb(99,99,99);stroke-width:2"/>';
    svg.innerHTML = axisX + axisY;
//定义柱子宽度，柱子间间隔
    let barWidth = 30;
    let barSpace = 20;
//获取柱状图最大值以及绘图比例
    let slae0arr = sourceData[dataIndex].sale;
    let slae0arrSort = [];
    for(let i=0; i<slae0arr.length; i++){
        slae0arrSort.push(slae0arr[i]);
    }
    slae0arrSort = slae0arrSort.sort(sortMax);
    let barMax = slae0arrSort[0];
    let drawHeightScale = (svg.getAttribute("height")-1)/barMax;
//绘制每根柱子
    for(let i=0; i<slae0arr.length; i++){
        let barHeight = slae0arr[i]*drawHeightScale;
        let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bar.setAttribute("width",barWidth);
        bar.setAttribute("height",barHeight);
        bar.setAttribute("x",50+(i+1)*barSpace+i*barWidth);
        bar.setAttribute("y",270-barHeight);
        bar.setAttribute("style","fill:blue;stroke-width:0;fill-opacity:0.5");
        document.querySelector('#svg').appendChild(bar);
    }
}

function sortMax(a,b){
    return b - a;
}

barDraw(dataIndex);
