$('#password_reset').on('submit',function(){
    // alert('123')
    let formData = $(this).serialize()
    $.ajax({
        type: "put",
        url: "/users/password",
        data:formData,
        success: function (res) {
            console.log(res);
        }
    });
    return false
})