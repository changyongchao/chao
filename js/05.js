$(function() {
	$('._5_3_nav').eq(0).css('border-bottom', '3px solid orange').children().css('color', 'orange')
	$('._5_serve').eq(1).hide()
	$('._5_3_nav').on('mouseover', function() {
		$(this).css('border-bottom', '3px solid orange').children().css('color', 'orange')
		$(this).siblings().css('border-bottom', '3px solid lightgray').children().css('color', 'lightgray')
	})
	$('._5_3_nav').eq(0).on('mouseover', function() {
		$('._5_serve').eq(0).show()
		$('._5_serve').eq(1).hide()

	})
	$('._5_3_nav').eq(1).on('mouseover', function() {
		$('._5_serve').eq(1).show()
		$('._5_serve').eq(0).hide()
	})

	$('#_5_5_content2').hide()
	$('._5_5_content').css('height', $('._5_5_content ul').css('height'))

	function change() {
		if($('#_5_5_nav_btn1').css('color') == 'rgb(255, 165, 0)') {
			change1()
		} else {
			change2()
		}
	}
	$('#_5_5_nav_btn1').on('mouseenter', function() {
		change2()
	})
	$('#_5_5_nav_btn2').on('mouseenter', function() {
		change1()
	})

	var changeing = setInterval(change, 3000)
	$('#_5_5_nav_btn1,#_5_5_nav_btn2,#_5_5_content1,#_5_5_content2').on('mouseover', function() {
		clearInterval(changeing)
	})
	$('#_5_5_nav_btn1,#_5_5_nav_btn2,#_5_5_content1,#_5_5_content2').on('mouseleave', function() {
		changeing = setInterval(change, 3000)
	})

	function change1() {
		$('#_5_5_nav_btn1').css({
			'color': 'darkgray',
			'border-bottom': 'none'
		})
		$('#_5_5_nav_btn2').css({
			'color': 'orange',
			'border-bottom': '3px solid orange'
		})
		$('#_5_5_content1').fadeOut()
		$('#_5_5_content2').fadeIn()
	}

	function change2() {
		$('#_5_5_nav_btn1').css({
			'color': 'orange',
			'border-bottom': '3px solid orange'
		})
		$('#_5_5_nav_btn2').css({
			'color': 'darkgray',
			'border-bottom': 'none'
		})
		$('#_5_5_content1').fadeIn()
		$('#_5_5_content2').fadeOut()
	}
})