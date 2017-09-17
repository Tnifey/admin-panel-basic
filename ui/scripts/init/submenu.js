/*
	Submenu toggle for AdminUI https://github.com/tnifey/admin-ui
	Created by Tnifey in 2017
*/

$(document).ready(function () {

	$('.with-submenu').each(function () {
		var t = $(this);
		var a = t.find('a[data-toggler]');
		var s = t.find('.submenu');
		var i = $('<i class="fa fa-caret-down submenu-state"></i>');

		a.append(i);

		a.on('click', function (e) {
			e.preventDefault();
			a.toggleClass('hover').blur();
			s.toggleClass('show');
			i.toggleClass('fa-caret-down fa-caret-up');
		});
	});

});