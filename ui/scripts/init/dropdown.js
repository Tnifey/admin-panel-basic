$(document).ready(function () {

	$('[data-dropdown]').each(function () {
		var t = $(this);
		// dropdown
		var did = t.attr('data-dropdown');
		var d = $('#'+did);

		var dp = d.attr('data-placement') || "bottom-start";

		if(!window.dropdowns)
			window.dropdowns = [];

		var p = new Popper(t[0], d[0], {
			placement: dp,
			modifiers: {
				preventOverflow: {
					enabled: true,
					boundariesElement: document.body,
				},
				flip: {
					enabled: true,
		            behavior: ['bottom-end']
		        },
			},
		});

		window.dropdowns[did] = p;

		// d.hide();
		setTimeout(function () {
			d.hide();
		}, 50)
	});

	$('[data-dropdown]').on('click', function (e) {
		e.preventDefault();
		var t = $(this);
		// dropdown
		var did = t.attr('data-dropdown');
		var d = $('#'+did);

		window.dropdowns[did].update()

		t.toggleClass('focus');

		if(!t.hasClass('focus')) {
			t.blur();
			d.fadeOut(150);
		} else {
			d.fadeIn(150);
		}
	});

});