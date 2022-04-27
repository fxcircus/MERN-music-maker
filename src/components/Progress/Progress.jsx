import { useState, useEffect } from 'react'
import { getAllItems,  flipItemStatus } from '../../utilities/items-api'

// import axios from 'axios'

export default function Progress({ saveProject }) {
    const [items, setItems] = useState([])
    const [render, setRender] = useState(false)

    // MK I
    /*
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
    */

    // MK II
    const getItems = async() => {
        const response = await getAllItems()
        setItems(response.data)
        saveProject({ itemsVal: items})
    }

    const flipStatus = async(item) => {
        await flipItemStatus(item)
        setRender(!render)
        getItems()
    }

    useEffect(()=> {
        getItems()
    }, render)

    return (
        <tr>
            {
                items.map(item => {
                    return (
                            <td>
                                <div>
                                    {item.isDone ? 
                                    <div className='not-crossed'>{item.title}</div>
                                    :
                                    <div className='crossed' >{item.title}</div>}
                                </div>
                                <button onClick={(e) => {flipStatus(item)}}>✓</button>
                            </td>
                    )
                })
            }
        </tr>
    )
}