/**
 * Created by Administrator on 2018/1/23 0023.
 */
//封装获取id的方法
function $(id) {
    return typeof id === "string"?document.getElementById(id):id;
}
window.onload=function () {
    var index = 0;
    var timer = null;
    var  lis = $('notice-tit').getElementsByTagName('li');
    divs = $('notice-con').getElementsByTagName('div');
    //遍历所有的页签
    for(var i=0;i<lis.length;i++){
        lis[i].id = i;
        lis[i].onmouseover = function () {
            //用that这个变量来引用当前滑过的li
            var that = this;
            //如果存在准备执行的定时器，立即清除，只有当前停留时间大于500ms时候才开始执行
            if(timer){
                clearTimeout(timer)
                timer=null;
            }else {
                timer = setTimeout(function () {
                    for(var j=0;j<divs.length;j++){
                        lis[j].className = "";
                        divs[j].style.display = "none";
                    }
                    console.log(this)
                    lis[that.id].className = "select";
                    divs[that.id].style.display = "block"
                },300)
            }
        }
    }
}