var tinzaApp = angular.module('tinzaApp', ['ngDialog']);

tinzaApp.controller('headerController', function ($scope, ngDialog, $rootScope) {
    $rootScope.x = 0;

    $scope.openSignupDialog = function () {
        if ($rootScope.x === 0) {
            ngDialog.open({
                template: 'partials/signup.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 1;

        } else {
            ngDialog.close({
                template: 'partials/signup.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 0;
        }
    };
    
    $scope.openSigninDialog = function () {
        alert("Hello");
        if ($rootScope.x === 0) {
            ngDialog.open({
                template: 'partials/signin.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 1;

        } else {
            ngDialog.close({
                template: 'partials/signin.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 0;
        }
    };

});
tinzaApp.controller('signupController', function ($scope, ngDialog, $rootScope) {
    $rootScope.x = 0;

    $scope.verifyLastFirstname = function () {
        if ($rootScope.x === 0) {
            alert("dqdsqdqs");
            $rootScope.x = 1;
        } 
    };
    
    $scope.openSigninDialog = function () {
        alert("Hello");
        if ($rootScope.x === 0) {
            ngDialog.open({
                template: 'partials/signin.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 1;

        } else {
            ngDialog.close({
                template: 'partials/signin.html', className: 'ngdialog-theme-default'
            });
            $rootScope.x = 0;
        }
    };

});