<?php

$config = [];
$request = Craft::$app->request;

if (
    !$request->getIsConsoleRequest()
) {
    $config['toEmail'] = $toEmail;
}

return $config;