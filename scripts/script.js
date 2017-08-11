
var submitted=false;

$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Thank you for your message! I will reply back very soon.');

  setTimeout(function(){
    location.reload();
  }, 30000);
});
