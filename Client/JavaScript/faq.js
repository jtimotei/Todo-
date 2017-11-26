var logInShown = false;
function main(){
	$("#showLogIn").on("click", function() {
		showLogIn();
	})

	$(window).on("resize", function() {
		setPosition();
	});

	$("div#login").on("click", function() {
		location.href = "todoapp.html";
	})
}

function showLogIn() {
	if(!logInShown) {
		if(setPosition() != -1) $("#triangle").fadeIn(50);
		$("#logInWindow").fadeIn(50);
		logInShown = true;
	}
	else {
		$("#triangle").fadeOut(50);
		$("#logInWindow").fadeOut(50);
		logInShown = false;
	}
}



function setPosition() {
	var logInButton = document.getElementById("showLogIn");
	var triangle = document.getElementById("triangle");
	var rectLogin = logInButton.getBoundingClientRect();
	var rectTriangle = triangle.getBoundingClientRect();
	var left;
	if(rectLogin.x != undefined) left = rectLogin.x + rectLogin.width/2 - rectTriangle.width/2;
	else if(rectLogin.left != undefined) left = rectLogin.left + rectLogin.width/2 - rectTriangle.width/2;
	else return -1;
	$("#triangle").css({"left":left});
}


$(document).ready(main());