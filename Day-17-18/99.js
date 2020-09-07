 var str = '<table>';
 for (let r=1; r<10; r++) {
     str+='<tr>';
     for (let c=1; c <10 ;c++) {
         var num = r + 'x' + c + '=' + r*c;
         str+='<td>'+num+'</td>'
     }
     str+='</tr>';
 }
 str += '</table>';
 document.getElementById("table").innerHTML = str;
