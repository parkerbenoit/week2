$(document).ready(function() {
  $("form#selector").submit(function (event) {
    event.preventDefault();
    const question1 = parseInt($("input#question1").val());
    const question2 = parseInt($("input#question2").val());
    const question3 = parseInt($("input#question3").val());
    const question4 = parseInt($("input#question4").val());
    const question5 = parseInt($("input#question5").val());
    $("#selector").toggle();

    if (question1 === question2 || question1 === question3 || question1 === question4 || question1 === question5 || question2 === question3 || question2 === question4 || question2 === question5 || question3 === question4 || question3 === question5 || question4 === question5) {
      $("#output1").show();
    } else if (question4 > question5) {
      $("#output3").show();
    } else if (question5 > 3) {
      $("#output2").show();
    } else if (question4 = 0) {
      $("#output1").show();
    } else if (question2 > 0) {
      $("#output2").show();
    } else {
      $("#output3").show();
    }
  });
});

function refreshPage(){
  window.location.reload();
}