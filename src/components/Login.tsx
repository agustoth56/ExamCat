import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate();
    const credentials = {
        user: 'thebest',
        password: 'teacher',
    }

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [modalState, setModalState] = useState(Boolean);

    function login(){
        console.log(user);
        console.log(password);
        if(emptyFields() || fieldsNotMatch()){
            setErrorMsg("Please enter valid credentials");
        } else {
            if(user !== credentials.user) {
                setErrorMsg("Please enter valid user");
            } else if(password !== credentials.password) {
                setErrorMsg("Please enter valid password");
            } else {
                navigate("/dashboard");
            }
        }
    }
    

    function onChangeAnyInput() {
        setErrorMsg("");
    }

    function onChangeUser(e: ChangeEvent<HTMLInputElement>) {
        setUser(e.target.value);
        onChangeAnyInput();
    }

    function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
        onChangeAnyInput();
    }

    function emptyFields(): boolean {
        return user === "" && password === "";
    }

    function fieldsNotMatch(): boolean {
        return user !== credentials.user && password !== credentials.password;
    }
    function hint() {
        modalState ? setModalState(false) : setModalState(true)
    }

    return (
        <div className="container">
            <nav className="text-end pt-3">
                <a href="/" className="link text-uppercase px-3">Home</a>
                <span className="link text-uppercase px-3 fw-bold">Log In</span>
            </nav>
            <div className="d-flex justify-content-evenly align-items-center all-page">
                <div className="loginPanel">
                    <p className="label">User</p>
                    <input type="text" name="text" id="text" className="loginInput" value={user} onChange={onChangeUser}/>
                    <p className="label">Password</p>
                    <input type="password" name="password" id="password" className="loginInput" value={password} onChange={onChangePassword}/>
                    <input type="submit" name="login" id="login" className="loginButton" value="Login" onClick={login}/>
                    <div className="d-flex flex-row align-items-center">
                        <span className="error">{errorMsg}</span>
                        <span className="hint" onClick={hint}>Hint</span>
                    </div>
                </div>
            </div>
            {
                modalState ? (
                    <div className="d-flex justify-content-evenly align-items-center modal">
                        <div  className="modalBody">
                            <div className="text-end">
                                <button className="btn-close" onClick={hint}></button>
                            </div>
                            <h1 className="modalTitle">Hint</h1>
                            <p className="modalDescription">I'll give the user credentials just because you looks like a good person</p>
                            <p className="label">User</p>
                            <p>thebest</p>
                            <p className="label">password</p>
                            <p>teacher</p>
                            <p className="please">Please, don't tell anyone about this credentials xD</p>
                        </div>
                    </div>
                ) : (
                    <div style={{display: 'none'}}/>
                )
            }
            
        </div>
        );
};

export default Login;