<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Баталова Лиана Шамильевна</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  

<div class="wrap">

  <h3>Напишите ваше пожелание!</h3>
  <section class="message-form">

      <form action="" id='validform'>
      <input class="inputs" type="text" id="input-name" name="fio" placeholder="ФИО">
        
      <input class="inputs" type="email" id="input-email" placeholder="E-mail">
      
      <input class="inputs" name="date" id="input-date">
      <textarea id="input-review" name="input-review" rows="10" cols="50" placeholder="Пожелание"></textarea>

      </form>

  </section>
<br>
  <button id="send-button">Отправить</button>
   <button id="show-button">Показать пожелания</button>
  <div class="messages">

  </div>
</div>
</body>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="validate.js"></script>
<script type="text/javascript" src="jquery.mask.min.js"></script>

<script src="main.js"></script>

</html>