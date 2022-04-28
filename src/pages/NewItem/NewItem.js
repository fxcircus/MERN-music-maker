import { useState } from 'react'
import { createItem } from '../../utilities/items-api'

export default function NewItem() {
    const [formData, setFormData] = useState ({
        title: ""
    })

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createItem(formData)
    }

    return(
        <main className="NewItem">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                />
                <input type="submit" value="Create"/>
            </form>
        </main>
    )
}