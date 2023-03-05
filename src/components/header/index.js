const Header = ({isUserConnected}) => {

    return (
        <nav className="main-nav">
            <a href="/" className="main-nav-logo">
                <img 
                    className="main-nav-logo-image"
                    src={require('../../assets/images/argentBankLogo.png')}
                    alt="Argent Bank Logo"
                />
                <h1 className='sr-only'>Argent Bank</h1>
            </a>
            <div>
                {isUserConnected ? 
                    <>
                        <a className="main-nav-item" href="/user">
                            <i className="fa fa-user-circle"></i>
                            Tony
                        </a>
                        <a className="main-nav-item" href="/">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </a>
                    </>
                :
                    <a className="main-nav-item" href="/signin">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                }
            </div>
        </nav>
    )
}

export default Header