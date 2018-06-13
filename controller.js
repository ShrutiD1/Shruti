var app = angular.module("FirstApp",[]);

app.controller("CRUDController", function($scope) {

   $scope.EmpList = [];

   $scope.AddData = function() {

      var emp = {

        Id:$scope.EmpList.length + 1,
        Name: $scope.Name,
        Salary: $scope.Salary,
      };
      $scope.EmpList.push(emp);
      ClearData();
   };

   $scope.Delete = function(emp) {

     var index = $scope.EmpList.indexOf(emp);
     $scope.EmpList.splice(index,1);

   };

   $scope.BindSelectedData = function(emp) {

     $scope.Id = emp.Id;
     $scope.Name = emp.Name;
     $scope.Salary = emp.Salary;
   };

   $scope.UpdateData = function() {

     $.grep($scope.EmpList,function(e) {

        if(e.Id == $scope.Id )
        {
          e.Name = $scope.Name;
          e.Salary = $scope.Salary;
        }
     });

   };

   function ClearData() {

     $scope.Id = 0;
     $scope.Name = "";
     $scope.Salary = null;
   }

});
