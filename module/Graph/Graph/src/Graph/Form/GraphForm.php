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
             'name' => 'name',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Name',
             ),
         ));
         $this->add(array(
             'name' => 'graphname',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Graphname',
             ),
         ));
         $this->add(array(
             'name' => 'ubcEmail',
             'type' => 'Text',
             'options' => array(
                 'label' => 'UbcEmail',
             ),
         ));
         $this->add(array(
             'name' => 'password',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Password',
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