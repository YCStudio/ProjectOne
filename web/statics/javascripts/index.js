$(function() {
    var news_tip = $('.news_tip');
    var join_tip = $('.join_tip');
    var video_tip = $('.video_tip');

    setInterval(function() {
        news_tip.animate({
            'top': '-63px'
        }, 800);

        join_tip.animate({
            'top': '-63px'
        }, 800);

        video_tip.animate({
            'top': '50px'
        }, 800);
        setTimeout(function() {
            news_tip.animate({
                'top': '-73px'
            }, 800);

            join_tip.animate({
                'top': '-73px'
            }, 800);

            video_tip.animate({
                'top': '40px'
            }, 800);
        }, 800);
    }, 1600)



})
