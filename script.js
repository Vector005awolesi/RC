// Get screen size to show tip
if (window.innerWidth > 500 && window.innerHeight > 500){
  alert("Welcome to RC")
}
else{
  alert("Ensure to set your phone's orientation to landscape")
}
// Submit candidate's info
function submit_candidateinfo() {
  var $name = document.getElementById("candidateName").value;
  var $department = document.getElementById("candidateDepartment").value;
  var $class = document.getElementById("candidateClass").value;
  var $present = document.getElementById("present").value;
  if ($department === "Art") {
    document.getElementById("departmentSubject1").innerHTML = "Literature";
    document.getElementById("departmentSubject2").innerHTML = "Government";
    document.getElementById("departmentSubject3").innerHTML = "Crs";
    document.getElementById("d1").innerHTML = "Literature";
    document.getElementById("d2").innerHTML = "Government";
    document.getElementById("d3").innerHTML = "Crs";
  } else if ($department === "Science") {
    document.getElementById("departmentSubject1").innerHTML = "Physics";
    document.getElementById("departmentSubject2").innerHTML = "Geography";
    document.getElementById("departmentSubject3").innerHTML = "Chemistry";
    document.getElementById("d1").innerHTML = "Physics";
    document.getElementById("d2").innerHTML = "Geography";
    document.getElementById("d3").innerHTML = "Chemistry";
  } else if ($department === "Commercial") {
    document.getElementById("departmentSubject1").innerHTML = "Commerce";
    document.getElementById("departmentSubject2").innerHTML = "Account";
    document.getElementById("departmentSubject3").innerHTML = "Government";
    document.getElementById("d1").innerHTML = "Commerce";
    document.getElementById("d2").innerHTML = "Account";
    document.getElementById("d3").innerHTML = "Government";
  } else {
  }
}
// Calculations
function processResult() {
  try {
    document.getElementById("log").style.display = "block";
    document.getElementById("edit").style.display = "none";
    // Storage
    var $name = document.getElementById("candidateName").value;
    var $department = document.getElementById("candidateDepartment").value;
    var $class = document.getElementById("candidateClass").value;
    var $present = document.getElementById("present").value;
    var $session = document.getElementById("session").value;
    var $englishTestScore = document.getElementById("englishTestScore").value;
    var $englishExamScore = document.getElementById("englishExamScore").value;
    var $englishTotalScore = eval($englishExamScore + "+" + $englishTestScore);
    var $mathTestScore = document.getElementById("mathsTestScore").value;
    var $mathExamScore = document.getElementById("mathsExamScore").value;
    var $mathTotalScore = eval($mathExamScore + "+" + $mathTestScore);
    var $civicTestScore = document.getElementById("civicTestScore").value;
    var $civicExamScore = document.getElementById("civicExamScore").value;
    var $civicTotalScore = eval($civicExamScore + "+" + $civicTestScore);
    var $biologyTestScore = document.getElementById("biologyTestScore").value;
    var $biologyExamScore = document.getElementById("biologyExamScore").value;
    var $biologyTotalScore = eval($biologyExamScore + "+" + $biologyTestScore);
    var $agricTestScore = document.getElementById("agricTestScore").value;
    var $agricExamScore = document.getElementById("agricExamScore").value;
    var $agricTotalScore = eval($agricExamScore + "+" + $agricTestScore);
    var $department1TestScore = document.getElementById(
      "department1TestScore"
    ).value;
    var $department1ExamScore = document.getElementById(
      "department1ExamScore"
    ).value;
    var $department1TotalScore = eval(
      $department1ExamScore + "+" + $department1TestScore
    );
    var $department2TestScore = document.getElementById(
      "department2TestScore"
    ).value;
    var $department2ExamScore = document.getElementById(
      "department2ExamScore"
    ).value;
    var $department2TotalScore = eval(
      $department2ExamScore + "+" + $department2TestScore
    );
    var $department3TestScore = document.getElementById(
      "department3TestScore"
    ).value;
    var $department3ExamScore = document.getElementById(
      "department3ExamScore"
    ).value;
    var $department3TotalScore = eval(
      $department3ExamScore + "+" + $department3TestScore
    );
    var $economicsTestScore =
      document.getElementById("economicsTestScore").value;
    var $economicsExamScore =
      document.getElementById("economicsExamScore").value;
    var $economicsTotalScore = eval(
      $economicsExamScore + "+" + $economicsTestScore
    );
    var $computerTestScore = document.getElementById("computerTestScore").value;
    var $computerExamScore = document.getElementById("computerExamScore").value;
    var $computerTotalScore = eval(
      $computerExamScore + "+" + $computerTestScore
    );
    var $f_yTestScore = document.getElementById("f/yTestScore").value;
    var $f_yExamScore = document.getElementById("f/yExamScore").value;
    var $f_yTotalScore = eval($f_yExamScore + "+" + $f_yTestScore);
    var $totalSubject = eval(
      $englishTotalScore +
        "+" +
        $mathTotalScore +
        "+" +
        $civicTotalScore +
        "+" +
        $biologyTotalScore +
        "+" +
        $agricTotalScore +
        "+" +
        $department1TotalScore +
        "+" +
        $department2TotalScore +
        "+" +
        $department3TotalScore +
        "+" +
        $economicsTotalScore +
        "+" +
        $computerTotalScore +
        "+" +
        $f_yTotalScore
    );
    var $subjects = 11;
    var $totalAverage = eval(Math.floor($totalSubject / $subjects));
    // Observer
    if ($department === "Art") {
      document.getElementById("d1").innerHTML = "Literature";
      document.getElementById("d2").innerHTML = "Government";
      document.getElementById("d3").innerHTML = "Crs";
    } else if ($department === "Science") {
      document.getElementById("d1").innerHTML = "Physics";
      document.getElementById("d2").innerHTML = "Geography";
      document.getElementById("d3").innerHTML = "Chemistry";
    } else if ($department === "Commercial") {
      document.getElementById("d1").innerHTML = "Commerce";
      document.getElementById("d2").innerHTML = "Account";
      document.getElementById("d3").innerHTML = "Government";
    } else {
    }
  } catch (error) {
    alert("Please check that the inputs are all filled");
    document.getElementById("log").style.display = "none";
    document.getElementById("edit").style.display = "block"
  }
  var $comment = document.getElementById("teacherComment").value;
  document.getElementById("name_container").innerHTML = "Name: " + $name;
  document.getElementById("class_container").innerHTML = "Class: " + $class;
  document.getElementById("overall_container").innerHTML =
    `<b>Overall: ${$totalAverage}%</b>`;
  document.getElementById("teachers_comment").innerHTML =
    "<h6 style='font-weight:600'><i class='far fa-comment'></i>&nbsp;Teacher's Comment:&nbsp; " + $comment +"</h6>";
    document.getElementById("attendance_container").innerHTML = `Attendance: ${$present}`;
    document.getElementById("session_container").innerHTML = `Session: ${$session}`;
    // DISPLAY PREPARED RESULT
    document.getElementById("englishtScore").value = $englishTestScore;
    document.getElementById("englisheScore").value = $englishExamScore;
    document.getElementById("englishtoScore").value = $englishTotalScore;
    // Maths
    document.getElementById("mathtScore").value = $mathTestScore;
    document.getElementById("matheScore").value = $mathExamScore;
    document.getElementById("mathtoScore").value = $mathTotalScore;
    // Civic
    document.getElementById("civictScore").value = $civicTestScore;
    document.getElementById("civiceScore").value = $civicExamScore;
    document.getElementById("civictoScore").value = $civicTotalScore;
    // Biology
    document.getElementById("biologytScore").value = $biologyTestScore;
    document.getElementById("biologyeScore").value = $biologyExamScore;
    document.getElementById("biologytoScore").value = $biologyTotalScore;
    // Agric
    document.getElementById("agrictScore").value = $agricTestScore;
    document.getElementById("agriceScore").value = $agricExamScore;
    document.getElementById("agrictoScore").value = $agricTotalScore;
    // D1
    document.getElementById("d1tScore").value = $department1TestScore;
    document.getElementById("d1eScore").value = $department1ExamScore;
    document.getElementById("d1toScore").value = $department1TotalScore;
    // D2
    document.getElementById("d2tScore").value = $department2TestScore;
    document.getElementById("d2eScore").value = $department2ExamScore;
    document.getElementById("d2toScore").value = $department2TotalScore;
    // D3
    document.getElementById("d3tScore").value = $department3TestScore;
    document.getElementById("d3eScore").value = $department3ExamScore;
    document.getElementById("d3toScore").value = $department3TotalScore;
    // Economics
    document.getElementById("economicstScore").value = $economicsTestScore;
    document.getElementById("economicseScore").value = $economicsExamScore;
    document.getElementById("economicstoScore").value = $economicsTotalScore;
    // Computer
    document.getElementById("computertScore").value = $computerTestScore;
    document.getElementById("computereScore").value = $computerExamScore;
    document.getElementById("computertoScore").value = $computerTotalScore;
    // f/y
    document.getElementById("f-ytScore").value = $f_yTestScore;
    document.getElementById("f-yeScore").value = $f_yExamScore;
    document.getElementById("f-ytoScore").value = $f_yTotalScore;
    // Grades
    // English
    if ($englishTotalScore > 90) {
      document.getElementById("englishGrade").innerHTML = "A+ Distinction";
    } else if ($englishTotalScore > 80) {
      document.getElementById("englishGrade").innerHTML = "A Very good";
    } else if ($englishTotalScore > 70) {
      document.getElementById("englishGrade").innerHTML = "B Good";
    } else if ($englishTotalScore > 65) {
      document.getElementById("englishGrade").innerHTML = "C Credit";
    } else if ($englishTotalScore > 49) {
      document.getElementById("englishGrade").innerHTML = "D Pass";
    } else if ($englishTotalScore > 39) {
      document.getElementById("englishGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("englishGrade").innerHTML = "F Fail";
    }
    // Maths
    if ($mathTotalScore > 90) {
      document.getElementById("mathGrade").innerHTML = "A+ Distinction";
    } else if ($mathTotalScore > 80) {
      document.getElementById("mathGrade").innerHTML = "A Very good";
    } else if ($mathTotalScore > 70) {
      document.getElementById("mathGrade").innerHTML = "B Good";
    } else if ($mathTotalScore > 65) {
      document.getElementById("mathGrade").innerHTML = "C Credit";
    } else if ($mathTotalScore > 49) {
      document.getElementById("mathGrade").innerHTML = "D Pass";
    } else if ($mathTotalScore > 39) {
      document.getElementById("mathGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("mathGrade").innerHTML = "F Fail";
    }
    // Civic
    if ($civicTotalScore > 90) {
      document.getElementById("civicGrade").innerHTML = "A+ Distinction";
    } else if ($civicTotalScore > 80) {
      document.getElementById("civicGrade").innerHTML = "A Very good";
    } else if ($civicTotalScore > 70) {
      document.getElementById("civicGrade").innerHTML = "B Good";
    } else if ($civicTotalScore > 65) {
      document.getElementById("civicGrade").innerHTML = "C Credit";
    } else if ($civicTotalScore > 49) {
      document.getElementById("civicGrade").innerHTML = "D Pass";
    } else if ($civicTotalScore > 39) {
      document.getElementById("civicGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("civicGrade").innerHTML = "F Fail";
    }
    // Biology
    if ($biologyTotalScore > 90) {
      document.getElementById("biologyGrade").innerHTML = "A+ Distinction";
    } else if ($biologyTotalScore > 80) {
      document.getElementById("biologyGrade").innerHTML = "A Very good";
    } else if ($biologyTotalScore > 70) {
      document.getElementById("biologyGrade").innerHTML = "B Good";
    } else if ($biologyTotalScore > 65) {
      document.getElementById("biologyGrade").innerHTML = "C Credit";
    } else if ($biologyTotalScore > 49) {
      document.getElementById("biologyGrade").innerHTML = "D Pass";
    } else if ($biologyTotalScore > 39) {
      document.getElementById("biologyGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("biologyGrade").innerHTML = "F Fail";
    }
    // Agric
    if ($agricTotalScore > 90) {
      document.getElementById("agricGrade").innerHTML = "A+ Distinction";
    } else if ($agricTotalScore > 80) {
      document.getElementById("agricGrade").innerHTML = "A Very good";
    } else if ($agricTotalScore > 70) {
      document.getElementById("agricGrade").innerHTML = "B Good";
    } else if ($agricTotalScore > 65) {
      document.getElementById("agricGrade").innerHTML = "C Credit";
    } else if ($agricTotalScore > 49) {
      document.getElementById("agricGrade").innerHTML = "D Pass";
    } else if ($agricTotalScore > 39) {
      document.getElementById("agricGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("agricGrade").innerHTML = "F Fail";
    }
    // d1
    if ($department1TotalScore > 90) {
      document.getElementById("d1Grade").innerHTML = "A+ Distinction";
    } else if ($department1TotalScore > 80) {
      document.getElementById("d1Grade").innerHTML = "A Very good";
    } else if ($department1TotalScore > 70) {
      document.getElementById("d1Grade").innerHTML = "B Good";
    } else if ($department1TotalScore > 65) {
      document.getElementById("d1Grade").innerHTML = "C Credit";
    } else if ($department1TotalScore > 49) {
      document.getElementById("d1Grade").innerHTML = "D Pass";
    } else if ($department1TotalScore > 39) {
      document.getElementById("d1Grade").innerHTML = "E Fair";
    } else {
      document.getElementById("d1Grade").innerHTML = "F Fail";
    }
    // d2
    if ($department2TotalScore > 90) {
      document.getElementById("d2Grade").innerHTML = "A+ Distinction";
    } else if ($department2TotalScore > 80) {
      document.getElementById("d2Grade").innerHTML = "A Very good";
    } else if ($department2TotalScore > 70) {
      document.getElementById("d2Grade").innerHTML = "B Good";
    } else if ($department2TotalScore > 65) {
      document.getElementById("d2Grade").innerHTML = "C Credit";
    } else if ($department2TotalScore > 49) {
      document.getElementById("d2Grade").innerHTML = "D Pass";
    } else if ($department2TotalScore > 39) {
      document.getElementById("d2Grade").innerHTML = "E Fair";
    } else {
      document.getElementById("d2Grade").innerHTML = "F Fail";
    }
    // d3
    if ($department3TotalScore > 90) {
      document.getElementById("d3Grade").innerHTML = "A+ Distinction";
    } else if ($department3TotalScore > 80) {
      document.getElementById("d3Grade").innerHTML = "A Very good";
    } else if ($department3TotalScore > 70) {
      document.getElementById("d3Grade").innerHTML = "B Good";
    } else if ($department3TotalScore > 65) {
      document.getElementById("d3Grade").innerHTML = "C Credit";
    } else if ($department3TotalScore > 49) {
      document.getElementById("d3Grade").innerHTML = "D Pass";
    } else if ($department3TotalScore > 39) {
      document.getElementById("d3Grade").innerHTML = "E Fair";
    } else {
      document.getElementById("d3Grade").innerHTML = "F Fail";
    }
    // Economics
    if ($economicsTotalScore > 90) {
      document.getElementById("economicsGrade").innerHTML = "A+ Distinction";
    } else if ($economicsTotalScore > 80) {
      document.getElementById("economicsGrade").innerHTML = "A Very good";
    } else if ($economicsTotalScore > 70) {
      document.getElementById("economicsGrade").innerHTML = "B Good";
    } else if ($economicsTotalScore> 65) {
      document.getElementById("economicsGrade").innerHTML = "C Credit";
    } else if ($economicsTotalScore > 49) {
      document.getElementById("economicsGrade").innerHTML = "D Pass";
    } else if ($economicsTotalScore > 39) {
      document.getElementById("economicsGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("economicsGrade").innerHTML = "F Fail";
    }
    // Computer
    if ($computerTotalScore > 90) {
      document.getElementById("computerGrade").innerHTML = "A+ Distinction";
    } else if ($computerTotalScore> 80) {
      document.getElementById("computerGrade").innerHTML = "A Very good";
    } else if ($computerTotalScore > 70) {
      document.getElementById("computerGrade").innerHTML = "B Good";
    } else if ($computerTotalScore> 65) {
      document.getElementById("computerGrade").innerHTML = "C Credit";
    } else if ($computerTotalScore > 49) {
      document.getElementById("computerGrade").innerHTML = "D Pass";
    } else if ($computerTotalScore > 39) {
      document.getElementById("computerGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("computerGrade").innerHTML = "F Fail";
    }
    // F/y
    if ($f_yTotalScore > 90) {
      document.getElementById("fyGrade").innerHTML = "A+ Distinction";
    } else if ($f_yTotalScore> 80) {
      document.getElementById("fyGrade").innerHTML = "A Very good";
    } else if ($f_yTotalScore > 70) {
      document.getElementById("fyGrade").innerHTML = "B Good";
    } else if ($f_yTotalScore > 65) {
      document.getElementById("fyGrade").innerHTML = "C Credit";
    } else if ($f_yTotalScore > 49) {
      document.getElementById("fyGrade").innerHTML = "D Pass";
    } else if ($f_yTotalScore > 39) {
      document.getElementById("fyGrade").innerHTML = "E Fair";
    } else {
      document.getElementById("fyGrade").innerHTML = "F Fail";
    }

}
function processTotal() {
  // Calculate Maths
  try {
    var $englishTestScore = document.getElementById("englishTestScore").value;
    var $englishExamScore = document.getElementById("englishExamScore").value;
    var $englishTotalScore = eval($englishExamScore + "+" + $englishTestScore);
    document.getElementById("englishTotalScore").value = $englishTotalScore;
    // Calculate English
    var $mathTestScore = document.getElementById("mathsTestScore").value;
    var $mathExamScore = document.getElementById("mathsExamScore").value;
    var $mathTotalScore = eval($mathExamScore + "+" + $mathTestScore);
    document.getElementById("mathsTotalScore").value = $mathTotalScore;
    // Calculate Civic
    var $civicTestScore = document.getElementById("civicTestScore").value;
    var $civicExamScore = document.getElementById("civicExamScore").value;
    var $civicTotalScore = eval($civicExamScore + "+" + $civicTestScore);
    document.getElementById("civicTotalScore").value = $civicTotalScore;
    // Calculate Biology
    var $biologyTestScore = document.getElementById("biologyTestScore").value;
    var $biologyExamScore = document.getElementById("biologyExamScore").value;
    var $biologyTotalScore = eval($biologyExamScore + "+" + $biologyTestScore);
    document.getElementById("biologyTotalScore").value = $biologyTotalScore;
    // Calculate agric
    var $agricTestScore = document.getElementById("agricTestScore").value;
    var $agricExamScore = document.getElementById("agricExamScore").value;
    var $agricTotalScore = eval($agricExamScore + "+" + $agricTestScore);
    document.getElementById("agricTotalScore").value = $agricTotalScore;
    // Calculate department
    var $department1TestScore = document.getElementById(
      "department1TestScore"
    ).value;
    var $department1ExamScore = document.getElementById(
      "department1ExamScore"
    ).value;
    var $department1TotalScore = eval(
      $department1ExamScore + "+" + $department1TestScore
    );
    document.getElementById("department1TotalScore").value =
      $department1TotalScore;
    //   Calculate department2
    var $department2TestScore = document.getElementById(
      "department2TestScore"
    ).value;
    var $department2ExamScore = document.getElementById(
      "department2ExamScore"
    ).value;
    var $department2TotalScore = eval(
      $department2ExamScore + "+" + $department2TestScore
    );
    document.getElementById("department2TotalScore").value =
      $department2TotalScore;
    //   Calculate department3
    var $department3TestScore = document.getElementById(
      "department3TestScore"
    ).value;
    var $department3ExamScore = document.getElementById(
      "department3ExamScore"
    ).value;
    var $department3TotalScore = eval(
      $department3ExamScore + "+" + $department3TestScore
    );
    document.getElementById("department3TotalScore").value =
      $department3TotalScore;
    // Calculate Economics
    var $economicsTestScore =
      document.getElementById("economicsTestScore").value;
    var $economicsExamScore =
      document.getElementById("economicsExamScore").value;
    var $economicsTotalScore = eval(
      $economicsExamScore + "+" + $economicsTestScore
    );
    document.getElementById("economicsTotalScore").value = $economicsTotalScore;
    // Calculate computer
    var $computerTestScore = document.getElementById("computerTestScore").value;
    var $computerExamScore = document.getElementById("computerExamScore").value;
    var $computerTotalScore = eval(
      $computerExamScore + "+" + $computerTestScore
    );
    document.getElementById("computerTotalScore").value = $computerTotalScore;
    // calculate f/y
    var $f_yTestScore = document.getElementById("f/yTestScore").value;
    var $f_yExamScore = document.getElementById("f/yExamScore").value;
    var $f_yTotalScore = eval($f_yExamScore + "+" + $f_yTestScore);
    document.getElementById("f/yTotalScore").value = $f_yTotalScore;
    // Calculate custom
    var $c1 = document.getElementById("customSubject1").value;
    var $c1TestScore = document.getElementById("customSubject1Test").value;
    var $c1ExamScore = document.getElementById("customSubject1Exam").value;
    var $c1TotalScore = eval($c1ExamScore + "+" + $c1TestScore);
    document.getElementById("customSubject1Total").value = $c1TotalScore;
    // custom
    var $c2 = document.getElementById("customSubject2").value;
    var $c2TestScore = document.getElementById("customSubject2Test").value;
    var $c2ExamScore = document.getElementById("customSubject2Exam").value;
    var $c2TotalScore = eval($c2ExamScore + "+" + $c2TestScore);
    document.getElementById("customSubject2Total").value = $c2TotalScore;
  } catch (error) {
    // Bootstrap display alert
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const appendAlert = (message) => {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        `<div class="alert alert-danger alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        "</div>",
      ].join("");

      alertPlaceholder.append(wrapper);
    };
    appendAlert(
      "<i class = 'fas fa-warning fa-1x'></i> Ensure to fill all inputs if there is no custom subject ignore this"
    );
    // alert("Ensure to fill all inputs if there is no custom subject ignore this")
  }
}
function backtoEditboard() {
  document.getElementById("log").style.display = "none";
  document.getElementById("edit").style.display = "block";
}

window.onbeforeprint = () => {
  document.getElementById("print-btn-1").style.opacity = "0";
  document.getElementById("print-btn-2").style.opacity = "0";
  document.getElementById("print-btn-3").style.opacity = "0"; 
  document.getElementById("studentInfo").style.opacity = "0";
}
window.onafterprint = () =>{
  document.getElementById("print-btn-1").style.opacity = "1";
  document.getElementById("print-btn-2").style.opacity = "1";
  document.getElementById("print-btn-3").style.opacity = "1";
  document.getElementById("studentInfo").style.opacity = "1";
}
function openStudentinfo(){
  document.getElementById("rensponsive").style.height ="100%"
}
