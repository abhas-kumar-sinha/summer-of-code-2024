import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import PropTypes from 'prop-types';

const NavBar = (props) => {
    const navigate = useNavigate();

    const date = new Date(); // Current date and time

    // Get the day (0 = Sunday, 1 = Monday, ...)
    const dayIndex = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[dayIndex];

    // Get the date in "dd-mm-yyyy" format
    const day = date.getDate(); // Day of the month
    const month = date.getMonth() + 1; // Month (0 = January, so +1)
    const year = date.getFullYear(); // Full year

    const formattedDate = `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;

    function handleNavigate() {
        navigate(props.navigationValue);
    };

    return (
        <nav className='navbar navbar-expand-lg bg-white px-3 py-3 pb-3 border-bottom'>
        <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
            <img src='/faviconShop.png' alt='Shop Name' width='45' height='45' />
            </a>
            <div className='text-wrapper'>
            <p className='fs-3 space-letters'>DIGITAL</p>
            <p className='lh-1 smaller-text'>{dayName}, {formattedDate}</p>
            </div>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <form className='d-flex ms-auto' role='search'>
                <button
                className='btn-color-light btn px-4 py-2 fs-5 rounded-4 me-4'
                type='button'
                ></button>
                <button
                className='btn-color btn px-5 py-2 fs-5 rounded-4 border-black'
                type='button'
                onClick={() => handleNavigate()}
                >
                {props.buttonValue}
                </button>
            </form>
            </div>
        </div>
        </nav>
    )
}

NavBar.propTypes = {
    buttonValue: PropTypes.string,
    navigationValue: PropTypes.string,
}


export default NavBar
