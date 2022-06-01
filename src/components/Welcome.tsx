import 'bootstrap/dist/css/bootstrap.css';

const WelcomePage = () => {
    return (
        <div className="container">
            <nav className="text-end pt-3">
                <span className="link text-uppercase px-3 fw-bold text-white">Home</span>
                <a href="/login" className="link text-uppercase px-3 text-white">Log In</a>
            </nav>
            <div className="d-flex justify-content-evenly align-items-center all-page text-center">
                <div className="w-100">
                    <h1 className="pb-3 ">Welcome to ExamTrivia</h1>
                    <div className="px-3">
                        <p>An app made only to approve this course</p>
                        <p>This app was designed with love and dedication</p>
                        <p>I hope you have fun browsing it</p>
                        <p className="fw-bold text-uppercase">You need to log in if you want to play!</p>
                    </div>
                </div>
                <div className="w-100">
                    <img src={require('../assets/quiz.png')} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;