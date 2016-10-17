var app=angular.module("myapp",["ngRoute"])
	var message1=[
		{"txtdata11":"img/1469436578.jpg","txtdata111":"一生挚爱","txtdata1111":"￥21111"},
		{"txtdata11":"img/1470306983.jpg","txtdata111":"Together系列 Lifetime","txtdata1111":"￥25131"},
		{"txtdata11":"img/1470362577.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥1999"},
		{"txtdata11":"img/1470364585.jpg","txtdata111":"Together系列 包容对戒","txtdata1111":"￥58755"},
		{"txtdata11":"img/1470364912.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥5856"},
		{"txtdata11":"img/1470366532.jpg","txtdata111":"一生一世","txtdata1111":"￥58963"}
		
		
	]
	var message2=[		
		{"txtdata11":"img/1475129229.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥58754"},
		{"txtdata11":"img/1475131033.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥2541"},
		{"txtdata11":"img/1475135149.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥3695"},
		{"txtdata11":"img/1475229039.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥9857"}		
	]
	
	app.controller("BBB",["$scope",function($scope){
		$scope.listdata1=message1
		$scope.listdata2=message2
		$scope.myVar=false
		$scope.more=function(){
			$scope.myVar=true
			
		}
		//console.log($scope.listdata)
	}])
	
