/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

$(window).load(function() {
    jQuery('#all').click();
    return false;
});

$(document).ready(function() {
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	 
	$('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show'); 

	$( window ).scroll(function() {   
	// if($( window ).scrollTop() > 10){   scroll down abit and get the action   
	$(".progress-bar").each(function(){
	each_bar_width = $(this).attr('aria-valuenow');
	$(this).width(each_bar_width + '%');
	});
	   
	//  }  
	});

    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    // container.isotope({
        // animationEngine: 'best-available',
        // animationOptions: {
            // duration: 200,
            // queue: false
        // },
        // layoutMode: 'fitRows'
    // });

    $('#filters a').click(function() {
        // $('#filters a').removeClass('active');
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        var selector = $(this).attr('data-filter');
        $('#portfolio_wrapper>div').eq($(this).parent().index()).show().siblings().hide();
        //setProjects();
		
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;
        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        // container.isotope('reLayout');
    }

    // container.imagesLoaded(function() {
        // setColumns();
    // });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();

   //视频播放
   var myVideoBtn =document.getElementById("video_btn");
		var myVideo =document.getElementById("video");
		// var myVideoImg =document.getElementById("video_img");
	function playVideo(obj) {
		if (myVideo.paused) {
			myVideo.play();
			// $('#video_img').addClass('displayno');
			$('#video_btn').addClass('displayno');
		}
		else {
			myVideo.pause();
			// $('#video_img').removeClass('displayno');
			$('#video_btn').removeClass('displayno');
		}
	}
	$('.video_file').on('click',function(){
		playVideo(myVideo);
    })

    var boo=0;
 	var canUse=document.getElementsByTagName("body")[0].style;
    if(typeof canUse.animation!="undefined"||typeof canUse.WebkitAnimation!="undefined"){
       	boo=1;/*支持动画*/
    }else{
       	boo=0;/*不支持动画*/
    }
    
    $(".opacity60").click(function(){
        if($(".opacity60").attr("display") == undefined){
            $(".opacity60,.photo_info, .article_info, .prize_info,.experience_info").hide();
        }
    })
    $(".photography").click(function(){
        $(".opacity60, .photo_info").show();
				if( classie.has( this, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
        // $(".opacity60, .photo_info").show();
    })
    $(".article").click(function(){
        $(".opacity60, .article_info").show();
    })
    $(".prize").click(function(){
        $(".opacity60, .prize_info").show();
    })
    $(".experience").click(function(){
        $(".opacity60, .experience_info").show();
    })
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
// document.getElementById('').onclick = function() {
    // var section = document.createElement('section');
    // section.className = 'wow fadeInDown';
    // section.className = 'wow shake';
    // section.className = 'wow zoomIn';
    // section.className = 'wow lightSpeedIn';
    // this.parentNode.insertBefore(section, this);
// };

