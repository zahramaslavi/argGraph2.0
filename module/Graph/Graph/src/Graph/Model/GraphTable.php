<?php
 namespace Graph\Model;

 use Zend\Db\TableGateway\TableGateway;

 class GraphTable
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

     public function getGraph($id)
     {
         $id  = (int) $id;
         $rowset = $this->tableGateway->select(array('id' => $id));
         $row = $rowset->current();
         /*if (!$row) {
             throw new \Exception("Could not find row $id");
         }*/
         return $row;
     }

     public function getGraphLog($ubcEmail, $password)
     {
         //$id  = (int) $id;
         $rowset = $this->tableGateway->select(array('ubcEmail' => $ubcEmail, 'password' => $password));
         $row = $rowset->current();
         //if (!$row) {
             //throw new \Exception("Could not find row ");
             //return("Could not find the graph");
         //}
         return $row;
     }

    
     public function saveGraph(Graph $graph)
    {
        $data = array(
            'name' => $graph->name,
            'graphname'  => $graph->graphname,
            'ubcEmail' => $graph->ubcEmail,
            'password'  => $graph->password,
        );
     
        $id = (int)$graph->id;
        if ($id == 0) {
            $this->tableGateway->insert($data);
            $id = $this->tableGateway->getLastInsertValue(); //Add this line
        } else {
            if ($this->getGraph($id)) {
                $this->tableGateway->update($data, array('id' => $id));
            } else {
                throw new \Exception('Form id does not exist');
            }
        }
     
        return $id; // Add Return
    }

     public function deleteGraph($id)
     {
         $this->tableGateway->delete(array('id' => (int) $id));
     }
 }