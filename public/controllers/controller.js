var app = angular.module('ContactApp',[]);

app.controller('AppCtrl',function($scope,$http){
    console.log("Hello world form controller");
    //$scope.name="Arvind";
    $http.get('/contactlist').then(function(response){
        console.log("i got the data");
        $scope.contactList = response.data;
    });
    
    var refresh = function() {
            $http.get('/contactlist').then(function(response) {
            console.log("I got the data I requested");
            $scope.contactList = response.data;
            $scope.contact = "";
        });
    };
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist',$scope.contact).then(function(response) {
            console.log(response.data);
            refresh();
            alert("contact added successfully at the bottom of list");
        });
    };
    
    $scope.remove = function(id) {
        console.log(id);
        $http.delete('/contactlist/' + id).then(function(response) {
            refresh();
        });
    };
    
});