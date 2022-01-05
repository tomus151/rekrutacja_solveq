import { useState, useLayoutEffect } from 'react';
import PropTypes from "prop-types";
const Counter = ({ unixtimestamp }) => {
    const [timeToShow, setTimeToShow] = useState(0)
    let timeout
    const changeTime = () => {
        timeout = setTimeout(() => {
            let actualUnixTs = Math.round((new Date()).getTime() / 1000),
                diff = actualUnixTs - unixtimestamp;
            setTimeToShow(diff)
            changeTime()
        }, 1000)

    }
    useLayoutEffect(() => {
        setTimeToShow(Math.round((new Date()).getTime() / 1000) - unixtimestamp)
        changeTime()
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    const showText = timeToShow < 60 ? `${timeToShow} seconds ago` : `${Math.floor(timeToShow / 60)} minutes ago`
    return (
        <div className="counter-container">
            <h2>Odliczanie</h2>
            <br />
            {showText}
        </div>
    );
}
Counter.propTypes = {
    unixtimestamp: PropTypes.number
};

export default Counter;