
console.log("==== Results ====");
function gradeCalculation(marks){
    var typeOf = typeof marks ;
    if (marks<=0 || marks>100 || marks == undefined || typeOf != "number") {
        console.log(`In Valid marks : ${marks}`);
}else{
    if (marks>=90) {
        console.log(`Fantastic marks : ${marks} , Your grade is A+`);
    }
    if (marks>=75 && marks<90) {
        console.log(`Excellent marks : ${marks} , Your grade is A`);
    }
    if (marks>=50 && marks<75) {
        console.log(`Good marks : ${marks} , Your grade is B`);
    }
    if (marks>=35 && marks<50) {
        console.log(`Marks is : ${marks} , Your grade is C , Need improvement`);
    }
    if (marks<35) {
        console.log(`Marks is : ${marks} , You are Failed , Try to better next time`);
    }
}
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);

