function animTxt(){for(var t=$("#typewrite"),i=0;i<t.length;i++){var e=t[i].getAttribute("data-type"),s=t[i].getAttribute("data-period");e&&new TxtType(t[i],jQuery.parseJSON(e),s)}}var TxtType=function(t,i,e){this.toRotate=i,this.el=t,this.loopNum=0,this.period=parseInt(e,50)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,i=this.toRotate[t];this.txt=this.isDeleting?i.substring(0,this.txt.length-1):i.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var e=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=500):(s=this.period,this.isDeleting=!0),setTimeout(function(){e.tick()},s)},$(function(){animTxt()}),$(window).resize(function(){});