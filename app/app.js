$(document).ready(function(){
    collectLanguagesData();
});

function collectLanguagesData(){
    var ajaxFactory = new AjaxFactory();

    var cSharpLanguageData = {
        success: function(data){
            $('#test').append(JSON.stringify(data));
        }
    };

    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:C#", cSharpLanguageData);
}


