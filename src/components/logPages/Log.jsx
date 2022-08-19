import React, { useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import {animationDelay} from '../../assets/delay'
import {IoMdClose} from 'react-icons/io'

export default function Log({type}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const { signUp, logIn } = useAuth()

    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        setError(null)
        try{
            if(type === "logIn") await logIn(email, password)
            else {await signUp(email, password)}
            navigate('/')
        }catch(err){
            setError(err.message)
        }
    }

    function displayError() {
        return (
            <div className="error-container">
                <IoMdClose 
                    onClick={() => resetUserStates()}
                    className="error-close"
                />
                <p>User invalid<br/> {error} </p>
            </div>
        )
    } 

    function resetUserStates(){
        setError(null)
        setEmail("")
        setPassword("")
    }
  

    function displaySingUp(){
        return (
            <>
                <h1 className='signup-pry-head'>Unlimited movies, TV shows, and more.</h1>
                <h2 className='signup-sec-head'>Watch anywhere. Cancel anytime.</h2>
                <p className='signup-ph'>Ready to watch? Enter your email and password to create your membership.</p>
                <form 
                    className='signup-form'
                    onSubmit={handleSubmit}
                >
                    <input 
                        className='email-input'
                        alt='mail input' 
                        type='text' 
                        placeholder='hello@netflix.com' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        className='password-input'
                        alt='password' 
                        type='password' 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className='signup-btn'>Sign Up</button>
                </form>
            </>
        )
    }

    function displayLogIn(){
        return(
            <>
                <h2 className='log-title'>Log In</h2>
                <form  
                    className='log-form'
                    onSubmit={handleSubmit}
                >
                    <input 
                        className='email-input'
                        alt='mail input' 
                        type='text' 
                        placeholder='hello@netflix.com' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        className='password-input'
                        alt='password' 
                        type='password' 
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className='log-btn'>Log In</button>
                    <div className='row-container'>
                        <label htmlFor='checkbox'>
                            <input id='checkbox' type='checkbox' />
                            <span>Remember me</span>
                        </label>
                        <p>Need help?</p>
                    </div>
                </form>
                <p className='final-ph'>Already subscribed to Netflix?
                    <Link to="/signUp"><span>Sing Up</span></Link> 
                </p>
            </>
        )
    }

    return (
        <div className='log-container'>
            <img 
                alt="Movies background" 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/f2ad5ef1-522a-414e-9eb7-daa4f5d71cab/AR-es-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg' 
                className='signup-bkg-img'
            /> 
            <div className='layer-bkg'></div>
            <motion.div 
                className={type === "logIn" ? 'login-container' : 'signup-container'}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ ease: "easeOut", duration: 0.6, delay: animationDelay.nav}}
            >
                { type === "logIn" ? displayLogIn() : displaySingUp()}
            </motion.div>
            {error && displayError(error)}
        </div>
  )
}
