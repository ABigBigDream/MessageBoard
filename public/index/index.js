$(function() {
    $('#submit').click(function(e) {
        e.preventDefault();
        $.ajax({
            type:'post',
            url: '/save',
            data: {
                author: $('#author').val(),
                title: $('#title').val(),
                content: $('textarea[name=content]').val()
            },
            success: function(data) {
                if(data.status == 200) {
                    alert(data.message);
                    $('#author').val('');
                    $('#title').val('');
                    $('textarea[name=content]').val('');
                    location.href='/';
                }  
            },
            error: function() {

            }
        });
    });
})