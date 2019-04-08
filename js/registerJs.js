
var wait=60; // 定义等待时间
function time(o) {
  if (wait == 0) {
   o.removeAttribute("disabled");
   o.value="发送验证码";
   o.style.backgroundColor="rgb(225,87,72)";
   wait = 60;
  } else { 

   o.setAttribute("disabled", true);
   o.value="重新发送(" + wait + ")";
   o.style.backgroundColor="rgb(129,129,129)";
   wait--;
   setTimeout(function() {
    time(o)
   },
   1000)
  }
 }
document.getElementById("send_code").onclick=function(){time(this);}

