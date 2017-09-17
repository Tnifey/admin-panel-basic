$(document).ready(function () {

	$('.js-sidebar-toggle').on('click', function (e) {
		e.preventDefault();
		var s = $('.ui-sidebar');
		s.toggleClass('hide');
	});

});