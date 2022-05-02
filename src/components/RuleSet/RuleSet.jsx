import { useState, useEffect } from 'react'

export default function RuleSet( { saveProject, rules }) {
    const [ animate, setAnimate ] = useState (false)
    const [ rootEl, setRootEl ] = useState('')
    const [ scaleEl, setScaleEl ] = useState('')
    const [ tonesEl, setTonesEl ] = useState('')
    const [ bpmEl, setBpmEl ] = useState('')
    const [ soundEl, setSoundEl ] = useState('')

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
        return result
    }

    // Generate new rules:
    const rollDice = () => {
        setAnimate(false)
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

        setAnimate(true)
    }

    useEffect(() => {
        setRootEl(rules.rootVal)
        setScaleEl(rules.scaleVal)
        setTonesEl(rules.tonesVal)
        setBpmEl(rules.bpmVal)
        setSoundEl(rules.soundVal)
    },[])

    useEffect(() => {
        saveProject({
            rootVal: rootEl,
            scaleVal: scaleEl,
            tonesVal: tonesEl,
            bpmVal: bpmEl,
            soundVal: soundEl
        })
    },[rootEl])

    return (
        <table>
            <tr className="zone">
                <td className="title">Root</td>
                <td className={animate ? "fade-in rule-box" : "rule-box"} >{rootEl}</td>
            </tr>
            <tr className="zone">
                <td className="title">Scale</td>
                <td className={animate ? "fade-in rule-box" : "rule-box"}>{scaleEl}</td>
            </tr>
            <tr>
                <td className="title">Tones</td>
                <div className ={animate ? "fade-in rule-box" : "rule-box"}>{tonesEl}</div>      
            </tr>
            <tr className="zone">
                <td className="title">BPM</td>
                <td className={animate ? "fade-in rule-box" : "rule-box"}>{bpmEl}</td>
            </tr>
            <tr className="zone">
                <td className="title">Sound</td>
                <td className={animate ? "fade-in rule-box" : "rule-box"}>{soundEl}</td>
            </tr>
            
            <button onClick={(e) => {rollDice()}} className ="cube">🎲</button>
        </table>
    )
}