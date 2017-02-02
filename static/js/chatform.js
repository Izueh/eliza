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
    chatBox.html(chatBox.html() + $('#message').val() + '<br>');
}

function showResponse(responseText, statusText, xhr, $form) {
    var chatBox = $('#chatBox');
    chatBox.html(chatBox.html() + responseText + '<br>');
    
}