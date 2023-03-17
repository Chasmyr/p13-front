import { connect } from "react-redux"
import Footer from "../../components/footer"
import Header from "../../components/header"
import {setBearerToken, setConnected, setUserData, setUsername} from '../../slices/login/loginSlice'
import {useNavigate} from 'react-router-dom'
import { useRef, useState } from "react"
import { apiPost } from "../../apiUtils"

const SignIn = ({dispatch, userName = null}) => {

    const navigate = useNavigate()
    const [formError, setFormError] = useState(false)

    const inputUsername = useRef(null)
    const inputPassword = useRef(null)
    const inputRememberMe = useRef(null)

    const handleLogin = (e) => {

        e.preventDefault()

        let body = {
            "email": inputUsername.current.value,
            "password": inputPassword.current.value
        }

        apiPost('user/login', body, null).then(data => {
            if(data.status === 200) {
                setFormError(false)
                if(inputRememberMe.current.checked) {
                    dispatch(setUsername(inputUsername.current.value,))
                } else {
                    dispatch(setUsername(null))
                }
                dispatch(setBearerToken(data.body.token))
                let currentToken = data.body.token
                apiPost('user/profile', null, currentToken).then(data => {
                    if(data.status === 200) {
                        let userData = {
                            firstName: data.body.firstName,
                            lastName: data.body.lastName
                        }
                        dispatch(setUserData(userData))
                        dispatch(setConnected(true))
                        navigate('/user')
                    }
                })
            } else {
                setFormError(true)
            }
        })
    }

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    {formError &&
                        <span className="form-error">Les identifiants de connexion ne sont pas bons.</span>
                    }
                    <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        {userName !== null ? 
                                <input type="text" id="username" ref={inputUsername} defaultValue={userName} />
                            :
                                <input type="text" id="username" ref={inputUsername} />
                        }
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" ref={inputPassword} autoComplete="off" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" ref={inputRememberMe} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" onClick={handleLogin}>
                        Sign In
                    </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default connect(
    state => ({
        isUserConnected: state.loginReducer.isConnected,
        userName: state.loginReducer.userName
    })
)(SignIn)