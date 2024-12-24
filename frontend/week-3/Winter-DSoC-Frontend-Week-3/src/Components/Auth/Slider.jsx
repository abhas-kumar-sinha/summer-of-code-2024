import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './login.css';

const Slider = (props) => {
    const swiperList = props.swiperList;
    const [isActive, setIsActive] = useState(swiperList[0]);

    const autoSwipe = (swiperList) => {
        const currIdx = swiperList.indexOf(isActive);
        let nextIdx = 0;
        if (currIdx < swiperList.length - 1) {
        nextIdx = currIdx + 1;
        } else {
        nextIdx = 0;
        }
        setIsActive(swiperList[nextIdx]);
    };

    useEffect(() => {
        const swiperList = props.swiperList;
        const interval = setInterval(() => autoSwipe(swiperList), 2000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    });

    const handleIsActiveChange = (e) => {
        setIsActive(e.target.id);
    };

    return (
        <div id="desc-wrapper">
            <div className="navBar">
            {swiperList.map((item) => {
                // Split the item into words and capitalize them
                const wordList = item.split("-");
                const finString = wordList
                .map((element) => 
                    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
                )
                .join(" "); // Join the capitalized words back into a single string

                return (
                <a
                    key={item}
                    onClick={(e) => handleIsActiveChange(e)}
                    id={item}
                    className={isActive === item ? "navOptions nav-active" : "navOptions"}
                >
                    {finString} {/* Render the transformed string */}
                </a>
                );
            })}
        </div>

        <div className="swipeable-content">
            {swiperList.map((item) => {
                return(
                    <div
                    key={item}
                    id={item}
                    className={
                        isActive === item
                        ? `content-img content-${item} is-active-navbar`
                        : `content-img content-${item}`
                    }
                    ></div>
                )
            })}
        </div>
        </div>
    );
};

Slider.propTypes = {
    swiperList: PropTypes.arrayOf(PropTypes.string),
  };

Slider.defaultProps = {
    swiperList: []
}

export default Slider;