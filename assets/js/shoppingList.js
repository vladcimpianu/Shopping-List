// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab new item from input
		var newItem = $(this).val();
		//create new li on list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newItem + "</li>");
		$(this).val("");
	};
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle()
});

$("li").toggle()