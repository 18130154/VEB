$('.messages').hide()
$('#show-button').click(function(){
  if($('.messages').is(':hidden')){
    $('.messages').show(600)
  } else {
    $('.messages').hide(600)
  }
  
})



function getDataFromDB() {
  $(".messages").empty()
  $.ajax({
    url: "./getdata_3b.php",
    type: "GET",
    data: {},
    success: function (response) {
      let reviews = JSON.parse(response)
      let len = Object.keys(reviews).length

      for (let id = len - 1; id >= 0; id--) {
        $('<div>', {
          class: 'message',
          id: `${id}`
        }).appendTo('.messages');

        $('<p>', {
          class: 'message-name',
        }).appendTo(`#${id}`);

        $('<span>', {
          id: `message-name`,
          text: "Прислал(а): " + reviews[id].name
        }).appendTo(`#${id} .message-name`);

        $('<p>', {
          id: `message-text`,
          text: reviews[id].message
        }).appendTo(`#${id}`);
      }


    }
  })
}

getDataFromDB()

$('#send-button').click(function () {
  let name = $('#input-name').val()
  let email = $('#input-email').val()
  let date = new Date().toISOString().slice(0, 10)
  let message = $('#input-review').val()
  if (name.length > 2 && email.length > 0 && message.length > 0) {
    $.ajax({
      url: "./setdata_3b.php",
      type: "POST",
      data: {
        "name": name,
        "email": email,
        "date": date,
        "message": message
      },
      success: function (response) {
        alert("Ваше пожелание добавлено!");
        getDataFromDB()
      }
    })
  } else {
    alert("Ошибка в заполненных полях! Заполните все поля");
  }

});


$('#validform').validate({
  rules : {
    fio:{
      minlength: 3,
      digits: false
    }
  },
  messages:{
    fio:{
      minlength: "ФИО должно содержать как минимум 3 буквы",
      digits: false
    }
  }
})

$('#input-date').mask('00.00.0000', {placeholder: "Дата"});