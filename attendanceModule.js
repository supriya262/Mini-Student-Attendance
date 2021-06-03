var attendanceModule=angular.module("attendanceModule",[]);
    attendanceModule.controller("attendanceTaker",function($scope){
var students=[
    {
        name:"supriya",
        reg:1122222,
        roll:1,
        attendance:"p"
    },

    {
        name:"sachimishra",
        reg:556667722,
        roll:2,
        attendance:"p"
    },
    {
        name:"ovimishra",
        reg:1122546,
        roll:3,
        attendance:"p"
    },
    
    {
        name:"sonam",
        reg:2255222,
        roll:5,
        attendance:"p"
    },
    {
        name:"reena",
        reg:1155227,
        roll:6,
        attendance:"p"
    },
    {
        name:"jyoti",
        reg:5522222,
        roll:7,
        attendance:"p"
    },
    {
        name:"ankur",
        reg:11222255,
        roll:8,
        attendance:"p"
    },
    {
        name:"chirayu",
        reg:11226562,
        roll:9,
        attendance:"p"
    }
    
];
$scope.students = students;
$scope.id="0";
var attendance="p";
var total=students.length;
var p=total;
var a=0;
$scope.getId = (reg,index) => {
    id=reg;
    attendance=students[index].attendance;

    var ele=angular.element(document.getElementById(reg));
    if(attendance == "a"){
        ele.addClass("absentmarked");
        console.log(absent);
        }else{
            ele.removeClass("absentMarked");
        }
    };
$scope.getClass = reg => {
    if(attendance == "a")
    return id == reg ? "absent" : "false";
    else
    return id == reg ? "present" :"false";
};
$scope.totalCount= () => {
    var count=angular.element(document.querySelectorAll(".absentMarked"));
    a=count.length;
    $scope.p=p - a;
    $scope.a=a;
};
$scope.tota=total;
$scope.p = p;
$scope.a = a;
$scope.submitForm= () => {
    alert("form Submitted");
}
});
