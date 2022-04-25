import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'
import RuleSet from '../../components/RuleSet/RuleSet'

export default function Project() {
    return (
        <main className='Project'>
            <Title/>
            <hr/>
            <TimeTracker />
            <hr/>
            <RuleSet />
            <hr/>
            <h1>Items</h1>
            <table>
                <Progress />
            </table>
            <hr/>
            <Notes />
        </main>
    )
}