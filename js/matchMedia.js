/*! Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
window.matchMedia||(window.matchMedia=function(){var b=(window.styleMedia||window.media);if(!b){var c=document.createElement("style"),a=document.getElementsByTagName("script")[0],d=null;c.type="text/css";c.id="matchmediajs-test";a.parentNode.insertBefore(c,a);d=("getComputedStyle" in window)&&window.getComputedStyle(c,null)||c.currentStyle;b={matchMedium:function(e){var f="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(c.styleSheet){c.styleSheet.cssText=f}else{c.textContent=f}return d.width==="1px"}}}return function(e){return{matches:b.matchMedium(e||"all"),media:e||"all"}}}());
