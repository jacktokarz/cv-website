angular.module("groot", [])
	.controller("index", ["$scope", function ($scope) {
		/*$scope.value = 1;
		$scope.isBold = function () { return $scope.value % 2 === 0; };
		$scope.isItalic = function () { return $scope.value % 3 === 0; };
		$scope.isUnderlined = function () { return $scope.value % 5 === 0; };
		$scope.isHiding = function () { return $scope.value === "30"; };
		$scope.isHidden = function () { return $scope.secondValue !== "boo"};
		*/
		$scope.word1Hide = function () { return ($scope.word1 !== "robot")};
		$scope.word2Hide = function () { return ($scope.word2 !== "novel")};
		$scope.word3Hide = function () { return ($scope.word3 !== "pit")};
		$scope.word4Hide = function () { return ($scope.word4 !== "kiwi")};
		$scope.word5Hide = function () { return ($scope.word5 !== "czech")};
		$scope.word6Hide = function () { return ($scope.word6 !== "wall")};
		$scope.word7Hide = function () { return ($scope.word7 !== "conductor")};
		$scope.word8Hide = function () { return ($scope.word8 !== "mail")};
		$scope.word9Hide = function () { return ($scope.word9 !== "pirate")};
		$scope.word10Hide = function () { return ($scope.word10 !== "mine")};
		$scope.word11Hide = function () { return ($scope.word11 !== "maple")};
		$scope.word12Hide = function () { return ($scope.word12 !== "night")};
		$scope.word13Hide = function () { return ($scope.word13 !== "opera")};
		$scope.word14Hide = function () { return ($scope.word14 !== "africa")};
		$scope.word15Hide = function () { return ($scope.word15 !== "greece")};
		$scope.word16Hide = function () { return ($scope.word16 !== "palm")};
		$scope.word17Hide = function () { return ($scope.word17 !== "penguin")};
		$scope.word18Hide = function () { return ($scope.word18 !== "carrot")};
		$scope.wordFinalHide = function () { return ($scope.word1 !== "robot" || $scope.word2 !== "novel"
		 || $scope.word3 !== "pit" || $scope.word4 !== "kiwi" || $scope.word5 !== "czech" || $scope.word6 !== "wall"
		 || $scope.word7 !== "conductor" || $scope.word8 !== "mail" || $scope.word9 !== "pirate" ||
		 $scope.word10 !== "mine" || $scope.word11 !== "maple" || $scope.word12 !== "night" || $scope.word13 !== "opera"
		 || $scope.word14 !== "africa" || $scope.word15 !== "greece" || $scope.word16 !== "palm" || $scope.word17 !== "penguin"
		 || $scope.word18 !== "carrot")};

		$scope.lock1Hide = function () { return $scope.lock1 !== "-0"};
		$scope.lock2Hide = function () { return $scope.lock2 !== "-0"};
		$scope.lock3Hide = function () { return $scope.lock3 !== "-0"};
		$scope.lock4Hide = function () { return $scope.lock4 !== "-0"};
		$scope.lockFinalHide = function () { return ($scope.lock1 !== "8" || $scope.lock2 !== "2" || 
			$scope.lock3 !== "7" || $scope.lock4 !== "3")};
	}]);
