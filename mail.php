<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

//https://kinsta.com/fr/blog/serveur-smtp-gmail/
//https://analyse-innovation-solution.fr/publication/fr/php/comment-envoyer-un-mail-en-php


if($_POST['service']==1){
    $service = "Saucy Classic";
}elseif($_POST['service']==2){
    $service = "Saucy Green";
}elseif($_POST['service']==3){
    $service = "Saucy Comfort";
}

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = 'smtp.office365.com';
$mail->SMTPAuth = true;
$mail->Username = 'saucysaucer@outlook.fr';
$mail->Password = 'PASSWORD';
$mail->SMTPSecure = 'STARTTLS';
$mail->Port = 587;

$mail->setFrom('saucysaucer@outlook.fr', 'Saucy Saucer');
$mail->addAddress($_POST['email']);
$mail->isHTML(true);
$mail->CharSet = 'UTF-8';
$mail->Subject = 'Récapitulatif';
$mail->Body = "
<html>
<body>
<div style='background-color: white; height: 700px; font-family: sans-serif;'>
  <h1 style='color: white; background-color: black; padding: 30px'>Récapitulatif</h1>
  <h3 style='margin-bottom: 2px'>Mode de transport</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$service."</div>
  
  <h3 style='margin-bottom: 2px'>Départ</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['from-planetName']." (".$_POST['from-categoryName'].")</div>
  
  <h3 style='margin-bottom: 2px'>Arrivée</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['to-planetName']." (".$_POST['to-categoryName'].")</div>
  
  <h3 style='margin-bottom: 2px'>Durée du vol</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['distance']."h</div>
  
  <h3 style='margin-bottom: 2px'>Nombre de passagers adultes</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['adults']."</div>
  
  <h3 style='margin-bottom: 2px'>Nombre de passagers enfants</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['child']."</div>
  
  <h3 style='margin-bottom: 2px'>Date</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['weekInFrench'].", ".$_POST['day']." ".$_POST['monthInFrench']." à ".$_POST['time']."</div>
  <h3 style='margin-bottom: 2px'>Prix</h3>
  <div style='font-size: 18px; font-weight: 300;'>".$_POST['total']."€</div>
</div>

<h1>Saucy Saucer</h1>
</body>
</html>";
$mail->AltBody = 'non html';


if (!$mail->send()) {
    $result = $mail->ErrorInfo;
} else{
    $result = 'Message bien envoyé';
}

?>