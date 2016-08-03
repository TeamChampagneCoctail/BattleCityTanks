$(document).ready(function(){
    var data;

    if(localStorage){
        data = getLanguagesData();
    }
    else{
        //exception,error etc
    }

    console.dir(data);
});

function getLanguagesData(){
    var currentTimestamp = new Date($.now()),
        lastUpdate = Date.parse(localStorage.getItem('lastModified')),
        dateDiff = currentTimestamp - lastUpdate,
        dateDiffMinutes = Math.round(((dateDiff % 86400000) % 3600000) / 60000),
        languagesData = localStorage.getItem('languagesData');

    //todo check storage not result !!!
    if(isNaN(dateDiffMinutes) || dateDiffMinutes === null){
        languagesData = executeGithubApiCall();
    }
    else{
        if(dateDiffMinutes < 60){

            languagesData = JSON.parse(localStorage.getItem('languagesData'));
        }
    }

    return languagesData;
}

function executeGithubApiCall(){
    var ajaxFactory = new AjaxFactory(),
        languagesData = [],
        currentDateTime = new Date($.now()),
        callbackObj = {
            success: function(data){
                languagesData.push(JSON.stringify(data));
        }
    };

    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:Java", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:C#", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:GO", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:Javascript", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:C", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:C++", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:Python", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:Ruby", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:Perl", callbackObj);
    ajaxFactory.getData("https://api.github.com/search/repositories?q=language:PHP", callbackObj);

    //todo improve this *** with $when
    $(document).ajaxStop(function () {
        localStorage.setItem('lastModified', currentDateTime);
        localStorage.setItem('languagesData', JSON.stringify(languagesData));
    });

    return languagesData;
}


