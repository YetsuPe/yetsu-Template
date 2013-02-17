// JavaScript Document

$(document).ready(function() {
	var $window = $(window);
	var $home = $('#home');
	var $two = $('#two');
	var $three = $('#three');
	var $four = $('#four');
	var cricket = $("#two .bg");
	
	var windowHeight = $window.height();
	
	$('#home, #two, #three, #four').bind('inview', function (event, visible) {
		if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
		}
	});
	
	function Navigation(){
		var windowHeight = $window.height(); 
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); 
	}
	
	function movePos(x, windowHeight, pos, offset, speed){
		return x + "% " + (-((windowHeight + pos) - offset) * speed)  + "px";
	}
	function height () {
		var widthScreen=window.innerWidth;
		var heigthScreen=window.innerHeight;
		var altoHome = $home.height() ;
		var footerHome=$('#footerHome'); 
		var top =  heigthScreen - altoHome;
		//alert(top);
		if (widthScreen>768){ 
			if (heigthScreen> altoHome ) {
				var res = heigthScreen-altoHome;
				$('#footerHome').css({
					'position' : 'relative',
					'top': top+'px'
				});
				return (res+'px');
			}else{
				return ('20px');
			}
		}else{
			return ('20px !important');
		};
	}
	function alto(){
		var alto =windowHeight-621; //obtener top
		if(alto>=0){

			return alto;
		}else{
			return 0 ;
		}
	}
	function topFooterHome () {
			var footerHome=$('#footerHome'); 
			var top =  windowHeight-$home.height()-footerHome.height(); //obtener top
			return ""+top+"px";
		}	
	function Parallax(){ 
		var pos = $window.scrollTop();
		var alto =windowHeight-621; //obtener top

		if($home.hasClass("inview")){
			$home.css({
				'backgroundPosition': "50% "+ alto+'px ' ,
				'padding-bottom' : height() 
			});
		}
		if($two.hasClass("inview")){
			$two.css({
				'backgroundPosition': movePos(50, windowHeight, pos, 1250, 0.3)
			});
			cricket.css({'backgroundPosition': movePos(20, windowHeight, pos, 1900, 0.6)});
		}
		if($three.hasClass("inview")){
			$three.css({
				'backgroundPosition': movePos(50, windowHeight, pos, 2260, 0.3)
			});
		}
		
		if($four.hasClass("inview")){
			$four.css({
				'backgroundPosition': movePos(0, windowHeight, pos, 200, 0.9) + ", " + movePos(50, windowHeight, pos, 0, 0.7) + ", " + movePos(50, windowHeight, pos, 0, 0.5) + ", " + movePos(50, windowHeight, pos, 3700, 0.3)});
		}
		
	}
		
	Navigation(); 
	
	$window.resize(function(){ 
		Parallax(); 
		Navigation();
	});		
	
	$window.bind('scroll', function(){ 
		Parallax(); 
	});
	
});