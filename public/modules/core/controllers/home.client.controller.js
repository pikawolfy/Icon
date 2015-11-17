'use strict';

//TODO add authentication
angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'homeContentModel', '$mdToast',
	function($scope, Authentication, homeContentModel, $mdToast) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.edit = -1;
        $scope.entries = [];
        var contentPromise = homeContentModel.getEntries();
        contentPromise.then(function(entries){
            $scope.entries = entries;
        });

        $scope.newContent = [];

        $scope.getContentTemplate = function(){
            $scope.newContent.push(new homeContentModel.entry(0,'New Entry', 'new content goes here.'));
        };

        $scope.cancel = function($index){
            $scope.newContent.splice($index,1);
        };

        $scope.save = function(index){
            homeContentModel.saveNewEntry($scope.newContent[index]);
            //disable other buttons for this because the id is incorrect / update the id
            $scope.entries.push($scope.newContent[index]);
            $scope.newContent.splice(index,1);
        };

        $scope.delete = function(index){
            homeContentModel.deleteEntry($scope.entries[index]);
            $scope.entries.splice(index,1);
            $scope.newContent.splice(index,1);
        };

        $scope.update = function(index){
            homeContentModel.updateEntry($scope.entries[index]);
        };


        $scope.editToggle = function(index){
            $scope.edit = index;
        };

        $scope.editCancel = function(index){
            $scope.edit = -1;
        }

	}
]).directive('newContent', function(){
    return{
        scope:{
            entry: '=',
            cancelFunction: '&',
            saveFunction: '&',
            deleteFunction: '&',
            updateFunction: '&',
            index: '='
        },
        templateUrl: 'modules/core/partials/newContent.html'
    }
});
