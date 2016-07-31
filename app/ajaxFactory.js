var AjaxFactory = function() {};

AjaxFactory.prototype.getData = function(url, callback){
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            onAjaxRequestStart();
        },
        success: function (data) {
            callback.success(data);
        },
        complete: function(){
            onAjaxRequestComplete();
        }
    });
};

function onAjaxRequestStart(){
    //todo show loader
}

function onAjaxRequestComplete(){
    //todo hide loader
}