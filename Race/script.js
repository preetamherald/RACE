$(window).scroll(function() {
			if ($(window).scrollTop()>100) {
				$('a.back2Top').fadeIn('fast');
			}
			else{
				$('a.back2Top').fadeOut('fast');
			}
		})

		$(document).ready(function() {
			$("a.back2Top").click(function(event) {
				event.preventDefault();
				$("html,body").animate({
				scrollTop: 0
			}, 1000);

			return false;
		});
});