
var submitted=false;

$('#gform').on('submit', function(e) {
  $('#gform').prepend('<p class="submission-msg">Thank you for your message! I will reply soon.</p>');
  $('#gform').reset();
});
