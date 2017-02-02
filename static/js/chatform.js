/**
 * Created by Izueh on 2/1/2017.
 */

$(document).ready(function () {
    var options = {
        beforeSubmit: showRequest,
        success: showResponse,
        clearForm: true

    };
    $("#chatForm").ajaxForm(options);
});

function showRequest(formData, jqForm, options) {
    var chatBox = $('#chatBox');
    var message = '<span class="message-sent">'+'human: ' +  $('#message').val() + '</span>';
    $(chatBox).append(message + '<br>');
}

function showResponse(responseText, statusText, xhr, $form) {
    var chatBox = $('#chatBox');
    $(chatBox).append('<span class="message-received">' +'DOCTOR: ' +  responseText + '</span><br>');
    
}