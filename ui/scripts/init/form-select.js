$('.form-select').each(function () {
	var t = $(this);

	var searchable = false;
	if(!!t.attr('searchable'))
		searchable = true;

	var multiple = false;
	if(!!t.attr('data-multiple'))
		multiple = true;

	new Selectr(this, {
		searchable: searchable,
		multiple: multiple
	});
});