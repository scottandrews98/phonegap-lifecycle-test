var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

// Adds device ready function and gives it the name onDeviceReady
document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
    
    document.getElementById("launched").innerHTML = "Application launched" + launched_count;
    document.getElementById("resumed").innerHTML = "Application paused" + paused_count_count;
    document.getElementById("passed").innerHTML = "Application resumed" + resumed_count;
}


// device APIs are available
//
    function onDeviceReady() {
	// When the device has fully loaded run the function.
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	// When the app is paused so the user exits out of the app this function runs.
    // Adds 1 to the variable paused_count    
	paused_count++;
    // Runs the updateDisplay function    
	updateDisplay();
    // Will run an alert on the phone which will display the text pause. 
	alert("pause");
    }
	

    function onResume() {
    // When the user navigates back to the app this is ran.
    // Adds 1 to the variable resumed_count     
	resumed_count++;
    // Runs the updateDisplay function    
	updateDisplay();
	// Will run an alert on the phone which will display the text resume.    
	alert("resume");
    }
