import 'bootstrap/dist/css/bootstrap.css';

const WelcomePage = () => {
    return (
        <div className="container">
            <nav className="text-end pt-3">
                <span className="link text-uppercase px-3 fw-bold">Home</span>
                <a href="/login" className="link text-uppercase px-3">Log In</a>
            </nav>
            <div className="d-flex justify-content-evenly align-items-center all-page text-center">
                <div className="w-100">
                    <h1 className="pb-3 ">Welcome to ExamCats</h1>
                    <div className="px-3">
                        <p>An app made only to approve this course</p>
                        <p>This app was designed with love and dedication</p>
                        <p>I hope you have fun browsing it</p>
                    </div>
                </div>
                <div className="w-100">
                    ACA VA LA LOGICA PARA LA IMAGEN
                    <img src="https://cdn2.thecatapi.com/images/yiOA3V4jW.jpg" alt="" className="img-fluid rounded"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;