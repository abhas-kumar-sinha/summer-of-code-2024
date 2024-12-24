import NavBar from './NavBar'
import Aside from './Aside'
import HeroSection from './HeroSection'
import { useState } from 'react'
import { useAppContext } from '../GlobalContext/GlobalContext.jsx';

const Dashboard = () => {

    const {formDataContext} = useAppContext();
    const [formData, setFormData] = useState(formDataContext);

    return (
        <>
        <NavBar buttonValue={"Logout"} navigationValue={"/Authorize"} formData = {formData}/>
        <div className="herosection-wrapper d-flex">
            <Aside formData = {formData} />
            <HeroSection setFormData = {setFormData} formData = {formData} />
        </div>
        </>
    )
}

export default Dashboard