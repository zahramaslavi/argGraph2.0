<?php
 namespace Language\Model;

 use Zend\Db\TableGateway\TableGateway;

 class LanguageTable
 {
     protected $tableGateway;

     public function __construct(TableGateway $tableGateway)
     {
         $this->tableGateway = $tableGateway;
     }

     public function fetchAll()
     {
         $resultSet = $this->tableGateway->select();
         return $resultSet;
     }

     public function getLanguage($id)
     {
         $id  = (int) $id;
         $rowset = $this->tableGateway->select(array('id' => $id));
         $row = $rowset->current();
         return $row;
     }

     public function saveLanguage(Language $language)
    {
        $data = array(
            'userId' => $language->userId,
            'language'  => $language->language,
            'title' => $language->title,
        );
     
        $id = (int)$language->id;
        if ($id == 0) {
            $this->tableGateway->insert($data);
            $id = $this->tableGateway->getLastInsertValue(); //Add this line
        } else {
            if ($this->getLanguage($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
     
        return $id; // Add Return
    }

     public function deleteLanguage($id)
     {
         $this->tableGateway->delete(array('id' => (int) $id));
     }
 }