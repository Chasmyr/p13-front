import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {setBearerToken, setConnected, setUserData} from '../../slices/login/loginSlice'

const Header = ({isUserConnected = null, dispatch, firstName = null}) => {

    function logout() {
        dispatch(setBearerToken(null))
        setUserData({firstName: null, lastName: null})
        dispatch(setConnected(false))
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img 
                    className="main-nav-logo-image"
                    src={require('../../assets/images/argentBankLogo.png')}
                    alt="Argent Bank Logo"
                />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            <div>
                {isUserConnected ? 
                    <>
                        <Link className="main-nav-item" to="/user">
                            <i className="fa fa-user-circle"></i>
                            {firstName}
                        </Link>
                        <Link className="main-nav-item" to="/" onClick={logout}>
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                :
                    <Link className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                }
            </div>
        </nav>
    )
}

export default connect(
    state => ({
        isUserConnected: state.loginReducer.isConnected,
        firstName: state.loginReducer.firstName
    })
)(Header)