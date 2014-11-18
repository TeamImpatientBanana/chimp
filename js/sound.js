// This function plays the music and shows the play button
function playMusic() {
	document.getElementById('player').play();
	$('#play').hide();
	$('#stop').show();

}

// This function stop the music that is playing and shows the stop button
function stopMusic() {
	document.getElementById('player').pause();
	$('#stop').hide();
	$('#play').show();
}