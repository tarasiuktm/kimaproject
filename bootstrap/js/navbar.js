   $(window).scroll(function () {
        if ($(window).scrollTop() > 720) {
            $("#myNav").css("background-color","#0EB493");
        } else {
            $("#myNav").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });