function setBurgerMenu(){$(window).width()<980&&$("#burger").click(function(){return $("#menu").toggleClass("down"),$("#logo").toggleClass("down"),setTimeout(function(){$("#burger").toggleClass("down")},300),!1})}function animTxt(){for(var t=$("#typewrite"),i=0;i<t.length;i++){var e=t[i].getAttribute("data-type"),n=t[i].getAttribute("data-period");e&&new TxtType(t[i],jQuery.parseJSON(e),n)}}function animMosaique(){function t(i){function e(){rand=Math.floor(9*Math.random());for(var t in imgVisible)imgVisible[t]!==img[rand]?newImg=img[rand]:e()}function n(t,i){t.data("img",newImg).attr("src","layoutImg/home/mos"+newImg+".jpg").addClass("up").fadeTo(1e3,1),i.removeClass("up").fadeTo(1e3,0)}for(var s=$("#mosaique").find("div"),o=s.eq(i).find(".img1"),a=s.eq(i).find(".img2"),r=0;4>r;r++)imgVisible[r]=s.eq(r).find(".up").data("img");e(),o.hasClass("up")?n(a,o):n(o,a),setTimeout(function(){3===i?i=0:i++,t(i)},2e3)}for(var i=0;8>i;i++)$("#mosaique").find("img").eq(i).data("img",i+1);t(div)}function openPartners(){$(".part").click(function(){var t=$(this).parent("li");return $("#bgPart").html(t.html()).addClass("open"),t.addClass("hid").siblings("li").removeClass("hid"),!1})}var rand,newImg,div=0,imgVisible=[],img=[1,2,3,4,5,6,7,8,9],TxtType=function(t,i,e){this.toRotate=i,this.el=t,this.loopNum=0,this.period=parseInt(e,50)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,i=this.toRotate[t];this.txt=this.isDeleting?i.substring(0,this.txt.length-1):i.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,n=200-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout(function(){e.tick()},n)},$(function(){setBurgerMenu(),$("body").hasClass("home")&&(animTxt(),animMosaique()),$("body").find(".part")&&openPartners()}),$(window).resize(function(){setBurgerMenu()});