'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication', '$mdDialog',
	function($scope, $http, $location, Authentication, $mdDialog) {
		$scope.authentication = Authentication;

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				$location.path('/networks');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
