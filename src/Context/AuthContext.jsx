import { createContext, useContext, useState, useEffect } from 'react' 
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from 'firebase/auth'

const AuthContext = createContext()

function AuthContextProvider({children}){
    const [user, setUser] = useState("")

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
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