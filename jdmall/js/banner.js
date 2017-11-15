/**
 * Created by Administrator on 2017/11/15 0015.
 */
var timer;
var index=1;
function animate(offset) {
    var newLeft = parseInt($('#list').css('left'))+offset;
    $('#list').css('left',newLeft+'px')
    if(newLeft<-3160) {
        $('#list').css('left','-790px')
    }
    if(newLeft>-790){
        $('#list').css('left','-3160px')
    }
}
$('#next').click(function() {
    index+=1;
    if(index>5){
        index=1;
    }
    animate(790)
    buttonsShow();
})
$('#prev').click(function(){
    index-=1;
    if(index<1){
        index=5
    }
    animate(-790);
    buttonsShow();
})
$('#container').mouseover(function(){
    clearInterval(timer)
})
$('#container').mouseout(function(){
    play()
})
function play() {
    timer = setInterval(function(){
        $('#next').click()
    },1500)
}
play();
function buttonsShow (){
    for(var i=0;i<$('#buttons span').length;i++){
        if($('#buttons span')[i].className == "on") {
            $('#buttons span')[i].className = ""
        }
    }
    $('#buttons span')[index-1].className="on"
}
for(var i=0;i<$('#buttons span').length;i++){
    (function(i){
        $('#buttons span').eq(i).click(function(){
            var clickIndex = parseInt(this.getAttribute('index'))
            var offset = 790*(index- clickIndex)
            animate(offset);
            index = clickIndex;
            buttonsShow()
        })
    })(i)
}