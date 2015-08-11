<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'User\Controller\User' => 'User\Controller\UserController',
        ),
    ),
 
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'user' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/user[/:id]',
                    'constraints' => array(
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'User\Controller\User',
                    ),
                ),
            
            'may_terminate' => true,
                'child_routes' => array(
                        'login' => array(
                            'type' => 'Literal',
                            'options' => array(
                                'route' => '/login',
                                ),
                                'may_terminate' => false,
                                'child_routes' => array(
                                        /*'login-get' => array(
                                            'type' => 'Segment',
                                            'options' => array(
                                                'route' => '/:ubcEmail/:password',
                                                'constraints' => array(
                                                        'controller' => '[a-zA-Z][a-zA-Z0-9_-]+',
                                                        'action'     => '[a-zA-Z][a-zA-Z0-9_-]+',
                                                    ),
                                                'defaults' => array(
                                                    'controller' => 'User\Controller\User',
                                                    'action' => 'Login',
                                                 ),        
                                            ),
                                        ),*/

                                        'login-post' => array(
                                            'type' => 'Method',
                                            'options' => array(
                                                'verb' => 'post',
                                                'defaults' => array(
                                                    'controller' => 'User\Controller\User',
                                                    'action' => 'Signin',
                                            ),        
                                        ),
                                    ),

                                ),  

                               
                            //),           
                             /*'defaults' => array(
                                    'controller' => 'User\Controller\User',
                                    'action' => 'Login',*/
                            ),        
                        ),
                    ),

                
                    /*'signin' => array(
                        'type' => 'Method',
                        'options' => array(
                            'verb' => 'post',
                            'route' => '/signin',
                            'defaults' => array(
                                'controller' => 'User\Controller\User',
                                'action' => 'signin',
                            ),        
                        ),
                    ),     */  
                //), 

               
            ),    
        ),
    //),

    'view_manager' => array( //Add this config
        'strategies' => array(
            'ViewJsonStrategy',
        ),
    ),
 
);