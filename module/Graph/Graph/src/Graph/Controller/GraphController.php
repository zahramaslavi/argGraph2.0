<?php
namespace Graph\Controller;
 
use Zend\Mvc\Controller\AbstractRestfulController;
 
use Graph\Model\Graph;
use Graph\Form\GraphForm;
use Graph\Model\GraphTable;
use Zend\View\Model\JsonModel;
use Zend\Http\Headers;
 
class GraphController extends AbstractRestfulController
{
    protected $graphTable;

    /*public function setHeader()
    {
        $headers = $httpObject->getHeaders();

        $headers->addHeaders(array(
        'Access-Control-Allow-Origin' => '*',
        'Access-Control-Allow-Methods' => 'GET, POST',
        'Access-Control-Allow-Headers' => 'X-Requested-With, Content-Type'
        ));

        $httpObject->setHeaders($headers);
    }*/

    public function getGraphTable()
    {
        if (!$this->graphTable) {
            $sm = $this->getServiceLocator();
            $this->graphTable = $sm->get('Graph\Model\GraphTable');
        }
        return $this->graphTable;
    }

    public function getList()
    {
        $results = $this->getGraphTable()->fetchAll();
        $data = array();
        foreach($results as $result) {
            $data[] = $result;
        }
     
        return new JsonModel(array('data' => $data));
    }
    
 
    public function get($id)
    {
        $graph = $this->getGraphTable()->getGraph($id);
     
        return new JsonModel(array("data" => $graph));
    }

    /*public function loginAction()
    {
        $ubcEmail = $this->getEvent()->getRouteMatch()->getParam('ubcEmail'); 
        $password = $this->getEvent()->getRouteMatch()->getParam('password');
        $user = $this->getUserTable()->getUserLog($ubcEmail, $password);
     
        return new JsonModel(array("data" => $user));
    }*/

    public function signinAction()
    {
       // $this->setHeader();

        $ubcEmail = $this->params()->fromPost('ubcEmail');
         $password = $this->params()->fromPost('password');
        $Graph = $this->getGraphTable()->getGraphLog($ubcEmail, $password);
        return new JsonModel(array("data" => $graph));
    }

    
    public function create($data)
    {
        $form = new GraphForm();
        $graph = new Graph();
        $form->setInputFilter($graph->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $graph->exchangeArray($form->getData());
            $id = $this->getGraphTable()->saveGraph($graph);
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function update($id, $data)
    {
        $data['id'] = $id;
        $graph = $this->getGraphTable()->getGraph($id);
        $form  = new GraphForm();
        $form->bind($graph);
        $form->setInputFilter($graph->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $id = $this->getGraphTable()->saveGraph($form->getData());
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function delete($id)
    {
        $this->getGraphTable()->deleteGraph($id);
     
        return new JsonModel(array(
            'data' => 'deleted',
        ));
    }
}