import Inputmask from "inputmask";

/* placeholder*/       
$('input, textarea').each(function(){
    var placeholder = $(this).attr('placeholder');
    $(this).focus(function(){ $(this).attr('placeholder', '');});
    $(this).focusout(function(){             
        $(this).attr('placeholder', placeholder);           
    });
});
/* placeholder*/

$(()=>{

	var selector = document.querySelectorAll("input[name='phone']");

	var im = new Inputmask({
		"mask": "+7 (999) 999-99-99",
		clearMaskOnLostFocus: true,
		clearIncomplete: true			
	});

	im.mask(selector);


	$('.form__input')
		.on('focus', (e)=>{
			let $input = $(e.target)
			$input.parent().addClass('is-focus')
		})
		.on('blur change', (e)=>{
			let $input = $(e.target)

			if($input.val() == '')
				$input.parent().removeClass('is-focus')
	 	})


	$("form").each((i, el) => {
		var $form = $(el);

		$form.validate({
			errorPlacement: function(error, element) { 
				//just nothing, empty  
			},
			highlight: (element, errorClass, validClass) => {
				$(element).parent().addClass(errorClass).removeClass(validClass);
			},
			unhighlight: (element, errorClass, validClass) => {
				$(element).parent().removeClass(errorClass).addClass(validClass);
			},
			submitHandler: (form) => {

				var data = $(form).serialize();

				$.ajax({
					type: 'POST',
					url: '/app/mail/',
					data: data,
					success: function(data) {
						$(form)[0].reset();
						thank();
					}
				});

			},             
			rules: {
				name:{
					required: true,
					minlength: 3,
				},
				email:{
					required: true,
					email: true,
				},
				index:{
					required: true,
					minlength: 6,
				},
				phone:{
					required: true,
					minlength: 10,
				},
				adress:{
					required: true,
					minlength: 10,
				},
				mess:{
					required: true,
					minlength: 100,
				},
			}		
		})

	});
	
	function thank() {
		$.magnificPopup.open({
			tClose: 'Закрыть',
			removalDelay: 500,
			fixedContentPos: true,
			fixedBgPos: true,
			overflowY: 'hidden',			
			closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close close" viewBox="0 0 612 612"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
			mainClass: 'css-modal-animate',				
			items: {
				src: "#thank",
				type: 'inline'
			},
			callbacks: {
				beforeOpen: () => {
					$('body').addClass('is-modal-open')
				},
				beforeClose: () => {
					$('body').removeClass('is-modal-open')
				}
			}
		}, 0);
	}

})