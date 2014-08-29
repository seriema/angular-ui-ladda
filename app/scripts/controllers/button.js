'use strict';

/**
 * @ngdoc function
 * @name angularUiLaddaApp.controller:ButtonCtrl
 * @description
 * # ButtonCtrl
 * Controller of the angularUiLaddaApp
 */
angular.module('angularUiLaddaApp')
	.directive('ngLadda', function(){
		return {
			restrict: 'A',
			link : function(scope, element, attrs){
				var ladda = Ladda.create( element[0] );
				scope.$watch(attrs.ngLadda, function(newVal){
					if(newVal) {
						if (!ladda.isLoading()) {
							ladda.start();
						}

						if (angular.isNumber(newVal)) {
							ladda.setProgress(newVal / 100);
						}
					} else if (ladda.isLoading()) {
						ladda.stop();
					}
				});
			}
		};
	});