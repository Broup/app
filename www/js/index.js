
$(function() {

	$(".get-scroll").each(function(){
		var _this = $(this)
		_this.niceScroll(_this.find(".nice-scroll"), {
			cursorwidth: "5px",
			enableobserver: true,
            horizrailenabled: false
		});
		
       $(".get-scroll").getNiceScroll().resize()
		//observeDOM(this,function(){
		    //setTimeout(function(){_this.getNiceScroll().resize()},1000);
        //})
	})
})

