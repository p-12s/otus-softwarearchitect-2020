<?php

require_once('Api.php');

class HealthApi extends Api
{
    public $apiName = 'health';

    /**
     * GET
     * Проверка состояния приложения
     * @return string
     */
    public function indexAction()
    {
        return $this->response(array("status" => "OK"), 200);
    }
}