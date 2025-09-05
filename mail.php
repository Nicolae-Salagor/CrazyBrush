<?php 
    // Get data from form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $text = htmlspecialchars($_POST['text']);

    // Parameters for function mail:
    $to = "coleainvoker@gmail.com";
    $source = getenv('HTTP_REFERER');
    $subject = 'Client topic mail';
    $message = "Mail Text: 
        <br><br>
        Name: $name<br>
        E-mail: $email<br>
        Text: $text<br>
    ";

    //$headers = "From : $email\r\nReply-To: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $additional_headers = array(
        'From' => $email,
        'Reply-To' => $email,
        'X-Mailer' => 'PHP/' . phpversion()
    );

    mail($to, $subject, $message, $additional_headers);


?>

