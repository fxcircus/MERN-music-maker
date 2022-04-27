import axios from 'axios'

const URL = 'http://localhost:3001/api'

export async function createItem() {
    try {

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
        // const deletedItem = await axios ({
        //     method: 'delete',
        //     url: `${URL}/items/${item._id}`
        // })
        return deletedItem
    } catch (error) {
        console.log(error)
    }
}