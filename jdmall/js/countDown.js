/**
 * Created by Administrator on 2017/11/15 0015.
 */
var intTime =parseInt(8500); //倒计时总秒数
$(function(){
    window.setInterval(function(){
        var hour=0,
            minute = 0,
            second = 0;
        if (intTime>0) {
            var hour = Math.floor(intTime/(60*60));
            minute = Math.floor(intTime/60)-(hour*60);
            second = Math.floor(intTime)-(minute*60)-(hour*60*60);
        }
        if(hour<=9) hour = "0"+hour;
        if(minute<=9) minute= "0" +minute;
        if(second<=9) second = "0"+second;
        $('.hour').html(hour);
        $('.minute').html(minute);
        $('.second').html(second);
        intTime--;
    },1000)
});