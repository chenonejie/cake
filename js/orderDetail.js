$('.abolish').on('click',function(){
	$('.alert').css('display','block');
	$('.shade').css('display','block');
	$('.yesdelete').click(function(){
		$('.goods-list').remove();
		$('.address').remove();
		$('.ipone').remove();
		$('.alert').css('display','none');
		$('.shade').css('display','none');
		$('.footer').css('display','none');
		alert('你没有订单了，快去逛逛。');
	})
	$('.ondelete').click(function(){
		$('.alert').css('display','none');
		$('.shade').css('display','none');
	})
})
