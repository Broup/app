group = {
	init : function(t){
		var groupColor = $(t).find(".bottomGroupBar").css("background-color")
		$("#groupTitle").css({
			"color" : groupColor,
			"border-bottom" : "4px solid "+groupColor,
			"background-image" : $(t).css("background-image")
			
		})
		
		console.log($(t).css("background-image"))
		
		$("#groupTitle_name").html($(t).find(".groupName").html())
		
		addStylesheetRule("#groupNav .tablist>li.active{border-bottom: 2px solid "+groupColor+"; color: "+groupColor+" !import}")
		
		$(".btn.fa.fa-bars").css({ "background-color" :groupColor})
		
	}
}