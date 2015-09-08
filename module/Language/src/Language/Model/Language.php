<?php

 namespace Language\Model;

 use Zend\InputFilter\InputFilter;
 use Zend\InputFilter\InputFilterAwareInterface;
 use Zend\InputFilter\InputFilterInterface;

 class Language
 {
     public $id;
     public $file;
     public $new;
     public $graphs;
     public $saveAs;
     public $save;
     public $graphsModHeader;
     public $graphsModOpen;
     public $graphsModRemove;
     public $saveAsModHeader;
     public $saveAsModPlease;  
     public $saveAsModTitlePh;
     public $saveAsModButton;
     public $saveAsModSuccessMes;
     public $saveAsModTitRequired;      
     public $saveAsModLongerTitle;
     public $saveAsModShorterTitle;
     public $saveModPlease;
     public $saveModButton; 
     public $saveModeSuccessMes;
     public $language;
     public $english;
     public $mandarin;
     public $spanish;
     public $french;
     public $watchDemo;
     public $about;
     public $hiUser;
     public $logOut;
     public $login;
     public $register;
     public $loginModHeader;
     public $loginModEmailPh;
     public $loginModPasswordPh;
     public $loginModButton;
     public $loginModEmailRequired;
     public $loginModInvalidEmail;
     public $loginModUBCEmReq;
     public $loginModPasswordReq;
     public $loginModPasswordLonger;
     public $loginModPasswordShorter;
     public $LoginModSuccessMes;
     public $regModHeader;
     public $regModFullnamePh; 
     public $regModUsernamePh;
     public $regModEmailPh;
     public $regModPasswordPh;
     public $regModPassConfirmPh;
     public $regModButton;
     public $regModFullnameReq;
     public $regModUsernameReq;
     public $regModEmailReq;
     public $regModInvalidEmail;
     public $regModUBCEmailReq;
     public $regModPasswordReq;
     public $regModPasswordLonger;
     public $regModPasswordShorter;
     public $regModPasswordConfReq;
     public $regModePasswordConfLonger;
     public $regModPasswordConfShorter;
     public $regModSuccessMes;
     public $startWriting;
     public $logModErrMes;
     public $wantedLanguage;
     public $saveModGoSaveAs;
     

    
     public $inputFilter;
 

     public function exchangeArray($data)
     { 
         $this->id     = (!empty($data['id'])) ? $data['id'] : null;
         $this->file = (!empty($data['file'])) ? $data['file'] : null;
         $this->new  = (!empty($data['new'])) ? $data['new'] : null;
         $this->graphs = (!empty($data['graphs'])) ? $data['graphs'] : null;
         $this->saveAs = (!empty($data['saveAs'])) ? $data['saveAs'] : null;
         $this->save = (!empty($data['save'])) ? $data['save'] : null;
         $this->graphsModHeader = (!empty($data['graphsModHeader'])) ? $data['graphsModHeader'] : null; 
         $this->graphsModOpen = (!empty($data['graphsModOpen'])) ? $data['graphsModOpen'] : null;
         $this->graphsModRemove = (!empty($data['graphsModRemove'])) ? $data['graphsModRemove'] : null;
         $this->saveAsModHeader = (!empty($data['saveAsModHeader'])) ? $data['saveAsModHeader'] : null;
         $this->saveAsModPlease = (!empty($data['saveAsModPlease'])) ? $data['saveAsModPlease'] : null;  
         $this->saveAsModTitlePh = (!empty($data['saveAsModTitlePh'])) ? $data['saveAsModTitlePh'] : null;
         $this->saveAsModButton = (!empty($data['saveAsModButton'])) ? $data['saveAsModButton'] : null;
         $this->saveAsModSuccessMes = (!empty($data['saveAsModSuccessMes'])) ? $data['saveAsModSuccessMes'] : null;
         $this->saveAsModTitRequired = (!empty($data['saveAsModTitRequired'])) ? $data['saveAsModTitRequired'] : null;
         $this->saveAsModLongerTitle = (!empty($data['saveAsModLongerTitle'])) ? $data['saveAsModLongerTitle'] : null;
         $this->saveAsModShorterTitle = (!empty($data['saveAsModShorterTitle'])) ? $data['saveAsModShorterTitle'] : null;
         $this->saveModPlease = (!empty($data['saveModPlease'])) ? $data['saveModPlease'] : null;
         $this->saveModButton = (!empty($data['saveModButton'])) ? $data['saveModButton'] : null; 
         $this->saveModeSuccessMes = (!empty($data['saveModeSuccessMes'])) ? $data['saveModeSuccessMes'] : null;
         $this->language = (!empty($data['language'])) ? $data['language'] : null;
         $this->english = (!empty($data['english'])) ? $data['english'] : null;
         $this->mandarin = (!empty($data['mandarin'])) ? $data['mandarin'] : null;
         $this->spanish = (!empty($data['spanish'])) ? $data['spanish'] : null;
         $this->french = (!empty($data['french'])) ? $data['french'] : null;
         $this->watchDemo = (!empty($data['watchDemo'])) ? $data['watchDemo'] : null; 
         $this->about = (!empty($data['about'])) ? $data['about'] : null;
         $this->hiUser = (!empty($data['hiUser'])) ? $data['hiUser'] : null;
         $this->logOut = (!empty($data['logOut'])) ? $data['logOut'] : null;
         $this->login = (!empty($data['login'])) ? $data['login'] : null;
         $this->register = (!empty($data['register'])) ? $data['register'] : null;
         $this->loginModHeader = (!empty($data['loginModHeader'])) ? $data['loginModHeader'] : null;
         $this->loginModEmailPh = (!empty($data['loginModEmailPh'])) ? $data['loginModEmailPh'] : null;
         $this->loginModPasswordPh = (!empty($data['loginModPasswordPh'])) ? $data['loginModPasswordPh'] : null;
         $this->loginModButton = (!empty($data['loginModButton'])) ? $data['loginModButton'] : null;
         $this->loginModEmailRequired = (!empty($data['loginModEmailRequired'])) ? $data['loginModEmailRequired'] : null;
         $this->loginModInvalidEmail = (!empty($data['loginModInvalidEmail'])) ? $data['loginModInvalidEmail'] : null;
         $this->loginModUBCEmReq = (!empty($data['loginModUBCEmReq'])) ? $data['loginModUBCEmReq'] : null;
         $this->loginModPasswordReq = (!empty($data['loginModPasswordReq'])) ? $data['loginModPasswordReq'] : null;
         $this->loginModPasswordLonger = (!empty($data['loginModPasswordLonger'])) ? $data['loginModPasswordLonger'] : null;
         $this->loginModPasswordShorter = (!empty($data['loginModPasswordShorter'])) ? $data['loginModPasswordShorter'] : null;
         $this->LoginModSuccessMes = (!empty($data['LoginModSuccessMes'])) ? $data['LoginModSuccessMes'] : null;
         $this->regModHeader = (!empty($data['regModHeader'])) ? $data['regModHeader'] : null;
         $this->regModFullnamePh = (!empty($data['regModFullnamePh'])) ? $data['regModFullnamePh'] : null;
         $this->regModUsernamePh = (!empty($data['regModUsernamePh'])) ? $data['regModUsernamePh'] : null;
         $this->regModEmailPh = (!empty($data['regModEmailPh'])) ? $data['regModEmailPh'] : null;
         $this->regModPasswordPh = (!empty($data['regModPasswordPh'])) ? $data['regModPasswordPh'] : null;
         $this->regModPassConfirmPh = (!empty($data['regModPassConfirmPh'])) ? $data['regModPassConfirmPh'] : null;
         $this->regModButton = (!empty($data['regModButton'])) ? $data['regModButton'] : null;
         $this->regModFullnameReq = (!empty($data['regModFullnameReq'])) ? $data['regModFullnameReq'] : null;
         $this->regModUsernameReq = (!empty($data['regModUsernameReq'])) ? $data['regModUsernameReq'] : null;
         $this->regModEmailReq = (!empty($data['regModEmailReq'])) ? $data['regModEmailReq'] : null;
         $this->regModInvalidEmail = (!empty($data['regModInvalidEmail'])) ? $data['regModInvalidEmail'] : null;
         $this->regModUBCEmailReq = (!empty($data['regModUBCEmailReq'])) ? $data['regModUBCEmailReq'] : null;
         $this->regModPasswordReq = (!empty($data['regModPasswordReq'])) ? $data['regModPasswordReq'] : null;
         $this->regModPasswordLonger = (!empty($data['regModPasswordLonger'])) ? $data['regModPasswordLonger'] : null;
         $this->regModPasswordShorter = (!empty($data['regModPasswordShorter'])) ? $data['regModPasswordShorter'] : null;
         $this->regModPasswordConfReq = (!empty($data['regModPasswordConfReq'])) ? $data['regModPasswordConfReq'] : null;
         $this->regModePasswordConfLonger = (!empty($data['regModePasswordConfLonger'])) ? $data['regModePasswordConfLonger'] : null;
         $this->regModPasswordConfShorter = (!empty($data['regModPasswordConfShorter'])) ? $data['regModPasswordConfShorter'] : null;
         $this->regModSuccessMes = (!empty($data['regModSuccessMes'])) ? $data['regModSuccessMes'] : null;
         $this->startWriting = (!empty($data['startWriting'])) ? $data['startWriting'] : null;
         $this->logModErrMes = (!empty($data['logModErrMes'])) ? $data['logModErrMes'] : null;
         $this->wantedLanguage = (!empty($data['wantedLanguage'])) ? $data['wantedLanguage'] : null;
         $this->saveModGoSaveAs = (!empty($data['saveModGoSaveAs'])) ? $data['saveModGoSaveAs'] : null;
      
     }
     public function getArrayCopy()
     {
         return get_object_vars($this);
     }

     public function setInputFilter(InputFilterInterface $inputFilter)
     {
         throw new \Exception("Not used");
     }
  
     public function getInputFilter()
     {
         if (!$this->inputFilter) {
             $inputFilter = new InputFilter();

             $inputFilter->add(array(
                 'name'     => 'id',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'Int'),
                 ),
             ));

               
             $inputFilter->add(array(
                 'name'     => 'file',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             
              $inputFilter->add(array(
                 'name'     => 'new',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));  

             $inputFilter->add(array(
                 'name'     => 'graphs',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAs',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));

             $inputFilter->add(array(
                 'name'     => 'save',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'graphsModHeader',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
              
              $inputFilter->add(array(
                 'name'     => 'graphsModOpen',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'graphsModRemove',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
           
             $inputFilter->add(array(
                 'name'     => 'saveAsModHeader',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAsModPlease',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'saveAsModTitlePh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAsModButton',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAsModSuccessMes',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAsModTitRequired',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             
 
             $inputFilter->add(array(
                 'name'     => 'saveAsModLongerTitle',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveAsModShorterTitle',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveModPlease',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveModButton',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'saveModeSuccessMes',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'language',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'english',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'mandarin',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));

             $inputFilter->add(array(
                 'name'     => 'spanish',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'french',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'watchDemo',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'about',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'hiUser',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));

             $inputFilter->add(array(
                 'name'     => 'logOut',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'login',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'register',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModHeader',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModEmailPh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'loginModPasswordPh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModButton',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModEmailRequired',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModInvalidEmail',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));

             $inputFilter->add(array(
                 'name'     => 'loginModUBCEmReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModPasswordReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'loginModPasswordLonger',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             )); 
             
             $inputFilter->add(array(
                 'name'     => 'loginModPasswordShorter',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'LoginModSuccessMes',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModHeader',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModFullnamePh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));

             $inputFilter->add(array(
                 'name'     => 'regModUsernamePh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModEmailPh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModPasswordPh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModPassConfirmPh',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'regModButton',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModFullnameReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModUsernameReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModEmailReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
            
             $inputFilter->add(array(
                 'name'     => 'regModInvalidEmail',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModUBCEmailReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModPasswordReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModPasswordLonger',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'regModPasswordShorter',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModPasswordConfReq',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModePasswordConfLonger',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             
             $inputFilter->add(array(
                 'name'     => 'regModPasswordConfShorter',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'regModSuccessMes',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             )); 
             $inputFilter->add(array(
                 'name'     => 'startWriting',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             )); 
             $inputFilter->add(array(
                 'name'     => 'logModErrMes',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));
             $inputFilter->add(array(
                 'name'     => 'wantedLanguage',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 50,
                         ),
                     ),
                 ),
             ));  
             $inputFilter->add(array(
                 'name'     => 'saveModGoSaveAs',
                 'required' => false,
                 'filters'  => array(
                     array('name' => 'StripTags'),
                     array('name' => 'StringTrim'),
                 ),
                 'validators' => array(
                     array(
                         'name'    => 'StringLength',
                         'options' => array(
                             'encoding' => 'UTF-8',
                             'min'      => 1,
                             'max'      => 100,
                         ),
                     ),
                 ),
             ));   

             $this->inputFilter = $inputFilter;
         }

         return $this->inputFilter;
     }
 }