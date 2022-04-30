import { useState, useEffect, useRef } from 'react'

export default function TimeTracker({ saveProject, time }) {
    const [seconds, setSeconds] = useState(900)
    const [isOn, setIsOn] = useState(false)

    const handleClick = (timerState) => {
        if (timerState === 0) {
            setIsOn(true)
        } else if (timerState === 1) {
            setIsOn(false)
        } else {
            setSeconds(900)
        }
        saveProject({ timeVal: seconds})
    }

    useEffect(() => {
        setSeconds(time)
        let interval
        if(isOn) {
            interval = setInterval(() => {
                setSeconds((prevTime) => prevTime - 1)
            }, 1000)
        } else if (!isOn) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isOn])
    
    return (
        <div>
            <div className='clock'>{new Date(seconds * 1000).toISOString().substr(14, 5)}</div>
            <button onClick={() => handleClick(0)}>▶️</button>
            <button onClick={() => handleClick(1)}>⏹</button>
            <button onClick={() => handleClick(2)}>⏱</button>
        </div>
    )
}