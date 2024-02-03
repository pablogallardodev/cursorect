import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const PROVIDER_GOOGLE = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyDaxoQAe5x085XR6dcekSxP5i3vj2DgwVA",
  authDomain: "blog-fc938.firebaseapp.com",
  projectId: "blog-fc938",
  storageBucket: "blog-fc938.appspot.com",
  messagingSenderId: "117389127485",
  appId: "1:117389127485:web:2e439e2a371686f16e5f54"
}

const app = initializeApp(firebaseConfig)

export function loginGoogle() {
  const auth = getAuth()
  signInWithPopup(auth, PROVIDER_GOOGLE)
  .then((result) => { console.log(result)})
  .catch((error) => { console.log(error)})
}

console.log('Firebase', app.name);