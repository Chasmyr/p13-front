import Footer from "../../components/footer"
import Header from "../../components/header"

const ErrorPage = () => {

    return (
        <>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <div className="center-error-page">
                        <span className="error-text">Erreur 404</span>
                        <span className="error-text">Cette page n'existe pas</span>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ErrorPage