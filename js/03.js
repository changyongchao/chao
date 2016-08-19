$(function() {
	$('#pinpai table td').on('mouseover', function() {
		$(this).find('a').animate({
			top: '0'
		}, 200)
	})
	$('#pinpai table td').on('mouseleave', function() {
		$(this).find('a').animate({
			top: '105px'
		}, 100)
	})

	var timer1 = setInterval(function() {
		$('#scr_bj').animate({
			left: '-1200px'
		}, 'slow')
	}, 2000)
	var timer2 = setInterval(function() {
		if($('#scr_bj').position().left <= -1200) {
			$('.scr_stage').toggleClass('two')
			$('.scr_stage').toggleClass('one')
			$('#scr_bj').eq(0).css('left', '0')
		}
	}, 1000)

	$('#scr_btn1,#scr_btn1').on('mouseover', function() {
		clearInterval(timer1)
		clearInterval(timer2)
	})
	$('#scr_btn1,#scr_btn1').on('mouseleave', function() {
		timer1 = setInterval(function() {
			$('#scr_bj').animate({
				left: '-1200px'
			}, 'slow')
		}, 2000)
		timer2 = setInterval(function() {
			if($('#scr_bj').position().left <= -1200) {
				$('.scr_stage').toggleClass('two')
				$('.scr_stage').toggleClass('one')
				$('#scr_bj').eq(0).css('left', '0')
			}
		}, 1000)
	})

	$('#scr_btn1').on('mouseover', function() {
		if($('#a').attr('class') == 'scr_stage two') {
			$('.scr_stage').toggleClass('two')
			$('.scr_stage').toggleClass('one')
			$('#scr_bj').eq(0).css('left', '0')
		}
	})
	$('#scr_btn2').on('mouseover', function() {
		if($('#b').attr('class') == 'scr_stage two') {
			$('.scr_stage').toggleClass('two')
			$('.scr_stage').toggleClass('one')
			$('#scr_bj').eq(0).css('left', '0')
		}
	})
})