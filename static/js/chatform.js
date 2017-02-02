/**
 * Created by Izueh on 2/1/2017.
 */

$(document).ready(function () {
    var options = {
        beforeSubmit: showRequest,
        success: showResponse

    };
    $("#chatForm").ajaxForm(options);
});

function showRequest(formData, jqForm, options) {
    var chatBox = $('#chatBox');
    chatBox.val(chatBox.val() + $('#message').val()+'\n' )
}

function showResponse(responseText, statusText, xhr, $form) {
    var chatBox = $('#chatBox');
    chatBox.val(chatBox.val() + responseText +'\n' )
    
}