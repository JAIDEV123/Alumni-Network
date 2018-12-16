var max = 2019;
var min = 1994;

function redirect(){
	var a = document.getElementById("year").value;
	if(a<min || a>max || a.length<4){
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
	if(a<min || a>max || a.length<4){
		$('#RegisterModal').modal('hide');
		$('#BatchModal').modal('hide');
		$('#Incorrect').modal();
		//lert("Incorrect Input Type");
		return false;
	}
	else {
		console.log(a);
		var b='./' + a + '.html';
		console.log(b);
		window.location=b;
		return true;
	}	
}

function modalbatchredirect(){
	var a = document.getElementById("year").value;
	if(a<min || a>max || a.length<4){
		$('#RegisterModal').modal('hide');
		$('#BatchModal').modal('hide');
		$('#Incorrect').modal();
		//lert("Incorrect Input Type");
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