<?php
namespace User\Controller;
 
use Zend\Mvc\Controller\AbstractRestfulController;
 
use User\Model\User;
use User\Form\UserForm;
use User\Model\UserTable;
use Zend\View\Model\JsonModel;
use Zend\Http\Headers;
 
class UserController extends AbstractRestfulController
{
    protected $userTable;

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

    public function getUserTable()
    {
        if (!$this->userTable) {
            $sm = $this->getServiceLocator();
            $this->userTable = $sm->get('User\Model\UserTable');
        }
        return $this->userTable;
    }

    public function getList()
    {
        $results = $this->getUserTable()->fetchAll();
        $data = array();
        foreach($results as $result) {
            $data[] = $result;
        }
     
        return new JsonModel(array('data' => $data));
    }
    
 
    public function get($id)
    {
        $user = $this->getUserTable()->getUser($id);
     
        return new JsonModel(array("data" => $user));
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
        $user = $this->getUserTable()->getUserLog($ubcEmail, $password);
        return new JsonModel(array("data" => $user));
    }

    
    public function create($data)
    {
        $form = new UserForm();
        $user = new User();
        $form->setInputFilter($user->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $user->exchangeArray($form->getData());
            $id = $this->getUserTable()->saveUser($user);
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function update($id, $data)
    {
        $data['id'] = $id;
        $user = $this->getUserTable()->getUser($id);
        $form  = new UserForm();
        $form->bind($user);
        $form->setInputFilter($user->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $id = $this->getUserTable()->saveUser($form->getData());
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function delete($id)
    {
        $this->getUserTable()->deleteUser($id);
     
        return new JsonModel(array(
            'data' => 'deleted',
        ));
    }
}