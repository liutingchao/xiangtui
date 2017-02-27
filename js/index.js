$(function(){
	/*我们的优势*/
	$('.wmdys .zhi').on('mouseover',function(){
		$('.wmdys .box p').css('transform','translateY(0px)')
		})
		$('.wmdys img').on('mouseout',function(){
			$('.wmdys .box p').css('transform','translateY(128px)')
	})
})
 
var flag=false;
$(window).scroll(function(){
	var top=$(document).scrollTop()+$(window).height();
	if(top>$('.wmsc .wmsc_content ul li').offset().top&&top<1900){
		$('.wmsc .wmsc_content ul .li_01 img').css('animation','getLeft3 0.8s ease');
		$('.wmsc .wmsc_content ul .li_02 img').css('animation','getbottom3 0.8s ease');
		$('.wmsc .wmsc_content ul .li_03 img').css('animation','getright3 0.8s ease')
	}
	// alert($('.wmdys .pinzhi').offset().top);
	if(top>$('.wmdys .pinzhi').offset().top&&top<2600){
		$('.wmdys .build').css('animation','getbottom3 .8s ease');
	}
	if(top>4000&&top<5000){
			$('.pbyqcz .pb_content li').find('img').eq(0).css('animation-delay','0.1s');
			$('.pbyqcz .pb_content li').find('img').eq(1).css('animation-delay','2.5s');
			$('.pbyqcz .pb_content li').find('img').eq(2).css('animation-delay','1.3s');
			$('.pbyqcz .pb_content li').find('img').eq(3).css('animation-delay','1.9s');
			$('.pbyqcz .pb_content li').find('img').eq(4).css('animation-delay','0.7s');
			$('.pbyqcz .pb_content li').find('img').eq(5).css('animation-delay','0.9s');
			$('.pbyqcz .pb_content li').find('img').eq(6).css('animation-delay','1.5s');
			$('.pbyqcz .pb_content li').find('img').eq(7).css('animation-delay','2.7s');
			$('.pbyqcz .pb_content li').find('img').eq(8).css('animation-delay','2.3s');
			$('.pbyqcz .pb_content li').find('img').eq(9).css('animation-delay','1.3s');
			$('.pbyqcz .pb_content li').find('img').eq(10).css('animation-delay','1.7s');
			$('.pbyqcz .pb_content li').find('img').eq(11).css('animation-delay','0.2s');
			$('.pbyqcz .pb_content li').find('img').eq(12).css('animation-delay','0.5s');
			$('.pbyqcz .pb_content li').find('img').eq(13).css('animation-delay','1.1s');
			$('.pbyqcz .pb_content li').find('img').eq(14).css('animation-delay','2.1s');
			$('.pbyqcz .pb_content li').find('img').addClass('addEffect');
		}
		// alert($('.tmyhs .tm_content').offset().top);
		if(top>$('.tmyhs .tm_content').offset().top&&top<3900){
			$('.tmyhs .tm_content .img_01').css('animation','getLeft2 1s ease');
			$('.tmyhs .tm_content .img_02').css('animation','getTop2 1s ease');
			$('.tmyhs .tm_content .img_03').css('animation','getTop2 1s ease');
			$('.tmyhs .tm_content .img_04').css('animation','getTop2 1s ease');
			$('.tmyhs .tm_content .img_05').css('animation','getBottom2 1s ease');
			$('.tmyhs .tm_content .img_07').css('animation','getBottom2 1s ease');
			$('.tmyhs .tm_content .img_08').css('animation','getRight2 1s ease');
			$('.tmyhs .tm_content .img_09').css('animation','getBottom2 1s ease');
		}

	var marginLeft=0;
	$('.pbyqcz .leftArrow').on('click',function(){
		marginLeft+=201;

		$('.pbyqcz .pb_content ul').css('marginLeft',marginLeft+'px');
		$('.pbyqcz .rightArrow').fadeIn(500);
		if(marginLeft==0){
			$('.pbyqcz .leftArrow').fadeOut(500);
		}
	})

	$('.pbyqcz .rightArrow').on('click',function(){
		marginLeft-=201;
		$('.pbyqcz .pb_content ul').css('marginLeft',marginLeft+'px')
		$('.pbyqcz .leftArrow').fadeIn(500);
		if(marginLeft<=-603){
			$('.pbyqcz .rightArrow').fadeOut(500);
		}
	})

	
})