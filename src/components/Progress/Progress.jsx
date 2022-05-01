import { useState, useEffect } from 'react'
import { getAllItems, getProjectItems, flipItemStatus, deleteAnItem, createItem } from '../../utilities/items-api'
import NewItemForm from '../../components/NewItemForm/NewItemForm'
import { Link } from 'react-router-dom'

// import axios from 'axios'

export default function Progress({ saveProject, projectId }) {
    const [items, setItems] = useState([])
    const [render, setRender] = useState(false)

    const getItems = async() => {
        // const response = await getAllItems()
        const response = await getProjectItems(projectId)
        setItems(response.data)
    }

    const flipStatus = async(item) => {
        await flipItemStatus(item)
        setRender(!render)
    }

    const deleteItem = async (item) => {
        const response = await deleteAnItem(item)
        console.log(response)
        setRender(!render)
    }

    useEffect(()=> {
        getItems()
    }, [render])

    useEffect(() => {
        saveProject(items)
    },[items])

    return (
        <main className='progress-component'>
            <NewItemForm createItem={createItem} getItems={getItems} projectId={projectId}/>
            <tr>
                {
                    items.map(item => {
                        return (
                                <th>
                                    <button className='item-button' onClick={(e) => {deleteItem(item)}}>🗑</button>
                                    <button className='item-button' onClick={(e) => {flipStatus(item)}}>✓</button>
                                    <div>
                                        {item.isDone ? 
                                        <div className='crossed'>{item.title}</div>
                                        :
                                        <div className='not-crossed'>{item.title}</div>}
                                    </div>
                                </th>
                        )
                    })
                }
            </tr>
        </main>
    )
}