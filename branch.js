angular.module("branch", [])
	.controller("index", ["$scope", function ($scope) {
		$scope.wid;
		$scope.myStyle = "{'width': $scope.wid;}";
		$scope.length;
	}]);