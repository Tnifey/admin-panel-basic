$(document).ready(function () {

	var c = Cookies.get('sidebar-hidden');
	if(c === "true") {
		$('.ui-sidebar').addClass('hide');
	}

	$('.js-sidebar-toggle').on('click', function (e) {
		e.preventDefault();
		var s = $('.ui-sidebar');
		s.toggleClass('hide');
		if(s.hasClass('hide'))
			Cookies.set('sidebar-hidden', "true")
		else
			Cookies.set('sidebar-hidden', "false")
	});

});