import axios from 'axios'

const URL = 'http://localhost:3001/api'

export async function getAllItems(){
    try {
        const itemArr = await axios.get(`${URL}/items`)
        return itemArr
    } catch(error) {
        console.error(error)
    }
}

export async function flipItemStatus(item){
    try {
        const fetchedItem = await axios({
            method: 'put',
            url:`${URL}/items/${item._id}`,
            data: {title: item.title, isDone: !item.isDone}

        })
        return fetchedItem
    } catch(error) {
        console.error(error)
    }
}