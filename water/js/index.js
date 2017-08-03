////////////////////////////////////////////////////////////////////
//                          _ooOoo_                               //
//                         o8888888o                              //
//                         88" . "88                              //
//                         (| ^_^ |)                              //
//                         O\  =  /O                              //
//                      ____/`---'\____                           //
//                    .'  \\|     |//  `.                         //
//                   /  \\|||  :  |||//  \                        //
//                  /  _||||| -:- |||||-  \                       //
//                  |   | \\\  -  /// |   |                       //
//                  | \_|  ''\---/''  |   |                       //
//                  \  .-\__  `-`  ___/-. /                       //
//                ___`. .'  /--.--\  `. . ___                     //
//              ."" '<  `.___\_<|>_/___.'  >'"".                  //
//            | | :  `- \`.;`\ _ /`;.`/ - ` : | |                 //
//            \  \ `-.   \_ __\ /__ _/   .-` /  /                 //
//      ========`-.____`-.___\_____/___.-`____.-'========         //
//                           `=---='                              //
//      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^        //
//         佛祖保佑       永无BUG     永不修改                  //
////////////////////////////////////////////////////////////////////
/** 
 *             ,%%%%%%%%, 
 *           ,%%/\%%%%/\%% 
 *          ,%%%\c "" J/%%% 
 * %.       %%%%/ o  o \%%% 
 * `%%.     %%%%    _  |%%% 
 *  `%%     `%%%%(__Y__)%%' 
 *  //       ;%%%%`\-/%%%'
 * ((       /  `%%%%%%%' 
 *  \\    .'          | 
 *   \\  /       \  | | 
 *    \\/         ) | | 
 *     \         /_ | |__ 
 *     (___________))))))) 攻城湿 
 */
// 首页轮播图
$(function(){
	var swiper = new Swiper('.swiper-container', {
         pagination: '.swiper-pagination',
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
         slidesPerView: 1, //页面显示图的张数
         paginationClickable: true,
         spaceBetween: 30,//俩图之间的距离
         loop: true,//是否循环滚动
         centeredSlides: true,
         effect : 'fade',
    	 autoplay: 2500,//换图间隔时间
     	 autoplayDisableOnInteraction: false,
     	 autoHeight: true //随图片高度自动变化
     });
})
// 搜索
$(function() {
	$(".search").mouseover(function() {
		$(this).find(".menuChild").show();
	}).mouseout(function() {
		$(this).find(".menuChild").hide();
	})
});
		
// 通知滚动
$(function(){
	  //定义函数组
	  var fns={
		  //向上
		_up : function(){
			 $(".notice ul").stop().animate({marginTop:"-30px"},500,
			   function(){
					$(".notice ul li:lt(1)").appendTo($(".notice ul"));
					$(".notice ul").css("marginTop",0);
			 });		  
		}
	  };
	  
	  var _autoUp = null;
	  $(".notice").mouseover(function(){
		  autoStop2();
	  });
	  
	  $(".notice").mouseout(function(){
		//鼠标离开后再重新恢复自动播放时间,单位毫秒
		_autoUp = setInterval(function(){fns._up() ; },1500);
	  });	
	  
	  var autoPlay2 = function(){
		//自动播放时间,单位毫秒
		_autoUp = setInterval(function(){fns._up() ; },1500);
	  };
	  
	  var autoStop2 = function(){
		  clearInterval(_autoUp);
		  _autoUp = null;
	   };	
	   
	  //自动播放
	  autoPlay2();
});

// 酒艺
$(".bg_li").hover(function(){
	$(this).find(".box_txt").stop(true,true).slideToggle();
},function(){
	$(this).find(".box_txt").stop(true,true).slideToggle();
});


// 首页产品中心导航栏
$(function(){
	$(".menu_head").click(function(){
		
		if($(this).hasClass("menu_head_hover")){
			$(this).removeClass("menu_head_hover").next(".menu_body").slideToggle();
		}
		else{
			$(this).addClass("menu_head_hover").next(".menu_body").slideToggle();
		}
	})
})

// 新闻中心
$(function(){
    var mySwiper2 = new Swiper('.swiper-container2',{
	loop: true,
	nextButton: '.swiper-button-next',
  	prevButton: '.swiper-button-prev',
	autoplay: 3000,
	effect : 'coverflow',
	slidesPerView: 3,
	centeredSlides: true,
	coverflow: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
	 	}
	});
})
// 首页公司荣誉和企业招聘
$(function(){
  var mySwiper3 = new Swiper('.swiper-container3',{
	loop: true,
	autoplay: 3000,
	effect : 'cube',
	autoplayDisableOnInteraction: false
	});
})



// 环境展示

	 // 插件部分
	 	jQuery(".wpp").slide({
		mainCell: ".dlList",
		effect: "leftLoop",
		vis: 5,
		autoPlay: true
		});

	// 遮罩层部分	
	 	$(".img_pic ul li").hover(function(){
	 		$(this).find(".yy").stop(true,true).slideToggle();
	 	},function(){
	 		$(this).find(".yy").stop(true,true).slideToggle();
	 	});


// 新闻列表页 加上一个小圆点	
$(function(){
	$(".news_wz").find("a").prepend("•&nbsp;");	
});

// 分享：
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"6","bdPos":"right","bdTop":"100"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];


