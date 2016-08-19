$(function() {
	$('#_1').children().css('display', 'inline-block')
	$('#btn_2_0,#dis').on('mouseover', function() {
		$('#dis').show()
	})
	$('#btn_2_0,#dis').on('mouseleave', function() {
		$('#dis').hide()
	})
})