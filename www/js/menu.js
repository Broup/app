$("#menuBtn").tapend(function(ev){
    if(checkPress(ev)){
        $("#mainMenu").fadeIn();
        $("#myGroupsBtn").animate({"margin-right" : "-150px", "margin-bottom" : "46px"})
        $("#myMeetsBtn").animate({"margin-right" : "-150px", "margin-top" : "46px"})
        $("#myAccountBtn").animate({"margin-left" : "-150px", "margin-bottom" : "46px"})
        $("#activitiesBtn").animate({"margin-left" : "-150px", "margin-top" : "46px"})
		$(".btn.fa.fa-bars").css({ "background-color" :"rebeccapurple"})

    }
})

$("#mainMenu").tapend(function(ev){
    if(checkPress(ev)){
        $("#mainMenu").fadeOut();
        $("#myGroupsBtn").animate({"margin-right" : "-120px", "margin-bottom" : "20px"})
        $("#myMeetsBtn").animate({"margin-right" : "-120px", "margin-top" : "20px"})
        $("#myAccountBtn").animate({"margin-left" : "-120px", "margin-bottom" : "20px"})
        $("#activitiesBtn").animate({"margin-left" : "-120px", "margin-top" : "20px"})
    }
})

$(document).on("tapend","[section-target]",function(ev){

		if(checkPress(ev)){
			 setTimeout(function() {
				$(".get-scroll").getNiceScroll().resize()
			}, 300); 
			var title = $(this).hasAttr("section-title") ? $(this).attr("section-title") : $(this).text();
			$(".page").removeClass("active");
			$("header").html(title);
			$("[section-name="+$(this).attr("section-target")+"]").addClass("active");

		
		if($(this).hasAttr("section-fx")){
			eval($(this).attr("section-fx")+"(this"+($(this).hasAttr("section-fx-parameters")?","+ $(this).attr("section-fx-parameters") : "")+")")
		}else if(eval('typeof '+$(this).attr("section-target")+'.init == "function"')){
			eval($(this).attr("section-target")+".init(this"+($(this).hasAttr("section-fx-parameters")?","+ $(this).attr("section-fx-parameters") : "")+")")
		}
      
	}
	
});

//tab menu
$(document).on("tapend",".tablist>li:not(.active)",function(){
	$(".tablist[tab-group="+$(this).parent().attr("tab-group")+"]>li.active").removeClass("active");
	$(this).addClass("active");
	
	$(this).parent().parent().parent().find("[tab-name]").hide();
	$("[tab-name="+$(this).attr("tab-target")+"]").show();
     setTimeout(function() {
            $(".get-scroll").getNiceScroll().resize()
       }, 500); 
})