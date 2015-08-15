<?php
namespace Graph;

use Zend\ModuleManager\Feature\AutoloaderProviderInterface;
use Zend\ModuleManager\Feature\ConfigProviderInterface;
use Graph\Model\Graph;
use Graph\Model\GraphTable;
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
                 'Graph\Model\GraphTable' =>  function($sm) {
                     $tableGateway = $sm->get('GraphTableGateway');
                     $table = new GraphTable($tableGateway);
                     return $table;
                 },
                 'graphTableGateway' => function ($sm) {
                     $dbAdapter = $sm->get('Zend\Db\Adapter\Adapter');
                     $resultSetPrototype = new ResultSet();
                     $resultSetPrototype->setArrayObjectPrototype(new Graph());
                     return new TableGateway('Graph', $dbAdapter, null, $resultSetPrototype);
                 },
             ),
         );
     }
}