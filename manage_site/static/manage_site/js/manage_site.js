// 点哪显示哪
$(function(){
	var idx=0;
	$(".details ul").eq(idx/2).show();
	console.log(idx);
	$(".nav h3").click(function(){
		idx=$(this).index();
		$(".details ul").eq(idx/2).show().siblings('ul').hide();
		console.log(idx);
	})
});
// 图片轮播
$(function(){
	var timer=setInterval("$('.arr-r').click()",3000);
	var count=0;
	$(".arr-r").click(function(){
		count++;
		if(count==$(".face li").length){
			count=0;
		}
		$(".face li").eq(count).stop().fadeIn().siblings("li").fadeOut();
		$(".points li").eq(count).css('backgroundColor', '#555')
		.siblings('li').css('backgroundColor','rgba(255,255,255,0.8)');
	})
	$(".arr-l").click(function(){
		count--;
		if(count==-1){
			count=$(".face li").length;
		}
		$(".face li").eq(count).stop().adeIn().siblings("li").fadeOut();
		$(".points li").eq(count).css('backgroundColor', '#555')
		.siblings('li').css('backgroundColor','rgba(255,255,255,0.8)');
	})
	$(".photo").mouseover(function(){
		$(".arr-l,.arr-r").show();
		clearInterval(timer);
	})
	$(".photo").mouseout(function(){
		$(".arr-l,.arr-r").hide();
		timer=setInterval("$('.arr-r').click()",3000);
	})

});
// 推荐的一些网站
$(function(){
	$(".subnav li").mouseover(function() {
		var idx=$(this).index();
		$(".container li").eq(idx).show().siblings('li').hide();
	})
});