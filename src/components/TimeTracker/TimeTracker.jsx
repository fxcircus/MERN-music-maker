import { useState, useEffect } from 'react'

export default function TimeTracker() {
    const [seconds, setSeconds] = useState(900)
    const INTERVAL_MS = 5000

    const countDown = (newSeconds) => {
        setTimeout(() => {
            setSeconds(newSeconds - 1)
            console.log(`seconds = ${seconds}`)
            console.log(new Date(newSeconds * 1000).toISOString().substr(14, 5))
            if(newSeconds > 0) {
                return
                countDown(newSeconds)
            } else {
                console.log(`time!`)
            return
            }
        }, INTERVAL_MS);
    }

    useEffect(() => {
        countDown(seconds)
    }, [])
    
    return (
        <div>
            <h3>Time Tracking</h3>
            <h3>{new Date(seconds * 1000).toISOString().substr(14, 5)}</h3>
        </div>
    )
}