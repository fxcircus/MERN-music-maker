import { useState, useEffect } from 'react'
import Progress from '../../components/Progress/Progress'
import Title from '../../components/Title/Title'
import TimeTracker from '../../components/TimeTracker/TimeTracker'
import Notes from '../../components/Notes/Notes'

export default function Project() {
    return (
        <main className='Project'>
            <Title/>
            <TimeTracker />
            <h1>Items</h1>
            <table>
                <Progress />
            </table>
            <Notes />
        </main>
    )
}