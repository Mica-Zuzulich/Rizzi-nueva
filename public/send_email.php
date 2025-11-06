<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'env_loader.php';
if (!loadEnv()) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error de configuración interna (ENV)."]);
    exit;
}

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$recaptcha_secret_key = getenv('RECAPTCHA_SECRET_KEY');
$smtp_user            = getenv('MAIL_USER');
$smtp_pass            = getenv('MAIL_PASS');

$allowed_origin = "https://www.rizziinversiones.com/";     
$mail_to        = 'investments.rizzi@gmail.com';

if (!$recaptcha_secret_key || !$smtp_user || !$smtp_pass) {
    http_response_code(500);
    error_log("FATAL: Faltan credenciales clave en el .env");
    echo json_encode(["success" => false, "message" => "Error de configuración (Credenciales)."]);
    exit;
}

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['HTTP_HOST'] === 'localhost' || $_SERVER['HTTP_HOST'] === '127.0.0.1' || strpos($_SERVER['HTTP_HOST'], ':') !== false) {
    header("Access-Control-Allow-Origin: *");
} else {
    if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowed_origin) {
        header("Access-Control-Allow-Origin: " . $allowed_origin);
    } else {
        http_response_code(403); 
        echo json_encode(["success" => false, "message" => "Acceso no permitido (CORS)."]);
        exit;
    }
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Error: Método no permitido."]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    http_response_code(400); 
    echo json_encode(["success" => false, "message" => "Error: Datos JSON inválidos o vacíos."]); 
    exit;
}

$nombre       = trim($data->nombre ?? 'N/A');
$email        = filter_var(trim($data->email ?? ''), FILTER_SANITIZE_EMAIL);
$mensaje      = trim($data->mensaje ?? 'N/A');
$captchaToken = $data->captchaToken ?? '';

if (empty($nombre) || empty($email) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Campos requeridos incompletos o correo inválido."]);
    exit;
}

$nombre  = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');
$mensaje = htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8');

if (empty($captchaToken)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Falta la verificación de ReCAPTCHA."]);
    exit;
}

$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_response = @file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret_key . '&response=' . $captchaToken);

if ($recaptcha_response === FALSE) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "Error al contactar el servicio de ReCAPTCHA."]);
    exit;
}

$recaptcha_data = json_decode($recaptcha_response);

if (!$recaptcha_data->success || (isset($recaptcha_data->score) && $recaptcha_data->score < 0.5)) { 
    http_response_code(403); 
    echo json_encode(["success" => false, "message" => "Verificación de ReCAPTCHA fallida o spam potencial."]);
    exit;
}


$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com'; 
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtp_user; 
    $mail->Password   = $smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom($smtp_user, 'Formulario Web Rizzi-Group'); 
    $mail->addAddress($mail_to); 
    $mail->addReplyTo($email, $nombre);
    
    $mail->isHTML(false);
    $mail->Subject = 'Nueva Consulta Web de: ' . $nombre;
    $mail->Body    = "Nombre: " . $nombre . "\nCorreo: " . $email . "\n\nMensaje:\n" . $mensaje;

    $mail->send();
    
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "¡Mensaje enviado con éxito!"]);

} catch (Exception $e) {
    http_response_code(500);
    error_log("PHPMailer Error: " . $e->getMessage()); 
    echo json_encode(["success" => false, "message" => "Error del servidor: No se pudo enviar el correo."]);
}
?>