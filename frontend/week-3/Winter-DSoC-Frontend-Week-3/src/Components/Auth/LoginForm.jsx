import { useState } from 'react';
import './login.css';
import BootstrapToast from '../Toast/BootstrapToast';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../GlobalContext/GlobalContext.jsx';


const LoginForm = () => {
    const { setEmailContext } = useAppContext();

    // Navigation
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailContext(e.target.value);
    }

    // updating the password and showing the masked password
    function handlePasswordChange(e) {
        let realPassword = '';

        const input = e.target.value;
        const length = input.length;

        if (length > realPassword.length) {
            realPassword += input[length - 1];
        } else if (length < realPassword.length) {
            realPassword = realPassword.slice(0, length);
        }

        setPassword('*'.repeat(length))
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        navigate("/Dashboard", {state: {email}})
        setToastMsg("You are successfully logged in!");
        setShowToast(true);
        setEmail("")
        setPassword("")
    }

    return (
        <div id="login-wrapper">

        <BootstrapToast
            message={toastMsg}
            show={showToast}
            onClose={() => setShowToast(false)}
        />

        <div className="logo">
        <p style={{ fontFamily: 'Roboto, sans-serif' }}>Digital</p>
        </div>

        <form onSubmit={(e) => handleFormSubmit(e)}>
            <legend className="introContent">
                <p>Welcome Back!</p>
                <p>Please Login into your account.</p>
            </legend>

            <fieldset>
                <ul>
                    <li className="email-section-head">
                        &#10070; Email Section
                    </li>
                </ul>

                <div className="email-login-wrapper">
                    <div className="inputDiv emailDiv">
                        <div className="lineDiv">
                            <label className="formLabel" htmlFor="email">Email Address</label>
                            <input value={email} onChange={(e) => handleEmailChange(e)} required className="form-input-req" type="email"  name="email" id="email" />
                        </div>

                    </div>
                    <div className="inputDiv passwordDiv">
                        <div  style={{border: 'none'}} className="lineDiv">
                            <label className="formLabel" htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => handlePasswordChange(e)} required className="form-input-req" type="text" minLength="8" name="password" id="password" />
                        </div>
                    </div>

                    <div className="forgot-pass-div">
                        <input type="checkbox" id="remember-me" className="features-hover" />
                        <label htmlFor="remember-me" className="remember-me-in hover-underline features-hover">Remember Me</label>
                        <a className="forgot-pass hover-underline features-hover">Forgot Password?</a>
                    </div>

                    <div className="buttons">
                        <button className="btnSub active-btnSub" id="login-btn">Login</button>
                        <button className="btnSub" id="signup-btn">Sign Up</button>
                    </div>

                    <div className="other-login-options">
                        <span className="other-login-head">Or login with</span>
                        <div className="login-options-links">
                            <a className="hover-underline" style={{padding: '0 0.1vw'}} href="#">Facebook</a>
                            <a className="hover-underline" style={{padding: '0 0.1vw'}} href="#">LinkedIn</a>
                            <a className="hover-underline" style={{padding: '0 0.1vw'}} href="#">Google</a>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
        </div >
    )
}

export default LoginForm;