<?php

if(isset($_POST['email']) && !empty($_POST['email']){

$nome = addslashes($_POST['name']);
$email = addcslashes($_POST['email']);
$mensagem = addcslashes($_POST['message']);

$to = "ericmartins1997@gmail.com";
$subject = "contato - site portfolio";
$body = "Nome:".$nome. "\r\n".
        "Email:".$email."\r\n".
        "Mensagem: ".$mensagem;

$header = "From:ericmartins97@globomail.com"."\r\n".
"Reply-to:".$email."\e\n"."X=Mailer:PHP".phpversion();
if(mail($to,$subject,$body,$header)){
    echo("Email Enviado com sucesso!");

}
else{
    echo("o email nao pode ser Enviado");
}

}


?>