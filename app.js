// const Quizes = require("./questions")

// console.log(Quizes)

const Quizes = [
  {
    Question: "What is full form of HTML?",
    Answer: [
      {
        option: "HyperText Markup Language",
        isTrue: true,
      },
      {
        option: "HyperText Market Language",
        isTrue: false,
      },
      {
        option: "HyperText Mockup Language",
        isTrue: false,
      },
      {
        option: "Hyper Markup Language",
        isTrue: false,
      },
    ],
  },
  {
    Question: "What does CSS stand for?",
    Answer: [
      {
        option: "Cascading Style Sheets",
        isTrue: true,
      },
      {
        option: "Creative Style Sheets",
        isTrue: false,
      },
      {
        option: "Computer Style Sheets",
        isTrue: false,
      },
      {
        option: "Colorful Style Sheets",
        isTrue: false,
      },
    ],
  },
  {
    Question:
      "Which programming language is known as the 'language of the web'?",
    Answer: [
      {
        option: "JavaScript",
        isTrue: true,
      },
      {
        option: "Java",
        isTrue: false,
      },
      {
        option: "Python",
        isTrue: false,
      },
      {
        option: "C++",
        isTrue: false,
      },
    ],
  },
  {
    Question: "What is the output of 'console.log(3 + 2 + '7')' in JavaScript?",
    Answer: [
      {
        option: "327",
        isTrue: true,
      },
      {
        option: "12",
        isTrue: false,
      },
      {
        option: "57",
        isTrue: false,
      },
      {
        option: "NaN",
        isTrue: false,
      },
    ],
  },
  // {
  //   Question: "How do you link a CSS file to your HTML file?",
  //   Answer: [
  //     {
  //       option: "<link rel='stylesheet' href='styles.css'>",
  //       isTrue: true,
  //     },
  //     {
  //       option: "<style src='styles.css'></style>",
  //       isTrue: false,
  //     },
  //     {
  //       option: "<css src='styles.css'></css>",
  //       isTrue: false,
  //     },
  //     {
  //       option: "<link style='styles.css'>",
  //       isTrue: false,
  //     },
  //   ],
  // },
  // {
  //   Question: "What is the correct way to include JavaScript in an HTML file?",
  //   Answer: [
  //     {
  //       option: "<script src='script.js'></script>",
  //       isTrue: true,
  //     },
  //     {
  //       option: "<javascript src='script.js'></javascript>",
  //       isTrue: false,
  //     },
  //     {
  //       option: "<script href='script.js'></script>",
  //       isTrue: false,
  //     },
  //     {
  //       option: "<link rel='javascript' href='script.js'>",
  //       isTrue: false,
  //     },
  //   ],
  // },
  {
    Question:
      "What is the purpose of the 'document.getElementById()' method in JavaScript?",
    Answer: [
      {
        option: "To select an HTML element by its id",
        isTrue: true,
      },
      {
        option: "To select all HTML elements with a specific class",
        isTrue: false,
      },
      {
        option: "To select the first HTML element in the document",
        isTrue: false,
      },
      {
        option: "To select the parent element of an HTML element",
        isTrue: false,
      },
    ],
  },
  // Add more questions here...
];

const quizzes = document.getElementById("quizzes");
const score = document.getElementById("score");
let scoreCount = 0;
let i = 0;
console.log(Quizes.length);
function displayQuiz(arr, pos) {
  // console.log(pos);
  if (pos > arr.length - 1) {
    // console.log(pos);
    quizzes.innerHTML = `Your Result Is , ${scoreCount}`;
  }
  quizzes.innerHTML = `
    
    <div>
    <span class="flex">${pos + 1}. 
    <h1>
    ${Quizes[pos].Question} 
    </h1>
    </span>
    ${Quizes[pos].Answer.map((elem, index) => {
      return ` <div>
          <input type="checkbox" onclick="checkAnswer(${index},${pos})" />
          <span>${elem.option}</span>
        </div>`;
    })}
    </div>
    
    `;
}
function checkAnswer(index, i) {
  for (let j = 0; j < Quizes[i].Answer.length; j++) {
    if (index === j) {
      if (Quizes[i].Answer[j].isTrue) {
        scoreCount += 1;
        score.innerHTML = scoreCount;
        i++;
        // console.log(i);
        quizzes.innerHTML = "";
        displayQuiz(Quizes, i);
      }
    }
  }
}

window.addEventListener("load", displayQuiz(Quizes, 0));
