import { useState } from 'react';
import GetTime from './components/GetTime';
import Counter from './components/Counter'
const App = () => {
  const [timeToStartDiscount, setTimeToStartDiscount] = useState('')
  const [timestamp, setTimestamp] = useState(0)
  const [showCounterComponent, setShowCounterComponent] = useState(false)
  const hadleChangeInput = (e) => {
    let value = e.target.value;
    setTimeToStartDiscount(value)
    setShowCounterComponent(false)
    setTimestamp(0)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (timeToStartDiscount.length === 19) {
      let ts = timeToStartDiscount
      let tsDate = ts.substring(0, 10)
      let tsTime = "T" + ts.substring(11, ts.length).replace(/-/g, ':')
      let actualUnixTs = Math.round((new Date()).getTime() / 1000);
      ts = Math.round((new Date(tsDate + tsTime)).getTime() / 1000);
      if (ts <= actualUnixTs) {
        setTimestamp(ts)
        setShowCounterComponent(true)
      } else {
        alert('Please insert date earlier then now')
      }
    }

  }
  return (
    <div className="app">
      <GetTime change={hadleChangeInput} actualTime={timeToStartDiscount} handleSubmit={handleSubmit} />
      {showCounterComponent && <Counter unixtimestamp={Number(timestamp)} />}
    </div>
  );
}

export default App;
