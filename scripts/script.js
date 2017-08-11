
var submitted=false;

$('#gform').on('submit', function(e) {
  $('#gform').prepend('<p>Thank you for your message! I will reply soon.</p>');
});
