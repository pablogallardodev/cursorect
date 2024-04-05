import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const PROVIDER_GOOGLE = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyDaxoQAe5x085XR6dcekSxP5i3vj2DgwVA",
  authDomain: "blog-fc938.firebaseapp.com",
  projectId: "blog-fc938",
  storageBucket: "blog-fc938.appspot.com",
  messagingSenderId: "117389127485",
  appId: "1:117389127485:web:2e439e2a371686f16e5f54"
}

initializeApp(firebaseConfig)

export function loginGoogle() {
  const auth = getAuth()
  signInWithPopup(auth, PROVIDER_GOOGLE)
  .then((result) => { console.log(result)})
  .catch((error) => { console.log(error)})
}

export const onChangeUser = (setUsuario) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    // console.log(user);
    const usuario = user ? user.displayName || user.email : null
    setUsuario(usuario)
  })
}

export const onSignOut = () => {
  const auth = getAuth()
  signOut(auth)
}

export const registroUsuario = (formData, setFormData) => {
  const auth = getAuth()

  if (!formData.email || !formData.password)
    return

  createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((result) => console.log(result))
  .catch((err) => setFormData({...formData, error: handleError(err.code, err.message) }))
}

export const loginUsuario = (formData, setFormData) => {
  const auth = getAuth()
  console.log(formData);
  if (!formData.email || ! formData.password) return

  signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((result) => console.log(result))
  .catch((err) => setFormData({...formData, error: handleError(err.code, err.message) }))
}

function handleError(code, message) {
  switch (code) {
    case "auth/wrong-password":
      return "Correo o contraseña incorrectos."
    case "auth/user-not-found":
      return "Correo o contraseña incorrectos."
    case "auth/invalid-credential":
      return "Correo o contraseña incorrectos."
    case "auth/invalid-email":
      return "Por favor valida que el correo electrónico este escrito correctamente."
    case "auth/weak-password":
      return "La contraseña debe tener al menos 6 caracteres."
    case "auth/email-already-in-use":
      return "la dirección de correo electrónico ya se encuentra en uso."
    default:
      return message
  }
}