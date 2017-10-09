var app = angular.module("hrNetwork", []);

var complaince_questions=[
            {"id":1,"content":"Do you have an I-9 completed for each employee?"},
            {"id":2,"content":"Do you mail a terminated employee's final paycheck to their home?"},
            {"id":3,"content":"Do you know the difference between an exempt and non-exempt employee?"},
            {"id":4,"content":"Do you obtain a release when checking references for new hires?"},
            {"id":5,"content":"Do your employees ever work during their lunch break?"},
            {"id":6,"content":"Do you have a written & updated Safety Plan?"},
            {"id":7,"content":"Do you have a 'Use it or Lose it' Vacation Policy?"},
            {"id":8,"content":"Have you conducted Sexual Harassment training for your employees and supervisors?"},
            {"id":9,"content":"Do you use a Non-Compete Agreement?"},
            {"id":10,"content":"Do you have an Employee Handbook that has been updated in the last year?"}       
        ];

app.controller('myCtrl', function($scope) {   

    var complaince_id =0;
    $scope.count = complaince_questions[complaince_id].id;
    $scope.text = complaince_questions[complaince_id].content; 
        
$scope.previous= function()
   {    
     if(complaince_id<=complaince_questions.length)
            {      complaince_id--;
                if($scope.count<=0)
                    {
                        document.getElementById('btn1').disabled='true';
                    }
                if(complaince_id<complaince_questions.length)
                    {
                    $scope.count = complaince_questions[complaince_id].id;
                    $scope.text = complaince_questions[complaince_id].content;
                    }
            }
   };
 
$scope.next = function()
   {   

     if(complaince_id < complaince_questions.length)
            {
                complaince_id++;
                if(complaince_id>=complaince_questions.length)
                    {
                        document.getElementById('btn2').disabled='true';
                    } 
                if(complaince_id<complaince_questions.length)
                    {
                    $scope.count = complaince_questions[complaince_id].id;
                    $scope.text = complaince_questions[complaince_id].content;
                    }
            }

};
$scope.services_content ="First Text";
$scope.click1 =function()
        {
            $scope.services_content = "First Text"
        };

$scope.click2 =function()
        {
            $scope.services_content = "secodn Text"
        };

    
});