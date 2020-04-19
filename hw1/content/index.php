<?php

require_once('HealthApi.php');

try {
    $api = new HealthApi();
    echo $api->run();
} catch (Exception $e) {
    echo json_encode(Array('error' => $e->getMessage()));
}
