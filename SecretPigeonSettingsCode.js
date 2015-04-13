function checkTermAndServiceCheckbox(){
	if($('#termAndService').prop('checked')) {
		$('#nameSetupPageNextButton').prop('disabled', false);
	}
	else{
		$('#nameSetupPageNextButton').prop('disabled', true);
	}
}

function goToTutorial(){
	window.location.href = "#tutorialPage1";
}

function goToSetup() {
	window.location.href = "#firstSetupPage2"; 
}

function goToSetup3_2(){
	window.location.href = "#firstSetupPage3-2"
}