import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Progress( props) {
    const [items, setItems] = useState([])
    const URL = 'http://localhost:3001/api'

    const getItems = async() => {
        try {
            const itemArr = await axios.get(`${URL}/items`)
            setItems(itemArr.data)
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(()=> {
        getItems(items)
    }, [])

    return (
        <main className='project'>
            {
                items.map(item => {
                    return (
                        <div>{item.title}</div>
                    )
                })
            }
        </main>
    )
}