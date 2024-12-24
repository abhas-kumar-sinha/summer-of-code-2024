import './Dashboard.css'
import PropType from 'prop-types';
import { useState, useEffect } from 'react';
import { useAppContext } from '../GlobalContext/GlobalContext.jsx';

const Aside = (props) => {

    const {emailContext} = useAppContext();

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Set up an interval to update the time every second
        const intervalId = setInterval(() => {
          setTime(new Date()); // Update time every second
        }, 1000);
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once (on mount)
    
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    function getName() {
        if (!props.formData) {
            return <p>Loading...</p>;
          }
        
        if (props.formData.name === ""){
            return <p>NAME</p>
        };
        
        return <p>{props.formData.name}</p>;
    }

    const email = emailContext;
    return (
      <div className="aside-wrapper border-top p-4">
      <img src="/faviconShop.png" className="rounded-circle mt-1 mb-3 mx-5 opacity-75" alt="Profile Picture" style={{height: "13vw", width: "13vw"}} />

      <p className="fs-2 text-center text-color mb-1">
        {getName()}
      </p>
      <p className="fs-6 text-center element-color text-lowercase">{email.toLowerCase()}</p>

      <div className="role mt-5 mb-5 m-auto rounded-pill element-bg">
        <p className="fs-3 text-center fw-semibold p-1">CASHIER</p>
      </div>

      <p className="text-center pt-3 fs-6 text-secondary">{formattedTime}</p>
      </div>
    )
}

Aside.propTypes = {
    formData: PropType.shape({
        name: PropType.string,
        phoneNumber: PropType.number,
        address: PropType.string,
    })
}

export default Aside