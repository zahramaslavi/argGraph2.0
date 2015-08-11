<?php
 namespace User\Model;

 use Zend\Db\TableGateway\TableGateway;

 class UserTable
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

     public function getUser($id)
     {
         $id  = (int) $id;
         $rowset = $this->tableGateway->select(array('id' => $id));
         $row = $rowset->current();
         /*if (!$row) {
             throw new \Exception("Could not find row $id");
         }*/
         return $row;
     }

     public function getUserLog($ubcEmail, $password)
     {
         //$id  = (int) $id;
         $rowset = $this->tableGateway->select(array('ubcEmail' => $ubcEmail, 'password' => $password));
         $row = $rowset->current();
         //if (!$row) {
             //throw new \Exception("Could not find row ");
             //return("Could not find the user");
         //}
         return $row;
     }

    
     public function saveUser(User $user)
    {
        $data = array(
            'name' => $user->name,
            'username'  => $user->username,
            'ubcEmail' => $user->ubcEmail,
            'password'  => $user->password,
        );
     
        $id = (int)$user->id;
        if ($id == 0) {
            $this->tableGateway->insert($data);
            $id = $this->tableGateway->getLastInsertValue(); //Add this line
        } else {
            if ($this->getUser($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
     
        return $id; // Add Return
    }

     public function deleteUser($id)
     {
         $this->tableGateway->delete(array('id' => (int) $id));
     }
 }