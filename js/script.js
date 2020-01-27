$(document).ready(function () {

  $('.textZone').click(function() {
    changeInput();
  })
})



// INSERIMENTO MESSAGGI
$('#myMessage').append('<p class="rigthMessage">QUI IL MESSAGGIO DIGITATO NELLA TEXT AREA</p>');
// /INSERIMENTO MESSAGGI

function changeInput() {
  $('#audioButton').toggle(false);
  $('#sendButton').toggle(true);
}

function send() {
  var textMessage = $('input#textArea').val()

  if(textMessage.length != 0) {
    var newMessage = $('.messageArea .myMessage').clone();

    newMessage.find('.rigthMessage').text(textMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.messageTime').text(time);
    newMessage.addClass('sent');
    $('.message-text').append(newMessage);
  }

}


function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}
