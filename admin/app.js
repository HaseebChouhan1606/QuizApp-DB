import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, push, set, child } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyCkNLCWS-gJ60YiOyliXLRq1QiZrd3PC4s",
    authDomain: "jawanpak-fmp.firebaseapp.com",
    projectId: "jawanpak-fmp",
    storageBucket: "jawanpak-fmp.appspot.com",
    messagingSenderId: "1025576266481",
    appId: "1:1025576266481:web:d6b26b963bf2c977745750"
  })

const db = getDatabase(app);

window.submitQuiz = function () {
    var quizName = document.getElementById('quizName').value
    var numb = Math.random() * 1000000000;
    var mykey = numb.toFixed()
    var quizkey = quizName + mykey.toString();


    var question1 = document.getElementById('questionContent1').value;
    var question1_option1 = document.getElementById('q1option1').value;
    var question1_option2 = document.getElementById('q1option2').value;
    var question1_option3 = document.getElementById('q1option3').value;
    var question1_option4 = document.getElementById('q1option4').value;
    var question1_correct = document.getElementById('q1Correct').value;

    var ques1 = {
        question: question1,
        options: {
            option1: question1_option1,
            option2: question1_option2,
            option3: question1_option3,
            option4: question1_option4
        },
        correct: question1_correct
    }

    writeData(ques1, quizkey)


    var question2 = document.getElementById('questionContent2').value;
    var question2_option1 = document.getElementById('q2option1').value;
    var question2_option2 = document.getElementById('q2option2').value;
    var question2_option3 = document.getElementById('q2option3').value;
    var question2_option4 = document.getElementById('q2option4').value;
    var question2_correct = document.getElementById('q2Correct').value;

    var ques2 = {
        question: question2,
        options: {
            option1: question2_option1,
            option2: question2_option2,
            option3: question2_option3,
            option4: question2_option4
        },
        correct: question2_correct
    }

    writeData(ques2, quizkey)

    var question3 = document.getElementById('questionContent3').value;
    var question3_option1 = document.getElementById('q3option1').value;
    var question3_option2 = document.getElementById('q3option2').value;
    var question3_option3 = document.getElementById('q3option3').value;
    var question3_option4 = document.getElementById('q3option4').value;
    var question3_correct = document.getElementById('q3Correct').value;

    var ques3 = {
        question: question3,
        options: {
            option1: question3_option1,
            option2: question3_option2,
            option3: question3_option3,
            option4: question3_option4
        },
        correct: question3_correct
    }
    writeData(ques3, quizkey)
}

function writeData(obj, quizkey) {
    const newquizRef = push(child(ref(db), `quiz/${quizkey}`));
    set(newquizRef, obj);
}

