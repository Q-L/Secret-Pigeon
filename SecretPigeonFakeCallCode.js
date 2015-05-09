function checkEnableRecordedMessage() {
	if ($('#recordedMessage').prop('checked')) {
		$('#recordMessage').prop('disabled', false);
	}
	else {
		$('#recordMessage').prop('disabled', true);
	}
}