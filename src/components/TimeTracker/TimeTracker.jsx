import { useState, useEffect, useRef } from 'react'

export default function TimeTracker() {
    const [seconds, setSeconds] = useState(900)
    const [isOn, setIsOn] = useState(true)
    // let refTime = useRef(900)
    const INTERVAL_MS = 1000

    // const countDown = (newSeconds) => {
    //     setTimeout(() => {
    //         setSeconds(newSeconds - 1)
    //         console.log(`seconds = ${seconds}`)
    //         console.log(new Date(newSeconds * 1000).toISOString().substr(14, 5))
    //         if(newSeconds > 0) {
    //             return
    //             countDown(newSeconds)
    //         } else {
    //             console.log(`time!`)
    //         return
    //         }
    //     }, INTERVAL_MS);
    // }

    // var intervalID = setInterval(() => {
    //     refTime.current -= 1
    //     setSeconds(refTime)
    //     console.log(`seconds = ${seconds}`)
    //     clearInterval(100)
    // }, INTERVAL_MS)




    useEffect(() => {
        // intervalID()
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
            <h3>Time Tracking</h3>
            <h3>{new Date(seconds * 1000).toISOString().substr(14, 5)}</h3>
            <button onClick={(e) => setIsOn(true)}>Start</button>
            <button onClick={(e) => setIsOn(false)}>Stop</button>
            <button onClick={(e) => setSeconds(900)}>Reset</button>
        </div>
    )
}