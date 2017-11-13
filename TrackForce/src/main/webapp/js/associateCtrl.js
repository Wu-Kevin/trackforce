/**
 * http://usejsdoc.org/
 */
angular.module('mainApp').controller('associateCtrl', function($http, $scope, $routeParams, $rootScope) {
	$http({
		method : "GET",
		url : "http://localhost:8080/TrackForce/track/associates/all"
	}).then(function(response) {
		$scope.curriculum = $rootScope.curriculum; 
		$scope.associateInfo = response.data;
	});
	
	$scope.updateAssociate = function() {
		$http({
			method : "GET",
			url : "http://localhost:8080/TrackForce/track/associates/" + $routeParams.associateId + "/update/" + $scope.associateInfo.marketingStatus + "/" + $scope.associateInfo.client
		}).then(function(response) {
			$scope.message = response.data;
			if(response.statusCode == 404) {
				$scope.message = "Resource does not exist";
			}
		})
	}

	$scope.getAllClientNames = function() {
		$http({
			method : "GET",
			url : "http://localhost:8080/TrackForce/track/clients"
		}).then(function(response) {
			$scope.clients = response.data;
		});
	}
});
