var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById('email').innerHTML = "Show my email";
	shown = false;
	}else{
	var myemail = "<a href='mailto:pidugunn" + "@" + "ucmail.uc.edu'>pidugunn" + "@" + "ucmail.uc.edu</a>";
	document.getElementById('email').innerHTML = myemail;
	shown = true;
	}
}
