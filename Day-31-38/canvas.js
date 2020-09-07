function drawCanvas(dataIndex){
//创建画布
    let canvas = document.createElement('canvas');
    canvas.setAttribute('id','canvas');
    canvas.setAttribute('width','670');
    canvas.setAttribute('height',271);
    document.querySelector('#drawCanvas').appendChild(canvas);
//绘制坐标
    let myCanvas = document.querySelector('#canvas');
    let ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth="2";
    ctx.strokeStyle="rgb(99,99,99)";
    ctx.moveTo(50,0);
    ctx.lineTo(50,270);
    ctx.moveTo(50,270);
    ctx.lineTo(670,270);
    ctx.stroke();
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
    let barMax = slae0arrSort[0];//找到数据中最大值
    let drawHeightScale = (canvas.getAttribute("height")-1)/barMax;//绘制比例=画布高度/数据中最大值。这个绘制比例不能反应产品之间的关系，只能反应月份之间的销售量关系
//绘制折线
    for(let i=0; i<slae0arr.length; i++){
        let barHeight = slae0arr[i]*drawHeightScale;//根据绘制比例求出该柱子在画布中的高度
        let x1 = 50+(i+1)*barSpace+(2*i+1)*15;
        let y1 = 270-barHeight;
        let x2 = 50+(i+2)*barSpace+(2*(i+1)+1)*15;
        let y2 = 270-slae0arr[i+1]*drawHeightScale;
        ctx.beginPath();
        ctx.lineWidth="2";
        ctx.strokeStyle="red";
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }
}
function sortMax(a,b){
    return b - a;
}
drawCanvas(dataIndex);
