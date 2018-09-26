$(document).ready(function(){
	var name = "";
	var phone = "";
	var email = "";
	$('[data-delayed-toggle="collapse"]').on('click', function(e) {
      var delay = $(this).data('delay') || 1000;
      //var $target = $($(this).attr("href"));
	  var $target = $('#exampleModal');
      window.setTimeout(function() {
         $target.modal('show');
          }, delay);
// setTimeout(function(){$('#exampleModal').modal('show');}, 5000);
	});
	
$('#exampleModal input').on('keyup', function(){	
	var validName = $('.form-control')[0].checkValidity();
	if (validName)
		$('.modal-footer').attr('hidden',false);
		else
		$('.modal-footer').attr('hidden',true);
});
$('#bntsub').on('click', function(){
	name = $('#exampleInputName').val();
	phone = $('#exampleInputPhone').val();
	email = $('#exampleInputEmail1').val();
	$('#name').text(name);
	$('#phone').text(phone);
	$('#email').text(email);
	$('#exampleModal').modal('hide');
	$('.button').attr('hidden', true);
	$('.massage').attr('hidden', false);
})
$('.rewrite').on('click', function(){
	$('.button').attr('hidden', false);
	$('.massage').attr('hidden', true);
	$('#name').text('');
	$('#phone').text('');
	$('#email').text('');
	name = $('#exampleInputName').val('');
	phone = $('#exampleInputPhone').val('');
	email = $('#exampleInputEmail1').val('');
	$('.modal-footer').attr('hidden',true);
	
})	
})
      
	  



/*
(function(){
window.addEventListener('load',function(){
	var form = document.getElementById('needs-validation');
	form.addEventListener('submit', function(event) {
		if( form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
		form.classList.add('was-validated');
	}, false);
}, false);
})()
*/



