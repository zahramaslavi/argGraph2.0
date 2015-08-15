<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Graph\Controller\Graph' => 'Graph\Controller\GraphController',
        ),
    ),
 
    // The following section is new and should be added to your file
    'router' => array(
        'routes' => array(
            'graph' => array(
                'type'    => 'Segment',
                'options' => array(
                    'route'    => '/graph[/:id]',
                    'constraints' => array(
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Graph\Controller\Graph',
                    ),
                ),
            
            'may_terminate' => true,
                'child_routes' => array(
                        'getUserGraph' => array(
                            'type' => 'Literal',
                            'options' => array(
                                'route' => '/getUserGraph',
                                ),
                                'may_terminate' => false,
                                'child_routes' => array(

                                        'getUserGraph-post' => array(
                                            'type' => 'Method',
                                            'options' => array(
                                                'verb' => 'post',
                                                'defaults' => array(
                                                    'controller' => 'Graph\Controller\Graph',
                                                    'action' => 'GetUserGraph',
                                            ),        
                                        ),
                                    ),

                                ),  

                    
                            ),        
                        ),
                    ),
               
            ),    
        ),
    

    'view_manager' => array( //Add this config
        'strategies' => array(
            'ViewJsonStrategy',
        ),
    ),
 
);