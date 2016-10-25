$('#new_user').on('ajax:error', function(event, xhr, status, error) {
	App.alert(xhr.responseText, '#main');
})
