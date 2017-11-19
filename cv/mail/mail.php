<?php

if( isset( $_POST['send'] ) ) { // проверка на отправку формы, send должен стоять в качестве атрибута name у кнопки submit
    $fio = htmlspecialchars( $_POST['fio'] ); // fio - значение атрибута name
    $email = htmlspecialchars( $_POST['email'] ); // email - значение атрибута name
    $message = htmlspecialchars( $_POST['message'] ); // phone - значение атрибута name
    // $text = htmlspecialchars( $_POST['text'] ); // text - значение атрибута text (textarea)
    
    $to = 'tarasiuk.tm@gmail.com'; // емейл получателя
    $subject = 'Сообщение по CV';
    $message = 
        "ФИО:  $fio \n " .
        "Почта:  $email \n " .
        "Сообщение:  $message \n ";
        //"Текс сообщения:  $text \n ";
    $from = 'tarasiuk.tm@kima.zzz.com.ua'; // Сменить на свой почтовый адрес домена zzz.com.ua
    $headers =  'From:'.$from."\r\n".
                'X-Mailer: PHP/' . phpversion();
    
        if(mail($to, $subject, $message, $headers)) {
            echo 'Ваш заказ отправлен. Спасибо!<br>Через 2 секунд Вы будете перенаправлены на главную страницу.';
            echo '<meta http-equiv="refresh" content="2;URL=//kima.zzz.com.ua/cv/Tarasiukcv.html">';
        }
        else {
            echo 'Ошибка при отправке сообщения!';
        }
}
?>