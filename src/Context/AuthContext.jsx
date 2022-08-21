import { createContext, useContext, useState, useEffect } from 'react' 
import { auth, db } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()

function AuthContextProvider({children}){
    const [user, setUser] = useState("")

    async function signUp(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        await setDoc(doc(db, 'users', email), {
            savedMovies: []
        })
    }
 
    function logIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsuscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value = {{ signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}

export {AuthContextProvider}