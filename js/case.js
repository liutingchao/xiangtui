$(function  () {
	var top=$(document).scrollTop()+$(window).height();
	if(top>$('.caseBanner .tm_content').offset().top&&top<1100){
			$('.caseBanner .tm_content .img_01').css('animation','getLeft2 1s ease');
			$('.caseBanner .tm_content .img_02').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_03').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_04').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_05').css('animation','getBottom2 1s ease');
			$('.caseBanner .tm_content .img_07').css('animation','getBottom2 1s ease');
			$('.caseBanner .tm_content .img_08').css('animation','getRight2 1s ease');
			$('.caseBanner .tm_content .img_09').css('animation','getBottom2 1s ease');
	}
	
})

$(window).scroll(function(){
	var top=$(document).scrollTop()+$(window).height();
	if(top>$('.caseBanner .tm_content').offset().top&&top<1100){
			$('.caseBanner .tm_content .img_01').css('animation','getLeft2 1s ease');
			$('.caseBanner .tm_content .img_02').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_03').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_04').css('animation','getTop2 1s ease');
			$('.caseBanner .tm_content .img_05').css('animation','getBottom2 1s ease');
			$('.caseBanner .tm_content .img_07').css('animation','getBottom2 1s ease');
			$('.caseBanner .tm_content .img_08').css('animation','getRight2 1s ease');
			$('.caseBanner .tm_content .img_09').css('animation','getBottom2 1s ease');
	}
	if(top>$('.jrhy .jrhy_main .jrhy_content').offset().top&&top<1900){
		$('.jrhy .jrhy_main .jrhy_content .img_01').css('animation','getLeft2 1s ease');
		$('.jrhy .jrhy_main .jrhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.jrhy .jrhy_main .jrhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}
	// alert($('.bxhy .bxhy_main .bxhy_content').offset().top&&top<2420);
	if(top>$('.bxhy .bxhy_main .bxhy_content').offset().top&&top<2420){
		$('.bxhy .bxhy_main .bxhy_content .img_01').css('animation','getRight2 1s ease');
		$('.bxhy .bxhy_main .bxhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.bxhy .bxhy_main .bxhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}

	if(top>$('.lvyou .lvyou_main .lvyou_content').offset().top&&top<2940){
		$('.lvyou .lvyou_main .lvyou_content .img_01').css('animation','getLeft2 1s ease');
		$('.lvyou .lvyou_main .lvyou_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.lvyou .lvyou_main .lvyou_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}

	if(top>$('.dshy .bxhy_main .bxhy_content').offset().top&&top<3460){
		$('.dshy .bxhy_main .bxhy_content .img_01').css('animation','getRight2 1s ease');
		$('.dshy .bxhy_main .bxhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.dshy .bxhy_main .bxhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}

	if(top>$('.ylhy .jrhy_main .jrhy_content').offset().top&&top<3980){
		$('.ylhy .jrhy_main .jrhy_content .img_01').css('animation','getLeft2 1s ease');
		$('.ylhy .jrhy_main .jrhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.ylhy .jrhy_main .jrhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}

	if(top>$('.jyhy .bxhy_main .bxhy_content').offset().top&&top<4500){
		$('.jyhy .bxhy_main .bxhy_content .img_01').css('animation','getRight2 1s ease');
		$('.jyhy .bxhy_main .bxhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.jyhy .bxhy_main .bxhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}

	if(top>$('.cmhy .jrhy_main .jrhy_content').offset().top&&top<5020){
		$('.cmhy .jrhy_main .jrhy_content .img_01').css('animation','getLeft2 1s ease');
		$('.cmhy .jrhy_main .jrhy_content .img_02').css('animation','getShow 1.5s ease 1s forwards');
		$('.cmhy .jrhy_main .jrhy_content .img_03').css('animation','getShow 1.5s ease 1s forwards');
	}
})