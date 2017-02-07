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
            contentType: "application/json",
            url: "/eliza/DOCTOR/",
            dataType: "json",
            data: JSON.stringify(request),
            success: function (data) {
                showResponse(data);
                document.getElementById('chatForm').reset();
            }
        });
    })
});


function showRequest() {
    var chatBox = $('#chatBox');
    var message = '<span class="message">'+'Human: ' + $('#message').val()+'</span>';
    $(chatBox).append(message + '<br>');
}

function showResponse(responseText) {
    var chatBox = $('#chatBox');
    var message = '<span class="message">' + 'Eliza: '+ responseText.eliza + '</span>';
    $(chatBox).append(message + '<br>');
}