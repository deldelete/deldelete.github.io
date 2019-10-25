$(function() { /* Changed from anon function for safari compatibility */
  	$(".button-collapse").sideNav();
  	$(".carousel-slider").carousel({full_width: true, indicators: true});
  	$(".dropdown-button").dropdown({hover: true});
  	$(".parallax").parallax();

  	if($('.slider-contact-form form').length==1){
	  	$('.slider-contact-form form').validate({
		    ignore:'',
		    rules:{
		      	'your-name'  :'required',
		      	'your-email' :'required',
		      	'your-phone' :'required',
		      	'your-message' :'required'
		    },
		    errorPlacement: function(error, element) {
		      	var placement = $(element).data('error');
		      	if (placement) {
		        	$(placement).append(error)
		      	} else {
		        	error.insertAfter(element);
		      	}
		    }
	  	});
	  	$(document).on('click', '.slider-contact-form .submit-button', function(e){
			if($('.slider-contact-form form').valid()){
				$('.slider-contact-form form').submit();
			}
			return false;
		});
	}
});
