// Event Listener
document.getElementById("computeResults").addEventListener("click", compute);

// Function
function compute() {
  // Variables
  let firstQ = document.getElementById("qOne");
  let secondQ = document.getElementById("qTwo");
  let thirdQ = document.getElementById("qThree");
  let fourthQ = document.getElementById("qFour");
  let fifthQ = document.getElementById("qFive");
  let resultDisplay = document.getElementById("UserResults");
  let response = document.getElementById("userResponse");

  // lower case
  firstQValue = firstQ.value.toLowerCase();
  secondQValue = secondQ.value.toLowerCase();
  thirdQValue = thirdQ.value.toLowerCase();
  fourthQValue = fourthQ.value.toLowerCase();
  fifthQValue = fifthQ.value.toLowerCase();
  let score = 0;

  // Response to Answer's
  if (firstQValue == "yes") {
    firstQ.style.border = "2px solid green";
    document.getElementById("responseOne").innerHTML = "Correct";
    document.getElementById("responseOne").style.color = "green";
    score++;
  } else {
    firstQ.style.border = "2px solid red";
    document.getElementById("responseOne").innerHTML = "Incorrect";
    document.getElementById("responseOne").style.color = "red";
  }

  if (secondQValue == "cheetah") {
    secondQ.style.border = "2px solid green";
    document.getElementById("responseTwo").innerHTML = "Correct";
    document.getElementById("responseTwo").style.color = "green";
    score++;
  } else {
    secondQ.style.border = "2px solid red";
    document.getElementById("responseTwo").innerHTML = "Incorrect";
    document.getElementById("responseTwo").style.color = "red";
  }

  if (thirdQValue == "true") {
    thirdQ.style.border = "2px solid green";
    document.getElementById("responseThree").innerHTML = "Correct";
    document.getElementById("responseThree").style.color = "green";
    score++;
  } else {
    thirdQ.style.border = "2px solid red";
    document.getElementById("responseThree").innerHTML = "Incorrect";
    document.getElementById("responseThree").style.color = "red";
  }

  if (fourthQValue == "yes") {
    fourthQ.style.border = "2px solid green";
    document.getElementById("responseFour").innerHTML = "Correct";
    document.getElementById("responseFour").style.color = "green";
    score++;
  } else {
    fourthQ.style.border = "2px solid red";
    document.getElementById("responseFour").innerHTML = "Incorrect";
    document.getElementById("responseFour").style.color = "red";
  }

  if (
    fifthQValue == "38" ||
    fifthQValue == "38 years and 3 days" ||
    fifthQValue == "38 years" ||
    fifthQValue == "thirty eight" ||
    fifthQValue == "thirty-eight"
  ) {
    fifthQ.style.border = "2px solid green";
    document.getElementById("responseFive").innerHTML = "Correct";
    document.getElementById("responseFive").style.color = "green";
    score++;
  } else {
    fifthQ.style.border = "2px solid red";
    document.getElementById("responseFive").innerHTML = "Incorrect";
    document.getElementById("responseFive").style.color = "red";
  }

  // Results
  let percent = (score / 5) * 100;
  resultDisplay.innerHTML = `${score}/5  (${percent}%)`;

  // Response to results
  if (score == 5) {
    response.innerHTML = "5/5, GREAT JOB!!!";
  } else if (score == 4) {
    response.innerHTML = "4/5, ALMOST THERE";
  } else if (score == 3) {
    response.innerHTML = "ONLY 3/5, I KNOW YOU CAN DO BETTER";
  } else if (score == 2) {
    response.innerHTML = "2/5, BUDDY YOU NEED TO WORK ON THAT CAT KNOWLEDGE";
  } else if (score <= 1) {
    response.innerHTML = "TRY AGAIN NEXT TIME, I KNOW YOU WILL DO BETTER";
  }
}
