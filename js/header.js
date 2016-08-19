$(function() {
	$('.shouji-img').hide()
	$('#shouji').on('mouseenter', function() {
		$('#weixin').css('background-color', 'green')
		$('.shouji-img').show()
	})
	$('#shouji').parent().on('mouseleave', function() {
		$('#weixin').css('background-color', 'gray')
		$('.shouji-img').hide()
	})

	$('#slide').css('display', 'none')
	$('header>div>ul>li').on('mouseover', function() {
		$(this).find('ul').show()
		$(this).find('.arrow').css('transform', 'rotate(270deg)')
	})
	$('header>div>ul>li').on('mouseleave', function() {
		$(this).find('ul').hide()
		$(this).find('.arrow').css('transform', 'rotate(90deg)')
	})
	$('#nav-right').on('mouseover', function() {
		$('#slide').show()
	})
	$('#nav-right').on('mouseleave', function() {
		$('#slide').hide()
	})
})