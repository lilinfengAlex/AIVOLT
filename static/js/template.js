$(function () {
    $.get("preloader.html", function (data) {
        $("#preloader").html(data);
    });
    $.get("header.html", function (data) {
        $("#header").html(data);
    });
    $.get("footer.html", function (data) {
        $("#footer").html(data);
    });
});