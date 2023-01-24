//q4
'use strict'
function showNotification()
{
    let payam = prompt("payam khod ra vared konid: ");
    let topp=+prompt('enter top:');
    let leftt=+prompt('enter left:');
    let cname=prompt('name class ra vared konid: ');
    let div =document.createElement('div');
    document.body.append(div);
    div.style.position="absolute";
    div.style.top=`${topp}%`;
    div.style.left=`${leftt}%`;
    div.className=`${cname}`;
    div.innerHTML=payam;
    alert(`your class name set to: ${div.className}`);
}
showNotification();
