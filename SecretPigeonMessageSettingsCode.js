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


function storeMessage(){
	console.log(buttonChoiceForSetup3_2);
	/*test which scenario is the user setting and store the values under the appropriate variables.*/
	if (buttonChoiceForSetup3_2 == "Emergency"){
		localStorage.setItem("emergencyMessageText", $("#message").val());
		if($("#GPSLocation").prop("checked")){
			localStorage.setItem("emergencyGPS", "enabled");
		}
		else{
			localStorage.setItem("emergencyGPS", "disabled");
		}
		if($("#screamFeature").prop("checked")){
			localStorage.setItem("emergencyScream", "enabled");
		}
		else{
			localStorage.setItem("emergencyScream", "disabled");
		}
		if($("#repeatFeature").prop("checked") && $("#repeatTime").val() != null && $("#repeatTime").val() != undefined){
			localStorage.setItem("emergencyRepeat", "enabled");
			localStorage.setItem("emergencyRepeatTime", $("#repeatTime").val());
		}
		else{
			localStorage.setItem("emergencyRepeat", "disabled");
		}
/* 		emergencyContact1Name = $("#contactName1").val();
		emergencyContact1Number = $("#contactNumber1").val();
		emergencyContact2Name = $("#contactName2").val();
		emergencyContact2Number = $("#contactNumber2").val();	 */					
	}
	else if (buttonChoiceForSetup3_2 == "Drunk Drive"){
		localStorage.setItem("drunkDriveMessageText", $("#message").val());
		if($("#GPSLocation").prop("checked")){
			localStorage.setItem("drunkDriveGPS", "enabled");
		}
		else{
			localStorage.setItem("drunkDriveGPS", "disabled");
		}
		if($("#screamFeature").prop("checked")){
			localStorage.setItem("drunkDriveScream", "enabled");
		}
		else{
			localStorage.setItem("drunkDriveScream", "disabled");
		}
		if($("#repeatFeature").prop("checked") && $("#repeatTime").val() != null && $("#repeatTime").val() != undefined){
			localStorage.setItem("drunkDriveRepeat", "enabled");
			localStorage.setItem("drunkDriveRepeatTime", $("#repeatTime").val());
		}
		else{
			localStorage.setItem("drunkDriveRepeat", "disabled");
		}
/* 		scenario1Contact1Name = $("#contactName1").val();
		scenario1Contact1Number = $("#contactNumber1").val();
		scenario1Contact2Name = $("#contactName2").val();
		scenario1Contact2Number = $("#contactNumber2").val();	 */	
	}
	else if (buttonChoiceForSetup3_2 == "Party Drugs"){
		localStorage.setItem("partyDrugsMessageText", $("#message").val());		
		if($("#GPSLocation").prop("checked")){
			localStorage.setItem("partyDrugsGPS", "enabled");
		}
		else{
			localStorage.setItem("partyDrugsGPS", "disabled");
		}
		if($("#screamFeature").prop("checked")){
			localStorage.setItem("partyDrugsScream", "enabled");
		}
		else{
			localStorage.setItem("partyDrugsScream", "disabled");
		}
		if($("#repeatFeature").prop("checked") && $("#repeatTime").val() != null && $("#repeatTime").val() != undefined){
			localStorage.setItem("partyDrugsRepeat", "enabled");
			localStorage.setItem("partyDrugsRepeatTime", $("#repeatTime").val());
		}
		else{
			localStorage.setItem("partyDrugsRepeat", "disabled");
		}
/* 		scenario2Contact1Name = $("#contactName1").val();
		scenario2Contact1Number = $("#contactNumber1").val();
		scenario2Contact2Name = $("#contactName2").val();
		scenario2Contact2Number = $("#contactNumber2").val();	 */
	}
	/*clear the input fields*/
	/* $("#contactName1").val("");
	$("#contactName2").val("");
	$("#contactNumber1").val("");
	$("#contactNumber2").val(""); */
	$("#message").val("");
	
}
