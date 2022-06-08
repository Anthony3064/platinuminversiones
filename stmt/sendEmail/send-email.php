<?php
    ini_set("display_errors", 1 );
    error_reporting( E_ALL );
    $from = "platinuminversionescr@platinuminversiones.com";
    $to = "platinuminversionescr@platinuminversiones.com";
    $subject = "Solicitud de Información para " . $_POST["name"];
    $message = $_POST['name'] . " ha solicitado información para el servicio: " . $_POST['service'] . "\n\nEl teléfono de contacto es: " . $_POST['phone'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    
    header('Location: https://anthony3064.github.io/platinuminversiones/#contact');
    die();
?>
