$(function() {
	$('.bar').on('mouseover', function() {
		$(this).children().animate({
			top: '-40px'
		}, 200)
		$(this).on('mouseleave', function() {
			$(this).children().animate({
				top: '0'
			}, 200)
		})
	})

	$('#other_btn_2_0,#other_dis').on('mouseover', function() {
		$('#other_dis').show()
	})
	$('#other_btn_2_0,#other_dis').on('mouseleave', function() {
		$('#other_dis').hide()
	})

	$('#other_footer>div>div').hide()
	$(window).scroll(function() {
		if($(window).scrollTop() >= 210) {
			$('#_1').hide()
			$('#other_2').show()
		} else {
			$('#_1').show()
			$('#other_2').hide()
		}

		if($(window).scrollTop() >= 700 && $('#other_footer').position().left < 0) {
			$('#slide_btn').show()
		} else {
			$('#slide_btn').hide()
			if($(window).scrollTop() <= 700) {
				$('#other_footer').hide()
			} else {
				$('#other_footer').show()
			}
		}
		//
		setInterval(function(){
			if($('main>div').offset().left >= 100) {
				$('#slide_btn').css('left', '0')
			} else {
				$('#slide_btn').css('left', '-115px')
			}
		},100)
	})
	$('#slide_btn').on('click', function() {
		$(this).hide()
		$('#other_footer>div>div').show()
		$(this).siblings().animate({
			left: '0'
		}, 300)
	})
	$('#other_footer button').on('click', function() {
		$('#other_footer').animate({
			left: '-100%'
		}, 300)
		$('#slide_btn').show()
	})

})