import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const quizKey = urlParams.get('quiz')

document.getElementById('quizName').innerHTML = quizKey

const dbRef = ref(db, `quiz/${quizKey}`);

onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childData)

        var genHTML = `<div class="col-md-6 my-3">
                    <div class="card">
                        <div class="card-header">
                          Question : ${childData.question}
                        </div>
                        <div class="card-body">  
                            <select class="form-control" id="id${childKey}" onchange="checkAnswer('id${childKey}','${childData.correct}')">
                                <option>Select the Option</option>
                                <option value="${childData.options.option1}"> ${childData.options.option1}</option>
                                <option value="${childData.options.option2}"> ${childData.options.option2}</option>
                                <option value="${childData.options.option3}"> ${childData.options.option3}</option>
                                <option value="${childData.options.option4}"> ${childData.options.option4}</option>
                            </select>        
                        </div>

                    </div>
                </div>`
        document.getElementById('question_section').innerHTML += genHTML
    });
}, {
    onlyOnce: true
});


var score = Number(document.getElementById('score').innerHTML)


window.checkAnswer = function (key, correct) {
    var get_element = document.getElementById(`${key}`).value
    document.getElementById(`${key}`).disabled = true

    if (correct == get_element) {
        score = score + 10
    }
    else {
        console.log("Ghlt Hia")
    }

    document.getElementById('score').innerHTML = score


}


