$(document).ready(function () {
    $("#txtPhone2").mask("999-999-9999");

    $("#services_1").show();
    $("#txtPhone2").mask("999-999-9999");
    $("#txtPhone22").mask("999-999-9999");

    $("#services_1").show();
    $("#closenoti").click(function () {
        $("#groupnoti").hide();
    });
    $("#subbar").click(function () {
        $("#signup_box").css('display', 'block');
    });
    $("#subbar_m").click(function () {
        $(".bg-popup").css('display', 'block');
        $("#signup_box").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $("#signup_box").css('display', 'none');
    });
    $("#subbar").click(function () {
        $(".bg-popup").css('display', 'block');
    });
    $("#close_signup").click(function () {
        $(".bg-popup").css('display', 'none');
    });

    //opt bar
    $("#otpsubmit").click(function () {
        $("#otpsubmit").fadeOut(50);
        var sNotify = "";
        if ($("#firstname").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }
        if ($("#lastname").val() == "") {
            sNotify += "* Please input the last name<br/>";
        }
        if ($("#email").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#email").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        if (sNotify != "") {
            $("#optnotifycontent").html(sNotify);
            $("#optnotify").fadeIn(50);
            $("#otpsubmit").fadeIn(50);
        }
        else {
            var sFirstName = $("#firstname").val();
            var sLastName = $("#lastname").val();
            var sEmail = $("#email").val();
            $.ajax(
            {
                type: "POST",
                url: "process.aspx/optemail",
                data: "{'sFirstName':'" + sFirstName + "','sLastName':'" + sLastName + "','sEmail':'" + sEmail + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        $("#optnotifycontent").html("Your infomation has been submitted. Thank you!");
                        $("#optnotify").fadeIn(50);
                        $("#firstname").val("");
                        $("#lastname").val("");
                        $("#email").val("");
                    }
                    else {
                        $("#optnotifycontent").html("This email has been added. Please enter another email!");
                        $("#optnotify").fadeIn(50);
                        $("#email").val("");
                    }
                    $("#otpsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#optnotifycontent").html("Some Error! Please try again later");
                    $("#optnotify").fadeIn(50);
                }
            });

        }

    });

    $("#notifyok").click(function () {
        $("#optnotifycontent").html("");
        $("#optnotify").fadeOut(50);
    });

    function checkEmail(email) {
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }

    $('#linktop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //opt bar

    //services more hide    
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    var sID = getUrlParameter('id');
    if (sID != "") {
        fHomeMenuServices();
    }


    $(".divseracti").click(function () {
        var id = $(this).attr("id").replace("seracti_", "");
        $(".servicesbox").hide();
        $(".divseracti").removeClass("services_active").addClass("bg_services");
        $("#services_" + id).show();
        $("#seracti_" + id).removeClass("bg_services").addClass("services_active");
    });

    function fHomeMenuServices() {
        $(".servicesbox").hide();
        $(".divseracti").removeClass("services_active").addClass("bg_services");
        $("#services_" + sID).show();
        $("#seracti_" + sID).removeClass("bg_services").addClass("services_active");
    }



    //Contact Form 1
    $("#bSend").click(function () {
        $("#bSend").fadeOut(50);
        $("#formwait").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail2").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail2").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone2").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }

       
        //Content
        //Name
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent").html(sNotify);
            $("#formnotify").fadeIn(50);
            $("#bSend").fadeIn(50);
            $("#formwait").fadeOut(20);
        }
        else {
            var sName = $("#txtName").val();
            var sEmail = $("#txtEmail2").val();
            var sPhone = $("#txtPhone2").val();
            var sContent = $("#txtContent").val();           

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/contactus2",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        $("#formnotifycontent").html("Thank you for messaging us. We will contact you as soon as possible. Thank you!");
                        $("#formnotify").fadeIn(50);
                        $("#txtName").val("");
                        $("#txtEmail2").val("");
                        $("#txtPhone2").val("");                       
                        $("#txtContent").val("");
                    }
                    $("#formwait").fadeOut(20);
                    $("#formsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").fadeIn(50);
                }
            });
        }
    });

    //Contact Form 2
    $("#bSend1").click(function () {
        $("#bSend1").fadeOut(50);
        $("#formwait1").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName1").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail2").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail2").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone2").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }

        //Content
        //Name
        if ($("#txtContent1").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent1").html(sNotify);
            $("#formnotify1").fadeIn(50);
            $("#bSend1").fadeIn(50);
            $("#formwait1").fadeOut(20);
        }
        else {
            var sName = $("#txtName1").val();
            var sEmail = $("#txtEmail2").val();
            var sPhone = $("#txtPhone2").val();
            var sContent = $("#txtContent1").val();

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/contactus1",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        $("#formnotifycontent1").html("Thank you for messaging us. We will contact you as soon as possible. Thank you!");
                        $("#formnotify1").fadeIn(50);
                        $("#txtName1").val("");
                        $("#txtEmail2").val("");
                        $("#txtPhone2").val("");
                        $("#txtContent1").val("");
                    }
                    $("#formwait1").fadeOut(20);
                    $("#formsubmit1").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent1").html("Some Error! Please try again later");
                    $("#formnotify1").fadeIn(50);
                }
            });
        }
    });

    $("#formnotifyok").click(function () {
        $("#formnotifycontent").html("");
        $("#formnotify").fadeOut(50);
    });

    $("#formnotifyok1").click(function () {
        $("#formnotifycontent1").html("");
        $("#formnotify1").fadeOut(50);
    });


    //Party Form
    $("#bPartySend").click(function () {
        $("#bPartySend").fadeOut(50);
        $("#formwait").fadeIn(20);

        //Check form
        var sNotify = "";

        //Name
        if ($("#txtName").val() == "") {
            sNotify += "* Please input the first name<br/>";
        }

        //Email
        if ($("#txtEmail2").val() == "") {
            sNotify += "* Please input the Email<br/>";
        }
        else {
            if (!checkEmail($("#txtEmail2").val())) {
                sNotify += "*Invalid Email<br/>";
            }
        }

        //Phone
        if ($("#txtPhone2").val() == "") {
            sNotify += "* Please input your phone number<br/>";
        }
        else {
            if (!checkPhone($("#txtPhone2").val())) {
                sNotify += "*Invalid Phone Number<br/>";
            }
        }

        //Content
        if ($("#txtContent").val() == "") {
            sNotify += "* Please input the message<br/>";
        }

        //Date
        if ($("#txtDate").val() == "") {
            sNotify += "* Please input the Party Date<br/>";
        }

        //Size
        if ($("#txtSize").val() == "") {
            sNotify += "* Please input the Party Size<br/>";
        }

        if (sNotify != "") {
            $("#formnotifycontent").html(sNotify);
            $("#formnotify").fadeIn(50);
            $("#bPartySend").fadeIn(50);
            $("#formwait").fadeOut(20);
        }
        else {
            var sName = $("#txtName").val();
            var sEmail = $("#txtEmail2").val();
            var sPhone = $("#txtPhone2").val();
            var sContent = $("#txtContent").val();
            var sDate = $("#txtDate").val();
            var sSize = $("#txtSize").val();

            $.ajax(
            {
                type: "POST",
                url: "process.aspx/party2",
                data: "{'sName':'" + sName + "','sEmail':'" + sEmail + "','sPhone':'" + sPhone + "','sContent':'" + sContent + "','sDate':'" + sDate + "','sSize':'" + sSize + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: "true",
                cache: "false",

                success: function (msg) {
                    if (msg.d == "0") {
                        //$("#formnotifycontent").html("Thank you for messaging us. We will contact you as soon as possible.");
                        $("#formnotifycontent").html("We have received your request and will contact you for final confirmation. If you don't hear back from us, please give us a call.");
                        $("#formnotify").fadeIn(50);
                        $("#txtName").val("");
                        $("#txtEmail2").val("");
                        $("#txtPhone2").val("");
                        $("#txtContent").val("");
                        $("#txtDate").val("");
                        $("#txtSize").val("");
                    }
                    $("#formwait").fadeOut(20);
                    $("#formsubmit").fadeIn(50);
                },

                Error: function (x, e) {
                    $("#formnotifycontent").html("Some Error! Please try again later");
                    $("#formnotify").fadeIn(50);
                }
            });
        }
    });

    function checkEmail(email) {
        var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }

    function checkPhone(email) {
        var filter = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!filter.test(email)) {
            return false;
        }
        else {
            return true;
        }
    }
    //Contact Form


});


