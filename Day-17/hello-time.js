// https://blog.csdn.net/wdzhszyq/article/details/73867914
// 参考链接
function hello(){
        var date = new Date();
        var day =date.getDate();
        var hours = date.getHours();
        var min = date.getMinutes();
        var monthArr = new Array();
        monthArr[0]=1;
        monthArr[1]=2;
        monthArr[2]=3;
        monthArr[3]=4;
        monthArr[4]=5;
        monthArr[5]=6;
        monthArr[6]=7;
        monthArr[7]=8;
        monthArr[8]=9;
        monthArr[9]=10;
        monthArr[10]=11;
        monthArr[11]=12;
        if(hours>5&&hours<=8){
            alert(`
                早上好
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
            `);
        }
        else if(hours>=8&&hours<12){
            alert(`
                上午好
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
            `);
        }
        else if(hours>=12&&hours<14){
            alert(`
                中午好
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
            `);
        }
        else if(hours>=14&&hours<18){
            alert(`
                下午好
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
            `);
        }
        else if(hours>=18&&hours<22){
            alert(`
                晚上好
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
            `);
        }
        else {
            alert(`
                现在是：
                ${monthArr[date.getMonth()]}月${day}日${hours}:${min},
                要注意休息呀`);
        }
    }
hello();
