var mainApp = angular.module('mainApp', ['ngCookies']);

mainApp.service('sharedProperties', function($cookies) {
        var userLog = '';

        return {
            getUserLog: function () {
                return $cookies.logObject;
            },
            setUserLog: function(value) {
                $cookies.logObject = value;
            }
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
			
			//console.log(JSON.stringify({data: data}));
			//$scope.hiUser=data.username;

			//var logSessionObj = { 'logObj' : $scope.userLogMessage.username};
			sharedProperties.setUserLog($scope.userLogMessage.username);
			//$cookies.logObject = JSON.stringify($scope.userLogMessage.username);
			//console.log(JSON.stringify($scope.userLogMessage.username));
		});
		
		res.error(function(data, status, headers, config) {
			alert( 'failure message: ' + JSON.stringify({data: data}));
		});
		
		$scope.ubcEmail='';
		$scope.password='';

		$scope.loginForm.ubcEmail.$dirty = false;
		$scope.loginForm.password.$dirty = false;
      

		$('#logInModal').modal('hide');

	};				
});


mainApp.controller('checkLogCtrl', function($scope, sharedProperties) {

	$scope.userLogMessage=function()
		{
			return sharedProperties.getUserLog();
		}

		$scope.userLogout=function()
		{
			return sharedProperties.setUserLog('');
		}
	
});

//Register controller
mainApp.controller('registerCtrl', function($scope, $http){
	
	
  
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
			console.log(JSON.stringify({data: data}));
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


		$('#registerModal').modal('hide');

		alert("You successfully have been registered!");
		
	};				
});

