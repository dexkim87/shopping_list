$(document).ready(function() {
	$("#input_container").click(function(event){
	    event.preventDefault();
	    var input = $("#input_field").val();
        var inputlength = $("#input_field").val().length;
	    if (inputlength>0) {
		$("#fears_list").append("<input type='checkbox' class='checkbox' name='checkbox' value='value'><label><span></span>"+input+"</label>");
		}
		else {
		}
		$("label").on("click", "span", function(event){
	   	    $(this).toggleClass("checked_box");
	   	    $(this).parent().toggleClass("checked_text");
        })

   	});
});
