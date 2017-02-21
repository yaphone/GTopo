$(function(){

})

$(window).resize(function () { //浏览器窗口大小改变时触发
    height = $(window).height(); //浏览器高度
    width = $(window).width();  //宽度
    var canvas = $("myCanvas"); //获取画布
    canvas.height = height;
    canvas.width = width;
    alert(canvas.height)
});

$(function () { //初始画布大小为浏览器窗口大小
    var canvas = $("myCanvas");
    var context = canvas.get(0).getContext("2d");
    convas.attr("width", $(window).get(0).innerWidth());
    canvas.attr("height", $(window).get(0).innerHeight());
    context.fillRect(0, 0, canvas.width(), canvas.height());
})