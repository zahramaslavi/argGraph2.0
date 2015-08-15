<?php
namespace Graph\Form;

 use Zend\Form\Form;

 class GraphForm extends Form
 {
     public function __construct($name = null)
     {
         // we want to ignore the name passed
         parent::__construct('graph');

         $this->add(array(
             'name' => 'id',
             'type' => 'Hidden',
         ));
         $this->add(array(
             'name' => 'userId',
             'type' => 'Text',
             'options' => array(
                 'label' => 'UserId',
             ),
         ));
         $this->add(array(
             'name' => 'graph',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Graph',
             ),
         ));
         $this->add(array(
             'name' => 'title',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Title',
             ),
         ));
         
         $this->add(array(
             'name' => 'submit',
             'type' => 'Submit',
             'attributes' => array(
                 'value' => 'Go',
                 'id' => 'submitbutton',
             ),
         ));
     }
 }