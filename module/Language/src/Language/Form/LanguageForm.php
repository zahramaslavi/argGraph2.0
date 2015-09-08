<?php
namespace Language\Form;

 use Zend\Form\Form;

 class LanguageForm extends Form
 {
     public function __construct($name = null)
     {
         // we want to ignore the name passed
         parent::__construct('language');

         $this->add(array(
             'name' => 'id',
             'type' => 'Hidden',
         ));
         $this->add(array(
             'name' => 'file',
             'type' => 'Text',
             'options' => array(
                 'label' => 'File',
             ),
         ));
         $this->add(array(
             'name' => 'new',
             'type' => 'Text',
             'options' => array(
                 'label' => 'New',
             ),
         ));
         $this->add(array(
             'name' => 'graphs',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Graphs',
             ),
         ));
         $this->add(array(
             'name' => 'saveAs',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAs',
             ),
         ));
         $this->add(array(
             'name' => 'save',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Save',
             ),
         ));
         $this->add(array(
             'name' => 'graphsModHeader',
             'type' => 'Text',
             'options' => array(
                 'label' => 'GraphsModHeader',
             ),
         ));
         
         $this->add(array(
             'name' => 'graphsModOpen',
             'type' => 'Text',
             'options' => array(
                 'label' => 'GraphsModOpen',
             ),
         ));
         $this->add(array(
             'name' => 'graphsModRemove',
             'type' => 'Text',
             'options' => array(
                 'label' => 'GraphsModRemove',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModHeader',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModHeader',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModPlease',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModPlease',
             ),
         )); 
         $this->add(array(
             'name' => 'saveAsModTitlePh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModTitlePh',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModButton',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModButton',
             ),
         ));
         $this->add(array(
             'name' => 'SaveAsModSuccessMes',
             'type' => 'Text',
             'options' => array(
                 'label' => 'saveAsModSuccessMes',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModTitRequired',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModTitRequired',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModLongerTitle',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModLongerTitle',
             ),
         ));
         $this->add(array(
             'name' => 'saveAsModShorterTitle',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveAsModShorterTitle',
             ),
         ));
         $this->add(array(
             'name' => 'saveModPlease',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveModPlease',
             ),
         ));
         $this->add(array(
             'name' => 'saveModButton',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveModButton',
             ),
         ));
         $this->add(array(
             'name' => 'saveModeSuccessMes',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveModeSuccessMes',
             ),
         ));
         $this->add(array(
             'name' => 'language',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Language',
             ),
         ));
         $this->add(array(
             'name' => 'english',
             'type' => 'Text',
             'options' => array(
                 'label' => 'English',
             ),
         ));
         $this->add(array(
             'name' => 'mandarin',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Mandarin',
             ),
         ));
         $this->add(array(
             'name' => 'spanish',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Spanish',
             ),
         ));
         $this->add(array(
             'name' => 'french',
             'type' => 'Text',
             'options' => array(
                 'label' => 'French',
             ),
         ));
         $this->add(array(
             'name' => 'watchDemo',
             'type' => 'Text',
             'options' => array(
                 'label' => 'WatchDemo',
             ),
         ));
         $this->add(array(
             'name' => 'about',
             'type' => 'Text',
             'options' => array(
                 'label' => 'About',
             ),
         ));
         $this->add(array(
             'name' => 'hiUser',
             'type' => 'Text',
             'options' => array(
                 'label' => 'HiUser',
             ),
         ));
         $this->add(array(
             'name' => 'logOut',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LogOut',
             ),
         ));
         $this->add(array(
             'name' => 'login',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Login',
             ),
         ));
         $this->add(array(
             'name' => 'register',
             'type' => 'Text',
             'options' => array(
                 'label' => 'Register',
             ),
         ));
         $this->add(array(
             'name' => 'loginModHeader',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModHeader',
             ),
         ));
         $this->add(array(
             'name' => 'loginModEmailPh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModEmailPh',
             ),
         ));
         $this->add(array(
             'name' => 'loginModPasswordPh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModPasswordPh',
             ),
         ));
        $this->add(array(
             'name' => 'loginModButton',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModButton',
             ),
         ));
        $this->add(array(
             'name' => 'loginModEmailRequired',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModEmailRequired',
             ),
         ));
         $this->add(array(
             'name' => 'loginModInvalidEmail',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModInvalidEmail',
             ),
         ));
         $this->add(array(
             'name' => 'loginModUBCEmReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModUBCEmReq',
             ),
         ));
         $this->add(array(
             'name' => 'loginModPasswordReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModPasswordReq',
             ),
         ));
         $this->add(array(
             'name' => 'loginModPasswordLonger',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModPasswordLonger',
             ),
         ));
         $this->add(array(
             'name' => 'loginModPasswordShorter',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LginModPasswordShorter',
             ),
         ));
         $this->add(array(
             'name' => 'LoginModSuccessMes',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LoginModSuccessMes',
             ),
         ));
         $this->add(array(
             'name' => 'regModHeader',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModHeader',
             ),
         ));
         $this->add(array(
             'name' => 'regModFullnamePh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModFullnamePh',
             ),
         ));
         
         $this->add(array(
             'name' => 'regModUsernamePh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModUsernamePh',
             ),
         ));
         $this->add(array(
             'name' => 'regModEmailPh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModEmailPh',
             ),
         ));
         $this->add(array(
             'name' => 'regModPasswordPh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordPh',
             ),
         ));
         $this->add(array(
             'name' => 'regModPassConfirmPh',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPassConfirmPh',
             ),
         ));
         $this->add(array(
             'name' => 'regModButton',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModButton',
             ),
         ));$this->add(array(
             'name' => 'regModFullnameReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModFullnameReq',
             ),
         ));
         $this->add(array(
             'name' => 'regModUsernameReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModUsernameReq',
             ),
         ));
         $this->add(array(
             'name' => 'regModEmailReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModEmailReq',
             ),
         ));
         $this->add(array(
             'name' => 'regModInvalidEmail',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModInvalidEmail',
             ),
         ));
         $this->add(array(
             'name' => 'regModUBCEmailReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModUBCEmailReq',
             ),
         )); 
         $this->add(array(
             'name' => 'regModPasswordReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordReq',
             ),
         )); 
         $this->add(array(
             'name' => 'regModPasswordLonger',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordLonger',
             ),
         )); 
         $this->add(array(
             'name' => 'regModPasswordShorter',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordShorter',
             ),
         )); 
         $this->add(array(
             'name' => 'regModPasswordConfReq',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordConfReq',
             ),
         )); 
         $this->add(array(
             'name' => 'regModePasswordConfLonger',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModePasswordConfLonger',
             ),
         )); 
         $this->add(array(
             'name' => 'regModPasswordConfShorter',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModPasswordConfShorter',
             ),
         )); 
         $this->add(array(
             'name' => 'regModSuccessMes',
             'type' => 'Text',
             'options' => array(
                 'label' => 'RegModSuccessMes',
             ),
         )); 
         $this->add(array(
             'name' => 'startWriting',
             'type' => 'Text',
             'options' => array(
                 'label' => 'StartWriting',
             ),
         )); 
         $this->add(array(
             'name' => 'logModErrMes',
             'type' => 'Text',
             'options' => array(
                 'label' => 'LogModErrMes',
             ),
         )); 
         $this->add(array(
             'name' => 'wantedLanguage',
             'type' => 'Text',
             'options' => array(
                 'label' => 'WantedLanguage',
             ),
         )); 
         $this->add(array(
             'name' => 'saveModGoSaveAs',
             'type' => 'Text',
             'options' => array(
                 'label' => 'SaveModGoSaveAs',
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