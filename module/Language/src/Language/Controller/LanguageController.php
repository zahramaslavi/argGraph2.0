<?php
namespace Language\Controller;
 
use Zend\Mvc\Controller\AbstractRestfulController;
 
use Language\Model\Language;
use Language\Form\LanguageForm;
use Language\Model\LanguageTable;
use Zend\View\Model\JsonModel;
use Zend\Http\Headers;
 
class LanguageController extends AbstractRestfulController
{
    protected $languageTable;

    public function getLanguageTable()
    {
        if (!$this->languageTable) {
            $sm = $this->getServiceLocator();
            $this->languageTable = $sm->get('Language\Model\LanguageTable');
        }
        return $this->languageTable;
    }

    public function getList()
    {
        $results = $this->getLanguageTable()->fetchAll();
        $data = array();
        foreach($results as $result) {
            $data[] = $result;
        }
     
        return new JsonModel(array('data' => $data));
    }
    
 
    public function get($id)
    {
        $language = $this->getLanguageTable()->getLanguage($id);
     
        return new JsonModel(array("data" => $language));
    }


    public function getLanguageAction()
    {
       // $this->setHeader();

        $userId = $this->params()->fromPost('userId');
        $results = $this->getLanguageTable()->getLanguage($userId);

        $data = array();
        foreach($results as $result) {
            $data[] = $result;
        }
        return new JsonModel(array("data" => $data));
    }

    
    public function create($data)
    {
        $form = new LanguageForm();
        $language = new Language();
        $form->setInputFilter($language->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $language->exchangeArray($form->getData());
            $id = $this->getLanguageTable()->saveLanguage($language);
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function update($id, $data)
    {
        $data['id'] = $id;
        $language = $this->getLanguageTable()->getLanguage($id);
        $form  = new GraphForm();
        $form->bind($language);
        $form->setInputFilter($language->getInputFilter());
        $form->setData($data);
        if ($form->isValid()) {
            $id = $this->getLanguageTable()->saveLanguage($form->getData());
        }
     
        return new JsonModel(array(
            'data' => $this->get($id),
        ));
    }
 
    public function delete($id)
    {
        $this->getLanguageTable()->deleteLanguage($id);
     
        return new JsonModel(array(
            'data' => 'deleted',
        ));
    }
}