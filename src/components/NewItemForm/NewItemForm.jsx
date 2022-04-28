import { useState } from 'react'

export default function Form( { createItem, getItems }) {
    const [formData, setFormData] = useState({
        title:""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await createItem(formData)
        getItems()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>New task:</label>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.newToDo}
            />
        </form>
    )
} 