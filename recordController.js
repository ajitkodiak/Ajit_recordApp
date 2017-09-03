var app = angular.module('MyApp', []);

app.controller("MyCtrl" , function($scope, $http)
{
    //Service call to get all records
    $http.get("http://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        $scope.items = response.data;
    });

    $scope.Sort = function(val)
    {
        if($scope.sort == val)
        {           
            $scope.reverse = !$scope.reverse;
        }
        $scope.sort = val;
         $('th a i').each(function()
        {
            $(this).removeClass().addClass('icon-sort');
        }); 
        
        if($scope.reverse)
            {
                $('th .'+val+' i').removeClass().addClass('icon-chevron-up');
            } else {
               $('th .'+val+' i').removeClass().addClass('icon-chevron-down');   
            }
    };
})
