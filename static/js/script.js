function redirect(){
			var a = document.getElementById("year").value;
			if(a<1980 || a>2050 || a.length<4){
				alert("Incorrect Input Type");
				return false;
			}
			console.log(a);
			var b='./' + a + '.html';
			console.log(b);
			window.location=b;
			return true;
}