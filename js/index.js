// banner轮播图控件
$("#banner").banner({
    imgs:$("#banner .ba-img").find("a"),     //必传
    left:$("#banner .control").find("#leftBtn"),   //左按钮，可选
    right:$("#banner .control").find("#rightBtn"), //右按钮，可选
    list:true,         //是否要小圆圈，可选，默认要
    autoPlay:true,     //是否要自动播放，可选，默认要
    delayTime:2500,     //可选的，图片播放间隔时间
    moveTime:300,        //可选的，图片移动的时间
    listBgColor:"rgb(255,123,0)"
});