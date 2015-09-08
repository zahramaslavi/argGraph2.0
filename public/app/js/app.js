var mainApp = angular.module('mainApp', ['ngCookies']);

mainApp.factory('sharedProperties', function($cookies) {
        var userId;
        var userGraphList={};
        $cookies.graphTitle = "";
        //$cookies.language = "1";
        var languageData;
        return {
            getUserLog: function() {
                return $cookies.logObject;
            },
            setUserLog: function(value) {
                $cookies.logObject = value;
            },
			setUserLogOut: function(){
				$cookies.logObject = "";
			},
			getUserId: function() {
				userId = $cookies.userId
                return userId;
            },
            setUserId: function(value) {
                 $cookies.userId = value;
            },
            getUserGraphs: function(){
               return userGraphList;
            },
            setUserGraphs: function(value){
               userGraphList = value;
               var promise = userGraphList;
            },
            getOpenGraphId: function(){
               return $cookies.graphId;
            },
            setOpenGraphId: function(value){
               $cookies.graphId = value;
            },
            getOpenGraphTitle: function(){
               return $cookies.graphTitle;
            },
            setOpenGraphTitle: function(value){
               $cookies.graphTitle = value;
            },
            getLanguage: function(){
               return $cookies.language;
            },
            setLanguage: function(value){
               $cookies.language = value;
            },
            getLanguageData: function(){
               return languageData;
            },
            setLanguageData: function(value){
               languageData = value;
            },
        };
    });

mainApp.factory('loadLanguage', function($http) { //, $q, $rootScope, , $timeout
        
    	return {
        requestLanguage: function(id)
		    {
		    	var myUrl = 'http://argGraph.localhost/language/' + id;
				var promise = $http({
				    method: 'GET',
				    url: myUrl,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    }
				});

				promise.success(function(data, status, headers, config) {
					return data;
					languageData = data;
				});
				
				promise.error(function(data, status, headers, config) {
					return "failure message: " + JSON.stringify({data: data});
				});
			    return promise;
		    },
    };
});


mainApp.factory('loadGraphs', function($http) { //, $q, $rootScope, , $timeout
     
       
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
        	return response.data;
        });
        return promise;
        }
    };
    return userGraphs;
});

mainApp.factory('saveGraph', function($http) {
        
    return {
        saveAsMyGraph: function(id, graph, graphTitle)
		    {
		    	var dataObjGraph = {
						userId : id,
						graph : graph,
						title : graphTitle 
					};

				var promise = $http({
				    method: 'Post',
				    url: 'http://argGraph.localhost/graph',
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    'data': dataObjGraph
				}).then(function(response,status, headers, config){
			        	return response.data;
			        });
			        return promise;
		    }, 
		    saveMyGraph: function(id, userId, graph, title)
		    {
		    	var dataObjGraph = {
		    		    userId : userId,
						graph : graph,
						title : title 
					};
                var myUrl = 'http://argGraph.localhost/graph/' + id;
				var promise = $http({
				    method: 'PUT',
				    url: myUrl,
				    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				    transformRequest: function(obj) {
				        var str = [];
				        for(var p in obj)
				        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
				        return str.join("&");
				    },
				    'data': dataObjGraph
				}).then(function(response,status, headers, config){
			        	return response.data;
			        });
			        return promise;
		    },
    };
});

mainApp.factory('drawGraph', function() {
        
    return {
        openMyGraph: function(myGraph){
  			opMyGraph(myGraph);
			},
		newGraph: function(){
  			nGraph();
			},	
        
    };
});

mainApp.factory('removeGraph', function($http) {
        
    return {
        removeMyGraph: function(id)
		    {
		    	var myUrl = 'http://argGraph.localhost/graph/' + id;
				var promise = $http({
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

				promise.success(function(data, status, headers, config) {
					graphRemoved = true;
					return graphRemoved;
				});
				
				promise.error(function(data, status, headers, config) {
					return "failure message: " + JSON.stringify({data: data});
				});
			    return promise;
		    }, 
    };
});

mainApp.factory('user', function($http) {
        
    return {
        userLogin: function(ubcEmail, password)
		    {
		    	var dataObj = {
				ubcEmail : ubcEmail,
				password : password
				};
				var promise = $http({
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

				promise.success(function(response, status, headers, config) {
						return response.data;
					
				});
				
				promise.error(function(data, status, headers, config) {
					//return "failure message: " + JSON.stringify({data: data});
					return data;
				});
			    return promise;
		    }, 
		userRegister: function(fullNameReg, usernameReg, ubcEmailReg, passwordReg)
		    {
		    	var dataObjReg = {
						name : fullNameReg,
						username : usernameReg,
						ubcEmail : ubcEmailReg,
						password : passwordReg
					};
				var promise = $http({
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

				promise.success(function(response, status, headers, config) {
						return response.data;
					
				});
				
				promise.error(function(data, status, headers, config) {
					return "failure message: " + JSON.stringify({data: data});
				});
			    return promise;
		    },     
    };
});


//The login controller
mainApp.controller('loginCtrl', function($scope, $http, $interval, sharedProperties, user) {

	$scope.userLogError=false;

    $scope.loginSubmit = function() {

    	user.userLogin($scope.ubcEmail, $scope.password).then(function(results){
    		if(results.data.data!=false){
        	$scope.userLogMessage = results.data.data;
			sharedProperties.setUserLog($scope.userLogMessage.username);
		    sharedProperties.setUserId($scope.userLogMessage.id);

		    $scope.ubcEmail='';
			$scope.password='';

			$scope.loginForm.ubcEmail.$dirty = false;
			$scope.loginForm.password.$dirty = false;

			$scope.userLogError=false;
				}
			else{
					$scope.userLogError=true;
				}
    	});

      };
		 
	  $scope.logedIn = function () {
	      return sharedProperties.getUserLog();
	    }
    

    //Language///
	  $interval( function(){ 
    	$scope.langId = sharedProperties.getLanguage();
    }, 2000);
    
    $scope.$watch("langId", function() {
		if($scope.langId!="") {
				$scope.regLang = sharedProperties.getLanguageData();
				      
				} 
	    });

	$scope.init = function () {
		$scope.regLang = sharedProperties.getLanguageData();
		
	}  

					
});


mainApp.controller('navbarCtrl', function($scope, $interval, sharedProperties, loadGraphs, drawGraph, loadLanguage) {
	$scope.openGraphTitle = "";
	//Start the page by english
    $scope.lId = "1";

    //Check for opened graphs(for title) every one second 
    $interval( function(){ 
    	$scope.openGraphTitle = sharedProperties.getOpenGraphTitle();
    }, 1000);
    $scope.openGraphTitle = sharedProperties.getOpenGraphTitle();
    
    
	$scope.userLogMessage=function()
		{
			return sharedProperties.getUserLog();
		}
	
	$scope.userLogout=function()
		{
			sharedProperties.setUserLogOut();
			sharedProperties.setUserId("");
			//clear the drawed graph and have a new start page
			drawGraph.newGraph();
		    sharedProperties.setOpenGraphTitle("");
		}

	$scope.showNewGraph = function(){
		drawGraph.newGraph();
		sharedProperties.setOpenGraphTitle("");
	}
	
    //`id`, `file`, `new`, `graphs`, `saveAs`, `save`, `graphsModHeader`, 
// `graphsModOpen`, `graphsModRemove`, `saveAsModHeader`, `saveAsModPlease`,
//`saveAsModTitlePh`, `saveAsModButton`, `saveAsModSuccessMes`, `saveAsModTitRequired`, 
//`saveAsModLongerTitle`, `saveAsModShorterTitle`, `saveModPlease`, `saveModButton`,
//`saveModeSuccessMes`, `language`, `english`, `mandarin`, `spanish`, `french`, `watchDemo`, 
//`about`, `hiUser`, `logOut`, `login`, `register`, `loginModHeader`, `loginModEmailPh`,
//`loginModPasswordPh`, `loginModButton`, `loginModEmailRequired`, `loginModInvalidEmail`,
  //`loginModUBCEmReq`, `loginModPasswordReq`, `loginModPasswordLonger`, 
  //`loginModPasswordShorter`, `LoginModSuccessMes`, `regModHeader`, `regModFullnamePh`,
  //`regModUsernamePh`, `regModEmailPh`, `regModPasswordPh`, `regModPassConfirmPh`,
  //`regModButton`, `regModFullnameReq`, `regModUsernameReq`, `regModEmailReq`,
   //`regModInvalidEmail`, `regModUBCEmailReq`, `regModPasswordReq`, `regModPasswordLonger`,             
 //`regModPasswordShorter`, `regModPasswordConfReq`, `regModePasswordConfLonger`,
//`regModPasswordConfShorter`, `regModSuccessMes`, `startWriting`, `logModErrMes`, 
//`wantedLanguage`
	$scope.changeLanguage = function(languageId){
		languageRequest(languageId);
	}
	
	//get lId cookie and request language
	$scope.init = function () {
		$scope.lId = sharedProperties.getLanguage();
		languageRequest($scope.lId);
	}
	//The function for requesting language
	var languageRequest = function(langId){
    	loadLanguage.requestLanguage(langId).then(function(results){
			sharedProperties.setLanguage(langId);
			sharedProperties.setLanguageData(results.data.data);
			$scope.navbar = results.data.data;
		});
	}

	languageRequest($scope.lId);
});

//Register controller
mainApp.controller('registerCtrl', function($scope, $http, $interval, user, sharedProperties){
	
	$scope.registered = false;
  
    $scope.registerSubmit = function() {
        user.userRegister($scope.fullNameReg, $scope.usernameReg, $scope.ubcEmailReg, $scope.passwordReg).then(function(results){
        	$scope.message = results;
			$scope.registered = true;
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
	};
    //Language///
	$interval( function(){ 
    	$scope.langId = sharedProperties.getLanguage();
    }, 2000);
    
	

    $scope.$watch("langId", function() {
		if($scope.langId!="") {
				$scope.regLang = sharedProperties.getLanguageData();
				      
				} 
	    });

	$scope.init = function () {
		$scope.regLang = sharedProperties.getLanguageData();
		
	}
	

});

mainApp.controller('graphSaveAsCtrl', function($scope, $http, $interval, saveGraph, sharedProperties, loadGraphs) {

	$scope.formData = {};

    $scope.graphSavedAs = false;

    //The function to capture the graph json
    $scope.setValueFunc = function (val) {
        $scope.graph = val;

    };
     
	$interval( function(){
    	$scope.userId = sharedProperties.getUserId();
     }, 1000);
	
	$scope.graphSaveAsSubmit = function()
    {
		saveGraph.saveAsMyGraph($scope.userId, $scope.graph, $scope.formData.graphTitle).then(function(results){
			$scope.graphSavedAs = true;
			$scope.formData.graphTitle="";
			loadGraphs.async($scope.userId).then(function(results){
		    			sharedProperties.setUserGraphs(results.data);
	    			});
		});
    }
	
    $scope.turnSaveAsOn = function(){
    	$scope.graphSavedAs = false;
    	 
    }

     //Language///
	$interval( function(){ 
    	$scope.langId = sharedProperties.getLanguage();
    }, 2000);
    
	

    $scope.$watch("langId", function() {
		if($scope.langId!="") {
				$scope.regLang = sharedProperties.getLanguageData();
				      
				} 
	    });

	$scope.init = function () {
		$scope.regLang = sharedProperties.getLanguageData();
		
	} 


});

mainApp.controller('graphSaveCtrl', function($scope, $http, $interval, saveGraph, sharedProperties, loadGraphs) {

    $scope.graphSaved = false;

    $interval( function(){
    	$scope.userId = sharedProperties.getUserId();
    	$scope.graphId = sharedProperties.getOpenGraphId();
    	$scope.graphTitle = sharedProperties.getOpenGraphTitle();
    }, 100);

    //The function to capture the graph json
    $scope.setValueFunc = function (val) {
        $scope.graph = val;
    };
     
	
	
	$scope.graphSaveSubmit = function()
    {
    	if(sharedProperties.getOpenGraphTitle()==""){
    		$scope.newGraphOpened = true;
    	}else{
			saveGraph.saveMyGraph($scope.graphId,  $scope.userId, $scope.graph, $scope.graphTitle).then(function(results){
				$scope.graphSaved = true;
				loadGraphs.async($scope.userId).then(function(results){
			    			sharedProperties.setUserGraphs(results.data);
		    			});
			});
		}
    }
	
    $scope.turnSaveOn = function(){
    	 $scope.graphSaved = false;
    	 $scope.newGraphOpened = false;
    } 

    //Language///
	$interval( function(){ 
    	$scope.langId = sharedProperties.getLanguage();
    }, 2000);
    
	

    $scope.$watch("langId", function() {
		if($scope.langId!="") {
				$scope.regLang = sharedProperties.getLanguageData();
				      
				} 
	    });

	$scope.init = function () {
		$scope.regLang = sharedProperties.getLanguageData();
		
	}


});



mainApp.controller('graphOpenCtrl', function($scope, $http, $interval, sharedProperties, loadGraphs, drawGraph, removeGraph) {// drawGraph, removeGraph  
    
    //The function for sending load graph request for specific user with a userId: 
    //It saves it in a var in shared service(sharedProperties)
    function graphList(uId){
    	loadGraphs.async(uId).then(function(results){
				sharedProperties.setUserGraphs(results.data);
	        });
    }
    //checks sharedProperties userGraph variable every 1 second to see if we have new graphs to load
    //Actually it updates userGragps scope every 1 second  
    $interval( function(){ 
    	$scope.userGraphs = sharedProperties.getUserGraphs(); 
    	 //Get the user Id
    	$scope.userId = sharedProperties.getUserId();
    }, 1000);
    
    $scope.$watch("userId", function() {
		if ($scope.userId!="") {
				graphList($scope.userId);       
				} 
	    });
   

    $scope.openGraph = function(gTitle, gId){
    	angular.forEach($scope.userGraphs,function(value,index){
                if(value.title == gTitle){
                	$scope.graphJson = value.graph;
                	drawGraph.openMyGraph($scope.graphJson);
                    sharedProperties.setOpenGraphId(gId);
                    sharedProperties.setOpenGraphTitle(gTitle);
                }
            })
    }

    $scope.remGraph = function(id){
    	removeGraph.removeMyGraph(id).then(function(results){
    		graphList($scope.userId);
    	});
        
    }

    //Language///
    $interval( function(){ 
    	$scope.langId = sharedProperties.getLanguage();
    }, 2000);
    
	

    $scope.$watch("langId", function() {
		if($scope.langId!="") {
				$scope.regLang = sharedProperties.getLanguageData();
				      
				} 
	    });

	$scope.init = function () {
		$scope.regLang = sharedProperties.getLanguageData();
		
	}

});