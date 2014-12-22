var rand, newImg, 
    div = 0, 
    imgVisible = [], 
    img = [1, 2, 3, 4, 5, 6, 7, 8, 9];


/**** Animation du menu responsive ****/

function setBurgerMenu(){
    if( $('#burger').css('display') !== 'none' ){

        $('#burger').click(function(){
            $('#menu').toggleClass('down');
            $('#logo').toggleClass('down');
            setTimeout(function(){ $('#burger').toggleClass('down'); }, 300);
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

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() { that.tick(); }, delta);
};

function animTxt(){
    var txt = $('#typewrite');
    var toRotate = txt[0].getAttribute('data-type');
    var period = txt[0].getAttribute('data-period');
           
    if (toRotate) new TxtType(txt[0], jQuery.parseJSON(toRotate), period);
}



/**** Animation de la mosaique en page d'accueil ****/

function animMosaique(){
    
    function animImg(div){

        var divImg = $('#mosaique').find('div'), 
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
            i1.data('img', newImg).attr('src', 'layoutImg/home/mos' + newImg + '.jpg').addClass('up').fadeTo(1000, 1);
            i2.removeClass('up').fadeTo(1000, 0);
        }   
        img1.hasClass('up') ? fadeAndReplace(img2, img1) : fadeAndReplace(img1, img2);  
    

        setTimeout(function(){
            div === 3 ? div = 0 : div ++ ;
            animImg(div);
        }, 2000);
    }

    for(var x=0; x<8; x++){ 
        $('#mosaique').find('img').eq(x).data('img', x+1); 
    }
    animImg(div);    
}


/**** Ouverture des blocs partenaires, références, cartographie ****/

function openPartners(){
    $('.packery').packery({ itemSelector: '.part' }).on( 'click', '.part', function(){
        $(this).addClass('open').siblings().removeClass('open');
        $('.packery').packery();
    });

    $('.icon-close').click(function(){
        $(this).parent('.part').removeClass('open');
        $('.packery').packery();
        return false;
    });
}



$(function(){
    
    setBurgerMenu();

    if($('body').hasClass('home')){ 
        animTxt(); 
        animMosaique();
    }

    if($('.packery').length){
        openPartners();
    }

});

$(window).resize(function() {
    setBurgerMenu();
});