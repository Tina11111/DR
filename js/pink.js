var app = angular.module("myapp",[])
app.controller("pinkone",["$scope",function($scope){
	$scope.showname = function(){
		$(".header .right .home").rotate({ 
	        angle: 0, 
	        animateTo: 360,
	        callback:function(){
	        	$(".list").css("display","block")
	        }
	   });
	}
}])

app.controller("pinktwo",["$scope",function($scope){
	$scope.hidename = function(){
		$(".list").css("display","none")
	}
}])


app.controller("pinkthree",["$scope",function($scope){
	$scope.change = function(num){
		$(".nav a").eq(num).css({"border-bottom":"1px solid #c7063d","color":"#c7063d"}).siblings().css({"border-bottom":"1px solid #fff","color":"#000"})
		$(".pic img").eq(0).attr("src","img/"+num+1+".jpg")
		$(".pic img").eq(1).attr("src","img/"+num+2+".jpg")
		$(".pic img").eq(2).attr("src","img/"+num+3+".jpg")
	}
	
}])

//
//app.controller("pinkfour",["$scope",function($scope){
//	$scope.top = function(){
//		var top = document.documentElement.scrollTop || document.body.scrollTop
//		console.log(top)
//		if(top>=300){
//			$(".top").css("display","block")
//			console.log(1)
//		}else{
//			$(".top").css("display","none")
//			console.log(2)
//		}
//	}
//}])








