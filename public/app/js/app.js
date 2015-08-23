var mainApp = angular.module('mainApp', ['ngCookies']);

mainApp.factory('sharedProperties', function($cookies) {
        var userId;

        return {
            getUserLog: function () {
                return $cookies.logObject;
            },
            setUserLog: function(value) {
                $cookies.logObject = value;
            },
			setUserLogOut: function(){
				$cookies.logObject = '';
			},
			getUserId: function () {
				userId = $cookies.userId
                return userId;
            },
            setUserId: function (value) {
                 $cookies.userId = value;
            },
        };
    });

mainApp.factory('loadGraphs', function($http, $timeout) { //, $q, $rootScope
     
       
    /*return {
	    	loadMyGraphs: function(myUserId){
	    		var userGraphMessage={};
	    		var def =$q.defer();
	    		var dataObj = {
					userId : myUserId
				};
				
				var promise = $http({
				    method: 'POST',
				    url: 'http://argGraph.localhost/graph/getUserGraph',
				    cache: false,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    data: dataObj
				});
		       
				promise.success(function(response, status, headers, config) {

					
					//userGraphMessage = response.data;
					
					//console.log(response.data);
					//$rootScope.$apply();
					
					//return response.data;
					def.resolve(response);
					//$rootScope.$apply();

				});
			     
				promise.error(function(data, status, headers, config) {
					//alert( 'failure message: ' + JSON.stringify({data: data}));
					def.reject('reject');
				});
				return def.promise;
				//return userGraphMessage;
	    	},
    	};*/

    	var userGraphs = {
    async: function(myUserId){
        //var deferred = $q.defer();
        var dataObj = {
					userId : myUserId
				};
        var promise = $http({
            'url': 'http://argGraph.localhost/graph/getUserGraph',
            'dataType':'json',
            'method': 'POST',
            'headers': {'Content-Type': 'application/x-www-form-urlencoded'},
		    'transformRequest': function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
            'data': dataObj
        }).then(function(response,status, headers, config){
            console.log(response);
        	return response.data;
        });
        return promise;
        }
    };
    return userGraphs;
    
});

mainApp.factory('drawGraph', function() {
        
    return {
        openMyGraph: function(myGraph){
  			opMyGraph(myGraph);
			},
        
    };
});

mainApp.factory('removeGraph', function($http) {
        
    return {
        removeMyGraph: function(id)
		    {
		    	var myUrl = 'http://argGraph.localhost/graph/' + id;
				var res = $http({
				    method: 'DELETE',
				    url: myUrl,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    }
				});

				res.success(function(data, status, headers, config) {
					graphRemoved = true;
					return graphRemoved;
					//console.log(JSON.stringify({data: data}));
				});
				
				res.error(function(data, status, headers, config) {
					alert( "failure message: " + JSON.stringify({data: data}));
				});
			
		    }, 
    };
});


//The login controller
mainApp.controller('loginCtrl', function($scope, $http, sharedProperties) {

    $scope.loginSubmit = function() {
		
		var dataObj = {
				ubcEmail : $scope.ubcEmail,
				password : $scope.password
		};


		var res = $http({
		    method: 'POST',
		    url: 'http://argGraph.localhost/user/login',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: dataObj
		});

	
		res.success(function(response, status, headers, config) {
			$scope.userLogMessage = response.data;
			//console.log(JSON.stringify({data: response}));
			sharedProperties.setUserLog($scope.userLogMessage.username);
		    sharedProperties.setUserId($scope.userLogMessage.id);
		    //console.log($scope.userLogMessage.id);
		});
		
		res.error(function(data, status, headers, config) {
			alert( 'failure message: ' + JSON.stringify({data: data}));
		});
		
		$scope.ubcEmail='';
		$scope.password='';

		$scope.loginForm.ubcEmail.$dirty = false;
		$scope.loginForm.password.$dirty = false;
      
		 $scope.logedIn = function () {
		      return sharedProperties.getUserLog();
		    }

	};				
});


mainApp.controller('checkLogCtrl', function($scope, sharedProperties) {

	$scope.userLogMessage=function()
		{
			return sharedProperties.getUserLog();
		}
	
	$scope.userLogout=function()
		{
			sharedProperties.setUserLogOut();
		}	
		
});

//Register controller
mainApp.controller('registerCtrl', function($scope, $http){
	
	$scope.registered = false;
  
    $scope.registerSubmit = function() {
		
		var dataObjReg = {
				name : $scope.fullNameReg,
				username : $scope.usernameReg,
				ubcEmail : $scope.ubcEmailReg,
				password : $scope.passwordReg
		};


		
		var res = $http({
		    method: 'POST',
		    url: 'http://argGraph.localhost/user',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: dataObjReg
		});

	
		res.success(function(data, status, headers, config) {
			$scope.message = data;
			//console.log(JSON.stringify({data: data}));
			$scope.registered = true;
		});
		
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
	

		$scope.fullNameReg='';
		$scope.usernameReg='';
		$scope.ubcEmailReg='';
		$scope.passwordReg='';
		$scope.passwordRegConf='';

		$scope.registerForm.fullNameReg.$dirty = false;
		$scope.registerForm.usernameReg.$dirty = false;
		$scope.registerForm.ubcEmailReg.$dirty = false;
		$scope.registerForm.passwordReg.$dirty = false;
		$scope.registerForm.passwordRegConf.$dirty = false;

        $scope.turnRegisterOn = function(){
        	$scope.registered = false;
        }
		/*$('#registerModal').modal('hide');

		alert("You successfully have been registered!");*/
		
	};				
});

mainApp.controller('graphSaveAsCtrl', function($scope, $http, sharedProperties) {

	$scope.formData = {};

    $scope.graphSaved = false;

    //The function to capture the graph json
    $scope.setValueFunc = function (val) {
        $scope.graph = val;
        //$scope.$apply();
    };
     
	$scope.userId = sharedProperties.getUserId();
	//$scope.$apply();


	$scope.graphSaveAsSubmit = function()
    {
        var dataObjGraph = {
				userId : $scope.userId,
				graph : $scope.graph,
				title : $scope.formData.graphTitle 
		};

        //console.log($scope.formData.graphTitle);
		
		var res = $http({
		    method: 'POST',
		    url: 'http://argGraph.localhost/graph',
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		    transformRequest: function(obj) {
		        var str = [];
		        for(var p in obj)
		        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		        return str.join("&");
		    },
		    data: dataObjGraph
		});

	
		res.success(function(data, status, headers, config) {
			$scope.graphSaved = true;
			//console.log(JSON.stringify({data: data}));
			$scope.formData.graphTitle="";
		});
		
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
	
    }

    $scope.turnSaveAsOn = function(){
    	 $scope.graphSaved = false;
    } 


});


mainApp.controller('graphOpenCtrl', function($scope, $http, sharedProperties, loadGraphs) {// drawGraph, removeGraph  
    //$scope.userId="";
    //$scope.userGraphs=[{"id":"46","userId":"9","Graph":null,"title":"graph55","inputFilter":null,"graph":"{\"cells\":[{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#94DBFF\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":600,\"y\":300},\"angle\":0,\"textarea\":\"\",\"id\":\"a4a00e26-3fdf-46bc-91e5-72e149a06b60\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}}]}"},{"id":"47","userId":"9","Graph":null,"title":"graphTest","inputFilter":null,"graph":"{\"cells\":[{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#94DBFF\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":600,\"y\":300},\"angle\":0,\"textarea\":\"\",\"id\":\"bdb3dd4e-f5b3-4f20-aa13-2191ac71370e\",\"z\":1,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}}]}"},{"id":"48","userId":"9","Graph":null,"title":"graphTest1","inputFilter":null,"graph":"{\"cells\":[{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#D6EB99\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":810,\"y\":469},\"angle\":0,\"textarea\":\"dgdgdgd\",\"id\":\"a1d2d598-67a7-4ab4-9357-4dd1215dfdd4\",\"z\":22,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}}]}"},{"id":"49","userId":"9","Graph":null,"title":"test","inputFilter":null,"graph":"{\"cells\":[{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":168.26666666666665},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#FFFF94\",\"widthTextarea\":150,\"heightTextarea\":118.26666666666667,\"widthColorEdit\":200,\"heightColorEdit\":168.26666666666665,\"topIn\":163.26666666666665,\"position\":{\"x\":810,\"y\":469},\"angle\":0,\"textarea\":\"dgdgdgd sdfsd sdfsdf sdfsdf sdfsdf sdfsd sdfsd sdfsdf sdfsdf sdfds sdfsd sdfsdf sdfsdf sdfsdf\",\"id\":\"a1d2d598-67a7-4ab4-9357-4dd1215dfdd4\",\"z\":22,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}},{\"type\":\"html.myElement\",\"size\":{\"width\":5,\"height\":5},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"gray\",\"position\":{\"x\":1074,\"y\":646},\"angle\":0,\"id\":\"a67ce9d9-42d4-4ed4-b1b1-02732ee5f1c9\",\"z\":46,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":15},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":15,\"ref-dy\":0}}},{\"type\":\"html.Link\",\"vertexAdd\":false,\"vertexMove\":false,\"source\":{\"id\":\"a1d2d598-67a7-4ab4-9357-4dd1215dfdd4\",\"port\":\"out\"},\"target\":{\"id\":\"a67ce9d9-42d4-4ed4-b1b1-02732ee5f1c9\",\"port\":\"in\"},\"id\":\"6d5100b2-1a17-4f50-9cab-ed6f1022db61\",\"z\":47,\"attrs\":{}},{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#D6EB99\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":1013,\"y\":695},\"angle\":0,\"textarea\":\"\",\"id\":\"4ef08f51-43b2-4db4-8dfb-ad0d469cc94c\",\"z\":48,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}},{\"type\":\"html.Link\",\"source\":{\"id\":\"a67ce9d9-42d4-4ed4-b1b1-02732ee5f1c9\",\"port\":\"out\"},\"target\":{\"id\":\"4ef08f51-43b2-4db4-8dfb-ad0d469cc94c\",\"port\":\"in\"},\"id\":\"9680fe97-a6f4-41c2-b427-6b00f2e4e661\",\"z\":49,\"attrs\":{}}]}"},{"id":"51","userId":"9","Graph":null,"title":"test2","inputFilter":null,"graph":"{\"cells\":[{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#D6EB99\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":810,\"y\":469},\"angle\":0,\"textarea\":\"dgdgdgd\",\"id\":\"a1d2d598-67a7-4ab4-9357-4dd1215dfdd4\",\"z\":22,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}},{\"type\":\"html.myElement\",\"size\":{\"width\":5,\"height\":5},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"gray\",\"position\":{\"x\":985,\"y\":570.5},\"angle\":0,\"id\":\"a2313334-c1e7-477d-8f07-e85ed181bd7a\",\"z\":23,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":15},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":15,\"ref-dy\":0}}},{\"type\":\"html.Link\",\"vertexAdd\":false,\"vertexMove\":false,\"source\":{\"id\":\"a1d2d598-67a7-4ab4-9357-4dd1215dfdd4\",\"port\":\"out\"},\"target\":{\"id\":\"a2313334-c1e7-477d-8f07-e85ed181bd7a\",\"port\":\"in\"},\"id\":\"7ae874db-3e74-496f-9ec9-7c7feabd2597\",\"z\":24,\"attrs\":{}},{\"type\":\"html.Element\",\"size\":{\"width\":200,\"height\":100},\"inPorts\":[\"in\"],\"outPorts\":[\"out\"],\"color\":\"#94DBFF\",\"widthTextarea\":150,\"heightTextarea\":60,\"widthColorEdit\":200,\"heightColorEdit\":100,\"topIn\":87,\"position\":{\"x\":985,\"y\":591},\"angle\":0,\"textarea\":\"\",\"id\":\"a94a69ae-a56a-428e-b303-c18d03d9327b\",\"z\":25,\"attrs\":{\"rect\":{\"fill\":\"#2ECC71\"},\".inPorts circle\":{\"fill\":\"gray\"},\".outPorts circle\":{\"fill\":\"gray\"},\".label\":{\"text\":\"Model\",\"ref-x\":0.4,\"ref-y\":0.2},\".inPorts.port0circle\":{\"port\":{\"id\":\"in\",\"type\":\"in\"}},\".inPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100},\".outPorts.port0circle\":{\"port\":{\"id\":\"out\",\"type\":\"out\"}},\".outPorts.port0\":{\"ref\":\"rect\",\"ref-x\":100,\"ref-dy\":100}}},{\"type\":\"html.Link\",\"source\":{\"id\":\"a2313334-c1e7-477d-8f07-e85ed181bd7a\",\"port\":\"out\"},\"target\":{\"id\":\"a94a69ae-a56a-428e-b303-c18d03d9327b\",\"port\":\"in\"},\"id\":\"12050f97-355f-43c5-9b11-7e8fc573d866\",\"z\":26,\"attrs\":{}}]}"}];
    $scope.userGraphs = {};
    $scope.userId = sharedProperties.getUserId();
    
    $scope.$watch("userId", function() {
		if ($scope.userId!="") {
    //$scope.loadGraphsList=function(){
	    		//var userGraphMes={};
	    		/*var dataObj = {
					userId : $scope.userId
				};
				
				var res = $http({
				    method: 'POST',
				    url: 'http://argGraph.localhost/graph/getUserGraph',
				    cache: true,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    data: dataObj
				});
		       
				res.success(function(response, status, headers, config) {
					$scope.userGraphs = response.data;
					console.log($scope.userGraphs);
					
				});
			     
				res.error(function(data, status, headers, config) {
					alert( 'failure message: ' + JSON.stringify({data: data}));
					
				});*/
	    	//}   
			

   
	/*$scope.$watch("userId", function() {
		if ($scope.userId!="") {
		  			
					 $scope.loadGraphsList($scope.userId);*/	

					// $scope.userGraphs = loadGraphs.loadMyGraphs($scope.userId);  
					 

					  loadGraphs.async($scope.userId).then(function(results){
				            $scope.userGraphs = results.data;
				        });

					  console.log($scope.userGraphs);
				        
				} 
			
	    });
   

   /* $scope.openGraph = function(gTitle){
    	angular.forEach($scope.userGraphMessage,function(value,index){
                if(value.title == gTitle){
                	$scope.graphJson = value.graph;
                	//console.log($scope.graphJson);
                	drawGraph.openMyGraph($scope.graphJson);

                }
            })
    }

    $scope.remGraph = function(id){
    	removeGraph.removeMyGraph(id);
    }*/

});