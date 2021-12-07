$(document).ready(function() {
    
    $('html,body').animate({scrollTop:0});    

    $('#top').click(function() {
        $('html,body').stop().animate({scrollTop:0}, 300);
    });

    $('#top').hide();
    
    $('#learn').click(function() {
        $.scrollTo($('#channels'), {duration:500});       
        return false;
    });   
    
    $(window).on('resize scroll load', reposition).trigger('resize').trigger('scroll');    
    
    var viewportWidth = $(window).width(),
        viewportHeight = $(window).height(),
        currentView = $(document).scrollTop();   

    function reposition() {
        viewportWidth = $(window).width();
        viewportHeight = $(window).height();
        currentView = $(document).scrollTop();
        
        $('header').css('height', viewportHeight - viewportWidth * 0.14); 

        if (viewportHeight >= viewportWidth * 0.889 - 100) {
            $('header').css('background-size', '200%');
            $('header').css('background-position', '50% 0');
        }
        else {
            $('header').css('background-size', '100%');
            $('header').css('background-position', '0 -100px');
        }

        //mobile portrait for iPhone 3/4/5
        if (viewportHeight <= 480 && viewportWidth <= 320 && viewportWidth < viewportHeight) { 
            $('header').css('padding','12% 0');
            $('header').css('height', viewportHeight - viewportWidth * 0.24); 
            $('#copa-logo img').css('width', '160px');
            $('header .stars').css('display', 'block');
            $('header h1').css('font-size','2.0em');
            $('header h1').css('margin-bottom','20px');
            // $('header .CTA').css('margin','30px auto 80px');
            $('#learn').css('opacity', '0');
        }

        //mobile portrait for iPhone 5
        else if (viewportHeight <= 568 && viewportWidth <= 320 && viewportWidth < viewportHeight) { 
            $('header').css('padding','15% 0');
            $('header').css('height', viewportHeight - viewportWidth * 0.3);
            $('#copa-logo').css('margin-bottom', '10px');
            $('#copa-logo img').css('width', '200px');
            $('header .stars').css('display', 'block');
            $('header h1').css('font-size','2.5em');
            $('header h1').css('margin-bottom','20px');
            // $('header .CTA').css('margin','30px auto 80px');
            $('#learn').css('opacity', '0');
        }

        //mobile landscape mode
        else if (viewportWidth > viewportHeight && viewportWidth/viewportHeight < 1.78 && viewportWidth <= 736) { 
            $('header').css('padding','3% 0');
            $('header').css('height', viewportHeight - viewportWidth * 0.06); 
            $('#copa-logo').css('margin-bottom', '0px');
            $('#copa-logo img').css('width', '120px');
            $('header .stars').css('display', 'none');
            $('header h1').css('font-size','2.5em');
            $('header h1').css('margin-bottom','8px');
            $('header h2').css('margin-bottom','20px');
            $('header .CTA').css('margin','10px auto 80px');
            $('#learn').css('opacity', '0');
        }

        //default
        else {
            $('header').css('padding','7% 0');
            $('header').css('height', viewportHeight - viewportWidth * 0.14);
            $('#copa-logo').css('margin-bottom', '10px'); 
            $('#copa-logo img').css('width', '252px');
            $('header .stars').css('display', 'block');
            $('header h1').css('font-size','3.8em');
            $('header h1').css('margin-bottom','20px');
            // $('header .CTA').css('margin','30px auto 80px');
            $('#learn').css('opacity', '1');
        }
        
        if (currentView > 30) { 
            $('#learn').hide();
            $('#top').show(); 
        }       
        else { 
            $('#learn').show();
            $('#top').hide(); 
        }

        var totalHeight = $('body').height() - viewportHeight;
        if (currentView <= totalHeight && currentView > totalHeight - 130) {
            $('#top').css('bottom', '115px');
        }
        else {
            $('#top').css('bottom', '15px');
        }

        $('#countdown-container').countdown('2015/06/11 13:30').on('update.countdown', function(e){
            var $this = $(this).html(e.strftime(''
                + '<div class="countdown first">'
                + '  <span class="count">%D</span>'
                + ' <span class="label uppercase">days</span>'
                + '</div>'
                + '<div class="countdown">'
                + '<span class="count">%H</span>'
                + '<span class="label uppercase">hrs</span>'
                + '</div>'
                + '<div class="countdown">'
                + '   <span class="count time minutes">%M</span>'
                + '  <span class="label uppercase">mins</span>'
                + '</div>'
                + '<div class="countdown last">'
                + '<span class="count">%S</span>'
                + '<span class="label uppercase">secs</span>'
                + '</div>'
                ));
        })
    }        
});