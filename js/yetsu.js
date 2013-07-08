/*$(document).on("ready",function(){
	$('#ico-menu').on('click',function(){
		alert('Holaaa');
	});
});*/
Zepto(function($){
  	$('#ico-menu').on('click',function(){
  		$('body').css({'overflow-x':'hidden'});
  		$('header,section,footer').toggleClass('move-blocks');
		$('#menu').toggleClass('open-menu');
	});

/* **************canvas
	var canvas=document.getElementById('logo');
	var logo=canvas.getContext('2d');
	logo.strokeStyle='#0000ff';
	logo.strokeRect(0,0,50,50);

  ***************audio API
	 var player=document.getElementById('player');

	 var pause=document.getElementById('pause')
	 pause.onclick=function(){ player.pause();};

	 $('#pause').on('click',function(){
	 	player.pause();
	 });
	 $('#play').on('click',function(){//volume += 0.1
	 	player.play();
	 });
	 $('#volP').on('click',function(){
	 	player.volume+=0.1;
	 });
	 $('#volM').on('click',function(){
	 	player.volume-=0.1;
	 });
	 */
})