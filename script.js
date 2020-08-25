//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result = document.getElementById("result");
var newRecipeScore = 0;
var makeAnImpactScore = 0;
var selfCareScore = 0;
var learnSomethingNewScore = 0;
var restart = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var restart = document.getElementById("restart");
function selfCare() {
  selfCareScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

function learnSomethingNew() {
  learnSomethingNewScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

function makeAnImpact() {
  makeAnImpactScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

function newRecipe() {
  newRecipeScore += 1;
  questionCount += 1;

  if (questionCount >= 3) {
    updateResult();
  }
}

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", selfCare);
q1a2.addEventListener("click", learnSomethingNew);
q1a3.addEventListener("click", newRecipe);
q1a4.addEventListener("click", makeAnImpact);
q2a1.addEventListener("click", selfCare);
q2a2.addEventListener("click", newRecipe);
q2a3.addEventListener("click", learnSomethingNew);
q2a4.addEventListener("click", makeAnImpact);
q3a1.addEventListener("click", selfCare);
q3a2.addEventListener("click", newRecipe);
q3a3.addEventListener("click", makeAnImpact);
q3a4.addEventListener("click", learnSomethingNew);
restart.addEventListener("click", restartQuiz);
//#TODO: Define quiz functions here
function updateResult() {
  if (selfCareScore >= 2) {
    result.innerHTML =
      "Practice self care, you deserve it! It can be as little as painting your nails or spending quality time with loved ones. Nourish your mind, body, and soul 💖";
  } else if (newRecipeScore >= 2) {
    result.innerHTML =
      "Try a new recipe! Homeade pizza? Cupcakes? Or even a fancy dish! But be careful, don't burn down your kitchen. Good luck! 😊";
  } else if (learnSomethingNewScore >= 2) {
    result.innerHTML =
      "Learn something new! Have you ever wanted to speak French? Or improve your art skills? Or even try computer programming? There are endless options, so go crazy! (But not too crazy) 😎";
  } else if (makeAnImpactScore >= 2) {
    result.innerHTML =
      "Make an impact on the world! Petition for something that's meaningful to you! Spread awareness! Donate to funds! Start small 💪";
  } else {
    result.innerHTML = "Hmm..you're a weird one. Try taking the quiz again! 🥴";
  }
}
function restartQuiz() {
  result.innerHTML = "Your result is...";
  questionCount = 0;
  makeAnImpact = 0;
  newRecipe = 0;
  selfCare = 0;
  learnSomethingNew = 0;

  
}
