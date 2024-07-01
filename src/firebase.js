import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAtDXGoSDhOfMuZx7hGPSxxnM3YPxPzcxI",
  authDomain: "netflix-clone-1b9cb.firebaseapp.com",
  projectId: "netflix-clone-1b9cb",
  storageBucket: "netflix-clone-1b9cb.appspot.com",
  messagingSenderId: "32960575282",
  appId: "1:32960575282:web:06f0817fd88e57cd27892b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name,email,password)=>{
try{
   const res = await createUserWithEmailAndPassword(auth,email,password);
   const user = res.user;
   await addDoc(collection(db,"user"),{
      uid:user.uid,
      name,
      authProvider:"local",
      email,
   });
} 
catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const login= async(email,password)=>{
try {
  await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
   console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const  logout = ()=>{
   signOut(auth);
}

export {auth,db,login,signup,logout};