var drapp= angular.module('myapp', []);

drapp.controller('CCC', ['$scope', function($scope){
	$scope.address = [
		{id:"0","word":"我的预约"},
		{id:"1","word":"我的进店预约"},
		{id:"2","word":"我的评价"}
	];
	$scope.address1 = [
		{id:"00","word":"个人资料"},
		{id:"01","word":"修改密码"},
		{id:"02","word":"我的售后"},
		{id:"02","word":"帮助与反馈"}
	];
}]);















