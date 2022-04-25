import { useState, useEffect } from 'react'
// const itemsRouter = require('../../../routes/api/items')
import axios from 'axios'


export default function Project() {
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
            <h1>Items</h1>
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