var termAgreed = false;//We don't really need this variable this split moment...but I believe it will become helpful in the future

var buttonChoiceForSetup3_2 = "";

function checkTermAndServiceCheckbox(){
	if($('#termAndService').prop('checked')) {
		$('#nameSetupPageNextButton').prop('disabled', false);
		termAgreed = true;
	}
	else{
		$('#nameSetupPageNextButton').prop('disabled', true);
		termAgreed = false;
	}
}

function storeButtonChoice(buttonChoice){
	buttonChoiceForSetup3_2 = buttonChoice;
}

function changefirstSetupPage3_2ButtonName(){
	var start = "Start personalizing ";
	var end = " button";
	
	$('#firstSetupPage3-2Title').text(start.concat(buttonChoiceForSetup3_2.concat(end)));
}

