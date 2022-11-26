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
const dbRef = ref(db, 'quiz/');
// var quiz_content = document.getElementById('quiz_section').innerHTML;

onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        var genHTML = `<div class="col-md-6 my-3">
                            <div class="card">
                                <div class="card-header">
                                    ${childKey}
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Total Questions: ${Object.keys(childData).length}</h5>
                                    
                                    <a href="/quizQuestions.html?quiz=${childKey}" target="_blank" class="btn btn-primary">
                                        Attempt Quiz
                                    </a>
                                </div>
                            </div>
                        </div>`

        document.getElementById('quiz_section').innerHTML += genHTML
    });
}, {
    onlyOnce: true
});