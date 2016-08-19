$(function() {
	$('.case-discription').hide()
	$('.hover').on('mouseover', function() {
		$(this).find('.case-discription').slideDown()
	})
	$('.hover').on('mouseleave', function() {
		$(this).find('.case-discription').slideUp()
	})

	$('.black .erweima').hide()
	$('#erweima').on('mouseover', function() {
		$('.black .erweima').show()
	})
	$('#erweima').on('mouseleave', function() {
		$('.black .erweima').hide()
	})
})