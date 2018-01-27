var myApp=angular.module('kickstartApp',[]);

myApp.controller('maincontroller',['$http',function($http){
 this.allData=[];
 var main=this;
 this.allLocations=[];
 var checkunique=function(location)
 {
 	for(var i in main.allLocations)
 	{
 		if(location===main.allLocations[i])
 			return false;
 	}
 	return true;
 	//console.log(location);
 }
 this.getAllLocations=function()
 {
 	var ind=0;
 	for(var i in main.allData)
 	{
 		var f=checkunique(main.allData[i].location);
 		if(f)
 		{
 			main.allLocations[ind]=main.allData[i].location;
 			ind++;
 		}
 	}
 	console.log(main.allLocations);
 }
 
 $http.get('http://starlord.hackerearth.com/kickstarter').then
 (function successCallback(response){
 	console.log(response.data[0]);
 	main.allData=response.data;
 	main.getAllLocations();
 },
 function errorCallback(response){
 	console.log(response);
 }
 	);
}]);