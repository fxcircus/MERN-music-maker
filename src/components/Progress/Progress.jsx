import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Progress( props) {
    const [items, setItems] = useState([])
    const [render, setRender] = useState(false)

    const URL = 'http://localhost:3001/api'

    const getItems = async() => {
        try {
            const itemArr = await axios.get(`${URL}/items`)
            setItems(itemArr.data)
        } catch(error) {
            console.error(error)
        }
    }

    const flipStatus = async(item) => {
        console.log(item)
        try {
            await axios({
                method: 'put',
                url:`${URL}/items/${item._id}`,
                data: {title: item.title, isDone: !item.isDone}

            })
            setRender(!render)
            getItems()
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(()=> {
        getItems()
    }, render)

    return (
        <table>
            {
                items.map(item => {
                    return (
                            item.isDone ? 
                            <td className='not-crossed' onClick={(e) => {flipStatus(item)}}>{item.title}</td>
                            :
                            <td className='crossed' onClick={(e) => {flipStatus(item)}}>{item.title}</td>
                    )
                })
            }
        </table>
    )
}