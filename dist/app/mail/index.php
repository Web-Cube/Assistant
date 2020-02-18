<?
	require('phpmailer/class.phpmailer.php');

	$mail = new PHPMailer;

	$mail->isMail();

	$dt = date("d.m.y");

	$servername = 'sovetnik.com';

	$title = 'Заявка с сайта '. $servername . ' — ' . $dt; 

	$message = '<table width="100%" border="1">';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Имя</b></td>';
	$message .= '<td>' .  $_POST['name'] . '</td>';
	$message .= '</tr>';

	$message .= '<tr>';
	$message .= '<td width="45%"><b>Email</b></td>';
	$message .= '<td>' .  $_POST['email'] . '</td>';
	$message .= '</tr>';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Индекс</b></td>';
	$message .= '<td>' .  $_POST['index'] . '</td>';
	$message .= '</tr>';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Телефон</b></td>';
	$message .= '<td>' .  $_POST['phone'] . '</td>';
	$message .= '</tr>';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Адрес</b></td>';
	$message .= '<td>' .  $_POST['adress'] . '</td>';
	$message .= '</tr>';
	
	$message .= '<tr>';
	$message .= '<td width="45%"><b>Текст обращения</b></td>';
	$message .= '<td>' .  $_POST['mess'] . '</td>';
	$message .= '</tr>';

	$message .= '</table>';
 
	$mail->From = 'test@sovetnik.com';
	$mail->FromName = 'sovetnik.com';
	$mail->CharSet = 'UTF-8';

	$mail->addAddress('misha1oboronov@gmail.com');

	$mail->isHTML(true);  

	$mail->Subject = $title;
	$mail->Body    = $message;
	
	$mail->send();

?>       