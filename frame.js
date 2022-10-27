$(document).ready(function () {
    $(".pop").click(function () {
        $("#iFrameDialog").attr('src', $(this).attr("href"));
        $("#divDialog").dialog({
            width: 400,
            height: 450,
            modal: true,
            close: function () {
                $("#iFrameDialog").attr('src', "https://www.linkedin.com/embed/feed/update/urn:li:share:6990196598815219712");
            }
        });
        return false;
    });
});
