// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	if ($('#divjuego'))
	{
		$('#colorturquesa').on('click', function(){
			$('#R').append('1')
		});
		$('#colormorado').on('click', function(){
			$('#R').append('2')
		});
		$('#colorverde').on('click', function(){
			$('#R').append('3')
		});
		$('#colorrosa').on('click', function(){
			$('#R').append('4')
		});
	}
	
//}); 
});

