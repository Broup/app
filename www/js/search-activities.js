$("#searchActivitiesBtn").tapend(function(ev){
    if(checkPress(ev)){
        $("#searchActivitiesMenu").fadeIn();
        $("#myGroupsBtn").animate({"margin-right" : "-150px", "margin-bottom" : "46px"})
        $("#myMeetsBtn").animate({"margin-right" : "-150px", "margin-top" : "46px"})
        $("#myAccountBtn").animate({"margin-left" : "-150px", "margin-bottom" : "46px"})
        $("#activitiesBtn").animate({"margin-left" : "-150px", "margin-top" : "46px"})

    }
})

$("#searchActivitiesMenu").tapend(function(ev){
    if(checkPress(ev)){
        $("#searchActivitiesMenu").fadeOut();
        $("#myGroupsBtn").animate({"margin-right" : "-120px", "margin-bottom" : "20px"})
        $("#myMeetsBtn").animate({"margin-right" : "-120px", "margin-top" : "20px"})
        $("#myAccountBtn").animate({"margin-left" : "-120px", "margin-bottom" : "20px"})
        $("#activitiesBtn").animate({"margin-left" : "-120px", "margin-top" : "20px"})
    }
})