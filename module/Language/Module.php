<?php
namespace Language;

use Zend\ModuleManager\Feature\AutoloaderProviderInterface;
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use Language\Model\Language;
use Language\Model\LanguageTable;
use Zend\Db\ResultSet\ResultSet;
use Zend\Db\TableGateway\TableGateway;
 
class Module
{
    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
                __DIR__ . '/autoload_classmap.php',
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
 
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

     public function getServiceConfig()
     {
         return array(
             'factories' => array(
                 'Language\Model\LanguageTable' =>  function($sm) {
                     $tableGateway = $sm->get('LanguageTableGateway');
                     $table = new LanguageTable($tableGateway);
                     return $table;
                 },
                 'languageTableGateway' => function ($sm) {
                     $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                     $resultSetPrototype = new ResultSet();
                     $resultSetPrototype->setArrayObjectPrototype(new Language());
                     return new TableGateway('Language', $dbAdapter, null, $resultSetPrototype);
                 },
             ),
         );
     }
}