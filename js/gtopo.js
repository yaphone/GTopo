$(function(){
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
    }
})

$(function () { //初始画布大小为浏览器窗口大小
    var canvas = $("myCanvas");
    var context = canvas.get(0).getContext("2d");
    convas.attr("width", $(window).get(0).innerWidth());
    canvas.attr("height", $(window).get(0).innerHeight());
    context.fillRect(0, 0, canvas.width(), canvas.height());
})