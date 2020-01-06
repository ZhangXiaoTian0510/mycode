// 二级菜单的功能
// $("#nav #navAll .allShop").bind({
//     mouseover:function(){
//         $("#navAll .allShop").parent().next().children().css('display','inline-block')
//     },
//     mouseout:function(){
//         $("#navAll .allShop").parent().next().children().css('display','none')
//     }
//  });
//  $("#menu").bind({
//     mouseover:function(){
//         $(this).css('display','inline-block')
//     },
//     mouseout:function(){
//         $("#navAll .allShop").parent().next().children().css('display','none')
//     }
//  });
// 鼠标滑过出现

// $("#nav #navAll .allShop").hover(function(){
//         $("#navAll .allShop").parent().next().children('#menu').css('display','inline-block')
//     },function(){
//         $("#navAll .allShop").parent().next().children('#menu').css('display','none')
    
//  });
//  $("#menu").hover(function(){
//         $(this).css('display','inline-block')
//     },function(){
//         $("#navAll .allShop").parent().next().children().css('display','none')
//     }
//  );
// 菜单背景颜色变化
// $("#menu").children().hover(function(){
//     $(this).css('backgroundColor','rgb(220,220,220)')
// },function(){
//     $(this).css('backgroundColor','#fff')
// }
// );

 //三级菜单的事件
    $('#menu .me-cp,#menu .qe,#menu .hc,#menu .gx').hover(function(){
        $(this).parent().next().css('display','flex')
    },function(){
        $(this).parent().next().css('display','none')}
        );
    $('#nav .ejMenu .menuXp').hover(function(){
        $(this).css('display','flex')
        $(this).parent().children().eq(0).css('display','block')
    },function(){
        $(this).css('display','none')
        $(this).parent().children().eq(0).css('display','none')}
    );

class myNav{
    constructor(){
        this.menuXp = $("#menu").children();
        this.allShop = $("#nav #navAll .allShop");
        this.addEvent();
    }
    addEvent(){
        //背景颜色变化
        this.menuXp.hover(function(){
            $(this).css('backgroundColor','rgb(220,220,220)')
        },function(){
            $(this).css('backgroundColor','#fff')
        });
        //竖向的列表显示和隐藏
        this.allShop.hover(function(){
            $(this).parent().next().children('#menu').css('display','inline-block')
        },function(){
        $(this).parent().next().children('#menu').css('display','none')
        });
        $("#menu").hover(function(){
                $(this).css('display','inline-block')
            },function(){
                $(this).css('display','none')
            }
        );
            
    }
}
new myNav;

