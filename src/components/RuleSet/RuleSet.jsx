import { useState, useEffect } from 'react'

export default function RuleSet() {
    const [rootEl, setRootEl] = useState('')
    const [scaleEl, setScaleEl] = useState('')
    const [tonesEl, setTonesEl] = useState('')
    const [bpmEl, setBpmEl] = useState('')
    const [soundEl, setSoundEl] = useState('')

    // Global Vars and arrays:
    const maxBpm = 140
    const minBpm = 75
    let scaleIdx = 0
    const roots = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#' , 'G', 'G#']
    const sounds = ['GUITAR', 'BASS', 'PERC', 'PAD', 'SYNTH', 'ARP', 'ACC', 'BOW', 'COIN', 'FX', 'LEAD', 'FUZZ', 'HARMONIX','EBOW','FREEZE', 'LAP STEEL']
    const scales = ['MAJOR', 'MINOR', 'DORIAN', 'PHRYGI', 'LYDIAN', 'MIXO', 'LOCRI']
    const scaleTones = ['T - T - S - T - T - T - S', 'T - S - T - T - S - T - T', 'T - S - T - T - T - S - T', 'S - T - T - T - S - T - T', 'T - T - S - T - S - T - T', 'T - T - S - T - T - S - T', 'S - T - T - S - T - T - T']

    // Random Index Generator Function:
    const getIndex = (num) => {
        let result = Math.floor(Math.random() * num)
        scaleIdx = result
        // console.log(`scaleIdx = ${scaleIdx}`)
        return result
    }

    // Generate new rules:
    const rollDice = () => {
        setRootEl(roots[getIndex(roots.length)])
        setSoundEl(sounds[getIndex(sounds.length)])
        setScaleEl(scales[getIndex(scales.length)])
        setTonesEl(scaleTones[scaleIdx])
        
        let bpmVal = getIndex(maxBpm)
        
        if (bpmVal > maxBpm) {
            console.log(`High! ${bpmVal}`)
            bpmVal = maxBpm
        } else if (bpmVal < minBpm) {
            console.log(`Low! ${bpmVal}`)
            bpmVal = minBpm
        }
        setBpmEl(bpmVal)
    }

    // Initial choices:
    useEffect(() => {
        rollDice()
    },[])


    return (
        <table>
            <tr className="zone">
                <td className="title">ROOT</td>
                <td className="cube res" id="root-text">{rootEl}</td>
            </tr>
            <tr className="zone">
                <td className="title">SCALE</td>
                <td className="cube res" id="scale-text">{scaleEl}</td>
            </tr>
            <tr className="zone">
                <td className="title">BPM</td>
                <td className="cube res" id ="bpm-text">{bpmEl}</td>
            </tr>
            <tr className="zone">
                <td className="title">SOUND</td>
                <td className="cube res" id="sound-text">{soundEl}</td>
            </tr>
            <div className ="cube">{tonesEl}</div>      
            <button onClick={(e) => {rollDice()}} className ="cube">--- ROLL ---</button>
        </table>
    )
}