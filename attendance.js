var attendance=angular.module("attendance",[]);
    attendance.controller("studentattendance",function($scope){
var students=[
    {
        sname:"supriya",
        sreg:1122222,
        sroll:1,
        sattendance:"p"
    },

    {
        sname:"sachimishra",
        sreg:556667722,
        sroll:2,
        sattendance:"p"
    },
    {
        sname:"ovimishra",
        sreg:1122546,
        sroll:3,
        sattendance:"p"
    },
    
    {
        sname:"sonam",
        sreg:2255222,
        sroll:5,
        sattendance:"p"
    },
    {
        sname:"jyoti",
        sreg:5522222,
        sroll:7,
        sattendance:"p"
    },
    {
        sname:"ankur",
        sreg:11222255,
        sroll:8,
        sattendance:"p"
    },
    {
        sname:"chirayu",
        sreg:11226562,
        sroll:9,
        sattendance:"p"
    }
    
];
$scope.students = students;
$scope.id="0";
var sattendance="p";
var total=students.length;
var p=total;
var a=0;
$scope.getId = (sreg,index) => {
    id=sreg;
    sattendance=students[index].sattendance;

    var ele=angular.element(document.getElementById(sreg));
    if(sattendance == "a"){
        ele.addClass("absentMarked");
        console.log(absent);
        }else{
            ele.removeClass("absentMarked");
        }
    };
$scope.getClass = sreg => {
    if(sattendance == "a")
    return id == sreg ? "absent" : "false";
    else
    return id == sreg ? "present" :"false";
};
$scope.totalCount= () => {
    var count=angular.element(document.querySelectorAll(".absentMarked"));
    a=count.length;
    $scope.p=p - a;
    $scope.a=a;
};
$scope.tota1=total;
$scope.p = p;
$scope.a = a;
$scope.submitForm= () => {
    alert("form Submitted");
}
});
