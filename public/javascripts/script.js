function clickRoom(){
    var id= 1;
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: '/room/'+id,						
        success: function(data) {
            //res.redirect(url);
            console.log("success");
        }
    });
}