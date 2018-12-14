function redirect(){
	var a = document.getElementById("year").value;
	if(a<1980 || a>2050 || a.length<4){
		$('#Incorrect').modal();
		//alert("Incorrect Input Type");
		return false;
	}
	else {
		console.log(a);
		var b='./batch/' + a + '.html';
		console.log(b);
		window.location=b;
		return true;
	}
}

function modalredirect(){
	var a = document.getElementById("year").value;
	if(a<1980 || a>2050 || a.length<4){
		$('#RegisterModal').modal('hide');
		$('#BatchModal').modal('hide');
		$('#Incorrect').modal();
		//alert("Incorrect Input Type");
		return false;
	}
	else {
		console.log(a);
		var b='./batch/' + a + '.html';
		console.log(b);
		window.location=b;
		return true;
	}	
}

$('#document').ready(function(){
    $('#btn-modal').on('click', function(){
        $('#year').val('');
    });
});