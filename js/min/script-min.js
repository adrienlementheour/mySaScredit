function isVisible(e){var t=myScroll+$(window).height(),i=e.offset().top,s=i+$(e).height();return t>=s&&i>=myScroll}function setBurgerMenu(){"none"!==$("#burger").css("display")&&$("#burger").click(function(){return $("#menu").toggleClass("down"),$("#logo").toggleClass("down"),setTimeout(function(){$("#burger").toggleClass("down")},300),!1})}function animTxt(){var e=$("#typewrite"),t=e[0].getAttribute("data-type"),i=e[0].getAttribute("data-period");t&&new TxtType(e[0],jQuery.parseJSON(t),i)}function animMosaique(){function e(t){function i(){rand=Math.floor(9*Math.random());for(var e in imgVisible)imgVisible[e]!==img[rand]?newImg=img[rand]:i()}function s(e,t){e.data("img",newImg).attr("src","layoutImg/home/mos"+newImg+".jpg").addClass("up").fadeTo(1e3,1),t.removeClass("up").fadeTo(1e3,0)}for(var n=$("#mosaique").find("div"),a=n.eq(t).find(".img1"),o=n.eq(t).find(".img2"),l=0;4>l;l++)imgVisible[l]=n.eq(l).find(".up").data("img");i(),a.hasClass("up")?s(o,a):s(a,o),setTimeout(function(){3===t?t=0:t++,e(t)},2e3)}for(var t=0;8>t;t++)$("#mosaique").find("img").eq(t).data("img",t+1);e(div)}function openPartners(){$(".packery").packery({itemSelector:".part"}).on("click",".part",function(){$(this).addClass("open").siblings().removeClass("open"),$(".packery").packery()}),$(".icon-close").click(function(){return $(this).parent(".part").removeClass("open"),$(".packery").packery(),!1})}function appearDetail(e){firstOpen=!0;var t=0!==e?$(this):onglets.eq(0),i=0!==e?"a"+$(this).index():"a0",s=$("#detail").attr("class");t.addClass("on").siblings().removeClass("on");var n=t.find("div").clone();$("#detail").removeClass().stop(),i!==s&&$("#detail").slideUp(300,function(){$(this).html(n).slideDown(300).addClass(i)}),0===e||$("html").hasClass("lt-ie9")||$("#avantages").mouseleave(function(){onglets.removeClass("on"),$("#detail").removeClass().stop().slideUp()})}function appearDetailAccordion(e){firstOpen=!0;var t=0!==e?$(this):onglets.eq(0);return t.hasClass("on")?t.removeClass("on").find("div").slideUp(300):(t.addClass("on").siblings().removeClass("on").find("div").slideUp(300),t.find("div").slideDown(300)),!1}function initMap(){var e=14;$("body").hasClass("lt-ie9")&&window.matchMedia("(min-width: 1150px)").matches&&(e=15);var t=[47.2205681,-1.5604958],i={zoom:e,center:new google.maps.LatLng(t[0],t[1]),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},s=document.getElementById("map"),n=new google.maps.Map(s,i),a=new google.maps.Marker({position:new google.maps.LatLng(t[0],t[1]),title:"MySasCredit",url:"https://www.google.fr/maps/place/10+Rue+Sarrazin,+44000+Nantes/@47.2205681,-1.5604958,17z/data=!3m1!4b1!4m2!3m1!1s0x4805ec1e2a6323b9:0x89a9e18e6559c69c",icon:"layoutImg/pin.png",map:n});google.maps.event.addListener(a,"click",function(){window.open(a.url)})}var rand,newImg,myScroll,div=0,imgVisible=[],img=[1,2,3,4,5,6,7,8,9],firstOpen=!1,onglets=$("#avantages").find(".avantages > li"),TxtType=function(e,t,i){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(i,50)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.txt=this.isDeleting?t.substring(0,this.txt.length-1):t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var i=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){i.tick()},s)},$(function(){if(setBurgerMenu(),$("body").hasClass("home")&&(animTxt(),animMosaique()),$(".packery").length&&openPartners(),$("#detail").length){var e=$("html").hasClass("lt-ie9")?"click":"mouseenter click";window.matchMedia("(min-width: 720px)").matches?onglets.on(e,appearDetail):onglets.on("click",appearDetailAccordion)}$("#map").length&&google.maps.event.addDomListener(window,"load",initMap),$(document).scroll(function(){myScroll=$(this).scrollTop(),$("#detail").length&&isVisible($(".avantages"))&&firstOpen===!1&&(window.matchMedia("(min-width: 720px)").matches?appearDetail(0):appearDetailAccordion(0))})}),$(window).resize(function(){setBurgerMenu()});