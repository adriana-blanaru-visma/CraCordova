$( "#btnSubmit" ).click(function() {
 addNewCr();
});
function addNewCr(){
var dataObj = {
				userName : $("#txtUser").val(),
				managerName : $("#txtManager").val(),
				productName :$("#txtProduct").val(),
				productPrice: $("#txtPrice").val(),
				id:1
		};	
		var arr = [];
		arr.push(dataObj);
		console.log('before post');
$.ajax({
    type: 'POST',
    url: 'http://10.11.1.68:3579/cra/api/cr',
    crossDomain: true,
    data:  JSON.stringify(arr),
    dataType: 'json',
	beforeSend: function(xhr){xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Authorization', 'TenantId 96444A56-C549-4911-A437-97A1C6E0300A');},
    success: function(data) {
       $( ".result" ).html( 'Success!' );
    },
    error: function (e) {
        $( ".result" ).html( 'Error!' );
    }
});
    
}