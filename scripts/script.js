
var submitted=false;

$('#gform').on('submit', function(e) {
  $('#gform').prepend('<p class="submission-msg">This is a test.</p>');
});
