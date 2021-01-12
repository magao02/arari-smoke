$(function(){
	var delay = 3000;
	var indiceAtual = 0;
	var indiceMaximo = $('.slider img').length;
	initSlider()
	cliqueSlider()


	/* funções */
	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.bullets-nav').append('<span style="background-color: red;"></span>')
			}else{
				$('.bullets-nav').append('<span></span')
			}
		}
		$('.slider img').eq(0).fadeIn()
		setInterval(function(){
			alternarSlide()
		}, 5000)
	}

	function cliqueSlider(){
		$('.bullets-nav span').click(function(){
			$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual= $(this).index();
			$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color', '#ccc')
			$(this).css('background-color', 'red')
		})
	}

	function alternarSlide(){
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual +=1
		if (indiceAtual == indiceMaximo) {
			indiceAtual = 0
		}
		$('.bullets-nav span').css('background-color', '#ccc');
		$('.bullets-nav span').eq(indiceAtual).css('background-color', 'red')
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
	}

});