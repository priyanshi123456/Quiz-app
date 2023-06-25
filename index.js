let data = [
  {
    question: "what is full form of html",
    a: "hyertx marrkeup lan",
    b: "hyper text markup list",
    c: "hyper tranform markup language",
    d: "hyertext markup language",
    ans: "ans4",
  },
  {
    question: "what is full form of css",
    a: "cascading sheet style",
    b: "cascading style sheet",
    c: "cascading stylish sheet",
    d: "none of them",
    ans: "ans2",
  },
  {
    question: "what is full form of http",
    a: "Hypertext Transfer Protocol",
    b: "Hypertext Transfer priority",
    c: "hyper text tranfrom protocol",
    d: "nono",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector(".submit");
const answers = document.querySelectorAll(".answer");
const showscore = document.querySelector("#showscore");

let count = 0;
let score = 0;
const loading = () => {
  let questionno = data[count];
  question.innerText = questionno.question;
  option1.innerText = questionno.a;
  option2.innerText = questionno.b;
  option3.innerText = questionno.c;
  option4.innerText = questionno.d;
};
loading();

let checking = () => {
  let ans;
  answers.forEach((value) => {
    if (value.checked) {
      ans = value.id;
    }
  });
  return ans;
};

submit.addEventListener("click", () => {
  let answercheck = checking();
  console.log(answercheck);
  if (answercheck === data[count].ans) {
    score++;
  }

  count++;

  if (count < data.length) {
    loading();
  } else {
    showscore.innerHTML = `<h2>Your total score is ${score}/${data.length}</h2>`;
    showscore.classList.remove("scoreboard");
  }
});
