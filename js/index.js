(function(){
	var app = angular.module("myapp",["ngRoute"]);
	app.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/list/3",{
			templateUrl:"DR.html",
			controller:"Drtrue"
		}).when("/list/0",{
			templateUrl:"dr-list.html",
			controller:"AAA"				
		}).when("/list/1",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/list/2",{
			templateUrl:"goods.html",
			controller:"BBB"
		}).when("/goods/0",{
			templateUrl:"culture.html",
			controller:"CCC"
		}).when("/goods/1",{
			templateUrl:"pink.html",
			controller:"CCC"
		}).when("/goods/2",{
			templateUrl:"DR.html",
			controller:"CCC"
		}).when("/goods/3",{
			templateUrl:"goods.html",
			controller:"BBB"
		}).when("/goods/4",{
			templateUrl:"flowers.html",
			controller:"CCC"
		}).when("/goods/5",{
			templateUrl:"goods.html",
			controller:"BBB"
		}).when("/person",{
			templateUrl:"person.html",
			controller:"CCC"
		}).when("/buycar",{
			templateUrl:"buy.html",
			controller:"detail"
		}).when("/details/:idd",{
			templateUrl:"detail.html",
			controller:"detail"
		}).when("/picture/0",{
			templateUrl:"culture.html",
			controller:"CCC"				
		}).when("/picture/1",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/picture/2",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/picture/3",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/picture/4",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/picture/5",{
			templateUrl:"culture.html",
			controller:"CCC"				
		}).otherwise({
			templateUrl:"home.html",
			redirectTo:"/"
		})
	}])
	var banner = [
		{"id":"0","img":"img/1471588575.jpg"},	
		{"id":"1","img":"img/1473329863.jpg"},	
		{"id":"2","img":"img/1473389664.jpg"},
		{"id":"3","img":"img/1473667532.jpg"},
		{"id":"4","img":"img/1475120043.jpg"},
		{"id":"5","img":"img/1476161513.jpg"}
	]
	var datanav = [
		{"id":0,"listid":"7","img":"img/1467191480.jpg","name":"求婚钻戒"},
		{"id":1,"listid":"8","img":"img/1475206280.jpg","name":"结婚对戒"},
		{"id":2,"listid":"9","img":"img/1475206305.jpg","name":"爱的礼物"},
		{"id":3,"listid":"10","img":"img/1472460603.jpg","name":"DR实体店"}
	]
	var shiti = [
		{"id":0,"listid":"11","img":"img/1467186495.jpg","dian":"香港店"},
		{"id":1,"listid":"12","img":"img/1468895895.jpg","dian":"北京SOHO店"},
		{"id":2,"listid":"13","img":"img/1468907325.jpg","dian":"广州中信广场店"},
		{"id":3,"listid":"14","img":"img/1468907378.jpg","dian":"上海红坊店"},
		{"id":4,"listid":"15","img":"img/1474860929.jpg","dian":"深圳世界之窗"}
	]
	var list =[ 
		{"id":0,"img":"img/1473404752.jpg"},
		{"id":1,"img":"img/1473404762.jpg"},
		{"id":2,"img":"img/1473404770.jpg"},
		{"id":3,"img":"img/1473404777.jpg"},
		{"id":4,"img":"img/1473404792.jpg"},
		{"id":5,"img":"img/1473404799.jpg"},
		{"id":6,"img":"img/1473404807.jpg"}
	]
	app.controller("home",["$scope",function($scope){
		$scope.data = banner
		$scope.nav = datanav
		$scope.shitidata = shiti
		$scope.listdata = list
	}])
//	app.controller("goList",["$scope","$routeParams",function($scope,$routeParams){
//		$scope.navlist = datanav[$routeParams.num]
//	}])
	app.controller('Drtrue', ['$scope', function($scope){
		$scope.address = [
			{id:"0","word":"香港店"},
			{id:"1","word":"北京-SOHO店"},
			{id:"2","word":"上海-红坊店"},
			{id:"3","word":"深圳-世界之窗店"},
			{id:"4","word":"广州-中信广场店"},
			{id:"5","word":"重庆-WFC店"},
			{id:"6","word":"武汉-风情街店"},
			{id:"7","word":"南京-1912店"},
			{id:"8","word":"长沙-万达广场店"},
			{id:"9","word":"天津-津湾广场店"},
			{id:"10","word":"昆明-万达广场店"},
			{id:"11","word":"苏州-美罗百货店"},
			{id:"12","word":"大连-凯丹广场店"},
			{id:"13","word":"无锡-恒隆广场店"},
			{id:"14","word":"成都-晶融汇广场店"},
			{id:"15","word":"宁波-和义大道店"},
			{id:"16","word":"郑州-大商金博大店"},
			{id:"17","word":"杭州-利星名品广场店"},
			{id:"18","word":"沈阳-市府恒隆店"},
			{id:"19","word":"西安-王府井店"},
			{id:"20","word":"青岛-金狮广场店"},
			{id:"21","word":"济南-恒隆广场店"},
			{id:"22","word":"哈尔滨-金太阳店"},
			{id:"23","word":"福州-世欧广场店"},
			{id:"24","word":"太原-梅园百盛店"},
			{id:"25","word":"南宁-航洋国际城店"},
			{id:"26","word":"合肥-万象城店"},
			{id:"27","word":"石家庄-乐汇城店"},
			{id:"28","word":"厦门-SM城市广场店"},
			{id:"29","word":"沈阳-中街恒隆店"},
			{id:"30","word":"温州-财富购物中心店"},
			{id:"31","word":"重庆-观音桥店"},
			{id:"32","word":"上海-香港广场店"},
			{id:"33","word":"长春-活力城店"},
			{id:"34","word":"南通-圆融广场店"},
			{id:"35","word":"常州-吾悦广场店"},
			{id:"36","word":"南京-金茂汇店"},
			{id:"37","word":"大连-恒隆广场店"},
			{id:"38","word":"海口-东方广场店"},
			{id:"39","word":"唐山-银泰城店"},
			{id:"40","word":"成都-仁恒置地店"},
			{id:"41","word":"北京-银泰in88店"},
			{id:"42","word":"贵阳-汇金星力城店"},
			{id:"43","word":"银川-CC MALL店"},
			{id:"44","word":"杭州-星光大道店"},
			{id:"45","word":"兰州-国芳百货店"},
			{id:"46","word":"武汉-壹方购物中心店"},
			{id:"47","word":"西宁-国芳百货店"},
			{id:"48","word":"呼和浩特-维多利店"},
			{id:"49","word":"郑州-大商国贸店"},
			{id:"50","word":"南昌-T16购物中心店"}
		];
	}]);
	var urll=[
		{"id":0,"srcc":"img/1.jpg"},
		{"id":1,"srcc":"img/2.jpg"},
		{"id":2,"srcc":"img/3.jpg"},
		{"id":3,"srcc":"img/4.jpg"}
	]
	var urll2=[
		{"id":4,"srcc":"img/5.jpg"},
		{"id":5,"srcc":"img/6.jpg"},
		{"id":6,"srcc":"img/7.jpg"},
		{"id":7,"srcc":"img/8.jpg"}
	]
	var urll3=[
		{"id":8,"srcc":"img/li2.jpg"},
		{"id":9,"srcc":"img/li3.jpg"},
		{"id":10,"srcc":"img/li4.jpg"}
		
	]
	app.controller("AAA",["$scope","$filter",function($scope,$filter){
		$scope.titlee="求婚钻戒"
		$scope.index="首页"
		$scope.urll=urll
		$scope.urll2=urll2
		$scope.urll3=urll3
		$scope.myvar=true
		$scope.show=function(){
			$scope.myvar=false
		}
	}])
	var message1=[
		{"id":100,"txtdata11":"img/1469436578.jpg","txtdata111":"一生挚爱","txtdata1111":"21111"},
		{"id":101,"txtdata11":"img/1470306983.jpg","txtdata111":"Together系列 Lifetime","txtdata1111":"25131"},
		{"id":102,"txtdata11":"img/1470362577.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"1999"},
		{"id":103,"txtdata11":"img/1470364585.jpg","txtdata111":"Together系列 包容对戒","txtdata1111":"58755"},
		{"id":104,"txtdata11":"img/1470364912.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"5856"},
		{"id":105,"txtdata11":"img/1470366532.jpg","txtdata111":"一生一世","txtdata1111":"58963"}
	]
	var message2=[		
		{"id":106,"txtdata11":"img/1475129229.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"58754"},
		{"id":107,"txtdata11":"img/1475131033.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"2541"},
		{"id":108,"txtdata11":"img/1475135149.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"3695"},
		{"id":109,"txtdata11":"img/1475229039.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"9857"}		
	]
	
	var data = [
		{"id":"100","img":["img/pic1.jpg","img/pic2.jpg","img/pic3.jpg","img/pic4.jpg","img/pic5.jpg","img/pic6.jpg","img/pic7.jpg","img/pic8.jpg","img/pic9.jpg"],"name":"Together系列 两情相悦","del":"白18K金 30分 F色 VG 20寸","price":"9898"},
		{"id":"101","img":["img/pic10.jpg","img/pic12.jpg","img/pic13.jpg","img/pic14.jpg","img/pic16.jpg","img/pic17.jpg"],"name":"Darry Ring 结婚对戒","del":"白18K金 30分 F色 VG 20寸","price":"23299"},
		{"id":"102","img":["img/pic18.jpg","img/pic19.jpg","img/pic20.jpg","img/pic21.jpg","img/pic22.jpg","img/pic23.jpg","img/pic24.jpg"],"name":"Darry Ring 真爱印迹","del":"白18K金 30分 F色 VG 20寸","price":"9098"},
		{"id":"103","img":["img/pic14.jpg","img/pic15.jpg","img/pic16.jpg","img/pic17.jpg"],"name":"Darry Ring系列 you&me对戒","del":"白18K金 30分 F色 VG 20寸","price":"11398"},
		{"id":"104","img":["img/pic25.jpg","img/pic26.jpg","img/pic27.jpg","img/pic28.jpg","img/pic29.jpg","img/pic30.jpg","img/pic31.jpg"],"name":"Together系列 我们对戒","del":"白18K金 30分 F色 VG 20寸","price":"4598"},
		{"id":"105","img":["img/pic32.jpg","img/pic33.jpg","img/pic34.jpg","img/pic35.jpg","img/pic36.jpg","img/pic37.jpg","img/pic38.jpg"],"name":"终于等到你","del":"白18K金 30分 F色 VG 20寸","price":"7798"},
		{"id":"106","img":["img/pic43.jpg","img/pic44.jpg","img/pic45.jpg","img/pic46.jpg"],"name":"Together系列 你最珍贵","del":"白18K金 30分 F色 VG 20寸","price":"6498"},
		{"id":"107","img":["img/pic47.jpg","img/pic48.jpg","img/pic49.jpg","img/pic50.jpg"],"name":"Together系列  Wedding对戒","del":"白18K金 30分 F色 VG 20寸","price":"6998"},
		{"id":"108","img":["img/pic51.jpg","img/pic52.jpg","img/pic53.jpg","img/pic54.jpg"],"name":"爱有天意","del":"白18K金 30分 F色 VG 20寸","price":"6098"},
		{"id":"109","img":["img/pic55.jpg","img/pic56.jpg","img/pic57.jpg","img/pic58.jpg"],"name":"两情相悦","del":"白18K金 30分 F色 VG 20寸","price":"6698"}	
	];
	var data1 = [
	"img/1473402806.jpg","img/1473402810.jpg","img/1468294196.jpg","img/1468294211.jpg","img/1468294245.jpg","img/1468294452.jpg","img/1468294516.jpg","img/1468294559.jpg","img/1468294572.jpg","img/1468294654.jpg","img/1468294705.jpg","img/1468294711.jpg","img/1468294722.jpg","img/1468294737.jpg","img/1468294749.jpg","img/1468294766.jpg","img/1468294850.jpg","img/1473660499.jpg","img/1473660888.jpg","img/1473333688.jpg","img/1473334512.jpg","img/1473334525.jpg","img/1473333748.jpg","img/1473333772.jpg","img/1473333794.jpg","img/1473333809.jpg"]
	
	app.controller("BBB",["$scope","$filter",function($scope,$filter){
		$scope.listdata1=message1
		$scope.listdata2=message2
		$scope.myVar=false
		$scope.more=function(){
			$scope.myVar=true
			
		}
		var a = false;
		$scope.qiehuan = function(asd){
			console.log(asd)
			if(a == false){
				$scope.listdata1 = $filter("orderBy")($scope.listdata1,asd,a);
				$scope.listdata2 = $filter("orderBy")($scope.listdata2,asd,a);
				a = true;
			}else{
				$scope.listdata1 = $filter("orderBy")($scope.listdata1,asd,a);
				$scope.listdata2 = $filter("orderBy")($scope.listdata2,asd,a);
				a = false;
			}	
		}
		//console.log($scope.listdata)
	}])
	
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
	app.controller("detail",["$scope","$routeParams","$timeout",function($scope,$routeParams,$timeout){
		//console.log($routeParams.idd)
		//console.log(data[$routeParams.idd])
		$scope.oUl=null
		$scope.$on("$routeChangeSuccess",function(){
			$scope.oUl = document.getElementById("oul");
			//console.log($scope.oUl)
			//.log($scope.oUl)
			xinxi();
			function xinxi(){
				var str=""
				var sum=0
				var count = 0
				var local = localStorage
				//console.log(local.length)
				for(var i in local){
					for(var j=0;j<data.length;j++){
						if(local[i] == data[j].id){
								console.log(local[i]+':'+data[j].id)
							//console.log($scope.oUl)
								str += '<li><img src="'+data[j].img[1]+'"/>'
								//console.log($scope.oUl)
								str += '<div class="you"><p>'+data[j].name+'</p>'
								str += '<p>'+data[j].del+'</p>'
								str += '<p class="pri" ng-model="data[j].price">￥'+data[j].price+'</p>'
								str += '<input dataid="'+local[i]+'" class="btn" type="button" value="删除"/></div>'
								str +='</li>'
								sum += Number(data[j].price)
								count += 1;
								$(".zongj").html(sum)
								$(".count").html(count)
								
								console.log($(".zongj")+":"+data[j].price)
						}
					}
					

				}
				angular.element($scope.oUl).html(str)
			}				
				$(".you").on("click",".btn",function(){
					var dataid1 = $(this).attr("dataid")
					localStorage.removeItem(dataid1)
					//console.log(dataid
					window.location.reload()
					xinxi();	
				})
				//console.log($scope.oUl)
		})
		var dataid = $routeParams.idd
		for(var i in data){
			if(data[i].id == dataid){
				$scope.mes=data[i];
				$scope.dat = data[i].img;
//				console.log($scope.dat)
				//console.log( data[i].img instanceof Array )
			}
		}
		$scope.data1 = data1;
		$scope.gwc = function(){
			localStorage.setItem(dataid,dataid)
		}
		
		function hhh(){
			
			
		}
		
		
			
		//console.log($scope.mes)
	}])
	

app.controller('CCC', ['$scope', function($scope){
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
})()
	






























