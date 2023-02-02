import { useState } from 'react'
import './Login.css'

const Login = () => {

    const [inputs, setInputs] = useState()
    const [errors, setErrors] = useState()
// target tá associado a eventos.
    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        const error = value ? false : true
        setInputs({...inputs, [name]: value})
        setErrors({...inputs, [name]: error})

    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <div className='loginForm'>
        <form onSubmit={handleSubmit}>
            <div className='formData'>
            <label>Email</label> 
            <input type="email" name="email" onBlur={handleChange} />
            {errors?.email && <span className='error'>Please fill the email input</span>}
            </div>
            <div className='formData'>
            <label>Password</label>
            <input type="password" name="password" onBlur={handleChange} />
            {/* o and (&&) precisa sempre ter os dois valores true. Uma tag é um valor arbitrário, sempre true. Logo, se o errors for true ele imprime. ? é só para verificar se existe o campo senha ou não */}
            {errors?.password && <span className="error">Plesa fill the password input</span>}
            </div>
            <button type="submit" className='loginButton'>Login</button>
        </form>
        </div>
    )
}

export default Login