$(document).ready(function () {
    // fLoadNotification();

    /*Load deal*/
    function fLoadNotification() {

        var sID = 0;
        $.ajax(
                {
                    type: "POST",
                    url: "dealprocess.aspx/loadnotification",
                    data: "{'sID':'" + sID + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: "true",
                    cache: "false",
                    success: function (msg) {
                        if (msg.d == "") {
                            $("#notification").css("display", "none");
                        }
                        else {
                            $("#notification").css("display", "block");
                            $("#notification").html(msg.d);
                            var top = $("#notification").outerHeight();
                            $("nav.navbar.sk__navbar").css('margin-top', '-58px');
                            $(".sk__mobile-main-logo").css('margin-top', top);
                            $(".nav-container").css('margin-top', top);
                            $(".nav-container").addClass("fixnotimobile");
                            if ($(window).width() <= 768) {
                                $(".nav-container").css('margin-top', top);
                                //$(".groupmenu_mobile").css('margin-top', top);
                                $(".hc-nav-trigger").css('margin-top', top);
                            }
                            if ($(window).width() <= 1900) {
                                $(".sk__mobile-menu-bar").css('top', '60px');
                                $(".hc-nav-trigger").css('margin-top', '60px');
								$(".sk__mobile-main-logo").css('margin-top', '80px');
								
                            }
                            if ($(window).width() <= 1280) {
                                $(".sk__mobile-menu-bar").css('top', '60px');                                
                            }
                            if ($(window).width() <= 500) {
                                $(".happy-mb2").css('margin-top', top);
                                $(".happy-mb").css('margin-top', top);
                                $(".groupmenu_mobile").css('padding-top', '80px');
                            }
                               
                        }
                    },
                    Error: function (x, e) {
                        alert("Some error occured! Please try again.");
                    }
                });
    }

});

//$(window).on('resize', function () {
    //var top = $("#notification").outerHeight();
//});

$(window).on("scroll", function () {
    // This is for Mobile
    if ($(this).scrollTop() > 10) {
        if ($(window).width() >= 768) {
            $("nav.navbar.sk__navbar").css('background', '#fff');
        }
        if ($(window).width() <= 768) {
            $(".groupmenu_m").hide();
        }
    } else {
        if ($(window).width() <= 768) {
            $(".groupmenu_m").show();
        }
        if ($(window).width() >= 768) {
            $("nav.navbar.sk__navbar").css('background', 'rgba(255,255,255,0.4)');
        }
    }
});
$(document).mouseup(function (e) {
    var container = $("#noti");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#groupnoti").hide();
    }
});

