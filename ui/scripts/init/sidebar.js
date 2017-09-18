$(document).ready(function () {
	var c = Cookies.get('sidebar-hidden');
	if(c === "true") {
		$('.fa', '.js-sidebar-toggle').toggleClass('fa-chevron-left fa-chevron-right')
		$('.ui-sidebar').addClass('hide');
	}

	$('.js-sidebar-toggle').on('click', function (e) {
		e.preventDefault();
		var s = $('.ui-sidebar');
		s.toggleClass('hide');
		if(s.hasClass('hide')) {
			Cookies.set('sidebar-hidden', "true")
			$('.fa', this).addClass('fa-chevron-right').removeClass('fa-chevron-left')
		}
		else {
			Cookies.set('sidebar-hidden', "false")
			$('.fa', this).removeClass('fa-chevron-right').addClass('fa-chevron-left')
		}
	});
});