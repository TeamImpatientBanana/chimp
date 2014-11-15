function playMusic() {
	document.getElementById('player').play();
	$('#play').hide();
	$('#stop').show();

}

function stopMusic() {
	document.getElementById('player').pause();
	$('#stop').hide();
	$('#play').show();
}