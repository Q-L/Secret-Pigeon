function checkTermAndServiceCheckbox(){
	if($('#termAndService').prop('checked')) {
		$('#nameSetupPageNextButton').prop('disabled', false);
	}
	else{
		$('#nameSetupPageNextButton').prop('disabled', true);
	}
}

function goToTutorial(){
	window.location.href = "#tutorialPage";
}