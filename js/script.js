///**** VARIABLES ****///

var rand, newImg, myScroll,
    div = 0, 
    imgVisible = [], 
    img = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    firstOpen = false,
    mos = $('#mosaique'),
    avantages = $('#avantages'),
    onglets = avantages.find('.avantages > li'),
    pack = $('.packery'),
    detail = $('#detail');



///**** FONCTIONS GENERIQUES ****///

/**** Tester si un élément est visible dans la fenetre ****/
function isVisible(elt){
    var botView = myScroll + $(window).height();
    var topElt = elt.offset().top;
    var botElt = topElt + $(elt).height();
    return ((botElt <= botView) && (topElt >= myScroll));
}



///**** FONCTIONS SPECIFIQUES ****///

/**** Animation du menu responsive ****/
function setBurgerMenu(){
    var burger = $('#burger');

    if( burger.css('display') !== 'none' ){
        burger.click(function(){
            $('#menu').toggleClass('down');
            $('#logo').toggleClass('down');
            setTimeout(function(){ burger.toggleClass('down'); }, 300);
            return false;
        });
    }
}


/**** Animation du texte en page d'accueil ****/
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 50) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;
    if (this.isDeleting){ delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum ++;
        delta = 500;
    }

    setTimeout(function() { that.tick(); }, delta);
};

function animTxt(){
    var txt = $('#typewrite');
    var toRotate = txt[0].getAttribute('data-type');
    var period = txt[0].getAttribute('data-period');
           
    if (toRotate){ new TxtType(txt[0], jQuery.parseJSON(toRotate), period); }
}


/**** Animation de la mosaique en page d'accueil ****/
function animMosaique(){
    
    function animImg(div){

        var divImg = mos.find('div'), 
            img1 = divImg.eq(div).find('.img1'), 
            img2 = divImg.eq(div).find('.img2');

        for (var i=0; i<4; i++){
            imgVisible[i] = divImg.eq(i).find('.up').data('img');
        }


        function setNewImg(){
            rand = Math.floor(Math.random()*9);
            for(var j in imgVisible){
                imgVisible[j] !== img[rand] ? newImg = img[rand] : setNewImg();
            }
        }
        setNewImg(); 


        function fadeAndReplace(i1, i2){
            i1.data('img', newImg).attr('src', 'wp-content/themes/mySasCredit/layoutImg/home/mos' + newImg + '.jpg').addClass('up').fadeTo(1000, 1);
            i2.removeClass('up').fadeTo(1000, 0);
        }   
        img1.hasClass('up') ? fadeAndReplace(img2, img1) : fadeAndReplace(img1, img2);  
    

        setTimeout(function(){
            div === 3 ? div = 0 : div ++ ;
            animImg(div);
        }, 2000);
    }

    for(var x=0; x<8; x++){ 
        mos.find('img').eq(x).data('img', x+1); 
    }
    animImg(div);    
}


/**** Ouverture des blocs partenaires, références, cartographie ****/
function openPartners(){
    pack.packery({ itemSelector: '.part', gutter: 19}).on( 'click keypress', '.part', function(event){
        if(event.which === 13 || event.type === 'click'){
            $('html, body').delay(300).animate({scrollTop: $(this).offset().top - 50 }, 600);
            $(this).addClass('open').siblings().removeClass('open');
            pack.packery();
        }
    });

    $('.icon-close').click(function(){
        $(this).parent('.part').removeClass('open');
        pack.packery();
        return false;
    });
}


/**** Apparition du détail des avantages page Saas ****/
function appearDetail(first){
    firstOpen = true;
    var that = first !== 0 ? $(this) : onglets.eq(0),
        classe = first !== 0 ? 'a' + $(this).index() : 'a' + 0,
        classeDetail = detail.attr('class'),
        content = that.find('div').clone();
    
    onglets.removeClass('on');
    that.addClass('on');

    detail.removeClass().stop();
    if(classe !== classeDetail){ detail.slideUp(300, function(){ $(this).html(content).slideDown(300).addClass(classe); }); }

    if(first !== 0){
        avantages.mouseleave(function(){
            onglets.removeClass('on');
            detail.removeClass().stop().slideUp();
        });
    }
    
}

/**** Apparition du détail des avantages page Saas en accordéon pour smartphone ****/
function appearDetailAccordion(first){
    if(event.which === 13 || event.type === 'click' || event.type === 'mouseenter'){

        firstOpen = true;
        var that = first !== 0 ? $(this) : onglets.eq(0);

        if(that.hasClass('on')){
            that.removeClass('on').find('div').slideUp(300);
        }else{
            that.addClass('on').siblings().removeClass('on').find('div').slideUp(300);
            that.find('div').slideDown(300); 
        }   

        if(first !== 0){ $('html, body').delay(300).animate({scrollTop: that.offset().top - 100 }, 600); }

        return false;
    }
}


function initMap() {
    var _zoom = 14;
    if ($("body").hasClass("lt-ie9") && window.matchMedia("(min-width: 1150px)").matches){ _zoom = 15;}

    var coord = [47.2205681, -1.5604958];

    var mapOptions = {
        zoom: _zoom,
        center: new google.maps.LatLng(coord[0], coord[1]),
        styles: [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers":[{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{ "color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}]};
    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var sarrazin = new google.maps.Marker({ 
        position: new google.maps.LatLng(coord[0], coord[1]),
        title: 'MySasCredit', 
        url: 'https://www.google.fr/maps/place/10+Rue+Sarrazin,+44000+Nantes/@47.2205681,-1.5604958,17z/data=!3m1!4b1!4m2!3m1!1s0x4805ec1e2a6323b9:0x89a9e18e6559c69c',
        icon: pin,
        map: map
    });
    google.maps.event.addListener(sarrazin, 'click', function(){ window.open(sarrazin.url); });
}



///**** INIT ****///

$(function(){
    
    setBurgerMenu();

    if($('body').hasClass('home')){ 
        animTxt(); 
        animMosaique();
    }

    if(pack.length){ 
        openPartners(); 
    }

    if(detail.length){
        matchMedia('all and (max-width: 720px)').matches ? onglets.on('click', appearDetailAccordion) : onglets.on('mouseenter click keypress', appearDetail);
    } 

    if($('#map').length){
        google.maps.event.addDomListener(window, 'load', initMap);
    } 

    $(document).scroll(function() {
        myScroll = $(this).scrollTop();
        if(detail.length && isVisible(avantages) && firstOpen === false) {
            matchMedia('all and (max-width: 720px)').matches ? appearDetailAccordion(0) : appearDetail(0);
        }
    });

});


$(window).resize(function() {
    setBurgerMenu();
});