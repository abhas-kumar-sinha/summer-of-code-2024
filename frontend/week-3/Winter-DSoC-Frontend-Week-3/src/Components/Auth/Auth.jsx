import LoginForm from './loginForm';
import Slider from './slider';
import './login.css'

const Auth = () => {
    const loginSwiper = ["home", "about-us", "blog", "pricing"];
    return (
        <div id='main'>
        <LoginForm />
        <Slider swiperList = {loginSwiper}/>
        </ div>
    )
}

export default Auth;