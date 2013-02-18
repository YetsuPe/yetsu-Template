(function(d){var a=location.href.replace(/#.*/,"");var c=d.localScroll=function(e){d("body").localScroll(e)};c.defaults={duration:1000,axis:"y",event:"click",stop:true,target:window,reset:true};c.hash=function(f){if(location.hash){f=d.extend({},c.defaults,f);f.hash=false;if(f.reset){var g=f.duration;delete f.duration;d(f.target).scrollTo(0,f);f.duration=g}b(0,location,f)}};d.fn.localScroll=function(e){e=d.extend({},c.defaults,e);return e.lazy?this.bind(e.event,function(g){var h=d([g.target,g.target.parentNode]).filter(f)[0];if(h){b(g,h,e)}}):this.find("a,area").filter(f).bind(e.event,function(g){b(g,this,e)}).end().end();function f(){return !!this.href&&!!this.hash&&this.href.replace(this.hash,"")==a&&(!e.filter||d(this).is(e.filter))}};function b(i,p,g){var q=p.hash.slice(1),o=document.getElementById(q)||document.getElementsByName(q)[0];if(!o){return}if(i){i.preventDefault()}var n=d(g.target);if(g.lock&&n.is(":animated")||g.onBefore&&g.onBefore.call(g,i,o,n)===false){return}if(g.stop){n.stop(true)}if(g.hash){var m=o.id==q?"id":"name",l=d("<a> </a>").attr(m,q).css({position:"absolute",top:d(window).scrollTop(),left:d(window).scrollLeft()});o[m]="";d("body").prepend(l);location=p.hash;l.remove();o[m]=q}n.scrollTo(o,g).trigger("notify.serialScroll",[o])}})(jQuery);(function(c){var a=c.scrollTo=function(d,f,g){c(window).scrollTo(d,f,g)};a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};a.window=function(d){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){var d=this,f=!d.nodeName||c.inArray(d.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!f){return d}var g=(d.contentWindow||d).document||d.ownerDocument||d;return c.browser.safari||g.compatMode=="BackCompat"?g.body:g.documentElement})};c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;e=0}if(typeof d=="function"){d={onAfter:d}}if(f=="max"){f=9000000000}d=c.extend({},a.defaults,d);e=e||d.speed||d.duration;d.queue=d.queue&&d.axis.length>1;if(d.queue){e/=2}d.offset=b(d.offset);d.over=b(d.over);return this._scrollable().each(function(){var n=this,l=c(n),m=f,j,k={},h=l.is("html,body");switch(typeof m){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(m)){m=b(m);break}m=c(m,this);case"object":if(m.is||m.style){j=(m=c(m)).offset()}}c.each(d.axis.split(""),function(q,r){var t=r=="x"?"Left":"Top",s=t.toLowerCase(),v="scroll"+t,p=n[v],g=a.max(n,r);if(j){k[v]=j[s]+(h?0:p-l.offset()[s]);if(d.margin){k[v]-=parseInt(m.css("margin"+t))||0;k[v]-=parseInt(m.css("border"+t+"Width"))||0}k[v]+=d.offset[s]||0;if(d.over[s]){k[v]+=m[r=="x"?"width":"height"]()*d.over[s]}}else{var u=m[s];k[v]=u.slice&&u.slice(-1)=="%"?parseFloat(u)/100*g:u}if(/^\d+$/.test(k[v])){k[v]=k[v]<=0?0:Math.min(k[v],g)}if(!q&&d.queue){if(p!=k[v]){i(d.onAfterFirst)}delete k[v]}});i(d.onAfter);function i(g){l.animate(k,e,d.easing,g&&function(){g.call(this,f,d)})}}).end()};a.max=function(g,j){var n=j=="x"?"Width":"Height",k="scroll"+n;if(!c(g).is("html,body")){return g[k]-c(g)[n.toLowerCase()]()}var o="client"+n,f=g.ownerDocument.documentElement,d=g.ownerDocument.body;return Math.max(f[k],d[k])-Math.min(f[o],d[o])};function b(d){return typeof d=="object"?d:{top:d,left:d}}})(jQuery);(function(a){function b(){var c=window.innerHeight;var d=document.compatMode;if((d||!a.support.boxModel)){c=(d=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight}return c}a(window).scroll(function(){var e=b(),c=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop),d=[];a.each(a.cache,function(){if(this.events&&this.events.inview){d.push(this.handle.elem)}});if(d.length){a(d).each(function(){var g=a(this),i=g.offset().top,f=g.height(),h=g.data("inview")||false;if(c>(i+f)||c+e<i){if(h){g.data("inview",false);g.trigger("inview",[false])}}else{if(c<(i+f)){if(!h){g.data("inview",true);g.trigger("inview",[true])}}}})}});a(function(){a(window).scroll()})})(jQuery);$(document).ready(function(){var e=$(window);var g=$("#home");var h=$("#two");var m=$("#three");var i=$("#four");var j=$("#two .bg");var a=e.height();$("#home, #two, #three, #four").bind("inview",function(n,o){if(o==true){$(this).addClass("inview")}else{$(this).removeClass("inview")}});function b(){var q=e.height();var p=$("#nav").height()/2;var o=(q/2);var n=o-p;$("#nav").css({top:n})}function f(n,r,q,p,o){return n+"% "+(-((r+q)-p)*o)+"px"}function k(){var o=window.innerWidth;var r=window.innerHeight;var n=g.height();var q=$("#footerHome");var s=r-n;if(o>768){if(r>n){var p=r-n;$("#footerHome").css({position:"relative",top:s+"px"});return(p+"px")}else{return("20px")}}else{return("20px !important")}}function l(){var n=a-621;if(n>=0){return n}else{return 0}}function d(){var n=$("#footerHome");var o=a-g.height()-n.height();return""+o+"px"}function c(){var o=e.scrollTop();var n=a-621;if(g.hasClass("inview")){g.css({backgroundPosition:"50% "+n+"px ","padding-bottom":k()})}if(h.hasClass("inview")){h.css({backgroundPosition:f(50,a,o,1250,0.3)});j.css({backgroundPosition:f(20,a,o,1900,0.6)})}if(m.hasClass("inview")){m.css({backgroundPosition:f(50,a,o,2260,0.3)})}if(i.hasClass("inview")){i.css({backgroundPosition:f(0,a,o,200,0.9)+", "+f(50,a,o,0,0.7)+", "+f(50,a,o,0,0.5)+", "+f(50,a,o,3700,0.3)})}}b();e.resize(function(){c();b()});e.bind("scroll",function(){c()})});
$(document).on('ready',function(){
    $('#footerHome').css({
        'position' : 'relative',
        'top': (window.innerHeight-$('#home').height())+'px'
    });
    var windowHeight = window.innerHeight;
    function height () {
        var widthScreen=window.innerWidth;
        var heigthScreen=window.innerHeight;
        var altoHome = $('#home').height() ;
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
    var alto =windowHeight-621;
    $('#home').css({
        'backgroundPosition': "50% "+ alto+'px ' ,
        'padding-bottom' : height() 
    });
    $('#nav').localScroll();
    $('nav').localScroll();
})