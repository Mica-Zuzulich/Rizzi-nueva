<?php
function loadEnv() {
    $file = __DIR__ . '/../.env'; 

    if (!file_exists($file) || !is_readable($file)) {
        error_log("FATAL: Archivo .env no encontrado o no es legible.");
        return false;
    }

    $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0 || strpos($line, '=') === false) {
            continue;
        }

        list($name, $value) = explode('=', $line, 2);

        $name = trim($name);
        $value = trim($value, " \t\n\r\0\x0B\"'"); // Limpiar espacios y comillas

        if (!array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
        }
    }
    return true;
}
?>