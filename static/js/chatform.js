/**
 * Created by Izueh on 2/1/2017.
 */
$(document).ready(function () {
    $("#chatForm").on('submit', function (e) {
        e.preventDefault();
        var message = $("#message").val();
        showRequest();
        var request = {
            human: message
        };
        $.ajax({
            type: "POST",
            url: "/eliza/DOCTOR",
            dataType: "json",
            data: request,
            success: function (data) {
                showResponse(data);
            }
        });
    })
});


function showRequest() {
    var chatBox = $('#chatBox');
    var message = 'human: ' + $('#message').val();
    $(chatBox).append(message + '<br>');
}

function showResponse(responseText) {
    var chatBox = $('#chatBox');
    $(chatBox).append('eliza:' + responseText.eliza + '<br>');
}