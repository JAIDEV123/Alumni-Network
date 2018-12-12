function redirect(){
			var a = document.getElementById("year").value;
			if(a<1980 || a>2050 || a.length<4){
				$('#Incorrect').modal()
				//alert("Incorrect Input Type");
				return false;
			}
			console.log(a);
			var b='./batch/' + a + '.html';
			console.log(b);
			window.location=b;
			return true;
}

$(document).ready(function(){
    function alignModal(){
        var modalDialog = $(this).find(".modal-dialog");
        /* Applying the top margin on modal dialog to align it vertically center */
        modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
    }
    // Align modal when it is displayed
    $(".modal").on("shown.bs.modal", alignModal);
    
    // Align modal when user resize the window
    $(window).on("resize", function(){
        $(".modal:visible").each(alignModal);
    });   
});