import { useEffect, useRef, useState } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { apiPut } from "../../apiUtils"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { setUserData } from "../../slices/login/loginSlice"

const User = ({isUserConnected = null, lastName = null, firstName = null, token = null, dispatch}) => {

    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const inputFirstName = useRef(null)
    const inputLastName = useRef(null)

    useEffect(() => {
        if(!isUserConnected) {
            navigate('/')
        }
    }, [])

    const handleEdit = () => {

        let bodyToSend = {
            firstName: inputFirstName.current.value,
            lastName: inputLastName.current.value
        }

        apiPut('user/profile', bodyToSend, token).then(data => {
            if(data.status === 200) {
                let userData = {
                    firstName: data.body.firstName,
                    lastName: data.body.lastName
                }
                dispatch(setUserData(userData))
                setIsEditing(false)
            }
        })
    }

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <div className="header">
                    {!isEditing ? 
                        <>
                            {firstName !== null && lastName !== null ?
                                <>
                                    <h1>Welcome back<br />{firstName} {lastName}!</h1>
                                    <button className="edit-button" onClick={() => {setIsEditing(true)}}>Edit Name</button>
                                </>
                                :
                                <h1>Welcome back!</h1>
                            }
                        </>
                        : 
                        <>
                            <h1>Welcome back</h1>
                            <div className="edit-user-wrapper">
                                <div className="input-user-container">
                                    <div className="input-wrapper">
                                        <input type="text" id="firstName" defaultValue={firstName} ref={inputFirstName} />
                                    </div>
                                    <div className="input-wrapper">
                                        <input type="text" id="lastName" defaultValue={lastName} ref={inputLastName} />
                                    </div>
                                </div>
                                <div className="edit-user-options">
                                    <button className="edit-button" onClick={handleEdit}>Save</button>
                                    <button className="edit-button" onClick={() => {setIsEditing(false)}}>Cancel</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default connect(
    state => ({
        isUserConnected: state.loginReducer.isConnected,
        firstName: state.loginReducer.firstName,
        lastName: state.loginReducer.lastName,
        token: state.loginReducer.token
    })
)(User)