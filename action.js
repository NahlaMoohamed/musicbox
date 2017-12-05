$(document).ready(function(){
	var aNote = document.getElementById('a_audio');
	$('#a').mousedown(function(){
		aNote.currentTime = 0;
    	aNote.play();
	});
	var bNote = document.getElementById('b_audio');
	$('#b').mousedown(function(){
		bNote.currentTime = 0;
    	bNote.play();
	});
	var cNote = document.getElementById('c_audio');
	$('#c').mousedown(function(){
		cNote.currentTime = 0;
    	cNote.play();
	});
	var dNote = document.getElementById('d_audio');
	$('#d').mousedown(function(){
		dNote.currentTime = 0;
    	dNote.play();
	});
	var eNote = document.getElementById('e_audio');
	$('#e').mousedown(function(){
		eNote.currentTime = 0;
    	eNote.play();
	});
	var fNote = document.getElementById('f_audio');
	$('#f').mousedown(function(){
		fNote.currentTime = 0;
    	fNote.play();
	});
	var gNote = document.getElementById('g_audio');
	$('#g').mousedown(function(){
		gNote.currentTime = 0;
    	gNote.play();
	});
});
