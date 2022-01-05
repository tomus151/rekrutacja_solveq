import '../style/GetTime.scss'
const GetTime = ({ change, actualTime, handleSubmit }) => {
    const maxDate = () => {
        return new Date().toISOString().split('.')[0];
    }
    return (
        <div className="get-time-container">
            <h1>Please add start date format: YYYY-MM-DD-HH-MM-SS <br /><br />(YEAR-MONTH-DAY-HOURS-MINUTES-SECONDS)</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={actualTime} onChange={change} max={maxDate()}
                    pattern="^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}-[0-2]{1}[0-9]{1}-[0-5]{1}[0-9]{1}-[0-5]{1}[0-9]{1}$"
                    title="YYYY-MM-DD-HH-MM-SS" />
                <button type="submit">Confirm date and time</button>
            </form>
        </div>
    );
}

export default GetTime;