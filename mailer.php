<?php

$to  = 'michael.serna01@gmail.com';
$subject = 'personal website';

$name = $_GET['fullname'];
$email = $_GET['email'];
$message = $_GET['message'];

$message = <<<EMAIL

Name: $name
Email: $email
Message: $message

EMAIL; 

$header = '$email';

if($_GET){
mail($to, $subject, $message, $header)    
}

?>