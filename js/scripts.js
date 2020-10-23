$(document).ready(function() {
  $("form#selector").submit(function (event) {
    event.preventDefault();
    const question1 = parseInt($("input#question1").val());
    const question2 = parseInt($("input#question2").val());
  }
}