import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js"; // Import Firebase Authentication


const firebaseConfig = {
  apiKey: "AIzaSyBfJcOKPaf4UwInXLR-Qz93BcPBlsCddHE",
  authDomain: "resumebuilder-12acd.firebaseapp.com",
  projectId: "resumebuilder-12acd",
  storageBucket: "resumebuilder-12acd.appspot.com",
  messagingSenderId: "873592080475",
  appId: "1:873592080475:web:013ee759c240911479577e",
  measurementId: "G-22GJF1YWTQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
// console.log(auth);
// const db = getFirestore(app);

const signUpForm = document.querySelector("#sign-up")
signUpForm.addEventListener("submit", e => {
  e.preventDefault()  
  const email = signUpForm['sign-up-email'].value
  const password = signUpForm['sign-up-pass'].value
  
  createUserWithEmailAndPassword(auth,email, password)
  .then(cred =>{
    console.log(cred.user)
    window.location.href = './LogInUp.html'
  })
  .catch(err => console.log("ERRORRRRR             " , err))
})

const signInForm =  document.querySelector("#sign-in")
signInForm.addEventListener('submit', e => {
  e.preventDefault()
  
  const email = signInForm['sign-in-email'].value
  const password = signInForm['sign-in-pass'].value

  signInWithEmailAndPassword( auth, email, password )
    .then((cred) => {
      window.location.href = './home/home.html';
      const user = cred.user;npm 
      console.log(user);
    })
    .catch(err => alert(err.message))
  })