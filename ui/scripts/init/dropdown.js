$(document).ready(function () {

	$('[data-dropdown]').on('click', function (e) {
		e.preventDefault();
		var t = $(this);
		// dropdown
		var did = t.attr('data-dropdown');
		var d = $('#'+did);

		t.toggleClass('focus');

		if(!t.hasClass('focus'))
			t.blur();

		d.toggleClass('dropdown-show');

		var p = new Popper(t[0], d[0], {
			placement: "bottom-end"
		});
	});

});