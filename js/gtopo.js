$(function(){
    var canvas = $("#myCanvas")[0]; //这里需要把Jquery对象转换为DOM对象使用
    if(canvas.getContext){
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = '#FD0';
        ctx.fillRect(0,0,75,75);
        ctx.fillStyle = '#6C0';
        ctx.fillRect(75,0,75,75);
        ctx.fillStyle = '#09F';
        ctx.fillRect(0,75,75,75);
        ctx.fillStyle = '#F30';
        ctx.fillRect(75,75,75,75);
        ctx.fillStyle = '#FFF';

        // 设置透明度值
        ctx.globalAlpha = 0.2;

        // 画半透明圆
        for (var i=0;i<7;i++){
            ctx.beginPath();
            ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
            ctx.fill();
        }
    }
})

$(window).resize(function () { //浏览器窗口大小改变时触发
    height = $(window).height(); //浏览器高度
    width = $(window).width();  //宽度
    var canvas = $("#myCanvas")[0]; //获取画布
    canvas.height = height;
    canvas.width = width;
});
