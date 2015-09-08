<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Language\Controller\Language' => 'Language\Controller\LanguageController',
        ),
    ),
 
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'language' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/language[/:id]',
                    'constraints' => array(
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Language\Controller\Language',
                    ),
                ),
            
            //'may_terminate' => true,
                //'child_routes' => array(
                        /*'getLanguage' => array(
                            'type' => 'Literal',*/
                            /*'options' => array(
                                'route' => '/getLanguage',
                                ),*/
                                /*'may_terminate' => false,
                                'child_routes' => array(
*/
                                        /*'getLanguage-post' => array(
                                            'type' => 'Method',
                                            'options' => array(
                                                'verb' => 'post',
                                                'defaults' => array(
                                                    'controller' => 'Language\Controller\Language',
                                                    'action' => 'GetLanguage',
                                            ),        
                                        ),
                                    ),*/

                                //),  

                    
                            //),        
                        //),
                    ),
               
            ),    
        ),
    

    'view_manager' => array( //Add this config
        'strategies' => array(
            'ViewJsonStrategy',
        ),
    ),
 
);