$(function() {
	imgScroll.scroll({
		'name': 'imgscroll3',
		'direction': 'right'
	}, 3000)
	$('#hd>div ul').not('.first').hide()
	$('#check').hide()
	$('#hd>div>a').on('mouseover', function() {
		$(this).siblings().show().parent().css({
			'backgroundColor': 'white',
			'borderBottom': 'none'
		})
		$(this).parent().siblings().css({
			'backgroundColor': '#F8F8F8',
			'borderBottom': '1px solid gray'
		})
		$(this).parent().siblings().find('ul,div').hide()
	})

	$('#serve>ul>li').not('.n').on('mouseover', function() {
		$(this).css('backgroundColor', 'white')
			.animate({
				marginLeft: '-10px'
			}, 50)
			.find('span>a').css('color', '#ff6633')
		$(this).find('.serve_list').css('display', 'block')
		$('#content,#_2>.le').hide()
	})
	$('#serve>ul>li').not('.n').on('mouseleave', function() {
		$(this).css('backgroundColor', '#ff6633')
			.animate({
				marginLeft: '0'
			}, 10)
			.find('span>a').css('color', 'white')
		$(this).find('.serve_list').css('display', 'none')
		$('#content,#_2>.le').show()
	})
});