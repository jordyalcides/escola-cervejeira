<?php
 
/* apenas dispara o envio do formulário caso exista $_POST['enviarFormulario']*/
 
if (isset($_POST['enviarFormulario'])){
 
 
/*** INÍCIO - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/
$enviaFormularioParaNome = 'Contato Escola Cervejeira';
$enviaFormularioParaEmail = 'teste.acens@gmail.com';
 
$caixaPostalServidorNome = 'Escola Cervejeira';
$caixaPostalServidorEmail = 'teste.acens@gmail.com';
$caixaPostalServidorSenha = 'bocaoroyal';

/*** FIM - DADOS A SEREM ALTERADOS DE ACORDO COM SUAS CONFIGURAÇÕES DE E-MAIL ***/ 
 
 
/* abaixo as veriaveis principais, que devem conter em seu formulario*/
 
$remetenteNome  = $_POST['nome'];
$remetenteEmail = $_POST['email'];
$assunto  = 'Contato Site - '.$remetenteNome.'';
$mensagem = $_POST['menssagem'];
 
$mensagemConcatenada = ''.$remetenteAssunto.'<br/>'; 
$mensagemConcatenada .= '-------------------------------<br/>'; 
$mensagemConcatenada .= 'Nome: '.$remetenteNome.'<br/>'; 
$mensagemConcatenada .= 'E-mail: '.$remetenteEmail.'<br/>';
$mensagemConcatenada .= 'Menssagem: "'.$menssagem.'"<br/>';
$mensagemConcatenada .= '-------------------------------<br/><br/>'; 

$mensagemConcatenada2 = ''.$remetenteAssunto.'<br/>'; 
$mensagemConcatenada2 .= '-------------------------------<br/>'; 
$mensagemConcatenada2 .= 'Nome: '.$remetenteNome.'<br/>'; 
$mensagemConcatenada2 .= 'E-mail: '.$remetenteEmail.'<br/>';
$mensagemConcatenada2 .= 'Menssagem: "'.$menssagem.'"<br/>';
$mensagemConcatenada2 .= 'Recebemos sua menssagem, entraremos em contato em breve!'; 
 
 
/*********************************** A PARTIR DAQUI NAO ALTERAR ************************************/ 
 
require_once('phpmailer/PHPMailerAutoload.php');
 
$mail = new PHPMailer();
 
$mail->IsSMTP();
$mail->SMTPAuth  = true;
$mail->Charset   = 'utf8_decode()';
$mail->Host  = 'smtp.'.substr(strstr($caixaPostalServidorEmail, '@'), 1);
$mail->Port  = '587';
$mail->Username  = $caixaPostalServidorEmail;
$mail->Password  = $caixaPostalServidorSenha;
$mail->From  = $caixaPostalServidorEmail;
$mail->FromName  = utf8_decode($caixaPostalServidorNome);
$mail->IsHTML(true);
$mail->Subject  = utf8_decode($assunto);
$mail->Body  = utf8_decode($mensagemConcatenada);
 
 
$mail->AddAddress($enviaFormularioParaEmail,utf8_decode($enviaFormularioParaNome));

$cont=0;
	while (!($mail->send()) || ($cont==15)){
		$cont++;
	}


$mail2 = new PHPMailer();
 
$mail2->IsSMTP();
$mail2->SMTPAuth  = true;
$mail2->Charset   = 'utf8_decode()';
$mail2->Host  = 'smtp.'.substr(strstr($caixaPostalServidorEmail, '@'), 1);
$mail2->Port  = '587';
$mail2->Username  = $caixaPostalServidorEmail;
$mail2->Password  = $caixaPostalServidorSenha;
$mail2->From  = $caixaPostalServidorEmail;
$mail2->FromName  = utf8_decode($caixaPostalServidorNome);
$mail2->IsHTML(true);
$mail2->Subject  = utf8_decode($assunto);
$mail2->Body  = utf8_decode($mensagemConcatenada2);
 
 
$mail2->AddAddress($remetenteEmail,utf8_decode($remetenteNome));
 
$cont2=0;
	while (!($mail2->send()) || ($cont2==15)){
		$cont2++;
	}
 
 
}
?>
 
<!DOCTYPE html>
<html lang="pt-BR">
	<head>
    	<title></title>
		<script type="text/javascript">
			alert ("Menssagem enviada com sucesso!\nEm breve entraremos em contato.");
			window.location.href = ("index.html");
		</script>
	</head>
</html>