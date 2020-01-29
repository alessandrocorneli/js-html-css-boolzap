$(document).ready(function () {

  $('.textZone').click(function() {
    changeInput();
  })

  $('#sendButton').click(function() {
    send();
  })
  $('.srcBar input').keyup(function() {
    searchChat();
  })
  $('#textArea').keypress(function(event) {
    if (event.which == 13) {
      send();
    }
  })
})



// INSERIMENTO MESSAGGI
function send() {
  var textMessage = $('input#textArea').val();
  console.log(textMessage);

  if (textMessage.length != 0) {
    var newMessage = $('.template .RightMessage').clone();

    newMessage.find('.mText').text(textMessage);

    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.messageTime').text(time);
    newMessage.addClass('sent');
    $('.messageArea.active').append(newMessage);
    scroll();
    setTimeout(answer, 1000);
    $('input#textArea').val('');
  }
}
// /INSERIMENTO MESSAGGI


function answer() {
  var mAnswer = $('.template .LeftMessage').clone();
  mAnswer.find('.mText').text('ok');

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  mAnswer.find('.messageTime').text(time);
  mAnswer.addClass('received');
  scroll();
  $('.messageArea.active').append(mAnswer);
}
// RICERCA CHAT
function searchChat() {
  var text = $('.srcBar input').val().toLowerCase();
  console.log(text);

  $('.c-l-e').each(function() {
    var contactName = $(this).find('.c-l-e-name').text().toLowerCase();

    if(contactName.includes(text) == true){
      $(this).show();
    }
    else {
      $(this).hide();
    }
  })
}

function changeInput() {
  $('#audioButton').toggle(false);
  $('#sendButton').toggle(true);
}

function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

function scroll(){
  var heightArea = $('.messageArea.active').height();
  $('.messageArea.active').scrollTop(heightArea);
}


// DA IMPLEMENTARE:
// -tempo di risposta casuale da 1 a 3 secondi
// -risposte casuali
// -perfezionamento hover e estetica
