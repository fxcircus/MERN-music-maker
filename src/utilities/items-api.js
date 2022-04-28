import axios from 'axios'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:3001/api'

export async function createItem(data) {
    try {
        const newItem = await axios ({
            method: 'post',
            url: `${URL}/items`,
            data: {title: data.title}
        })
        return newItem
    } catch (error) {
        console.log(error)
    }
}

export async function getAllItems() {
    try {
        const itemArr = await axios.get(`${URL}/items`)
        return itemArr
    } catch(error) {
        console.error(error)
    }
}

export async function flipItemStatus(item) {
    try {
        const fetchedItem = await axios ({
            method: 'put',
            url: `${URL}/items/${item._id}`,
            data: {title: item.title, isDone: !item.isDone}

        })
        return fetchedItem
    } catch(error) {
        console.error(error)
    }
}

export async function deleteAnItem(item) {
    try {
        const deletedItem = await axios.delete(`${URL}/items/${item._id}`)
        return deletedItem
    } catch (error) {
        console.log(error)
    }
}