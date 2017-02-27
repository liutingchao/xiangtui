$(function(){

$('body').append('<div class="backtop"><img src="images/top.png"></div><div class="contact">联系客服</div>');
	$('.backtop').on('click',function(){
		$('body').animate({scrollTop:0},500);
	})
})



var flag=false;
$(window).scroll(function(){
	var top=$(document).scrollTop()+$(window).height();
	if($(document).scrollTop()>100){
		$('.backtop').fadeIn(500);
		$('.contact').fadeIn(500);
	}else{
		$('.backtop').fadeOut(500);
		$('.contact').fadeOut(500);
	}

	if(top>$('.register p span').offset().top){
		var registerNum=0;
		var setTimeId=0;
		if(!flag){
			if($('.register p span').text()!=3658){
			setTimeId=setTimeout(changeNum,10);
			}
			flag=true;
		}
		function changeNum(){		
			if(registerNum>=3658){
				clearTimeout(setTimeId);
			}else{			
				registerNum+=40;//3680
				registerNum>3658?registerNum=3658:registerNum;
				$('.register p span').text(registerNum);
				setTimeId=setTimeout(changeNum,10);
			}		
		}
	}
})