import { useEffect, useState } from 'react';
const GetTime = ({ change, actualTime, handleSubmit }) => {
    // const [stringDate, setStringDate] = useState(actualTime)
    // useEffect(() => {
    //     setStringDate(actualTime)
    // }, [actualTime])
    const maxDate = () => {
        return new Date().toISOString().split('.')[0];
    }

    return (
        <div className="get-time-container">
            <h1>Proszę podać datę startu format: YYYY-MM-DD-HH-MM-SS <br /><br />(ROK-MIESIĄC-DZIEŃ-GODZINA-MINUTA-SEKUNDA)</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={actualTime} onChange={change} max={maxDate()}
                    pattern="^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}-[0-2]{1}[0-9]{1}-[0-5]{1}[0-9]{1}-[0-5]{1}[0-9]{1}"
                    title="YYYY-MM-DD-HH-MM-SS" />
                <button type="submit">Potwierdź datę i godzinę</button>
            </form>
        </div>
    );
}

export default GetTime;