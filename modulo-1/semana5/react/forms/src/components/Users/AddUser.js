import { useEffect, useState } from "react"

const AddUser = () => {

    const [inputs, setInputs] = useState()
    const [errors, setErrors] = useState()
    const [people, setPeople] = useState()

    useEffect(() => {
        const previousPeople = (localStorage.hasOwnProperty('people')) ? localStorage.getItem('people') : []
    }, [])

    useEffect(() => {
        localStorage.setItem("people", JSON.stringify(people))
    })

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        const error = value ? false : true
        setInputs({...inputs, [name]: value})
        setErrors({...inputs, [name]: error})

    }

    const handleSubmit = e => {
        e.preventDefault()
        setPeople(...people, inputs)
        const event = new Event('localStorageUpdated')
        document.dispatchEvent(event)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type="text" name="name" onBlur={handleChange} />
            {errors?.email && <span className='error'>Please fill the email input</span>}

            <label>Age: </label>
            <input type="number" name="age" onBlur={handleChange} />
            {errors?.email && <span className='error'>Please fill the email input</span>}


        </form>
    )
}

export default AddUser